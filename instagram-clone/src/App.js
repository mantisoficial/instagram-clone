import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([]); // const posts = [];

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>Hello World</h1>

      <Post username="mantis" caption="Boa amigao!" imageUrl="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"/>
      <Post username="stone" caption="Até desisti de ir pra fazenda." imageUrl="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"/>
      <Post username="pokz" caption="Grande programador!" imageUrl="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"/>

      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default App;
