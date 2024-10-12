import USflag from '../Assets/USflag.png';
import instagram from '../Assets/instagram.png';
import linkedin from '../Assets/linkedin.png';
import gpay from '../Assets/gpay.png';
import paypal from '../Assets/paypal.png';
import applepay from '../Assets/applepay.png';
import mastercard from '../Assets/mastercard.png';
import amex from '../Assets/amex.png';
import pay from '../Assets/pay.png';

const Footer = () => {

  return (
    <section className="footer">
        <div className="footer-1-lg">
            <div>
              <h3>BE THE FIRST TO KNOW</h3>
              <p style={{marginTop:'2rem',marginBottom:'2rem'}}>Sign up for updates from mettā muse.</p>
              <input type='email' placeholder="Enter your e-mail"/>
              <button style={{color: '#FFFFFF'}}>Subscribe</button>
            </div>
            <hr className='line-sm'></hr>
            <div>
              <h3>CONTACT US</h3>
              <p style={{marginTop:'1rem',marginBottom:'1rem'}}>+44 221 133 5360</p>
              <p style={{marginBottom:'1rem'}}>customercare@mettamuse.com</p>
              <h3 style={{marginTop:'1rem',marginBottom:'1rem'}}>Currency</h3>
              <img src={USflag} alt='US-flag' width={20} height={20}/>
              <span style={{position:'relative',top:-5}}> + USD</span>
              <p style={{fontWeight:400,fontSize:'12px',marginTop:'1rem',marginBottom:'1rem'}}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
        <hr></hr>
        <div className="footer-2-lg">
          <div>
            <h3>mettā muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <hr className='line-sm'></hr>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <hr className='line-sm'></hr>
          <div>
            <div>
              <h3>FOLLOW US</h3>              
              <img src={instagram} alt='instagram-icon' width={30} height={30} style={{marginRight:'1rem',marginTop:'1rem',marginBottom:'2rem'}}/>
              <img src={linkedin} alt='linkedin-icon' width={30} height={30} style={{marginBottom:'2rem'}}/>    
              <h4>mettā muse Accepts</h4>
              <div style={{marginTop:'1rem',display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center'}}>
                <img src={gpay} alt='gpay' width={50} />              
                <img src={mastercard} alt='mastercard' width={50} />                
                <img src={paypal} alt='paypal' width={50} />                
                <img src={amex} alt='amex' width={50} />                
                <img src={applepay} alt='applepay' width={50} />                
                <img src={pay} alt='pay' width={50} />                               
              </div>
            </div>
          </div>
        </div>
        <p style={{textAlign:'center',marginTop:'2rem'}}>Copyright © 2023 mettamuse. All rights reserved.</p>
    </section>
  )
}

export default Footer