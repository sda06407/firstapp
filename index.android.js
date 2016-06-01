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
'use strict';
class myapp extends Component {
  render() {
    return (
      <View>
        <View style={{backgroundColor:'#8ec6e7'}}>
          <View style={[styles.height160 , styles.row]}>
            <View style={[styles.part1left, styles.height160]}>
              <Text style={[styles.font14, styles.margin18, styles.green,{marginTop:11}]}>範例標題</Text>
              <Text style={[styles.font12, styles.margin14, styles.marLeft10]}>範例內文</Text>
              <Image style={[styles.pic]} source={{uri:'http://i.imgur.com/wwuWl7I.jpg'}}></Image>
            </View>
            <View style={[styles.height160, styles.part1right]}>
              <View style={[styles.row, {flex:1}]}>
                <View style={[{flex:1}]}>
                  <Text style={[styles.font14, styles.margin18, styles.red, {marginTop:-10}] }>範例標題2</Text>
                  <Text style={[styles.font12, styles.margin14, {marginLeft:30, color:'black'}]}>範例內文</Text>
                </View>
                <View style={[{flex:1}, {marginTop:-13}]}>
                  <Image style={{height:80,width:80, alignSelf: 'center'}} source={{uri:'http://i.imgur.com/ZV72GlX.jpg'}}></Image>
                </View>
              </View>
                <View style={[{flex:1, flexDirection: 'row',borderTopWidth:0.5, borderColor:'#DDD8CE'}]}>
                  <View style={{flex:1, borderRightWidth:1, borderColor:'#DDD8CE',}}>
                    <Text style={{color:'#F742AB', marginLeft:5,fontWeight:'bold', fontSize:13, marginTop:1}}>範例標題3</Text>
                    <Text style={{fontSize:12,marginTop:4, marginLeft:5}}>範例內文3</Text>
                  </View>
                <View style={{flex:1}}>
                  <Text style={[styles.font14,{color:'#FF8601',marginLeft:5,fontWeight:'bold', fontSize:13, marginTop:1}]}>範例標題4</Text>
                  <Text style={[styles.font12,{marginTop:4,marginLeft:5}]}>範例內文4</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{borderBottomWidth:1,borderTopWidth:1, borderColor:'#DDD8CE', marginTop:40,height:65, flexDirection: 'row',paddingTop:10}}>
            <View style={[{flex:1}]}>
              <Text style={{fontSize:17, color:'#FF7F60', fontWeight:'900', marginLeft:7}}>範例標題5</Text>
              <Text style={{marginLeft:7, fontSize:12, marginTop:3}}>範例內文5</Text>
            </View>

            <View style={{flex:1}}>
              <Image style={{width:120, height:50}} source={{uri:'http://i.imgur.com/4BF7Yct.jpg'}}></Image>
            </View>
          </View>
        </View>

        <View>
          <View style={{flexDirection:'row'}}>
            <View style={[styles.row,{borderColor:'#DDD8CE', borderRightWidth:1,flex:1}]}>
              <View style={{flex:1}}>
                <Text style={{fontSize:17, color:'#FF7F60', fontWeight:'bold', marginLeft:7}}>範例標題6</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>範例內文6</Text>
              </View>
              <View style={{flex:1}}>
                <Image style={{width:55,height:55,marginLeft:10}} source={{uri: 'http://i.imgur.com/VimZ7wc.jpg'}}></Image>
              </View>
            </View>
            <View style={[styles.row,{flex:1}]}>
              <View style={{flex:1}}>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>範例標題7</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>範例內文7</Text>
              </View>
              <View style={{flex:1}}>
                <Image style={{width:55,height:55, marginLeft:10}} source={{uri:"http://i.imgur.com/g6VzuNu.jpg"}}></Image>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={[styles.row, {borderColor:'#DDD8CE', borderRightWidth:1,  marginLeft:1,flex:1}]}>
              <View style={{flex:1}}>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>範例標題8</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>範例內文8</Text>
              </View>
              <View style={{flex:1}}>
                <Image style={{width:55,height:55,marginTop:3, marginLeft:7}} source={{uri:"http://i.imgur.com/ovE8QD1.jpg"}}></Image>
              </View>
            </View>
            <View style={[styles.row],{flex:1}}>
              <View style={{flex:1}}>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>範例標題9</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>範例內文9</Text>
              </View>
              <View style={{flex:1}}>
                <Image style={{width:55,height:55,marginTop:3, marginLeft:7}} source={{uri:"http://i.imgur.com/whplJ00.jpg"}}></Image>
              </View>
            </View>
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
    width:90,
    height:90
  }
});

AppRegistry.registerComponent('myapp', () => myapp);
