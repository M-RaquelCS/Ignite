import { Ticket } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getMonthOrdersAmount } from '../../../api/dashboard/get-month-orders-amount'

export function MonthOrdersAmount() {

  const { data: monthOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: getMonthOrdersAmount
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 p-3 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos (mensal)
        </CardTitle>
        <Ticket className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1 p-3 pt-0">
        {monthOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">{monthOrdersAmount.amount.toLocaleString('pt-BR')}</span>
            <p className="text-xs text-muted-foreground">
              {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">+ {monthOrdersAmount.diffFromLastMonth}%</span> em
                  relação ao mês passado.
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">{monthOrdersAmount.diffFromLastMonth}%</span> em
                  relação ao mês passado.
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
