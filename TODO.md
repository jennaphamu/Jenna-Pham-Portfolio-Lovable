# Vesper Blog Template - Quality Audit TODO

Generated: 2025-10-24

## Build Status
✅ Build succeeds with no TypeScript errors (328KB JS, 58KB CSS)

---

## HIGH PRIORITY

### 1. ❌ Delete Unused UI Components (264KB Impact)
**Status:** Pending
**Impact:** Critical - Large bundle size reduction

Delete these 45 unused shadcn/ui components:
- [ ] accordion.tsx
- [ ] alert-dialog.tsx
- [ ] alert.tsx
- [ ] aspect-ratio.tsx
- [ ] avatar.tsx
- [ ] badge.tsx
- [ ] breadcrumb.tsx
- [ ] button.tsx (shadcn version - we have custom Button.tsx)
- [ ] calendar.tsx
- [ ] card.tsx
- [ ] carousel.tsx
- [ ] chart.tsx
- [ ] checkbox.tsx
- [ ] collapsible.tsx
- [ ] command.tsx
- [ ] context-menu.tsx
- [ ] dialog.tsx
- [ ] drawer.tsx
- [ ] dropdown-menu.tsx
- [ ] form.tsx
- [ ] hover-card.tsx
- [ ] input-otp.tsx
- [ ] input.tsx
- [ ] label.tsx
- [ ] menubar.tsx
- [ ] navigation-menu.tsx
- [ ] pagination.tsx
- [ ] popover.tsx
- [ ] progress.tsx
- [ ] radio-group.tsx
- [ ] resizable.tsx
- [ ] scroll-area.tsx
- [ ] select.tsx
- [ ] separator.tsx
- [ ] sheet.tsx
- [ ] sidebar.tsx
- [ ] skeleton.tsx
- [ ] slider.tsx
- [ ] switch.tsx
- [ ] table.tsx
- [ ] tabs.tsx
- [ ] textarea.tsx
- [ ] toggle-group.tsx
- [ ] toggle.tsx

**Keep these 4 files:**
- toaster.tsx (used in App.tsx)
- sonner.tsx (used in App.tsx)
- tooltip.tsx (used in App.tsx)
- toast.tsx (dependency of toaster.tsx)

---

### 2. ❌ Delete App.css
**Status:** Pending
**File:** `src/App.css`

Contains 43 lines of unused Vite boilerplate (logo animations, etc.)

---

### 3. ❌ Fix NotFound.tsx Style Inconsistencies
**Status:** Pending
**File:** `src/pages/NotFound.tsx:12-16`

Replace hardcoded colors with design system:
```tsx
// Current (WRONG)
bg-gray-100 text-gray-600 text-blue-500 hover:text-blue-700

// Should be
bg-background text-foreground/60 text-secondary hover:text-secondary-hover
```

---

### 4. ❌ Replace Inline Buttons with Button Component
**Status:** Pending

**ArticleCard.tsx:38-41**
```tsx
// Replace inline button with:
<Button variant="filled" className="text-xs py-2 px-5">
  READ MORE
</Button>
```

**FeaturedCard.tsx:30-33**
```tsx
// Replace inline button with:
<Button variant="filled" className="text-sm py-3 px-6">
  READ MORE
</Button>
```

---

### 5. ❌ Replace Magic px-[90px] Values
**Status:** Pending

Replace with Tailwind spacing scale (`px-20` or `px-24`):
- [ ] `src/pages/Index.tsx` (3 occurrences)
- [ ] `src/pages/Article.tsx` (4 occurrences)
- [ ] `src/components/Header.tsx` (1 occurrence)
- [ ] `src/components/Footer.tsx` (1 occurrence)
- [ ] `src/components/Newsletter.tsx` (2 occurrences)

**Decision needed:** Use `px-20` (5rem = 80px) or `px-24` (6rem = 96px)?

---

## MEDIUM PRIORITY

### 6. ⚠️ Standardize Padding/Margin Ratios
**Status:** Pending

Current inconsistencies:
```
Index.tsx:23 → pt-12 md:pt-20 (1:1.67 ratio)
Index.tsx:23 → pb-8 md:pb-12 (1:1.5 ratio)
Article.tsx:51 → pt-8 md:pt-12 (1:1.5 ratio)
```

Choose consistent scaling pattern across all components.

---

### 7. ⚠️ Article Content Consistency
**Status:** Pending
**File:** `src/data/articles.ts`

- Only article #1 has full `content` field
- Articles #2-9 only have excerpts

**Options:**
- Add full content to all 9 articles (more work, better demo)
- Remove content from article #1 (easier, less impressive demo)

---

### 8. ⚠️ Fix Placeholder Footer Links
**Status:** Pending
**File:** `src/components/Footer.tsx:4-16`

Current placeholder links:
```tsx
{ label: "FAQ", href: "#faq" }
{ label: "Privacy Policy", href: "#privacy" }
{ label: "Terms of Service", href: "#terms" }
// ... etc
```

**Options:**
- Remove entirely
- Create actual pages
- Document for template users

---

### 9. ⚠️ Add Email Validation
**Status:** Pending

Newsletter forms need better validation:
- `src/pages/Index.tsx:33-41` (hero newsletter form)
- `src/components/Newsletter.tsx` (both variants)

Consider using React Hook Form (already installed) or add regex validation.

---

## LOW PRIORITY

### 10. 💡 Dark Mode Implementation
**Status:** Optional

- CSS variables exist in `index.css:66-73`
- No UI toggle implemented
- **Options:** Add theme switcher OR remove dark mode CSS

---

### 11. 💡 Newsletter Backend Integration
**Status:** Template Documentation

Current implementation simulates API with setTimeout. Document for users:
- How to integrate with email service (Mailchimp, ConvertKit, etc.)
- Environment variables needed
- API endpoint structure

---

### 12. 💡 Article Card Color Variety
**Status:** Enhancement

Most articles use default `bg-vibrant-purple`. Better showcase color system:
- Article #1: vibrant-purple ✓
- Article #2: vibrant-yellow ✓
- Article #3: vibrant-mint ✓
- Article #4: vibrant-coral ✓
- Article #5: vibrant-blue ✓
- Article #6: vibrant-magenta ✓
- Article #7: vibrant-orange ✓
- Article #8: vibrant-lavender ✓
- Article #9: Use vibrant-purple (currently yellow)

---

### 13. 💡 Accessibility Improvements
**Status:** Enhancement

- Add `aria-label` to buttons without text
- Improve focus states for keyboard navigation
- Test with screen readers
- Add skip-to-content link

---

## Quality Score Summary

| Category | Before | Target |
|----------|--------|--------|
| Build | ✅ Pass | ✅ Pass |
| Text Styles | ⚠️ 60% | ✅ 100% |
| Colors | ⚠️ 66% | ✅ 100% |
| Unused Code | ❌ 0% | ✅ 100% |
| Mobile | ⚠️ 70% | ✅ 95% |
| Components | ✅ 90% | ✅ 100% |
| Accessibility | ⚠️ 60% | ⚠️ 80% |

**Overall Template Quality:** 58% → Target: 95%

---

## Notes for Template Users

Document these for users:
1. How to customize color scheme (CSS variables)
2. How to add/remove articles
3. Newsletter integration guide
4. Deployment instructions
5. Environment variables needed
6. How to add more pages/routes
