const Title = ({ text }) => {
  return (
    <h2
      style={{
        color: "#000",
        fontSize: "clamp(25px,2vw,30px)",
        fontWeight: "400",
        marginBottom: "40px",
        marginTop: "94px",
      }}
    >
      {text}
    </h2>
  );
};
export default Title;
