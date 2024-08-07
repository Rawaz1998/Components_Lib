import { Button } from "@/components/ui/button";
import ProductCard from "./components/productCard";
import { ThemeProvider } from "@/components/themeProvider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Button>Click Me</Button>
      <ProductCard />
    </ThemeProvider>
  );
};

export default App;
