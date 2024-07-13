import { api } from '../../lib/axios'

export interface GetManagedRestaurantResponseBody {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | undefined
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponseBody>(
    '/managed-restaurant',
  )

  return response.data
}
