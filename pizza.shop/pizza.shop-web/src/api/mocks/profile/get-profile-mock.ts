import type { GetProfileResponseBody } from '@/api/profile/get-profile'
import { http, HttpResponse } from 'msw'

export const getProfileMock = http.get<never, never, GetProfileResponseBody>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '81237127123',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  }
)
