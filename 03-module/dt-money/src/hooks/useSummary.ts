import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  // reduce -> reduzir o array em uma nova estrtura -> {income: 0 , outcome: 0, total: 0}
  const summary = transactions.reduce((acumulator, transaction) => {
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

  return summary
}