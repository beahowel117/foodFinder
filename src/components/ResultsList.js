//this is a reusable component to show the list we got bakc from yelp api

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

//pass props down from parent...title from SearchScreen
const ResultsList = ({ title, results, navigation }) => {
  //hiding a section if there aren't any results: return null which means don't return anything
  if(!results.length){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return (
        <TouchableOpacity onPress={() => navigation.navigate("ResultsShow", {id: item.id})}>
          <ResultsDetail result={item}/>
        </TouchableOpacity>
        )
      }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
 titleStyle: {
   fontSize: 18,
   fontWeight: 'bold',
   marginLeft: 15,
   marginBottom: 5
 },
 container: {
   marginBottom: 10
 }
})

export default withNavigation(ResultsList);
