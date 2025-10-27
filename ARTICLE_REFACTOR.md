# Article.tsx Refactor - CSS to Tailwind Conversion

## Overview

Converting the Article.tsx page styles from CSS to Tailwind CSS in phases.

Theme:
{
--colorBtnPrimary: #111111;
--colorBtnPrimaryDim: #040404;
--colorBtnPrimaryText: #ffffff;
--colorCartDot: #fc63b5;
--colorLink: #1c1d1d;
--colorTextBody: #1c1d1d;
--colorSalePrice: #1c1d1d;
--colorSaleTag: #1c1d1d;
--colorSaleTagText: #ffffff;
--colorBody: #ffffff;
--colorBodyDim: #f2f2f2;
--colorInputBg: #ffffff;
--colorInputBgDim: #f2f2f2;
--colorInputBgDark: #e6e6e6;
--colorInputText: #1c1d1d;
--colorFooter: #fbeadb;
--colorFooterText: #2c2c2c;
--colorBorder: #000000;
--colorNav: #ffffff;
--colorNavText: #1c1d1d;
--colorAnnouncement: #ffffff;
--colorAnnouncementText: #111111;
--colorHeroText: #ffffff;
--colorModalBg: #aeb1b8;
--colorSmallImageBg: #ffffff;
--colorLargeImageBg: #dedfe1;
--colorDrawers: #ffffff;
--colorDrawersDim: #f2f2f2;
--colorDrawerBorder: #ffffff;
--colorDrawerText: #000000;
--colorDrawerTextDarken: #000000;
--colorDrawerButton: #111111;
--colorDrawerButtonText: #ffffff;
}

{
--typeHeaderPrimary: Poppins;
--typeHeaderFallback: sans-serif;
--typeHeaderSize: 32px;
--typeHeaderWeight: 700;
--typeHeaderLineHeight: 1.2;
--typeHeaderSpacing: 0.0em;
--typeBasePrimary: Poppins;
--typeBaseFallback: sans-serif;
--typeBaseSize: 15px;
--typeBaseWeight: 300;
--typeBaseLineHeight: 1.6;
--typeBaseSpacing: 0.025em;
--iconWeight: 2px;
--iconLinecaps: round;
--hoverhomework: #ff75ba;
--homework: #ff5400;
--hoverhomeshop: #ff5400;
--homeshop: #fc8500;
--hovershop: #fc8500;
--shop: #ff5400;
--red: #ff5400;
--orange: #fc8500;
--pink: #ff75ba;
--lavender: #f7b0e0;
--black: #000000;
--cream: #fce5cf;
--white: #fef5ec;
--delay: 0.05s;
}

## Phase 1: Layout

Layout structure should be

- PageContent
  -- Grid
  --- GridItem
  ---- Header
  ----- Time
  ----- H1
  ---- Picture
  ----- Img
  ---- Social Sharing
  ---- Hr
  -- Text Center
  --- Back to Blog ->
- Related Articles
- Footer

### CSS to Convert

```css
<!-- Paste your layout CSS here -- > .page-content {
  padding-top: 120px;
}

@media only screen and (min-width: 590px) {
  .page-content,
  .shopify-email-marketing-confirmation__container,
  .shopify-policy__container {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
.page-content,
.shopify-email-marketing-confirmation__container,
.shopify-policy__container {
  padding-top: 30px;
  padding-bottom: 30px;
}
@media only screen and (min-width: 590px) {
  .page-full,
  .page-narrow,
  .page-width {
    padding: 0 40px;
  }
}
.page-full,
.page-narrow,
.page-width {
  padding: 0 20px;
}
.page-width {
  max-width: 1300px;
  margin: 0 auto;
}

.grid {
  list-style: none;
  padding: 0;
  margin: 0 0 0 -30px;
}

.grid__item[class*="--push"] {
  position: relative;
}

@media only screen and (min-width: 590px) {
  .medium-up--push-one-sixth {
    left: 16.66667%;
  }
}
@media only screen and (min-width: 590px) {
  .medium-up--two-thirds {
    width: 66.66667%;
  }
}
.grid__item {
  float: left;
  padding-left: 30px;
  width: 100%;
  min-height: 1px;
}

element.style {
}
header.h-bg,
header.static {
  background-color: var(--white);
}

@media only screen and (min-width: 590px) {
  .section-header {
    margin-bottom: 50px;
  }
}
.section-header {
  margin-bottom: 30px;
}
header {
  position: relative;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 20px 80px;
  transition: background-color 0.3s ease-in-out;
  margin-bottom: -100px;
  transition-property: initial !important;
}

@media only screen and (min-width: 590px) {
  .article .section-header__title,
  .article__date,
  .article__h3 {
    margin-bottom: 10px;
  }
}

.article .section-header__title,
.article__date,
.article__h3 {
  margin-bottom: 5px;
}
@media only screen and (min-width: 590px) {
  .article__date {
    margin-bottom: 4px;
    font-size: 13px;
  }
}
.article__date {
  margin-bottom: 6px;
  font-size: 11px;
}
.article__date {
  font-weight: var(--typeBaseWeight);
  letter-spacing: var(--typeBaseSpacing);
  line-height: var(--typeBaseLineHeight);
}

@media only screen and (min-width: 590px) {
  .article .section-header__title,
  .article__date,
  .article__h3 {
    margin-bottom: 10px;
  }
}
.article .section-header__title,
.article__date,
.article__h3 {
  margin-bottom: 5px;
}
.page-content h1 {
  font-size: 120px;
  letter-spacing: -2px;
  text-align: center;
  margin-bottom: 40px;
}
.section-header__title {
  margin-bottom: 0;
}
@media (min-width: 1921px) {
  h1 {
    font-size: 26rem;
    font-size: clamp(20rem, 1rem + 10.625vw, 40rem);
    letter-spacing: -1.4rem;
  }
}
h1 {
  text-transform: uppercase;
  font-size: clamp(6rem, 1rem + 10.625vw, 20rem);
  line-height: 72%;
  letter-spacing: -4px;
  transition: color 0.3s ease-in-out;
}

lement.style {
  height: 0;
  padding-bottom: 75.4%;
}
.article__featured-image {
  display: block;
  margin-bottom: 40px;
}
.image-wrap {
  background: #fff;
  background: var(--colorSmallImageBg);
  overflow: hidden;
}

.image-wrap img:not([role="presentation"]) {
  display: block;
}

.article__featured-image img {
  display: block;
  margin: 0 auto;
}
img[data-sizes="auto"] {
  display: block;
  width: 100%;
}
.lazyloaded {
  opacity: 1;
  transition: opacity 0.4s ease;
}
<style > img {
  outline: none;
}
img {
  border: none;
}

@media only screen and (min-width: 590px) {
  .hr--large {
    margin: 60px auto;
  }
}

.hr--large {
  margin: 40px auto;
}
.hr--large,
.hr--medium,
.hr--small,
hr {
  height: 1px;
  border: 0;
  border-top: 1px solid;
  border-top-color: #000;
  border-top-color: var(--colorBorder);
}
hr {
  width: 100%;
  border: 0;
  border-top: 1px solid var(--lightgray);
}

a,
a:link,
a:visited {
  text-decoration: none;
}
@media only screen and (min-width: 590px) {
  .return-link {
    font-size: 20px;
  }
}
.return-link {
  font-size: 18px;
  text-align: center;
}
.return-link {
  font-weight: var(--typeHeaderWeight);
  letter-spacing: var(--typeHeaderSpacing);
  line-height: var(--typeHeaderLineHeight);
}
```

### Tailwind Conversion

#### Container/Page Wrapper Classes
```tsx
// .page-content (main wrapper)
className="pt-[30px] pb-[30px] md:pt-[60px] md:pb-[60px]"

// .page-width (content container)
className="px-5 md:px-10 max-w-[1300px] mx-auto"
```

#### Grid System
```tsx
// .grid (list container)
className="list-none p-0 m-0 -ml-[30px]"

// .grid__item (grid item base)
className="float-left pl-[30px] w-full min-h-[1px]"

// .grid__item with push (for positioning)
className="relative md:left-[16.66667%] md:w-2/3"
```

#### Section Header
```tsx
// .section-header
className="mb-[30px] md:mb-[50px]"

// header element (if recreating the header structure)
className="relative z-10 top-0 left-0 w-full flex flex-row flex-nowrap items-center px-20 py-5 bg-[#fef5ec] transition-colors duration-300 ease-in-out -mb-[100px]"
```

#### Article Meta (Date/Time)
```tsx
// .article__date
className="mb-1.5 md:mb-1 text-[11px] md:text-[13px] font-light tracking-[0.025em] leading-[1.6]"
// font-light = 300 weight (--typeBaseWeight)

// .article .section-header__title, .article__date, .article__h3
className="mb-[5px] md:mb-2.5"

// .section-header__title
className="mb-0"
```

#### H1 Title Styling
```tsx
// h1 (main title)
className="uppercase text-center mb-10 leading-[0.72] tracking-[-4px] transition-colors duration-300 ease-in-out"
// Note: Font size needs custom CSS for clamp - see below

// Add to custom CSS or index.css:
// .article-title {
//   font-size: clamp(6rem, 1rem + 10.625vw, 20rem);
// }
// @media (min-width: 1921px) {
//   .article-title {
//     font-size: clamp(20rem, 1rem + 10.625vw, 40rem);
//     letter-spacing: -1.4rem;
//   }
// }
```

#### Featured Image
```tsx
// .article__featured-image (wrapper)
className="block mb-10"

// .image-wrap (container)
className="bg-white overflow-hidden"

// img (the actual image)
className="block w-full mx-auto opacity-100 transition-opacity duration-[400ms] ease-in-out border-none outline-none"

// For aspect ratio container (if needed)
className="h-0 pb-[75.4%]"
```

#### Horizontal Rule
```tsx
// .hr--large
className="my-10 md:my-[60px] mx-auto h-px border-0 border-t border-black w-full"
```

#### Return Link
```tsx
// .return-link
className="text-lg md:text-xl text-center no-underline font-bold tracking-[0.0em] leading-[1.2]"
// font-bold = 700 weight (--typeHeaderWeight)
```

#### Complete Layout Structure Example
```tsx
<div className="pt-[30px] pb-[30px] md:pt-[60px] md:pb-[60px]">
  <div className="px-5 md:px-10 max-w-[1300px] mx-auto">
    <div className="list-none p-0 m-0 -ml-[30px]">
      <div className="float-left pl-[30px] w-full min-h-[1px] relative md:left-[16.66667%] md:w-2/3">

        <header className="mb-[30px] md:mb-[50px]">
          <time className="mb-1.5 md:mb-1 text-[11px] md:text-[13px] font-light tracking-[0.025em] leading-[1.6]">
            {article.date}
          </time>
          <h1 className="article-title uppercase text-center mb-10 leading-[0.72] tracking-[-4px]">
            {article.title}
          </h1>
        </header>

        <div className="block mb-10">
          <div className="bg-white overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="block w-full mx-auto opacity-100 transition-opacity duration-[400ms] border-none outline-none"
            />
          </div>
        </div>

        {/* Social Sharing Component */}

        <hr className="my-10 md:my-[60px] mx-auto h-px border-0 border-t border-black w-full" />
      </div>
    </div>

    <div className="text-center">
      <a href="/blog" className="text-lg md:text-xl text-center no-underline font-bold tracking-[0.0em] leading-[1.2]">
        Back to Blog →
      </a>
    </div>
  </div>
</div>
```

---

## Phase 2: Structure

(Coming soon)

---

## Phase 3: Text Styles

(Coming soon)

---

## Notes

- Current file: `/Users/georgemaine/Developer/vesper-blog/src/pages/Article.tsx`
- Keep existing functionality intact
- Maintain responsive behavior
