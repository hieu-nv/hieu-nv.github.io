const n=`# Components Documentation

## Available Components

### SoftwareArchitectProfile

A comprehensive profile component showcasing professional information.

\`\`\`tsx
import SoftwareArchitectProfile from './components/SoftwareArchitectProfile';

<SoftwareArchitectProfile />
\`\`\`

**Features:**
- Professional profile display
- Responsive design
- Interactive elements
- Print-ready layout

### LiquidGlass

A modern glass morphism component with liquid animations.

\`\`\`tsx
import LiquidGlass from './components/LiquidGlass';

<LiquidGlass className="custom-styles">
  <p>Content with glass effect</p>
</LiquidGlass>
\`\`\`

**Props:**
- \`className?: string\` - Additional CSS classes
- \`children: React.ReactNode\` - Content to display

### PDFGenerator

Component for generating PDF documents from React content.

\`\`\`tsx
import PDFGenerator from './components/PDFGenerator';

<PDFGenerator 
  targetId="profile-container"
  filename="document.pdf"
/>
\`\`\`

**Props:**
- \`targetId: string\` - ID of element to convert to PDF
- \`filename: string\` - Name for the generated PDF file

## Component Guidelines

### Styling

All components use TailwindCSS for consistent styling:

\`\`\`tsx
// Good - using Tailwind classes
<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  Content
</div>

// Also good - combining with SCSS for complex animations
<div className="card-component animate-fade-in">
  Content
</div>
\`\`\`

### TypeScript

Always define proper interfaces for component props:

\`\`\`tsx
interface ComponentProps {
  title: string;
  isVisible?: boolean;
  onClick?: () => void;
}

const MyComponent: React.FC<ComponentProps> = ({ 
  title, 
  isVisible = true, 
  onClick 
}) => {
  return (
    <div className={\`component \${isVisible ? 'visible' : 'hidden'}\`}>
      <h2>{title}</h2>
      {onClick && <button onClick={onClick}>Click me</button>}
    </div>
  );
};
\`\`\`

### Performance

Use React.memo for components that don't need frequent re-renders:

\`\`\`tsx
const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return (
    <div>
      {/* Complex rendering logic */}
    </div>
  );
});
\`\`\`
`;export{n as default};
