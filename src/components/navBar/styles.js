import { makeStyles } from "@material-ui/core";

export const NavMobileMenuStyles = makeStyles({
  container: {
    padding: "10px 20px",
  },
  accordion: {
    background: "none",
    boxShadow: "none",
  },
  accordionSummary: {
    "& .css-bzs7dh-MuiAccordionSummary-expandIconWrapper": {
      color: "#000",
    },
  },
  accordionTitle: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#000",
    marginRight: "5px",
  },
  accordionDetails: {
    fontSize: "16px",
    fontWeight: "normal",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    paddingLeft: "30px",
  },

  linkInactive: {
    textDecoration: "none",
    gap: "8px",
    display: "flex",
    alignItems: "center",
    color: "#00000080",
    fontSize: "18px",
  },
  linkActive: {
    textDecoration: "none",
    gap: "8px",
    display: "flex",
    alignItems: "center",
    color: "blue",
    fontSize: "18px",
  },
});
