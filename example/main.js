import Expo, { Components } from 'expo';
import React from 'react';
import ProgressiveInput from 'react-native-progressive-input';
import { StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';

const GOOGLE_API_KEY = 'AIzaSyB7-8qph-zszuxivIm7cwT5b37D22bm1A4';
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
const latitudeDelta = 0.0922;
const longitudeDelta = 0.0421;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: ds.cloneWithRows([]),
      value: '',
    };
    this.searchLocation = this.searchLocation.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderSeparator = this.renderSeparator.bind(this);
    this.onInputCleared = this.onInputCleared.bind(this);
  }

  async searchLocation(query) {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${GOOGLE_API_KEY}&input=${query}`;
    this.setState({ isLoading: true, value: query });
    const response = await fetch(url);
    const jsonResponse = await response.json();
    this.setState({ isLoading: false, dataSource: ds.cloneWithRows(jsonResponse.predictions) });
  }

  renderRow(prediction) {
    return (
      <TouchableOpacity onPress={() => this.onListItemClicked(prediction)} style={styles.listItem}>
        <Text>{prediction.description}</Text>
      </TouchableOpacity>
    );
  }

  renderSeparator() {
    return <View style={styles.listItemSeparator} />;
  }

  onInputCleared() {
    this.setState({ value: '', isLoading: false, dataSource: ds.cloneWithRows([]) });
  }

  async onListItemClicked(prediction) {
    this.setState({ value: prediction.description, dataSource: ds.cloneWithRows([]), isLoading: true });
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${prediction.place_id}&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const { lat, lng } = jsonResponse.result.geometry.location;
    this.mapView.animateToRegion({
      longitude: lng,
      latitude: lat,
      latitudeDelta,
      longitudeDelta,
    });
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <Expo.MapView
          style={styles.map}
          ref={m => this.mapView = m}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta,
            longitudeDelta,
          }}
        />
        <ProgressiveInput
          value={this.state.value}
          style={styles.progressiveInput}
          isLoading={this.state.isLoading}
          onChangeText={this.searchLocation}
          onInputCleared={this.onInputCleared}
        />
        <View style={styles.listViewContainer}>
          <ListView
            enableEmptySections
            style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderSeparator={this.renderSeparator}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  map: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  progressiveInput: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  listViewContainer: {
    flex: 0,
  },
  listView: {
    backgroundColor: 'white',
    margin: 10,
  },
  listItem: {
    padding: 10,
  },
  listItemSeparator: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
  },
});

Expo.registerRootComponent(App);
