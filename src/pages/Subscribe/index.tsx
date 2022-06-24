import { gql, useMutation } from '@apollo/client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Logo } from '../../components/Logo';

type FormValues = {
  name: string;
  email: string;
}

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber ($name: String!, $email: String!) {
      createSubscriber(data: {name: $name email: $email}) {
        id
      }
    }
  `;

export function Subscribe() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  
  const [ createSubscriber, { data } ] = useMutation(CREATE_SUBSCRIBER_MUTATION);


  const onSubmit: SubmitHandler<FormValues> = (data) => {

    console.log(data)
    createSubscriber({
      variables: {
        name: data.name,
        email: data.email
      }
    })
    console.log(data)
  };


  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <div className=' w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
        <div className='max-w-[640px]'>
          <Logo />

          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero com <strong className='text-blue-500'>React</strong>
          </h1>

          <p className='mt-4 text-gray-200 leading-relaxed'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
          <strong className='text-2xl mb-6 block'>Inscreva-se gratuitamente</strong>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-2 w-full'
          >
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type="text"
              placeholder='Seu nome completo'
              {...register('name')}
            />
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type="email"
              placeholder='Digite seu e-mail'
              {...register('email')}
            />

            <button
              type='submit'
              className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors'
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/code-mockup.png" className='mt-10' alt="mockup" />
    </div>
  )
}