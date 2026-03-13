# 🤖 AI FAST PROJECT CONTEXT
> Generated at: Fri Mar 13 12:38:34 +07 2026
> Purpose: สำหรับให้ AI อ่านภาพรวมโค้ดและโครงสร้างอย่างรวดเร็ว

## 📂 CORE STRUCTURE
```text
.
./.env
./.gemini
./.gemini/GEMINI.md
./.gemini/INIT_PROTOCOL.md
./.gemini/bin
./.gemini/bin/aicheck.sh
./.gemini/commands
./.gemini/context
./.gemini/context/AI_FAST_SUMMARY.md
./.gemini/context/BUSINESS_CORE.md
./.gemini/context/IDENTITY.md
./.gemini/context/MAP.md
./.gemini/context/Note.md
./.gemini/context/PROJECT_STATE.md
./.gemini/context/PROJECT_STATE.template.md
./.gemini/context/PROJECT_SUMMARY.md
./.gemini/context/SEO_STRATEGY.md
./.gemini/rules
./.gemini/rules/AI_BEHAVIOR.md
./.gemini/rules/STRICT_DEVELOPMENT.md
./.gemini/skills
./.gemini/skills/README.md
./.gemini/skills/business-expert
./.gemini/skills/business-expert/SKILL.md
./.gemini/skills/business-expert/prompts
./.gemini/skills/human-connect-writing
./.gemini/skills/human-connect-writing/SKILL.md
./.gemini/skills/next-cache-components
./.gemini/skills/next-cache-components/SKILL.md
./.gemini/skills/next-cache-components/references
./.gemini/skills/next-cache-components/references/component-dedup.md
./.gemini/skills/next-cache-components/references/ppr.md
./.gemini/skills/next-cache-components/references/suspense-cache.md
./.gemini/skills/next-upgrade
./.gemini/skills/next-upgrade/SKILL.md
./.gemini/skills/next-upgrade/references
./.gemini/skills/next-upgrade/references/codemods.md
./.gemini/skills/next-upgrade/references/migration-v15.md
./.gemini/skills/next-upgrade/references/react19.md
./.gemini/skills/nextjs-app-router-standards
./.gemini/skills/nextjs-app-router-standards/SKILL.md
./.gemini/skills/nextjs-app-router-standards/references
./.gemini/skills/nextjs-app-router-standards/references/caching.md
./.gemini/skills/nextjs-app-router-standards/references/metadata.md
./.gemini/skills/nextjs-app-router-standards/references/optimization.md
./.gemini/skills/nextjs-app-router-standards/references/routing.md
./.gemini/skills/nextjs-app-router-standards/references/security.md
./.gemini/skills/nextjs-app-router-standards/references/server-actions.md
./.gemini/skills/react-best-practices
./.gemini/skills/react-best-practices/AGENTS.md
./.gemini/skills/react-best-practices/README.md
./.gemini/skills/react-best-practices/SKILL.md
./.gemini/skills/react-best-practices/metadata.json
./.gemini/skills/react-best-practices/rules
./.gemini/skills/react-best-practices/rules/_sections.md
./.gemini/skills/react-best-practices/rules/_template.md
./.gemini/skills/react-best-practices/rules/advanced-event-handler-refs.md
./.gemini/skills/react-best-practices/rules/advanced-init-once.md
./.gemini/skills/react-best-practices/rules/advanced-use-latest.md
./.gemini/skills/react-best-practices/rules/async-api-routes.md
./.gemini/skills/react-best-practices/rules/async-defer-await.md
./.gemini/skills/react-best-practices/rules/async-dependencies.md
./.gemini/skills/react-best-practices/rules/async-parallel.md
./.gemini/skills/react-best-practices/rules/async-suspense-boundaries.md
./.gemini/skills/react-best-practices/rules/bundle-barrel-imports.md
./.gemini/skills/react-best-practices/rules/bundle-conditional.md
./.gemini/skills/react-best-practices/rules/bundle-defer-third-party.md
./.gemini/skills/react-best-practices/rules/bundle-dynamic-imports.md
./.gemini/skills/react-best-practices/rules/bundle-preload.md
./.gemini/skills/react-best-practices/rules/client-event-listeners.md
./.gemini/skills/react-best-practices/rules/client-localstorage-schema.md
./.gemini/skills/react-best-practices/rules/client-passive-event-listeners.md
./.gemini/skills/react-best-practices/rules/client-swr-dedup.md
./.gemini/skills/react-best-practices/rules/js-batch-dom-css.md
./.gemini/skills/react-best-practices/rules/js-cache-function-results.md
./.gemini/skills/react-best-practices/rules/js-cache-property-access.md
./.gemini/skills/react-best-practices/rules/js-cache-storage.md
./.gemini/skills/react-best-practices/rules/js-combine-iterations.md
./.gemini/skills/react-best-practices/rules/js-early-exit.md
./.gemini/skills/react-best-practices/rules/js-hoist-regexp.md
./.gemini/skills/react-best-practices/rules/js-index-maps.md
./.gemini/skills/react-best-practices/rules/js-length-check-first.md
./.gemini/skills/react-best-practices/rules/js-min-max-loop.md
./.gemini/skills/react-best-practices/rules/js-set-map-lookups.md
./.gemini/skills/react-best-practices/rules/js-tosorted-immutable.md
./.gemini/skills/react-best-practices/rules/rendering-activity.md
./.gemini/skills/react-best-practices/rules/rendering-animate-svg-wrapper.md
./.gemini/skills/react-best-practices/rules/rendering-conditional-render.md
./.gemini/skills/react-best-practices/rules/rendering-content-visibility.md
./.gemini/skills/react-best-practices/rules/rendering-hoist-jsx.md
./.gemini/skills/react-best-practices/rules/rendering-hydration-no-flicker.md
./.gemini/skills/react-best-practices/rules/rendering-hydration-suppress-warning.md
./.gemini/skills/react-best-practices/rules/rendering-svg-precision.md
./.gemini/skills/react-best-practices/rules/rendering-usetransition-loading.md
./.gemini/skills/react-best-practices/rules/rerender-defer-reads.md
./.gemini/skills/react-best-practices/rules/rerender-dependencies.md
./.gemini/skills/react-best-practices/rules/rerender-derived-state-no-effect.md
./.gemini/skills/react-best-practices/rules/rerender-derived-state.md
./.gemini/skills/react-best-practices/rules/rerender-functional-setstate.md
./.gemini/skills/react-best-practices/rules/rerender-lazy-state-init.md
./.gemini/skills/react-best-practices/rules/rerender-memo-with-default-value.md
./.gemini/skills/react-best-practices/rules/rerender-memo.md
./.gemini/skills/react-best-practices/rules/rerender-move-effect-to-event.md
./.gemini/skills/react-best-practices/rules/rerender-simple-expression-in-memo.md
./.gemini/skills/react-best-practices/rules/rerender-transitions.md
./.gemini/skills/react-best-practices/rules/rerender-use-ref-transient-values.md
./.gemini/skills/react-best-practices/rules/server-after-nonblocking.md
./.gemini/skills/react-best-practices/rules/server-auth-actions.md
./.gemini/skills/react-best-practices/rules/server-cache-lru.md
./.gemini/skills/react-best-practices/rules/server-cache-react.md
./.gemini/skills/react-best-practices/rules/server-dedup-props.md
./.gemini/skills/react-best-practices/rules/server-hoist-static-io.md
./.gemini/skills/react-best-practices/rules/server-parallel-fetching.md
./.gemini/skills/react-best-practices/rules/server-serialization.md
./.gemini/skills/react-native-skills
./.gemini/skills/react-native-skills/AGENTS.md
./.gemini/skills/react-native-skills/README.md
./.gemini/skills/react-native-skills/SKILL.md
./.gemini/skills/react-native-skills/metadata.json
./.gemini/skills/react-native-skills/rules
./.gemini/skills/react-native-skills/rules/_sections.md
./.gemini/skills/react-native-skills/rules/_template.md
./.gemini/skills/react-native-skills/rules/animation-derived-value.md
./.gemini/skills/react-native-skills/rules/animation-gesture-detector-press.md
./.gemini/skills/react-native-skills/rules/animation-gpu-properties.md
./.gemini/skills/react-native-skills/rules/design-system-compound-components.md
./.gemini/skills/react-native-skills/rules/fonts-config-plugin.md
./.gemini/skills/react-native-skills/rules/imports-design-system-folder.md
./.gemini/skills/react-native-skills/rules/js-hoist-intl.md
./.gemini/skills/react-native-skills/rules/list-performance-callbacks.md
./.gemini/skills/react-native-skills/rules/list-performance-function-references.md
./.gemini/skills/react-native-skills/rules/list-performance-images.md
./.gemini/skills/react-native-skills/rules/list-performance-inline-objects.md
./.gemini/skills/react-native-skills/rules/list-performance-item-expensive.md
./.gemini/skills/react-native-skills/rules/list-performance-item-memo.md
./.gemini/skills/react-native-skills/rules/list-performance-item-types.md
./.gemini/skills/react-native-skills/rules/list-performance-virtualize.md
./.gemini/skills/react-native-skills/rules/monorepo-native-deps-in-app.md
./.gemini/skills/react-native-skills/rules/monorepo-single-dependency-versions.md
./.gemini/skills/react-native-skills/rules/navigation-native-navigators.md
./.gemini/skills/react-native-skills/rules/react-compiler-destructure-functions.md
./.gemini/skills/react-native-skills/rules/react-compiler-reanimated-shared-values.md
./.gemini/skills/react-native-skills/rules/react-state-dispatcher.md
./.gemini/skills/react-native-skills/rules/react-state-fallback.md
./.gemini/skills/react-native-skills/rules/react-state-minimize.md
./.gemini/skills/react-native-skills/rules/rendering-no-falsy-and.md
./.gemini/skills/react-native-skills/rules/rendering-text-in-text-component.md
./.gemini/skills/react-native-skills/rules/scroll-position-no-state.md
./.gemini/skills/react-native-skills/rules/state-ground-truth.md
./.gemini/skills/react-native-skills/rules/ui-expo-image.md
./.gemini/skills/react-native-skills/rules/ui-image-gallery.md
./.gemini/skills/react-native-skills/rules/ui-measure-views.md
./.gemini/skills/react-native-skills/rules/ui-menus.md
./.gemini/skills/react-native-skills/rules/ui-native-modals.md
./.gemini/skills/react-native-skills/rules/ui-pressable.md
./.gemini/skills/react-native-skills/rules/ui-safe-area-scroll.md
./.gemini/skills/react-native-skills/rules/ui-scrollview-content-inset.md
./.gemini/skills/react-native-skills/rules/ui-styling.md
./.gemini/skills/seo-master
./.gemini/skills/seo-master/SKILL.md
./.gemini/skills/seo-master/prompts
./.gemini/skills/tailwind-v4-guidelines
./.gemini/skills/tailwind-v4-guidelines/SKILL.md
./.geminiignore
./.gitignore
./.prettierrc
./.vercel
./.vercel/README.txt
./.vercel/project.json
./PROJECT_SUMMARY.md
./README.md
./app
./app/about
./app/about/page.tsx
./app/api
./app/api/line
./app/api/line/route.ts
./app/blog
./app/blog/[slug]
./app/blog/[slug]/page.tsx
./app/blog/page.tsx
./app/contact
./app/contact/page.tsx
./app/error.tsx
./app/globals.css
./app/kapoamom
./app/kapoamom/page.tsx
./app/layout.tsx
./app/loading.tsx
./app/manifest.ts
./app/menu
./app/menu/page.tsx
./app/not-found.tsx
./app/page.tsx
./app/privacy
./app/privacy/page.tsx
./app/robots.ts
./app/sitemap.ts
./app/terms
./app/terms/page.tsx
./components
./components.json
./components/animated-section.tsx
./components/home
./components/home/Hero.tsx
./components/home/KnowledgeCorner.tsx
./components/home/MenuHighlights.tsx
./components/home/ProductTeaser.tsx
./components/home/Testimonials.tsx
./components/layout
./components/layout/Footer.tsx
./components/layout/Header.tsx
./components/theme-provider.tsx
./components/ui
./components/ui/accordion.tsx
./components/ui/alert-dialog.tsx
./components/ui/alert.tsx
./components/ui/aspect-ratio.tsx
./components/ui/avatar.tsx
./components/ui/badge.tsx
./components/ui/breadcrumb.tsx
./components/ui/button-group.tsx
./components/ui/button.tsx
./components/ui/calendar.tsx
./components/ui/card.tsx
./components/ui/carousel.tsx
./components/ui/chart.tsx
./components/ui/checkbox.tsx
./components/ui/collapsible.tsx
./components/ui/command.tsx
./components/ui/context-menu.tsx
./components/ui/dialog.tsx
./components/ui/drawer.tsx
./components/ui/dropdown-menu.tsx
./components/ui/empty.tsx
./components/ui/field.tsx
./components/ui/form.tsx
./components/ui/hover-card.tsx
./components/ui/input-group.tsx
./components/ui/input-otp.tsx
./components/ui/input.tsx
./components/ui/item.tsx
./components/ui/kbd.tsx
./components/ui/label.tsx
./components/ui/menubar.tsx
./components/ui/navigation-menu.tsx
./components/ui/pagination.tsx
./components/ui/popover.tsx
./components/ui/progress.tsx
./components/ui/radio-group.tsx
./components/ui/resizable.tsx
./components/ui/scroll-area.tsx
./components/ui/select.tsx
./components/ui/separator.tsx
./components/ui/sheet.tsx
./components/ui/sidebar.tsx
./components/ui/skeleton.tsx
./components/ui/slider.tsx
./components/ui/sonner.tsx
./components/ui/spinner.tsx
./components/ui/switch.tsx
./components/ui/table.tsx
./components/ui/tabs.tsx
./components/ui/textarea.tsx
./components/ui/toast.tsx
./components/ui/toaster.tsx
./components/ui/toggle-group.tsx
./components/ui/toggle.tsx
./components/ui/tooltip.tsx
./components/ui/use-mobile.tsx
./components/ui/use-toast.ts
./constants
./constants/blog-registry.ts
./constants/site-config.ts
./content
./content/blog
./content/blog/catering-bpp-tak.mdx
./content/blog/catering-revenue-tak.mdx
./content/blog/digital-heritage-aemdevweb.mdx
./content/blog/legend-of-sahachai-noodle.mdx
./content/blog/menu-guide.mdx
./content/blog/menu-update-2025.mdx
./content/blog/one-day-trip-tak.mdx
./content/blog/secret-red-pork-recipe.mdx
./data
./data/fammiry.json
./data/reviews.json
./data/reviews.ts
./data/services.json
./data/site.json
./eslint.config.mjs
./hooks
./hooks/use-mobile.ts
./hooks/use-toast.ts
./knip.json
./lib
./lib/api
./lib/api/data.ts
./lib/seo
./lib/seo/json-ld.tsx
./lib/seo/schema.ts
./lib/utils.ts
./mdx-components.tsx
./next-env.d.ts
./next.config.mjs
./package.json
./pnpm-lock.yaml
./postcss.config.mjs
./scripts
./scripts/ai-context-sync.sh
./scripts/project-summary.sh
./tsconfig.json
./tsconfig.tsbuildinfo
```

## ⚙️ CRITICAL CONFIGURATIONS
### File: package.json
```
{
  "name": "nextjs_nuddle",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --webpack",
    "build": "next build --webpack",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "check": "tsc --noEmit",
    "knip": "knip"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@line/bot-sdk": "^10.6.0",
    "@mdx-js/loader": "^3.1.1",
    "@mdx-js/react": "^3.1.1",
    "@next/mdx": "^16.1.6",
    "@radix-ui/react-accordion": "1.2.2",
    "@radix-ui/react-alert-dialog": "1.1.4",
    "@radix-ui/react-aspect-ratio": "1.1.1",
    "@radix-ui/react-avatar": "1.1.2",
    "@radix-ui/react-checkbox": "1.1.3",
    "@radix-ui/react-collapsible": "1.1.2",
    "@radix-ui/react-context-menu": "2.2.4",
    "@radix-ui/react-dialog": "1.1.4",
    "@radix-ui/react-dropdown-menu": "2.1.4",
    "@radix-ui/react-hover-card": "1.1.4",
    "@radix-ui/react-label": "2.1.1",
    "@radix-ui/react-menubar": "1.1.4",
    "@radix-ui/react-navigation-menu": "1.2.3",
    "@radix-ui/react-popover": "1.1.4",
    "@radix-ui/react-progress": "1.1.1",
    "@radix-ui/react-radio-group": "1.2.2",
    "@radix-ui/react-scroll-area": "1.2.2",
    "@radix-ui/react-select": "2.1.4",
    "@radix-ui/react-separator": "1.1.1",
    "@radix-ui/react-slider": "1.2.2",
    "@radix-ui/react-slot": "1.1.1",
    "@radix-ui/react-switch": "1.1.2",
    "@radix-ui/react-tabs": "1.1.2",
    "@radix-ui/react-toast": "1.2.4",
    "@radix-ui/react-toggle": "1.1.1",
    "@radix-ui/react-toggle-group": "1.1.1",
    "@radix-ui/react-tooltip": "1.1.6",
    "@types/mdx": "^2.0.13",
    "@vercel/analytics": "1.3.1",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.0.4",
    "date-fns": "4.1.0",
    "embla-carousel-react": "8.5.1",
    "framer-motion": "^11.18.0",
    "input-otp": "1.4.1",
    "lucide-react": "^0.454.0",
    "next": "16.1.6",
    "next-themes": "^0.4.6",
    "react": "19.2.4",
    "react-day-picker": "9.8.0",
    "react-dom": "19.2.4",
    "react-hook-form": "^7.60.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "3.25.76"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.4",
    "@eslint/js": "^10.0.1",
    "@next/eslint-plugin-next": "^16.1.6",
    "@tailwindcss/postcss": "^4.1.9",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@typescript-eslint/eslint-plugin": "^8.56.1",
    "@typescript-eslint/parser": "^8.56.1",
    "eslint": "^10.0.2",
    "eslint-config-next": "^16.1.6",
    "knip": "^5.85.0",
    "postcss": "^8.5",
    "prettier": "^3.8.1",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "tailwindcss": "^4.1.9",
    "tw-animate-css": "1.3.3",
    "typescript": "^5",
    "typescript-eslint": "^8.56.1"
  }
}
```

### File: next.config.mjs
```
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  // 🚀 FIXED: Advanced Webpack Configuration to handle Tailwind 4 CSS resolution issues in local environment
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOfRule) => {
          if (oneOfRule.use) {
            const uses = Array.isArray(oneOfRule.use) ? oneOfRule.use : [oneOfRule.use];
            uses.forEach((u) => {
              if (u.loader && u.loader.includes("css-loader")) {
                u.options = {
                  ...u.options,
                  url: false, // 🛡️ Do not resolve url() in CSS
                  import: false, // 🛡️ Do not resolve @import in CSS
                };
              }
            });
          }
        });
      }
    });

    // 🛡️ Ignore specific broken modules that Webpack tries to find but shouldn't
    config.resolve.alias = {
      ...config.resolve.alias,
      "./&": false,
      "../&": false,
    };

    return config;
  },
};

const withMDX = createMDX({});
export default withMDX(nextConfig);
```

### File: postcss.config.mjs
```
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### File: constants/site-config.ts
```
/**
 * @file site-config.ts
 * @description ข้อมูลหลักร้าน ช.สหชัย เกี๊ยวปูหมูแดง - เน้นเส้นบะหมี่ไข่ 98% เหนียวหนึบ
 * @rule ห้ามใช้ Emoji ในโค้ดเด็ดขาด
 */

import { Soup, Utensils, Heart } from "lucide-react";

export const siteIdentity = {
  name: "ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก",
  fullName: "ช.สหชัย เกี๊ยวปูหมูแดง - ของอร่อยเมืองตาก บะหมี่ทำเอง 98% อิ่มคุ้มค่า",
  description:
    "แวะมาฝากท้องกับร้านลับเมืองตาก ช.สหชัย เกี๊ยวปูหมูแดง สัมผัสบะหมี่ทำเองไข่ 98% เหนียวหนึบสู้ฟัน หมูแดงย่างเตาถ่านหอมๆ บรรยากาศอบอุ่น ราคาเป็นกันเอง ครองใจคนตากมากว่า 9 ปี",
  url: "https://sahachai.aemdevweb.com",
  ogImage: "/images/founders-warmth.webp",
  themeColor: "#b22222",
  keywords: [
    "ร้านอาหารตาก 2569",
    "ของกินเมืองตาก",
    "ร้านอร่อยจังหวัดตาก",
    "บะหมี่ทำเอง ตาก",
    "บะหมี่ตาก",
    "ร้านลับเมืองตาก",
    "ช.สหชัย เกี๊ยวปูหมูแดง",
    "จัดเลี้ยงนอกสถานที่ ตาก",
  ],
};

export const contactInfo = {
  phone: "090-690-6080",
  phoneDisplay: "090-690-6080 (เฮียเนก/เจ๊ตั๊ก ยินดีรับสายจ้า)",
  lineId: "@698fqfdg",
  lineUrl: "https://lin.ee/7ZnLEUEZ",
  lineQrCode: "https://qr-official.line.me/gs/M_698fqfdg_GW.png?oat_content=qr",
  address: "91/1 ถนนมหาดไทยบำรุง ต.หนองหลวง อ.เมือง จ.ตาก 63000 (ใกล้สะพานกิตติขจร)",
  googleMaps: "https://maps.app.goo.gl/KLdnUCffDN6RZpTT8",
  businessHours: "10:30 - 21:00 น. (หยุดทุกวันอาทิตย์)",
};

export const navLinks = [
  { title: "หน้าแรก", href: "/" },
  { title: "เรื่องราว 9 ปี", href: "/about" },
  { title: "เมนูอิ่มจุใจ", href: "/#menu" },
  { title: "บรรยากาศบ้านๆ", href: "/#gallery" },
  { title: "รีวิวจากลูกค้า", href: "/#reviews" },
  { title: "ติดต่อเรา", href: "/#contact" },
];

export const heroContent = {
  badge: "ของอร่อยเมืองตาก ครองใจมากว่า 9 ปี",
  headlineLine1: "เหนียวหนึบ อิ่มคุ้ม",
  headlineLine2: "รสชาติที่ทุกคนเข้าถึงได้",
  description:
    "เฮียเนกและเจ๊ตั๊กตั้งใจทำบะหมี่ไข่สด 98% นวดเองทุกวัน เพื่อให้ทุกคนได้ทานของอร่อย เครื่องแน่นจุใจ ในราคาที่สบายกระเป๋า แวะมาทานกันให้อิ่มท้องนะครับ",
  ctaPrimary: { label: "ดูเมนูของเรา", href: "#menu" },
  ctaSecondary: { label: "เส้นทางมาร้าน", href: "#contact" },
  stats: [
    { value: "98%", label: "สัดส่วนไข่สด" },
    { value: "9+", label: "ปีที่ผูกพันกับคนตาก" },
    { value: "100%", label: "อิ่มอร่อยคุ้มค่า" },
  ],
};

export const signatureFeatures = [
  {
    icon: Soup,
    title: "เส้นบะหมี่ไข่ 98%",
    description:
      "จุดเด่นที่ทุกคนบอกต่อ คือเส้นที่เล็ก บาง แต่เหนียวหนึบด้วยส่วนผสมของไข่สดคุณภาพสูง 98%",
  },
  {
    icon: Heart,
    title: "บริการด้วยใจ",
    description:
      "เฮียเนกและเจ๊ตั๊กดูแลลูกค้าเหมือนคนในครอบครัว ให้เครื่องเยอะ อิ่มจุใจ ในบรรยากาศที่อบอุ่น",
  },
  {
    icon: Utensils,
    title: "เครื่องแน่น จุใจ",
    description:
      "เกี๊ยวปูคำโต เนื้อปูม้าสด และหมูแดงนุ่มฉ่ำ เราจัดเต็มให้คุณอิ่มท้องได้ในราคามิตรภาพ",
  },
];

export const cateringService = {
  title: "รับเหมานอกสถานที่ (Catering)",
  description:
    "บริการจัดเลี้ยงบะหมี่เกี๊ยวปู-หมูแดง สำหรับงานบุญ งานบวช งานแต่ง หรือหน่วยงานราชการในจังหวัดตาก เริ่มต้นเพียง 150 ชามขึ้นไป พร้อมอุปกรณ์ครบวงจร",
  highlights: ["เส้นบะหมี่ทำใหม่สด", "หมูแดงย่างเตาถ่านหอมๆ", "บริการรวดเร็วโดยทีมงานมืออาชีพ"],
  cta: "สอบถามราคาเหมา",
};
export const pricingContent = {
  badge: "เมนูยอดฮิต",
  title: "อิ่มอร่อยกับเส้นระดับตำนาน",
  description: "ราคาเป็นกันเอง เครื่องแน่นจุใจ เริ่มต้นเพียง 40.-",
  tiers: [
    {
      name: "บะหมี่เกี๊ยวหมูแดง",
      price: "฿45 - 50",
      period: "",
      description: "สัมผัสความหนึบของเส้นบะหมี่ไข่ 98% คู่กับหมูแดงสูตรลับ",
      features: ["เส้นบะหมี่ไข่ 98%", "หมูแดงสูตรต้นตำรับ", "เกี๊ยวหมูแน่นๆ", "น้ำซุปกลมกล่อม"],
      cta: "สั่งชามนี้",
      highlighted: false,
    },
    {
      name: "บะหมี่เกี๊ยวปูหมูแดง",
      price: "฿55 - 60",
      period: "",
      description: "เมนูซิกเนเจอร์ที่พรีเมียมที่สุด รวมทุกความอร่อยไว้ในชามเดียว",
      features: ["เนื้อปูม้าสดใหม่", "เส้นเหนียวหนึบพิเศษ", "เกี๊ยวปูชิ้นใหญ่", "อิ่มจุใจแน่นอน"],
      cta: "เมนูขายดีอันดับ 1",
      highlighted: true,
    },
    {
      name: "หมูกรอบ / ข้าวหมูกรอบ",
      price: "฿50 - 60",
      period: "",
      description: "หมูกรอบสะอาด หนังบางกรอบ รสชาติสไตล์เมืองตาก",
      features: ["หมูกรอบคัดเกรด", "น้ำราดสูตรเข้มข้น", "เครื่องเคียงครบชุด", "อิ่มท้องกำลังดี"],
      cta: "สายกรอบต้องลอง",
      highlighted: false,
    },
  ],
};

export const galleryContent = {
  badge: "ภาพบรรยากาศความอร่อย",
  title: "ความสุขในทุกๆ คำ",
  items: [
    {
      src: "/images/hero-noodle.webp",
      alt: "บะหมี่เกี๊ยวปูหมูแดง ช.สหชัย",
      title: "บะหมี่ไข่ 98% ซิกเนเจอร์",
    },
    {
      src: "/images/signature-98-noodle.webp",
      alt: "เกี๊ยวปูทำมือ ช.สหชัย",
      title: "งานฝีมือคุณภาพ",
    },
    {
      src: "/images/blog-noodle-1.webp",
      alt: "บะหมี่ไข่ทำเองสดใหม่",
      title: "เส้นบะหมี่เหนียวหนึบ",
    },
    { src: "/images/blog-noodle-2.webp", alt: "หมูแดงย่างหอมๆ", title: "ความใส่ใจในเครื่องปรุง" },
    { src: "/images/blog-noodle-3.webp", alt: "บรรยากาศความใจดี", title: "รอยยิ้มจากเจ๊ตั๊ก" },
    { src: "/images/master-hands.webp", alt: "เฮียเนกดูแลทุกชาม", title: "มาตรฐาน 9 ปี" },
  ],
};

export const siteConfig = {
  identity: siteIdentity,
  contact: contactInfo,
  navigation: navLinks,
  hero: heroContent,
  features: signatureFeatures,
  catering: cateringService,
  pricing: pricingContent,
  gallery: galleryContent,
};
```

## 💻 CORE LOGIC (First 100 lines)
### File: app/about/page.tsx
```typescript
import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, ShieldCheck, GraduationCap, Coins } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/constants/site-config";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: `เรื่องราว 9 ปีของเฮียเนก | ${siteConfig.identity.name}`,
  description:
    "จากเครื่องแบบสีกากีสู่ผ้ากันเปื้อนแดง เรื่องราวการต่อสู้ 9 ปีของนายอเนก ยมเกิด ผู้สร้างตำนานบะหมี่ไข่ 98% เพื่อความสำเร็จของครอบครัว",
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "หน้าแรก", item: "/" },
    { name: "เรื่องราว 9 ปี", item: "/about" },
  ]);

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      <main className="flex-grow pt-24 pb-20">
        {/* HERO SECTION: THE LEGACY */}
        <section className="bg-primary/5 relative overflow-hidden py-24 md:py-32">
          <div className="bg-primary/10 absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full opacity-60 blur-3xl" />
          <div className="relative z-10 container mx-auto px-6">
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <AnimatedSection>
                <Badge className="bg-primary/10 text-primary mb-6 rounded-full border-none px-4 py-1.5 font-bold tracking-widest uppercase">
                  9 Years Anniversary Legacy
                </Badge>
                <h1 className="mb-6 text-5xl leading-tight font-black tracking-tighter md:text-7xl">
                  จาก <span className="text-primary font-serif italic">"เครื่องแบบ"</span> <br />
                  สู่ <span className="text-primary font-serif italic">"ผ้ากันเปื้อน"</span>
                </h1>
                <p className="text-muted-foreground text-xl leading-relaxed font-medium md:text-2xl">
                  เรื่องราวชีวิตของ นายอเนก ยมเกิด (เฮียเนก) <br className="hidden md:block" />
                  บทพิสูจน์เกียรติยศที่แท้จริง... ที่วัดกันด้วย "หยาดเหงื่อ" และ "ความรัก"
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 1: THE TRANSITION (FROM POLICE TO NOODLE VENDOR) */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <AnimatedSection className="relative order-2 md:order-1">
                <div className="bg-secondary/20 absolute -bottom-10 -left-10 h-64 w-64 rounded-full opacity-50 blur-3xl" />
                <div className="relative aspect-[4/5] rotate-2 overflow-hidden rounded-[3rem] border-[12px] border-white shadow-2xl transition-transform duration-700 hover:rotate-0">
                  <Image
                    src="/images/master-hands.webp"
                    alt="เฮียเนก นายอเนก ยมเกิด"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-primary/5 absolute -right-8 -bottom-8 z-20 max-w-[260px] rounded-3xl border bg-white p-8 shadow-xl">
                  <ShieldCheck className="text-primary mb-4 h-10 w-10" />
                  <p className="text-sm leading-tight font-bold italic">
                    "เกียรติยศไม่ได้อยู่ที่สวมชุดอะไร แต่อยู่ที่หัวใจเราทำเพื่อใคร"
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection className="order-1 space-y-8 md:order-2" delay={0.2}>
                <div className="bg-primary/10 text-primary mb-2 inline-flex h-16 w-16 items-center justify-center rounded-2xl">
                  <Star className="h-8 w-8" />
                </div>
                <h2 className="text-4xl leading-none font-black tracking-tighter md:text-5xl">
                  อดีต <span className="text-primary">"สีกากี"</span> <br />
                  กับทางเลือกที่ถูกมองข้าม
                </h2>
                <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                  <p>
                    ในวันที่ นายอเนก ยมเกิด ตัดสินใจถอดเครื่องแบบตำรวจเพื่อมาจับลวดลวกบะหมี่
                    หลายสายตาเต็มไปด้วยคำถามและบางคนมองว่าเป็นการลดเกียรติลงมาเป็นเพียง "พ่อค้า"
                  </p>
                  <p>
                    แต่สำหรับเฮียเนก เกียรติยศในอดีตคือความภาคภูมิใจ
                    แต่ความรับผิดชอบต่อครอบครัวคือความมุ่งมั่นที่ยิ่งใหญ่กว่า
                    ท่านจึงหันหลังให้สถานะทางสังคมเพื่อเริ่มต้นเส้นทางสายความอร่อยที่ไม่มีเครื่องหมายประดับบ่า
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE FRUIT OF LABOR (WEALTH FROM NOODLES) */}
        <section className="bg-primary/5 border-primary/10 border-y py-24">
          <div className="container mx-auto px-6">
```

### File: app/api/line/route.ts
```typescript
import { NextResponse } from "next/server";
import { Client, WebhookEvent } from "@line/bot-sdk";

import { siteConfig } from "@/constants/site-config";

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN || "",
  channelSecret: process.env.LINE_CHANNEL_SECRET || "",
};

const client = new Client(config);
const ADMIN_USER_ID = "Uc260e0d2f3f3e9f3201d33c18ac9abb9"; // User ID ของคุณอลงกรณ์

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const events: WebhookEvent[] = body.events;

    const results = await Promise.all(
      events.map(async (event) => {
        if (event.type === "message" && event.message.type === "text") {
          const userMessage = event.message.text.trim().toLowerCase();
          const userId = event.source.userId;

          // --- SPECIAL LOGIC: ADMIN RECOGNITION ---
          if (userId === ADMIN_USER_ID && userMessage === "status") {
            const statusText = `[AEMDEVWEB SYSTEM STATUS]
- Project: ${siteConfig.identity.name}
- Domain: ${siteConfig.identity.url}
- Engine: Next.js 16 (React 19)
- Webhook: Active
- Developer: นายอลงกรณ์ ยมเกิด

ระบบทำงานปกติ 100% ครับนายท่าน`;
            return client.replyMessage(event.replyToken, { type: "text", text: statusText });
          }

          let replyText = "";
          const quickReplyItems: any = {
            items: [
              { type: "action", action: { type: "message", label: "🍜 เมนูและราคา", text: "1" } },
              { type: "action", action: { type: "message", label: "📍 พิกัด/เวลาเปิด", text: "2" } },
              { type: "action", action: { type: "message", label: "☎️ สั่งอาหารด่วน", text: "3" } },
              { type: "action", action: { type: "message", label: "🤝 จัดเลี้ยง/ธุรกิจ", text: "4" } },
              { type: "action", action: { type: "message", label: "💬 คุยกับเจ้าของร้าน", text: "5" } },
              { type: "action", action: { type: "message", label: "🏠 หน้าแรก", text: "0" } },
            ],
          };

          // --- LOGIC: NAVIGATION MENU ---
          if (userMessage.includes("เมนู") || userMessage === "1") {
            return client.replyMessage(event.replyToken, [
              {
                type: "image",
                originalContentUrl: `${siteConfig.identity.url}/images/signature-98-noodle.webp`,
                previewImageUrl: `${siteConfig.identity.url}/images/signature-98-noodle.webp`,
              },
              {
                type: "text",
                text: `[🍴 เมนูแนะนำ - ${siteConfig.identity.name}]\n\n🌟 บะหมี่ไข่ 98% นวดสดทุกวัน\n1. ${siteConfig.pricing.tiers[1].name} (${siteConfig.pricing.tiers[1].price})\n2. ${siteConfig.pricing.tiers[0].name} (${siteConfig.pricing.tiers[0].price})\n3. ${siteConfig.pricing.tiers[2].name} (${siteConfig.pricing.tiers[2].price})\n\n🖼️ ดูเมนูเพิ่มเติม: ${siteConfig.identity.url}/menu`,
                quickReply: quickReplyItems,
              },
            ]);
          } else if (
            userMessage.includes("พิกัด") ||
            userMessage.includes("ที่ตั้ง") ||
            userMessage === "2"
          ) {
            return client.replyMessage(event.replyToken, [
              {
                type: "image",
                originalContentUrl: `${siteConfig.identity.url}/images/shop-atmosphere.webp`,
                previewImageUrl: `${siteConfig.identity.url}/images/shop-atmosphere.webp`,
              },
              {
                type: "text",
                text: `[📍 ข้อมูลร้านและการเดินทาง]\n\n🏠 ที่ตั้ง: ${siteConfig.contact.address}\n⏰ เปิด: ${siteConfig.contact.businessHours}\n\n🗺️ แผนที่ Google Maps:\n${siteConfig.contact.googleMaps}\n\nยินดีต้อนรับสู่ร้านลับเมืองตากครับ`,
                quickReply: quickReplyItems,
              },
            ]);
          } else if (userMessage.includes("สั่ง") || userMessage === "3") {
            replyText = `[☎️ บริการสั่งอาหารล่วงหน้า]\n\nเบอร์โทรสายตรง (เฮียเนก/เจ๊ตั๊ก):\n📞 ${siteConfig.contact.phone}\n\n⏱️ แนะนำสั่งล่วงหน้า 15-20 นาที\nเพื่อให้คุณได้รับบะหมี่ที่เหนียวหนึบที่สุดในเวลาที่คุณต้องการครับ`;
          } else if (
            userMessage.includes("จัดเลี้ยง") ||
            userMessage.includes("ธุรกิจ") ||
            userMessage === "4"
          ) {
            return client.replyMessage(event.replyToken, [
              {
                type: "image",
                originalContentUrl: `${siteConfig.identity.url}/images/kapoamom-sauce.webp`,
                previewImageUrl: `${siteConfig.identity.url}/images/kapoamom-sauce.webp`,
              },
              {
                type: "text",
                text: `[🤝 บริการจัดเลี้ยงและแบรนด์ kapoamom]\n\n✨ ${siteConfig.catering.title}\n📌 จุดเด่น: ${siteConfig.catering.highlights.join(
                  ", "
                )}\n\n🛍️ ซอสกะเพราสูตรลับ 9 ปี:\nดูรายละเอียด: ${siteConfig.identity.url}/kapoamom\n\n📞 ปรึกษาธุรกิจ: ${siteConfig.contact.phone}`,
                quickReply: quickReplyItems,
              },
```

### File: app/blog/[slug]/page.tsx
```typescript
import { getAllBlogs, getBlogBySlug, getSiteConfig } from "@/lib/api/data";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, User, Clock, BarChart3, Zap, CheckCircle2, Cpu } from "lucide-react";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/lib/seo/json-ld";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  const siteConfig = await getSiteConfig();

  if (!blog) return { title: "บทความไม่พบ" };

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: `${siteConfig.identity.url}/blog/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `${siteConfig.identity.url}/blog/${slug}`,
      images: [
        {
          url: `/images/${blog.image}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const Content = dynamic(() => import(`@/content/blog/${slug}.mdx`), {
    loading: () => <div className="bg-muted h-96 animate-pulse rounded-[3rem]" />,
  });

  const blogSchema = getBlogPostingSchema(blog);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "หน้าแรก", item: "/" },
    { name: "คลังความรู้", item: "/blog" },
    { name: blog.title, item: `/blog/${slug}` },
  ]);

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto max-w-5xl px-6">
          <AnimatedSection>
            {/* Navigation & Header */}
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-bold transition-colors"
              >
                <ChevronLeft className="h-4 w-4" /> คลังความรู้เมืองตาก
              </Link>
              <Badge className="bg-primary/10 text-primary rounded-full border-none px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase">
                {blog.category} / Insight Analysis
              </Badge>
            </div>

            <h1 className="mb-12 text-4xl leading-[1.1] font-black tracking-tighter md:text-7xl">
              {blog.title}
            </h1>

            {/* INSIGHT CARDS */}
```

### File: app/blog/page.tsx
```typescript
import { siteConfig } from "@/constants/site-config";
import { blogRegistry } from "@/constants/blog-registry";
import { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: `ข่าวสารและคู่มือของอร่อยเมืองตาก | ${siteConfig.identity.name}`,
  description:
    "รวบรวมบทความที่มีประโยชน์ ข่าวสารจังหวัดตาก และเคล็ดลับความอร่อยจากร้าน ช.สหชัย เกี๊ยวปูหมูแดง",
};

export default function BlogListingPage() {
  const blogs = [...blogRegistry].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-20 text-center">
            <Badge className="bg-primary/10 text-primary mb-6 rounded-full border-none px-4 py-1.5 font-bold tracking-widest uppercase">
              Tak Local Journal
            </Badge>
            <h1 className="mb-6 text-5xl leading-tight font-black tracking-tighter md:text-7xl">
              ข่าวสาร & <span className="text-primary italic">เรื่องราว</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl font-medium">
              รวบรวมข้อมูลที่เป็นประโยชน์ ข่าวสารจังหวัดตาก
              และบันทึกการเดินทางของความอร่อยที่ส่งต่อกันมาจากรุ่นสู่รุ่น
            </p>
          </AnimatedSection>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, idx) => (
              <AnimatedSection key={blog.slug} delay={idx * 0.1}>
                <Link href={`/blog/${blog.slug}`} className="group">
                  <Card className="border-border bg-card flex h-full flex-col overflow-hidden rounded-[3rem] border transition-all duration-500 group-hover:-translate-y-2 hover:shadow-2xl">
                    <div className="bg-muted relative h-64 w-full overflow-hidden">
                      <Image
                        src={`/images/${blog.image}`}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6">
                        <Badge className="text-primary border-none bg-white/90 font-bold shadow-lg backdrop-blur-md">
                          {blog.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="flex h-full flex-col p-8">
                      <div className="text-muted-foreground mb-4 flex items-center gap-2 text-xs font-bold">
                        <Calendar className="text-primary h-3.5 w-3.5" />
                        <span>{blog.date}</span>
                      </div>

                      <h3 className="group-hover:text-primary mb-4 line-clamp-2 text-2xl leading-tight font-black tracking-tight transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-muted-foreground mb-8 line-clamp-3 flex-grow text-sm leading-relaxed">
                        {blog.excerpt}
                      </p>

                      <div className="text-primary mt-auto flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
                        อ่านบทความฉบับเต็ม{" "}
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="bg-primary shadow-primary/20 relative mt-24 overflow-hidden rounded-[4rem] p-12 text-center text-white shadow-2xl">
            <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <BookOpen className="mx-auto mb-6 h-12 w-12 opacity-50" />
            <h2 className="mb-4 text-3xl font-black tracking-tight text-white md:text-4xl">
              ต้องการรับเหมาจัดเลี้ยง?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-medium text-white/80">
              นอกจากข่าวสาร เรายังพร้อมให้บริการจัดเลี้ยงบะหมี่นอกสถานที่ในจังหวัดตาก เริ่มต้น 150
              ชามขึ้นไป
            </p>
            <Button
              className="text-primary h-14 rounded-2xl bg-white px-10 text-lg font-black hover:bg-white/90"
              asChild
```

### File: app/contact/page.tsx
```typescript
import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Facebook } from "lucide-react";
import siteData from "@/data/site.json";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "ติดต่อเรา | ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก",
  description:
    "เส้นทางมาร้าน ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก พร้อมเบอร์โทรศัพท์สั่งอาหารล่วงหน้า และเวลาเปิด-ปิดร้าน",
  keywords: ["ติดต่อ ช.สหชัย", "ทางไปร้าน ช.สหชัย", "เบอร์โทร ช.สหชัย ตาก", "แผนที่ ช.สหชัย"],
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "หน้าแรก", item: "/" },
    { name: "ติดต่อเรา", item: "/contact" },
  ]);

  return (
    <div className="flex-min-h-screen bg-warm-cream flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      <main className="flex-grow pt-24 pb-20">
        <div className="container-stable">
          <AnimatedSection className="mb-16 text-center">
            <Badge className="bg-primary-red/10 text-primary-red mb-4 border-none px-4 py-1 text-sm font-bold tracking-wider">
              CONTACT US
            </Badge>
            <h1 className="text-primary-dark mb-6 text-4xl font-extrabold md:text-5xl">
              ติดต่อ <span className="text-primary-red">เฮียเนก-เจ๊ตั๊ก</span>
            </h1>
            <p className="text-light-text mx-auto max-w-2xl text-lg">
              สอบถามเส้นทาง สั่งอาหารล่วงหน้า หรือแนะนำติชม เรายินดีให้บริการด้วยความเต็มใจ
            </p>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-5">
            <AnimatedSection className="space-y-6 lg:col-span-2">
              <div className="border-primary-red/5 rounded-3xl border bg-white p-8 shadow-sm">
                <div className="mb-8 flex gap-5">
                  <div className="bg-warm-cream text-primary-red flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-dark-text mb-2 text-xl font-bold">ที่ตั้งร้าน</h3>
                    <p className="text-light-text leading-relaxed">{siteData.address}</p>
                  </div>
                </div>

                <div className="mb-8 flex gap-5">
                  <div className="bg-warm-cream text-primary-red flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-dark-text mb-2 text-xl font-bold">เบอร์โทรศัพท์</h3>
                    <p className="text-primary-red text-2xl font-bold">{siteData.phone}</p>
                    <p className="text-light-text mt-1 text-sm">โทรสั่งอาหารได้เลยครับ</p>
                  </div>
                </div>

                <div className="mb-8 flex gap-5">
                  <div className="bg-warm-cream text-primary-red flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner">
                    <Clock className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-dark-text mb-2 text-xl font-bold">เวลาเปิดให้บริการ</h3>
                    <p className="text-light-text">{siteData.opening_hours}</p>
                    <p className="text-primary-red mt-1 text-sm font-bold">
                      ปิดบริการ {siteData.closed_on}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-dark-text mb-4 font-bold">ติดตามความเคลื่อนไหวของเรา</h3>
                  <div className="flex gap-4">
                    <Button
                      className="text-md h-12 w-full rounded-xl bg-[#1877F2] text-white hover:bg-[#1877F2]/90"
                      asChild
                    >
                      <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer">
                        <Facebook className="mr-2 h-5 w-5" /> Facebook Page
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-3">
              <div className="relative h-[400px] w-full overflow-hidden rounded-3xl border-8 border-white bg-white shadow-md md:h-[450px]">
                <iframe
                  src={siteData.google_maps_embed}
```

### File: app/error.tsx
```typescript
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service like Sentry or Vercel
    console.error("Critical System Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFDF9] px-6 text-center">
      <div className="bg-destructive/10 mb-8 flex h-24 w-24 items-center justify-center rounded-[2.5rem] text-destructive">
        <AlertTriangle className="h-12 w-12" />
      </div>
      
      <h1 className="mb-4 text-4xl font-black tracking-tighter text-[#4A3728]">
        เกิดข้อผิดพลาดบางประการ
      </h1>
      
      <p className="text-muted-foreground mx-auto mb-12 max-w-md text-lg font-medium">
        ขออภัยในความไม่สะดวก ระบบพบปัญหาทางเทคนิคชั่วคราว <br />
        กรุณาลองใหม่อีกครั้ง หรือกลับสู่หน้าหลักครับ
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          onClick={() => reset()}
          variant="outline"
          className="h-14 rounded-2xl border-[#4A3728]/10 px-8 text-lg font-bold"
        >
          <RefreshCcw className="mr-2 h-5 w-5" /> ลองใหม่อีกครั้ง
        </Button>
        
        <Button
          asChild
          className="bg-primary h-14 rounded-2xl px-8 text-lg font-bold shadow-xl shadow-primary/20"
        >
          <Link href="/">
            <Home className="mr-2 h-5 w-5" /> กลับสู่หน้าหลัก
          </Link>
        </Button>
      </div>

      <div className="mt-16 text-[10px] font-black uppercase tracking-[0.3em] text-[#4A3728]/30">
        System Guard by AEMDEVWEB
      </div>
    </div>
  );
}
```

### File: app/globals.css
```typescript
@import "tailwindcss";

@plugin "tailwindcss-animate";

@theme {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  --color-background: #fffcf2;
  --color-foreground: #252422;

  --color-card: #ffffff;
  --color-card-foreground: #252422;

  --color-popover: #ffffff;
  --color-popover-foreground: #252422;

  --color-primary: #b22222;
  --color-primary-foreground: #ffffff;

  --color-secondary: #ffb700;
  --color-secondary-foreground: #252422;

  --color-muted: #f4f1de;
  --color-muted-foreground: #66615b;

  --color-accent: #eb5e28;
  --color-accent-foreground: #ffffff;

  --color-destructive: #d00000;
  --color-destructive-foreground: #ffffff;

  --color-border: #e9ecef;
  --color-input: #e9ecef;
  --color-ring: #b22222;

  --radius-lg: 1.5rem;
  --radius-md: 1rem;
  --radius-sm: 0.5rem;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer components {
  .glass {
    @apply border border-white/20 bg-white/80 backdrop-blur-md;
  }
  .food-card {
    @apply bg-card rounded-[2rem] border-none shadow-sm transition-all duration-500 hover:shadow-xl;
  }
}
```

### File: app/kapoamom/page.tsx
```typescript
import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Flame,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Leaf,
  Clock,
  ArrowRight,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import { getProductSchema, getBreadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = {
  title: "ซอสผัดกะเพรา kapoamom | สูตรแม่ทำให้ทาน อร่อยใน 2 นาที ไม่ต้องปรุงเพิ่ม",
  description:
    "สัมผัสรสชาติกะเพราแท้สูตรลับ 9 ปี ช.สหชัย เมืองตาก หอมกลิ่นเตาถ่าน จัดจ้านถึงใจ แค่เทซอส kapoamom 2-3 ช้อน ผัดกับเนื้อสัตว์ 2 นาที ก็อร่อยระดับตำนานเหมือนแม่มาผัดให้เอง สั่งจองล่วงหน้าได้ที่นี่!",
  keywords: [
    "ซอสผัดกะเพรา", 
    "กะเพราสำเร็จรูป", 
    "kapoamom", 
    "ซอสกะเพราไม่ต้องปรุงเพิ่ม", 
    "ช.สหชัย เมืองตาก", 
    "สูตรลับ 9 ปี", 
    "ผัดกะเพราให้อร่อย",
    "ซอสปรุงรสกะเพรา"
  ],
  openGraph: {
    title: "จบปัญหาผัดกะเพราไม่อร่อย! ด้วยซอส kapoamom ฝีมือแม่",
    description:
      "สูตรลับความอร่อย 9 ปีจากร้าน ช.สหชัย ส่งตรงถึงบ้านคุณ แค่เทแล้วผัด 2 นาที ก็ได้กะเพราที่จริงใจ หอมกลิ่นเตาถ่าน ไม่ต้องปรุงเพิ่ม!",
    url: `${siteConfig.identity.url}/kapoamom`,
    siteName: `kapoamom by ${siteConfig.identity.name}`,
    images: [
      {
        url: "/og-kapoamom.webp",
        width: 1200,
        height: 630,
        alt: "ซอสผัดกะเพรา kapoamom สูตรลับแม่ทำให้ทาน",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ซอสผัดกะเพรา kapoamom | อร่อยระดับตำนานใน 2 นาที",
    description: "ไม่ต้องปรุงเพิ่ม แค่มีซอส kapoamom ขวดเดียว ก็อร่อยเหมือนทานที่ร้าน ช.สหชัย",
    images: ["/og-kapoamom.webp"],
  },
};

export default function KapoamomPage() {
  const productSchema = getProductSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "หน้าแรก", item: "/" },
    { name: "ซอสผัดกะเพรา kapoamom", item: "/kapoamom" },
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF9] text-[#4A3728]">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div
            className="absolute top-0 left-0 h-full w-full bg-center bg-repeat opacity-10"
            style={{ backgroundImage: "url('/images/hero-bg-texture.webp')" }}
          />
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <AnimatedSection className="space-y-8 text-center lg:text-left">
                <Badge className="rounded-full border-none bg-[#E85D04]/10 px-4 py-1.5 font-bold tracking-widest text-[#E85D04] uppercase">
                  Authentic Taste since 2017
                </Badge>
                <h1 className="text-5xl leading-tight font-black tracking-tighter md:text-7xl">
                  แบรนด์ <span className="font-serif text-[#E85D04] italic">kapoamom</span> <br />
                  ซอสผัดกะเพราฝีมือแม่
                </h1>
                <p className="mx-auto max-w-xl text-xl leading-relaxed font-medium text-[#6B5B4B] md:text-2xl lg:mx-0">
                  "อร่อยเหมือนกะเพราแม่ที่ผัดให้แน่นอน" รสชาติจัดจ้านถึงใจ ไม่ต้องปรุงเพิ่ม
                  แค่เทแล้วผัด ก็อร่อยระดับตำนาน
                </p>
                <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
                  <Button
                    className="h-16 w-full rounded-2xl bg-[#E85D04] px-10 text-lg font-black text-white shadow-xl shadow-[#E85D04]/20 hover:bg-[#D05403] sm:w-auto"
                    asChild
```

### File: app/layout.tsx
```typescript
import type React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.identity.url),
  title: {
    default: siteConfig.identity.name,
    template: `%s | ${siteConfig.identity.name}`,
  },
  description: siteConfig.identity.description,
  keywords: siteConfig.identity.keywords,
  authors: [{ name: "Alogkorn Yomkerd (AEMZA MAX)", url: "https://www.me.aemdevweb.com" }],
  creator: "AEMDEVWEB - www.aemdevweb.com",
  publisher: "นายอลงกรณ์ ยมเกิด (Alogkorn Yomkerd)",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.identity.name,
    description: siteConfig.identity.description,
    url: siteConfig.identity.url,
    siteName: siteConfig.identity.name,
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: siteConfig.identity.name,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.identity.name,
    description: siteConfig.identity.description,
    images: ["/og-main.png"],
  },
  other: {
    "developer-contact": "https://www.aemdevweb.com",
    "developed-by": "AEMDEVWEB",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: siteConfig.identity.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { getRestaurantSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/lib/seo/json-ld";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurantSchema = getRestaurantSchema();

  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd data={restaurantSchema} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### File: app/loading.tsx
```typescript
export default function RootLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFDF9]">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-[#b22222]"></div>
        <div className="flex flex-col items-center animate-pulse">
          <p className="text-xl font-black tracking-tighter text-[#b22222]">ช.สหชัย เกี๊ยวปูหมูแดง</p>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4A3728]/50">
            Managed by AEMDEVWEB
          </p>
        </div>
      </div>
    </div>
  );
}
```

### File: app/manifest.ts
```typescript
import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.identity.fullName,
    short_name: siteConfig.identity.name,
    description: siteConfig.identity.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDF9",
    theme_color: siteConfig.identity.themeColor,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
```

### File: app/menu/page.tsx
```typescript
import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import servicesData from "@/data/services.json";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/lib/seo/json-ld";

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  img: string;
  recommended: boolean;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const metadata: Metadata = {
  title: "เมนูอร่อย | ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก",
  description:
    "รวมเมนูเด็ดร้าน ช.สหชัย เกี๊ยวปูหมูแดง บะหมี่ทำเอง หมูแดงย่างเตาถ่าน และเกี๊ยวปูเนื้อแน่น คัดสรรความอร่อยมาให้คุณ",
  keywords: ["เมนู ช.สหชัย", "บะหมี่เกี๊ยวปู", "ราคาบะหมี่ตาก", "ของกินเมืองตาก", "ร้านอร่อยตาก"],
};

export default function MenuPage() {
  const categories = servicesData.categories as unknown as MenuCategory[];
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "หน้าแรก", item: "/" },
    { name: "เมนูอิ่มจุใจ", item: "/menu" },
  ]);

  return (
    <div className="flex-min-h-screen bg-warm-cream flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <Navigation />

      <main className="flex-grow pt-24 pb-20">
        <div className="container-stable">
          <AnimatedSection className="mb-16 text-center">
            <Badge className="bg-primary-red/10 text-primary-red mb-4 border-none px-4 py-1 text-sm font-bold tracking-wider">
              OUR MENU
            </Badge>
            <h1 className="text-primary-dark mb-6 text-4xl font-extrabold md:text-5xl">
              เมนูความอร่อย <span className="text-primary-red">ช.สหชัย</span>
            </h1>
            <p className="text-light-text mx-auto max-w-2xl text-lg">
              ทุกชามคือความใส่ใจ เส้นบะหมี่ทำเองสูตรโบราณ หมูแดงย่างเตาถ่านหอมกรุ่น และเกี๊ยวปูคำโต
            </p>
          </AnimatedSection>

          {categories.map((category: MenuCategory, catIdx: number) => (
            <AnimatedSection key={catIdx} className="mb-20">
              <div className="mb-8 flex items-center gap-4">
                <h2 className="text-dark-text text-3xl font-bold whitespace-nowrap">
                  {category.name}
                </h2>
                <div className="bg-noodle-gold/50 h-px w-full"></div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item: MenuItem) => (
                  <Card
                    key={item.id}
                    className="group overflow-hidden rounded-2xl border-none bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={`/images/${item.img}`}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {item.recommended && (
                        <Badge className="bg-noodle-gold text-primary-dark absolute top-4 left-4 border-none px-3 py-1 font-bold shadow-md">
                          <Star className="fill-primary-dark mr-1 h-3 w-3" /> แนะนำ
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="text-dark-text text-xl leading-tight font-bold">
                          {item.name}
                        </h3>
                        <span className="text-primary-red bg-warm-cream border-primary-red/10 shrink-0 rounded-lg border px-3 py-1 text-lg font-bold">
                          {item.price}.-
                        </span>
                      </div>
                      <p className="text-light-text text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
```

### File: app/not-found.tsx
```typescript
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchX, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFDF9]">
      <Navigation />
      <main className="flex flex-grow flex-col items-center justify-center px-6 text-center pt-20">
        <div className="bg-primary/5 mb-8 flex h-32 w-32 items-center justify-center rounded-[3rem] text-primary">
          <SearchX className="h-16 w-16" />
        </div>
        
        <h1 className="mb-4 text-5xl font-black tracking-tighter text-[#4A3728] md:text-7xl">
          ไม่พบหน้าที่ต้องการ
        </h1>
        
        <p className="text-muted-foreground mx-auto mb-12 max-w-md text-lg font-medium">
          ขออภัยครับ ดูเหมือนว่าหน้าที่คุณกำลังตามหาจะไม่มีอยู่จริง <br />
          หรืออาจถูกย้ายไปที่อื่นแล้ว แวะทานบะหมี่ก่อนไหมครับ?
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            variant="outline"
            className="h-14 rounded-2xl border-[#4A3728]/10 px-8 text-lg font-bold"
          >
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-5 w-5" /> ย้อนกลับ
            </Link>
          </Button>
          
          <Button
            asChild
            className="bg-primary h-14 rounded-2xl px-8 text-lg font-bold shadow-xl shadow-primary/20"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" /> กลับหน้าหลัก
            </Link>
          </Button>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
```

### File: app/page.tsx
```typescript
import type { Metadata } from "next";
import { siteConfig } from "@/constants/site-config";
import { HeroSection } from "@/components/home/Hero";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { MenuHighlights } from "@/components/home/MenuHighlights";
import { ReviewCarousel } from "@/components/home/Testimonials";
import { KnowledgeCorner } from "@/components/home/KnowledgeCorner";
import { ProductTeaser } from "@/components/home/ProductTeaser";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Quote, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: siteConfig.identity.fullName,
  description: siteConfig.identity.description,
  keywords: siteConfig.identity.keywords,
};

export default function Home() {
  const { contact, gallery } = siteConfig;

  return (
    <div className="bg-background text-foreground selection:bg-primary/10 selection:text-primary flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* 1. HERO - THE FIRST IMPRESSION */}
        <HeroSection />

        {/* 2. THE SECRET OF TASTE - บะหมี่ไข่ 98% */}
        <section className="relative overflow-hidden py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-20 lg:flex-row">
              <div className="relative lg:w-1/2">
                <div className="bg-secondary/20 absolute -top-10 -left-10 h-40 w-40 animate-pulse rounded-full opacity-50 blur-3xl" />
                <div className="relative z-10 aspect-[4/5] rotate-2 overflow-hidden rounded-[3rem] border-[12px] border-white shadow-2xl transition-transform duration-700 hover:rotate-0">
                  <Image
                    src="/images/blog-noodle-1.webp"
                    alt="ความเหนียวหนึบของเส้นบะหมี่ไข่ 98%"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary absolute -right-10 -bottom-10 z-20 max-w-[240px] -rotate-3 rounded-[2.5rem] p-8 text-white shadow-2xl transition-transform duration-500 hover:rotate-0">
                  <Quote className="mb-4 h-8 w-8 opacity-50" />
                  <p className="text-lg leading-tight font-bold">
                    "เราใช้ไข่สดถึง 98% เพื่อความเหนียวหนึบที่เป็นเอกลักษณ์"
                  </p>
                  <div className="mt-4 text-xs font-bold tracking-widest uppercase opacity-70">
                    - เฮียเนก
                  </div>
                </div>
              </div>

              <div className="space-y-10 text-center lg:w-1/2 lg:text-left">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary rounded-full border-none px-4 py-1.5 font-bold">
                    ความลับของความอร่อย
                  </Badge>
                  <h2 className="text-4xl leading-none font-black tracking-tighter md:text-6xl">
                    สัมผัสเส้นบะหมี่ <br />
                    <span className="text-primary italic">ไข่สด 98%</span>
                  </h2>
                </div>

                <p className="text-muted-foreground text-xl leading-relaxed font-medium">
                  หนึ่งเดียวในเมืองตากที่ยังคงรักษาสัดส่วนไข่สดสูงถึง 98%
                  จนได้เส้นบะหมี่ที่เหนียวหนึบ สู้ฟัน ไม่เละ และมีกลิ่นหอมของไข่ชัดเจน
                  ทุกชามที่เสิร์ฟคือความภูมิใจที่เราอยากให้คุณได้ลิ้มลองความแตกต่างที่แท้จริง
                </p>

                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="border-primary/20 space-y-2 border-l-4 pl-6">
                    <div className="text-foreground text-left text-3xl font-black">98%</div>
                    <p className="text-muted-foreground text-left text-sm font-bold tracking-wider uppercase">
                      สัดส่วนไข่สด
                    </p>
                  </div>
                  <div className="border-primary/20 space-y-2 border-l-4 pl-6">
                    <div className="text-foreground text-left text-3xl font-black">เหนียวหนึบ</div>
                    <p className="text-muted-foreground text-left text-sm font-bold tracking-wider uppercase">
                      เอกลักษณ์เฉพาะตัว
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SIGNATURE MENUS */}
        <section id="menu" className="bg-muted/30 py-32">
          <div className="container mx-auto px-6">
            <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
              <Badge className="bg-secondary/20 text-secondary-foreground rounded-full border-none px-4 py-1 font-bold tracking-widest uppercase">
                เมนูแนะนำ
              </Badge>
```

### File: app/privacy/page.tsx
```typescript
import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัว | ${siteConfig.identity.name}`,
  description: "นโยบายการคุ้มครองข้อมูลส่วนบุคคลของร้าน ช.สหชัย พัฒนาและดูแลระบบโดย AEMDEVWEB",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-4xl font-black tracking-tighter md:text-5xl">
                นโยบายความเป็นส่วนตัว
              </h1>
              <p className="text-muted-foreground">ปรับปรุงล่าสุดเมื่อ: 13 มีนาคม 2026</p>
            </div>

            <div className="prose prose-neutral text-muted-foreground max-w-none space-y-12 leading-relaxed">
              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">บทนำ</h2>
                <p>
                  ร้าน ช.สหชัย เกี๊ยวปูหมูแดง ("เรา")
                  ให้ความสำคัญอย่างยิ่งต่อการคุ้มครองข้อมูลส่วนบุคคลของคุณ
                  นโยบายนี้ระบุถึงวิธีการที่เราเก็บรวบรวม ใช้
                  และเปิดเผยข้อมูลของคุณผ่านเว็บไซต์ที่พัฒนาโดย <strong>AEMDEVWEB</strong>
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">
                  1. ข้อมูลที่เราเก็บรวบรวม
                </h2>
                <p>เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลที่ท่านเลือกที่จะให้ไว้กับเรา ได้แก่:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>ข้อมูลระบุตัวตน: ชื่อ-นามสกุล</li>
                  <li>ข้อมูลการติดต่อ: เบอร์โทรศัพท์, ID LINE, ที่อยู่อีเมล</li>
                  <li>
                    ข้อมูลทางเทคนิค: ที่อยู่ IP, ประเภทเบราว์เซอร์ และคุกกี้
                    (สำหรับการวิเคราะห์คุณภาพเว็บไซต์โดย AEMDEVWEB)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">
                  2. วัตถุประสงค์ในการใช้ข้อมูล
                </h2>
                <p>เรานำข้อมูลของท่านไปใช้เพื่อวัตถุประสงค์ดังต่อไปนี้:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>เพื่อดำเนินการตามคำสั่งซื้อหรือบริการจัดเลี้ยงนอกสถานที่</li>
                  <li>เพื่อติดต่อสื่อสารและยืนยันนัดหมายกับท่าน</li>
                  <li>
                    เพื่อวิเคราะห์และปรับปรุงประสิทธิภาพของเว็บไซต์โดย <strong>AEMDEVWEB</strong>
                  </li>
                  <li>เพื่อปฏิบัติตามข้อบังคับทางกฎหมายที่เกี่ยวข้อง</li>
                </ul>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">3. การคุ้มครองข้อมูล</h2>
                <p>
                  เรามีมาตรการรักษาความปลอดภัยทางเทคนิคและการบริหารจัดการที่ได้มาตรฐาน
                  เพื่อป้องกันไม่ให้ข้อมูลของท่านสูญหาย หรือถูกเข้าถึงโดยไม่ได้รับอนุญาต
                  โดยระบบของเราได้รับการพัฒนาและตรวจสอบความปลอดภัยอย่างสม่ำเสมอโดยทีมวิศวกรจาก{" "}
                  <strong>AEMDEVWEB</strong>
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">4. สิทธิของท่าน</h2>
                <p>
                  ท่านมีสิทธิในการขอเข้าถึง แก้ไข ลบ หรือคัดค้านการประมวลผลข้อมูลส่วนบุคคลของท่าน
                  ท่านสามารถติดต่อเราได้โดยตรงผ่านช่องทางที่ระบุไว้ในหน้า "ติดต่อเรา"
                </p>
              </section>

              <div className="bg-primary/5 border-primary/10 mt-20 rounded-[3rem] border p-10 text-center">
                <p className="text-muted-foreground mb-2 text-sm font-bold tracking-widest uppercase">
                  Developed & Managed by
                </p>
                <h3 className="text-primary text-2xl font-black italic">AEMDEVWEB</h3>
                <p className="mt-4 text-sm leading-relaxed">
                  "เรามุ่งมั่นสร้างนวัตกรรมดิจิทัลที่ปลอดภัยและโปร่งใส
                  เพื่อการเติบโตอย่างยั่งยืนของธุรกิจท้องถิ่น"
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <FooterSection />
    </div>
```

### File: app/robots.ts
```typescript
import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/_next/static/", "/_next/image/"],
      disallow: ["/api/"],
    },
    sitemap: `${siteConfig.identity.url}/sitemap.xml`,
  };
}
```

### File: app/sitemap.ts
```typescript
import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";
import { blogRegistry } from "@/constants/blog-registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.identity.url;

  // 1. Static Pages
  const staticPages = [
    "",
    "/about",
    "/menu",
    "/kapoamom",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Dynamic Blog Posts
  const blogPages = blogRegistry.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
```

### File: app/terms/page.tsx
```typescript
import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Header";
import { FooterSection } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/animated-section";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: `ข้อกำหนดการใช้งาน | ${siteConfig.identity.name}`,
  description: "เงื่อนไขและข้อกำหนดการใช้งานเว็บไซต์ ช.สหชัย พัฒนาและดูแลโดย AEMDEVWEB",
};

export default function TermsPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-4xl font-black tracking-tighter md:text-5xl">
                ข้อกำหนดการใช้งาน
              </h1>
              <p className="text-muted-foreground">มีผลบังคับใช้ตั้งแต่วันที่: 13 มีนาคม 2026</p>
            </div>

            <div className="prose prose-neutral text-muted-foreground max-w-none space-y-12 leading-relaxed">
              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">1. การยอมรับเงื่อนไข</h2>
                <p>
                  การเข้าถึงหรือใช้งานเว็บไซต์นี้
                  ถือว่าท่านตกลงที่จะผูกพันตามข้อกำหนดและเงื่อนไขการใช้งานเหล่านี้
                  กฎหมายและข้อบังคับที่เกี่ยวข้องทั้งหมด หากท่านไม่เห็นด้วยกับเงื่อนไขใดๆ
                  ท่านจะไม่ได้รับอนุญาตให้ใช้งานเว็บไซต์นี้
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">2. ทรัพย์สินทางปัญญา</h2>
                <p>
                  เนื้อหา รูปภาพ โลโก้ และการออกแบบเว็บไซต์ทั้งหมดเป็นทรัพย์สินทางปัญญาของร้าน
                  ช.สหชัย เกี๊ยวปูหมูแดง และ <strong>AEMDEVWEB</strong> ห้ามมิให้ทำซ้ำ ดัดแปลง
                  หรือเผยแพร่โดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษร
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">
                  3. ข้อมูลผลิตภัณฑ์และราคา
                </h2>
                <p>
                  เราพยายามอย่างเต็มที่ในการให้ข้อมูลราคาและรายการอาหารที่ถูกต้องที่สุด อย่างไรก็ตาม
                  ราคาที่แสดงอาจมีการเปลี่ยนแปลงได้ตามความเหมาะสมและสถานการณ์
                  โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                  โดยเฉพาะในกรณีของบริการรับเหมาจัดเลี้ยงนอกสถานที่ซึ่งต้องมีการประเมินราคาเป็นรายกรณี
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">
                  4. การปฏิเสธความรับผิดชอบ
                </h2>
                <p>
                  เนื้อหาบนเว็บไซต์นี้จัดทำขึ้นเพื่อการให้ข้อมูลทั่วไปเท่านั้น ร้าน ช.สหชัย และ{" "}
                  <strong>AEMDEVWEB</strong> จะไม่รับผิดชอบต่อความเสียหายใดๆ
                  ที่เกิดจากการใช้งานหรือการไม่สามารถใช้งานเนื้อหาบนเว็บไซต์นี้ได้
                </p>
              </section>

              <section>
                <h2 className="text-foreground mb-6 text-2xl font-bold">5. การแก้ไขปรับปรุง</h2>
                <p>
                  เราอาจปรับปรุงข้อกำหนดการใช้งานเหล่านี้ได้ทุกเมื่อโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                  การใช้งานเว็บไซต์อย่างต่อเนื่องของท่านจะถือว่าท่านยอมรับการเปลี่ยนแปลงดังกล่าว
                </p>
              </section>

              <div className="border-border mt-20 flex flex-col items-center justify-between gap-6 border-t pt-16 md:flex-row">
                <div className="text-center md:text-left">
                  <p className="text-primary text-xs font-bold tracking-widest uppercase">
                    Technical Provider
                  </p>
                  <h4 className="text-xl font-black italic">AEMDEVWEB</h4>
                </div>
                <div className="text-center text-sm md:text-right">
                  <p>ดูแลระบบโดยทีมงานมืออาชีพ</p>
                  <p className="font-bold">Next.js 16 High-Performance Infrastructure</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
```

### File: components/animated-section.tsx
```typescript
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.97 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### File: components/home/Hero.tsx
```typescript
"use client";

import { motion } from "framer-motion";
import { Utensils, Heart, ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/constants/site-config";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Story Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/founders-warmth.webp"
          alt="เบื้องหลังความอร่อย ช.สหชัย"
          fill
          className="scale-105 object-cover opacity-20"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="from-background to-background absolute inset-0 bg-gradient-to-b via-transparent" />
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-primary/5 border-primary/10 mb-8 inline-flex items-center gap-2 rounded-full border px-6 py-2"
        >
          <Heart className="text-primary h-4 w-4 animate-pulse" />
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-foreground mb-8 text-5xl leading-[0.95] font-black tracking-tighter md:text-8xl"
        >
          {hero.headlineLine1} <br />
          <span className="text-primary font-serif italic">{hero.headlineLine2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-muted-foreground mx-auto mb-12 max-w-2xl text-xl leading-relaxed font-medium md:text-2xl"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <a
            href="#menu"
            className="group bg-primary text-primary-foreground shadow-primary/30 hover:bg-primary/90 relative inline-flex items-center justify-center gap-3 rounded-[2rem] px-10 py-5 text-lg font-bold shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
          >
            <Utensils className="h-5 w-5 transition-transform group-hover:rotate-12" />
            ลิ้มลองความอร่อย
          </a>
          <a
            href="#contact"
            className="text-foreground hover:text-primary flex items-center gap-2 font-bold transition-colors"
          >
            เส้นทางมาร้าน <ChevronDown className="mt-1 h-4 w-4 animate-bounce" />
          </a>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -left-10 hidden lg:block"
        >
          <div className="border-primary/5 flex flex-col items-center rounded-[2.5rem] border bg-white/80 p-6 shadow-xl backdrop-blur-xl">
            <span className="text-primary text-3xl font-black">9</span>
            <span className="text-muted-foreground text-center text-[10px] font-bold tracking-widest uppercase">
              ปีแห่งการ
              <br />
              สั่งสมวิชา
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="from-background absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
    </section>
  );
```

### File: components/home/KnowledgeCorner.tsx
```typescript
"use client";

import { cateringService } from "@/constants/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Utensils, ArrowRight, BookOpen, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// สร้าง Mock Data สำหรับ Blog ชั่วคราว (หรือจะดึงจาก API/FileSystem ใน Server Component ก็ได้)
// ในที่นี้เป็น Client Component เราจะใช้ข้อมูลคงที่ที่สอดคล้องกับไฟล์ MDX ครับ
const latestBlogs = [
  {
    slug: "legend-of-sahachai-noodle",
    title: "5 เหตุผลที่ทำไมบะหมี่เกี๊ยวปู ช.สหชัย ถึงเป็นตำนานเมืองตากกว่า 9 ปี",
    date: "2026-03-10",
    image: "blog-noodle-1.webp",
  },
  {
    slug: "secret-red-pork-recipe",
    title: "สูตรลับหมูแดงย่างเตาถ่าน เฮียเนก: มรดกความอร่อยที่หาทานยาก",
    date: "2026-03-05",
    image: "blog-noodle-2.webp",
  },
];

export function KnowledgeCorner() {
  return (
    <section className="bg-background overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="max-w-2xl space-y-4">
            <Badge className="bg-primary/10 text-primary rounded-full border-none px-4 py-1 font-bold tracking-widest uppercase">
              Services & Stories
            </Badge>
            <h2 className="text-4xl font-black tracking-tighter md:text-5xl">
              บริการเด่น & <span className="text-primary italic">มุมความรู้</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-primary group mb-2 flex items-center gap-2 font-bold hover:underline"
          >
            ดูข่าวสารทั้งหมด{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* BUSINESS FIRST: CATERING CARD (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative lg:col-span-2"
          >
            <div className="bg-primary/5 absolute inset-0 -rotate-1 rounded-[3rem] transition-transform duration-500 group-hover:rotate-0" />
            <div className="border-primary/5 relative flex h-full flex-col items-center gap-10 overflow-hidden rounded-[3rem] border bg-white p-8 shadow-xl md:flex-row md:p-12">
              <div className="relative z-10 space-y-6 md:w-1/2">
                <div className="bg-primary shadow-primary/30 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg">
                  <Utensils className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-black tracking-tight md:text-4xl">
                  {cateringService.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {cateringService.description}
                </p>
                <div className="space-y-3">
                  {cateringService.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-bold">
                      <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="shadow-primary/20 h-14 rounded-2xl px-10 text-lg font-black shadow-xl transition-all hover:-translate-y-1"
                  asChild
                >
                  <Link href="/contact">{cateringService.cta}</Link>
                </Button>
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] shadow-2xl md:h-full md:w-1/2">
                <Image
                  src="/images/blog-noodle-4.webp"
                  alt="รับเหมานอกสถานที่ ช.สหชัย"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-6 bottom-6 left-6 text-sm font-bold text-white">
                  "พร้อมเสิร์ฟความอร่อยถึงที่ ทั่วจังหวัดตาก"
                </div>
              </div>
            </div>
          </motion.div>

```

### File: components/home/MenuHighlights.tsx
```typescript
"use client";

import { Check } from "lucide-react";
import { siteConfig } from "@/constants/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function MenuHighlights() {
  const { pricing } = siteConfig;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {pricing.tiers.map((tier, index) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`bg-card relative flex flex-col rounded-[32px] border p-8 transition-all duration-500 hover:shadow-2xl ${
            tier.highlighted
              ? "border-primary ring-primary/20 z-10 scale-105 shadow-xl ring-1"
              : "border-border"
          }`}
        >
          {tier.highlighted && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-3 text-[10px] font-bold tracking-wider uppercase shadow-md">
                เมนูยอดนิยม
              </Badge>
            </div>
          )}

          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold">{tier.name}</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-foreground text-4xl font-bold tracking-tight">
                {tier.price}
              </span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed italic">
              "{tier.description}"
            </p>
          </div>

          <ul className="mb-10 flex-grow space-y-4">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <div className="bg-primary/10 text-primary mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full">
                  <Check className="h-2.5 w-2.5" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            variant={tier.highlighted ? "default" : "outline"}
            className="h-12 w-full rounded-xl text-sm font-bold tracking-wide"
            asChild
          >
            <a href="#contact">{tier.cta}</a>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
```

### File: components/home/ProductTeaser.tsx
```typescript
"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProductTeaser() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group bg-primary/5 border-primary/10 relative overflow-hidden rounded-[3.5rem] border p-1 md:p-2"
        >
          <div className="relative flex flex-col items-center gap-12 overflow-hidden rounded-[3rem] bg-white p-8 md:flex-row md:p-16">
            {/* Background Accent */}
            <div className="bg-primary/5 absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full blur-3xl" />

            {/* Image/Visual Side - New Brand kapoamom */}
            <div className="relative mx-auto aspect-square w-full max-w-[320px] md:mx-0 md:w-1/3">
              <div className="bg-primary/20 absolute inset-0 animate-pulse rounded-full opacity-20" />
              <div className="bg-warm-cream relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
                <Image
                  src="/images/kapoamom-sauce.webp"
                  alt="ซอสผัดกะเพราฝีมือแม่ แบรนด์ kapoamom"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-primary absolute -right-4 -bottom-4 z-20 rotate-12 rounded-2xl p-4 text-xs font-black tracking-tighter text-white uppercase shadow-xl transition-transform group-hover:rotate-0">
                kapoamom <br /> Original
              </div>
            </div>

            {/* Content Side - New Brand Details */}
            <div className="relative z-10 space-y-6 text-center md:w-2/3 md:text-left">
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <Badge className="bg-primary flex items-center gap-2 rounded-full border-none px-4 py-1 font-bold tracking-widest text-white uppercase">
                  <Sparkles className="h-3 w-3" /> New Product
                </Badge>
                <span className="text-muted-foreground text-sm font-bold italic">
                  แบรนด์ใหม่ "kapoamom" (ซอสผัดกะเพราฝีมือแม่)
                </span>
              </div>

              <h2 className="text-4xl leading-tight font-black tracking-tighter md:text-6xl">
                กะเพราหมูสับทำเอง <br />
                <span className="text-primary font-serif text-3xl italic md:text-5xl">
                  ง่ายๆ ได้ที่บ้านคุณ
                </span>
              </h2>

              <div className="bg-primary/5 border-primary rounded-r-2xl border-l-4 p-6">
                <p className="text-foreground text-xl leading-relaxed font-bold italic">
                  "อร่อยเหมือนกะเพราแม่ที่ผัดให้แน่นอน"
                </p>
              </div>

              <p className="text-muted-foreground max-w-xl text-lg leading-relaxed font-medium">
                สัมผัสรสชาติจัดจ้าน หอมกลิ่นใบกะเพราแท้และสูตรลับฉบับฝีมือแม่ ไม่ต้องปรุงเพิ่ม
                แค่เทแล้วผัด ก็ได้รสชาติระดับตำนาน ช.สหชัย
                คัดสรรวัตถุดิบคุณภาพดีเพื่อมื้อพิเศษของทุกคนในครอบครัว
              </p>

              <div className="flex flex-col items-center gap-6 pt-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <UtensilsCrossed className="text-primary h-5 w-5" />
                  <span className="text-primary text-sm font-black tracking-widest uppercase">
                    เร็วๆ นี้
                  </span>
                </div>
                <div className="bg-border hidden h-4 w-px sm:block" />
                {/* UPDATED LINK TO PRODUCT PAGE */}
                <Link
                  href="/kapoamom"
                  className="text-muted-foreground hover:text-primary group/btn flex items-center gap-2 text-xs font-black tracking-widest uppercase transition-all"
                >
                  เข้าชมหน้าผลิตภัณฑ์{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

### File: components/home/Testimonials.tsx
```typescript
"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { customerReviews } from "@/data/reviews";
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="reviews" className="bg-muted/10 relative overflow-hidden py-32">
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-xl space-y-4">
            <Badge className="bg-primary/10 text-primary rounded-full border-none px-4 py-1 font-bold tracking-widest uppercase">
              รีวิวจริงจากลูกค้า
            </Badge>
            <h2 className="text-4xl leading-none font-black tracking-tighter md:text-5xl">
              ความประทับใจ <br />
              <span className="text-primary text-4xl italic md:text-6xl">การันตีความอร่อย</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="border-primary/20 text-primary hover:bg-primary flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-lg transition-all hover:text-white active:scale-90"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollNext}
              className="border-primary/20 text-primary hover:bg-primary flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-lg transition-all hover:text-white active:scale-90"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="cursor-grab overflow-hidden active:cursor-grabbing" ref={emblaRef}>
          <div className="-ml-6 flex">
            {customerReviews.slice(0, 12).map((review) => (
              <div
                key={review.id}
                className="flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="border-primary/5 group flex h-full flex-col justify-between rounded-[3rem] border bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div>
                    <div className="mb-6 flex items-start justify-between">
                      <div className="text-secondary flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <Quote className="text-primary/5 h-8 w-8" />
                    </div>
                    <p className="text-foreground mb-8 text-lg leading-relaxed font-medium italic">
                      "{review.comment}"
                    </p>
                  </div>

                  <div className="border-muted flex items-center gap-4 border-t pt-6">
                    <div className="bg-primary/5 text-primary flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-black">
                      {review.avatarInitials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground font-bold">{review.name}</span>
                        {review.isVerified && (
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" />
                        )}
                      </div>
                      <div className="text-muted-foreground flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase">
                        <MapPin className="h-2.5 w-2.5" />
                        {review.location} • {review.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
```

### File: components/layout/Footer.tsx
```typescript
"use client";

import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import { Facebook, MapPin, Phone, MessageCircle } from "lucide-react";

export function FooterSection() {
  const { identity, contact, navigation } = siteConfig;

  return (
    <footer className="bg-muted/30 border-border border-t py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <span className="text-foreground text-2xl font-bold tracking-tighter">
                ช.สหชัย <span className="text-primary">เกี๊ยวปูหมูแดง</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm text-sm leading-relaxed">
              {identity.description}
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/SahachaiNoodleTak"
                target="_blank"
                className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={contact.lineUrl}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00B900]/10 text-[#00B900] transition-all hover:scale-110 hover:bg-[#00B900] hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link
                href={contact.googleMaps}
                target="_blank"
                className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:text-white"
              >
                <MapPin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest uppercase">เมนูเว็บไซต์</h4>
            <ul className="space-y-4">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest uppercase">ติดต่อร้าน</h4>
            <div className="space-y-4">
              <div className="text-muted-foreground flex gap-3 text-sm">
                <Phone className="text-primary h-4 w-4 shrink-0" />
                <span>{contact.phoneDisplay}</span>
              </div>
              <div className="text-muted-foreground flex gap-3 text-sm leading-relaxed">
                <MapPin className="text-primary h-4 w-4 shrink-0" />
                <span>{contact.address}</span>
              </div>
              <div className="bg-primary/5 border-primary/10 mt-6 rounded-2xl border p-4">
                <p className="text-primary mb-1 text-xs font-bold tracking-widest uppercase">
                  เวลาเปิดให้บริการ
                </p>
                <p className="text-foreground text-xs font-semibold">{contact.businessHours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-border mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} {identity.name}. สงวนลิขสิทธิ์. พัฒนาโดย AEMDEVWEB.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground text-[10px] tracking-widest uppercase transition-colors"
            >
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link
              href="/terms"
```

### File: components/layout/Header.tsx
```typescript
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/constants/site-config";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-background/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="border-primary/10 relative h-10 w-10 overflow-hidden rounded-xl border shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.svg"
                alt="โลโก้ร้าน ช.สหชัย"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-foreground text-lg font-bold tracking-tighter">ช.สหชัย</span>
              <span className="text-primary text-[10px] font-bold tracking-widest uppercase">
                since 2017
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {siteConfig.navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium tracking-wide transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="glow-border bg-primary/10 hover:bg-primary/20 text-primary hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 sm:inline-flex"
            >
              สั่งอาหาร
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:bg-secondary rounded-lg p-2 transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-background/80 fixed inset-0 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="glass fixed top-20 right-0 bottom-0 w-72 md:hidden"
            >
              <div className="flex flex-col gap-6 p-8">
                {siteConfig.navigation.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
```

### File: components/theme-provider.tsx
```typescript
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

### File: components/ui/accordion.tsx
```typescript
"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
```

### File: components/ui/alert-dialog.tsx
```typescript
"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function AlertDialog({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />;
}

function AlertDialogPortal({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />;
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
```

### File: components/ui/alert.tsx
```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
```

### File: components/ui/aspect-ratio.tsx
```typescript
"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

function AspectRatio({ ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
```

### File: components/ui/avatar.tsx
```typescript
"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("bg-muted flex size-full items-center justify-center rounded-full", className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
```

### File: components/ui/badge.tsx
```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
```

### File: components/ui/breadcrumb.tsx
```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
```

### File: components/ui/button-group.tsx
```typescript
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  );
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        className
      )}
      {...props}
    />
  );
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants };
```

### File: components/ui/button.tsx
```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
```

### File: components/ui/calendar.tsx
```typescript
"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("flex gap-4 flex-col md:flex-row relative", defaultClassNames.months),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("absolute bg-popover inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn("select-none w-(--cell-size)", defaultClassNames.week_number_header),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn("rounded-l-md bg-accent", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
```

### File: components/ui/card.tsx
```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-6", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
```

### File: components/ui/carousel.tsx
```typescript
"use client";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
```

### File: components/ui/chart.tsx
```typescript
"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent({
  active,
```

### File: components/ui/checkbox.tsx
```typescript
"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
```

### File: components/ui/collapsible.tsx
```typescript
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

function Collapsible({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return <CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />;
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return <CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props} />;
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
```

### File: components/ui/command.tsx
```typescript
"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props}
    />
  );
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("overflow-hidden p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="flex h-9 items-center gap-2 border-b px-3">
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className)}
      {...props}
    />
  );
}

function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  );
}

function CommandGroup({
  className,
```

### File: components/ui/context-menu.tsx
```typescript
"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function ContextMenu({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />;
}

function ContextMenuGroup({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />;
}

function ContextMenuPortal({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />;
}

function ContextMenuSub({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return <ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group" {...props} />;
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  );
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
```

### File: components/ui/dialog.tsx
```typescript
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
```

### File: components/ui/drawer.tsx
```typescript
"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

function Drawer({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      )}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function DrawerTitle({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function DrawerDescription({
```

### File: components/ui/dropdown-menu.tsx
```typescript
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
```

### File: components/ui/empty.tsx
```typescript
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      )}
      {...props}
    />
  );
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn("flex max-w-sm flex-col items-center gap-2 text-center", className)}
      {...props}
    />
  );
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  );
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  );
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      )}
      {...props}
    />
  );
}

export { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia };
```

### File: components/ui/field.tsx
```typescript
"use client";

import { useMemo } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  );
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      )}
      {...props}
    />
  );
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className
      )}
      {...props}
    />
  );
}

const fieldVariants = cva("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
  variants: {
    orientation: {
      vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
      horizontal: [
        "flex-row items-center",
        "[&>[data-slot=field-label]]:flex-auto",
        "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      ],
      responsive: [
        "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
        "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
        "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      ],
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  );
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", className)}
      {...props}
    />
```

### File: components/ui/form.tsx
```typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

function FormLabel({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
```

### File: components/ui/hover-card.tsx
```typescript
"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

function HoverCard({ ...props }: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({ ...props }: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />;
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
```

### File: components/ui/input-group.tsx
```typescript
"use client";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none",
        "h-9 has-[>textarea]:h-auto",

        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",

        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",

        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",

        className
      )}
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end":
          "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
);

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    />
  );
}

const inputGroupButtonVariants = cva("text-sm shadow-none flex gap-2 items-center", {
  variants: {
    size: {
      xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
      sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
```

### File: components/ui/input-otp.tsx
```typescript
"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-group" className={cn("flex items-center", className)} {...props} />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
```

### File: components/ui/input.tsx
```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
```

### File: components/ui/item.tsx
```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn("group/item-group flex flex-col", className)}
      {...props}
    />
  );
}

function ItemSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-0", className)}
      {...props}
    />
  );
}

const itemVariants = cva(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a&]:hover:bg-accent/50 [a&]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50",
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  );
}

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

```

### File: components/ui/kbd.tsx
```typescript
import { cn } from "@/lib/utils";

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      )}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
```

### File: components/ui/label.tsx
```typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Label };
```

### File: components/ui/menubar.tsx
```typescript
"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Menubar({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )}
      {...props}
    />
  );
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />;
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className
      )}
      {...props}
    />
  );
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </MenubarPortal>
  );
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

```

### File: components/ui/navigation-menu.tsx
```typescript
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
```

### File: components/ui/pagination.tsx
```typescript
import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
```

### File: components/ui/popover.tsx
```typescript
"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
```

### File: components/ui/progress.tsx
```typescript
"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
```

### File: components/ui/radio-group.tsx
```typescript
"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
```

### File: components/ui/resizable.tsx
```typescript
"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
      {...props}
    />
  );
}

function ResizablePanel({ ...props }: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
```

### File: components/ui/scroll-area.tsx
```typescript
"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };
```

### File: components/ui/select.tsx
```typescript
"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
```

### File: components/ui/separator.tsx
```typescript
"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
```

### File: components/ui/sheet.tsx
```typescript
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
```

### File: components/ui/sidebar.tsx
```typescript
"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
```

### File: components/ui/skeleton.tsx
```typescript
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
```

### File: components/ui/slider.tsx
```typescript
"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        }
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          }
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
```

### File: components/ui/sonner.tsx
```typescript
"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
```

### File: components/ui/spinner.tsx
```typescript
import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
```

### File: components/ui/switch.tsx
```typescript
"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        }
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
```

### File: components/ui/table.tsx
```typescript
"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead data-slot="table-header" className={cn("[&_tr]:border-b", className)} {...props} />;
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
```

### File: components/ui/tabs.tsx
```typescript
"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
```

### File: components/ui/textarea.tsx
```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
```

### File: components/ui/toast.tsx
```typescript
"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "ring-offset-background hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "text-foreground/50 hover:text-foreground absolute top-2 right-2 rounded-md p-1 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:ring-2 focus:outline-none group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
```

### File: components/ui/toaster.tsx
```typescript
"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
```

### File: components/ui/toggle-group.tsx
```typescript
"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
```

### File: components/ui/toggle.tsx
```typescript
"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
```

### File: components/ui/tooltip.tsx
```typescript
"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
```

### File: components/ui/use-mobile.tsx
```typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

### File: components/ui/use-toast.ts
```typescript
"use client";

// Inspired by react-hot-toast library
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

```

### File: hooks/use-mobile.ts
```typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

### File: hooks/use-toast.ts
```typescript
"use client";

// Inspired by react-hot-toast library
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

```

### File: lib/api/data.ts
```typescript
import { cache } from "react";
import { blogRegistry, BlogEntry } from "@/constants/blog-registry";
import { siteConfig } from "@/constants/site-config";

/**
 * @file lib/api/data.ts
 * @description Advanced Data Access Layer using React cache for optimal performance.
 * This acts as the Single Source of Truth for fetching application data.
 */

// 1. Fetch all blog posts (Cached)
export const getAllBlogs = cache(async (): Promise<BlogEntry[]> => {
  return blogRegistry;
});

// 2. Fetch single blog post by slug (Cached)
export const getBlogBySlug = cache(async (slug: string): Promise<BlogEntry | undefined> => {
  return blogRegistry.find((blog) => blog.slug === slug);
});

// 3. Get Site Configuration (Cached)
export const getSiteConfig = cache(async () => {
  return siteConfig;
});

// 4. Get Featured Content (Example of filtered data fetching)
export const getFeaturedBlogs = cache(async (limit = 3): Promise<BlogEntry[]> => {
  return blogRegistry.slice(0, limit);
});
```

### File: lib/seo/json-ld.tsx
```typescript
import React from "react";

/**
 * @file lib/seo/json-ld.tsx
 * @description Safe JSON-LD injector component for Next.js 16.
 */

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

### File: lib/seo/schema.ts
```typescript
import { siteConfig } from "@/constants/site-config";
import { BlogEntry } from "@/constants/blog-registry";

/**
 * @file lib/seo/schema.ts
 * @description Advanced Schema.org generators for high-level SEO.
 * Implements international standards for LocalBusiness, Restaurant, and Digital Heritage.
 */

// 1. Restaurant & Local Business Schema
export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.identity.url}/#restaurant`,
    "name": siteConfig.identity.name,
    "alternateName": siteConfig.identity.fullName,
    "image": [`${siteConfig.identity.url}${siteConfig.identity.ogImage}`],
    "description": siteConfig.identity.description,
    "url": siteConfig.identity.url,
    "telephone": siteConfig.contact.phone,
    "priceRange": "฿",
    "servesCuisine": "Thai Noodle, Street Food",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": "เมืองตาก",
      "addressRegion": "ตาก",
      "postalCode": "63000",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.8833,
      "longitude": 99.1233
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:30",
        "closes": "21:00"
      }
    ],
    "hasMenu": `${siteConfig.identity.url}/menu`,
    "founder": {
      "@type": "Person",
      "name": "เฮียเนก",
      "jobTitle": "Head Chef & Founder"
    },
    "knowsAbout": ["Traditional Thai Noodle", "Egg Noodle 98%", "Charcoal Grilled Red Pork"],
    "maintainer": {
      "@type": "Organization",
      "name": "AEMDEVWEB",
      "url": "https://www.aemdevweb.com"
    }
  };
}

// 2. Breadcrumb Schema (For Google Search Results Path)
export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteConfig.identity.url}${item.item}`
    }))
  };
}

// 3. Blog Posting Schema (For News/Articles)
export function getBlogPostingSchema(blog: BlogEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": [`${siteConfig.identity.url}/images/${blog.image}`],
    "datePublished": blog.date,
    "author": {
      "@type": "Organization",
      "name": siteConfig.identity.name,
      "url": siteConfig.identity.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "AEMDEVWEB",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.identity.url}/images/aemdevweb-logo.svg`
      }
    }
  };
}

// 4. Product Schema (For kapoamom Sauce)
export function getProductSchema() {
```

### File: lib/utils.ts
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

