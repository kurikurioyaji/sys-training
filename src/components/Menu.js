import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const categories = [
  { id: 1, name: 'Math' },
  { id: 2, name: 'Science' },
  { id: 3, name: 'History' },
];

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <h1>Select Test Category</h1>
      </div>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id} onClick={() => navigate(`/test/${category.id}`)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
