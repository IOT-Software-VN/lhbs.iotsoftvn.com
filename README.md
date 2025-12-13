# 🏫 LHBS Project - Trường Song Ngữ Lạc Hồng

<div align="center">
  <img src=".github/images/Logo-LHBS.png" alt="LHBS Logo" width="200"/>
  <p><strong>Lac Hong Bilingual School - Since 2011</strong></p>
</div>

---

## 📖 Giới Thiệu

**LHBS Project** là hệ thống website cho **Trường Song Ngữ Lạc Hồng** - trường học quốc tế uy tín tại Việt Nam, được thành lập từ năm 2011. Dự án được xây dựng dưới dạng **Monorepo** sử dụng **Nx** để quản lý 4 applications chính.

### 🎯 Thông Tin Dự Án

| | |
|---|---|
| **Khách hàng** | LHBS - Trường Song Ngữ Lạc Hồng |
| **Thực hiện bởi** | ERICSS Developer |
| **Công ty** | IOT Software |
| **Năm thành lập** | 2011 |
| **Kiến trúc** | Monorepo với Nx |

---

## 🌐 Applications

| # | Application | Domain | Port | Mô Tả |
|---|-------------|--------|------|-------|
| 1 | **lhbs.edu.vn** | https://lhbs.edu.vn | 4200 | Website chính |
| 2 | **school.lhbs.edu.vn** | https://school.lhbs.edu.vn | 4201 | School Portal |
| 3 | **bienhoa.galaxy.lhbs.edu.vn** | - | 4202 | Campus Biên Hòa |
| 4 | **longkhanh.galaxy.lhbs.edu.vn** | - | 4203 | Campus Long Khánh |

---

## 🛠️ Tech Stack

| Công Nghệ | Version | Mục Đích |
|-----------|---------|----------|
| **Nx** | 22.2.1 | Monorepo management |
| **React** | 19.x | UI library |
| **React Router** | 7.2.0 | Routing framework (CSR) |
| **Vite** | 7.x | Build tool & dev server |
| **TailwindCSS** | 4.1.x | CSS framework |
| **TypeScript** | 5.9.x | Type system |
| **Vitest** | 4.x | Unit testing |

---

## 🚀 Quick Start

### Yêu Cầu Hệ Thống

- Node.js >= 20.x
- npm >= 10.x

### Cài Đặt

```bash
# Clone repository
git clone <repository-url>
cd LHBS-demo

# Install dependencies
npm install
```

### Development

```bash
# Chạy 1 app
nx dev lhbs.edu.vn

# Chạy nhiều apps
nx run-many --target=dev --projects=lhbs.edu.vn,school.lhbs.edu.vn
```

### Build

```bash
# Build 1 app
nx build lhbs.edu.vn

# Build tất cả apps
nx run-many --target=build --all
```

---

## 📚 Documentation

- [Monorepo Overview](./documents/monorepo-overview.md) - Setup workspace từ đầu
- [Apps Overview](./documents/apps-overview.md) - Hướng dẫn tạo và phát triển apps

---

## 📁 Cấu Trúc Dự Án

```
LHBS-demo/
├── apps/                          # 4 Applications
│   ├── lhbs.edu.vn/
│   ├── school.lhbs.edu.vn/
│   ├── bienhoa.galaxy.lhbs.edu.vn/
│   └── longkhanh.galaxy.lhbs.edu.vn/
├── libs/                          # Shared libraries (future)
├── documents/                     # Documentation
├── .github/images/                # Assets
│   └── Logo-LHBS.png
├── nx.json                        # Nx configuration
├── package.json                   # Dependencies
└── README.md
```

---

## 🔗 Useful Links

### Nx Commands

```bash
# Xem workspace graph
nx graph

# Xem project info
nx show project lhbs.edu.vn

# Run tests
nx test lhbs.edu.vn

# Lint code
nx lint lhbs.edu.vn
```

### Resources

- [Nx Documentation](https://nx.dev)
- [React Router v7](https://reactrouter.com)
- [TailwindCSS v4](https://tailwindcss.com/docs/v4-beta)

---

## 👨‍💻 Developer

**ERICSS Developer**  
IOT Software  

---

## 📄 License

© 2025 LHBS - Trường Song Ngữ Lạc Hồng. All rights reserved.
