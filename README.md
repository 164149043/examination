<<<<<<< HEAD
# 安全生产知识考试系统

一个基于uni-app开发的安全生产知识考试小程序。

## 功能特点

- 用户信息管理：支持录入姓名和部门信息
- 考试功能：
  - 随机抽题组卷
  - 实时答题进度显示
  - 计时功能
  - 自动判分
- 成绩管理：
  - 成绩实时统计
  - 排名显示
  - 支持导出成绩（CSV/Excel格式）
- 管理后台：
  - 考试记录查看
  - 成绩统计分析
  - 数据导出功能

## 技术栈

- 框架：uni-app
- 开发工具：HBuilderX
- 小程序平台：微信小程序

## 安装和运行

1. 克隆项目
```bash
git clone [repository-url]
```

2. 使用HBuilderX打开项目

3. 运行项目
- 在HBuilderX中选择"运行到小程序模拟器"
- 或者选择"发行"，生成小程序代码

## 项目结构

```
├── pages                    # 页面文件
│   ├── index               # 首页
│   ├── examPaper           # 考试页面
│   ├── examResult         # 考试结果页面
│   ├── profile            # 个人信息页面
│   └── admin              # 管理后台页面
├── static                  # 静态资源
├── utils                   # 工具函数
└── App.uvue               # 应用入口文件
```

## 使用说明

1. 首次使用需要填写个人信息（姓名和部门）
2. 在首页点击"开始考试"进入考试
3. 答题完成后提交，查看成绩和排名
4. 可以选择重新考试或查看历史成绩

## 注意事项

- 考试过程中请勿刷新或关闭页面
- 同一用户（姓名和部门相同）多次考试只保留最新成绩
- 建议使用最新版本的微信开发者工具进行调试

## 贡献指南

1. Fork 本仓库
2. 创建新的分支 `git checkout -b feature/your-feature`
3. 提交更改 `git commit -am 'Add some feature'`
4. 推送到分支 `git push origin feature/your-feature`
5. 创建 Pull Request

## 版权信息

Copyright © 2025 
=======
# examination
员工安全生成考试小程序
>>>>>>> fc828bea29a9fc0b0cea9d1c2b1aab76649fa442
