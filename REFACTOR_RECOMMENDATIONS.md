# Refactor Recommendations - Chi tiết và Quyết định

## 📊 PHÂN TÍCH CHI TIẾT

### 1. DUPLICATE COMPONENTS - PHÂN TÍCH SÂU

#### WelcomeSection - 3 instances

**Campus WelcomeSection:**
- Props: Không có props
- Content: Generic welcome message về hệ thống cơ sở
- Structure: Simple section với background image và text

**Directors WelcomeSection:**
- Props: `WelcomeSectionProps` với `onNavigate?: (path: string) => void` (nhưng không dùng)
- Content: Specific về ban lãnh đạo
- Structure: Image + text layout

**VisionMission WelcomeSection:**
- Props: Không có props  
- Content: Generic welcome message về tầm nhìn sứ mệnh
- Structure: Background decoration với centered text

**Kết luận:** 
- Logic KHÁC NHAU → Không thể extract thành shared component
- **Recommendation:** Rename để tránh naming conflict:
  - `CampusWelcomeSection`
  - `DirectorsWelcomeSection` 
  - `VisionMissionWelcomeSection`

#### TestimonialQuoteSection - 3 instances

**Home TestimonialQuoteSection:**
- Image: `/images/home-page/quote-section/360.png`
- Testimonials: 3 items (specific cho home page)
- Structure: Carousel với testimonials

**VisionMission TestimonialQuoteSection:**
- Image: `/images/base/360.png`
- Testimonials: 3 items (có thể giống hoặc khác)
- Structure: Carousel với testimonials (giống)

**Milestone TestimonialQuoteSection:**
- Image: `/images/base/360.png`
- Testimonials: 3 items (có thể giống hoặc khác)
- Structure: Carousel với testimonials (giống)

**Kết luận:**
- Logic và structure GIỐNG NHAU
- Chỉ khác data (testimonials array) và image path
- **Recommendation:** Extract thành shared component với props:
  ```tsx
  interface TestimonialQuoteSectionProps {
    testimonials: Testimonial[]
    imagePath?: string
  }
  ```

---

## 🎯 QUYẾT ĐỊNH REFACTOR

### Option A: Conservative (Ít thay đổi, an toàn)
**Ưu điểm:**
- Ít risk, không break existing code
- Dễ review
- Nhanh

**Nhược điểm:**
- Vẫn còn một số inconsistency
- Không tối ưu hoàn toàn

**Thực hiện:**
1. ✅ Rename duplicate components (WelcomeSection → module-specific)
2. ✅ Extract TestimonialQuoteSection (logic giống nhau)
3. ✅ Standardize component naming (add Section suffix)
4. ✅ Fix file naming (remove inconsistent -section suffix)
5. ✅ Extract inline constants to mock-data.ts
6. ✅ Fix empty props destructuring
7. ✅ Remove empty types folders

### Option B: Comprehensive (Refactor toàn diện)
**Ưu điểm:**
- Clean, consistent hoàn toàn
- Best practices
- Dễ maintain về sau

**Nhược điểm:**
- Nhiều thay đổi
- Cần test kỹ
- Mất thời gian hơn

**Thực hiện:**
- Tất cả Option A +
- Rename views folder files (home-view.tsx → home-page.tsx)
- Rename mock-data.ts → constants.ts
- Consolidate breadcrumb items
- Standardize all exports
- Fix all variable naming
- Organize imports consistently

### Option C: Hybrid (Cân bằng)
**Ưu điểm:**
- Balance giữa quality và effort
- Fix các vấn đề quan trọng nhất
- Vẫn giữ structure hiện tại

**Thực hiện:**
- Option A (high priority items)
- Thêm: Rename views files (bỏ -view suffix)
- Thêm: Extract breadcrumb items
- Thêm: Fix variable naming (Herobg, getData)

---

## 💡 KHUYẾN NGHỊ: Option C (Hybrid)

**Lý do:**
1. Fix được các vấn đề quan trọng nhất
2. Không quá aggressive
3. Cải thiện đáng kể code quality
4. Dễ review và test

**Chi tiết thực hiện:**

### Phase 1: Naming & Duplicates (High Priority)
1. Rename duplicate WelcomeSection → module-specific names
2. Extract TestimonialQuoteSection → shared component
3. Add Section suffix to components missing it:
   - `EducationLevel` → `EducationLevelSection`
   - `TheNumbers` → `TheNumbersSection`
4. Remove inconsistent -section file suffix:
   - `forms-section.tsx` → `forms.tsx` (vì đã ở trong section/)
5. Rename view files:
   - `home-view.tsx` → `home-page.tsx`
   - `directors-view.tsx` → `directors-page.tsx`
   - etc.

### Phase 2: Constants & Props (Medium Priority)
6. Extract inline constants to mock-data.ts:
   - `newsItems`, `eventItems` trong components
   - `breadcrumbItems` từ views
7. Fix empty props destructuring:
   - `WelcomeSection({}: WelcomeSectionProps)` → `WelcomeSection()`
8. Fix variable naming:
   - `Herobg`, `Herobg1` → `HERO_BACKGROUND_IMAGES`
   - `getData()` → `getDirectorsData()` hoặc specific name

### Phase 3: Cleanup (Low Priority)
9. Remove empty types folders
10. Standardize export patterns (optional)
11. Organize imports (optional)

---

## 📋 CHECKLIST REFACTOR

### ✅ Phase 1: Naming & Duplicates
- [ ] Extract `TestimonialQuoteSection` to `components/common/`
- [ ] Rename `WelcomeSection` in campus → `CampusWelcomeSection`
- [ ] Rename `WelcomeSection` in directors → `DirectorsWelcomeSection`
- [ ] Rename `WelcomeSection` in vision-mission → `VisionMissionWelcomeSection`
- [ ] Rename `EducationLevel` → `EducationLevelSection`
- [ ] Rename `TheNumbers` → `TheNumbersSection`
- [ ] Rename `forms-section.tsx` → `forms.tsx`
- [ ] Rename all `*-view.tsx` → `*-page.tsx`
- [ ] Update all imports

### ✅ Phase 2: Constants & Props
- [ ] Extract `breadcrumbItems` to constants
- [ ] Extract inline constants from components
- [ ] Fix empty props destructuring
- [ ] Fix variable naming (Herobg, getData)
- [ ] Standardize constant naming

### ✅ Phase 3: Cleanup
- [ ] Remove empty types folders
- [ ] Update exports if needed
- [ ] Verify no broken imports
- [ ] Run linter
- [ ] Test build

---

## ⚠️ RISKS & MITIGATION

### Risks:
1. **Breaking imports** - Nhiều files cần update imports
2. **Component name conflicts** - Cần đảm bảo rename đúng
3. **Test failures** - Cần test sau refactor

### Mitigation:
1. Use IDE refactoring tools (rename symbol)
2. Update imports systematically
3. Run linter và build sau mỗi phase
4. Test critical paths manually

---

## 🚀 BẮT ĐẦU KHI NÀO?

Bạn có thể chọn:
1. **Option A** - Conservative (nhanh, an toàn)
2. **Option B** - Comprehensive (toàn diện, nhiều thay đổi)
3. **Option C** - Hybrid (cân bằng) ⭐ Recommended

Hoặc custom plan theo nhu cầu của bạn.

**Sau khi quyết định, tôi sẽ bắt đầu refactor từng phase một, test và verify sau mỗi bước.**
