import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '../../api/auth/sign-in'
import { ThemeToggle } from '../../components/theme/theme-toggle'
import { Button } from '../../components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form'
import { Input } from '../../components/ui/input'

// form with shadcn/ui form doc
const schema = z.object({
  email: z
    .string({ message: 'Por favor insira seu e-mail cadastrado.' })
    .email({ message: 'Por favor insira um e-mail válido.' }),
})

export function SignIn() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  })

  // mutation => é qualquer ação é uma não é uma ação que listagem, de retorno
  // ex: get -> buscar dados
  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function onSubmit({ email }: z.infer<typeof schema>) {
    try {
      // sign-in process
      await authenticate({ email })

      toast.success('Link de autenticação enviado!', {
        description: 'Enviamos um link de autenticação para seu e-mail.',
        action: {
          label: 'Reenviar',
          onClick: () => {},
        },
      })
    } catch (err) {
      toast.error('Uh oh! Credenciais inválidas', {
        description:
          'Não foi possível enviar o link de autenticação, por favor tente novamente',
      })
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="absolute right-8 top-8 flex items-center gap-2">
          <Button variant={'secondary'} asChild>
            <Link to={'/sign-up'}>Ir para cadastro</Link>
          </Button>
          <ThemeToggle />
        </div>
        <div className="flex w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu e-mail</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="example@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      Por favor entre com um e-mail cadastrado
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Acessar painel
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}
