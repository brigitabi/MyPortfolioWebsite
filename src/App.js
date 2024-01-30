import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { db } from './firebase';
import { Route, Routes } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import Books from './pages/Books';

// import Skills from "./components/Skills";

function App() {
  const [count, setCount] = React.useState();
  const [fetched, setFetched] = React.useState(false);

  const fetchCounter = async () => {
    const docRef = doc(db, 'counter', 'count');

    const response = await getDoc(docRef);

    if (response.data()) {
      setCount(response.data().count);
    }

    setFetched(true);
  };

  React.useEffect(() => {
    if (!fetched) {
      fetchCounter();
    }
  });

  return (
    <div>
      <Navbar countFromDb={count} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
