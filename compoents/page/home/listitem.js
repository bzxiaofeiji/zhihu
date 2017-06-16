'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

class Listitem extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	hideCont: false,
	  	hideShield: true
	  };
	}

	contClick(item) {
		this.props.contClick(item);
	}
  render() {
  	return (
    	<View style={[styles.wrap,this.state.hideCont && styles.wrapActive]}>
    		<View style={[styles.cont,this.state.hideCont && styles.contShow]}>
    			<View style={styles.info}>
    				<Image
			  		  style={styles.infoImg}
			  		  source={{uri:this.props.db.userHeader}}
			  		/>
			  		<Text style={styles.infoText}>
			  		  {this.props.db.userName}回答了问题
			  		</Text>
			  		<TouchableOpacity
			  		style={styles.infoClose}
			  		onPress={() => {
			  			this.setState({
								hideShield: false,
								hideCont: true
							});
			  		}}
			  		>
			  		<Image
			  		  style={styles.infoCloseImg}
			  		  source={require('../../../assets/icon/close.png')}
			  		/>
			  		</TouchableOpacity>
    			</View>
    			<Text style={styles.title} numberOfLines={2}>
    			  {this.props.db.title}
    			</Text>
    			<TouchableOpacity onPress={this.contClick.bind(this)} activeOpacity={1}>
	    			<Text style={styles.textcont} numberOfLines={3}>
	    			  {this.props.db.cont}
	    			</Text>
    			</TouchableOpacity>
    		</View>
    		<View style={[styles.shielding,this.state.hideShield && styles.shieldingShow]}>
    			<View style={styles.shieldTitle}>
	    			<Text style={styles.shieldText}>
	    			  问题已屏蔽。还不想看见哪些？
	    			</Text>
	    			<TouchableOpacity
			  		onPress={() => {
			  			this.setState({
								hideShield: true,
								hideCont: false
							});
			  		}}
			  		>
	    			<Text style={styles.cancel}>
	    			  撤销
	    			</Text>
	    			</TouchableOpacity>
    			</View>
    			<View style={styles.shieldCont}>
    				<Text style={styles.shieldItem}>单机游戏</Text>
    				<Text style={styles.shieldItem}>家用主机游戏</Text>
    				<Text style={styles.shieldItem}>游戏</Text>
    				<Text style={styles.shieldItem}>日本漫画</Text>
    				<Text style={styles.shieldItem}>钢琴</Text>
    			</View>
    		</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	wrap: {
		marginBottom: 10,
		paddingLeft: 15,
		paddingRight: 15,
		backgroundColor: '#fff'
	},
	cont: {
		paddingBottom: 10,
		paddingTop: 10
	},
	info: {
		position: 'relative',
		height: 20,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
		// justifyContent: 'center',
	},
	infoImg: {
		width: 20,
		height: 20,
		borderRadius: 10,
		marginRight: 5
	},
	infoText: {
		height: 20,
		lineHeight: 18,
	},
	infoClose: {
		position: 'absolute',
		right: 0,
		top: 2,
		width: 15,
		height: 15,
		// alignSelf: 'flex-end'
	},
	infoCloseImg: {
		width: 15,
		height: 15
	},
	title: {
		lineHeight: 20,
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#282828'
	},
	textcont: {
		lineHeight: 20,
		color: '#464646',
	},
	shielding: {
		paddingTop: 10,
		borderRadius: 16,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#fff',
		paddingBottom: 10
	},
	shieldTitle: {
		height: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	shieldText: {
		lineHeight: 20,
		fontSize: 16,
		fontWeight: 'bold',
	},
	cancel: {
		lineHeight: 20,
		color: '#999',
	},
	shieldCont: {
		paddingTop: 5,
		paddingBottom: 5,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	shieldItem: {
		height: 30,
		lineHeight: 28,
		borderWidth: 1,
		borderColor: '#e7e7e7',
		borderRadius: 4,
		marginRight: 10,
		paddingLeft: 10,
		paddingRight: 10,
		marginBottom: 10
	},
	shieldingShow: {
		display: 'none'
	},
	contShow: {
		display: 'none'
	},
	wrapActive: {
		backgroundColor: 'transparent'
	}
});


export default Listitem;