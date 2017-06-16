'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class Tools extends Component {
  render() {
    return (
     	<View style={styles.wrap}>
     		<View style={styles.toolsItem}>
     			<Image
		  		  style={styles.icon}
		  		  source={require('../../../assets/icon/question.png')}
		  		/>
     			<Text style={styles.toolsText}>
     			  提问
     			</Text>
     		</View>
     		<View style={styles.solid}></View>
     		<View style={styles.toolsItem}>
	     		<Image
			  		  style={styles.icon}
			  		  source={require('../../../assets/icon/message.png')}
			  		/>
     			<Text style={styles.toolsText}>
     			  回答
     			</Text>
     		</View>
     		<View style={styles.solid}></View>
     		<View style={styles.toolsItem}>
	     		<Image
			  		  style={styles.icon}
			  		  source={require('../../../assets/icon/share.png')}
			  		/>
     			<Text style={styles.toolsText}>
     			  分享
     			</Text>
     		</View>
     	</View>

    );
  }
}

const styles = StyleSheet.create({
	wrap: {
		height: 37,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#dbdbdb',
		paddingTop: 1,
		paddingBottom: 1
	},
	solid: {
		height: 15,
		width: 1,
		backgroundColor: '#e7e7e7',
	},
	icon: {
		width: 20,
		height: 20,
		marginRight: 2
	},
	toolsItem: {
		height: 35,
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	toolsText: {
		height: 35,
		lineHeight: 33,
		color: '#848994',
		fontWeight: 'bold',
		fontSize: 16
	}
});


export default Tools;