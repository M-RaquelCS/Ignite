import * as z from "zod";
import { Controller, useForm } from "react-hook-form";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Overlay, Content, Close, TransactionType, TransactionTypeButton } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal(){

  const createTransaction = useContextSelector(TransactionsContext, (context) => {
    return context.createTransaction
  })

  const { control, register, handleSubmit, formState: { isSubmitting }, reset } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  async function handleCreateNewTransaction({ category,description,price,type }: NewTransactionFormInputs) {
    await createTransaction({ category, description, price, type})

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <Close>
          <X size={24} />
        </Close>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text" 
            placeholder="Descrição"
            {...register('description')}
            required
          />
          <input 
            type="number" 
            placeholder="Preço"
            {...register('price', { valueAsNumber: true})}
            required
          />
          <input 
            type="text" 
            placeholder="Categoria"
            {...register('category')}
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton value="income" typetransaction="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton value="outcome" typetransaction="outcome">
                    <ArrowCircleDown size={24} />
                    Saídas
                  </TransactionTypeButton>

                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
        
      </Content>
    </Dialog.Portal>
  )
}