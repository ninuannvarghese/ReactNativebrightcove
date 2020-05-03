import React, {useEffect, useState} from 'react'
import {FlatList, Image, StyleSheet, Text, View} from 'react-native'
import tvo from '../api/tvo-recent'
import ResultsDetailElement from '../Components/ResultsDetailElement'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const nid = navigation.getParam('nid');
    const getResult = async nid => {
        //console.log(id);
        const response = await tvo.get(`/tvo-most-recent/${nid}`)
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
