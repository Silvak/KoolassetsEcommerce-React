import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
  Link,
  Divider,
  Box,
} from "@mui/material";

import { footerItems } from "../../utils/footerItems";

function FooterMobile() {
  return (
    <Paper elevation={1} sx={{ border: "none", backgroundColor: "#090A0B" }}>
      {footerItems.map((item, index) => (
        <Accordion
          disableGutters
          sx={{ backgroundColor: "#090A0B", borderBottom: "1px solid #615D5D" }}
          key={item.id}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#EFEFEF" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ color: "#EFEFEF" }}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.info.map((info, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  marginBlock: "12px",
                  color: "#B9B9B9",
                  maxWidth: "257px",
                }}
              >
                {info.link ? (
                  <Link
                    href={info.link}
                    sx={{
                      textDecoration: "none",
                      color: "#B9B9B9",
                      "&:hover": { color: "#1B1AFF" },
                    }}
                  >
                    {info.subinfo}
                  </Link>
                ) : (
                  info.subinfo
                )}
              </Typography>
            ))}
            {item.button && <>{item.button}</>}
          </AccordionDetails>
        </Accordion>
      ))}
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "36px",
            padding:"10px"
          }}
        >
          <Typography  sx={{color: "#EFEFEF"}}>Company Logo</Typography>
          <Typography variant="body2" sx={{color: "#EFEFEF"}}>Todos los Derechos Reservados</Typography>
        </Box>
      
    </Paper>
  );
}

export default FooterMobile;
