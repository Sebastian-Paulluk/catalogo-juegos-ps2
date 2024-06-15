import { useEffect } from 'react';
import './App.css';
import { Header } from './components/header/header';
import MainContainer from './components/mainContainer/mainContainer';
import { exportMyData } from './services/firebase';
import { games } from './services/games';



function App() {
 /*  useEffect(() => {
    const initializeData = async () => {
      await exportMyData(games);
    };

    initializeData();
  }, []);  */

  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
}

export default App;
