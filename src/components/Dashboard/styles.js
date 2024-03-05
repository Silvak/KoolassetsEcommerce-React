import { makeStyles } from "@material-ui/core";

export const summaryStyles = makeStyles({
  container: {
    width: "100%",
  },
  header: {
    marginTop: "20px",
    padding: "10px",
    background: "#EEEEEE",
    width: "100%",
    borderRadius: "6px",
  },
  title: {
    fontWeight: 600,
    color: "#000",
    fontSize: "30px",
  },
  item: {
    width: "100%",
    padding: "15px",
    outline: "2px solid #DFDFDF",
    boxShadow: "0 2px 10px #00000026",
    borderRadius: "6px",
    color: "#000",
  },
  itemTitle: {
    fontSize: "14px",
    fontWeight: "normal",
  },
  itemNumber: {
    fontSize: "28px",
    fontWeight: 600,
  },
  itemHr: {
    opacity: " 10%",
  },
  itemFooter: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
  },
});
