import "./styles.css";

const HeroImg = ({ url }) => {
  return (
    <div className="picture">
      <img src={url} alt="product image" />
    </div>
  );
};
export default HeroImg;
