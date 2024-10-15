/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',     // Scans all files in 'app' directory
    './components/**/*.{js,ts,jsx,tsx}',  // Scans all files in 'components' directory
    './pages/**/*.{js,ts,jsx,tsx}',    // Scans all files in 'pages' directory (if you're using the Pages Router)
    './src/**/*.{js,ts,jsx,tsx}',      // If you use a 'src' directory for components/pages
  ],
  theme: {
    extend: {
      colors: {
        customDarkGray: '#692323',
        neutralGray: {
          50: '#f9f9f9', // Customize these values
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#b2b2b2',
          400: '#303030',
          500: '#141414',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}
