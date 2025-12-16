import { api } from '@sites/axios/axios.instance'
import { API_ENDPOINTS } from '@sites/constants/api_endpoints'
import type {
  LoginRequest,
  LoginResponse,
  ProfileResponse,
  RefreshTokenRequest,
  RefreshTokenResponse
} from '@sites/types/auth.interface'

/* -------------------------------------------------------------------------- */
/* Auth API Services */
/* -------------------------------------------------------------------------- */

/**
 * Login user với email và password
 * @param credentials - Email và password
 * @returns LoginResponse với tokens và user data
 */
export const loginApi = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, credentials)
  return response.data
}

/**
 * Logout user - Clear tokens và session
 */
export const logoutApi = async (): Promise<void> => {
  // Clear tokens from localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
  }
}

/**
 * Get user profile
 * @returns ProfileResponse với user data
 */
export const getProfileApi = async (): Promise<ProfileResponse> => {
  const response = await api.get<ProfileResponse>(API_ENDPOINTS.AUTH.PROFILE)
  return response.data
}

/**
 * Refresh access token
 * @param refreshToken - Refresh token
 * @returns RefreshTokenResponse với new tokens
 */
export const refreshTokenApi = async (
  refreshToken: RefreshTokenRequest
): Promise<RefreshTokenResponse> => {
  const response = await api.post<RefreshTokenResponse>('/api/auth/refresh-token', refreshToken)
  return response.data
}
