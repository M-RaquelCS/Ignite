import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import {
  getManagedRestaurant,
  GetManagedRestaurantResponseBody,
} from '../api/profile/get-managed-restaurant'
import { putProfileRestaurant } from '../api/profile/put-profile-restaurant'
import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Form, FormField } from './ui/form'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

interface IStoreProfile {
  name: string
  description: string | undefined
}

export function StoreProfile() {
  const queryClient = useQueryClient()

  // como a key está igual quando chamou a função em outra parte do projeto, ele
  // não irá buscar novamente, irá usar os dados em cash
  const { data } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const form = useForm<z.infer<typeof storeProfileSchema>>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      // defaultValues preenche antes da requisição terminar ou seja os dados ficam vazios
      name: data?.name ?? '',
      description: data?.description ?? '',
    },
  })

  function updateManagedRestaurantCache({
    name,
    description,
  }: IStoreProfile) {
    const cached = queryClient.getQueryData<GetManagedRestaurantResponseBody>([
      'managed-restaurant',
    ])

    if (cached) {
      // copia o que já tem e altera o que teve alguma modificação
      queryClient.setQueryData<GetManagedRestaurantResponseBody>(
        ['managed-restaurant'],
        {
          ...cached,
          name,
          description,
        },
      )
    }

    return { cached } 
    // ao retornar o onError irá ter acesso e ajudará a manter os dados caso 
    // der algum erro na hora de atualizar
  }

  const { mutateAsync: updateProfile } = useMutation({
    mutationFn: putProfileRestaurant,
    onMutate({ name, description }) {
      const { cached } = updateManagedRestaurantCache({ name, description })
      return { previousProfile : cached}
      // ao retornar o onError irá ter acesso e ajudará a manter os dados caso 
      // der algum erro na hora de atualizar
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateManagedRestaurantCache(context.previousProfile)
      }
    },
  })

  async function onSubmit({
    name,
    description,
  }: z.infer<typeof storeProfileSchema>) {
    try {
      // sign-in process
      await updateProfile({ name, description })

      toast.success('Perfil atualizado com sucesso!', {
        description: 'Perfil do estabelecimento atualizado com sucesso!',
      })
    } catch (err) {
      toast.error('Uh oh! Algo deu errado', {
        description:
          'Não foi possível atualizar o perfil do estabelecimento, por favor tente novamente',
      })
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Nome</Label>
                  <Input className="col-span-3" {...field} />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Descrição</Label>
                  <Textarea className="col-span-3" {...field} />
                </div>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant={'ghost'} type="button">
                  Cancelar
                </Button>
              </DialogClose>

              <Button type="submit" variant={'success'}>
                Salvar
              </Button>
            </DialogFooter>
          </div>
        </form>
      </Form>
    </DialogContent>
  )
}
