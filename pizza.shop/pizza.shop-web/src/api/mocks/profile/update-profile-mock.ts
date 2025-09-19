import type { PutProfileRestaurantBody } from '@/api/profile/put-profile-restaurant'
import { http, HttpResponse } from 'msw'

export const updateProfileMock = http.put<never, PutProfileRestaurantBody>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Rocket pizza') {
      return new HttpResponse(null, { status: 204 })
    }

    return new HttpResponse(null, { status: 400 })
  }
)
