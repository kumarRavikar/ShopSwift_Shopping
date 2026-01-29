import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ProductContextProvider } from "./contex/productContext.jsx";
import { FilterContextProvider } from "./contex/FilterProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </ProductContextProvider>,
);
