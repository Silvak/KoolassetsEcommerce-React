const Title = ({ text }) => {
  return (
    <h2
      style={{
        color: "#000",
        fontSize: "clamp(25px,2vw,30px)",
        fontWeight: "400",
        margin: "30px 0 50px 0",
      }}
    >
      {text}
    </h2>
  );
};
export default Title;
