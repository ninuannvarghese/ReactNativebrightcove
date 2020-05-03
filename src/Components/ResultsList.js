import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetail'
import {withNavigation} from 'react-navigation'
const ResultsList = ({title, results, navigation}) => {
   if(!results.length){
       return null;
   }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{nid:item.nid})}>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }


});
export default withNavigation(ResultsList)
