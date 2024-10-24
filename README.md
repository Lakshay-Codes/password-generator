# 🔐 Password Generator

A modern, user-friendly password generator built with React and Tailwind CSS that allows users to create secure passwords with customizable options.

## 🚀 Live Demo

https://lakshaypasswordgenerator.netlify.app/

## ✨ Features

- Generate random passwords with customizable length (6-100 characters)
- Include/exclude numbers in generated passwords
- Include/exclude special characters in generated passwords
- Copy generated passwords to clipboard with a single click
- Real-time password generation as options change
- Sleek dark mode UI with responsive design



## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- React Hooks (useState, useCallback, useEffect, useRef)
- JavaScript

## 💻 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/password-generator.git
```

2. Navigate to the project directory:
```bash
cd password-generator
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 🎯 Usage

1. Use the slider to adjust password length (6-100 characters)
2. Toggle the "Numbers" checkbox to include/exclude numbers
3. Toggle the "Characters" checkbox to include/exclude special characters
4. Click the "Copy" button to copy the generated password to your clipboard

## 🔍 Code Overview

The application uses several React hooks for efficient functionality:
- `useState` for managing component state
- `useCallback` for memoizing functions
- `useEffect` for handling side effects
- `useRef` for DOM manipulation

Key features implementation:
```javascript
// Password generation logic
const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*;";
    // ... password generation
});
```
