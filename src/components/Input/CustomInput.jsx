import { Box, useMediaQuery } from "@mui/material";

const CustomInput = ({ width, label, ...props }) => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  if (label) {
    return (
      <Box>
        <label
          htmlFor={label}
          style={{
            fontSize: "14px",
            fontWeight: "normal",
            display: "block",
            margin: isDesktop ? "8px" : "20px 0",
            lineHeight: isDesktop && "1.1",
          }}
        >
          {label}
        </label>
        <input
          {...props}
          style={{
            border: "none",
            padding: "10px",
            borderRadius: "6px",
            width: width ? width : "100%",
            outline: "none",
          }}
        />
      </Box>
    );
  } else {
    return (
      <input
        {...props}
        style={{
          border: "none",
          padding: "10px",
          borderRadius: "6px",
          width: width ? width : "100%",
          outline: "none",
        }}
      />
    );
  }
};
export default CustomInput;
