# AI Audit

1. Using array index as key

- React cannot reliably track list changes
- Causes UI bugs if items are reordered/remove
- should use stable IDs

** implemented **

2. UI structure inside `ProfileCard` is unsemantic

- Plain text mixed with layout
- No semantic structure (`p`, `section`, `article`)

** not implemented **

3. Mixed concerns in comments and dead codes

- Debug code left in production file
- Makes file noisy and less readable

** implemented **

take me through, the process of commit this project, i have hte following files
 .. .gitignore AI_AUDIT.md eslint.config.js index.html jsx-notes.md
node_modules package.json pnpm-lock.yaml public README.md src vite.config.js
