import React, {Component} from 'react';
import {Text, SafeAreaView, Image, ScrollView, View} from 'react-native';
import styles from './styles';

class CharacterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aspectRatio: null,
    };
  }
  componentDidMount() {
    this.getImageAspectRatio();
  }

  getImageAspectRatio = async () => {
    if (this.props.character?.imageUrl) {
      Image.getSize(this.props.character?.imageUrl, (width, height) => {
        this.setState({aspectRatio: width / height});
      });
    }
  };

  render() {
    const {aspectRatio} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Image
            style={[styles.image, {aspectRatio}]}
            source={{uri: this.props.character?.imageUrl}}></Image>
          <View style={styles.characterData}>
            <Text style={styles.dataTitle}>{'Description'}</Text>
            <Text style={styles.dataText}>
              {this.props.character?.description != ''
                ? this.props.character?.description
                : "This character don't have a description"}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CharacterDetails;
