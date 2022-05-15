import React, {useState} from 'react'
import Sidebar from '../Component/Sidebar';
import Navbar from '../Component/Navbar';
import HeroSection from '../Component/Hero';

const Home = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
   <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
   </>
  )
}

export default Home