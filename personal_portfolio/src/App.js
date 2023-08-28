import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import 'intersection-observer'; // Import the polyfill


function App() {
  return (
    <div>
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
