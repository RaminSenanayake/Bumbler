import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import Toolbar from '@/components/toolbar'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent
})

function RootComponent() {

  const isNotFound = useRouterState({
    select: (state) => state.statusCode === 404
  })

  return (
    <div className='flex flex-col max-h-screen'>
      {!isNotFound && <Toolbar />}
      <Outlet />
    </div>
  )
}

function NotFoundComponent() {
  return (
    <div>
      not found
    </div>
  )
}
