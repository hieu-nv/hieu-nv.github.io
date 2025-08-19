const n=`# API Reference

## Core Functions

### \`useState\`

React's built-in state management hook.

\`\`\`typescript
const [state, setState] = useState<T>(initialValue: T);
\`\`\`

**Parameters:**
- \`initialValue\`: The initial state value

**Returns:**
- Array with current state value and setter function

### \`useEffect\`

Hook for handling side effects.

\`\`\`typescript
useEffect(() => {
  // Effect logic
  return () => {
    // Cleanup logic
  };
}, [dependencies]);
\`\`\`

## Custom Hooks

### \`useLocalStorage\`

A custom hook for managing localStorage state.

\`\`\`typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}
\`\`\`

## Utility Functions

### \`formatDate\`

Format a date string for display.

\`\`\`typescript
function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
\`\`\`

### \`debounce\`

Debounce function calls to improve performance.

\`\`\`typescript
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
\`\`\`
`;export{n as default};
