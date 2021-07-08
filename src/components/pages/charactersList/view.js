import React, {Component} from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CharacterCard from '../../molecules/card-character';
import styles from './styles';

class Characters extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.initList();
  };

  onCharacterPress = character => {
    this.props.setItem(character);
    Actions.push('CharacterDetails', {title: character?.name || ''});
  };

  render() {
    return (
        <SafeAreaView>
          <FlatList
            data={this.props.list}
            keyExtractor={item => `character-card-${item.id}`}
            refreshControl={
              <RefreshControl
                refreshing={this.props.loading}
                onRefresh={this.props.initList}
                colors={['black']}
                tintColor={'black'}
              />
            }
            renderItem={({item}) => (
              <CharacterCard
                character={item}
                onPress={this.onCharacterPress}
              />
            )}
          />
        </SafeAreaView>
    );
  }
}

export default Characters;
