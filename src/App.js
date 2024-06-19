import { useEffect } from 'react';
import './App.css';
import { Header } from './components/header/header';
import MainContainer from './components/mainContainer/mainContainer';
import { exportMyData } from './services/firebase';
import { games } from './services/games';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchScreen } from './components/searchScreen/searchScreen';


function App() {
/*   useEffect(() => {
    const initializeData = async () => {
      await exportMyData(games);
    };

    initializeData();
  }, []);  */

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/search/:searchedText"element={<SearchScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
