import { useMediaQuery } from "@mui/material";

function MemberPicture({ picture, socials }) {
  const mdQuery = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="picture"
        style={{
          width: "164px",
          height: "164px",
          overflow: "hidden",
          borderRadius: "50%",
          marginBottom: !mdQuery && "25px",
        }}
      >
        <img
          src={picture}
          alt="MemberPicture"
          style={{
            width: "100%",
            height: "164px",
            display: "block",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: mdQuery && "70%",
        }}
      >
        {socials.map((soc) => (
          <div className="social-icons" style={{ width: "fit-content" }}>
            <img
              src={soc.image}
              alt="socialImage"
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberPicture;
