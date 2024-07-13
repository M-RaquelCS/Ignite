import { api } from '../../lib/axios'

interface PutProfileRestaurantBody {
  description?: string | undefined
  name: string
}

export async function putProfileRestaurant({
  name,
  description,
}: PutProfileRestaurantBody) {

  const response = await api.put<PutProfileRestaurantBody>('/profile', {
    name,
    description,
  })

  return response.data
}
