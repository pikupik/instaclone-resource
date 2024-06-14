import React from 'react';
import './App.css';
import { CiSquarePlus, CiHeart } from "react-icons/ci";
import { GoPaperAirplane } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import './Post.css'; // Import CSS untuk styling Post

//image users
import user1 from './assets/user1.jpeg';
import user2 from './assets/user2.jpeg';
import tiara from './assets/tiara.jpeg';
import yura from './assets/yura.jpeg';
import memeprofil from './assets/memepoto.png';

//posts image
import meme from './assets/post1.jpg';



const Post = ({ username, userImage, postImage, caption }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={memeprofil} alt={username} className="post-user-image" />
        <p className="post-username">{username}</p>
      </div>
      <img src={meme} alt="Post" className="post-image" />
      <div className="post-icons">
        <CiHeart className="post-icon" />
        <FaRegComment className="post-icon" />
        <GoPaperAirplane className="post-icon" />
      </div>
      <p className="post-likes"><strong>10.096 Suka</strong></p>
      <p className="post-caption"><strong>{username}</strong> {caption}</p>
      <p className="post-comments"><strong>Lihat semua 218 komentar</strong></p>
    </div>
  );
};

function App() {
  const stories = [
    { id: 1, name: 'Story Anda', image: user1 },
    { id: 2, name: 'fiersabesari', image: user2 },
    { id: 3, name: 'tiaraandini', image: tiara },
    { id: 4, name: 'yurayunita', image: yura },
  ];

  return (
    <>
      <div className="header">
        <h1>Instagram</h1>
        <div className="icons">
          <button className="icon-button">
            <CiSquarePlus />
          </button>
          <button className="icon-button">
            <CiHeart />
          </button>
          <button className="icon-button">
            <GoPaperAirplane />
          </button>
        </div>
      </div>
      <div className="story">
        {stories.map((story) => (
          <div key={story.id} className="story-item">
            <img src={story.image} alt={story.name} className="story-image" />
            <p className="story-name">{story.name}</p>
          </div>
        ))}
      </div>
      <div className="posts">
        {/* Gunakan komponen Post langsung di sini */}
        <Post 
          username="memecomic.id" 
          userImage="https://via.placeholder.com/50" 
          postImage="https://via.placeholder.com/600"
          caption="Sejauh ini" 
        />
      </div>
    </>
  );
}

export default App;
