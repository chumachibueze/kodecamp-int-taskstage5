
import { useEffect, useState } from 'react';
const useFetch = (url) => {

    const [product, setProduct] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok){
                    throw Error("could not fetch the data from the resource, check the URL");
                }
                return response.json();
            })
            .then((data) =>{
                setProduct(data);
                setLoading(false);
                setError(null);
            })
            .catch((err) =>{
                setLoading(false);
                setError(err.message);
            })
    }, [url]);


  return {product, error, loading}
}

export default useFetch;