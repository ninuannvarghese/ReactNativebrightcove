import {useState, useEffect} from 'react';
import tvo from '../api/tvo-recent'

export default ()=>{
    const [results, setResults]= useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi =async() => {
        try {
            const response = await tvo.get('/tvo-most-recent');
            setResults(response.data)
        } catch (e) {
            setErrorMessage(e)
        }
    };
    // Call Search API when component is first reandered
    useEffect(()=>{
        searchApi();
    },[]);
    return [searchApi, results, errorMessage];
};