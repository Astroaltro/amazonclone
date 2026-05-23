import React from 'react';
import './App.css';

interface Product {
  id: string;
  badge?: string;
  title: string;
  rating: number;
  reviews: string;
  bought: string;
  price: number;
  typicalPrice?: number;
  deliveryDate: string;
  shipsTo: string;
  buttonType: 'cart' | 'options';
  imageUrl: string;
}

const products: Product[] = [
  {
    id: '1',
    badge: 'Best Seller',
    title: 'FYY Travel Cable Organizer Pouch Electronic Accessories Carry Case Portable Waterproof Double Layers All-in-One Storage Bag for Cord, Charger, Phone, Earphone Black',
    rating: 4.6,
    reviews: '37.9K',
    bought: '10K+ bought in past month',
    price: 8.86,
    typicalPrice: 9.85,
    deliveryDate: 'Thu, Jun 4',
    shipsTo: 'Bangladesh',
    buttonType: 'cart',
    imageUrl: 'https://via.placeholder.com/200x200?text=Cable+Organizer'
  },
  {
    id: '2',
    badge: 'Overall Pick',
    title: 'Vacbird Vacuum Bags for Travel with Rechargeable air Pump, Carry-on Size Compression Packing Bags for Luggage and Suitcase, Space Saver for Clothes and Clothing 15 Combo Travel Size',
    rating: 4.4,
    reviews: '4.1K',
    bought: '30K+ bought in past month',
    price: 32.28,
    typicalPrice: 43.95,
    deliveryDate: 'Thu, Jun 4',
    shipsTo: 'Bangladesh',
    buttonType: 'options',
    imageUrl: 'https://via.placeholder.com/200x200?text=Vacuum+Bags'
  },
  {
    id: '3',
    badge: 'Best Seller',
    title: '18pack Travel Bottles for Toiletries,TSA Approved Silicone Travel Containers for Toiletries,Leak Proof Refillable Liqus Shampoo And Conditioner travel Essentials toiletry Bottles',
    rating: 4.6,
    reviews: '11.3K',
    bought: '20K+ bought in past month',
    price: 9.99,
    typicalPrice: 12.98,
    deliveryDate: 'Thu, Jun 4',
    shipsTo: 'Bangladesh',
    buttonType: 'cart',
    imageUrl: 'https://via.placeholder.com/200x200?text=Travel+Bottles'
  }
];

function App() {
  return (
    <div className="amazon-clone">
      {/* Header / Navigation */}
      <header className="header">
        <div className="nav-main">
          <div className="nav-left">
            <div className="logo">amazon</div>
            <div className="delivery">
              <span className="text-small">Deliver to</span>
              <span className="text-bold">Bangladesh</span>
            </div>
          </div>
          
          <div className="nav-search">
            <select className="search-select">
              <option>All</option>
            </select>
            <input type="text" value="travel" readOnly className="search-input" />
            <button className="search-button">🔍</button>
          </div>

          <div className="nav-right">
            <div className="nav-item">
              <span className="text-small">Hello, sign in</span>
              <span className="text-bold">Account & Lists</span>
            </div>
            <div className="nav-item">
              <span className="text-small">Returns</span>
              <span className="text-bold">& Orders</span>
            </div>
            <div className="nav-cart">
              🛒 Cart
            </div>
          </div>
        </div>

        <div className="nav-sub">
          <ul>
            <li>≡ All</li>
            <li>Today's Deals</li>
            <li>Gift Cards</li>
            <li>Sell</li>
            <li>Registry</li>
            <li>Prime Video</li>
            <li>Customer Service</li>
          </ul>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="content-container">
        {/* Top Results Bar */}
        <div className="results-bar">
          <span>1-16 of over 200,000 results for <strong>"travel"</strong></span>
          <select className="sort-select">
            <option>Sort by: Featured</option>
          </select>
        </div>

        <div className="main-layout">
          {/* Sidebar Filters */}
          <aside className="sidebar">
            <div className="filter-group">
              <h4>Popular Shopping Ideas</h4>
              <ul>
                <li>Medicine</li>
                <li>Power Bank</li>
                <li>Storage</li>
                <li>Hygiene</li>
              </ul>
            </div>
            <div className="filter-group">
              <h4>Gender</h4>
              <ul>
                <li><input type="checkbox" /> Men</li>
                <li><input type="checkbox" /> Women</li>
                <li><input type="checkbox" /> Boys</li>
                <li><input type="checkbox" /> Girls</li>
              </ul>
            </div>
            <div className="filter-group">
              <h4>Price</h4>
              <ul>
                <li>Up to $10</li>
                <li>$10 to $15</li>
                <li>$15 to $20</li>
              </ul>
            </div>
          </aside>

          {/* Product Results */}
          <main className="product-list">
            <h2>Results</h2>
            <p className="subtitle">Check each product page for other buying options.</p>
            
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.imageUrl} alt={product.title} />
                </div>
                
                <div className="product-details">
                  {product.badge && <span className="badge">{product.badge}</span>}
                  <h3 className="product-title">{product.title}</h3>
                  
                  <div className="product-rating">
                    ⭐⭐⭐⭐⭐ {product.rating} <span className="reviews">({product.reviews})</span>
                  </div>
                  <div className="bought-past-month">{product.bought}</div>
                  
                  <div className="product-price-section">
                    <span className="price-symbol">$</span>
                    <span className="price-whole">{Math.floor(product.price)}</span>
                    <span className="price-fraction">{(product.price % 1).toFixed(2).substring(2)}</span>
                    {product.typicalPrice && (
                      <span className="typical-price">Typical: ${product.typicalPrice}</span>
                    )}
                  </div>
                  
                  <div className="delivery-info">
                    <p>${(product.price * 3).toFixed(2)} delivery <strong>{product.deliveryDate}</strong></p>
                    <p>Ships to {product.shipsTo}</p>
                  </div>

                  {product.buttonType === 'cart' ? (
                    <button className="btn-add-cart">Add to cart</button>
                  ) : (
                    <button className="btn-options">See options</button>
                  )}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="back-to-top">Back to top</div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Get to Know Us</h4>
            <ul><li>Careers</li><li>Blog</li><li>About Amazon</li></ul>
          </div>
          <div className="footer-col">
            <h4>Make Money with Us</h4>
            <ul><li>Sell products on Amazon</li><li>Sell apps on Amazon</li><li>Become an Affiliate</li></ul>
          </div>
          <div className="footer-col">
            <h4>Amazon Payment Products</h4>
            <ul><li>Amazon Rewards Visa</li><li>Amazon.com Store Card</li></ul>
          </div>
          <div className="footer-col">
            <h4>Let Us Help You</h4>
            <ul><li>Your Account</li><li>Your Orders</li><li>Shipping Rates</li></ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
