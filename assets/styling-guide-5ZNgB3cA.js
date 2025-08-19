const n=`# Styling Guide

This document shows how the markdown styling works and demonstrates various formatting options.

## Typography

### Headers

# Heading 1
## Heading 2  
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

### Header Hierarchy Examples

# Main Document Title
This is the primary title of the document.

## Section Heading
Major sections use h2 headers.

### Subsection
Subsections under major sections.

#### Sub-subsection
Fourth-level headings with blue accent border.

##### Implementation Details
Fifth-level headings are uppercase and tracked.

###### Technical Notes
Sixth-level headings are italic and subtle.

### Text Formatting

**Bold text** and *italic text* and ***bold italic***.

You can also use __bold__ and _italic_ syntax.

~~Strikethrough~~ text is also supported.

### Links and References

- [Internal documentation link](./getting-started)
- [External link to GitHub](https://github.com)
- [Link to components](./components)

## Code Examples

### Inline Code

Use \`const variable = value\` for inline code snippets.

Variables like \`useState\` and \`useEffect\` are highlighted inline.

### Code Blocks

\`\`\`javascript
// JavaScript example
function greetUser(name) {
  return \`Hello, \${name}!\`;
}

const user = "World";
console.log(greetUser(user));
\`\`\`

\`\`\`typescript
// Advanced TypeScript example with interfaces and generics
interface User<T = string> {
  id: number;
  name: T;
  email?: string;
  roles: Role[];
  metadata: Record<string, unknown>;
}

interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}

type Permission = 'read' | 'write' | 'admin';

class UserService {
  private users: Map<number, User> = new Map();

  async createUser<T extends string>(userData: Partial<User<T>>): Promise<User<T>> {
    const user: User<T> = {
      id: Math.random(),
      name: "Anonymous" as T,
      roles: [],
      metadata: {},
      ...userData
    };
    
    this.users.set(user.id, user as User);
    return user;
  }

  // Generic method with constraints
  findUsersByRole<K extends keyof Role>(
    roleProperty: K, 
    value: Role[K]
  ): User[] {
    return Array.from(this.users.values()).filter(user => 
      user.roles.some(role => role[roleProperty] === value)
    );
  }

  // Decorator example
  @LogExecution
  @ValidateInput
  async updateUser(id: number, updates: Partial<User>): Promise<User | null> {
    const user = this.users.get(id);
    if (!user) return null;

    const updatedUser = { ...user, ...updates };
    this.users.set(id, updatedUser);
    
    // Template literal with type safety
    console.log(\`User \${user.name} updated successfully\`);
    return updatedUser;
  }
}

// Advanced types and utility types
type UserWithoutId = Omit<User, 'id'>;
type RequiredUser = Required<User>;
type UserKeys = keyof User;

const userService = new UserService();
\`\`\`

\`\`\`css
/* CSS example */
.documentation {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-lg;
  
  h1, h2, h3 {
    @apply font-bold text-gray-900 dark:text-gray-100;
  }
  
  p {
    @apply text-gray-700 dark:text-gray-300 leading-relaxed;
  }
}
\`\`\`

\`\`\`bash
# Shell commands
npm install react-router-dom
npm run dev
git add .
git commit -m "Add documentation system"
\`\`\`

## Lists

### Unordered Lists

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Ordered Lists

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

### Task Lists

- [x] Completed task
- [x] Another completed task
- [ ] Pending task
- [ ] Another pending task

## Tables

| Feature | Status | Priority | Notes |
|---------|---------|----------|-------|
| Markdown rendering | ✅ Complete | High | Core functionality |
| Syntax highlighting | ✅ Complete | High | Code blocks |
| Responsive design | ✅ Complete | Medium | Mobile support |
| Dark mode | ✅ Complete | Medium | Theme switching |
| Search functionality | ⏳ Planned | Low | Future enhancement |

### Complex Table Example

| Component | Props | Description | Example Usage |
|-----------|-------|-------------|---------------|
| \`MarkdownRenderer\` | \`content: string\` | Renders markdown with syntax highlighting | \`<MarkdownRenderer content={mdContent} />\` |
| \`DocPage\` | None | Main documentation page with sidebar | \`<Route path="/docs/:slug" element={<DocPage />} />\` |
| \`Button\` | \`variant\`, \`size\`, \`onClick\` | Reusable button component | \`<Button variant="primary" size="lg">Click me</Button>\` |

### Data Table

| Metric | Q1 2024 | Q2 2024 | Q3 2024 | Q4 2024 | Change |
|--------|---------|---------|---------|---------|--------|
| Users | 1,250 | 1,580 | 2,100 | 2,650 | +112% |
| Revenue | $45K | $62K | $89K | $127K | +182% |
| Conversion | 2.3% | 2.8% | 3.4% | 4.1% | +78% |
| Retention | 85% | 88% | 91% | 94% | +11% |

### Simple Comparison Table

| Feature | Free Plan | Pro Plan | Enterprise |
|---------|-----------|----------|------------|
| Users | 5 | 25 | Unlimited |
| Storage | 1GB | 100GB | 1TB+ |
| Support | Email | Priority | 24/7 Phone |
| Price | $0 | $29/mo | Custom |

## Blockquotes

> This is a simple blockquote.

> This is a longer blockquote that spans multiple lines and demonstrates how the styling works with more content. It should have proper spacing and visual distinction from regular paragraphs.

> **Note**: You can also include other markdown elements inside blockquotes.
>
> Like multiple paragraphs, **bold text**, and even \`inline code\`.

## Horizontal Rules

You can create horizontal rules (dividers) like this:

---

## Images and Media

While images aren't included in this example, you can reference them like:

\`\`\`markdown
![Alt text](./path/to/image.png)
\`\`\`

## Special Characters and Entities

- Arrows: → ← ↑ ↓
- Checkmarks: ✅ ✓ ❌ ❯
- Symbols: © ® ™ § ¶
- Math: ± × ÷ ≠ ≤ ≥

## Formatting Tips

### Line Breaks

To create a line break, end a line with two spaces  
or use a blank line between paragraphs.

### Escaping Characters

If you need to display markdown characters literally, use backslashes:

- \\*This is not italic\\*
- \\\`This is not code\\\`
- \\# This is not a header

### HTML in Markdown

You can also use HTML elements when needed:

<div style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4); padding: 1rem; border-radius: 0.5rem; color: white; text-align: center; margin: 1rem 0;">
  This is a custom styled div with HTML and inline CSS
</div>

## Best Practices

1. **Use descriptive headers** to create clear document structure
2. **Include code examples** with proper syntax highlighting
3. **Link between documents** to create a cohesive documentation system
4. **Use tables** for structured data presentation
5. **Add blockquotes** for important notes and warnings

The styling system automatically handles:
- Responsive design for all screen sizes
- Dark/light theme support
- Syntax highlighting for 100+ languages
- Proper typography and spacing
- Accessible color contrasts
`;export{n as default};
