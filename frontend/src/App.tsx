import { ThemeProvider } from '@/theme-provider';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: DefaultNotFoundComponent
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

function DefaultNotFoundComponent() {
  return (
    <div>Cannot find resource</div>
  )
}

export default App
