import React, {useEffect, useState} from 'react'
import {FlatList, Image, StyleSheet, Text, View} from 'react-native'
import endpoint from '../api/endpoint-recent'
import ResultsDetailElement from '../Components/ResultsDetailElement'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('nid');
    const getResult = async id => {
        //console.log(id);
        const response = await endpoint.get(`/my-most-recent/${id}`)
        setResult(response.data);
    }
    useEffect(() => {
        getResult(nid);
    }, [])

    if (!result) {
        return null
    }
    return (
        <View>
            <ResultsDetailElement result={result[0]} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default ResultsShowScreen;
