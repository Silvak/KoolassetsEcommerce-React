import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import banner2 from "../../assets/Img/banner2.jpg";

function ProductDescription() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1200px",
        width: "100%",
        gap: 3,
      }}
    >
      <Typography
        variant="body1"
        color="initial"
        style={{ fontSize: "32px", fontWeight: 400 }}
        mb={6}
      >
        Descripción de producto
      </Typography>

      {/* content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#DFDFDF",
          borderRadius: "6px",
          height: "300px",
          overflow: "hidden",
        }}
      >
        <img
          src={banner2}
          alt="Banner 1"
          style={{ objectFit: "cover", width: "100%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#DFDFDF",
          borderRadius: "6px",
          height: "600px",
          overflow: "hidden",
        }}
      >
        <img
          src={banner2}
          alt="Banner 2"
          style={{ objectFit: "cover", height: "100%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#DFDFDF",
          borderRadius: "6px",
          height: "300px",
          overflow: "hidden",
        }}
      >
        <img
          src={banner2}
          alt="Banner 3"
          style={{ objectFit: "cover", width: "100%" }}
        />
      </Box>

      {/* bottom section */}
      <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#DFDFDF",
            borderRadius: "6px",
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src={banner2}
            alt="small banner 1"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
            background: "#DFDFDF",
            borderRadius: "6px",
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src={banner2}
            alt="small banner 2"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
            background: "#DFDFDF",
            borderRadius: "6px",
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src={banner2}
            alt="small banner 3"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
            background: "#DFDFDF",
            borderRadius: "6px",
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src={banner2}
            alt="small banner 4"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default ProductDescription;
