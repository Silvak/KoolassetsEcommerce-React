import { Box } from "@mui/material";
import { categoryIcons } from "../../utils/categoriesIcons";

const CategorySliderItem = ({ name }) => {
  const IconComponent = categoryIcons[name];

  const handleCategory = (cat) => () => {
    alert(cat);
  };

  return (
    <Box
      sx={{
        border: "1px solid #DFDFDF",
        p: 2,
        borderRadius: "10px",
        transition: "ease 200ms",
        height: "250px",
        display: "grid",
        placeContent: "center",
        ":hover": {
          color: "#FFF",
          backgroundColor: "#1B1AFF",
          border: "1px solid #1B1AFF",
          cursor: "pointer",
          userSelect: "none",
          transition: "ease 200ms",
        },
        ":hover .category-slider_icon": {
          color: "#FFF",
          transition: "ease 200ms",
        },
      }}
      onClick={handleCategory(name)}
    >
      {IconComponent && (
        <IconComponent className="category-slider_icon" size={35} />
      )}
      <h3 className="category-slider_category">{name}</h3>
    </Box>
  );
};
export default CategorySliderItem;
