//extracted code from search screen to seperate logic for yelp api use

import { useEffect, useState } from 'react';
import yelp from '../api/yelp';



//inside the function add in all code need to make a request to the yelp api
//at the bottom will return a couple of variables to make available to searchScreenn component
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  //create a helper function for api request
  //making a get type request to the search route
  //need to have an arg of predefined search to render default searchTerm
  const searchApi = async (searchTerm) => {
   try{
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'new york'
      }
    });
      setResults(response.data.businesses);
  }catch(err){
    setErrorMessage('Something went wrong');
  }
};

useEffect(() => {
  searchApi('pasta')
}, []);

//take stock on the component you cut the code from, what it is still usign and return those items ie this was taken from searchscreen, it's still using searchApi, errorMessage and results state in searchScreen component
//need to return those variables:

return [searchApi, results, errorMessage]
}
