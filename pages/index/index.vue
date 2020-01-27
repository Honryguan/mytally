<template>
	<view>
		<view class="budget">
			<view class="index-content">
				<view class="content-pay">
					<view class="pay-mouth">1</view>
					<view class="pay-text">月·支出</view>
				</view>
				<view class="content-money">67.00</view>
				<view class="content-ready">
					<view class="ready">预算</view>
					<view class="ready-set">点击设置</view>
					<view class="ready-gap">|</view>
					<view class="ready-income">本月收入</view>
					<view class="ready-income-money">100.00</view>
				</view>
			</view>
		</view>
		<uni-list>
			<navigator url="../today/today">
				<uni-list-item title="今天" :note="todayNote" titleRight="0.01" :noteRight="sumToday" :show-extra-icon="true" :extra-icon="extraIcon1" badge-text="12" />
			</navigator>
			<uni-list-item title="本周" note="1月13日 - 1月19日" titleRight="0.01" noteRight="67.00" :show-extra-icon="true" :extra-icon="extraIcon2" badge-text="12" />
			<uni-list-item title="本月" note="1月1日 - 1月31日" titleRight="0.01" noteRight="67.00" :show-extra-icon="true" :extra-icon="extraIcon3" badge-text="12" />
		</uni-list>
		<navigator url="../node/node"><view class="addButton"></view></navigator>
		<!-- <button class="test" type="primary" @click="openDB()">45</button> -->
		<!-- <button class="test" type="primary" @click="executeSQL()">executeSQL</button> -->
		<!-- <button class="test" type="primary" @click="initTypesData()">initTypesData</button> -->
		<!-- <button class="test" type="primary" @click="selectSQL()">selectSQL</button> -->
		<!-- <button class="test" type="primary" :data-tableName="types" @click="existTable('types')">existTable</button> -->
		<button type="primary" @click="initLastToday()">d</button>
	</view>
</template>

<script>
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
export default {
	data() {
		return {
			title: 'SQLite',
			extraIcon1: {
				color: '#4cd964',
				size: '22',
				type: 'compose'
			},
			extraIcon2: {
				color: '#4cd964',
				size: '22',
				type: 'spinner-cycle'
			},
			extraIcon3: {
				color: '#4cd964',
				size: '22',
				type: 'navigate'
			},
			sumToday:0.00,
			todayNote:'最近一笔 餐饮 0.00',
			startTodayTime:'',
			endTodayTime:''
		};
	},
	
	components: {
		uniList,
		uniListItem,
		uniIcons
	},
	onLoad() {
		this.openDB();
		this.createTables();
		//this.existTableTypes('types');
		this.initTypesData();
		
		//this.initLastToday();
	},
	onShow() {
		this.initLastToday();
		this.initDataToday();
		console.log(new Date().getDay());
	},
	methods: {
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
		initDataToday: function() {
			var me = this;
			var sum = 0;
			plus.sqlite.selectSql({
				name: 'tally',
				sql: 'SELECT a.id AS id,a.time AS time,a.money AS money,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id',
				success: function(data) {
					for (let i in data) {
						sum = sum + data[i].money;
					}
					me.sumToday = sum;
				},
				fail: function(e) {
					plus.nativeUI.alert('查询SQL语句失败: ' + JSON.stringify(e));
				}
			});
		},
		initLastToday: function() {
			var me = this;
			var sum = 0;
			me.startTodayTime = me.getTodayTime(3);
			me.endTodayTime = me.getTodayTime(4);
			console.log(me.startTodayTime);
			console.log(me.endTodayTime);
			plus.sqlite.selectSql({
				name: 'tally',
				sql: 'SELECT a.id AS id,a.time AS time,a.money AS money,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+me.startTodayTime+'" AND a.time < "'+me.endTodayTime+'" ORDER BY a.time DESC limit 0,1;',
				success: function(data) {
					for (let i in data) {
						me.todayNote='最近一笔 '+data[i].typeName+' '+data[i].money
					}
					
				},
				fail: function(e) {
					plus.nativeUI.alert('查询SQL语句失败: ' + JSON.stringify(e));
				}
			});
		},
		/* existTableTypes:function(tableName) {
			plus.sqlite.selectSql({
				name: 'tally',
				sql: 'select count(*) as count  from sqlite_master where type="table" and name = "'+tableName+'";',
				success: function(data) {
					this.initTypesData();
				},
				fail: function(e) {
					plus.nativeUI.alert('查询SQL语句失败: ' + JSON.stringify(e));
				}
			});
		}, */
		existTableAccount:function(tableName) {
			plus.sqlite.selectSql({
					name: 'tally',
					sql: 'select count(*) as count  from sqlite_master where type="table" and name = "'+tableName+'";',
					success: function(data) {
						if(data.count > 0){
							//表格是存在的，不同重复插入数据
							plus.sqlite.selectSql({
								name: 'tally',
								sql: 'select count(*) as count  from types;',
								success: function(data2) {
									if(data2.count > 0){
										//表格是存在的，不同重复插入数据

									}else{
										this.initTypesData();
									}
									//plus.nativeUI.alert('查询SQL语句成功: ' + JSON.stringify(e));
								},

							});
						}else{

						}
						//plus.nativeUI.alert('查询SQL语句成功: ' + JSON.stringify(e));
					},
					fail: function(e) {
						plus.nativeUI.alert('查询SQL语句失败: ' + JSON.stringify(e));
					}
				});
			},
		// 执行SQL语句
		initTypesData: function() {
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "其他", "2020-12-12", "contact", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "餐饮", "2020-12-12", "person", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "交通", "2020-12-12", "personadd", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "购物", "2020-12-12", "phone", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "服饰", "2020-12-12", "location", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "日用品", "2020-12-12", "email", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "娱乐", "2020-12-12", "weibo", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "食材", "2020-12-12", "chat", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "零食", "2020-12-12", "qq", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "烟酒茶", "2020-12-12", "camera", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "学习", "2020-12-12", "mic", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "医疗", "2020-12-12", "image", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "住房", "2020-12-12", "map", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "水电煤", "2020-12-12", "trash", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "通讯", "2020-12-12", "close", null, null);' });
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "人情往来", "2020-12-12", "undo", null, null);'});
			plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "设置", "2020-12-12", "star", null, null);' });
		},
		createTables: function() {
			plus.sqlite.executeSql({
				name: 'tally',
				sql:
					'CREATE TABLE if not exists types ("id"  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,"name"  TEXT,"time"  TEXT,"icon"  TEXT,"color"  TEXT,"parentId"  INTEGER);',
				success: function() {
					//plus.sqlite.executeSql({ name: 'tally', sql: 'INSERT INTO types VALUES (null, "设置", null, "contact", null, null);' });
				},
				fail: function() {
					//plus.nativeUI.alert('创建表types失败: ' + JSON.stringify(e));
				}
			});
			plus.sqlite.executeSql({
				name: 'tally',
				sql:
					'CREATE TABLE if not exists tally ("id"  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,"time"  TEXT,"typeId"  INTEGER,"money"  REAL,"remark"  TEXT,"accountId"  INTEGER);',
				success: function() {
				},
				fail: function() {
					//plus.nativeUI.alert('创建表tally失败: ' + JSON.stringify(e));
				}
			});

		},
		//3-开始时间，4-结束时间，1-年月日时分秒，2-年月日
		getTodayTime:function(type){
		
			var date = new Date(),
			year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate(),
			hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
			minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
			second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
			month >= 1 && month <= 9 ? (month = "0" + month) : "";
			day >= 0 && day <= 9 ? (day = "0" + day) : "";
			
			var timer = '';
			if(type == 1){
				timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
			}else if(type == 2){
				timer = year + '-' + month + '-' + day;
			}else if(type == 3){
				timer = year + '-' + month + '-' + day + ' ' + '00:00:00';
			}else if(type == 4){
				timer = year + '-' + month + '-' + day + ' ' + '23:59:59';
			}
			return timer;
		},
		
		
		// 查询SQL语句
		selectSQL: function() {
			plus.sqlite.selectSql({
				name: 'tally',
				sql: 'select * from tally',
				success: function(e) {
					plus.nativeUI.alert('查询SQL语句成功: ' + JSON.stringify(e));
				},
				fail: function(e) {
					plus.nativeUI.alert('查询SQL语句失败: ' + JSON.stringify(e));
				}
			});
		},
		// 删除表
		droptable: function() {
			plus.sqlite.executeSql({
				name: 'tally',
				sql: 'drop table database',
				success: function(e) {
					plus.nativeUI.alert('删除表database成功');
				},
				fail: function(e) {
					plus.nativeUI.alert('删除表database失败: ' + JSON.stringify(e));
				}
			});
		},
		// 关闭数据库
		closeDB: function() {
			plus.sqlite.closeDatabase({
				name: 'tally',
				success: function(e) {
					plus.nativeUI.alert('关闭数据库成功');
				},
				fail: function(e) {
					plus.nativeUI.alert('关闭数据库失败: ' + JSON.stringify(e));
				}
			});
		},
		isOpenDB: function() {
			if (
				plus.sqlite.isOpenDatabase({
					name: 'tally',
					path: '_doc/tally.db'
				})
			) {
				plus.nativeUI.alert('Opened!');
			} else {
				plus.nativeUI.alert('Unopened!');
			}
		}
	}
};
</script>

<style>
.test {
	width: 100upx;
}
/**背景图片相关内容*/
.budget {
	background: url(../../static/jizhang.jpg);
	height: 400upx;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.index-content {
	display: flex;
	flex-direction: column;
	padding: 200upx 0upx 0upx 50upx;
}
.content-pay {
	display: flex;
	color: white;
	font-size: 14px;
}
.pay-mouth {
	font-size: 22px;
	color: #f4db7f;
}
.pay-text {
	padding-top: 10px;
	margin-left: 10upx;
}
.content-money {
	font-size: 25px;
	color: white;
}
.content-ready {
	display: flex;
	color: white;
	font-size: 14px;
}
.ready {
	color: #a4e5f7;
	margin-right: 20upx;
}
.ready-set {
}
.ready-gap {
	margin: 0upx 20upx;
	color: white;
}
.ready-income {
	color: #a4e5f7;
}
.ready-income-money {
}
/**背景图片相关内容结束*/

/**记账按钮*/
.addButton {
	width: 120upx;
	height: 120upx;
	position: fixed;
	bottom: 150upx;
	right: 50upx;
	border-radius: 30px;
	background-color: #4cd964;
	box-shadow: #0000ff;
}
.addButton::before {
	content: '';
	position: absolute;
	left: 50%;
	top: 50%;
	width: 60upx;
	margin-left: -30upx;
	margin-top: -3upx;
	border-top: 6upx solid;
	color: white;
}
.addButton::after {
	content: '';
	position: absolute;
	left: 50%;
	top: 50%;
	height: 60upx;
	margin-left: -3upx;
	margin-top: -30upx;
	border-left: 6upx solid;
	color: white;
}

.addButton:hover {
	color: blue;
}
/**记账按钮结束*/
</style>
