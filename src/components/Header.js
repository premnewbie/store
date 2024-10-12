import logo from '../Assets/Logo.png'
import searchicon from '../Assets/search-normal.png'
import heart from '../Assets/heart.png'
import profile from '../Assets/profile.png'
import shoppingbag from '../Assets/shopping-bag.png'
import hamburger from '../Assets/hamburger.png'

const Header = () => {
  return (
    <header className="header">
        <section className='header-1'>
          <div style={{display:'flex',gap:'1rem'}}>
            <img src={hamburger} alt='hamburger' width={25} height={25} className='hamburger'/>
            <img src={logo} alt='logo' width={25} height={25}/>
          </div>          
          <p className='logo-text'>LOGO</p>
          <section className='header-icons'>
            <img src={searchicon} alt='search-icon' width={20} height={20} />
            <img src={heart} alt='hearct-icon' width={20} height={20} /> 
            <img src={shoppingbag} alt='shopping-bag' width={20} height={20} />
            <img src={profile} alt='profile' width={20} height={20} className='profile'/>
            <p>Eng <i className="arrow down"></i></p>
          </section>
        </section>
        <section className='header-2'>
          <p>HOME</p>
          <p>|</p>
          <p>SHOP</p>
          <p>SKILLS</p>
          <p>STORIES</p>
          <p>ABOUT</p>
          <p>CONTACT US</p>
        </section>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p className='header-description'>Lorem ipsum dolor sit amet consectetur. 
          Amet est posuere rhoncus scelerisque.
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
    </header>
  )
}

export default Header