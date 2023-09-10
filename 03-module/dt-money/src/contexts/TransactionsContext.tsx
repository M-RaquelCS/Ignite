import { ReactNode, createContext, useEffect, useState } from "react";

interface TransactionProps {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: TransactionProps[];
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {

  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((response) => response.json())
    .then(data => {
      setTransactions(data);
    })
  }, [])

  return (
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}