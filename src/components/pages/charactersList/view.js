import React, {Component} from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CharacterCard from '../../molecules/card-character';
import styles from './styles';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 20,
    };
  }

  componentDidMount = () => {
    this.props.getCharacters(this.state.offset, this.state.limit);
    this.state.offset += this.state.limit;
  };

  onCharacterPress = character => {
    this.props.setItem(character);
    Actions.push('CharacterDetails', {title: character?.name || ''});
  };

  reloadList = () => {
    this.state.offset = 0;
    this.props.getCharacters(this.state.offset, this.state.limit);
    this.state.offset += this.state.limit;
  };

  getMoreCharacters = () => {
    if (!this.props.loading) {
      this.props.getCharacters(this.state.offset, this.state.limit);
      this.state.offset += this.state.limit;
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.list}
          keyExtractor={item => `character-card-${item.id}`}
          onEndReachedThreshold={0.5}
          onEndReached={this.getMoreCharacters}
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={this.reloadList}
              colors={['black']}
              tintColor={'black'}
            />
          }
          renderItem={({item}) => (
            <CharacterCard character={item} onPress={this.onCharacterPress} />
          )}
        />
      </SafeAreaView>
    );
  }
}

export default Characters;
