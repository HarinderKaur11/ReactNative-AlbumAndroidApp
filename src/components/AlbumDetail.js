import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//this is only a preesentational components
// we dont need lifecylle or access to state
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
          style={styles.thumbnail_style}
          source={{ uri: props.album.thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{props.album.title}</Text>
            <Text>{props.album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: props.album.image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(props.album.url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnail_style: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1, //to make sure image take full width of containerStyle
    width: null

  }

};

export default AlbumDetail;

//make reusable card and cardItem for putting styles
