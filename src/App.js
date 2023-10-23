import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

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
      <Home />
      <About />
      {/* <Skills /> */}
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
