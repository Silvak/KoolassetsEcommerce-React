import { Box, Typography } from "@mui/material";
import { BsCaretUpFill } from "react-icons/bs";

import { summaryStyles } from "@/components/Dashboard/styles";

const renderTextData = (data) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            fontSize: "14px",
            fontWeight: "normal",
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
            width: "80%",
          }}
        >
          <span style={{ minWidth: "140px" }}>{item.text}</span>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "2px",
              width: "70px",
            }}
          >
            {item.percentage}%
            <BsCaretUpFill color="#52C41A" />
          </div>
        </div>
      ))}
    </div>
  );
};

const Balance = ({ data }) => {
  const classes = summaryStyles();

  return (
    <>
      <Typography variant="subtitle1" className={classes.itemTitle}>
        Balance actual
      </Typography>
      <p className={classes.itemNumber}>$100.200</p>
      {renderTextData(data)}
      <hr className={classes.itemHr} />
      <Box className={classes.itemFooter}>
        <p>Ingresos hoy</p>
        <p>
          <strong>$ 9,99.99</strong>
        </p>
      </Box>
    </>
  );
};
export default Balance;
