# AI App Developer

A modern React + TypeScript application for AI app development with authentication, theme switching, and plan selection.

## Features

- ✅ **Authentication System** - Login page with user authentication
- ✅ **Plan Selection** - Choose from multiple pricing plans (Pocket Options)
- ✅ **Dashboard** - Main application interface
- ✅ **Dark/Light Theme** - Toggle between themes
- ✅ **Error Boundary** - Global error handling
- ✅ **Toast Notifications** - User feedback via Sonner
- ✅ **TypeScript** - Full type safety

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Bundler**: Vite
- **Routing**: Wouter
- **UI Components**: Radix UI
- **Notifications**: Sonner
- **Styling**: CSS-in-JS

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/stuartmunthali3-sketch/Original-.git
cd Original-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Application Flow

1. **Home Page** - User login page
   - Enter any email and password to proceed
   
2. **Plan Selection** - Choose a Pocket Option
   - Select from Basic, Pro, or Enterprise plans
   
3. **Dashboard** - Main application interface
   - View active plan details
   - Access logout button

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/
│   ├── ErrorBoundary.tsx
│   └── ui/
│       ├── sonner.tsx
│       └── tooltip.tsx
├── contexts/
│   └── ThemeContext.tsx
├── pages/
│   ├── Home.tsx
│   ├── Dashboard.tsx
│   ├── PocketOptionGate.tsx
│   └── NotFound.tsx
├── _core/
│   └── hooks/
│       └── useAuth.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Authentication

The app uses localStorage for session management. Users can:
- Login with any email/password combination
- Select a plan/pocket option
- Access the dashboard with their selected plan
- Logout which clears the session

## Theme Management

The app supports light and dark themes with:
- Theme toggle functionality
- Persistent theme preference in localStorage
- System preference detection

## Error Handling

Global error boundary catches React component errors and displays a user-friendly error message with a reload button.

## License

MIT

## Author

Stuart Munthali
