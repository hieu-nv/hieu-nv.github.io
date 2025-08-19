const n=`# Documentation System

This project includes a built-in documentation system that allows you to write markdown documents and render them at \`/docs\` routes.

## Features

- ✅ **Markdown Rendering**: Full markdown support with GitHub Flavored Markdown
- ✅ **Syntax Highlighting**: Code blocks with syntax highlighting using highlight.js
- ✅ **Responsive Design**: Mobile-friendly documentation layout
- ✅ **Dynamic Routing**: Automatic routing for markdown files
- ✅ **Navigation Sidebar**: Auto-generated navigation from available docs
- ✅ **Dark Mode Support**: Styling that works with dark/light themes

## Usage

### Adding New Documentation

1. Create a new \`.md\` file in the \`src/docs/\` folder
2. Write your content using standard markdown syntax
3. The file will automatically be available at \`/docs/filename\` (without the \`.md\` extension)

### File Structure

\`\`\`
src/
└── docs/
    ├── index.md              # Homepage at /docs
    ├── getting-started.md    # Available at /docs/getting-started
    ├── api-reference.md      # Available at /docs/api-reference
    └── components.md         # Available at /docs/components
\`\`\`

### Markdown Features

#### Code Blocks

\`\`\`typescript
// TypeScript code with syntax highlighting
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};
\`\`\`

#### Tables

| Feature | Supported | Notes |
|---------|-----------|-------|
| Headers | ✅ | H1-H6 |
| Code blocks | ✅ | With syntax highlighting |
| Tables | ✅ | GitHub Flavored Markdown |
| Links | ✅ | Internal and external |

#### Links

- Internal navigation: \`[Getting Started](./getting-started)\`
- External links: \`[GitHub](https://github.com)\`
- Relative paths work within the docs

### Styling

The documentation uses a custom MarkdownRenderer component with:

- **TailwindCSS**: For utility classes and responsive design
- **@tailwindcss/typography**: For prose styling
- **highlight.js**: For code syntax highlighting (GitHub Dark theme)
- **Custom components**: Enhanced styling for all markdown elements

### Navigation

The sidebar automatically generates navigation links for all markdown files in the \`src/docs/\` folder. File names are converted to readable titles (e.g., \`getting-started.md\` → "Getting Started").

### Accessing Documentation

- Visit \`/docs\` for the documentation homepage
- Navigate to specific docs via \`/docs/filename\`
- Use the sidebar navigation or direct links

## Development

The documentation system is built with:

- **React Router**: For client-side routing
- **react-markdown**: For markdown parsing and rendering
- **remark-gfm**: For GitHub Flavored Markdown features
- **rehype-highlight**: For code syntax highlighting

To extend the system, modify the \`DocPage.tsx\` and \`MarkdownRenderer.tsx\` components in \`src/components/\`.
`;export{n as default};
