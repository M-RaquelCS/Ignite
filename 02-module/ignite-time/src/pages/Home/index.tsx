import { createContext, useState } from 'react'
import { HandPalm, Play } from 'phosphor-react'

import { Countdown } from './components/Countdown'
// import { NewCycleForm } from './components/NewCycleForm'

import {
  HomeContainer,
  InterruptCountdownButton,
  StartCountdownButton,
} from './styles'

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
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  // function handleCreateNewCycle({ task, minutesAmount }: newCycleForm) {
  //   const newCycle: Cycle = {
  //     id: String(new Date().getTime()),
  //     task,
  //     minutesAmount,
  //     startDate: new Date(),
  //   }
  //   setCycles((state) => [...state, newCycle])
  //   setActiveCycleId(newCycle.id)
  //   setAmountSecondsPassed(0)
  //   reset()
  // }

  function handleInterruptCycle() {
    setActiveCycleId(null)
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  // const task = watch('task')
  // const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form /* onSubmit={handleSubmit(handleCreateNewCycle)} */>
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
          }}
        >
          {/* <NewCycleForm /> */}
          <Countdown />

          {activeCycle ? (
            <InterruptCountdownButton
              type="button"
              onClick={handleInterruptCycle}
            >
              <HandPalm size={24} />
              Interromper
            </InterruptCountdownButton>
          ) : (
            <StartCountdownButton
              /* disabled={isSubmitDisabled} */ type="submit"
            >
              <Play />
              Começar
            </StartCountdownButton>
          )}
        </CyclesContext.Provider>
      </form>
    </HomeContainer>
  )
}
