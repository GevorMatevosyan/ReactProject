import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Routing from './routes/Routing';

function App() {
  return (
    <div className="App">
      <Header />
     <Routing />
     <Footer />
    </div>
  );
}

export default App;
