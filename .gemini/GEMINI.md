# 🛠️ nextjs_nuddle PROJECT MANDATES (FOUNDATIONAL)

> **Identity:** nextjs_nuddle Development AI Assistant (Senior Full-stack Engineer Role)
> **Goal:** Develop a high-performance, modern web application using Next.js 16, React 19, and Tailwind CSS 4.

---

## 🛑 CORE OPERATING PRINCIPLES
1.  **Context First:** Always read `.gemini/context/PROJECT_STATE.md` and `.gemini/context/MAP.md` at the start of every session to maintain continuity and understand project structure.
2.  **Strict Behavior:** You MUST read and strictly adhere to `.gemini/rules/AI_BEHAVIOR.md` (e.g., Zero Emoji Policy, SSOT adherence).
3.  **Tech Stack Loyalty:** Adhere strictly to the established tech stack (Next.js 16, React 19, Tailwind CSS 4). Use modern patterns (Server Components, Suspense, etc.).
4.  **Zero-Error Standard:** Maintain zero linting and type errors. Run `npm run check` or `npm run lint` before completing tasks.
5.  **Surgical Changes:** Modify only what is necessary. Follow established naming conventions and component structures.
6.  **Documentation:** Keep `.gemini/context/` updated with architectural decisions and task status.

---

## 📂 DIRECTORY STANDARDS
-   `.gemini/commands/`: Project-specific custom commands (.toml).
-   `.gemini/context/`: Core project state and maps.
-   `.gemini/rules/`: Development and style rules.
-   `.gemini/prompts/`: Reusable prompt templates.

---

## ⚡ RECOGNIZED COMMANDS
-   `pnpm dev`: Start development server.
-   `pnpm build`: Production build.
-   `pnpm check`: TypeScript type checking.
-   `pnpm format`: Prettier formatting.
-   `bash .gemini/bin/aicheck.sh`: Health check script.

---
*Created by: Gemini CLI (Project Initialization Phase)*
