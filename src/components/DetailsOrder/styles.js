import { makeStyles } from "@material-ui/core";

export const headerStyles = makeStyles({
  header: {
    width: "100%",
    height: "max-content",
    marginTop: "50px",
  },
  title: {
    color: "#000",
    background: "#EEEEEE",
    borderRadius: "6px",

    fontSize: "25px",
    padding: "10px",
    "& > p": {
      fontWeight: 600,
    },
  },
});

export const formStyles = makeStyles({
  form: {
    margin: "50px 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,420px))",
    gap: "30px",
    justifyContent: "center",
    "@media (min-width: 600px)": {
      justifyContent: "space-between",
    },

    "& label": {
      color: "#000",
      fontSize: "14px",
      fontWeight: "normal",
      display: "block",
      lineHeight: "0",
      marginBottom: "20px",
      "@media (min-width: 600px)": {
        marginBottom: "0",
      },
    },
    "&  input": {
      outline: "thin solid #EEE !important",
    },
  },
  select: {
    width: "100%",
    background: "none",
    border: "none",
    outline: "thin solid #EEE !important",
    borderRadius: "6px",
    cursor: "pointer",
  },
  enEspera: {
    color: "#3078BB",
  },
  entregado: {
    color: "#46B53C",
  },
  cancelado: {
    color: " #E44646",
  },
  btn: {
    marginTop: "22px",
  },
  gridItem: {
    height: "38px",
  },
});
