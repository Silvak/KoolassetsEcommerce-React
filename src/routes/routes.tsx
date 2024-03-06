import * as React from "react";
import {
  Grid,
  CardMedia,
  CircularProgress,
  Toolbar,
  Container,
} from "@mui/material";
import { Route, Routes } from "react-router-dom";

import AlertGlobal from "@/components/alert/alert";
import ModalGlobal from "@/components/modal/modal";
import SignIn from "@/screens/SignIn";
import SignUp from "@/screens/SignUp";
import { storeUser } from "@/stores/user/storeUser";
import Layout from "@/components/Layout/Layout";

const Home = React.lazy(() => import("@/screens/home"));
const CategoryList = React.lazy(() => import("@/screens/categoryList"));
const Favorites = React.lazy(() => import("@/screens/favorites"));
const ProfileUser = React.lazy(() => import("@/screens/profileUser"));
const OrdersUser = React.lazy(() => import("@/screens/ordersUser"));
const NotFoundPage = React.lazy(() => import("@/screens/notFoundPage"));
const Product = React.lazy(() => import("@/screens/product"));
const Payment = React.lazy(() => import("@/screens/payment"));
const PaymentsMethods = React.lazy(() => import("@/screens/paymentsMethods"));
const Cart = React.lazy(() => import("@/screens/CartPage"));
const AboutPage = React.lazy(() => import("@/screens/AboutPage"));
const ProductAdmin = React.lazy(() => import("@/screens/ProductAdmin"));
const ReturnsPage = React.lazy(() => import("@/screens/returnsPage"));
const CancellationsPage = React.lazy(() => import("@/screens/CancellationsPage"));
const DashboardPage = React.lazy(() => import("@/screens/DashboardPage"));


export default function Navigator() {
  const { Authenticated } = storeUser();
  let Logo = "";

  return (
    <React.Suspense
      fallback={
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "common.tree",
            width: "100%",
            height: "100vh",
          }}
        >
          <CardMedia
            component="img"
            image={Logo}
            alt="Logo"
            sx={{
              width: { xs: 150, sm: 150, md: 200, lg: "497px", xl: 300 },
              objectFit: "cover",
            }}
          />
          <CircularProgress
            style={{ color: "#C02327" }}
            sx={{ m: 2 }}
            size="68px"
          />
        </Grid>
      }
    >
      {/*Navbar primary */}
      {/* <Navbar /> */}
      {/* <Toolbar sx={{m:"10px"}} /> */}

      {/*Navbar secondary */}
      {Authenticated ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<ProfileUser />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/payments-methods" element={<PaymentsMethods />} />
            <Route path="/returns" element={<ReturnsPage />} />
            <Route path="/cancellations" element={<CancellationsPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<OrdersUser />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/product-admin" element={<ProductAdmin />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      )}
      {/*other tools */}
      <AlertGlobal />
      <ModalGlobal />
    </React.Suspense>
  );
}
