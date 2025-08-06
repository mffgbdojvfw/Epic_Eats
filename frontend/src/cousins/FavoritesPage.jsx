import React from 'react';

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <h1>Favorites</h1>
      <div className="favorites-list">
        {favorites.map((item) => (
          <div key={item.id} className="favorite-item">
            <img src={item.img} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>Price: {item.price}₹</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;

