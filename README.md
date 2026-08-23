# React 19 Modern Data Resolution: The `use()` Hook

This project demonstrates the core data resolution patterns introduced in **React 19**, specifically focusing on the new native **`use()`** hook, **React Suspense**, and **Error Boundaries**.

## 🚀 Features

The application showcases a clean architectural separation between promise creation and promise resolution:

1. **Deferred Promise Generation (`App.tsx` & `simulateServerRequest.ts`)**
   - Implements a generic TypeScript function (`<T>`) that returns a `Promise` with a configurable `setTimeout` delay to mimic actual network latency.
   - Instantiates the stable promise reference strictly at the module/parent scope to prevent unwanted re-triggering loops during UI updates.

2. **Prop-Driven Promise Resolution (`MessageComponent.tsx`)**
   - Accepts the pending promise directly via component props.
   - Employs the native React 19 **`use()`** hook to gracefully unwrap the async payload on the fly without relying on legacy `useEffect` and `useState` boilerplate.

3. **Declarative Lifecycle Management**
   - Integrates with **React Suspense** to seamlessly capture the pending promise throw and render a fallback loading indicator.
   - Wraps the stack inside an **Error Boundary** container to isolate and intercept structural lookup rejections safely without crashing the main application runtime.

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Language:** TypeScript

## 💻 Getting Started

Follow these steps to run this React 19 demo locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) installed (version 18 or higher is recommended).

### Installation

1. Clone or download this repository.
2. Open your terminal and change into the project root directory:
   ```bash
   cd path/to/your/project
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Launch Vite's local development environment:

```bash
npm run dev
```

Once started, open your web browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

### Building for Production

To create an optimized production build of the project:

```bash
npm run build
```

## 🌐 Live Demo

You can view the live deployment of this project at the following link:
👉 **https://hw-41-blue.vercel.app/**
