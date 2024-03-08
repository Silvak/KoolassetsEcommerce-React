import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/footer";

const paths = [
  "/product/:id",
  "/cart",
  "/favorites",
  "/profile",
  "/about",
  "/orders",
  "/product-admin",
  "/product-orders",
  "/payments-methods",
  "/dashboard", 
];

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  // paths to add more padding
  const isPath = paths.some((path) => pathname.includes(path));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavBar />
      <div
        style={{
          margin: 0,
          padding: isPath && !isMobile ? "0 100px" : "0 10px",
          background: "white",
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
