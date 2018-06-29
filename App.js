import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      component: 'a'
    }
    this.pickView = this.pickView.bind(this)
    this.currentView = this.currentView.bind(this)

  }

  pickView(display) {
    this.setState({component: display})
  }

  componentA() {
    console.log("hey homie component A")
    return(
      <View> 
        <Text> COMPONENT A </Text>
      </View>
    )
  }

  componentB() {
    console.log("hey homie component B")
    return(
      <View> 
        <Text> COMPONENT B </Text>
      </View>
    )
  }
  
  currentView() {
    let component 
    switch(this.state.component){
      case 'a':
      component = this.componentA()
        break;
      case 'b':
      component = this.componentB()
        break;
      default:
        component = this.componentA()
    }
    return component
  }

  render() {
    return (
      <View style={styles.container}>
      <Button onPress={(e)=> {this.pickView('a')}} title="A"/>
      <Button onPress={(e)=> {this.pickView('b')}} title="B"/>
      {this.currentView()}
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
});

