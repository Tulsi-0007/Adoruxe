// pages/Home.js
import React,{useState,useEffect} from 'react';
import './render.css';
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


const quotes = [
    {
      text: 'Sparkling jewels for a sparkling you!',
      author: 'Adoruxe'
    },
    {
      text: 'Adorn yourself with love and beauty.',
      author: 'Adoruxe'
    },
    {
      text: 'Where every piece is a masterpiece.',
      author: 'Adoruxe'
    },
    {
      text: 'Jewels that tell a story, one sparkle at a time.',
      author: 'Adoruxe'
    },
    {
      text: 'Shine bright, like the diamonds we adore.',
      author: 'Adoruxe'
    },
    {
      text: "Elegance is not just a look, it's a feeling." ,
      author: 'Adoruxe'
    },
    {
      text: 'Unlock the beauty within, with our exquisite jewels.',
      author: 'Adoruxe'
    },
    {
      text: 'Jewelry that speaks to the soul.',
      author: 'Adoruxe'
    },
    {
      text: 'Where jewelry meets art, and beauty meets passion.',
      author: 'Adoruxe'
    },
    
  ];
  
  const Home = () => {
    const [Adoruxe, setQuote] = useState(quotes[0]);
    const [showQuote, setShowQuote] = useState(true);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setShowQuote(false);
        setTimeout(() => {
          setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
          setShowQuote(true);
        }, 500);
      }, 5000);
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <>
      <div className='home-decor'>
        {showQuote && (
          <div className='quote-container'>
            <h2>{Adoruxe.author}</h2>
            <p>{Adoruxe.text}</p>
          </div>
        )}
      </div>
      
      
  
      <div className='Mission-decor'>
      <h2>Our Mission</h2>
          <p>We believe that jewelry should be a symbol of love, joy, and self-expression. Our mission is to create pieces that inspire our customers to celebrate their individuality.</p>
      </div>
      <div className='footer'>
        <h3>Contact Us</h3>
      <a href="https://www.linkedin.com/in/tulsi-kumari-5857b8299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
        <FaLinkedin />
        <h4>Tulsi LinkedIn</h4>
      </a>
      <a href="https://www.linkedin.com/in/swastika-28455b2a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
        <FaLinkedin />
        <h4>Swastika LinkedIn</h4>
      </a>
      <a href="tulsikumari11017@gmail.com">
      <MdOutlineMail />
      <h4>Tulsi Mail</h4>
    </a>
    <a href="swastika080308@gmail.com">
      <MdOutlineMail />
      <h4>Swastika Mail</h4>
    </a>
      </div>
      </>
    );
  };
  
  export default Home;