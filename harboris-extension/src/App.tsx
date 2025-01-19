import { MemoryRouter, Route, Routes } from "react-router";
import NavLayout from "./components/layouts/navLayout/NavLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Confirmation from "./pages/confirmation/Confirmation";
import Product from "./pages/product/Product";
import ViewOrder from "./pages/viewOrder/ViewOrder";
import NotFound from "./pages/notFound/NotFound";
import Profile from "./pages/profile/Profile";
import "./app.css";
import DeliveryRange from "./pages/deliveryRange/DeliveryRange";
import handmLogo from "./assets/h-and-m-logo.svg";
import greySweater from "./assets/grey-sweater.png";

export default function App() {
  return (
    <>
      <MemoryRouter>
        <Routes>
          <Route element={<NavLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route
              path="/product"
              element={
                <Product
                  companyLogo={handmLogo}
                  companyName={"H&M"}
                  productImage={greySweater}
                  price={29.99}
                  productName={"V-Neck Cardigan"} icon={"h"}   
                  status={"real"}             />
              }
            />
            <Route path="/view-order" element={<ViewOrder />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/delivery-range" element={<DeliveryRange />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </>
  );
}
