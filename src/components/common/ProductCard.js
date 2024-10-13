import './ProductCard.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function ProductCard({ data }) {
  const ImageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="/piano_product_image.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="/piano_product_images_1.jpeg" alt="Slide 2" />
          </div>
        </Slider>
      </div>
    );
  };

  return (
    <div className="ProductCard-card">
      <ImageSlider />
      <div className='ProductCard-content'>
        <h1>{data['product_name']}</h1>
        <h6>{data['seller_name']}</h6>
        <div className='review_star'>{data['reviews']}</div>
        <hr />
        <div className='ProductCard-description'>{data['description']}</div>
      </div>
    </div>
  );
}
