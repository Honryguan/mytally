<template>
	<view>
		<view class="budget">
			<view class="index-content">
				<view class="">1月支出</view>
				<view class="">1月支出</view>
				<view class="">预算 点击设置 | 本月收入</view>
			</view>
		</view>
		<uni-list>
			<navigator url="../today/today">
				<uni-list-item title="今天" note="最近一笔 早午晚餐66.00" titleRight="0.01" noteRight="67.00" :show-extra-icon="true" :extra-icon="extraIcon1" badge-text="12" />
			</navigator>
			<uni-list-item title="本周" note="最近一笔 早午晚餐66.00" titleRight="0.01" noteRight="67.00" :show-extra-icon="true" :extra-icon="extraIcon1" badge-text="12" />
			<uni-list-item title="本月" note="最近一笔 早午晚餐66.00" titleRight="0.01" noteRight="67.00" :show-extra-icon="true" :extra-icon="extraIcon1" badge-text="12" />
		</uni-list>
		<button type="primary" class="addButton">+</button>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
export default {
	data() {
		return {
			title: 'SQLite'
		};
	},
	components: {
		uniList,
		uniListItem
	},
	methods: {
		openDB: function() {
			plus.sqlite.openDatabase({
				name: 'first',
				path: '_doc/test.db',
				success: function(e) {
					plus.nativeUI.alert('打开数据库test.db成功 ');
				},
				fail: function(e) {
					plus.nativeUI.alert('打开数据库test.db失败: ' + JSON.stringify(e));
				}
			});
		},
		// 执行SQL语句
		executeSQL: function() {
			plus.sqlite.executeSql({
				name: 'first',
				sql: 'create table if not exists database("name" CHAR(110),"sex" CHAR(10),"age" INT(11))',
				success: function(e) {
					plus.sqlite.executeSql({
						name: 'first',
						sql: "insert into database values('彦','女','7000')",
						success: function(e) {
							plus.nativeUI.alert('创建表table和插入数据成功');
						},
						fail: function(e) {
							plus.nativeUI.alert('创建表table成功但插入数据失败: ' + JSON.stringify(e));
						}
					});
				},
				fail: function(e) {
					plus.nativeUI.alert('创建表table失败: ' + JSON.stringify(e));
				}
			});
		},
		// 查询SQL语句
		selectSQL: function() {
			plus.sqlite.selectSql({
				name: 'first',
				sql: 'select * from database',
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
				name: 'first',
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
				name: 'first',
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
					name: 'first',
					path: '_doc/test.db'
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
/**背景图片相关内容*/
.budget {
	background: url('~@/static/jizhang.jpg');
	height: 400upx;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.index-content {
	display: flex;
	flex-direction: column;
	padding: 200upx 0upx 0upx 50upx;
}
/**背景图片相关内容结束*/

/**记账按钮*/
.addButton {
	width: 120upx;
	height: 120upx;
	position: fixed;
	bottom: 150upx;
	right: 50upx;
	border-radius: 60px;
	background-color: #6b9eaf;
}
/**记账按钮结束*/
</style>
