import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@radix-ui/react-dropdown-menu'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'outline'}
          className="flex select-none items-center gap-2"
        >
          Pizza Shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-3">
        <DropdownMenuLabel className="flex flex-col">
          <span className="text-sm">Raquel Santos</span>
          <span className="text-xs font-normal text-muted-foreground">
            raquel.santos@outlook.com.br
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem className="flex items-center p-1 pe-2 hover:rounded-sm hover:bg-gray-500/50 hover:outline-none">
          <Building className="mr-2 h-4 w-4" />
          <span className="text-sm">Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem className="flex items-center p-1 pe-2 text-rose-500 hover:rounded-sm hover:bg-red-400/15 hover:outline-none dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span className="text-sm">Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
