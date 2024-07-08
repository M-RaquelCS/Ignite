import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { ThemeToggle } from '../../components/theme/theme-toggle'
import { Button } from '../../components/ui/button'
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form'
import { Input } from '../../components/ui/input'

// form with shadcn/ui form doc
const schema = z.object({
  restaurantName: z.string({
    message: 'Por favor insira o nome do estabelecimento.',
  }),
  managerName: z.string({
    message: 'Por favor insira o seu nome.',
  }),
  phone: z.string({
    message: 'Por favor insira um número para contato.',
  }),
  email: z
    .string({ message: 'Por favor insira seu e-mail cadastrado.' })
    .email({ message: 'Por favor insira um e-mail válido.' }),
})

export function SignUp() {
  // send to page with a submit button
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      console.log(values)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Cadastro concluído com sucesso!', {
        description: 'Por favor valide seu e-mail.',
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (err) {
      toast.error('Uh oh! Error ao efetuar ao cadastro.', {
        description:
          'Não foi possível concluir o cadastro, por favor tente novamente mais tarde.',
      })
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <div className="absolute right-8 top-8 flex items-center gap-2">
          <Button variant={'secondary'} asChild>
            <Link to={'/sign-in'}>Ir para login</Link>
          </Button>
          <ThemeToggle />
        </div>
        <div className="flex w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e acompanhe suas vendas!
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="restaurantName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do estabelecimento</FormLabel>
                    <FormControl>
                      <Input
                        id="restaurantName"
                        placeholder="Restaurante da esquina"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="managerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do gestor(a)</FormLabel>
                    <FormControl>
                      <Input
                        id="managerName"
                        placeholder="Fulano de tal"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone para contato</FormLabel>
                    <FormControl>
                      <Input
                        id="phone"
                        placeholder="(99) 99999-9999"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={form.formState.isSubmitting}
                className="w-full"
                type="submit"
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando cadastro...
                  </>
                ) : (
                  'Finalizar cadastro'
                )}
              </Button>

              <p className="px-6 text-center text-xs leading-relaxed text-muted-foreground">
                Ao continuar, você concorda com nossos{' '}
                <a href="" className="underline underline-offset-4">
                  Termos de serviço
                </a>{' '}
                e{' '}
                <a href="" className="underline underline-offset-4">
                  políticas de privacidade
                </a>
                .
              </p>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}
