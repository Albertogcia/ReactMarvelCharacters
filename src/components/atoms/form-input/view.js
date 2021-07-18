import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles, {placeholderTextColor} from './styles';

class Input extends Component {
  render() {
    const {
      value,
      onChangeText,
      label,
      placeholder,
      error,
      style,
      keyboardType,
    } = this.props;

    return (
      <View style={[styles.inputContainer, style]}>
        {label ? <Text style={styles.inputLabel}>{label}</Text> : null}
        <View style={styles.inputBorder}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            multiline
          />
        </View>
        {error ? <Text style={styles.inputError}>{error}</Text> : null}
      </View>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.any,
  keyboardType: PropTypes.string,
};

Input.defaultProps = {
  keyboardType: 'default',
  value: '',
  placeholder: '',
  onChangeText: () => {},
  style: {},
};

export default Input;