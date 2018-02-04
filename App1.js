import React from 'react';
import { 
  StyleSheet, Text, TextInput, View, Button, Alert, 
  SectionList, ActivityIndicator
} from 'react-native';

class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>{this.props.title}</Text>
      </View>
    );
  }
}

class Movie extends React.Component {
  render() {
    return (
      <Text style={styles.item}>
        <Text style={{fontWeight:'bold'}}>{this.props.title}</Text>
        <Text style={{fontSize:15}}> Released {this.props.released}</Text>
      </Text>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      people: []
    };
  }
  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          people: responseJson.movies,
          loading: false
        });
      })
      .catch((error) => {
        Alert.alert(error);
        console.error(error);
      });
  }
  render() {
    if(this.state.loading) {
      return (
        <View style={{flex: 1, paddingTop: 50}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Navbar title="Hello World" />
        <SectionList
          sections={[
            {title: 'All Movies', data: this.state.people}
          ]}
          renderItem={({item}) => <Movie title={item.title} released={item.releaseYear} />}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navbar: {
    height: 60,
    backgroundColor: 'steelblue',
    paddingTop: 25
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  blue: {
    color: 'blue'
  },
  green: {
    color: 'green'
  },
  bigBold: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
