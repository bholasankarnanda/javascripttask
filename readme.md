# JavaScript Basic - Multiple Utility Calculators

A web-based application featuring various JavaScript utilities built with TypeScript. This project demonstrates fundamental JavaScript/TypeScript concepts through interactive calculator and string manipulation tools.

## 📋 Features

The application includes 8 different utility functions:

### 1. **Celsius to Fahrenheit Converter**

- Converts temperature from Celsius to Fahrenheit
- Formula: `(Celsius × 9/5) + 32`
- Input: Numeric temperature in Celsius
- Output: Converted temperature in Fahrenheit

### 2. **Array Element Sum**

- Calculates the sum of all elements in an array
- Input: Comma-separated values (e.g., `1,2,3,4,5`)
- Output: Total sum of all elements
- Implementation: Uses `forEach` loop with type conversion

### 3. **Array Element Average**

- Calculates the average of array elements
- Input: Comma-separated values (e.g., `1,2,3,4,5`)
- Output: Average value
- Implementation: Divides each element by array length during iteration

### 4. **Even Elements Filter**

- Filters and displays only even numbers from an array
- Input: Comma-separated values (e.g., `1,2,3,4,5`)
- Output: Array of even numbers
- Implementation: Uses modulo operator to identify even numbers

### 5. **String Reversal**

- Reverses a given string character by character
- Input: Any text string
- Output: Reversed string
- Implementation: Iterates backwards through the string using a for loop

### 6. **Vowel Counter**

- Counts the number of vowels in a string
- Input: Any text string
- Output: Total vowel count
- Implementation: Uses `includes()` array method with case-insensitive comparison

### 7. **Maximum Element Finder**

- Finds the maximum value in an array
- Input: Comma-separated values (e.g., `1,2,3,4,5`)
- Output: Largest number in the array
- Implementation: Compares elements using conditional logic

### 8. **Grade Calculator**

- Converts numeric marks to letter grades
- Input: Numeric marks (0-100)
- Output: Letter grade (A, B, C, D, F)
- Grading Scale:
  - 90 and above: Grade A
  - 80-89: Grade B
  - 70-79: Grade C
  - 60-69: Grade D
  - Below 60: Grade F

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- TypeScript knowledge (helpful)
- A modern web browser

### Installation

1. Clone the repository:

```bash
git clone https://github.com/bholasankarnanda/javascripttask.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

This will open the application in your default browser and enable live-server for auto-refresh.

## 🛠️ Development

### Build TypeScript

To compile TypeScript to JavaScript with watch mode:

```bash
npm run build
```

This command watches for changes in `assets/ts/` and compiles them to `assets/js/`.

### Project Structure

```
javascript-basic/
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── readme.md               # This file
├── assets/
│   ├── css/
│   │   └── style.css       # Styling for the application
│   ├── js/
│   │   ├── app.js          # Compiled JavaScript (auto-generated)
│   │   └── app.d.ts        # TypeScript declarations (auto-generated)
│   ├── ts/
│   │   └── app.ts          # Main TypeScript source file
│   └── video/              # Video assets directory
```

## 📝 TypeScript Configuration

The project uses TypeScript with ES2016 library support to ensure compatibility with modern JavaScript features like `Array.includes()`.

Key TypeScript settings (`tsconfig.json`):

- **target**: ES6 (compiled output format)
- **lib**: ES2016, DOM (enables ES2016 array methods and DOM APIs)
- **module**: ES6 (ES module format)
- **strict**: true (strict type checking enabled)
- **sourceMap**: true (debugging support)
- **declaration**: true (generates .d.ts files)

## 🎨 Styling

The application uses a responsive CSS Grid layout with:

- **3-column grid layout** on desktop
- **Red borders** around each utility section
- **Green buttons** for interactive actions
- **Smooth scrolling behavior**
- **Responsive design** for various screen sizes

## 📦 Dependencies

### Dev Dependencies

- **TypeScript**: ^5.9.3 - JavaScript superset with type safety
- **lite-server**: ^2.6.1 - Local development server with live-reload

### Dependencies

- **ts-node**: ^10.9.2 - Execute TypeScript directly

## 🔧 Code Highlights

### Type Safety with TypeScript

All functions use proper TypeScript types:

```typescript
function convertTemperature(): void {
  const celsiusInput = document.getElementById(
    "celsiusInput"
  ) as HTMLInputElement;
  const celsiusInputValue: number = +celsiusInput.value;
  // ...
}
```

### Event Listeners

Each utility is connected to HTML buttons using event listeners:

```typescript
document
  .getElementById("convertTemperatureBtn")
  ?.addEventListener("click", convertTemperature);
```

### Input Validation & Type Conversion

- String to number conversion using unary `+` operator
- Array creation from CSV strings using `split(",")`
- Safe optional chaining with `?.` operator

## 💡 Learning Concepts

This project demonstrates:

- **Type safety** with TypeScript
- **DOM manipulation** with JavaScript
- **Array operations** (map, filter, reduce concepts)
- **String manipulation** (split, reverse, includes)
- **Event handling** (click events, event listeners)
- **Type assertion** (casting with `as` keyword)
- **Optional chaining** (`?.` operator)
- **Nullish coalescing** (`??` operator)

## 🔗 Repository

GitHub: https://github.com/bholasankarnanda/javascripttask

## 👤 Author

Created by: bholasankarnanda

## Demo Video

<p align="center">
    <video width="480" controls>
        <source src="./assets/video/differnt cal.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</p>
