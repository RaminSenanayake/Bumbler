import { useRef } from 'react';
import { init } from './functions/functions'
import { ThemeProvider } from '@/theme-provider';
import Toolbar from '@/components/toolbar';

function App() {
  const myVideo = useRef<HTMLVideoElement>(null);

  init().then(({ peer, stream }) => {
    myVideo.current!.srcObject = stream;
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='flex flex-col h-screen'>
        <Toolbar />
        <div className="grid grid-flow-col p-3 gap-3 grow">
          <video ref={myVideo} autoPlay className='rounded-4xl place-self-center w-7/12'></video>
        </div>
        <div className='bg-amber-400 h-18'>
          controls
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
