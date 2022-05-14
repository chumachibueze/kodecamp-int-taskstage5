import React from 'react';
import useFetch from './useFetch';

const Aboutpage = () => {
  const {product, error, loading} = useFetch('https://fakestoreapi.com/products');

  return (
    <div className='container-fluid'>
        <div className="container mt-5">
          {loading && <div className='my-5 text-center'> <h4 className='mt-5 pt-5'>Loading...</h4> </div>}
          {error && <div className='my-5 text-center'>{error} </div>}
          <div className='row mb-5'>
            {
             product && product.map((data) => (
                <div className='col-md-6 col-sm-12' key={data.id}>
                  <div className="container shadow rounded-3 mt-5" id='about-img-container'>
                    <div className="img-container text-center py-4" >
                      <img src={data.image} alt="images"  className='img-fluid ' id='product-img'/>
                    </div>
                    <h5 className='py-2 text-center'>{data.title}</h5>
                    <p>{data.description}.</p>
                    <p>Category: {data.category}</p>
                    <p>Price: ${data.price}.</p>
                  </div>
                </div>
                
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default Aboutpage;
