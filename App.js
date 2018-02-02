import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Alert } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text style={this.props.style}>Hello {this.props.name}!</Text>
    );
  }
}

class BlinkingImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isShowingText:true}
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    },500)
  }
  render() {
    let display = this.state.isShowingText ?<Image source={this.props.source} style={this.props.style} /> : null;
    return display;
  }
}

/*<BlinkingImage source={{uri: 'http://today.emich.edu/imgs/story/img10268_story-20170307092704.jpg'}} style={{width:400,height:100}} /> 
<View style={styles.container}>
        <Greeting name="Nathan" style={[styles.green,styles.bigBold]}/>
        <Greeting name="Rich" style={styles.bigBold}/>
        <Greeting name="Cameron" style={[styles.blue,styles.bigBold]}/>

      </View>
      */
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
          <TextInput style={{flex:1,padding:10,fontSize:35, textAlign: 'center'}} placeholder="Type some text..." onChangeText={(text) => this.setState({name:text})} />
          <View style={{flex:1}}>
            <Button onPress={() => {
              Alert.alert('HELLO!');
            }} 
            title="Tap Here" />
          </View>
          <View style={{flex: 3, backgroundColor: 'steelblue', padding: 10 }}>
            <Text style={{flex:1, fontSize:35, color: 'white', textAlign: 'center'}}>{this.state.name ? 'Reversed: ' + this.state.name.split('').reverse().join('').toUpperCase(): ''}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});
