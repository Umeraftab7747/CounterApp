import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export class CounterScreen extends Component {
  state = {
    counter: 0,
    clr: 'white',
  };

  Increase = () => {
    this.setState({counter: this.state.counter + 1}, () => {
      if (this.state.counter > 0) {
        this.setState({clr: 'dodgerblue'});
      } else if (this.state.counter === 0) {
        this.setState({clr: 'white'});
      }
    });
  };

  Decrease = () => {
    this.setState({counter: this.state.counter - 1}, () => {
      if (this.state.counter < 0) {
        this.setState({clr: 'gold'});
      } else if (this.state.counter === 0) {
        this.setState({clr: 'white'});
      }
    });
  };

  Rest = () => {
    this.setState({counter: 0}, () => {
      if (this.state.counter === 0) {
        this.setState({clr: 'white'});
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* top */}
        <View style={styles.top}>
          <View style={styles.topContainer}>
            <Text style={[styles.Counter, {color: this.state.clr}]}>
              {this.state.counter}
            </Text>
          </View>
        </View>

        {/*  bottom*/}
        <View style={styles.bottom}>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              onPress={() => this.Increase()}
              style={styles.btn}>
              <Text style={styles.txt}>INCREASE +</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.Decrease()}
              style={styles.btn}>
              <Text style={styles.txt}>DECREASE -</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.Rest()} style={styles.rest}>
            <Text style={styles.txt}>REST</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'tomato',
  },
  top: {
    width: '100%',
    height: '70.5%',
    backgroundColor: 'tomato',
  },
  bottom: {
    width: '100%',
    height: '33.5%',
    backgroundColor: 'gold',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  btn: {
    backgroundColor: 'dodgerblue',
    margin: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '70%',
    // marginTop: '5%',
    borderRadius: 10,
  },
  txt: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomContainer: {
    width: '100%',
    height: '45%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: 'red',
  },
  rest: {
    backgroundColor: 'tomato',
    // margin: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '30%',
    // marginTop: '5%',
    borderRadius: 10,
    marginLeft: '35%',
  },
  topContainer: {
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  Counter: {
    fontSize: 90,
    fontWeight: 'bold',
  },
});
