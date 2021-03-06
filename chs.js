/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Theme': '主题',
    'Time Elapsed': '已用时间',
    'This game was developed as part of the': '此游戏是作为游戏的一部分开发的',
    'Total cash earned': '赚取的现金总额',
    'Total ideas created': '创建的想法总数',
    'Sell Your Company': '出售你的公司',
    'Research': '研究',
    'Reset': '重置',
    'Switch to Dark Mode': '切换到深色模式',
    'Total power sold': '总计出售的能源',
    'Watch those little legs go!': '看着那些小腿走！',
    'You can sell your company after earning a total of $': '你可以在赚了之后卖掉你的公司$',
    'You need to enable JavaScript to run this app.': '您需要启用JavaScript来运行本游戏。',
    'Export Game Save': '导出游戏存档',
    'About the Game': '关于游戏',
    'Buy for $': '购买成本 $',
    'Hire for $': '雇佣成本 $',
    'Funds': '资金',
    'Generates': '产生',
    'Generation': '生产',
    'Power Generation': '发电量',
    'per day': '每天',
    'per watt': '每瓦',
    'Max ideas available': '最大可用想法',
    'Max cash available': '最大可用资金',
    'Manual Game Saves': '手动保存游戏',
    'Import Game Save': '导入游戏存档',
    'ideas per day': '想法每天',
    'ideas': '想法',
    'If you collect enough money, maybe you can hire staff to research improvements.': '如果您收集到足够的钱，也许您可以雇用员工来研究改进措施。',
    'Incremental Game Jam 2': '增量游戏清单2',
    'Keep the Lights On': '让灯亮着',
    'on itch.io, over the course of one week in February 2021. Because of the time limit, the game may not be very balanced and may have a few bugs. However, I hope that it is still enjoyable.': '在itch.io上架的时间为2021年2月，为期一周。由于时间限制，游戏可能不是很平衡，可能会有一些错误。 但是，我希望它仍然令人愉快。',
    '\"Junior\" Research Assistant': '“初级”研究助理',
    'Hamster': '仓鼠',
    'Houses Illuminated': '住宅照明',
    'ideas per day --': ' 想法每天 --',
    'Maybe recruiting your 12 year old cousin wasn\'t the best idea.': '也许招募您12岁的表弟并不是最好的主意。',
    'Pinwheel': '风车',
    'One day you\'ll build a great wind farm.': '有一天，您将建造一个很棒的风力发电场。',
    'Projects': '项目',
    'Researchers': '研究人员',
    'watts': '瓦',
    'watts used per house per day': '瓦数消耗每天每所房屋',
    'Tenured Professor': '终身教授',
    'Times Ascended': '转生次数',
    'Solar Dish': '太阳能盘',
    'Small Hydro': '小水电',
    'Save Imported': '存档已导入',
    'Research Assistant': '研究助理',
    'Price per Watt Multiplier': '价格每瓦乘数',
    'Professors starting their career path towards tenure.': '教授们开始了他们的终身制职业道路。',
    'Tidal Stream Generator': '潮汐流发电机',
    'Wind Turbine': '风力发电机',
    'You can make it up the hill, just keep pedaling!': '你可以爬上去的，只要继续踩!',
    'Your game save has been imported successfully!': '你的游戏存档已经成功导入!',
    'The photo-voltaic cells soak up the sun\'s rays and turn it into a modest amount of electricity.': '光伏电池吸收太阳光并将其转化为适量的电能。',
    'These small power plants generate electricity using water from nearby streams.': '这些小型发电厂利用附近溪流的水发电。',
    'Masters Student': '硕士生',
    'Pico Hydro': '微型水电',
    'PhD Student': '博士生',
    'Oil Power Plant': '石油发电厂',
    'More educated and enthusiastic, masters students will accelerate your progress.': '更有学识和热情，硕士学生将加速你的进步。',
    'Skip the gym and make some money.': '别去健身房了，赚点钱吧。',
    'A collection of mirrors that focus sunlight on a central tower to generate heat.': '一组镜子将阳光聚焦在中心塔上产生热量。',
    'A hydroelectric powerplant located on a small river': '位于一条小河上的水电站',
    'A parabolic dish that focuses energy from the sun onto a receiver.': '抛物线形天线，将来自太阳的能量聚焦到接收器上。',
    'A power plant that burns coal to generate electricity. This is a bit dirty...': '燃烧煤炭发电的发电厂。 这有点脏...',
    'A power plant that burns ethanol to generate electricity.': '燃烧乙醇以发电的发电厂。',
    'A power plant that burns oil to generate electricity.': '燃烧石油发电的发电厂。',
    'After graduating with their PhD, they are preparing for the rest of their careers as researchers.': '在获得博士学位后，他们正在为研究人员的其余职业做准备。',
    'Ascension Perks': '转生福利',
    'Assistant Professor': '助理教授',
    'Coal Power Plant': '燃煤电厂',
    'Biomass Power Plant': '生物质发电厂',
    'days': '天',
    'Ethanol Power Plant': '乙醇发电厂',
    'Expand your power grid to provide power to the country with a base of 1.000e+6 homes': '扩展您的电网，为国家提供电力，以1.000e+6个家庭为基础',
    'Expand your power grid to provide power to the state with a base of 1.000e+5 homes': '扩展您的电网，为州提供电力，以1.000e+5个家庭为基础',
    'Finally, the wind farm that you\'ve always dreamed of!': '最后，你一直梦想的风电场!',
    'Full-time staff that are the workhorse of your research department.': '全职员工是你研究部门的主力。',
    'Full-time, highly trained researchers.': '全职，训练有素的研究人员。',
    'High School Student': '高中生',
    'Hand Crank': '手动摇把',
    'Human-powered Bicycle': '人力自行车',
    'Ideas Generated Multiplier': '想法生产乘数',
    'Students that have dedicated their life to the field.': '毕生致力于该领域的学生。',
    'Solar Power Tower': '太阳能塔',
    'Solar Panel': '太阳能板',
    'Senior Research Fellow': '高级研究员',
    'Purchase for': '购买',
    'Senior Research Fellow': '高级研究员',
    'A large hydroelectric dam that generates a large amount of power.': '大型水力发电大坝，可产生大量电力。',
    'A power plant that burns natural gas to generate electricity.': '燃烧天然气发电的发电厂。',
    'A power plant that uses controlled nuclear fission reactions to generate electricity.': '使用受控核裂变反应发电的发电厂。',
    'Even more senior full-time researchers.': '甚至更多的高级专职研究人员。',
    'Hydroelectric Dam': '水电大坝',
    'It\'s like a wind turbine, for the sea!': '就像风力涡轮机一样，面向大海！',
    'Natural Gas Power Plant': '天然气发电厂',
    'Nobel Lauriate': '诺贝尔获奖者',
    'Nuclear Fission Reactor': '核裂变反应堆',
    'Postdoc Research Fellow': '博士后研究员',
    'Power the Country': '为国家供电',
    'Principal Research Fellow': '首席研究员',
    'Professional Sales': '专业销售',
    'Scientists that have won the most prestigious award in their field, they are worth every penny.': '赢得了该领域最负盛名的奖项的科学家，他们每一分钱都是值得的。',
    'The highest ranking professors, they bring along their own student researchers to help speed up their work.': '最高级别的教授，他们带来自己的学生研究人员，以帮助加快工作速度。',
    'The honors students from your high school are interested in your project. They might be helpful.': '您高中的荣誉学生对您的项目感兴趣。 他们可能会有所帮助。',
    'There are several buyers interested in your company. You can sell your company, and start a new one by selecting an extra perk.': '有几个对您的公司感兴趣的买家。 您可以出售您的公司，然后通过选择额外的津贴来开始新的公司。',
    'These power plants burn things like plants, trees, and even garbage to generate electricity.': '这些发电厂燃烧诸如植物，树木甚至是垃圾之类的东西来发电。',
    'Undergraduate interns can help speed up your progress cheaply.': '本科生实习生可以帮助您廉价地加快进度。',
    'Undergraduate Student': '本科生',
    'Watts Generated Multiplier': '瓦特生产乘数',
    'Watts Used Per House Multiplier': '每个房子使用瓦特乘数',
    'With nothing in the way, we can generate even more solar power!': '没有任何阻碍，我们可以产生更多的太阳能!',
    'Space Solar Panel Array': '空间太阳能电池板阵列',
    'Excellent Sales': '优秀销售',
    'Copy': '复制',
    'Switch to Light Mode': '切换到浅色模式',
    'Expand your power grid to provide power to the street with a base of 10 homes': '扩展你的电网，为街道提供10个家庭的电力',
    'Power the Street': '为街道供电',
    'Basic Sales': '基本销售',
    'Expand your power grid to provide power to the neighborhood with a base of 100 homes': '扩展您的电网，以100个家庭为基础向附近地区供电',
    'Power the Neighborhood': '为邻里供电',
    'Advanced Sales': '高级销售',
    'Beginner Sales': '初级销售',
    'Expand your power grid to provide power to the city with a base of 1.000e+4 homes': '扩展电网，以1.000e + 4座房屋为城市供电',
    'Expand your power grid to provide power to the town with a base of 1000 homes': '扩展您的电网，为拥有1000座房屋的城镇提供电力',
    'Intermediate Sales': '中级销售',
    'Power the City': '给城市供电',
    'Power the Town': '给小镇供电',
    'Import Data': '导入存档',
    'Power the State': '给州供电',
    'Hire basic sales people to increase the base price per watt to ': '雇用基本的销售人员将每瓦的基本价格提高到',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "watts per day": "瓦每天",
    "Hire professional sales people to increase the base price per watt to $": "雇用专业销售人员将每瓦的基本价格提高到$",
    "Increase Ideas Generated by ": "增加产生的想法",
    "Increase Price per Watt by ": "每瓦特价格增加",
    "Increase Watts Generated by ": "增加瓦生产",
    "Increase Watts Used per House by ": "增加每间房屋的瓦特使用量",
    "Version ": "版本 ",
    "Hire excellent sales people to increase the base price per watt to $": "雇用优秀的销售人员，将每瓦的基本价格提高到$",
    'Hire advanced sales people to increase the base price per watt to $': '雇用高级销售人员将每瓦的基本价格提高到$',
    'Hire beginner sales people to increase the base price per watt to $': '雇用初级销售人员，将每瓦的基本价格提高到$',
    'Hire intermediate sales people to increase the base price per watt to $': '雇用中级销售人员将每瓦的基本价格提高到$',
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e\+(\d+)$/,
    /^([\d\.]+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);