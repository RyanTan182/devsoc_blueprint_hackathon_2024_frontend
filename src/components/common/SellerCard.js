import './SellerCard.css';

export default function SellerCard({data}) {
  return (
    <div className="SellerCard-card">
      <div className='SellerCard-card-img'>
      <img src={data['img']} width="100%" height="100%"/>
      </div>
      <div className='SellerCard-content'>
        <h3>{data['name']}</h3>
        <h6>{data['role']}</h6>
        <hr></hr>
        <div className='SellerCard-description'>{data['description']}</div>
      </div>
    </div>
  );
}