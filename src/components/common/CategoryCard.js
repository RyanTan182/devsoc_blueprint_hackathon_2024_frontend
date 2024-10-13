import './CategoryCard.css';

export default function CategoryCard({title}) {
  return (
    <div className="CategoryCard-card">
      <div className='CategoryCard-content'>
        <h3>{title}</h3>
      </div>
    </div>
  );
}