import {useState, useEffect} from 'react'
import { getErrorMessage } from '../helpers/getErrorMessage';

export const useFetcher = (requestFunction) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      requestFunction()
        .then((res) => {
          setData(res);
          setError(null);
        })
        .catch((err) => setError(getErrorMessage(err)))
        .finally(() => setLoading(false));
    }, [requestFunction]);
  
    return { data, error, loading };
}

export default useFetcher