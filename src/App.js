import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import Banner from './Components/Shared/Header/Banner/Banner';
import Navigation from './Components/Shared/Header/Navigation/Navigation';

function App() {
  return (
    <div className="App">
         <Navigation></Navigation>
         <Banner></Banner>
         <Footer></Footer>
    </div>
  );
}

export default App;

