import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEye } from 'react-icons/fa';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";


const Navbar = ({ countFromDb }) => {
  const [tracked, setTracked] = React.useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  React.useEffect(() => {
    const updateCounter = async () => {
      const docRef = doc(db, 'counter', 'count');
      const newValue = countFromDb + 1;
      setTracked(true);

      await setDoc(docRef, { count: newValue });
    };

    if (countFromDb && !tracked) {
      updateCounter();
    }
  }, [countFromDb, tracked]);

  return (
    <div className="fixed w-full h-[70px] flex lg:justify-center justify-between items-center px-4 bg-[#0a1527] text-white right-0">
      <IoMdMenu className="lg:hidden" size={30} onClick={toggleMenu} />

      <div className={`lg:flex ${showMenu ? 'block' : 'hidden'}`}>
        <ul className="flex">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="py-5 text-sm"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="py-5 text-sm"
              onClick={handleLinkClick}
            >
              Portolio
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              smooth={true}
              duration={500}
              className="py-5 text-sm"
              onClick={handleLinkClick}
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="py-5 text-sm"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <FaEye className="mr-2" size={15} />{' '}
        <span className="text-xs">{countFromDb}</span>
      </div>

      {/*Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1f1515]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/brigitabi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/brigita-bizjak-9472794b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a14a95]">
            <Link
              to="contact"
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
