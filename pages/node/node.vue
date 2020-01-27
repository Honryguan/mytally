<template>
	<view>
		<view class="account-num">
			<input class="account-num-input" type="digit"   
			focus confirm-type="search" @confirm="saveTally" 
			placeholder="0.00" placeholder-class="note-place" maxlength="10" />
		</view>
		<cg-swiper :swiperList="swiperList" @clickItem="clickItem"></cg-swiper>

		<!-- 		<view class="example-body">
			<uni-grid :column="5" :show-border="false" :square="false" @change="change">
				<uni-grid-item v-if="index <6" v-for="(item ,index) in list" :key="index">
					<view class="grid-item-box">
						<image class="image" :src="item.url" mode="aspectFill" />
						<text class="text">{{item.text}}</text>
						<view v-if="item.badge" class="grid-dot">
							<uni-badge :text="item.badge" :type="item.type" />
						</view>
					</view>
				</uni-grid-item>
				
			</uni-grid>
		</view> -->
		<button type="primary" @click="saveTally">确认</button>
	</view>
</template>

<script>
import uniGrid from '@/components/uni-grid/uni-grid.vue';
import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue';
import uniBadge from '@/components/uni-badge/uni-badge.vue';
import cgSwiper from '@/components/cg-swiper/cg-swiper.vue';

import uniIcons from '@/components/uni-icons/uni-icons.vue'
export default {
	data() {
		return {
			dynamicList: [],
			swiperList: [],
			type:2,
			list: [
				{
					url: '/static/c1.png',
					text: 'Grid 1',
					badge: '0',
					type: 'primary'
				},
				{
					url: '/static/c2.png',
					text: 'Grid 2',
					badge: '1',
					type: 'success'
				},
				{
					url: '/static/c3.png',
					text: 'Grid 3',
					badge: '99',
					type: 'warning'
				},
				{
					url: '/static/c4.png',
					text: 'Grid 4',
					badge: '2',
					type: 'error'
				},
				{
					url: '/static/c5.png',
					text: 'Grid 5'
				},
				{
					url: '/static/c6.png',
					text: 'Grid 6'
				},
				{
					url: '/static/c7.png',
					text: 'Grid 7'
				},
				{
					url: '/static/c8.png',
					text: 'Grid 8'
				},
				{
					url: '/static/c9.png',
					text: 'Grid 9'
				}
			]
		};
	},
	onLoad() {
		var me = this;
		me.openDB();
		plus.sqlite.selectSql({
			name: 'tally',
			sql: 'select * from types',
			success: function(data) {
				for (let i in data) {
					var bean = data[i];
					me.swiperList.push({
					id: bean.id,
					icon: bean.icon,
					text: bean.name,
					color: '#bbbbbb'
				});
				}
			},
			fail: function(e) {
				plus.nativeUI.alert('查询SQL语句失败: ' + JSON.stringify(e));
			}
		});
	},
	methods: {
		saveTally:function(e){
			//console.log(e)
			var me = this;
			var time = me.getTime();
			console.log(time);
			// TODO
			var money = 10.22;//e.detail.value;
			plus.sqlite.executeSql({
				name: 'tally',
				sql: 'INSERT INTO tally VALUES (null, "'+time+'", '+me.type+', '+money+', null, 1);',
				success: function(e) {
					uni.navigateBack({
					    delta: 1
					});
				},
				fail: function(e) {
					plus.nativeUI.alert('打开数据库test.db失败: ' + JSON.stringify(e));
				}
			})
			
		},
		getTime:function(){
		
			var date = new Date(),
			year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate(),
			hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
			minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
			second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
			month >= 1 && month <= 9 ? (month = "0" + month) : "";
			day >= 0 && day <= 9 ? (day = "0" + day) : "";
			var timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
			return timer;
		},
		clickItem(item) {
			var me = this;
			me.type = item.id;
			item.color='#444444'
		},
		openDB: function() {
			plus.sqlite.openDatabase({
				name: 'tally',
				path: '_doc/tally.db',
				success: function(e) {
					//plus.nativeUI.alert('打开数据库test.db成功 ');
				},
				fail: function(e) {
					//plus.nativeUI.alert('打开数据库test.db失败: ' + JSON.stringify(e));
				}
			});
		},
		selectSQL: function() {
			plus.sqlite.selectSql({
				name: 'tally',
				sql: 'select * from types',
				success: function(data) {
					//plus.nativeUI.alert('查询SQL语句成功: ' + JSON.stringify(e));
				},
				fail: function(e) {
					plus.nativeUI.alert('查询SQL语句失败: ' + JSON.stringify(e));
				}
			});
		}
	},
	components: {
		uniGrid,
		uniGridItem,
		uniBadge,
		cgSwiper,
		uniIcons
	}
};
</script>

<style>
.note-place {
	color: #008000;
}
.account-num {
	padding: 20upx;
}
.account-num-input {
	border-bottom-style: solid;
	height: 100upx;
}
</style>
