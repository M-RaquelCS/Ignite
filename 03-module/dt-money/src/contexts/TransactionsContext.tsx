import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface TransactionProps {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionData {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface TransactionContextType {
  transactions: TransactionProps[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionData) => void;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {

  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function fetchTransactions(query?: string){
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order:'desc',
        q: query
      }
    })

    setTransactions(response.data)
  }

  async function createTransaction({category,description,price,type}: CreateTransactionData){
    const response = await api.post('transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions(state => [response.data,...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}