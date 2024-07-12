import { api } from '../../lib/axios'

export interface SignUpRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function signUpRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: SignUpRestaurantBody) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
