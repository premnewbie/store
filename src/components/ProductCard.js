import React, { useState } from 'react'
import heart from '../Assets/heart.png'
import redheart from '../Assets/redheart.png'

const ProductCard = ({product}) => {

    const [like,setLike] = useState(false)

  return (
    <div className='card'>
        <img src={product.image} alt='product-image' width={250} height={300}/>
        <h3>{product.title}</h3>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <p style={{fontSize: '0.75rem'}}><u>Sign in</u> or Create an account to see pricing</p>
            {!like && <img src={heart} alt='heart-icon' className='like' onClick={() => setLike(prev => !prev)} />}
            {like && <img src={redheart} alt='red-heart-icon' className='like' onClick={() => setLike(prev => !prev)} />}
        </div>
    </div>
  )
}

export default ProductCard