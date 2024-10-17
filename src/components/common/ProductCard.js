import './ProductCard.css';
import Carousel from './Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ReactStars from "react-stars";
import { motion } from 'framer-motion';
import SellerCard from './SellerCard';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

export default function ProductCard({ data }) {
  const navigate = useNavigate();

  // const handleClickBuy = () => {
  //   navigate("/order")
  // }

  let sellers = [{ 'img':'Einstein.png' ,'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
    { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },]
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
            <img src="/piano_product_images_2.jpeg" alt="Slide 2" />
          </div>
        </Slider>
      </div>
    );
  };

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

  const ReviewStar = () => {
    return (
      <ReactStars
        count={5}
        value={data['reviews']}
        size={50}
        activeColor="#ffd700"
      />
    );
  };

  const AddToCartButton = () => {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          width:'500px',
          height:'50px'
        }}
        onClick={() => navigate(`/product/${data.product_id}`)}
      >
        Details
      </motion.button>
    );
  };
  
  return (
    <Box className='py-10 px-20 opacity-80'>

      <div className="ProductCard-card">
        <ImageSlider />
        <div className='ProductCard-content'>
          <h1>{data['product_name']}</h1>
          <h6>{data['seller_name']}</h6>
          <div className='ProductCard-review'>
          <ReviewStar />
          </div>
          <hr />
          <div className='ProductCard-description'>{data['description']}</div>
          <AddToCartButton/>
        </div>
        <ColoredLine color="black" />
        <div className='ProductCard-recommendations'>
          You may also like this...
        </div>
        <div className='ProductCard-rec-cards'>
          {sellers.map(d => <SellerCard data={d} />)}
        </div>
      </div>
    </Box>
  );
}
