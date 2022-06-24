import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Video } from '../../components/Video';
import { NothingSlug } from './NothingSlug';

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        { 
          slug ? 
            <Video lessonSlug={slug} /> 
          : 
            <NothingSlug /> 
        }
        <Sidebar />
      </main>
    </div>
  )
}