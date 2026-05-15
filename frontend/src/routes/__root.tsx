import { Outlet, createRootRoute } from '@tanstack/react-router'
import Toolbar from '@/components/toolbar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='flex flex-col max-h-screen'>
      <Toolbar />
      <Outlet />
    </div>
  )
}
