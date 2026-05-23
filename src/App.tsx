import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="yahoo-app">
      {/* Top Navigation */}
      <header className="yahoo-header">
        <div className="header-content">
          <div className="logo-container">
            <h1 className="yahoo-logo">yahoo<span className="exclamation">!</span></h1>
          </div>

          <div className="search-container">
            <div className="search-box">
              <input type="text" placeholder="Search the web" />
              <button className="voice-search-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
              </button>
              <button className="search-submit-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </button>
            </div>
          </div>

          <nav className="header-nav">
            <a href="#" className="nav-link active">News</a>
            <a href="#" className="nav-link">Finance</a>
            <a href="#" className="nav-link">Sports</a>
            <div className="nav-link dropdown">More ⌄</div>
          </nav>

          <div className="header-actions">
            <button className="mail-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Mail
            </button>
            <button className="signin-btn">Sign in</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-layout">
        
        {/* Left/Center News Feed */}
        <div className="news-feed">
          
          {/* Article 1 */}
          <article className="news-card">
            <div className="image-wrapper video-wrapper">
              <div className="play-button">▶</div>
            </div>
            <div className="card-content">
              <span className="category politics">Politics</span>
              <h2 className="title">Trump's refrigerant announcement to lower grocery prices may have negative...</h2>
              <div className="meta">
                <span className="source-icon the-hill"></span>
                <span className="source">The Hill</span>
                <span className="comments">💬 781</span>
              </div>
            </div>
          </article>

          {/* Article 2 */}
          <article className="news-card">
            <div className="image-wrapper article-2-img"></div>
            <div className="card-content">
              <span className="category us">US</span>
              <h2 className="title">Miami Graffiti Artist Dies After Being Struck by Train That's Reportedly Killed Over 200...</h2>
              <div className="meta">
                <span className="source-icon people"></span>
                <span className="source">People</span>
                <span className="comments">💬 279</span>
              </div>
            </div>
          </article>

          {/* Article 3 (Ad) */}
          <article className="news-card">
            <div className="image-wrapper article-3-img"></div>
            <div className="card-content">
              <div className="ad-header">
                <span className="ad-badge">Ad</span>
                <span className="category">Daily Sport X</span>
              </div>
              <h2 className="title">Remember Him, Better Sit Down Before You See What He Looks Like Now</h2>
            </div>
          </article>

          {/* Article 4 */}
          <article className="news-card">
            <div className="image-wrapper article-4-img"></div>
            <div className="card-content">
              <span className="category us">US</span>
              <h2 className="title">Ontario Police Deploy Secret Spyware That Lets Them Remotely Take Over Your Phone</h2>
              <div className="meta">
                <span className="source">Gizmodo</span>
                <span className="comments">💬 112</span>
              </div>
            </div>
          </article>

        </div>

        {/* Right Sidebar Ad */}
        <aside className="sidebar">
          <div className="ad-banner">
            <div className="ad-banner-header">
              <span className="ad-icon">▶</span>
              <span className="ad-close">ⓘ</span>
            </div>
            <div className="ad-banner-content">
              <h3>Elastic<br/>Email</h3>
              <h4>Email Communication Platform</h4>
              <p><strong>Small businesses</strong> trust Elastic Email to deliver their mail. Start free, no card needed.</p>
              <button className="ad-open-btn">Open</button>
            </div>
          </div>
        </aside>

      </main>
    </div>
  );
};

export default App;