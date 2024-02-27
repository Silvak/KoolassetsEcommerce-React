import { Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="xl" sx={{ padding: "0 20px 30px  20px" }}>
      {children}
    </Container>
  );
};
export default Layout;
