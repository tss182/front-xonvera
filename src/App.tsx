import { RootComponent } from './pages/_root'
import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router'
import { IndexPage } from './pages/public/index'

const rootRoute = createRootRoute({
  component: RootComponent,
})

//public

// Landing page (root path)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute

])

// Create router
const router = createRouter({ routeTree })

export default function App() {
  return <RouterProvider router={router} />
}
