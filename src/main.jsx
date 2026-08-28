import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InfoProvider from "./components/InfoProvider.jsx";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <InfoProvider>
      <App />
    </InfoProvider>
  </StrictMode>,
);
