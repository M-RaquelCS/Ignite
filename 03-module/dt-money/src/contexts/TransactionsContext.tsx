import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from 'use-context-selector'
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

  const fetchTransactions = useCallback(
    async(query?: string) => {
      const response = await api.get('transactions', {
        params: {
          _sort: 'createdAt',
          _order:'desc',
          q: query
        }
      })

      setTransactions(response.data)
  }, [])

  // useCallback -> um hook do react que evitará que a função seja recriada na
  // memória se as dependências dela não tiverem sofrido modificações

  const  createTransaction = useCallback(
    async ({category,description,price,type}: CreateTransactionData) => {
      const response = await api.post('transactions', {
        category,
        description,
        price,
        type,
        createdAt: new Date(), 
      })

      setTransactions(state => [response.data,...state])
  }, [])

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