import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native'
import HTML from 'react-native-render-html'

const ResultsDetail = ({result}) => {
    if (result.type === 'article'){
        var url = result.article_thumbnail;
        var imgurl =url.split("||")
        var imgtypeurl =imgurl[0];
    }else if (result.type === 'video') {
         imgtypeurl = result.video_thumbnail;
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: imgtypeurl}}/>
            <HTML html={result.title} style={styles.title} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        borderRadius: 3,
        height: 120,
        marginBottom: 5,
    },
    title: {
        fontWeight: 'bold',

    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 300,
        padding: 10
    },
    padding: {
        flex: 0.1
    },
    descriptionText: {
        backgroundColor: 'green',//Colors.transparentColor,
        fontSize: 16,
        flex: 0.8,
        color: 'white',
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    textWrap: {
        flexDirection: 'column',
        flex: 0.8
    },
})

const styleOptions = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 300,
        padding: 10
    },
    regular: { fontSize: 13 },
    superscript: { fontSize: 8 },
    strong: { fontSize: 13 }
});
export default ResultsDetail;
