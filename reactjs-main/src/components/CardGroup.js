import React from 'react'
import { Link } from 'react-router-dom'

const CardGroup = () => {
  return (
    <>
    <div className="card-group my-3">
  <div className="card">
    <img src="https://static-01.daraz.com.np/p/9ce744a9c27ff29ad1a0a88865b71b1d.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Mobiles</h5>
      
      <p className="card-text"><small className="text-muted"><Link to="#" className='text-decoration-none text-secondary'>View More...</Link></small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://static-01.daraz.com.np/p/c13f705f25a3052e20c5f4a00dd01bae.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Laptops</h5>
      
      <p className="card-text"><small className="text-muted"><Link to="#" className='text-decoration-none text-secondary'>View More...</Link></small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://static-01.daraz.com.np/p/3e43b96225df3bd7334befd11a5d48a4.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Accessories</h5>
      
      <p className="card-text"><small className="text-muted"><Link to="#" className='text-decoration-none text-secondary'>View More...</Link></small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://static-01.daraz.com.np/p/59efc1842b789e97355cda73c45af8e9.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Gaming Consoles</h5>
      
      <p className="card-text"><small className="text-muted"><Link to="#" className='text-decoration-none text-secondary'>View More...</Link></small></p>
    </div>
  </div>
</div>
    </>
  )
}

export default CardGroup