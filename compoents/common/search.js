'use strict';

import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  Alert,
  Animated,
  TouchableOpacity
} from 'react-native';

class Search extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	width: new Animated.Value(0)
	  };

	  PubSub.subscribe( 'showBack', this.showBack.bind(this));
	}
	//显示返回按钮
	showBack() {
		Animated.timing(
     	this.state.width,//初始值
     	{
     		toValue: 25
     	}
   	).start();//开始
	}
  render() {
    return (
      <View style={styles.wrap}>
      	<TouchableOpacity
      		activeOpacity={1}
      		onPress={()=>{
		      	Animated.timing(
		     			this.state.width,
		     			{
		     				toValue: 0
		     			}
		   			).start();
		      	PubSub.publish( 'hideBack', 'hide' );
      		}}
      	>
	      	<Animated.Image
	      	  style={{
	      	  	width: this.state.width,
	      	  	height: 25
	      	  }}
	      	  source={require('../../assets/icon/back.png')}
	      	/>
      	</TouchableOpacity>
      	<View style={styles.search}>
	      	<Image
	  		  style={styles.searchicon}
	  		  source={require('../../assets/icon/search.png')}
	  		/>
      		<Text style={styles.placehold}>
      		  搜索知乎内容
      		</Text>
      	</View>
  		<Image
  		  style={styles.news}
  		  source={require('../../assets/icon/-message.png')}
  		/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	wrap: {
		height: 25,
		paddingLeft: 15,
		paddingRight: 15,
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 10
	},
	search: {
		height: 25,
		backgroundColor: '#e7e7e7',
		borderRadius: 8,
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	news: {
		width: 25,
		height: 25,
		flexBasis: 25,
		marginLeft: 10,
	},
	searchicon: {
		width: 20,
		height: 20,
		marginTop: 4
	},
	placehold: {
		height: 25,
		lineHeight: 25,
		alignItems: 'center',
		color: '#999'
	}
});


export default Search;