# 📘 Data Fetching Flow

> **Tài liệu:** Hướng dẫn implement data fetching pattern  
> **Tech Stack:** React Query + Axios + TypeScript  
> **Dự án:** LHBS Monorepo

---

## 📑 Mục Lục

1. [Kiến Trúc 5 Layers](#1-kiến-trúc-5-layers)
2. [Flow Chuẩn](#2-flow-chuẩn)
3. [Checklist Implementation](#3-checklist-implementation)
4. [Naming Convention](#4-naming-convention)

---

## 1. Kiến Trúc 5 Layers

### 📦 Folder Structure

```
libs/src/
├── types/
│   └── <feature>.interface.ts      # Layer 1: TypeScript Interfaces
├── constants/
│   └── api_endpoints.ts             # Layer 2: API Endpoints
├── axios/
│   └── axios.instance.ts            # Layer 3: Axios Instance
└── services/
    └── <feature>/
        ├── <feature>.api.ts         # Layer 4: API Functions
        └── <feature>.query.ts       # Layer 5: React Query Hooks
```


### 📐 Data Flow

```
Component → useQuery/useMutation → API Function → Axios Instance → Backend
   ↑                                                                   │
   └───────────────── Cache/State ←──────────────────────────────────┘
```

---

## 2. Kiến Trúc Luồng Dữ Liệu

### 📐 Layered Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      COMPONENT LAYER                         │
│  (UI Components sử dụng hooks)                              │
│  Example: LoginForm.tsx, ProfilePage.tsx                    │
└────────────────────┬────────────────────────────────────────┘
                     │ useLogin(), useProfile()
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    QUERY LAYER (*.query.ts)                  │
│  - React Query Hooks (useQuery, useMutation)                │
│  - Query keys management                                     │
│  - Cache management                                          │
│  - Optimistic updates                                        │
└────────────────────┬────────────────────────────────────────┘
                     │ loginApi(), getProfileApi()
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                     API LAYER (*.api.ts)                     │
│  - Pure functions gọi API                                    │
│  - Request/Response transformation                           │
│  - Business logic processing                                 │
└────────────────────┬────────────────────────────────────────┘
                     │ api.post(), api.get()
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                 AXIOS INSTANCE (axios.instance.ts)           │
│  - Base configuration (baseURL, headers)                    │
│  - Request interceptor (auto add token)                     │
│  - Response interceptor (auto refresh token)                │
│  - Error handling                                            │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTP Request
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                        BACKEND API                           │
│  Endpoints: /api/v1/admin/auth/...                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Checklist Implementation

### ✅ Tạo Feature Mới (VD: `auth`)

**Step 1: Define Types** - `types/auth.interface.ts`
```typescript
export interface LoginRequest { email: string; password: string }
export interface LoginResponse { access_token: string; user: User }
export interface User { id: number; name: string; email: string }
```

**Step 2: Add Endpoints** - `constants/api_endpoints.ts`
```typescript
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/v1/admin/auth/login/',
    PROFILE: '/api/v1/admin/auth/profile/'
  }
}
```

**Step 3: Create API Functions** - `services/auth/auth.api.ts`
```typescript
export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, data)
  return response.data
}
```

**Step 4: Create Hooks** - `services/auth/auth.query.ts`
```typescript
// Query keys
export const authKeys = {
  all: ['auth'] as const,
  profile: () => [...authKeys.all, 'profile'] as const
}

// Mutation hook
export const useLogin = () => {
  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.access_token)
    }
  })
}

// Query hook
export const useProfile = () => {
  return useQuery({
    queryKey: authKeys.profile(),
    queryFn: getProfileApi
  })
}
```

**Step 5: Export** - `index.ts`
```typescript
// Types
export * from './types/auth.interface'
// API
export * from './services/auth/auth.api'
// Hooks
export * from './services/auth/auth.query'
```

**Step 6: Use in Component**
```typescript
import { useLogin } from '@sites/index'

function LoginForm() {
  const login = useLogin()
  
  const handleSubmit = (data) => {
    login.mutate(data, {
      onSuccess: () => navigate('/dashboard')
    })
  }
  
  return <button disabled={login.isPending}>Login</button>
}
```

---

## 4. Naming Convention

### 📝 Quy Tắc Đặt Tên

| Loại | Pattern | Ví Dụ |
|------|---------|-------|
| **Interface Request** | `<Action>Request` | `LoginRequest`, `CreateUserRequest` |
| **Interface Response** | `<Action>Response` | `LoginResponse`, `UserListResponse` |
| **API Function** | `<action>Api` | `loginApi`, `getUserApi` |
| **Query Hook** | `use<Entity>` | `useProfile`, `useUser` |
| **Mutation Hook** | `use<Action>` | `useLogin`, `useCreateUser` |
| **Query Keys** | `<feature>Keys` | `authKeys`, `userKeys` |

### 🔑 Query Keys Structure

```typescript
export const userKeys = {
  all: ['user'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (filters: string) => [...userKeys.lists(), filters] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: number) => [...userKeys.details(), id] as const
}
```

---

## 📋 Quick Reference

### Common Patterns

**GET Request (Query)**
```typescript
export const useUsers = () => useQuery({
  queryKey: userKeys.all,
  queryFn: getUsersApi
})
```

**POST Request (Mutation)**
```typescript
export const useCreateUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all })
    }
  })
}
```

**With Parameters**
```typescript
export const useUser = (id: number) => useQuery({
  queryKey: userKeys.detail(id),
  queryFn: () => getUserApi(id),
  enabled: !!id
})
```

---

**Version:** 2.0  
**Last Updated:** 16/12/2025
