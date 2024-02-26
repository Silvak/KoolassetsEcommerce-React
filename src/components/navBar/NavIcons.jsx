import { IconButton, Box } from "@mui/material";

//icons
import { BsCart, BsPerson, BsHeart } from "react-icons/bs";

const ICONS = [
  { id: 1, icon: <BsPerson /> },
  { id: 2, icon: <BsCart /> },
  { id: 3, icon: <BsHeart /> },
];

const NavIcons = ({ sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& .css-18cpr4l-MuiButtonBase-root-MuiIconButton-root": {
          outline: "1px solid #1B1AFF",
          borderRadius: "4px",
          fontSize: "18px",
        },
        ...sx,
      }}
    >
      {ICONS.map((icon) => (
        <IconButton
          key={icon.id}
          sx={{
            color: "#1B1AFF",
          }}
        >
          {icon.icon}
        </IconButton>
      ))}
    </Box>
  );
};
export default NavIcons;
