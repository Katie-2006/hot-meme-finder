const memes = [
  {
    name: "显眼包",
    category: "生活表达",
    source: "短视频评论区",
    heat: 98,
    updated: "2026-05-16",
    aliases: ["显眼", "社交牛人", "整活"],
    summary: "形容在人群里特别突出、爱整活或自带存在感的人。",
    meaning:
      "常用于调侃朋友、同事或网友的夸张行为，语气偏轻松。它可以是善意夸人会活跃气氛，也可以是吐槽某人过分抢镜。",
    usage: "这位同学一上台就开始即兴表演，真是全场显眼包。",
    origin: "来自短视频平台和社交评论区的高频表达。",
  },
  {
    name: "电子榨菜",
    category: "生活表达",
    source: "B站/长视频",
    heat: 92,
    updated: "2026-05-13",
    aliases: ["下饭视频", "吃饭搭子", "背景音"],
    summary: "指吃饭时用来配着看的视频、直播、综艺或剧集。",
    meaning:
      "把视频内容比作榨菜，强调它不一定需要全神贯注，但能陪伴吃饭、通勤或做家务。",
    usage: "这档综艺太适合当电子榨菜了，吃饭的时候随手打开。",
    origin: "由视频平台用户对下饭内容的称呼流行开来。",
  },
  {
    name: "尊嘟假嘟",
    category: "短视频",
    source: "抖音/小红书",
    heat: 90,
    updated: "2026-05-08",
    aliases: ["真的假的", "尊嘟", "假嘟"],
    summary: "用可爱、撒娇的语气表达“真的假的”。",
    meaning:
      "常用于表达惊讶、怀疑或故意卖萌。它的重点不在信息判断，而在语气带来的反差感。",
    usage: "你明天请全组喝奶茶？尊嘟假嘟？",
    origin: "由短视频口癖和谐音传播形成的网络表达。",
  },
  {
    name: "我嘞个豆",
    category: "短视频",
    source: "短视频弹幕",
    heat: 89,
    updated: "2026-05-12",
    aliases: ["我勒个豆", "震惊", "离谱"],
    summary: "表达震惊、意外或觉得事情离谱。",
    meaning:
      "类似“我的天”，但更口语化、更有短视频节奏感，适合对夸张反转、惊人操作做即时反应。",
    usage: "你一晚上写完三万字？我嘞个豆。",
    origin: "短视频评论和直播弹幕中的语气词变体。",
  },
  {
    name: "遥遥领先",
    category: "社交平台",
    source: "微博/科技圈",
    heat: 86,
    updated: "2026-04-30",
    aliases: ["领先", "断层领先", "科技梗"],
    summary: "原本表示明显领先，后来变成夸张赞叹或调侃用语。",
    meaning:
      "可正向夸奖，也可用于反讽。语境决定它是在认真称赞，还是在打趣某个表现过于突出或宣传味太足。",
    usage: "这次你迟到理由编得太完整了，遥遥领先。",
    origin: "由发布会和社交媒体二创扩散。",
  },
  {
    name: "人生易如反掌",
    category: "影视综艺",
    source: "影视二创",
    heat: 84,
    updated: "2026-05-09",
    aliases: ["易如反掌", "人生梗", "发疯文学"],
    summary: "用于夸张表达突然自信、想象自己轻松拿捏人生。",
    meaning:
      "通常带有自嘲意味，适合在刚掌握一点技能、刚做完计划或短暂打鸡血时使用。",
    usage: "看完三分钟理财视频，我感觉人生易如反掌。",
    origin: "影视台词、解说切片和网友二创共同推动流行。",
  },
  {
    name: "退退退",
    category: "社交平台",
    source: "短视频/表情包",
    heat: 80,
    updated: "2026-04-25",
    aliases: ["拒绝", "离我远点", "退"],
    summary: "用来夸张地驱散麻烦、压力或不想面对的人和事。",
    meaning:
      "它的情绪很直观，常用于对坏运气、拖延症、ddl、离谱消息表达拒绝。",
    usage: "周一综合征退退退。",
    origin: "短视频名场面经过表情包化后走红。",
  },
  {
    name: "命运的齿轮开始转动",
    category: "影视综艺",
    source: "B站/微博",
    heat: 79,
    updated: "2026-05-11",
    aliases: ["齿轮转动", "命运齿轮", "人生节点"],
    summary: "形容一个看似普通的瞬间引出后续大变化。",
    meaning:
      "常被用于叙事开头，也能调侃小事被过度解读，比如点开一个教程后开始入坑。",
    usage: "当我下载这个剪辑软件时，命运的齿轮开始转动。",
    origin: "影视解说和人物传记式短视频的常用叙述句式。",
  },
  {
    name: "抽象",
    category: "社交平台",
    source: "贴吧/短视频",
    heat: 78,
    updated: "2026-05-10",
    aliases: ["太抽象了", "难评", "看不懂"],
    summary: "形容内容、行为或场面难以用常规逻辑理解。",
    meaning:
      "既可以表示荒诞有趣，也可以表示无语。它适合评价反常识、无厘头、强行整活的内容。",
    usage: "这个会议纪要写得像悬疑小说，太抽象了。",
    origin: "从亚文化圈层扩散到泛社交平台。",
  },
  {
    name: "赛博打工人",
    category: "生活表达",
    source: "职场社交",
    heat: 75,
    updated: "2026-05-02",
    aliases: ["打工人", "牛马", "上班梗"],
    summary: "用科技感包装普通打工人的疲惫与自嘲。",
    meaning:
      "常用于远程办公、AI工具、数字工位等场景，表达现代工作的碎片化和在线化。",
    usage: "白天开会，晚上补表格，赛博打工人已上线。",
    origin: "由职场内容、AI话题和打工人文化融合形成。",
  },
  {
    name: "上强度",
    category: "游戏圈",
    source: "游戏直播",
    heat: 73,
    updated: "2026-05-05",
    aliases: ["强度拉满", "认真了", "开卷"],
    summary: "表示开始认真、提高难度或进入高压状态。",
    meaning:
      "源自竞技和游戏语境，后来扩展到学习、工作、健身等场景。",
    usage: "明天答辩，今晚必须上强度。",
    origin: "游戏直播和竞技讨论区的常用语。",
  },
  {
    name: "启动",
    category: "游戏圈",
    source: "游戏/直播",
    heat: 70,
    updated: "2026-04-29",
    aliases: ["开始", "启动一下", "准备开干"],
    summary: "表示准备开始做某事，常带一点仪式感和整活意味。",
    meaning:
      "比普通的“开始”更有网感，适合做计划、打游戏、开工或开始摸鱼前说一句。",
    usage: "咖啡到位，论文启动。",
    origin: "游戏启动界面、直播口癖和二创语境叠加传播。",
  },
  {
    name: "我的刀呢",
    category: "社交平台",
    source: "表情包/评论区",
    heat: 88,
    updated: "2026-05-17",
    aliases: ["刀呢", "我的刀", "把刀拿来", "我的刀盾", "想刀一个人的眼神"],
    summary: "表达被气到、被甜到或想夸张吐槽某件事。",
    meaning:
      "常见于表情包和评论区，语气通常是玩笑式夸张，不是真的要做什么。可以用来吐槽离谱内容，也可以用在嗑 CP、看剧情反转时表达情绪上头。",
    usage: "看到这个结局，我的刀呢。",
    origin: "由表情包、影视二创和评论区接梗传播。",
  },
  {
    name: "你人还怪好的嘞",
    category: "生活表达",
    source: "短视频/评论区",
    heat: 87,
    updated: "2026-05-15",
    aliases: ["怪好的", "人还怪好", "还怪好嘞"],
    summary: "用反差语气评价对方看似离谱但又有点好心的行为。",
    meaning:
      "通常用于调侃，重点在“离谱”和“好心”同时存在。它比直接夸奖更有网感，也更适合轻松吐槽。",
    usage: "你把我作业删了但提醒我重写一遍，你人还怪好的嘞。",
    origin: "短视频剧情和评论区二创推动流行。",
  },
  {
    name: "小丑竟是我自己",
    category: "社交平台",
    source: "微博/贴吧/表情包",
    heat: 83,
    updated: "2026-05-06",
    aliases: ["小丑是我", " clown myself", "破防"],
    summary: "自嘲自己误判形势、期待落空或被现实打脸。",
    meaning:
      "常用于感情、考试、工作和追星等场景，表达一种尴尬又无奈的自嘲。",
    usage: "我以为甲方通过了，结果只是已读，小丑竟是我自己。",
    origin: "表情包文化和社交平台自嘲语境结合形成。",
  },
  {
    name: "蚌埠住了",
    category: "社交平台",
    source: "贴吧/B站",
    heat: 82,
    updated: "2026-04-28",
    aliases: ["绷不住了", "蚌住", "笑绷了"],
    summary: "表示忍不住笑、忍不住破防或情绪绷不住。",
    meaning:
      "它是“绷不住了”的谐音写法，既能表达好笑，也能表达无语到撑不住。",
    usage: "看到他一本正经地胡说八道，我真的蚌埠住了。",
    origin: "谐音梗从弹幕和论坛扩散到全网。",
  },
  {
    name: "栓 Q",
    category: "短视频",
    source: "短视频口癖",
    heat: 81,
    updated: "2026-05-01",
    aliases: ["thank you", "酸 Q", "谢谢你"],
    summary: "源自 Thank you 的谐音，常用于无奈、阴阳怪气或轻松感谢。",
    meaning:
      "语气通常不是真诚严肃的感谢，而是带一点调侃，比如遇到离谱安排时说一句“栓 Q”。",
    usage: "刚写完方案就说需求改了，栓 Q。",
    origin: "短视频口音梗和网友二创传播。",
  },
  {
    name: "绝绝子",
    category: "生活表达",
    source: "饭圈/社交平台",
    heat: 76,
    updated: "2026-04-21",
    aliases: ["太绝了", "绝了", "好绝"],
    summary: "表示非常好、非常离谱或程度很强，具体褒贬看语境。",
    meaning:
      "既能夸人夸物，也能反讽。因为使用范围很宽，判断语气要看上下文。",
    usage: "这个配色绝绝子，放首页很抓眼。",
    origin: "从饭圈和社交平台流行到日常表达。",
  },
];

memes.push(
  {
    name: "神仙老虎狗",
    category: "生活表达",
    source: "梨园俗语/校园职场",
    heat: 74,
    updated: "2026-05-17",
    aliases: ["老虎神仙狗", "神仙 老虎 狗", "学生是老虎教授是神仙校长是狗"],
    summary: "形容人在不同处境下面貌不同：得意时像神仙，发威时像老虎，低头时像狗。",
    meaning:
      "这是比短视频更早的俗语类表达，常被用来调侃身份、权力和处境变化。后来也被套用到学校、职场、戏曲等语境里。",
    usage: "这个岗位真是神仙老虎狗，对客户赔笑，对供应商发威，对老板又得汇报。",
    origin: "常见说法与梨园俗语、清华校园轶事和职场调侃有关。",
  },
  {
    name: "蓝瘦香菇",
    category: "短视频",
    source: "早期短视频/方言谐音",
    heat: 80,
    updated: "2026-05-17",
    aliases: ["难受想哭", "蓝瘦", "香菇"],
    summary: "“难受想哭”的方言谐音写法。",
    meaning:
      "用于表达委屈、难过或被现实打击后的自嘲，早期短视频时代非常流行。",
    usage: "刚放假就收到加班通知，蓝瘦香菇。",
    origin: "由方言口音视频走红后扩散成网络流行语。",
  },
  {
    name: "神马都是浮云",
    category: "社交平台",
    source: "论坛/贴吧",
    heat: 79,
    updated: "2026-05-17",
    aliases: ["浮云", "什么都是浮云", "神马"],
    summary: "表示很多事不用太当真，都是过眼云烟。",
    meaning:
      "它带有早期论坛语气，常用于自我安慰、看淡结果或吐槽某事不重要。",
    usage: "排名神马都是浮云，开心才是真的。",
    origin: "早期论坛和贴吧语境中的谐音表达。",
  },
  {
    name: "给力",
    category: "生活表达",
    source: "论坛/动画配音",
    heat: 78,
    updated: "2026-05-17",
    aliases: ["不给力", "太给力了", "很给力"],
    summary: "表示很有帮助、很强、很靠谱。",
    meaning:
      "早期互联网高频词，可以夸人、夸产品、夸表现，也可以用“不给力”吐槽不行。",
    usage: "这个工具太给力了，十分钟干完一小时的活。",
    origin: "由网络配音和论坛传播后进入日常表达。",
  },
  {
    name: "杯具",
    category: "社交平台",
    source: "论坛/贴吧",
    heat: 76,
    updated: "2026-05-17",
    aliases: ["悲剧", "洗具", "餐具"],
    summary: "“悲剧”的谐音写法，表示倒霉、失败或尴尬。",
    meaning:
      "早期论坛喜欢用同音词制造轻松语气，“杯具”就是典型代表。",
    usage: "文件没保存电脑重启了，杯具。",
    origin: "早期论坛谐音梗。",
  },
  {
    name: "我勒个去",
    category: "社交平台",
    source: "论坛/弹幕",
    heat: 75,
    updated: "2026-05-17",
    aliases: ["我了个去", "我去", "震惊"],
    summary: "表达惊讶、无语或被某事震住。",
    meaning:
      "比普通“我去”更带早期网感，适合吐槽突然发生的离谱场面。",
    usage: "你这份表格有三百列？我勒个去。",
    origin: "早期论坛、弹幕和口语传播。",
  },
  {
    name: "元芳你怎么看",
    category: "影视综艺",
    source: "电视剧二创",
    heat: 77,
    updated: "2026-05-17",
    aliases: ["元芳", "你怎么看", "大人此事必有蹊跷"],
    summary: "用于询问别人怎么看，也常带调侃和推理感。",
    meaning:
      "出自古装探案剧台词二创，后来成为网络问句模板。",
    usage: "这份数据突然翻倍，元芳你怎么看？",
    origin: "《神探狄仁杰》相关台词在网络二创中走红。",
  },
  {
    name: "贾君鹏你妈妈喊你回家吃饭",
    category: "社交平台",
    source: "贴吧",
    heat: 78,
    updated: "2026-05-17",
    aliases: ["贾君鹏", "回家吃饭", "妈妈喊你"],
    summary: "早期贴吧爆火句式，用于召唤、刷屏或玩梗。",
    meaning:
      "它代表了早期论坛时代的集体围观式传播，后来常被当作中文互联网早期名梗提起。",
    usage: "会议快开始了，贾君鹏你妈妈喊你回家吃饭。",
    origin: "百度贴吧早期爆帖形成的网络事件。",
  },
  {
    name: "躲猫猫",
    category: "社交平台",
    source: "新闻事件/网络讽刺",
    heat: 72,
    updated: "2026-05-17",
    aliases: ["躲猫猫事件", "离奇解释", "新闻梗"],
    summary: "用来讽刺不合理解释或让人难以信服的说法。",
    meaning:
      "它来自早期网络公共事件讨论，后来变成对荒唐说明的讽刺表达。",
    usage: "这个故障原因说得太玄了，像在躲猫猫。",
    origin: "早期新闻事件引发的网络热议。",
  },
  {
    name: "俯卧撑",
    category: "社交平台",
    source: "新闻事件/网络讽刺",
    heat: 70,
    updated: "2026-05-17",
    aliases: ["做俯卧撑", "新闻梗", "围观"],
    summary: "早期网络讽刺梗，用来指代离奇说法或公共事件中的荒诞细节。",
    meaning:
      "现在更多作为互联网老梗被提起，表达对某种说法的怀疑和调侃。",
    usage: "这解释也太绕了，下一步是不是该做俯卧撑了。",
    origin: "早期公共事件讨论中的高频词。",
  },
  {
    name: "打酱油",
    category: "生活表达",
    source: "新闻采访/论坛",
    heat: 79,
    updated: "2026-05-17",
    aliases: ["路过", "不关我事", "酱油党"],
    summary: "表示只是路过、围观，不想参与。",
    meaning:
      "常用于对热点事件保持距离，也可以自嘲自己只是旁观者。",
    usage: "你们继续讨论，我只是来打酱油的。",
    origin: "早期新闻采访片段和论坛传播。",
  },
  {
    name: "围观",
    category: "社交平台",
    source: "论坛/贴吧",
    heat: 74,
    updated: "2026-05-17",
    aliases: ["前排围观", "吃瓜", "围观群众"],
    summary: "表示旁观热门事件或帖子。",
    meaning:
      "早期论坛常用“前排围观”表达赶上热闹现场，后来演化出更通用的“吃瓜”。",
    usage: "这楼吵起来了，前排围观。",
    origin: "论坛和贴吧回帖文化。",
  },
  {
    name: "楼主好人一生平安",
    category: "社交平台",
    source: "论坛/资源帖",
    heat: 73,
    updated: "2026-05-17",
    aliases: ["楼主好人", "一生平安", "求资源"],
    summary: "早期论坛向发资源的人表达感谢或求分享的固定句式。",
    meaning:
      "常出现在资源帖、教程帖和经验帖下，带有很强的老论坛气质。",
    usage: "资料已收到，楼主好人一生平安。",
    origin: "论坛资源分享文化。",
  },
  {
    name: "沙发",
    category: "社交平台",
    source: "论坛/博客",
    heat: 71,
    updated: "2026-05-17",
    aliases: ["抢沙发", "板凳", "地板"],
    summary: "表示抢到帖子或评论区的第一条回复。",
    meaning:
      "早期论坛和博客时代常见，抢到前排会说“沙发”，第二条常说“板凳”。",
    usage: "沙发！终于抢到第一条了。",
    origin: "论坛和博客评论文化。",
  },
  {
    name: "做人不能太 CNN",
    category: "社交平台",
    source: "论坛/新闻讨论",
    heat: 68,
    updated: "2026-05-17",
    aliases: ["不能太CNN", "太CNN", "媒体梗"],
    summary: "早期用来讽刺选择性报道或偏见表达的句式。",
    meaning:
      "现在属于时代感很强的老梗，常被用来指责断章取义或立场偏向明显。",
    usage: "只截一半聊天记录就下结论，做人不能太 CNN。",
    origin: "早期网络新闻争议讨论。",
  },
  {
    name: "很黄很暴力",
    category: "社交平台",
    source: "新闻采访/论坛",
    heat: 69,
    updated: "2026-05-17",
    aliases: ["黄暴", "很黄", "很暴力"],
    summary: "早期网络流行句，用来夸张评价内容刺激或尺度大。",
    meaning:
      "现在多作为怀旧老梗使用，语气通常是调侃。",
    usage: "这个标题党写得很黄很暴力。",
    origin: "早期新闻采访片段引发网络传播。",
  },
  {
    name: "不要迷恋哥",
    category: "社交平台",
    source: "论坛/签名档",
    heat: 72,
    updated: "2026-05-17",
    aliases: ["哥只是个传说", "迷恋哥", "传说"],
    summary: "完整句式常为“不要迷恋哥，哥只是个传说”。",
    meaning:
      "早期网络自恋式幽默，用于装酷、调侃自己或模仿中二语气。",
    usage: "不要迷恋哥，哥只是个会写 PPT 的传说。",
    origin: "论坛签名档和社交空间流行语。",
  },
  {
    name: "哥吃的不是面，是寂寞",
    category: "社交平台",
    source: "论坛/空间",
    heat: 71,
    updated: "2026-05-17",
    aliases: ["吃的是寂寞", "不是面是寂寞", "寂寞体"],
    summary: "早期“寂寞体”句式，用来故作深沉或自嘲。",
    meaning:
      "常被用来模仿非主流时代的文艺腔，带有怀旧和调侃意味。",
    usage: "我加的不是班，是寂寞。",
    origin: "论坛、QQ 空间和早期社交网络传播。",
  },
  {
    name: "囧",
    category: "社交平台",
    source: "论坛/输入法文化",
    heat: 75,
    updated: "2026-05-17",
    aliases: ["囧rz", "orz", "尴尬"],
    summary: "用汉字外形表达尴尬、无奈或被打败。",
    meaning:
      "“囧”因字形像一张尴尬脸而流行，是很典型的早期中文互联网表情文字。",
    usage: "我把文件发错群了，囧。",
    origin: "早期论坛表情文字文化。",
  },
  {
    name: "orz",
    category: "社交平台",
    source: "论坛/二次元",
    heat: 70,
    updated: "2026-05-17",
    aliases: ["跪了", "佩服", "失意体前屈"],
    summary: "用字母形状表示跪倒的人，表达佩服、崩溃或认输。",
    meaning:
      "可以是真佩服，也可以是被现实打败后的无奈姿态。",
    usage: "你这个公式一行写完，orz。",
    origin: "ASCII 表情文化，经论坛和二次元社区流行。",
  },
  {
    name: "神马",
    category: "社交平台",
    source: "论坛/谐音",
    heat: 69,
    updated: "2026-05-17",
    aliases: ["什么", "神马会", "神马情况"],
    summary: "“什么”的谐音写法，常见于早期网文和论坛。",
    meaning:
      "常用于卖萌、调侃或制造网感，比如“神马情况”。",
    usage: "这又是神马情况？",
    origin: "早期论坛谐音表达。",
  },
  {
    name: "蛋疼",
    category: "生活表达",
    source: "论坛/贴吧",
    heat: 73,
    updated: "2026-05-17",
    aliases: ["闲得蛋疼", "无语", "烦"],
    summary: "形容无聊、烦躁、无语或被折腾。",
    meaning:
      "粗口感较强，但在早期网络里常作为泛化吐槽词使用。",
    usage: "这个流程要盖八个章，太蛋疼了。",
    origin: "论坛和贴吧口语化吐槽。",
  },
  {
    name: "坑爹",
    category: "生活表达",
    source: "论坛/游戏圈",
    heat: 76,
    updated: "2026-05-17",
    aliases: ["太坑了", "坑", "坑队友"],
    summary: "形容事情离谱、不靠谱、让人吃亏。",
    meaning:
      "常用于吐槽规则、产品、队友或突发状况。",
    usage: "这活动规则也太坑爹了。",
    origin: "论坛、游戏圈和口语传播。",
  },
  {
    name: "坑队友",
    category: "游戏圈",
    source: "网游/开黑",
    heat: 72,
    updated: "2026-05-17",
    aliases: ["猪队友", "卖队友", "太坑"],
    summary: "指因为操作或判断失误拖累队友。",
    meaning:
      "最早常见于游戏语境，后来扩展到团队合作、项目协作。",
    usage: "你把最终版删了，这波有点坑队友。",
    origin: "网游和语音开黑文化。",
  },
  {
    name: "猪队友",
    category: "游戏圈",
    source: "游戏/社交平台",
    heat: 74,
    updated: "2026-05-17",
    aliases: ["坑队友", "队友太坑", "神对手猪队友"],
    summary: "指不靠谱、拖后腿的合作伙伴。",
    meaning:
      "常与“神一样的对手，猪一样的队友”一起出现，用来吐槽团队配合差。",
    usage: "方案都定好了你又改需求，猪队友啊。",
    origin: "游戏和论坛吐槽句式。",
  },
  {
    name: "喜大普奔",
    category: "社交平台",
    source: "论坛/微博",
    heat: 72,
    updated: "2026-05-17",
    aliases: ["喜闻乐见", "大快人心", "普天同庆", "奔走相告"],
    summary: "四个成语缩写，表示特别值得高兴。",
    meaning:
      "早期网络缩写梗，常用于夸张表达好消息，也可反讽。",
    usage: "项目终于上线了，喜大普奔。",
    origin: "论坛和微博缩写文化。",
  },
  {
    name: "累觉不爱",
    category: "生活表达",
    source: "微博/贴吧",
    heat: 73,
    updated: "2026-05-17",
    aliases: ["很累感觉不会再爱了", "不爱了", "累了"],
    summary: "“很累，感觉不会再爱了”的缩写。",
    meaning:
      "表达疲惫、失望、无力继续投入，常用于自嘲。",
    usage: "改了第十二版方案，累觉不爱。",
    origin: "早期微博和贴吧缩写语。",
  },
  {
    name: "细思恐极",
    category: "社交平台",
    source: "论坛/影评",
    heat: 74,
    updated: "2026-05-17",
    aliases: ["细思极恐", "想想很可怕", "恐怖细节"],
    summary: "仔细想想觉得很可怕。",
    meaning:
      "常用于悬疑、都市传说、影视解析，也可以调侃生活中的隐藏风险。",
    usage: "这个报销流程细思恐极。",
    origin: "论坛影评和悬疑讨论常用语。",
  },
  {
    name: "不明觉厉",
    category: "社交平台",
    source: "论坛/弹幕",
    heat: 75,
    updated: "2026-05-17",
    aliases: ["虽然不明白但感觉很厉害", "觉厉", "看不懂但厉害"],
    summary: "虽然不明白，但感觉很厉害。",
    meaning:
      "常用于看见复杂技术、学术内容或高手操作时表达佩服。",
    usage: "这段代码我没看懂，但不明觉厉。",
    origin: "论坛和弹幕缩写语。",
  },
  {
    name: "人艰不拆",
    category: "生活表达",
    source: "微博/贴吧",
    heat: 74,
    updated: "2026-05-17",
    aliases: ["人生已经如此艰难有些事情就不要拆穿", "别拆穿", "留点面子"],
    summary: "人生已经很难了，有些事就别拆穿。",
    meaning:
      "常用于自嘲、圆场或提醒别人不要把尴尬事实说破。",
    usage: "我知道 PPT 很丑，人艰不拆。",
    origin: "早期微博和贴吧缩写语。",
  },
  {
    name: "十动然拒",
    category: "生活表达",
    source: "微博/豆瓣",
    heat: 70,
    updated: "2026-05-17",
    aliases: ["十分感动然后拒绝", "感动拒绝", "然拒"],
    summary: "十分感动，然后拒绝。",
    meaning:
      "常用于表白、邀约、合作请求等被委婉拒绝的场景。",
    usage: "你的方案很有想象力，老板十动然拒。",
    origin: "社交平台缩写句式。",
  },
  {
    name: "男默女泪",
    category: "社交平台",
    source: "论坛/微博",
    heat: 68,
    updated: "2026-05-17",
    aliases: ["男人沉默女人流泪", "沉默流泪", "震撼标题"],
    summary: "夸张标题党句式，表示内容令人震惊或无语。",
    meaning:
      "后来常被用来讽刺营销号标题或过度煽情表达。",
    usage: "这份周报写法男默女泪。",
    origin: "早期营销号和论坛标题文化。",
  },
  {
    name: "喜闻乐见",
    category: "社交平台",
    source: "论坛/弹幕",
    heat: 71,
    updated: "2026-05-17",
    aliases: ["喜闻乐见的场面", "经典场面", "爱看"],
    summary: "表示某个场面很经典、很有看点，常带调侃。",
    meaning:
      "常用于弹幕、评论区看到反转、翻车、名场面时。",
    usage: "需求又改了，喜闻乐见。",
    origin: "论坛和弹幕文化。",
  },
  {
    name: "真香",
    category: "影视综艺",
    source: "综艺名场面",
    heat: 84,
    updated: "2026-05-17",
    aliases: ["王境泽", "真香定律", "打脸"],
    summary: "先拒绝，后来又接受并觉得不错。",
    meaning:
      "用于自嘲前后态度反转，也可以称为“真香定律”。",
    usage: "我说不买，结果下单最快，真香。",
    origin: "综艺节目名场面经二创走红。",
  },
  {
    name: "葛优躺",
    category: "影视综艺",
    source: "电视剧截图/表情包",
    heat: 78,
    updated: "2026-05-17",
    aliases: ["躺平姿势", "瘫着", "表情包"],
    summary: "一种瘫坐姿势，用来表达疲惫、摆烂或放空。",
    meaning:
      "常用于下班后、假期、被任务压垮时的状态表达。",
    usage: "周五晚上只想葛优躺。",
    origin: "电视剧截图被做成表情包后流行。",
  },
  {
    name: "洪荒之力",
    category: "社交平台",
    source: "采访名场面",
    heat: 76,
    updated: "2026-05-17",
    aliases: ["用尽洪荒之力", "傅园慧", "全力以赴"],
    summary: "表示已经使出全部力气。",
    meaning:
      "常用于运动、工作、考试或赶 ddl，语气轻松夸张。",
    usage: "为了赶完这个报告，我用尽洪荒之力。",
    origin: "运动员采访名场面传播。",
  },
  {
    name: "友谊的小船说翻就翻",
    category: "社交平台",
    source: "漫画/微博",
    heat: 75,
    updated: "2026-05-17",
    aliases: ["小船翻了", "友谊小船", "说翻就翻"],
    summary: "形容关系因为小事突然变差，常用于玩笑。",
    meaning:
      "后来扩展成各种关系小船，比如爱情、同事情、师生情。",
    usage: "你居然不帮我点奶茶，友谊的小船说翻就翻。",
    origin: "漫画和社交平台传播。",
  },
  {
    name: "老司机带带我",
    category: "社交平台",
    source: "论坛/弹幕",
    heat: 73,
    updated: "2026-05-17",
    aliases: ["老司机", "带带我", "求带"],
    summary: "向有经验的人求带路、求教学。",
    meaning:
      "原本“老司机”指经验丰富的人，后来在各类圈子中泛化。",
    usage: "这个软件怎么配置，老司机带带我。",
    origin: "论坛、弹幕和网络歌曲共同传播。",
  },
  {
    name: "臣妾做不到啊",
    category: "影视综艺",
    source: "影视台词/表情包",
    heat: 74,
    updated: "2026-05-17",
    aliases: ["臣妾做不到", "做不到啊", "甄嬛体"],
    summary: "表示实在做不到，语气夸张又委屈。",
    meaning:
      "常用于面对不合理要求时的玩笑式拒绝。",
    usage: "一天写完三份报告，臣妾做不到啊。",
    origin: "宫斗剧台词二创和表情包。",
  },
  {
    name: "极好的",
    category: "影视综艺",
    source: "甄嬛体",
    heat: 69,
    updated: "2026-05-17",
    aliases: ["甄嬛体", "想来是极好的", "本宫"],
    summary: "仿宫斗剧语气的评价句式。",
    meaning:
      "常用于故作端庄、阴阳怪气或把小事说得很隆重。",
    usage: "这周不用开早会，想来是极好的。",
    origin: "宫斗剧台词风格在网络上被大量仿写。",
  },
  {
    name: "Duang",
    category: "社交平台",
    source: "广告二创/鬼畜",
    heat: 71,
    updated: "2026-05-17",
    aliases: ["duang一下", "特效", "鬼畜"],
    summary: "拟声词，用来形容突然加特效、变夸张。",
    meaning:
      "常用于调侃包装、滤镜、广告效果过猛。",
    usage: "这个滤镜一开，整个人 Duang 地亮了。",
    origin: "广告片段被二创鬼畜后走红。",
  },
  {
    name: "皮皮虾我们走",
    category: "短视频",
    source: "游戏/短视频",
    heat: 72,
    updated: "2026-05-17",
    aliases: ["皮皮虾", "我们走", "出发"],
    summary: "表示出发、撤退或开始行动，语气轻松搞怪。",
    meaning:
      "常用于评论区接龙、短视频配文或朋友间开玩笑。",
    usage: "下班了，皮皮虾我们走。",
    origin: "游戏圈和短视频平台传播。",
  },
  {
    name: "皮一下很开心",
    category: "生活表达",
    source: "短视频/社交平台",
    heat: 70,
    updated: "2026-05-17",
    aliases: ["皮这一下", "很皮", "调皮"],
    summary: "表示故意开个玩笑或小小捣乱后很开心。",
    meaning:
      "常用于轻微整活、嘴贫或调侃朋友。",
    usage: "我把群名改成项目敢死队，皮一下很开心。",
    origin: "短视频和社交平台口语。",
  },
  {
    name: "安排上了",
    category: "生活表达",
    source: "短视频/东北话",
    heat: 75,
    updated: "2026-05-17",
    aliases: ["安排", "安排一下", "给你安排"],
    summary: "表示已经处理、准备或落实。",
    meaning:
      "可认真可玩笑，常用于承诺帮忙、计划活动或回应请求。",
    usage: "想喝奶茶？安排上了。",
    origin: "东北口语经短视频扩散。",
  },
  {
    name: "盘它",
    category: "短视频",
    source: "相声/短视频",
    heat: 74,
    updated: "2026-05-17",
    aliases: ["盘", "万物皆可盘", "干它"],
    summary: "表示上手、研究、搞定或挑战某事。",
    meaning:
      "原本与文玩动作有关，后来被泛化成行动口号。",
    usage: "这个 bug 不难，盘它。",
    origin: "相声和短视频二创传播。",
  },
  {
    name: "我太难了",
    category: "生活表达",
    source: "短视频/表情包",
    heat: 80,
    updated: "2026-05-17",
    aliases: ["太难了", "难啊", "生活不易"],
    summary: "表达生活、学习、工作压力大。",
    meaning:
      "常用于自嘲式抱怨，语气比严肃诉苦更轻松。",
    usage: "上午开会下午答辩晚上赶作业，我太难了。",
    origin: "短视频和表情包传播。",
  },
  {
    name: "奥利给",
    category: "短视频",
    source: "直播/短视频",
    heat: 76,
    updated: "2026-05-17",
    aliases: ["给力奥", "加油", "干了"],
    summary: "表示加油、冲、鼓劲，语气很有短视频气势。",
    meaning:
      "常用于鼓舞自己或他人，也常被二创成夸张口号。",
    usage: "今晚把论文初稿写完，奥利给。",
    origin: "直播和短视频口号传播。",
  },
  {
    name: "耗子尾汁",
    category: "短视频",
    source: "武术视频/谐音",
    heat: 72,
    updated: "2026-05-17",
    aliases: ["好自为之", "年轻人不讲武德", "不讲武德"],
    summary: "“好自为之”的谐音，常和“不讲武德”一起出现。",
    meaning:
      "用于调侃对方操作不地道，或模仿老派训话语气。",
    usage: "你抢我最后一口蛋糕，耗子尾汁。",
    origin: "武术相关视频片段被二创后流行。",
  },
  {
    name: "年轻人不讲武德",
    category: "短视频",
    source: "武术视频/鬼畜",
    heat: 73,
    updated: "2026-05-17",
    aliases: ["不讲武德", "偷袭", "马保国"],
    summary: "调侃对方不按套路、偷袭或不守规矩。",
    meaning:
      "常用于游戏、争论、工作协作里吐槽对方突然来一手。",
    usage: "你临下班发需求，年轻人不讲武德。",
    origin: "武术视频片段和鬼畜二创传播。",
  },
  {
    name: "淡黄的长裙",
    category: "影视综艺",
    source: "综艺/选秀",
    heat: 71,
    updated: "2026-05-17",
    aliases: ["蓬松的头发", "reader", "说唱梗"],
    summary: "选秀节目片段中的歌词梗，常用于魔性复读。",
    meaning:
      "多用于回忆名场面、调侃朗读式说唱或制造洗脑效果。",
    usage: "一看到这个配色，我脑子里全是淡黄的长裙。",
    origin: "综艺选秀片段经二创传播。",
  },
  {
    name: "雨女无瓜",
    category: "影视综艺",
    source: "影视口音/二创",
    heat: 70,
    updated: "2026-05-17",
    aliases: ["与你无关", "游乐王子", "口音梗"],
    summary: "“与你无关”的口音谐音写法。",
    meaning:
      "常用于故作冷漠或调侃口音名场面。",
    usage: "我今天点几杯奶茶，雨女无瓜。",
    origin: "影视片段口音被二创后流行。",
  },
  {
    name: "我不要你觉得我要我觉得",
    category: "影视综艺",
    source: "综艺名场面",
    heat: 76,
    updated: "2026-05-17",
    aliases: ["明学", "我觉得", "霸总语录"],
    summary: "表达强势拍板、不听别人意见。",
    meaning:
      "常用于调侃过度强势的决策方式，也可自嘲自己突然霸道。",
    usage: "这版封面就用红色，我不要你觉得我要我觉得。",
    origin: "综艺节目片段经网友二创形成“明学”。",
  },
  {
    name: "凡尔赛",
    category: "生活表达",
    source: "社交平台",
    heat: 78,
    updated: "2026-05-17",
    aliases: ["凡尔赛文学", "低调炫耀", "凡学"],
    summary: "用抱怨或轻描淡写的方式炫耀。",
    meaning:
      "常用于识别朋友圈、评论区里的隐性炫耀。",
    usage: "他说奖金太多不知道怎么花，太凡尔赛了。",
    origin: "社交平台对低调炫耀文风的命名。",
  },
  {
    name: "凡尔赛文学",
    category: "生活表达",
    source: "微博/朋友圈",
    heat: 77,
    updated: "2026-05-17",
    aliases: ["凡学", "低调炫耀", "凡尔赛"],
    summary: "一种先抑后扬、明贬暗夸的写法。",
    meaning:
      "典型写法是表面抱怨，实则展示优越条件。",
    usage: "每天被老板夸到不好意思，烦死了。这就是凡尔赛文学。",
    origin: "社交平台对特定炫耀文体的概括。",
  },
  {
    name: "内卷",
    category: "生活表达",
    source: "学术词/社交平台",
    heat: 83,
    updated: "2026-05-17",
    aliases: ["卷", "太卷了", "卷王"],
    summary: "形容竞争加剧但整体收益没有明显提升。",
    meaning:
      "从学术概念进入大众语境后，常用于学习、职场、行业竞争。",
    usage: "大家都把 PPT 做成动画电影了，太内卷了。",
    origin: "社会学概念经高校和社交平台传播。",
  },
  {
    name: "躺平",
    category: "生活表达",
    source: "贴吧/社交平台",
    heat: 82,
    updated: "2026-05-17",
    aliases: ["摆烂", "不卷了", "躺"],
    summary: "选择降低欲望和竞争，暂时不再拼命追逐。",
    meaning:
      "既可以是生活态度讨论，也可以是日常自嘲，比如太累了先躺平。",
    usage: "今天不想卷了，先躺平。",
    origin: "贴吧帖子和社交平台讨论扩散。",
  },
  {
    name: "摆烂",
    category: "生活表达",
    source: "体育/社交平台",
    heat: 81,
    updated: "2026-05-17",
    aliases: ["破罐破摔", "不想努力", "开摆"],
    summary: "明知可以努力但选择放弃挣扎。",
    meaning:
      "常用于压力太大时的自嘲，也可能批评不负责任的态度。",
    usage: "复习不完了，今晚先摆烂。",
    origin: "体育语境和社交平台共同推动。",
  }
);

const platforms = [
  ["百度", "https://www.baidu.com/s?wd="],
  ["微博", "https://s.weibo.com/weibo?q="],
  ["B站", "https://search.bilibili.com/all?keyword="],
  ["小红书", "https://www.xiaohongshu.com/search_result?keyword="],
  ["抖音", "https://www.douyin.com/search/"],
];

function readSavedMemes() {
  try {
    return JSON.parse(localStorage.getItem("savedMemes") || "[]");
  } catch {
    return [];
  }
}

function writeSavedMemes(savedMemes) {
  try {
    localStorage.setItem("savedMemes", JSON.stringify(savedMemes));
  } catch {
    showToast("当前浏览器不支持本地收藏保存");
  }
}

function getInitialKeyword() {
  const params = new URLSearchParams(window.location.search);
  return params.get("keyword") || "";
}

const state = {
  keyword: getInitialKeyword(),
  filter: "all",
  sort: "heat",
  selected: memes[0].name,
  saved: new Set(readSavedMemes()),
};

const els = {
  form: document.querySelector("#searchForm"),
  input: document.querySelector("#searchInput"),
  resultList: document.querySelector("#resultList"),
  rankList: document.querySelector("#rankList"),
  detailCard: document.querySelector("#detailCard"),
  resultCount: document.querySelector("#resultCount"),
  resultsTitle: document.querySelector("#resultsTitle"),
  sortSelect: document.querySelector("#sortSelect"),
  emptyState: document.querySelector("#emptyState"),
  emptyLiveLinks: document.querySelector("#emptyLiveLinks"),
  refreshBtn: document.querySelector("#refreshBtn"),
  template: document.querySelector("#memeCardTemplate"),
};

function normalize(text) {
  return text.trim().toLowerCase().replace(/\s+/g, "");
}

function getSearchText(meme) {
  return [
    meme.name,
    meme.category,
    meme.source,
    meme.summary,
    meme.meaning,
    meme.usage,
    meme.origin,
    ...meme.aliases,
  ]
    .join("")
    .toLowerCase();
}

function isCloseMatch(text, keyword) {
  if (keyword.length < 2) return false;
  const keywordChars = [...new Set(keyword)];
  const hits = keywordChars.filter((char) => text.includes(char)).length;
  const score = hits / keywordChars.length;
  return score >= 0.72 || (keyword.length >= 4 && hits >= keyword.length - 1);
}

function matchesKeyword(meme, keyword) {
  if (!keyword) return true;
  const haystack = getSearchText(meme);
  return haystack.includes(keyword) || isCloseMatch(haystack, keyword);
}

function getFilteredMemes() {
  const keyword = normalize(state.keyword);
  const filtered = memes.filter((meme) => {
    const categoryOk = state.filter === "all" || meme.category === state.filter;
    return categoryOk && matchesKeyword(meme, keyword);
  });

  return filtered.sort((a, b) => {
    if (state.sort === "new") return b.updated.localeCompare(a.updated);
    if (state.sort === "name") return a.name.localeCompare(b.name, "zh-Hans-CN");
    return b.heat - a.heat;
  });
}

function createLiveSearchMeme(keyword) {
  const cleanKeyword = keyword.trim();
  return {
    name: cleanKeyword,
    category: "全网即搜",
    source: "百度/微博/B站/小红书/抖音",
    heat: 0,
    updated: "实时查询",
    aliases: [cleanKeyword],
    summary: "本地精编词库暂时没收录这个词，已为你生成全网搜索入口。",
    meaning:
      "这个结果不是本地解释词条，而是一个实时查询入口。点击右侧平台按钮，可以直接去主流平台看它的出处、用法、视频和评论区语境。",
    usage: `去各平台搜索“${cleanKeyword}”，优先看发布时间较早、互动较高、评论区复读多的内容。`,
    origin: "等待补充到本地精编词库。",
    isLiveSearch: true,
  };
}

function getDisplayResults() {
  const list = getFilteredMemes();
  if (list.length > 0 || !state.keyword.trim()) return list;
  return [createLiveSearchMeme(state.keyword)];
}

function syncSearchUrl() {
  const url = new URL(window.location.href);
  if (state.keyword) {
    url.searchParams.set("keyword", state.keyword);
  } else {
    url.searchParams.delete("keyword");
  }
  window.history.replaceState({}, "", url);
}

function createLiveLinks(keyword, includePrimary = false) {
  const query = encodeURIComponent(keyword || "网络热梗");
  const fragment = document.createDocumentFragment();

  platforms.forEach(([label, base], index) => {
    const link = document.createElement("a");
    link.className = `detail-action ${includePrimary && index === 0 ? "primary" : ""}`;
    link.href = `${base}${query}`;
    link.target = "_self";
    link.textContent = `${label}搜`;
    fragment.append(link);
  });

  return fragment;
}

function renderRanks() {
  els.rankList.innerHTML = "";
  const topMemes = [...memes].sort((a, b) => b.heat - a.heat).slice(0, 8);
  topMemes.forEach((meme, index) => {
    const item = document.createElement("li");
    item.className = "rank-item";
    item.innerHTML = `
      <span class="rank-number">${index + 1}</span>
      <button type="button" class="rank-button" data-name="${meme.name}">
        <p class="rank-name">${meme.name}</p>
        <p class="rank-heat">热度 ${meme.heat} · ${meme.source}</p>
      </button>
    `;
    els.rankList.append(item);
  });
}

function renderResults() {
  const curatedList = getFilteredMemes();
  const list = getDisplayResults();
  if (list.length > 0 && !list.some((meme) => meme.name === state.selected)) {
    state.selected = list[0].name;
  }
  els.resultList.innerHTML = "";
  els.resultCount.textContent = state.keyword
    ? `精编 ${curatedList.length} 条`
    : `精编 ${memes.length} 条`;
  els.resultsTitle.textContent = state.keyword ? `“${state.keyword}”的搜索结果` : "推荐热梗";

  els.emptyState.classList.toggle("hidden", true);
  els.emptyLiveLinks.innerHTML = "";

  list.forEach((meme) => {
    const card = els.template.content.firstElementChild.cloneNode(true);
    card.dataset.name = meme.name;
    card.classList.toggle("live-search-card", Boolean(meme.isLiveSearch));
    card.classList.toggle("selected", meme.name === state.selected);
    card.querySelector(".tag").textContent = meme.category;
    card.querySelector("h3").textContent = meme.name;
    card.querySelector(".summary").textContent = meme.summary;
    card.querySelector(".heat").innerHTML = meme.isLiveSearch
      ? "<strong>实时入口</strong>"
      : `热度 <strong>${meme.heat}</strong>`;
    card.querySelector(".source").textContent = meme.source;

    if (meme.isLiveSearch) {
      const liveLinks = document.createElement("div");
      liveLinks.className = "live-links card-live-links";
      liveLinks.append(createLiveLinks(meme.name, true));
      liveLinks.addEventListener("click", (event) => {
        event.stopPropagation();
      });
      card.querySelector(".summary").after(liveLinks);
    }

    const saveButton = card.querySelector(".save-button");
    if (meme.isLiveSearch) {
      saveButton.textContent = "待收录";
      saveButton.disabled = true;
    } else {
      saveButton.textContent = state.saved.has(meme.name) ? "已收藏" : "收藏";
      saveButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleSave(meme.name);
      });
    }

    card.addEventListener("click", () => {
      state.selected = meme.name;
      renderDetail(meme);
      renderResults();
    });

    els.resultList.append(card);
  });

  const selectedMeme = list.find((meme) => meme.name === state.selected) || list[0];
  if (selectedMeme) renderDetail(selectedMeme);
}

function renderDetail(meme) {
  els.detailCard.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = meme.name;

  const category = document.createElement("p");
  category.className = "eyebrow";
  category.textContent = `${meme.category} · 热度 ${meme.heat}`;

  const meaning = document.createElement("p");
  meaning.className = "meaning";
  meaning.textContent = meme.meaning;

  const detailList = document.createElement("dl");
  detailList.className = "detail-list";
  detailList.innerHTML = `
    <div><dt>常见说法</dt><dd>${meme.aliases.join(" / ")}</dd></div>
    <div><dt>使用示例</dt><dd>${meme.usage}</dd></div>
    <div><dt>出处线索</dt><dd>${meme.origin}</dd></div>
    <div><dt>更新时间</dt><dd>${meme.updated}</dd></div>
  `;

  const actionRow = document.createElement("div");
  actionRow.className = "live-links";
  actionRow.append(createLiveLinks(meme.name, true));

  const copyButton = document.createElement("button");
  copyButton.className = "detail-action";
  copyButton.type = "button";
  copyButton.textContent = "复制解释";
  copyButton.addEventListener("click", () => {
    const text = `${meme.name}：${meme.summary}\n含义：${meme.meaning}\n例句：${meme.usage}`;
    navigator.clipboard
      .writeText(text)
      .then(() => showToast("已复制热梗解释"))
      .catch(() => showToast("浏览器不允许复制，请手动选择文字"));
  });
  actionRow.append(copyButton);

  els.detailCard.append(category, title, meaning, detailList, actionRow);
}

function toggleSave(name) {
  if (state.saved.has(name)) {
    state.saved.delete(name);
    showToast("已取消收藏");
  } else {
    state.saved.add(name);
    showToast("已加入收藏");
  }
  writeSavedMemes([...state.saved]);
  renderResults();
}

function showToast(message) {
  const oldToast = document.querySelector(".toast");
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 1800);
}

function wireEvents() {
  els.form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    state.keyword = els.input.value.trim();
    syncSearchUrl();
    renderResults();
  });

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".filter-chip.active").classList.remove("active");
      button.classList.add("active");
      state.filter = button.dataset.filter;
      renderResults();
    });
  });

  els.sortSelect.addEventListener("change", () => {
    state.sort = els.sortSelect.value;
    renderResults();
  });

  els.rankList.addEventListener("click", (event) => {
    const button = event.target.closest(".rank-button");
    if (!button) return;
    state.selected = button.dataset.name;
    state.keyword = button.dataset.name;
    els.input.value = button.dataset.name;
    syncSearchUrl();
    renderResults();
  });

  els.refreshBtn.addEventListener("click", () => {
    memes.forEach((meme) => {
      const shift = Math.floor(Math.random() * 9) - 3;
      meme.heat = Math.max(50, Math.min(100, meme.heat + shift));
    });
    renderRanks();
    renderResults();
    showToast("热度已模拟刷新");
  });
}

els.input.value = state.keyword;
syncSearchUrl();
wireEvents();
renderRanks();
renderResults();
