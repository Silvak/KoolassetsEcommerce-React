const HeroImg = ({ url }) => {
  return (
    <figure className="hero-img_picture">
      <img src={url} alt="product image" />
    </figure>
  );
};
export default HeroImg;
