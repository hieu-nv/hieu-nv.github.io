const n=`# Getting Started

## Installation

To get started with this project, follow these steps:

1. Clone the repository
2. Install dependencies with \`npm install\`
3. Start the development server with \`npm run dev\`

## Project Structure

\`\`\`
src/
├── components/         # React components
├── docs/              # Markdown documentation
├── styles/            # SCSS stylesheets
└── main.tsx           # Application entry point
\`\`\`

## Development

This project uses:

- **Vite** for fast development and building
- **React 19** with TypeScript
- **TailwindCSS** for styling
- **React Router** for navigation
- **React Markdown** for documentation

## Code Examples

Here's a simple React component example:

\`\`\`tsx
import React from 'react';

interface Props {
  title: string;
}

const ExampleComponent: React.FC<Props> = ({ title }) => {
  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default ExampleComponent;
\`\`\`

## Next Steps

- Read the [API Reference](./api-reference) for detailed information
- Check out the [Components](./components) documentation
`;export{n as default};
