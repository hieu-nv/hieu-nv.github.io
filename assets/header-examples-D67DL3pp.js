const n=`# Header Styling Examples

This document demonstrates the different header levels and their styling in both light and dark modes.

## Primary Section (H2)

This is a primary section header. It uses a larger font size and has good spacing from surrounding content.

### Subsection (H3)

Subsections are styled with medium weight and provide clear hierarchy.

#### Implementation Notes (H4)

The H4 headers now feature:
- Improved dark mode contrast
- Blue accent border on the left
- Better spacing and typography
- Enhanced readability

##### Configuration Details (H5)

H5 headers are styled with:
- Uppercase lettering
- Letter spacing for readability
- Smaller font size but still prominent
- Good contrast in both themes

###### Technical Specifications (H6)

H6 headers provide:
- Italic styling for subtle emphasis
- Smallest header size while remaining readable
- Balanced color contrast
- Proper hierarchy indication

## Code Examples with Headers

### JavaScript Configuration

\`\`\`javascript
const config = {
  headers: {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold", 
    h3: "text-2xl font-medium",
    h4: "text-xl font-medium border-l-4 border-blue-500 pl-3",
    h5: "text-lg font-medium uppercase tracking-wide",
    h6: "text-base font-semibold italic"
  }
};
\`\`\`

#### Color Scheme

The headers use a carefully selected color scheme:

##### Light Mode Colors
- H1-H3: Various shades of gray from \`gray-900\` to \`gray-800\`
- H4: \`gray-700\` with blue accent border
- H5: \`gray-600\` for subtle prominence  
- H6: \`gray-500\` for minimal hierarchy

##### Dark Mode Colors
- H1-H3: Light grays from \`gray-100\` to \`gray-200\`
- H4: \`gray-300\` with blue accent
- H5: \`gray-400\` for good readability
- H6: \`gray-500\` maintains subtle presence

### Typography Hierarchy

#### Font Weights
- **Bold (font-bold)**: H1 for maximum impact
- **Semibold (font-semibold)**: H2, H6 for strong presence
- **Medium (font-medium)**: H3, H4, H5 for balanced weight

#### Font Sizes
- **4xl**: H1 - Primary document title
- **3xl**: H2 - Major sections
- **2xl**: H3 - Subsections
- **xl**: H4 - Sub-subsections with accent
- **lg**: H5 - Detail sections
- **base**: H6 - Minor headings

## Visual Enhancements

### H4 Special Features

#### Accent Border
The blue left border provides visual hierarchy and draws attention.

#### Improved Contrast
Dark mode text color ensures readability against dark backgrounds.

#### Consistent Spacing
Proper margin and padding for optimal reading flow.

### Responsive Design

All headers maintain their hierarchy and readability across different screen sizes:

#### Desktop View
Full typography scale with optimal spacing.

#### Tablet View  
Slightly reduced sizes while maintaining hierarchy.

#### Mobile View
Compressed but readable header sizes.

## Best Practices

### When to Use Each Header Level

#### H1 - Document Title
- Use only once per page
- Primary document identifier
- Maximum visual impact

#### H2 - Major Sections
- Primary content divisions
- Table of contents entries
- Clear section breaks

#### H3 - Subsections
- Secondary topic divisions
- Logical content groups
- Supports scanning

#### H4 - Sub-topics
- Detailed topic breakdown
- Implementation details
- Technical specifications

#### H5 - Minor Sections
- Configuration details
- Fine-grained topics
- Supporting information

#### H6 - Minimal Hierarchy
- Technical notes
- References
- Subtle distinctions
`;export{n as default};
