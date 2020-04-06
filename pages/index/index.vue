<template>
	<view>
		<view class="budget">
			<view class="index-content">
				<view class="content-pay">
					<view class="pay-mouth">{{month}}</view>
					<view class="pay-text">月·支出</view>
				</view>
				<view class="content-money">{{sumMonth|dateFormat}}</view>
				<!-- <view class="content-ready">
					<view class="ready">预算</view>
					<view class="ready-set">点击设置</view>
					<view class="ready-gap">|</view>
					<view class="ready-income">本月收入</view>
					<view class="ready-income-money">100.00</view>
				</view> -->
			</view>
		</view>
		<uni-list>
			<navigator url="../today/today">
				<!-- titleRight="0.01" :noteRight="sumToday" -->
				<uni-list-item title="今天" :note="todayNote" :money="sumToday|dateFormat" :show-extra-icon="true" :extra-icon="extraIcon1" />
			</navigator>
			<uni-list-item title="本周" :note="weekBetweenTime" :money="sumWeek|dateFormat" :show-extra-icon="true" :extra-icon="extraIcon2" />
			<uni-list-item title="本月" :note="monthBetweenTime" :money="sumMonth|dateFormat" :show-extra-icon="true" :extra-icon="extraIcon3" />
		</uni-list>
		<navigator url="../node/node"><view class="addButton"></view></navigator>
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
			sumMonth:0.00,
			sumWeek:0.00,
			todayNote:'最近一笔 餐饮 0.00',
			startTodayTime:'',
			endTodayTime:'',
			month:'1',
			weekBetweenTime:'1月13日 - 1月19日',
			monthBetweenTime:'2月1日 - 2月30日',
			startWeekTime:'',
			endWeekTime:'',
			startMonthTime:'',
			endMonthTime:''
		};
	},
	filters:{
		dateFormat(value){
			return value.toFixed(2);
		}
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
		//获取月份
		
	},
	onShow() {
		this.initLastToday();
		this.initDataToday();
		this.initIndexMouth();
		this.initIndexMouthMoney();
		this.initWeekBetweenTime();
		this.initMonthBetweenTime();
		this.initWeekSum();
	},
	methods: {
		initIndexMouthMoney: function() {
			var me = this;
			var sum = 0;
			me.startTodayTime = me.getTodayTime(5);
			me.endTodayTime = me.getTodayTime(6);
			//
			plus.sqlite.selectSql({
				name: 'tally',
				sql: 'SELECT a.id AS id,a.time AS time,a.money AS money,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+me.startTodayTime+'" AND a.time < "'+me.endTodayTime+'";',
				success: function(data) {
					for (let i in data) {
						sum = sum + data[i].money
					}
					me.sumMonth = sum;
				},
				fail: function(e) {
					plus.nativeUI.alert('查询SQL语句失败: ' + JSON.stringify(e));
				}
			});
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
		initWeekBetweenTime: function() {
			var me = this;
			var date = new Date();
			var start = new Date();
			var end = new Date();
			//weekBetweenTime:'1月13日 - 1月19日'			
			if(date.getDay() == 0){
				start.setDate(date.getDate()-6);//获取AddDayCount天后的日期 
			}else{
				start.setDate(date.getDate()-date.getDay() +1);
				end.setDate(date.getDate()+7-date.getDay());//获取AddDayCount天后的日期 
			}			
			var startMonth = start.getMonth()+1;
			var startDay = start.getDate();
			startDay >= 1 && startDay <= 9 ? (startDay = "0" + startDay) : "";
			startMonth >= 1 && startMonth <= 9 ? (startMonth = "0" + startMonth) : "";
			
			var endMonth = end.getMonth()+1;
			var endDay = end.getDate();
			endMonth >= 1 && endMonth <= 9 ? (endMonth = "0" + endMonth) : "";
			endDay >= 1 && endDay <= 9 ? (endDay = "0" + endDay) : "";
			
			
			me.weekBetweenTime = startMonth+'月'+start.getDate()+'日'+' - '+endMonth+'月'+end.getDate()+'日';	
			me.startWeekTime = start.getFullYear() + '-' + startMonth + '-' + startDay + ' ' + '00:00:00';
			me.endWeekTime = end.getFullYear() + '-' + endMonth + '-' + endDay + ' ' + '23:59:59';
			
		},
		initMonthBetweenTime: function() {
			var me = this;
			var start = new Date();
			var end = new Date();
			start.setDate(1);
			var start=new Date();
			var currentMonth=start.getMonth();
			var nextMonth=++currentMonth;
			var nextMonthFirstDay=new Date(start.getFullYear(),nextMonth,1);
			var oneDay=1000*60*60*24;
			var end =  new Date(nextMonthFirstDay-oneDay);

			
			var month = start.getMonth()+1;
			var day = end.getDate();
			month >= 1 && month <= 9 ? (month = "0" + month) : "";
			
			
			me.monthBetweenTime = month+'月'+start.getDate()+'日'+' - '+month+'月'+end.getDate()+'日';		
			me.startMonthTime = start.getFullYear() + '-' + month + '-01' + ' ' + '00:00:00';
			day >= 0 && day <= 9 ? (day = "0" + day) : "";
			me.endMonthTime = start.getFullYear() + '-' + month + '-' + day + ' ' + '23:59:59';
		},
		initIndexMouth: function() {
			var me = this;
			var date = new Date();
			me.month = date.getMonth() + 1;

		},
		initDataToday: function() {
			var me = this;
			var sum = 0;
			var startTime = me.getTodayTime(3);
			var endTime = me.getTodayTime(4);
			plus.sqlite.selectSql({
				name: 'tally',
				sql: 'SELECT a.id AS id,a.time AS time,a.money AS money,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+startTime+'" AND a.time < "'+endTime+'" ',
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
		initWeekSum: function() {
			var me = this;
			var sum = 0;
			var startTime = me.getTodayTime(3);
			var endTime = me.getTodayTime(4);
			plus.sqlite.selectSql({
				name: 'tally',
				sql: 'SELECT a.id AS id,a.time AS time,a.money AS money,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+me.startWeekTime+'" AND a.time < "'+me.endWeekTime+'" ',
				success: function(data) {
					for (let i in data) {
						sum = sum + data[i].money;
					}
					me.sumWeek = sum;
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
			}else if(type == 5){
				timer = year + '-' + month + '-00' + ' ' + '23:59:59';
			}else if(type == 6){
				timer = year + '-' + month + '-31' + ' ' + '23:59:59';
			}
			
			return timer;
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
