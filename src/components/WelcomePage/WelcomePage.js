import { Box, Button, ButtonGroup, Card, CardHeader, Grid2, Slide, Stack, Typography } from '@mui/material';
import Carousel from '../common/Carousel';
import CategoryCard from '../common/CategoryCard';
import SellerCard from '../common/SellerCard';
import DancingImages from '../DancingImages/DancingImages';
import './WelcomePage.css';
import React, { useEffect, useRef, useState } from 'react';
import TitlebarImageList from '../common/TitlebarImageList';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function WelcomePage() {

    let animatedWords = ['Programmer...?', 'Piano Tutor...?', 'Voice Actor...?', 'Screen Writer...?']
    // let categories = ['Science & Technology', 'Art', 'Music', 'Voice Acting', "Creative Writing", 'Tutoring', 'Screen  Writer', 'Fitness & Sports', 'Yoga', 'Dance',]// 'Fitness & Sports', 'Yoga', 'Dance', 'Fitness & Sports', 'Yoga', 'Dance', 'Fitness & Sports', 'Yoga', 'Dance']
    let sellers = [{ 'img':'Einstein.png' ,'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
    { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },]
    // { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    // { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    // { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' }]
    // const animatedWords = ['Web Developer ?', 'Digital Marketing ?', 'Graphic Designer ?', '']
    // const categories = ['Science & Technology', 'Art', 'Music', 'Voice Acting', "Creative Writing", 'Tutoring', 'Screen  Writer', 'Fitness & Sports', 'Yoga', 'Dance', 'Fitness & Sports', 'Yoga', 'Dance', 'Fitness & Sports', 'Yoga', 'Dance', 'Fitness & Sports', 'Yoga', 'Dance']
    // const sellers = [{ 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    // { 'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
    // { 'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },
    // { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    // { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    // { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' }]
    const navigate = useNavigate();
    const scrollRef = useRef(0);
    const currentTop = useRef(0);
    const [intervalId, setIntervalId] = useState(null);
    const [currentElement, setCurrentElement] = useState(animatedWords[0]);
    const settings = {
        dots: false, // Show dots below the slider
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Time between auto-scroll (in milliseconds)
        // pauseOnHover: true, // Pause on hover
        vertical: true, // Enable vertical scrolling
        verticalSwiping: true,
        // verticalSwiping: true, // Enable vertical swiping

      };
    // const [scrollArray, setScrollArray] = useState([animatedWords[0], animatedWords[1]])
    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
      };

    const handleClickSearch = () => {
        navigate("/explore")
    };

    const handleClickSignUp = () => {
        navigate("/account/register")
    };

    const scrollToPosition = (jump, duration) => {
        if (scrollRef.current) {
            const startTime = Date.now();
            const startPosition = scrollRef.current.scrollTop;
            const endPosition = startPosition + jump;

            const step = () => {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                scrollRef.current.scrollTop = startPosition + (jump * progress);
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        }
    }

    // const keepScrolling = (jump, duration) => {
    //     currentTop.current = scrollRef.current.scrollTop
    //     const h1Element = document.querySelector('.WelcomePage-text h1');
    //     const h1Height = h1Element.offsetHeight;
    //     setIntervalId(setInterval(() => {
    //         scrollToPosition(h1Height, duration);
    //     }, 3000));
    // };
    // useEffect(() => {
    //     keepScrolling(60, 200)
    // }, [])
    return (
        <Box>
            <Box className = "h-100 bg-gradient-to-r from-violet-950 to-black flex py-20 px-10 justify-center">
                <Box sx={{
                    width: 500,
                    height: 400
                }}>
                    <Box className='pl-10 py-10'>
                        <Typography variant='h4' className='text-white' sx={{fontWeight: 'bold'}}>
                            Looking for A
                        </Typography>
                        <Typography variant='h3' color='#0054FF'>
                        <Slider {...settings}>
                            {animatedWords.map((word)=><div>{word}</div>)}
                        </Slider>
                        </Typography>

                        <Typography variant='body1' className='text-gray-500 pr-10 py-5' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac quam id justo vehicula tincidunt ac id eros. Fusce viverra, dui quis finibus tempus, quam lorem mattis nunc, eget laoreet nulla neque feugiat dolor. Proin porttitor sapien non eleifend pellentesque.
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            <Button variant='contained' onClick={handleClickSignUp} style={{backgroundColor:'#0054FF'}}>
                                Get Started
                            </Button>

                            <Button variant='contained' onClick={handleClickSearch} style={{backgroundColor:'transparent', border:'1px solid white'}}>
                                Explore
                            </Button>
                        </Stack>
            
                        <div ref={scrollRef} className='WelcomePage-scroller'>

                        </div>
                    </Box>
                </Box>

                <Box>
                    <img
                        src='/home.png'
                        className='mr-5'
                        style={{ maxWidth: '400px', maxHeight: '500px' }}
                    />
                </Box>

            </Box>
            <div className='WelcomePage-section-break'>
                <svg className='WelcomePage-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'rgb(46 16 101)', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'black', stopOpacity:1}} />
                    </linearGradient>
                </defs>
                    <path fill="url(#gradient)" fill-opacity="1" d="M0,192L34.3,197.3C68.6,203,137,213,206,186.7C274.3,160,343,96,411,90.7C480,85,549,139,617,165.3C685.7,192,754,192,823,186.7C891.4,181,960,171,1029,170.7C1097.1,171,1166,181,1234,202.7C1302.9,224,1371,256,1406,272L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                </svg>
                <svg className='WelcomePage-wave-disp-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'rgb(46 16 101)', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'black', stopOpacity:1}} />
                    </linearGradient>
                </defs>
                    <path fill="url(#gradient)" fill-opacity="0.3" d="M0,192L34.3,197.3C68.6,203,137,213,206,186.7C274.3,160,343,96,411,90.7C480,85,549,139,617,165.3C685.7,192,754,192,823,186.7C891.4,181,960,171,1029,170.7C1097.1,171,1166,181,1234,202.7C1302.9,224,1371,256,1406,272L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                </svg>
                <svg className='WelcomePage-wave-disp-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'rgb(46 16 101)', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'black', stopOpacity:1}} />
                    </linearGradient>
                </defs>
                    <path fill="url(#gradient)" fill-opacity="0.1" d="M0,192L34.3,197.3C68.6,203,137,213,206,186.7C274.3,160,343,96,411,90.7C480,85,549,139,617,165.3C685.7,192,754,192,823,186.7C891.4,181,960,171,1029,170.7C1097.1,171,1166,181,1234,202.7C1302.9,224,1371,256,1406,272L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                </svg>
            </div>

            <TitlebarImageList />
        </Box>
    );
}