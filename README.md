
# react-native-progress-text-input

## Getting started

`$ npm install react-native-progress-text-input --save`

### Mostly automatic installation

`$ react-native link react-native-progress-text-input`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-progress-text-input` and add `RNProgressTextInput.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNProgressTextInput.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNProgressTextInputPackage;` to the imports at the top of the file
  - Add `new RNProgressTextInputPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-progress-text-input'
  	project(':react-native-progress-text-input').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-progress-text-input/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-progress-text-input')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNProgressTextInput.sln` in `node_modules/react-native-progress-text-input/windows/RNProgressTextInput.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Cl.Json.RNProgressTextInput;` to the usings at the top of the file
  - Add `new RNProgressTextInputPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNProgressTextInput from 'react-native-progress-text-input';

// TODO: What do with the module?
RNProgressTextInput;
```
  