'use strict';

import React, { Component } from 'react';
import Search from '../common/search';
import Tools from './home/tools';
import PullRefreshScrollView from 'react-native-pullrefresh-scrollview';
import Listitem from './home/listitem.js';
import HomeDetail from './home/home_detail';
import PubSub from 'pubsub-js';

//mock db
import db_home from '../../mock/home_db';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Alert,
  NavigatorIOS
} from 'react-native';

let screenHeight = Dimensions.get('window').height;
let ref;


class MyScrollView extends Component {
	onRefresh() {
		setTimeout(()=>{
			this.refs.PullRefresh.onRefreshEnd()
		},2000);
	}
	contClick(item) {
		ref.nav.push({
			component: HomeDetail,
			title: 'title',
			navigationBarHidden: true,
			passProps: { item: item },
			author: 'author'
		});

		//发布显示back按钮事件
		PubSub.publish( 'showBack', 'show' );
	}
	render() {
		return (
			<View style={{
				paddingBottom: 30
			}}>
				<Tools></Tools>
				<PullRefreshScrollView 
	      	ref="PullRefresh" 
	      	style={styles.scrollview} 
	      	onRefresh={()=>this.onRefresh()}
	      	refreshedText=""
	      	refreshingText=""
	      	refreshText=""
	      	refreshType="image"
	      	>
	          <View style={{paddingTop: 10}}>
	          	{
	          		db_home.map(item => {
	          			return <Listitem db={item} contClick={this.contClick.bind(this)}></Listitem>
	          		})
	          	}
	          </View>
	      </PullRefreshScrollView>
	      </View>
		)
	}
}

class Home extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	  PubSub.subscribe( 'hideBack', this.hideBack.bind(this));
	}
	hideBack() {
		this.refs.nav.pop();
	}
	componentDidMount() {
		ref = this.refs;
	}
  render() {
    return (
      <View style={styles.wrap}>
      	<Search></Search>
      	<NavigatorIOS
      		ref="nav"
		      initialRoute={{
		        component: MyScrollView,
		        title: 'My View Title',
		        navigationBarHidden: true
		      }}
		      style={{
		      	height: screenHeight-60-30-35-10,
		      	backgroundColor: '#ccc'
		      }}
		    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	wrap: {
		paddingTop: 30,
		paddingBottom: 60
	},
	scrollview: {
		backgroundColor: '#edeef0',
	}
});


export default Home;