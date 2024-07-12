import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@radix-ui/react-dropdown-menu'
import { useMutation, useQueries } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { signOut } from '../api/auth/sign-out'
import { getManagedRestaurant } from '../api/profile/get-managed-restaurant'
import { getProfile } from '../api/profile/get-profile'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

export function AccountMenu() {
  const { '0': profile, '1': managedRestaurant } = useQueries({
    queries: [
      {
        queryKey: ['profile'],
        queryFn: getProfile,
      },
      {
        queryKey: ['managed-restaurant'],
        queryFn: getManagedRestaurant,
      },
    ],
  })

  const { mutateAsync: logout } = useMutation({
    mutationFn: signOut,
  })

  async function handlerLogOut() {
    await logout()
    window.location.href = '/'
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'outline'}
          className="flex select-none items-center gap-2"
        >
          {managedRestaurant.isLoading ? (
            <Skeleton className="h-4 w-40" />
          ) : (
            managedRestaurant.data?.name
          )}

          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-3">
        <DropdownMenuLabel className="flex flex-col">
          {profile.isLoading ? (
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
          ) : (
            <>
              <span className="text-sm">{profile.data?.name}</span>
              <span className="text-xs font-normal text-muted-foreground">
                {profile.data?.email}
              </span>
            </>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem className="flex items-center p-1 pe-2 hover:rounded-sm hover:bg-gray-400/15 hover:outline-none">
          <Building className="mr-2 h-4 w-4" />
          <span className="text-sm">Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem
          className="flex items-center p-1 pe-2 text-rose-500 hover:rounded-sm hover:bg-red-400/15 hover:outline-none dark:text-rose-400"
          onClick={() => handlerLogOut()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span className="text-sm">Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
