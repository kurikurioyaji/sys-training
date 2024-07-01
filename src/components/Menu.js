import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './Menu.css';

function Menu() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/categories')  // /api/categoriesではなく/categoriesに修正
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/test/${categoryId}`);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Menu</h1>
        <img src="/sys-トレ.png" alt="Logo" />
      </div>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-item"
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
