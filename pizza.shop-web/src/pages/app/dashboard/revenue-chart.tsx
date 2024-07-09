import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  // Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'

const data = [
  { data: '10/12', revenue: 1200 },
  { data: '11/12', revenue: 100 },
  { data: '12/12', revenue: 12200 },
  { data: '13/12', revenue: 10 },
  { data: '14/12', revenue: 200 },
  { data: '15/12', revenue: 80 },
  { data: '16/12', revenue: 400 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={'100%'} height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <CartesianGrid
              vertical={false}
              strokeWidth={'0.5px'}
              strokeOpacity={'0.2'}
            />
            <XAxis dataKey={'data'} axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <Line
              type={'linear'}
              strokeWidth={2}
              dataKey={'revenue'}
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
