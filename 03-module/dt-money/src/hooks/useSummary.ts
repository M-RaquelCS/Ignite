import { useContextSelector } from "use-context-selector"
import { TransactionsContext } from "../contexts/TransactionsContext"
import { useMemo } from "react"

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  // reduce -> reduzir o array em uma nova estrutura -> {income: 0 , outcome: 0, total: 0}
  const summary = useMemo(()=> {
    return transactions.reduce((acumulator, transaction) => {
      if (transaction.type === 'income'){
        acumulator.income += transaction.price
        acumulator.total += transaction.price
      } else {
        acumulator.outcome += transaction.price
        acumulator.total -= transaction.price
      }
      
      return acumulator;
    }, {income: 0 , outcome: 0, total: 0})
    // segundo parametro -> estrutura -> inicial
  }, [transactions])

  return summary
}