'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

class HomeDetail extends Component {
  render() {
    return (
      <ScrollView style={styles.wrap}>
      	<Text
      		style={styles.title}
      		numberOfLines={2}
      	>
      	  哪个瞬间起你接受了这个世界的阴暗面？哪个瞬间起你接受了这个世界的阴暗面？哪个瞬间起你接受了这个世界的阴暗面？哪个瞬间起你接受了这个世界的阴暗面？哪个瞬间起你接受了这个世界的阴暗面？
      	</Text>
      	<View style={styles.marginbot}></View>
      	<View style={styles.author}>
      		<Image
      			style={styles.authorHeader}
      		  source={{uri: 'https://qlogo4.store.qq.com/qzone/815808919/815808919/30'}}
      		/>
      		<View style={styles.aboutAuthor}>
      			<Text style={styles.authorName} numberOfLines={1}>
      			  暴走的小飞机
      			</Text>
      			<Text style={styles.authorDesc} numberOfLines={1}>
      			  一个又帅又正直的程序员
      			</Text>
      		</View>
      		<View style={styles.empty}></View>
      		<TouchableOpacity>
      			<Image
      				style={styles.watch}
      			  source={require('../../../assets/icon/watch.png')}
      			/>
      			
      		</TouchableOpacity>
      	</View>
      	<View style={styles.cont}>
      		<Text style={styles.contText}>
      		  昨天收到了华为的HR电话。我接了电话，那面说是华为，我心想我没投你们家简历啊，你哪来的我手机号，于是对答的口气有点惊讶，结果对面还自我感觉良好的和我说是不是没想到啊，然后邀请我参加他们宣讲会，问我考试周后的安排，让我去投他们家简历（说明他们还是知道我没有投过的），问我想去的部门，让我去参加之后的上机测试。
      		</Text>
      		<Text style={styles.contText}>
      		  华为和阿里是我第一批脑内排除的公司，就说华为，上机考试系统要求以VC6为参考。我别的同学去面试，面试官来一句：你觉得你一个大三学生来我们这里能干什么。
      		</Text>
      		<Text style={styles.contText}>
      			嗯，所以我没投你家简历，你怎么知道我的手机号的。
      		</Text>
      		<Text style={styles.contText}>
      		  昨天收到了华为的HR电话。我接了电话，那面说是华为，我心想我没投你们家简历啊，你哪来的我手机号，于是对答的口气有点惊讶，结果对面还自我感觉良好的和我说是不是没想到啊，然后邀请我参加他们宣讲会，问我考试周后的安排，让我去投他们家简历（说明他们还是知道我没有投过的），问我想去的部门，让我去参加之后的上机测试。
      		</Text>
      		<Text style={styles.contText}>
      		  华为和阿里是我第一批脑内排除的公司，就说华为，上机考试系统要求以VC6为参考。我别的同学去面试，面试官来一句：你觉得你一个大三学生来我们这里能干什么。
      		</Text>
      		<Text style={styles.contText}>
      			嗯，所以我没投你家简历，你怎么知道我的手机号的。
      		</Text>
      	</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	wrap: {
		borderTopWidth: 1,
		borderColor: '#dbdbdb',
		backgroundColor :'#fff'
	},
	marginbot: {
		backgroundColor: '#efeff4',
		height: 10
	},
	title: {
		lineHeight: 20,
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#282828',
		paddingTop: 10,
		paddingBottom: 10,
		textAlign: 'center',
		backgroundColor: '#fff',
		paddingLeft: 20,
		paddingRight: 20
	},
	author: {
		height: 50,
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		paddingLeft: 20,
		paddingRight: 20,
		borderBottomWidth: 1,
		borderColor: '#e7e7e7',
	},
	aboutAuthor: {
		width: 200
	},
	authorHeader: {
		width: 36,
		height: 36,
		borderRadius: 18,
		marginRight: 10
	},
	authorName: {
		lineHeight: 18,
		fontWeight: 'bold',
		color: '#4c566c',
		fontSize: 16
	},
	authorDesc: {
		lineHeight: 18,
		color: '#9b9b9b',
		fontSize: 12
	},
	empty: {
		flex: 1
	},
	watch: {
		width: 70,
		height: 30,
	},
	cont: {
		backgroundColor: '#fff',
		paddingTop: 25,
		paddingLeft: 20,
		paddingRight: 20
	},
	contText: {
		fontSize: 16,
		color: '#464646',
		lineHeight: 24,
		marginBottom: 10
	}
});


export default HomeDetail;