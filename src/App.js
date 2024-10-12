import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer';


function App() {

  const [showSidebar,setShowSidebar] = useState(false)
  const [products,setProducts] = useState();

  useEffect(() => {
    handleFetch()
  },[])

  const handleFetch =  async() => {
   const response = await fetch('https://fakestoreapi.com/products')
   const data = await response.json();
   setProducts(data)
  }

  return (
    <div className="App">
      <Header />
      <section className='items-and-filter'>
        <p className='total-items' style={{textWrap:'nowrap'}}>3245 ITEMS</p>
        <div className='filter-dropdown'>
          <p onClick={() => setShowSidebar(prev => !prev)}>FILTER</p>
          <p style={{color: '#888792',textDecoration:'underline',cursor:'pointer'}}  onClick={() => setShowSidebar(prev => !prev)}>
            {showSidebar?<i className="arrow left">
            </i>:<i className="arrow right">
            </i>}
            {showSidebar?'HIDE FILTERS':'SHOW FILTERS'}
          </p>
          <select>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </section>
      <section className='container'>
        {showSidebar && <FilterBar />}
        <div className='products'>
          {products?.map((item) => (<ProductCard key={item.id} product={item} />))}
        </div>        
      </section>
      <Footer />
    </div>
  );
}

export default App;
