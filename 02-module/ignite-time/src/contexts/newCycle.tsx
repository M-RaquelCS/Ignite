import { ReactNode, createContext, useContext } from 'react'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
}

type CycleContextProviderProps = {
  children: ReactNode
}

const CyclesContext = createContext({} as CyclesContextType)

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  return (
    <CyclesContext.Provider value={{ activeCycle }}>
      {children}
    </CyclesContext.Provider>
  )
}

export const useCycle = () => {
  return useContext(CyclesContext)
}
