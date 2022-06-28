import { Player, Youtube, DefaultUi } from '@vime/react';
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react';

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from '../../graphql/generated';

interface Props {
  lessonSlug: string;
}

export function Video({ lessonSlug }: Props) {

  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className='flex-1'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          <Player>
            <Youtube
              videoId={data?.lesson.videoId} 
            />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className='p-8 max-w-[1100px] mx-auto'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>
              {data?.lesson.title}
            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              {data?.lesson.description}
            </p>

            {
              data.lesson.teacher && (
                <div className='flex items-center gap-4 mt-6'>
                  <img
                    className='h-16 w-16 rounded-full border-2 border-blue-500'
                    src={data?.lesson.teacher.avatarURL}
                    alt={data?.lesson.teacher.name}
                  />

                  <div className='leading-relaxed'>
                    <strong className='font-bold text-2xl block'>{data?.lesson.teacher.name}</strong>
                    <span className='text-gray-200 text-sm block'>{data?.lesson.teacher.bio}</span>
                  </div>
                </div>
              )
            }
          </div>

          <div className='flex flex-col gap-4'>
            <a href="#" className='p-4 text-sm bg-green-500 flex items-center roundedfont-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors'>
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a href="#" className='p-4 text-sm border border-blue-500 text-blue-500 flex items-center roundedfont-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900'>
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className='gap-8 mt-20 grid grid-cols-2'>
          <a
            className=' flex  transition-colorsflex w-full xl:w-auto bg-gray-700 rounded overflow-hidden items-stretch md:justify-between gap-6 hover:bg-gray-600 border-2 border-green-500 border-opacity-0 hover:-translate-y-2 hover:border-opacity-100 transitions-all duration-500 ease-in-out'
            href=""
          >
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>Material complementar</strong>
              <p className='text-sm text-gray-200 mt-2'>
                Acesse o material complementar para acelerar o seu desenvolvimento.
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
          <a
            className=' flex  transition-colorsflex w-full xl:w-auto bg-gray-700 rounded overflow-hidden items-stretch md:justify-between gap-6 hover:bg-gray-600 border-2 border-green-500 border-opacity-0 hover:-translate-y-2 hover:border-opacity-100 transitions-all duration-500 ease-in-out'
            href=""
          >
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>Wallpapers exclusivos.</strong>
              <p className='text-sm text-gray-200 mt-2'>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina.
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>

  )
}