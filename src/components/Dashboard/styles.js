import { makeStyles } from "@material-ui/core";

export const summaryStyles = makeStyles({
  container: {
    marginTop: "5%",
    width: "100%",
    padding: "0 0 50px 0",
  },
  header: {
    marginTop: "20px",
    padding: "10px",
    background: "#EEEEEE",
    width: "100%",
    borderRadius: "6px",
    marginBottom: "30px",
  },
  title: {
    fontWeight: 600,
    color: "#000",
    fontSize: "30px",
  },
  item: {
    width: "100%",
    padding: "15px",
    outline: "thin solid #DFDFDF",
    background: "#FFFF",
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
