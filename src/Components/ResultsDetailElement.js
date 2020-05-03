import React, { Component } from 'react';
//import { Image, StyleSheet, Text, View } from 'react-native'
import HTML from 'react-native-render-html';
import { SafeAreaView, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BrightcovePlayer, BrightcovePlayerPoster, BrightcovePlayerUtil } from 'react-native-brightcove-player';

const ACCOUNT_ID = '5434391461001';
const POLICY_KEY =
    'BCpkADawqM0T8lW3nMChuAbrcunBBHmh4YkNl5e6ZrKQwPiK_Y83RAOF4DP5tyBF_ONBVgrEjqW6fbV0nKRuHvjRU3E8jdT9WMTOXfJODoPML6NUDCYTwTHxtNlr5YdyGYaCPLhMUZ3Xu61L';
const PLAYLIST_REF_ID = 'brightcove-native-sdk-plist';
const ResultsDetail = ({ result }) => {
  if (result.type === 'article') {
    var url = result.article_thumbnail;
    var imgurl = url.split("||")
    var imgtypeurl = imgurl[0];
    var description = result.field_description_formatted;
  } else if (result.type === 'video') {
    imgtypeurl = result.video_thumbnail;
    var bcvid = result.brightcoveid;
    var description = result.field_description;
  }
  return (
    <View>
      <View>
        {result.type === 'article'
        ?
          <Image style={styles.image} source={{ uri: imgtypeurl }} />
        :
          <BrightcovePlayer
            style={videostyles.video}
            accountId="18140038001"
            videoId={bcvid}
            policyKey="BCpkADawqM3GcA9H_gBNu1EPAEzHOmt9V6K6mOV7VWq1gPo3nGbZYy2Jcwhn8Pfs2Wx0D7Wq1zrWfiMOhNBJBlVq5SzWZZk_ec22WqI-JAksHAz9Zrvv-0JX4G4"
          />
        }
      </View>

      <View style={{ height: 450, padding: 10 }}>
        <ScrollView>
          <View contentContainerStyle={{ flex: 1 }}>
            <HTML html={result.title} baseFontStyle={styles.title} containerStyle={styles.titleContainer} />
              <Text>Published on </Text><Text style={styles.published}>{result.published_at}</Text>
            <HTML html={description} baseFontStyle={styles.description} containerStyle={styles.descriptionContainer} />

          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    borderRadius: 3,
    height: 220,
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    top: 200,
  },
  titleContainer: {
    marginBottom: 10,
    paddingTop: 16
  },
  description: {
    fontWeight: 'normal'

  },
  descriptionContainer: {
    marginBottom: 10
  },
  published: {
    fontWeight: 'normal',
    paddingBottom: 16

  },
  descriptionText: {
    backgroundColor: 'green',//Colors.transparentColor,
    fontSize: 16,
    flex: 0.8,
    color: 'white',
    textAlign: 'center',
    flexWrap: 'wrap'
  },
})
const videostyles = StyleSheet.create({
    container: {
    },
    video: {
        width: '100%',
        height: 260
    },
    list: {
        flex: 1
    },
    listItem: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    mainButton: {
        flex: 1,
        flexDirection: 'row'
    },
    body: {
        flex: 1,
        padding: 10,
        flexDirection: 'column'
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    offlineBanner: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'flex-start',
        padding: 3,
        backgroundColor: 'deepskyblue'
    },
    duration: {
        marginTop: 'auto',
        opacity: 0.5
    },
    poster: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    },
    downloadButton: {
        padding: 16,
        marginLeft: 'auto',
        alignSelf: 'center'
    }
});
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
