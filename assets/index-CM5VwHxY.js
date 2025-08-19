const n=`# Documentation

Welcome to the documentation section of this project.

## Available Documents

- [Getting Started](./getting-started)
- [API Reference](./api-reference)
- [Components](./components)
- [Styling Guide](./styling-guide)
- [Header Examples](./header-examples)
- [System Documentation](./README)

## Overview

This documentation system allows you to write markdown documents and render them with syntax highlighting and GitHub Flavored Markdown support.

### Features

- ✅ Markdown rendering with \`react-markdown\`
- ✅ Syntax highlighting with \`rehype-highlight\`
- ✅ GitHub Flavored Markdown with \`remark-gfm\`
- ✅ Responsive design with TailwindCSS
- ✅ Dynamic routing with React Router
- ✅ Auto-generated navigation sidebar
- ✅ Dark mode support

### Usage

Simply create \`.md\` files in the \`src/docs\` folder and they will be automatically available at \`/docs/filename\` routes.

### Quick Start

1. **Create a new document**: Add a \`.md\` file to \`src/docs/\`
2. **Write content**: Use standard markdown syntax
3. **Access via URL**: Visit \`/docs/filename\` (without \`.md\`)
4. **Navigate**: Use the sidebar or direct links

### Example Document Structure

\`\`\`markdown
# My Document Title

## Introduction

This is a sample document with **bold text** and *italic text*.

### Code Example

\`\`\`typescript
interface User {
  id: number;
  name: string;
}
\`\`\`

### Lists

- Feature one
- Feature two
- Feature three

### Links

- [Internal link](./getting-started)
- [External link](https://github.com)
\`\`\`

For more detailed information, see the [System Documentation](./README).
`;export{n as default};
