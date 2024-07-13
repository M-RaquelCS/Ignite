import { Search, X } from 'lucide-react'

import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField } from '../../../components/ui/form'
import { useSearchParams } from 'react-router-dom'

const ordersFiltersSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const form = useForm<z.infer<typeof ordersFiltersSchema>>({
    resolver: zodResolver(ordersFiltersSchema),
    defaultValues: {
      orderId: orderId ?? '',
      customerName: customerName ?? '',
      status: status ?? 'all',
    }
  })

  function onSubmit({ customerName, orderId, status }: z.infer<typeof ordersFiltersSchema>) {
    setSearchParams(state => {
      if (orderId){
        state.set('orderId', orderId)
      } else {
        state.delete('orderId')
      }
      if (customerName){
        state.set('customerName', customerName)
      } else {
        state.delete('customerName')
      }
      if (status){
        state.set('status', status)
      } else {
        state.delete('status')
      }

      state.set('page', '1')

      return state
    })
  }

  function handleClearFilters(){
    setSearchParams(state => {
      state.delete('orderId')
      state.delete('customerName')
      state.delete('status')
      state.set('page', '1')

      return state
    })

    form.reset({
      orderId: '',
      customerName: '',
      status: 'all',
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros:</span>

        <FormField
          control={form.control}
          name='orderId'
          render={({ field }) => (
            <Input placeholder="ID do pedido" className="h-8 w-[320px]" {...field} />
          )}
        />

        <FormField
          control={form.control}
          name='customerName'
          render={({ field }) => (
            <Input placeholder="Nome do cliente" className="h-8 w-[320px]" {...field} />
          )}
        />
        
        <FormField
          control={form.control}
          name='status'
          render={({ field: {name, onChange, value, disabled} }) => (
            <Select 
              defaultValue={'all'} 
              name={name} 
              onValueChange={onChange} 
              value={value} 
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        

        <Button type="submit" variant={'secondary'} size={'xs'}>
          <Search className="mr-2 h-4 w-4" />
          Filtrar Resultados
        </Button>
        <Button 
          type="button" 
          variant={'outline'} 
          size={'xs'} 
          onClick={() => handleClearFilters()}
        >
          <X className="mr-2 h-4 w-4" />
          Remover Filtros
        </Button>
      </form>
    </Form>
  )
}
