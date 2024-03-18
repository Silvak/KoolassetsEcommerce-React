import { useBoundStore } from "@/stores/index";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import NavIcons from "./NavIcons";
import { NavLink, useLocation } from "react-router-dom";
import { MENU_ITEMS, MENU_ITEMS_ADMIN } from "@/utils/menuItems";

import { NavMobileMenuStyles } from "./styles";

const NavMobileMenu = () => {
  const { User } = useBoundStore((state) => state);
  const css = NavMobileMenuStyles();

  return (
    <Box className={css.container}>
      {MENU_ITEMS.map((item) => (
        <Accordion className={css.accordion} key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className={css.accordionSummary}
          >
            <h3 className={css.accordionTitle}>{item.title}</h3>
          </AccordionSummary>
          <AccordionDetails className={css.accordionDetails}>
            {item.links.map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? css.linkActive : css.linkInactive
                }
              >
                {link.icon && <link.icon />}
                <span>{link.label}</span>
              </NavLink>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      {User.isAdmin &&
        MENU_ITEMS_ADMIN.map((item) => (
          <Accordion className={css.accordion} key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={css.accordionSummary}
            >
              <h3 className={css.accordionTitle}>{item.title}</h3>
            </AccordionSummary>
            <AccordionDetails className={css.accordionDetails}>
              {item.links.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? css.linkActive : css.linkInactive
                  }
                >
                  {link.icon && <link.icon />}
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      <NavIcons
        sx={{
          gap: "10px",
          mt: 2,
        }}
      />
    </Box>
  );
};
export default NavMobileMenu;
