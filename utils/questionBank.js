/**
 * @description 题库
 * @author 开发者
 * @date 2024-04-08
 */

// 题库数据
const questionBank = [
	{
		id: 1,
		question: "安全生产的方针是什么？",
		options: [
			"安全第一，预防为主，综合治理",
			"生产第一，安全第二",
			"以人为本，安全发展",
			"预防为主，保护优先"
		],
		answer: 0
	},
	{
		id: 2,
		question: "以下哪项不是安全生产的基本要求？",
		options: [
			"安全培训教育",
			"安全设施配备",
			"追求最大生产效率",
			"安全检查制度"
		],
		answer: 2
	},
	{
		id: 3,
		question: "发现安全隐患应该怎么做？",
		options: [
			"隐瞒不报",
			"立即报告主管领导",
			"私下解决",
			"等待他人发现"
		],
		answer: 1
	},
	{
		id: 4,
		question: "安全生产责任制的核心是什么？",
		options: [
			"安全生产投入",
			"安全检查",
			"岗位责任制",
			"安全教育"
		],
		answer: 2
	},
	{
		id: 5,
		question: "以下哪种行为是正确的？",
		options: [
			"穿戴工作服进入施工现场",
			"在施工现场吸烟",
			"在施工现场打闹",
			"在施工现场接打电话"
		],
		answer: 0
	},
	{
		id: 6,
		question: "安全生产管理的目的是什么？",
		options: [
			"提高生产效率",
			"预防和减少事故",
			"降低生产成本",
			"提高员工收入"
		],
		answer: 1
	},
	{
		id: 7,
		question: "安全生产的首要任务是什么？",
		options: [
			"提高产量",
			"控制成本",
			"保护人员安全",
			"提高效率"
		],
		answer: 2
	},
	{
		id: 8,
		question: "以下哪项不是安全生产事故的主要原因？",
		options: [
			"人的不安全行为",
			"物的不安全状态",
			"环境的不安全因素",
			"天气状况"
		],
		answer: 3
	},
	{
		id: 9,
		question: "安全生产的关键是什么？",
		options: [
			"资金投入",
			"设备更新",
			"人的意识",
			"制度建设"
		],
		answer: 2
	},
	{
		id: 10,
		question: "安全检查的主要目的是什么？",
		options: [
			"发现事故隐患",
			"惩罚违规人员",
			"完成工作任务",
			"应付上级检查"
		],
		answer: 0
	}
]

// 从题库中随机抽取指定数量的题目
function getRandomQuestions(count) {
	const shuffled = [...questionBank].sort(() => 0.5 - Math.random())
	return shuffled.slice(0, count)
}

// 导出模块
module.exports = {
	questionBank,
	getRandomQuestions
} 