import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  return (
    <div className="app-wrapper">
      {/*<Header/>*/}
      {/*<Navbar/>*/}
      {/*<Main/>*/}
      <header className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt=""/>
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>

      </nav>
      <div className="content">
        <div>
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt=""/>
        </div>
        <div>
          ava+descr
        </div>
        <div>
          My Posts
          <div>
            New post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
