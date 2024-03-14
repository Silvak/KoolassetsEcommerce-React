import React, { useState } from "react";
import {
  Button,
  List,
  ListItemButton,
  ListItemText,
  Checkbox,
  Typography,
  FormGroup,
  FormControlLabel,
  Rating,
  useMediaQuery,
} from "@mui/material";
import {
  categories,
  filters,
  othersFilters,
  checkboxFilters,
  priceRange,
} from "../../mock/sidebarCategoriesData";
import {
  titleStyle,
  filterTitle,
  subtitleStyle,
  subtitleRange,
  childrenStyle,
  inputStyle,
  childrenFilter,
} from "../../utils/stylesSidebarCategory";

const SidebarContent = ({ onUpdatePath }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedMarcas, setSelectedMarcas] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleMarcaClick = (marca) => {
    const currentIndex = selectedMarcas.indexOf(marca);
    const newSelectedMarcas = [...selectedMarcas];

    if (currentIndex === -1) {
      newSelectedMarcas.push(marca);
    } else {
      newSelectedMarcas.splice(currentIndex, 1);
    }

    setSelectedMarcas(newSelectedMarcas);
    console.log("Marcas seleccionadas:", newSelectedMarcas);
  };

  const handleCategoryClick = (categoryName) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else {
      setExpandedCategory(categoryName);
      setSelectedCategory(categoryName);
      setSelectedSubcategory(null);
      onUpdatePath(categoryName);
    }
  };

  const handleSubcategoryClick = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName);
    onUpdatePath(
      `${selectedCategory} / ${subcategoryName}`
    ); 
  };

  return (
    <List>
      {/* Categorías */}
      <Typography variant="body2" style={titleStyle}>
        Categorías
      </Typography>
      {categories.map((category, key) => (
        <div key={key} style={{ width: "max-content" }}>
          <ListItemButton onClick={() => handleCategoryClick(category.name)}>
            <ListItemText
              primaryTypographyProps={{
                style: {
                  ...subtitleStyle,
                  color:
                    selectedCategory === category.name ? "blue" : "inherit",
                },
              }}
              primary={category.name}
            />
          </ListItemButton>
          {expandedCategory === category.name && (
            <List component="div" disablePadding>
              {category.subcategories.map((subcategory, subKey) => (
                <ListItemButton
                  key={subKey}
                  onClick={() => handleSubcategoryClick(subcategory)}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      style: {
                        ...childrenStyle,
                        color:
                          selectedSubcategory === subcategory
                            ? "blue"
                            : "inherit",
                      },
                    }}
                    primary={subcategory}
                  />
                </ListItemButton>
              ))}
            </List>
          )}
        </div>
      ))}

      {/* Filtros */}
      <Typography variant="body2" style={filterTitle} sx={{ marginTop: 4 }}>
        Filtrar por
      </Typography>
      {filters.map((filter, key) => (
        <div key={key} style={{ width: "max-content" }}>
          <ListItemButton onClick={() => handleCategoryClick(filter.name)}>
            <ListItemText
              primaryTypographyProps={{ style: subtitleStyle }}
              primary={filter.name}
            />
          </ListItemButton>
          {expandedCategory === filter.name && (
            <List component="div" disablePadding>
              {filter.subcategories.map((subcategory, subKey) => (
                <ListItemButton
                  key={subKey}
                  onClick={() => handleSubcategoryClick(subcategory)}
                >
                  <ListItemText
                    primaryTypographyProps={{ style: childrenFilter }}
                    primary={subcategory}
                  />
                </ListItemButton>
              ))}
            </List>
          )}
        </div>
      ))}

      {/* Filtro por calificación */}
      <div
        style={{
          width: "max-content",
          marginBlock: "1.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="body2" style={{ ...subtitleStyle, marginLeft: 0, marginBottom: 4 }}>
          Calificación
        </Typography>
        {[4, 3, 2, 1].map((stars, key) => (
          <div
            key={key}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginTop: 6,
            }}
          >
            <FormControlLabel
              key={stars}
              control={
                <Checkbox
                  color="primary"
                  checked={selectedRating >= stars}
                  onChange={() => setSelectedRating(stars)}
                  style={{ display: "none", margin: "0px", padding: "0px" }}
                />
              }
              label={
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    fontSize: isMobile ? "12px" : "0.7rem",
                    gap: "4px",
                    // width: isMobile ? "100%" : "100%",
                  }}
                >
                  <Rating
                    readOnly
                    name="size-small"
                    sx={{ m: 0, ml: 1, p: 0, mb: 1 }}
                    value={stars}
                    size="small"
                  />
                  <p>Y más</p>
                </div>
              }
              labelPlacement="end"
            />
          </div>
        ))}
      </div>

      {/* Rango de precios */}
      <div
        style={{
          width: "100%",
        }}
      >
        <Typography variant="body2" style={{ ...subtitleStyle, marginLeft: 0, marginBottom: "0.4rem" }}>Rango de precios</Typography>
        {priceRange.map((range, key) => (
          <ListItemButton
            key={key}
            onClick={() => console.log("Rango de precio seleccionado:", range)}
          >
            <ListItemText
              primaryTypographyProps={{ style: childrenFilter }}
              primary={range}
            />
          </ListItemButton>
        ))}
        <div
          style={{ display: "flex", gap: 4, width: isMobile ? "80%" : "100%" }}
        >
          <input type="text" style={{ ...inputStyle }} placeholder="$Mínimo" />
          <input type="text" style={{ ...inputStyle }} placeholder="$Máximo" />
        </div>
        <Button
          variant="outlined"
          color="primary"
          style={{
            width: isMobile ? "80%" : "100%",
            height: "auto",
            padding: "5px 20px",
            marginTop: "8px",
          }}
        >
          Ver resultados
        </Button>
      </div>

      {/* Marcas */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "max-content",
          marginTop: "1.5rem",
          marginBottom: "0.5rem",
        }}
      >
        <Typography
          variant="body2"
          style={{ ...subtitleRange, marginBottom: 8 }}
        >
          Marcas
        </Typography>
        {checkboxFilters.marcas.map((marca, key) => (
          <div
            key={key}
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              marginBottom: "6px",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                border: "1px solid lightgray",
                borderRadius: "3px",
                marginRight: "5px",
                backgroundColor:
                  selectedMarcas.indexOf(marca) !== -1
                    ? "#1B1AFF"
                    : "transparent",
                cursor: "pointer",
              }}
              onClick={() => handleMarcaClick(marca)}
            ></div>
            <Typography
              variant="body2"
              style={{
                marginTop: "2px",
                color: "gray",
                fontWeight: 500,
                fontSize: "12px",
              }}
            >
              {marca}
            </Typography>
          </div>
        ))}
      </div>

      {/* Otros filtros */}
      <div style={{ marginTop: "8px" }}>
        {othersFilters.map((filter, key) => (
          <div key={key} style={{ width: "max-content" }}>
            <ListItemButton onClick={() => handleCategoryClick(filter.name)}>
              <ListItemText
                primaryTypographyProps={{ style: subtitleStyle }}
                primary={filter.name}
              />
            </ListItemButton>
            {expandedCategory === filter.name && (
              <List component="div" disablePadding >
                {filter.subcategories.map((subcategory, subKey) => (
                  <ListItemButton
                    size="small"
                    key={subKey}
                    onClick={() => handleSubcategoryClick(subcategory)}
                  >
                    <ListItemText
                      primaryTypographyProps={{ style: { ...childrenFilter, marginLeft: -14 } }}
                      primary={subcategory}
                    />
                  </ListItemButton>
                ))}
              </List>
            )}
          </div>
        ))}
      </div>
    </List>
  );
};

export default SidebarContent;
