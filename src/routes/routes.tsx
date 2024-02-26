import * as React from "react";
import { Grid, CardMedia, CircularProgress, Toolbar } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import NavBar from "@/components/navBar/NavBar"
import AlertGlobal from "@/components/alert/alert";
import ModalGlobal from "@/components/modal/modal";
import SignIn from "@/screens/SignIn";
import SignUp from "@/screens/SignUp";
import { storeUser } from "@/stores/user/storeUser";
import Layout from "@/components/Layout/Layout"

const Home = React.lazy(() => import("@/screens/home"));
const CategoryList = React.lazy(() => import("@/screens/categoryList"));
const NotFoundPage = React.lazy(() => import("@/screens/notFoundPage"));

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
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      ) : (
        <Layout>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
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
