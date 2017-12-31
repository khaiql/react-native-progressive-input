import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 15.6.0
import {
  TextInput,
  View,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

class ProgressiveInput extends Component {
  static propTypes = {
    ...TextInput.propTypes,
    value: PropTypes.string,
    isLoading: PropTypes.bool,
    textInputStyle: TextInput.propTypes.style,
    clearButtonIcon: PropTypes.string,
    clearButtonColor: PropTypes.string,
    clearButtonSize: PropTypes.number,
    clearButtonStyle: PropTypes.object,
    activityIndicatorStyle: ActivityIndicator.propTypes.style,
    onBlur: PropTypes.func,
    onChangeText: PropTypes.func,
    onFocus: PropTypes.func,
    onInputCleared: PropTypes.func,
    underlineColorAndroid: PropTypes.string,
  };

  static defaultProps = {
    editable: true,
    clearButtonIcon: 'ios-close-circle',
    clearButtonColor: 'lightgrey',
    clearButtonSize: 20,
    underlineColorAndroid: 'transparent',
  };

  constructor(props) {
    super(props);

    this.state = {
      showClearButton: false,
      value: this.props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  clearInput() {
    this.setState({ value: '', focus: false });
    if (this.props.onInputCleared) {
      this.props.onInputCleared();
    }
  }

  isFocused() {
    return this.input.isFocused();
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this._renderClearButton()}
        <TextInput
          ref={input => (this.input = input)}
          style={[styles.textInput, this.props.textInputStyle]}
          focus={this.state.focus}
          value={this.state.value}
          editable={this.props.editable}
          onFocus={this._onFocus}
          placeholder={this.props.placeholder}
          onChangeText={this._onChangeText}
          selectTextOnFocus={this.props.selectTextOnFocus}
          onBlur={this._onBlur}
          autoCorrect={this.props.autoCorrect}
          keyboardType={this.props.keyboardType}
          multiline={this.props.multiline}
          placeholderTextColor={this.props.placeholderTextColor}
          returnKeyType={this.props.returnKeyType}
          autoCapitalize={this.props.autoCapitalize}
          maxLength={this.props.maxLength}
          onEndEditing={this.props.onEndEditing}
          onChange={this.props.onChange}
          underlineColorAndroid={this.props.underlineColorAndroid}
        />
        {this._renderActivityIndicator()}
      </View>
    );
  }

  _renderActivityIndicator = () => {
    let size = this.props.isLoading ? {} : { width: 0, height: 0 };
    return (
      <ActivityIndicator
        animating={this.props.isLoading}
        style={[
          styles.activityIndicator,
          this.props.activityIndicatorStyle,
          size,
        ]}
      />
    );
  };

  _renderClearButton = () => {
    if (this.state.showClearButton) {
      return (
        <TouchableOpacity onPress={() => this.clearInput()}>
          <Ionicons
            name={this.props.clearButtonIcon}
            size={this.props.clearButtonSize}
            style={[styles.clearIcon, this.props.clearButtonStyle]}
            color={this.props.clearButtonColor}
          />
        </TouchableOpacity>
      );
    }
  };

  _onFocus = () => {
    this._shouldShowClearButton();
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  _onChangeText = text => {
    this.setState({ value: text });
    this._shouldShowClearButton(text);
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  };

  _shouldShowClearButton = value => {
    const v = value || this.state.value;
    const showClearButton = v ? true : false;
    this.setState({ showClearButton });
  };

  _onBlur = () => this.setState({ showClearButton: false });
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  clearIcon: {
    marginLeft: 5,
  },
  textInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  activityIndicator: {
    marginLeft: 5,
    marginRight: 5,
  },
});

export default ProgressiveInput;
