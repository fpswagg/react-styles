# Essaca Style - React Project

A React project showcasing different styles for forms and dashboards with cards.

## Features

- **Form Component**: A contact form with name, email, phone, and message fields
- **Dashboard Component**: A dashboard displaying cards with statistics
- **Navigation**: Easy switching between dashboard and form views

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
essaca-style/
├── src/
│   ├── components/
│   │   ├── Form.jsx          # Form component
│   │   ├── Form.css          # Form styles
│   │   ├── Dashboard.jsx     # Dashboard component
│   │   ├── Dashboard.css     # Dashboard styles
│   │   ├── Card.jsx          # Card component
│   │   └── Card.css          # Card styles
│   ├── App.jsx               # Main app component
│   ├── App.css               # App styles
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Adding Styles

Styles from `.md` files can be added to the `src/styles/` directory and imported into the respective components.

