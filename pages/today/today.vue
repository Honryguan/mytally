<template>
	<view>
		<uni-section title="今天" :sumTitle="sumTitle" type="line" class="uni-section-top"></uni-section>
		<uni-list>
			<uni-list-item
				v-for="(item, index) in moneyList"
				:key="index"
				:title="item.typeName"
				:note="item.time"
				:money="item.money"
				:show-extra-icon="true"
				:extra-icon="extraIcon1"
				badge-text="12"
				:show-arrow="false"
			/>
		</uni-list>
	</view>
</template>

<script>
import uniSection from '@/components/uni-section/uni-section.vue';
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
			moneyList: [],
			sumTitle:0
		};
	},
	components: {
		uniList,
		uniListItem,
		uniIcons,
		uniSection
	},
	onLoad() {
		this.openDB();
		this.initData();
	},
	methods: {
		openDB: function() {
			plus.sqlite.openDatabase({
				name: 'tally',
				path: '_doc/tally.db',
				success: function(e) {
					plus.nativeUI.alert('打开数据库test.db成功 ');
				},
				fail: function(e) {
					//plus.nativeUI.alert('打开数据库test.db失败: ' + JSON.stringify(e));
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
		initData: function() {
			var me = this;
			var sum = 0;
			var startTime = me.getTodayTime(3);
			var endTime = me.getTodayTime(4);
			
			plus.sqlite.selectSql({
				name: 'tally',
				sql: 'SELECT a.id AS id,a.time AS time,a.money AS money,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+startTime+'" AND a.time < "'+endTime+'" ORDER BY a.time DESC ',
				success: function(data) {
					
					for (let i in data) {
						var bean = data[i];
						me.moneyList.push({
							id: bean.id,
							time: bean.time,
							money: '-'+bean.money,
							typeName: bean.typeName
						});
						sum = sum + bean.money;
					}
					me.sumTitle = sum;
				},
				fail: function(e) {
					plus.nativeUI.alert('查询SQL语句失败: ' + JSON.stringify(e));
				}
			});
		}
	}
};
</script>

<style>
.uni-section-top {
	margin-top: 100px;
}
</style>
