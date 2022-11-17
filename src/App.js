import { useEffect, useState } from 'react';
import './App.css';
import Featured from './components/Featured';
import Moon from './components/Honeymoon';
import Latest from './components/Latest';
import NavBar from './components/NavBar';
import SearchMenu from './components/SearchMenu';
import Trending from './components/Trending';
import Trips from './components/Trips';

function App() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    await fetch('https://api.npoint.io/f89acb9ee900ca95b8dc')
  .then((response) => response.json())
  .then((data) => setPosts(data));
   
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="App">
      <>
      <NavBar />
      <SearchMenu />
      <Featured posts = {posts}/>
      <Latest posts = {posts}/>
      <Trending posts={posts}/>
      <Trips posts={posts} />
      <Moon posts={posts} />
      
      </>
    </div>
  );
}

export default App;
