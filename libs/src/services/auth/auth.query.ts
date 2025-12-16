import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { loginApi, logoutApi, getProfileApi } from './auth.api'
import type { LoginRequest, User } from '@sites/types/auth.interface'

/* -------------------------------------------------------------------------- */
/* Query Keys */
/* -------------------------------------------------------------------------- */

export const authKeys = {
  all: ['auth'] as const,
  profile: () => [...authKeys.all, 'profile'] as const,
  user: () => [...authKeys.all, 'user'] as const
}

/* -------------------------------------------------------------------------- */
/* Queries */
/* -------------------------------------------------------------------------- */

/**
 * Hook để lấy user profile
 * Auto refetch khi window focus
 */
export const useProfile = () => {
  return useQuery({
    queryKey: authKeys.profile(),
    queryFn: getProfileApi,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    retry: 1
  })
}

/* -------------------------------------------------------------------------- */
/* Mutations */
/* -------------------------------------------------------------------------- */

/**
 * Hook để login user
 * - Lưu tokens vào localStorage
 * - Lưu user data vào localStorage
 * - Invalidate profile query
 */
export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      // Save tokens to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)
        localStorage.setItem('user', JSON.stringify(data.user))
      }

      // Update query cache
      queryClient.setQueryData(authKeys.profile(), { user: data.user })
      
      // Invalidate và refetch profile
      queryClient.invalidateQueries({ queryKey: authKeys.profile() })
    },
    onError: (error) => {
      console.error('Login failed:', error)
    }
  })
}

/**
 * Hook để logout user
 * - Clear tokens từ localStorage
 * - Clear query cache
 * - Reset tất cả queries
 */
export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // Clear all query cache
      queryClient.clear()
      
      // Reset query client
      queryClient.invalidateQueries()
    },
    onError: (error) => {
      console.error('Logout failed:', error)
    }
  })
}

/* -------------------------------------------------------------------------- */
/* Helper Hooks */
/* -------------------------------------------------------------------------- */

/**
 * Hook để lấy current user từ localStorage
 * Useful cho SSR/client-side checks
 */
export const useCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null
  
  const userStr = localStorage.getItem('user')
  if (!userStr) return null
  
  try {
    return JSON.parse(userStr) as User
  } catch {
    return null
  }
}

/**
 * Hook để check authentication status
 */
export const useIsAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false
  
  const token = localStorage.getItem('access_token')
  return !!token
}
