import React, { Component, PropTypes } from 'react';
import {
  TextInput,
  View,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  clearIcon: {
    marginLeft: 5
  },
  textInput: {
    flex: 1,
    height: 40,
    marginLeft: 10
  },
  activityIndicator: {
    marginLeft: 5,
    marginRight: 5
  }
});

class ProgressiveInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showClearButton: false,
      value: this.props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  }

  clearInput() {
    this.setState({value: '', focus: false});
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
          ref={(input) => this.input = input}
          style={[styles.textInput, this.props.textInputStyle]}
          focus={this.state.focus}
          value={this.state.value}
          editable={this.props.editable}
          onFocus={this._onFocus.bind(this)}
          placeholder={this.props.placeholder}
          onChangeText={this._onChangeText.bind(this)}
          selectTextOnFocus={this.props.selectTextOnFocus}
          onBlur={this._onBlur.bind(this)}
          autoCorrect={this.props.autoCorrect}
          keyboardType={this.props.keyboardType}
          multiline={this.props.multiline}
          placeholderTextColor={this.props.placeholderTextColor}
          returnKeyType={this.props.returnKeyType}
          selectTextOnFocus={this.props.selectTextOnFocus}
          autoCapitalize={this.props.autoCapitalize}
          maxLength={this.props.maxLength}
          multiline={this.props.multiline}
          onEndEditing={this.props.onEndEditing}
          onChange={this.props.onChange}
        />
        {this._renderActivityIndicator()}
      </View>
    );
  }

  _renderActivityIndicator() {
    var size = {};
    if (!this.props.isLoading) {
      size = {width: 0, height: 0};
    }

    return (
      <ActivityIndicator
        animating={this.props.isLoading}
        style={[styles.activityIndicator, this.props.activityIndicatorStyle, size]}
      />
    );
  }

  _renderClearButton() {
    if (this.state.showClearButton) {
      return (
        <TouchableOpacity onPress={() => this.clearInput()}>
          <Icon name={this.props.clearButtonIcon} size={this.props.clearButtonSize} style={[ styles.clearIcon, this.props.clearButtonStyle ]} color={this.props.clearButtonColor} />
        </TouchableOpacity>
      );
    }
  }

  _onFocus() {
    this._shouldShowClearButton();
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  _onChangeText(text) {
    this.setState({value: text});
    this._shouldShowClearButton(text);
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  }

  _shouldShowClearButton(value) {
    let v = value || this.state.value;
    let showClearButton = v ? true : false;
    this.setState({showClearButton});
  }

  _onBlur() {
    this.setState({showClearButton: false});
  }
}

let textInputProps = {
  autoCorrect,
  keyboardType,
  multiline,
  placeholderTextColor,
  returnKeyType,
  selectTextOnFocus,
  placeholder,
  editable,
  autoCapitalize,
  maxLength,
  multiline,
  onEndEditing,
  onChange,
} = TextInput.propTypes;

ProgressiveInput.propTypes = {
  ...textInputProps,
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
  onInputCleared: PropTypes.func
};

ProgressiveInput.defaultProps = {
  editable: true,
  clearButtonIcon: 'times-circle',
  clearButtonColor: 'lightgrey',
  clearButtonSize: 20,
};

export default ProgressiveInput;
