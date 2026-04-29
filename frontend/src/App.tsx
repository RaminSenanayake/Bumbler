import { ThemeProvider } from '@/theme-provider';
import Toolbar from '@/components/toolbar';
import VideoInterface from './components/videointerface';

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='flex flex-col h-screen'>
        <Toolbar />
        <VideoInterface />
        <div className='h-18 border-t'>
          controls
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
