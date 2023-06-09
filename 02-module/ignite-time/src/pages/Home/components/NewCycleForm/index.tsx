import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormContainer, TaskInput, MinutesAmountInput } from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa.'),
  minutesAmount: zod
    .number()
    .min(5, 'O mínimo de minutos para uma tarefa é de 60 minutos.')
    .max(60, 'O limite de minutos para uma tarefa é de 60 minutos.'),
})

type newCycleForm = zod.infer<typeof newCycleFormValidationSchema>
// ou
// interface newCycleFrom {
//   task: string
//   minutesAmount: number
// }

export function NewCycleForm() {
  const { handleSubmit, register, watch, reset } = useForm<newCycleForm>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle} // converte o valor dento do activeCycle para true, senão para false
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Ignite To.do" />
        <option value="Fipro" />
        <option value="MEGA" />
        <option value="MouraTech" />
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle} // converte o valor dento do activeCycle para true, senão para false
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
