import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

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
  })

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      console.log(values)

      await new Promise((resolve) => setTimeout(resolve, 2000))

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
        <Button
          variant={'secondary'}
          asChild
          className="absolute right-8 top-8"
        >
          <Link to={'/sign-up'}>Ir para cadastro</Link>
        </Button>
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
