import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/")
  }

  return (
    <Box sx={{ color: "#000", fontSize: "clamp(20px,2vw,25px)", cursor:"pointer" }} onClick={handleClick}>Logo</Box>
  );
};
export default Logo;
