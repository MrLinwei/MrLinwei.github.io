// 使用 Mock,梳理需求
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
//  home页数据
	"banner" : {},
	"more|7" : [{
		"id|+1" : 1,
		"classify_url" : "@image(171x100,@color,@ctitle(3)",
		"classify_title" : "@word(3)",
		"describe" : "@ctitle(3)",
		"week_book|20-30" :[{
			// 漫画id
			"week_id|+1" : 1,
			// 图片路径
			"week_url" : "@image(210x280,@color,@ctitle(3)",
			// 分类id
			"week_tags|1-14" : 1,
			// 漫画名
			"week_title" : "@ctitle(3,6)",
			// 漫画简意
			"week_text" : "@ctitle(6,10)",
			// 漫画简介
			"week_desc" : "@ctitle(50,120)",
			// 作者
			"writer" : "@cword(2,4)",
			// 大纲
			"synopsis" : "@cword(4,6)",
			// 人气
			"popularity|1-100.1" : 10,
			// 月票数量
			"monthly|1-20000" : 100,
			// 更新几话
			"updata|10-500" : 100,
			// 收藏数量
			"collect|50-500" : 100,
			// 评星
			"week_star|5" : "★",
			// 评分
			"grade|7-9.1" : 8,
			// 记录收藏状态
			"isBoolean" : false
		}]
	}],
	"addNum" : []
})
// 写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4),  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
});