import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
const Details = () => {
    const {id} = useParams();

    const {product: data, loading, error} = useFetch('https://fakestoreapi.com/products/' + id);
  
    return (
      <>
      <div className='container-fluid'>
        <div className="container mt-5 pt-5">
          {loading && <div className='my-5 text-center'> Loading... </div>}
          {error && <div className='my-5 text-center'>{error} </div>}
          {data && (
            <div className=''>
              <div className='m-auto'>
                <div className="img-container text-center py-4" >
                  <img src={data.image} alt="images"  className='img-fluid ' id='product-img'/>
                </div>
                <h5 className='py-2 text-center'>{data.title}</h5>
                <p>{data.description}.</p>
                <p>Category: {data.category}</p>
                <p>Price: ${data.price}.</p>
              </div>
            </div>
          )}
        </div>
      </div>
      </>
    )
}

export default Details;