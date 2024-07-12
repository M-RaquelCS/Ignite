import { TicketPlus } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 p-3 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos (diário)
        </CardTitle>
        <TicketPlus className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1 p-3 pt-0">
        <span className="text-2xl font-bold tracking-tight"> 56</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">- 1.5%</span> em
          relação a ontem.
        </p>
      </CardContent>
    </Card>
  )
}
