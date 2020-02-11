<template>
	<view class="qiun-columns">
		<!-- <view class="time-cloumns">
			<view class="time-title">
				时间：
			</view>
			<!-- <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
				<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
				<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
			</scroll-view> -->
			<scroll-view class="time-select" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view class="time-bean">
					自定义
				</view>
				<view class="">
					本月
				</view>
				<view class="">
					上个月
				</view>
				<view class="">
					近三个月
				</view>
				<view class="">
					近六个月
				</view>
				<view class="">
					今年
				</view>
				<view class="">
					去年
				</view>
				<view class="">
					全部
				</view>
			</scroll-view>
			
		</view>	 -->
		<view class="tab" @tap="toggleTab('dateStart')">2020-02-03</view>
		<view class="tab" @tap="toggleTab('dateEnd')">2020-02-03</view>
			<w-picker
				mode="date" 
				startYear="2017" 
				endYear="2030"
				defaultVal="2019-10-31"
				:current="false" 
				@confirm="onConfirm"
				:disabledAfter="false"
				ref="dateStart" 
				themeColor="#f00"
			></w-picker>
		<w-picker
			mode="date" 
			startYear="2017" 
			endYear="2030"
			defaultVal="2019-11-31"
			:current="false" 
			@confirm="onConfirm"
			:disabledAfter="false"
			ref="dateEnd" 
			themeColor="#f00"
		></w-picker>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">环形图</view>
		</view>
		<view class="qiun-charts">
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
		</view>
	</view>
</template>

<script>
import uCharts from '@/components/u-charts/u-charts.js';
import wPicker from "@/components/w-picker/w-picker.vue";
var _self;
var canvaRing = null;

export default {
	data() {
		return {
			cWidth: '',
			cHeight: '',
			pixelRatio: 1,
			serverData: '',
			scrollTop: 0,
			old: {
				scrollTop: 0
			}
		};
	},
	components:{
		wPicker
	},
	onLoad() {
		_self = this;
		this.cWidth = uni.upx2px(750);
		this.cHeight = uni.upx2px(500);
		
	},
	onShow() {
		this.getServerData();
	},
	methods: {
		scroll: function(e) {
			console.log(e)
			this.old.scrollTop = e.detail.scrollTop
		},
		toggleTab(str){
			this.$refs[str].show();
		},
		onConfirm(val){
			console.log(val);
			//如果页面需要调用多个mode类型，可以根据mode处理结果渲染到哪里;
			// switch(this.mode){
			// 	case "date":
			// 		break;
			// }
			this.resultInfo={...val};
		},
		getServerData() {
			
				var me = this;
				me.startTodayTime = me.getTodayTime(5);
				me.endTodayTime = me.getTodayTime(6);
				plus.sqlite.selectSql({
					name: 'tally',
					sql: 'SELECT sum(a.money) as sum,t.name AS typeName FROM tally a LEFT JOIN types t ON a.typeId = t.id WHERE a.time >= "'+me.startTodayTime+'" AND a.time < "'+me.endTodayTime+'" group by t.name;',
					success: function(data) {						
						let Ring = {series: []};
						for (let i in data) {
							var temp = {
									name: data[i].typeName,
									data: data[i].sum
								}
							Ring.series.push(temp);
						}
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						//Ring.series = res.data.data.Ring.series;
						_self.showRing('canvasRing', Ring);
					},
					fail: function(e) {
						
						_self.tips = '网络错误，小程序端请检查合法域名';
					}
				});
		},
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
		showRing(canvasId, chartData) {
			canvaRing = new uCharts({
				$this: _self,
				canvasId: canvasId,
				type: 'ring',
				fontSize: 11,
				legend: true,
				title: {
					name: '70%',
					color: '#7cb5ec',
					fontSize: 20 * _self.pixelRatio,
					offsetY: -5 * _self.pixelRatio
				},
				subtitle: {
					name: '收益率',
					color: '#666666',
					fontSize: 15 * _self.pixelRatio,
					offsetY: 1 * _self.pixelRatio
				},
				extra: {
					pie: {
						offsetAngle: -45,
						ringWidth: 40 * _self.pixelRatio,
						labelWidth: 15
					}
				},
				background: '#FFFFFF',
				pixelRatio: _self.pixelRatio,
				series: chartData.series,
				animation: true,
				width: _self.cWidth * _self.pixelRatio,
				height: _self.cHeight * _self.pixelRatio,
				disablePieStroke: true,
				dataLabel: true
			});
		},
		touchRing(e) {
			canvaRing.showToolTip(e, {
				format: function(item) {
					return item.name + ':' + item.data;
				}
			});
		}
	}
};
</script>

<style>
page {
	background: #f2f2f2;
	width: 750upx;
	overflow-x: hidden;
}
/**
 * 时间选择开始
 */
.time-cloumns{
	display: flex;
	flex-direction: row;
}
.time-title{
	font-size: 15px;
	width: 200upx;
}
.time-select{
	display: flex;
	
	width: 500upx;
	font-size: 10px;
	white-space: nowrap;
	width: 100%;
	background-color: red;
}
/**
 * 时间选择接受
 */
.qiun-padding {
	padding: 2%;
	width: 96%;
}
.qiun-wrap {
	display: flex;
	flex-wrap: wrap;
}
.qiun-rows {
	display: flex;
	flex-direction: row !important;
}
.qiun-columns {
	display: flex;
	flex-direction: column !important;
}
.qiun-common-mt {
	margin-top: 10upx;
}
.qiun-bg-white {
	background: #ffffff;
}
.qiun-title-bar {
	width: 96%;
	padding: 10upx 2%;
	flex-wrap: nowrap;
}
.qiun-title-dot-light {
	border-left: 10upx solid #0ea391;
	padding-left: 10upx;
	font-size: 32upx;
	color: #000000;
}
.qiun-charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}
.charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}
</style>
