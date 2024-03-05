import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const paths = [
  "/product/:id",
  "/cart",
  "/favorites",
  "/profile",
  "/about",
  "/orders",
  "/payments-methods",
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
    <div
      style={{
        margin: 0,
        padding: isPath && !isMobile ? "0 100px" : "0 10px",
        background: "white",
      }}
    >
      {children}
    </div>
  );
};
export default Layout;
