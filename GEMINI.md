# Repository Architecture Blueprint for Gemini AI
- Framework: React.js
- Styling: Chakra UI
- Core UI Folder: Look at `src/components/ui/` for existing buttons, cards, modals, and input fields.
- Layout Convention: Reuse existing navbar and footer components.
- Code Formatting: Use functional components, TypeScript types, and explicit arrow function exports.
- Strict Instruction: Never write generic HTML tags (like `<button>` or `<div class="card">`) if our custom `@/components/ui/` components can fulfill that design element. Match our exact file importing styles.