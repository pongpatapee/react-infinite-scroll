import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Strict mode render components twice in dev mode, leading to double useEffects
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

createRoot(document.getElementById("root")).render(<App />);
