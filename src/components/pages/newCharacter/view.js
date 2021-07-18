import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {launchImageLibrary} from 'react-native-image-picker';
import Input from '../../atoms/form-input';
import styles from './styles';

class NewCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      name: '',
      description: '',
      errors: {},
    };
  }

  createCharacter = () => {
    if (this.isFormValid()) {
      const {image, name, description} = this.state;
      const data = {
        image: image?.uri,
        name: name,
        description: description,
      };
      this.props.createNewCharacter(data);
    }
  };

  isFormValid = () => {
    const {image, name, description} = this.state;

    let errors = {};

    if (!image) {
      errors.image = 'You need to select an image for the new character';
    }

    if (!name) {
      errors.name = 'You need to select a name for the new character';
    }

    if (!description) {
      errors.description =
        'You need to select a description for the new character';
    }

    this.setState({errors});
    return image && name && description;
  };

  openImagePicker = () => {
    const imageOptions = {
      mediaType: 'photo',
      maxWidth: 1280,
      maxHeight: 1280,
    };
    launchImageLibrary(imageOptions, media => {
      if (media.assets?.length) {
        this.setState({image: media.assets[0]});
      }
    });
  };

  render() {
    const {image, name, description, errors} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingScrollView>
          {image ? (
            <Image style={styles.image} source={{uri: image.uri}} />
          ) : null}
          <TouchableOpacity
            style={styles.imageButtonContainer}
            onPress={this.openImagePicker}>
            <View style={styles.imageButton}>
              <Text style={styles.imageButtonLabel}>{'Select an image'}</Text>
            </View>
            {errors?.image ? (
              <Text style={styles.error}>{errors?.image}</Text>
            ) : null}
          </TouchableOpacity>

          <Input
            label={'Name:'}
            placeholder={'Your character name'}
            value={name}
            onChangeText={v => this.setState({name: v})}
            style={styles.input}
            error={errors?.name}
          />

          <Input
            label={'Description:'}
            placeholder={'Your character description'}
            value={description}
            onChangeText={v => this.setState({description: v})}
            style={styles.input}
            error={errors?.description}
          />

          <Button title="Create character" onPress={this.createCharacter} />
        </KeyboardAvoidingScrollView>
      </SafeAreaView>
    );
  }
}

export default NewCharacter;
