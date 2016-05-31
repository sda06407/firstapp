/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class myapp extends Component {
  render() {
    return (
      <View>
        <View style={[styles.height160 , styles.row]}>
          <View style={[styles.part1left, styles.height160]}>
            <Text style={[styles.font14, styles.margin18, styles.green]}>範例標題</Text>
            <Text style={[styles.font12, styles.margin14, styles.marLeft10]}>範例內文</Text>
            <Image style={styles.pic}>source={{uri:'http://i.imgur.com/wwuWl7I.jpg'}}</Image>
          </View>
          <View style={[styles.height160, styles.part1right]}>
            <Text style={styles.font90}>1</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({


  row: {
    flexDirection:'row',
    paddingTop:20
  },

  margin18:{
    marginTop:18
  },

  margin14:{
    marginTop:14
  },

  font14:{
    fontSize:14
  },
  font12:{
    fontSize:12
  },

  height160: {
    height:160
  },

  height80:{
    height:80
  },

  green:{
    color:'#55A44B',
    fontWeight:'900'
  },

  red:{
    color:'#FF3F0D',
    fontWeight:'900'
  },
  marLeft10:{
    marginLeft:10
  },


  part1left:{
    flex:1,
    borderRightWidth:0.5,
    borderBottomWidth:1,
    borderColor: '#DCD7CD'
  },

  part1right:{
    flex:2,
    borderColor:'#DCD7CD',
    borderBottomWidth: 1
  },
  pic:{
    width:100,
    height:100
  }
});

AppRegistry.registerComponent('myapp', () => myapp);
