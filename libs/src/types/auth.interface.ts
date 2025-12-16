/* -------------------------------------------------------------------------- */
/* Auth Request Interfaces */
/* -------------------------------------------------------------------------- */

export interface LoginRequest {
  email: string
  password: string
}

export interface RefreshTokenRequest {
  refresh_token: string
}

/* -------------------------------------------------------------------------- */
/* Auth Response Interfaces */
/* -------------------------------------------------------------------------- */

export interface LoginResponse {
  access_token: string
  refresh_token: string
  user: User
}

export interface RefreshTokenResponse {
  access_token: string
  refresh_token: string
}

export interface ProfileResponse {
  user: User
}

/* -------------------------------------------------------------------------- */
/* User Interface */
/* -------------------------------------------------------------------------- */

export interface User {
  id: number
  email: string
  name: string
  role: UserRole
  avatar?: string
  created_at: string
  updated_at: string
}

export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
  PARENT = 'parent'
}

/* -------------------------------------------------------------------------- */
/* Auth State Interface */
/* -------------------------------------------------------------------------- */

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}
