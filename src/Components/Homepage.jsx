import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = ({product}) => {

  return (
    <div className='row mb-5 mt-5'>
      {
        product.map((data) => (
          <div className='col-md-4 col-sm-12' key={data.id}>
            <div className="container shadow rounded-3 mt-5" id='img-container'>
              <div className="img-container text-center py-4" >
                <img src={data.image} alt="images"  className='img-fluid ' id='product-img'/>
              </div>
              <p className='py-2 text-center'>{data.title}</p>
              <div className="button-container d-flex justify-content-end pb-3">
                <Link to={`/details/${data.id}`}>
                  <p className='btn bg-secondary'>Details</p>
                </Link>
              </div>
            </div>
          </div>
          
        ))
      }
    </div>
    
  )
}

export default Homepage;