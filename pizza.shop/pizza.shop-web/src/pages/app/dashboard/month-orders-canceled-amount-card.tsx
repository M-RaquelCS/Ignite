import { TicketX } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'
import { getMonthCanceledOrdersAmount } from '../../../api/dashboard/get-month-canceled-orders-amount'
import { useQuery } from '@tanstack/react-query'
import { MetricCardSkeleton } from './loading/metric-card-skeleton'

export function MonthOrdersCanceledAmount() {

  const { data: monthOrdersCanceledAmount } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 p-3 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos Cancelados (mensal)
        </CardTitle>
        <TicketX className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1 p-3 pt-0">
        {monthOrdersCanceledAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">{monthOrdersCanceledAmount.amount.toLocaleString('pt-BR')}</span>
            <p className="text-xs text-muted-foreground">
              {monthOrdersCanceledAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">{monthOrdersCanceledAmount.diffFromLastMonth}%</span> em
                  relação ao mês passado.
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">+ {monthOrdersCanceledAmount.diffFromLastMonth}%</span> em
                  relação ao mês passado.
                </>
              )}
            </p>
          </>
        ): (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
