// import { memo } from 'react' // -> memorizar

import * as z from "zod";
import { useForm } from "react-hook-form";

import { MagnifyingGlass } from "phosphor-react";
import { Container } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

/**
 * Por que um component renderiza?
 * - Hooks changed (mudou estado, contexto, reducer)
 * - Props changed (mudou propriedades)
 * - Parent rerendered (component pai renderizou)
 * 
 * Qual o fluxo de renderização?
 * 1. O React recria o HTML da interface daquele componente
 * 2. Compara a versão do HTML criada com a versão anterior
 * 3. Se mudou alguma coisa, ele reescreve o HTML na tela
 * 
 * Memo:
 * 0. Hooks changed or Props changed (deep comparison)
 * 0.1. Comparar a versão anterior dos hooks e props
 * 0.2. Se mudou algo, ele vai permitir a nova renderização
 */

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){

  const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  })

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register('query')} />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </Container>
  )
}

// export const SearchForm = memo(SearchFormComponent)