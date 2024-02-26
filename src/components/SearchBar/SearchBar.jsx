import { Box, IconButton } from "@mui/material";

import { BsSearch } from "react-icons/bs";

const SearchBar = ({ sx }) => {
  return (
    <Box
      sx={{
        borderRadius: "30px",
        outline: "1px solid #73737380",
        height: "40px",
        overflow: "hidden",
        display: "flex",
        ...sx,
      }}
    >
      <IconButton
        sx={{
          width: "50px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsSearch size="20" />
      </IconButton>
      <input
        type="search"
        style={{
          outline: "none",
          border: "none",
          background: "none",
          width: "100%",
          height: "100%",
          padding: "0 10px",
        }}
        placeholder="Buscar en la tienda..."
      />
    </Box>
  );
};
export default SearchBar;
