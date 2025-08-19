const n=`# PDF Generation Guide

This guide explains how to generate a PDF version of your Software Architect Profile.

## Method 1: Browser Print (Recommended)

The easiest way to generate a PDF is using your browser's built-in print functionality:

1. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

2. **Open the profile in your browser:**
   - Navigate to \`http://localhost:5174\`
   - Wait for the page to fully load

3. **Print to PDF:**
   - Click the "🖨️ Print PDF" button in the top-right corner, OR
   - Press \`Ctrl+P\` (Windows) or \`Cmd+P\` (Mac)
   - In the print dialog:
     - **Destination:** Choose "Save as PDF"
     - **Layout:** Portrait
     - **Paper size:** A4 or Letter
     - **Margins:** Minimum
     - **Options:** Check "Background graphics" for best results
   - Click "Save" and choose your filename

## Method 2: Automated PDF Generation (Advanced)

For more control over the PDF output, you can use the automated script:

1. **Install Puppeteer:**
   \`\`\`bash
   npm install puppeteer
   \`\`\`

2. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Run the PDF generation script:**
   \`\`\`bash
   node scripts/generate-pdf.js
   \`\`\`

This will create \`Hieu_Nguyen_Software_Architect_Profile.pdf\` in your project root.

## PDF Optimization Features

The profile includes several optimizations for PDF output:

- **Print-specific CSS:** Removes animations and optimizes layouts
- **Page breaks:** Prevents projects from being split across pages
- **Color preservation:** Ensures gradients and backgrounds appear in PDF
- **Typography:** Optimized font sizes and spacing for print
- **Layout adjustments:** Better spacing and margins for PDF format

## Browser Recommendations

For best PDF quality:

1. **Chrome or Edge:** Best support for CSS print features
2. **Firefox:** Good alternative with decent print support
3. **Safari:** Works but may have some styling differences

## Troubleshooting

### PDF looks different from screen
- Ensure "Background graphics" is enabled in print settings
- Try using Chrome/Edge for better CSS support

### Content is cut off
- Adjust margins to "Minimum" in print settings
- Try different paper sizes (A4, Letter)

### Missing colors/gradients
- Enable "Background graphics" in print options
- Use Chrome for best color reproduction

### Script errors
- Make sure dev server is running on \`http://localhost:5174\`
- Check that all dependencies are installed
- Try the browser print method as fallback

## File Structure

\`\`\`
src/
├── components/
│   ├── SoftwareArchitectProfile.tsx  # Main profile component
│   └── PDFGenerator.tsx             # PDF controls component
├── styles/
│   └── print.css                    # PDF-specific styles
└── scripts/
    └── generate-pdf.js              # Automated PDF generation
\`\`\`

## Customization

To customize the PDF output:

1. **Modify print styles:** Edit \`src/styles/print.css\`
2. **Adjust page breaks:** Add/remove \`page-break-*\` classes
3. **Change PDF settings:** Update the Puppeteer script options

## Output

The generated PDF will include:
- Complete profile with contact information
- Skills section with visual progress bars
- Project timeline with detailed descriptions
- Optimized layout for professional presentation

Perfect for:
- Job applications
- Client presentations
- Portfolio sharing
- Archive documentation
`;export{n as default};
