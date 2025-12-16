// ============================================================================
// EXAMPLE: Login Form Component
// ============================================================================

import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLogin, type LoginRequest } from '@sites/index'

export function LoginPage() {
  const navigate = useNavigate()
  const login = useLogin()
  const [formData, setFormData] = useState<LoginRequest>({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    login.mutate(formData, {
      onSuccess: () => {
        // Auto redirect sau khi login thành công
        navigate('/dashboard')
      },
      onError: (error: any) => {
        // Handle error
        console.error('Login failed:', error)
        alert('Invalid email or password')
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>

      <button type="submit" disabled={login.isPending}>
        {login.isPending ? 'Logging in...' : 'Login'}
      </button>

      {login.isError && <p className="error">Login failed. Please try again.</p>}
    </form>
  )
}

// ============================================================================
// EXAMPLE: Profile Page with useProfile
// ============================================================================

import { useProfile, useLogout } from '@sites/index'

export function ProfilePage() {
  const { data, isLoading, error } = useProfile()
  const logout = useLogout()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout.mutate(undefined, {
      onSuccess: () => {
        navigate('/login')
      }
    })
  }

  if (isLoading) {
    return <div>Loading profile...</div>
  }

  if (error) {
    return <div>Error loading profile: {error.message}</div>
  }

  if (!data) {
    return <div>No profile data</div>
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <p>Name: {data.user.name}</p>
        <p>Email: {data.user.email}</p>
        <p>Role: {data.user.role}</p>
      </div>
      <button onClick={handleLogout} disabled={logout.isPending}>
        {logout.isPending ? 'Logging out...' : 'Logout'}
      </button>
    </div>
  )
}

// ============================================================================
// EXAMPLE: Protected Route
// ============================================================================

import { Navigate } from 'react-router'
import { useIsAuthenticated } from '@sites/index'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useIsAuthenticated()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

// Usage in routes
/*
import { ProtectedRoute } from './components/ProtectedRoute'

<Route path="/dashboard" element={
  <ProtectedRoute>
    <DashboardPage />
  </ProtectedRoute>
} />
*/

// ============================================================================
// EXAMPLE: Setup QueryClient in root.tsx
// ============================================================================

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from 'react-router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: 0
    }
  }
})

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      {/* Dev tools - only in development */}
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}

// ============================================================================
// EXAMPLE: Header with User Info
// ============================================================================

import { useCurrentUser, useLogout } from '@sites/index'

export function Header() {
  const user = useCurrentUser()
  const logout = useLogout()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout.mutate(undefined, {
      onSuccess: () => {
        navigate('/login')
      }
    })
  }

  if (!user) {
    return (
      <header>
        <a href="/login">Login</a>
      </header>
    )
  }

  return (
    <header>
      <div>Welcome, {user.name}</div>
      <button onClick={handleLogout}>Logout</button>
    </header>
  )
}
