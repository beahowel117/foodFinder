import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ({ navigation }) => {
  //the new state from the image rendering , when expecting state to be an obj use default value of null, when expecting an array, use default of an empty array
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  console.log(result);
//need to call axios reqest to get images from yelp api, pass id as arg for each business
  const getImageResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    //the data we care about is on the response.data prop
    //will need to capture the data of images and rerender them , will need to create a new state variable inside the component to do so
    setResult(response.data)
  }
  //will only want to call this helper function one time inside the component or if we call it multiple times, will make multiple calls to yelp...useEffect will help
  useEffect(() => {
    //pass in id from our navigation param
    getImageResult(id)
  }, [])

  //our result starts off as null so need to address it
  if(!result){
    return null
  }
//add a list of images, need to import FlatList
  return(
    <View>
      <Text>{result.name}</Text>
      <FlatList
      data={result.photos}
      //an item with what we are trying to fetch...photo will be a string of a url ...which is unique so can just use as our key
      keyExtractor={(photo) => photo}
      //then call renderItem function with a few differnet props, but only care about item prop ..item is teh actual photo url we are trying to show
      renderItem={({ item }) => {
        //by default image needs style or won't display
       return <Image style={styles.image} source={{ uri: item }}/>
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;
