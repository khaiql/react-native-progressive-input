
# Progressive Input
![Screenshot](https://github.com/khaiql/react-native-progressive-input/blob/master/screenshot.gif)
## Getting started

`$ npm install react-native-progressive-input --save`

## Usage
```javascript
import ProgressiveInput from 'react-native-progressive-input';

class Screen extends Component {
  ...

  render() {
    <ProgressiveInput />
  }
}

export default Screen;
```

## Properties

| Name                   | Type                              |
|------------------------|-----------------------------------|
| autoCorrect            | PropTypes.bool                    |
| keyboardType           | TextInput.propTypes.keyboardType  |
| multiline              | PropTypes.bool                    |
| placeholderTextColor   | PropTypes.string                  |
| returnKeyType          | TextInput.propTypes.returnKeyType |
| selectTextOnFocus      | PropTypes.bool                    |
| placeholder            | PropTypes.string                  |
| editable               | PropTypes.bool                    |
| autoCapitalize         | PropTypes.bool                    |
| maxLength              | PropTypes.number                  |
| multiline              | PropTypes.bool                    |
| onEndEditing           | PropTypes.func                    |
| onChange               | PropTypes.func                    |
| value                  | PropTypes.string                  |
| isLoading              | PropTypes.bool                    |
| textInputStyle         | TextInput.propTypes.style         |
| clearButtonIcon        | PropTypes.string                  |
| clearButtonColor       | PropTypes.string                  |
| clearButtonSize        | PropTypes.number                  |
| clearButtonStyle       | PropTypes.object                  |
| activityIndicatorStyle | ActivityIndicator.propTypes.style |
| onBlur                 | PropTypes.func                    |
| onChangeText           | PropTypes.func                    |
| onFocus                | PropTypes.func                    |
| onInputCleared         | PropTypes.func                    |


