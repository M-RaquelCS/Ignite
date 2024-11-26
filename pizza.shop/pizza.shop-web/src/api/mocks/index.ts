import { env } from '@/env'
import { setupWorker } from 'msw/browser'

export const worker = setupWorker()

export async function enableWorker() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
