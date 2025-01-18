import { MemoryRouter, Route, Routes } from "react-router";
import NavLayout from "./components/layouts/NavLayout/NavLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Confirmation from "./pages/confirmation/Confirmation";
import Product from "./pages/product/Product";
import ViewOrder from "./pages/viewOrder/ViewOrder";
import NotFound from "./pages/notFound/NotFound";
import Profile from "./pages/profile/Profile";

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/product" element={<Product />} />
          <Route path="/view-order" element={<ViewOrder />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
