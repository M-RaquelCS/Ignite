import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-month-amount-card'
import { MonthOrdersAmount } from './month-orders-amount-card'
import { MonthOrdersCanceledAmount } from './month-orders-canceled-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmount />
          <DayOrdersAmountCard />
          <MonthOrdersCanceledAmount />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
        </div>
      </div>
    </>
  )
}
