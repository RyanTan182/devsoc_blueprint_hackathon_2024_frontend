import Carousel from "../common/Carousel";
// import CategoryCard from "../common/CategoryCard";
// import SellerCard from "../common/SellerCard";
import './Home.css'
import { useNavigate } from 'react-router-dom';


export default function Home() {
    let categories = ['Science & Technology', 'Art', 'Music', 'Voice Acting', "Creative Writing", 'Tutoring', 'Screen  Writer', 'Fitness & Sports', 'Yoga', 'Dance', 'Fitness & Sports', 'Yoga', 'Dance', 'Fitness & Sports', 'Yoga', 'Dance', 'Fitness & Sports', 'Yoga', 'Dance']
    let sellers = [{ 'img':'Einstein.png' ,'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
    { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },
    { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' }
    ,
    { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
        { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },
        { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
        { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
        { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
        { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
            { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },
            { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
            { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
            { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
            { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
                { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },
                { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
                { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
                { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' }]
    let topSellers = [{ 'img':'Einstein.png' ,'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
        { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
        { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },
        { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
        { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
        { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
    { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
        { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },
        { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
        { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
        { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' }
        ,
        { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
            { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },
            { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
            { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
            { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
            { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
                { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },
                { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
                { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
                { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
                { 'img':'Bruce.png' ,'name': 'Bruce Lee', 'role': 'Martial Artist', 'description': 'Hi! I will teach you one Inch punch!' },
                    { 'img':'Kaori.png' ,'name': 'Kaori', 'role': 'Violinist', 'description': 'Hi! I am available for providing Violin lessons till February' },
                    { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
                    { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' },
                    { 'name': 'Einstein', 'role': 'Physicist', 'description': 'Hi! I will solve all your Physics related doubts!' }]
    return(
        <div style={{color:'white'}}>
            <div className='Home-carousel-tag'>
            {categories.map(t => <CategoryCard title={t} />)}
            </div>
            <div style={{marginLeft:'2%', fontSize:'25px', marginRight:'2%'}}>
                Recommended
                <hr></hr>
            </div>
            <div className='Home-carousel-seller'>
            {sellers.map(t => <SellerCard data={t} />)}
            </div>
            <div style={{marginLeft:'2%', fontSize:'25px', marginRight:'2%'}}>
                Checkout the Trending Sellers
                <hr></hr>
            </div>
            <div className='Home-carousel-seller'>
            {topSellers.map(t => <SellerCard data={t} />)}
            </div>
        </div>
    )
}

function SellerCard({data}) {
  const navigate = useNavigate();
    return (
      <div onClick={() => navigate(`/search`)} className="Home-seller-card">
        <div className='Home-seller-card-img'>
        <img src={data['img']} width="100%" height="100%"/>
        </div>
        <div className='Home-seller-card-content'>
          <h3>{data['name']}</h3>
          <h6>{data['role']}</h6>
          <hr></hr>
          <div className='Home--seller-card-description'>{data['description']}</div>
        </div>
      </div>

    );
  }
  function ServiceCard({data}) {
    return (
      <div className="Home-service-card">
        <div className='Home-service-card-img'>
        <img src={data['img']} width="100%" height="100%"/>
        </div>
        <div className='Home-service-card-content'>
          <h3>{data['name']}</h3>
          <h6>{data['role']}</h6>
          <hr></hr>
          <div className='Home--service-card-description'>{data['description']}</div>
        </div>
      </div>
    );
  }

  function CategoryCard({title}) {
    return (
      <div className="Home-category-card">
        <div className='Home-category-card-content'>
          {title}
        </div>
      </div>
    );
  }