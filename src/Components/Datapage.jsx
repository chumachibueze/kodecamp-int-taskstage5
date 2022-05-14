import React from 'react';
import Homepage from './Homepage';
import useFetch from './useFetch';

const Datapage = () => {

    const {product, error, loading} = useFetch('https://fakestoreapi.com/products');

  return (
    <>
    <div className='container-fluid'>
    <div className="container">
        {loading && <div className='my-5 text-center'> <h4 className='mt-5 pt-5'>Loading...</h4> </div>}
        {error && <div className='my-5 text-center'>{error} </div>}
        {product && <Homepage  product = {product} />}

    </div>
    </div>
    </>
  )
}

export default Datapage;