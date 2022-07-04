import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { useCreateSubscriberMutation, usePublishSubscriberMutation } from '../../graphql/generated';
import bgImage from '/src/assets/code-mockup.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from '../../components/Loading';

type FormValues = {
  name: string;
  email: string;
}


export function Subscribe() {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const [createSubscriber, { loading, error }] = useCreateSubscriberMutation();
  const [publishSubscriber, { error: publishError }] = usePublishSubscriberMutation()



  const onSubmit: SubmitHandler<FormValues> = async ({ name, email }) => {

    const subscriberData = await createSubscriber({
      variables: {
        name,
        email
      }
    })

    console.log(subscriberData)

    if (subscriberData) {
      const publishedData = await publishSubscriber({
        variables: {
          email
        }
      })

      if ((error || publishError) && publishedData) {
        toast.error(error ? error.message : publishError?.message + " 😮‍💨", {type: "error"})
      } else {

        toast.success('Cadastrado com sucesso! 🚀')
      }
    }

    
    navigate('/event')

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
              className='bg-gray-900 rounded px-5 h-14 border-none placeholder-gray-300 focus:outline-0 focus:ring-green-300 focus:border-green-300
              hover:border-green-300 transition-all duration-500 ease-in-out'
              type="text"
              placeholder='Seu nome completo'
              {...register('name', {
                required: 'Nome obrigatorio',
              })}
            />
            <p className='text-red-600'>{errors.name?.message}</p>

            <input
              className='bg-gray-900 rounded px-5 h-14 border-none placeholder-gray-300 focus:outline-0 focus:ring-green-300 focus:border-green-300
              hover:border-green-300 transition-all duration-500 ease-in-out invalid:text-red-500
              focus:invalid:border-red-500 focus:invalid:ring-red-500'
              type="email"
              placeholder='Digite seu e-mail'

              {...register('email', {
                required: 'E-mail obrigatorio',

              })}
            />
            <p className='text-red-600'>{errors.email?.message}</p>

            <button
              type='submit'
              className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:cursor-not-allowed'
              disabled={loading}
            >
              {loading ? <Loading /> : 'Garantir minha vaga'}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <img src={bgImage} className='mt-10' alt="mockup" />
    </div>
  )
}