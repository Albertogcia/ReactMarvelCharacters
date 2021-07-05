import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import styles from './styles';

class CharacterCard extends Component {
  render() {
    
    const source = {uri: `${this.props.character.thumbnail?.path}/portrait_xlarge.${this.props.character.thumbnail?.extension}`};

    return (
      <TouchableOpacity
        //onPress={() => this.props.onPress(this.props.character)}
        style={styles.card}>
        <Image style={styles.image} source={source}/>
        <View style={styles.textContainer}>
        <Text style={styles.text}>{this.props.character.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

CharacterCard.defaultProps = {
  character: {},
  onPress: () => {},
};

export default CharacterCard;
