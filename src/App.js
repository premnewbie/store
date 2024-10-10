import './App.css';
import logo from './Assets/Logo.png'
import searchicon from './Assets/search-normal.png'
import heart from './Assets/heart.png'
import profile from './Assets/profile.png'
import shoppingbag from './Assets/shopping-bag.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt='logo' width={25} height={25}/>
        <p className='logo-text'>LOGO</p>
        <section className='header-icons'>
          <img src={searchicon} alt='search-icon' width={20} height={20} />
          <img src={heart} alt='hearct-icon' width={20} height={20} /> 
          <img src={shoppingbag} alt='shopping-bag' width={20} height={20} />
          <img src={profile} alt='profile' width={20} height={20} />
          <p>Eng <i class="arrow-down"></i></p>
        </section>
      </header>
    </div>
  );
}

export default App;
