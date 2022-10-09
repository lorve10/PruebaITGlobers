import './App.css';
import { Header } from './components/Header';
import { Menu } from './components/MenuHead';
import { MenuBody } from './components/Menu';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
        <Header/>
        <Menu/>
        <MenuBody/>
        <Footer/>
    </div>
  );
}

export default App;
