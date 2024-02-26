import { Box } from "@mui/material";

const CategorySliderItem = ({ categoria }) => {
  return (
    <Box
      sx={{
        border: "1px solid #DFDFDF",
        p: 2,
        borderRadius: "10px",
        "& h3": { fontSize: "20px" },
      }}
    >
      <h3>{categoria}</h3>
    </Box>
  );
};
export default CategorySliderItem;
