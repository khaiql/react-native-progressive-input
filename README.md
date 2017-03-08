
# Progressive Input
![Screenshot](https://github.com/khaiql/react-native-progressive-input/blob/master/screenshot.gif)

[Progressive Input](https://github.com/khaiql/react-native-progressive-input) is used as a part of autocomplete solution. The control has clear button to clear text and activity indicator to show that background job is being performed.

## Getting started

`$ npm install react-native-progressive-input --save`

If you dont own the dependency `react-native-vector-icons`, please make sure you also run: 

* `npm install react-native-vector-icons --save`

* `react-native link`

on the terminal. This will add some necessary fonts and Info.plist updates on your xcode project.

## Usage
```javascript
import ProgressiveInput from 'react-native-progressive-input';

class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isLoading: false
    };
  }
  
  _onChangeText(text) {
    this.setState({isLoading: true, value: text});
    
    fetch("YOUR_URL_FOR_GETTING_SUGGESTION")
      .then((result) => {
        // Process list of suggestions
        
        this.setState({isLoading: false});
      });
  }

  render() {
    <ProgressiveInput
      value={this.state.value}
      isLoading={this.state.isLoading}
      onChangeText={this._onChangeText.bind(this)}
    />
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

## Author
- Khai Le (Scott)
- Email: khai.le@live.com
- Blog: [lequangkhai.wordpress.com](https://lequangkhai.wordpress.com)

## License
MIT
