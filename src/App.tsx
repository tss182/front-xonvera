import { RootComponent } from './pages/_root'
import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router'
import { IndexPage } from './pages/public/index'
import { LoginPage } from './pages/auth/login'
import { RegisterPage } from './pages/auth/register'
import { ForgotPasswordPage } from './pages/auth/forgot-password'
import { DashboardLayout } from './pages/dashboard/_layout'
import { DashboardPage } from './pages/dashboard/index'
import { InvoicesPage } from './pages/dashboard/invoices/index'
import { CreateInvoicePage } from './pages/dashboard/invoices/create'
import { ExpensesPage } from './pages/dashboard/expenses/index'
import { CreateExpensePage } from './pages/dashboard/expenses/create'
import { ReportsPage } from './pages/dashboard/reports'
import { SettingsPage } from './pages/dashboard/settings'

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

// Auth routes
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
})

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: RegisterPage,
})

const forgotPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/forgot-password',
  component: ForgotPasswordPage,
})

// Dashboard layout route
const dashboardLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardLayout,
})

// Dashboard child routes
const dashboardIndexRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/',
  component: DashboardPage,
})

const dashboardInvoicesRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/invoices',
  component: InvoicesPage,
})

const dashboardCreateInvoiceRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/invoices/create',
  component: CreateInvoicePage,
})

const dashboardExpensesRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/expenses',
  component: ExpensesPage,
})

const dashboardCreateExpenseRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/expenses/create',
  component: CreateExpensePage,
})

const dashboardReportsRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/reports',
  component: ReportsPage,
})

const dashboardSettingsRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/settings',
  component: SettingsPage,
})

// Add children to dashboard layout
const dashboardTreeWithChildren = dashboardLayoutRoute.addChildren([
  dashboardIndexRoute,
  dashboardInvoicesRoute,
  dashboardCreateInvoiceRoute,
  dashboardExpensesRoute,
  dashboardCreateExpenseRoute,
  dashboardReportsRoute,
  dashboardSettingsRoute,
])

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  forgotPasswordRoute,
  dashboardTreeWithChildren,
])

// Create router
const router = createRouter({ routeTree })

export default function App() {
  return <RouterProvider router={router} />
}
