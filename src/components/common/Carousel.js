import './Carousel.css'

const Carousel = ({ children, style }) => {
    return (
        <div className='Carousel-div' style={style}>
            {children}
        </div>
    );
};

export default Carousel;