import { Box, IconButton } from "@mui/material";

import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <Box
      sx={{
        mt: 2,
        borderRadius: "30px",
        outline: "1px solid #73737380",
        width: "100%",
        height: "40px",
        overflow: "hidden",
        display: "flex",
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
        type="text"
        style={{
          outline: "none",
          border: "none",
          background: "none",
          width: "100%",
          height: "100%",
          padding: "0 20px",
        }}
      />
    </Box>
  );
};
export default SearchBar;
