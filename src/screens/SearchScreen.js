import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] =useState('');
  //imported from useResults...where these now live
  const [searchApi, results, errorMessage] = useResults();

 //create a helper function to assist with grouping results task
 const filterResultsByPrice = (price) => {
   //price === '$' || '$$' || '$$$'
   return results.filter(result => {
     //will look at every result and see if it's equal to the price we passed in
     return result.price === price;
   })
 };

  return(
  <View style={{ flex: 1 }}>
    <SearchBar
    term={term}
    onTermChange={newTerm => setTerm(newTerm)}
    onTermSubmit={() => searchApi(term)}
    />
    {errorMessage ? <Text>Search Screen</Text> : null}
  <ScrollView>
    <ResultsList
    results={filterResultsByPrice('$')}
    title="Cost Effective"
    />
    <ResultsList
    results={filterResultsByPrice('$$')}
    title= "Bit Pricier"
    />
    <ResultsList
    results={filterResultsByPrice('$$$')}
    title="Big Spender"
    />
  </ScrollView>
  </View>

  )};
//now can go to ResultsList and recieve the prop of results
const styles = StyleSheet.create({

});

export default SearchScreen;
