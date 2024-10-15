import Carousel from '../common/Carousel';
import CategoryCard from '../common/CategoryCard';
import SellerCard from '../common/SellerCard';
import DancingImages from '../DancingImages/DancingImages';
import './WelcomePage.css';
import React, { useEffect, useRef, useState } from 'react';


export default function WelcomePage() {

    let animatedWords = ['Programmer ?', 'Piano  Tutor ?', 'Voice Actor ?', 'Screen Writer ?', 'Find the right talent', 'Or be the right talent', 'Signup now!']
    let categories = ['Science & Technology', 'Art', 'Music', 'Voice Acting', "Creative Writing", 'Tutoring', 'Screen  Writer', 'Fitness & Sports', 'Yoga', 'Dance',]// 'Fitness & Sports', 'Yoga', 'Dance', 'Fitness & Sports', 'Yoga', 'Dance', 'Fitness & Sports', 'Yoga', 'Dance']
    let sellers = [{ 'img':'Einstein.png' ,'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
    { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },]
    // { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    // { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    // { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' }]
    const scrollRef = useRef(0);
    const currentTop = useRef(0);
    const [intervalId, setIntervalId] = useState(null);
    const [currentElement, setCurrentElement] = useState(animatedWords[0]);
    // const [scrollArray, setScrollArray] = useState([animatedWords[0], animatedWords[1]])
    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
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

    const keepScrolling = (jump, duration) => {
        currentTop.current = scrollRef.current.scrollTop
        const h1Element = document.querySelector('.WelcomePage-text h1');
        const h1Height = h1Element.offsetHeight;
        setIntervalId(setInterval(() => {
            scrollToPosition(h1Height, duration);
        }, 3000));
    };
    useEffect(() => {
        keepScrolling(60, 200)
    }, [])
    return (
        <div>
            <div className='WelcomePage-section-a'>
                {/* <div style={{width: '100%', height:'100%', position: 'relative'}}> */}
                <DancingImages/>
                {/* </div> */}
                <div className='WelcomePage-text'>
                    {/* <h1>
                        Looking for a
                    </h1> */}
                    <div ref={scrollRef} className='WelcomePage-scroller'>
                        {animatedWords.map((word) =>
                        (<h1>
                            {word}
                        </h1>)
                        )}
                    </div>
                </div>
                <div className='WelcomePage-button'>
                    <button>
                        Get Started
                    </button>
                    {/* </div> */}
                    {/* <div className='WelcomePage-button'> */}
                    <button>
                        Explore
                    </button>
                </div>
            </div>
            <div style={{width:'100%', height:'100%', zIndex:100, color:'white', backgroundColor:'#b691ff36'}}>
                <div className='WelcomePage-section-break'>
                    <svg className='WelcomePage-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill-opacity="1" d="M0,192L34.3,197.3C68.6,203,137,213,206,186.7C274.3,160,343,96,411,90.7C480,85,549,139,617,165.3C685.7,192,754,192,823,186.7C891.4,181,960,171,1029,170.7C1097.1,171,1166,181,1234,202.7C1302.9,224,1371,256,1406,272L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                    </svg>
                    <svg className='WelcomePage-wave-disp-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill-opacity="0.3" d="M0,192L34.3,197.3C68.6,203,137,213,206,186.7C274.3,160,343,96,411,90.7C480,85,549,139,617,165.3C685.7,192,754,192,823,186.7C891.4,181,960,171,1029,170.7C1097.1,171,1166,181,1234,202.7C1302.9,224,1371,256,1406,272L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                    </svg>
                    <svg className='WelcomePage-wave-disp-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill-opacity="0.1" d="M0,192L34.3,197.3C68.6,203,137,213,206,186.7C274.3,160,343,96,411,90.7C480,85,549,139,617,165.3C685.7,192,754,192,823,186.7C891.4,181,960,171,1029,170.7C1097.1,171,1166,181,1234,202.7C1302.9,224,1371,256,1406,272L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                    </svg>
                </div>
                <div style={{marginLeft:'80px', fontSize:'35px', marginRight:'80px'}}>
                    Filter your results from a wide array of categories
                    <hr></hr>
                </div>
                <Carousel>
                    {categories.map(t => <CategoryCard title={t} />)}
                </Carousel>
                <div style={{marginLeft:'80px', fontSize:'35px', marginRight:'80px', marginTop:'100px'}}>
                    <div style={{display:'flex', width:'100%', justifyContent:'right'}}>
                    Get services from your favourite sellers
                    </div>
                    <hr></hr>
                </div>
                <Carousel>
                    {sellers.map(d => <SellerCard data={d} />)}
                </Carousel>
            </div>
        </div>
    );
}