# 🛠️ React Query DevTools Guide

## 📖 Cách Sử Dụng

### 🔍 Mở DevTools

DevTools chỉ hiển thị trong **development mode**.

**Cách mở:**
1. Chạy app: `nx serve <app-name>`
2. Mở trình duyệt
3. Tìm icon **React Query** ở góc dưới trái màn hình
4. Click vào icon để mở panel

### 🎯 Tính Năng Chính

#### 1. **Query Inspector**
- Xem tất cả queries đang active
- Kiểm tra query key, status, data

#### 2. **Query State**
```typescript
// Status có thể là:
- pending: Đang fetch lần đầu
- success: Fetch thành công
- error: Có lỗi xảy ra
- stale: Data đã cũ, cần refetch
```

#### 3. **Actions**
- **Refetch**: Test lại API call
- **Invalidate**: Đánh dấu query cần refresh
- **Reset**: Xóa error state
- **Remove**: Xóa query khỏi cache

#### 4. **Timeline**
- Theo dõi lifecycle: fetching → success → stale
- Xem query nào fetch nhiều nhất
- Debug performance issues

### 💡 Use Cases

#### Debug Login Flow
```typescript
// Component
const login = useLogin()

// DevTools hiển thị:
Query Key: ['auth', 'login']
Status: pending → success
Observers: 1
Last Updated: 2s ago
```

#### Debug Cache Hit/Miss
```typescript
// Kiểm tra tại sao data không update
Query Key: ['auth', 'profile']
Data Age: 45s / 60s (sẽ stale sau 15s nữa)
Stale Time: 60000ms
```

#### Monitor Refetch
```typescript
// Xem query nào refetch khi focus window
Refetch on Window Focus: false
Refetch on Reconnect: true
Refetch Interval: undefined
```

### 🚫 Troubleshooting

**DevTools không hiện?**
- ✅ Check `import.meta.env.DEV === true`
- ✅ Check package installed: `@tanstack/react-query-devtools`
- ✅ Restart dev server

**Query không update?**
- Check staleTime (mặc định 60s)
- Click "Refetch" để test lại API
- Check "Observers" có component nào đang dùng không

**Version:** 1.0  
**Last Updated:** 17/12/2025
