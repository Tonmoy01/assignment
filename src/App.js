import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Home />
      </div>
    </>
  );
}

export default App;
