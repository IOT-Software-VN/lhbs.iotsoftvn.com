const API_BASE = '/api/v1'

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE}/admin/auth/login/`,
    LOGOUT: `${API_BASE}/admin/auth/logout/`,
    PROFILE: `${API_BASE}/admin/auth/profile/`,
    REFRESH_TOKEN: `${API_BASE}/admin/auth/refresh-token/`
  }
}