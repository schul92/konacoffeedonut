'use client';

import { motion } from 'framer-motion';
import { Coffee, Droplets, Flame, MapPin, Star, ThumbsUp, HelpCircle, ChevronRight, Award, Bean } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import SubpageNav from '@/components/SubpageNav';

// Primary target: Chinese search queries with 4,500+ monthly impressions
// 夏威夷科纳咖啡风味 (1,502 imp), 夏威夷科纳咖啡 介绍 (1,501 imp),
// 夏威夷科纳适合冲美式吗 (1,529 imp), 夏威夷科纳咖啡 (27 imp), 夏威夷咖啡 (9 imp)
const content = {
  zh: {
    hero: {
      title: '夏威夷科纳咖啡完全指南：风味、冲泡与品鉴',
      subtitle: '深度解析科纳咖啡的产地故事、风味特征、冲泡方法，以及为什么科纳是冲美式的完美选择',
      breadcrumb: '博客',
      breadcrumbCurrent: '科纳咖啡指南',
    },
    intro: {
      title: '夏威夷科纳咖啡介绍：世界上最珍贵的咖啡之一',
      paragraphs: [
        '夏威夷科纳咖啡（Hawaii Kona Coffee）是全球公认的顶级精品咖啡之一，产自夏威夷大岛西海岸的科纳地区（Kona District）。这片狭长的咖啡种植带仅约48公里长、3公里宽，位于莫纳罗亚火山（Mauna Loa）和华拉莱火山（Hualalai）的西坡上，海拔500至900米之间。',
        '科纳咖啡的种植历史可追溯至1828年，由传教士塞缪尔·拉格尔斯（Samuel Ruggles）从巴西引入第一批咖啡树苗。将近两百年来，科纳地区独特的火山土壤、温和的热带气候和稳定的午后云层为咖啡豆的生长提供了无与伦比的天然条件。这里的土壤富含矿物质，排水性极佳；每天午后飘来的云雾为咖啡树提供天然遮荫；年降雨量适中，温度从不降至冰点——这一切自然因素的完美组合，在全世界绝无仅有。',
        '如今，科纳地区约有800家小型咖啡农场，大多数面积不超过5英亩。全球科纳咖啡的总产量不到世界咖啡产量的1%，极其稀有。每颗咖啡果实都由经验丰富的采摘工人手工采摘，只在最佳成熟度时摘取，确保每一粒咖啡豆都达到最高品质。夏威夷州农业部对科纳咖啡实施严格的分级标准——只有在科纳地区种植、采收和加工的咖啡豆，才能标注"100% Kona Coffee"。',
        '正是这些因素——独一无二的产地环境、手工采摘的匠心工艺、严格的品质管控——使夏威夷科纳咖啡成为全世界咖啡爱好者心目中的"液体黄金"。如果您正在寻找一杯与众不同的咖啡体验，科纳咖啡绝对值得尝试。',
      ],
    },
    flavor: {
      title: '夏威夷科纳咖啡风味：详细品鉴笔记',
      intro: '科纳咖啡最让人着迷的，是其独特而复杂的风味层次。与一般的商业咖啡不同，100%科纳咖啡呈现出一种优雅、平衡、令人愉悦的口感——这得益于火山土壤中丰富的矿物质和理想的生长环境。以下是科纳咖啡的详细风味解析：',
      notes: [
        {
          name: '黑糖 / 红糖甜感',
          description: '科纳咖啡最显著的特征之一是天然的甜感。入口时，您会感受到类似黑糖或红糖的温暖甜味，不是人工添加的甜度，而是咖啡豆本身的自然风味。这种甜感贯穿整个品饮过程，使科纳咖啡即使不加糖也非常好喝。',
        },
        {
          name: '巧克力',
          description: '中等烘焙的科纳咖啡会展现出明显的巧克力风味——类似于纯度70%的黑巧克力，带有一丝苦味的优雅。深度烘焙时，这种巧克力味会变得更加浓郁，接近可可或巧克力蛋糕的口感。这也是为什么很多人形容科纳咖啡为"像在喝巧克力"。',
        },
        {
          name: '坚果',
          description: '科纳咖啡中常常能品尝到烤杏仁、榛子或澳洲坚果的风味。这种坚果味与黑糖和巧克力交织在一起，形成一种温暖、饱满的口感，让人联想到秋冬季节的温馨感觉。',
        },
        {
          name: '低酸度',
          description: '这是科纳咖啡最大的优势之一。与非洲或中美洲的高酸度咖啡不同，科纳咖啡的酸度极低，口感非常顺滑、柔和。对于胃比较敏感的人来说，科纳咖啡是极佳的选择——它不会像某些咖啡那样造成胃部不适。',
        },
        {
          name: '花香与水果',
          description: '浅烘焙的科纳咖啡会展现出精致的花香和热带水果风味。有些批次会带有茉莉花、蜂蜜或芒果的香气，这些风味在冷却后更加明显。这种复杂的香气是优质单一产区咖啡的标志。',
        },
        {
          name: '丝滑口感与长余韵',
          description: '科纳咖啡的body（醇厚度）属于中等偏上，入口如丝绸般顺滑。余韵绵长而干净，嘴里会留下巧克力和甜感的美好回味，持续数分钟之久。这种"干净"的余韵是区分优质科纳与普通咖啡的关键。',
        },
      ],
      comparisonTitle: '科纳咖啡 vs 其他产区咖啡风味对比',
      comparisonHeaders: ['风味特征', '科纳咖啡', '埃塞俄比亚', '哥伦比亚', '巴西'],
      comparisonRows: [
        ['甜度', '★★★★★ 黑糖', '★★★ 蜂蜜', '★★★★ 焦糖', '★★★★ 巧克力'],
        ['酸度', '★★ 极低', '★★★★★ 高', '★★★★ 中高', '★★★ 中低'],
        ['醇厚度', '★★★★ 中高', '★★★ 中等', '★★★★ 中高', '★★★★★ 厚重'],
        ['巧克力味', '★★★★★ 突出', '★★ 微弱', '★★★ 中等', '★★★★ 明显'],
        ['坚果味', '★★★★★ 丰富', '★★ 少', '★★★ 中等', '★★★★ 明显'],
        ['花果香', '★★★ 细腻', '★★★★★ 浓郁', '★★★ 中等', '★★ 较少'],
        ['顺滑度', '★★★★★ 极佳', '★★★ 中等', '★★★★ 良好', '★★★★ 良好'],
      ],
    },
    americano: {
      title: '科纳适合冲美式吗？完全适合！',
      boldAnswer: '答案是：非常适合！科纳咖啡可能是世界上最适合做美式咖啡（Americano）的咖啡豆之一。',
      paragraphs: [
        '很多咖啡爱好者会问"夏威夷科纳适合冲美式吗"——这是一个很好的问题。美式咖啡（Americano）是将浓缩咖啡（Espresso）加热水稀释而成，这种冲泡方式对咖啡豆的品质要求极高，因为热水稀释后，咖啡的风味会被放大，优点和缺点都会更加明显。',
        '科纳咖啡之所以特别适合冲美式，有以下几个关键原因：',
      ],
      reasons: [
        {
          title: '低酸度 = 顺滑不刺激',
          text: '科纳咖啡天然的低酸度，使得美式咖啡口感格外顺滑。即使加了大量热水稀释，也不会出现尖锐的酸味。很多商业咖啡冲成美式后会变得又酸又薄，但科纳完全不会。',
        },
        {
          title: '天然甜感 = 不加糖也好喝',
          text: '科纳咖啡自带的黑糖甜感，在美式中依然保留。很多客人在我们店里第一次尝试纯黑科纳美式后，都惊讶于"不加糖居然这么好喝"。这是科纳咖啡豆品质的最佳证明。',
        },
        {
          title: '中等醇厚度 = 口感均衡',
          text: '科纳咖啡的body恰到好处——不像深烘意式豆那么厚重，也不像浅烘非洲豆那么单薄。冲成美式后，口感饱满而不腻，非常适合日常饮用。',
        },
        {
          title: '干净的余韵 = 回味悠长',
          text: '好的美式咖啡应该有一个干净、持久的余韵。科纳咖啡在这方面表现极佳——喝完之后嘴里留下的是巧克力和坚果的愉悦回味，而不是苦涩或杂味。',
        },
      ],
      recommendation: '我们的推荐：中等烘焙（Medium Roast）的100%科纳咖啡豆，用双份浓缩（Double Shot）加180ml热水，就能做出一杯完美的科纳美式。水温建议92-96°C，不要用沸水直接冲——稍微降温能更好地展现科纳的甜感和巧克力风味。',
    },
    brewing: {
      title: '科纳咖啡冲泡方法完全指南',
      subtitle: '除了美式咖啡，科纳咖啡还适合多种冲泡方式。以下是详细的冲泡建议：',
      methods: [
        {
          name: '手冲咖啡（Pour-Over / 滴滤）',
          icon: 'pourover',
          params: '研磨度：中细 | 水温：90-93°C | 比例：1:15 | 时间：2.5-3分钟',
          description: '手冲是品鉴科纳咖啡风味的最佳方式之一。使用V60或Kalita Wave滤杯，中细研磨，先用少量热水闷蒸30秒，然后缓慢画圈注水。手冲能够充分展现科纳咖啡的花果香和巧克力甜感，尤其推荐浅至中度烘焙的科纳豆。手冲出来的科纳咖啡，层次感丰富，每一口都能感受到风味的变化。',
        },
        {
          name: '法压壶（French Press）',
          icon: 'frenchpress',
          params: '研磨度：粗 | 水温：93-96°C | 比例：1:12 | 时间：4分钟',
          description: '法压壶冲泡的科纳咖啡醇厚度最高，能充分提取出坚果和巧克力的深层风味。使用粗研磨，加入热水后搅拌一次，盖上盖子浸泡4分钟后下压。法压壶保留了咖啡油脂，使得口感更加饱满圆润。如果您喜欢浓郁、有分量的咖啡口感，法压壶是绝佳选择。搭配中深度烘焙的科纳豆效果最佳。',
        },
        {
          name: '冷萃咖啡（Cold Brew）',
          icon: 'coldbrew',
          params: '研磨度：粗 | 水温：常温水 | 比例：1:8 | 时间：12-18小时',
          description: '科纳咖啡做冷萃堪称绝配。低温长时间萃取最大化地展现了科纳的甜感和顺滑度，同时几乎完全消除酸度和苦味。将粗研磨的科纳咖啡粉放入冷水中，冷藏12-18小时后过滤即可。冷萃科纳浓缩液可加水、加冰或加牛奶饮用，夏威夷的炎热天气里，一杯冰冷萃科纳咖啡简直是天堂般的享受。',
        },
        {
          name: '浓缩咖啡（Espresso）',
          icon: 'espresso',
          params: '研磨度：极细 | 水温：92-95°C | 比例：1:2 | 时间：25-30秒',
          description: '使用科纳咖啡制作浓缩咖啡，能得到一杯crema丰厚、口感丝滑的Espresso。科纳的低酸度特性使浓缩咖啡不会过于尖锐，而天然甜感则平衡了浓缩咖啡的苦味。无论是纯饮还是做成拿铁、卡布奇诺，科纳都表现出色。这也是我们店内使用100%科纳豆的原因。',
        },
      ],
    },
    whereToBuy: {
      title: '在威基基哪里能喝到正宗科纳咖啡',
      paragraphs: [
        '在夏威夷旅游时，想要品尝正宗的100%科纳咖啡，最重要的是辨别真假。市面上有大量标注"Kona Blend"的咖啡，实际上只含10%的科纳咖啡豆，其余90%是廉价进口豆。请务必寻找标注"100% Kona Coffee"的产品。',
        '如果您在威基基（Waikiki），欢迎来到 Kona Coffee Donut——我们只使用100%正宗科纳咖啡豆，从大岛科纳地区的农场直接采购。我们的咖啡师精心烘焙和萃取每一杯咖啡，无论您想要美式、手冲、拿铁还是冷萃，都能在这里品尝到科纳咖啡最真实的味道。',
      ],
      shopInfo: {
        name: 'Kona Coffee Donut',
        address: '2142 Kalakaua Ave, Waikiki, Honolulu, HI 96815',
        highlight: '100%正宗科纳咖啡 | 新鲜麻糬甜甜圈 | 威基基海滩步行可达',
        cta: '查看菜单',
      },
    },
    faq: {
      title: '常见问题',
      items: [
        {
          question: '夏威夷科纳咖啡为什么这么贵？',
          answer: '科纳咖啡之所以价格较高，有几个重要原因：第一，产量极其有限，全球科纳咖啡产量不到世界咖啡总产量的1%；第二，全部采用手工采摘，人工成本高；第三，夏威夷的生活成本和劳动力成本远高于其他咖啡产区；第四，夏威夷州对科纳咖啡有严格的品质分级标准。一磅100%科纳咖啡通常价格在30-50美元之间。',
        },
        {
          question: '科纳咖啡和"科纳混合"（Kona Blend）有什么区别？',
          answer: '这是最重要的区别！100%科纳咖啡意味着每一粒豆子都来自科纳产区。而"科纳混合"根据夏威夷法律，只需要含有最低10%的科纳豆，其余90%可以是任何来源的廉价咖啡。所以购买时一定要认准"100% Kona Coffee"的标识。',
        },
        {
          question: '科纳咖啡的最佳冲泡方式是什么？',
          answer: '科纳咖啡适合多种冲泡方式。美式咖啡（Americano）能展现科纳的顺滑低酸特点；手冲（Pour-Over）最适合品鉴其细腻的花果香和巧克力风味；法压壶（French Press）能最大化其醇厚度和坚果味；冷萃（Cold Brew）则将科纳的天然甜感发挥到极致。建议使用中等烘焙的科纳豆，水温控制在90-96°C之间。',
        },
        {
          question: '科纳咖啡适合胃不好的人喝吗？',
          answer: '科纳咖啡是胃敏感人群的极佳选择。科纳咖啡的酸度极低（pH值约5.0-5.1），远低于非洲或中美洲咖啡。这意味着它对胃的刺激更小，不容易引起胃酸反流或胃部不适。配合冷萃方式饮用，酸度可以进一步降低。',
        },
        {
          question: '在威基基哪里能买到或喝到正宗科纳咖啡？',
          answer: '在威基基，Kona Coffee Donut（2142 Kalakaua Ave）提供100%正宗科纳咖啡，从大岛科纳地区的农场直接采购。我们提供美式、手冲、浓缩、拿铁、冷萃等多种冲泡方式，同时还有新鲜的麻糬甜甜圈和马拉萨达搭配。步行即可从威基基海滩到达。',
        },
      ],
    },
    cta: {
      title: '来威基基品尝正宗科纳咖啡',
      text: '在Kona Coffee Donut，我们只使用100%纯正科纳咖啡。无论您想尝试美式、手冲还是拿铁，都能在这里找到最地道的夏威夷咖啡体验。',
      button: '查看菜单',
      directions: '获取路线',
    },
  },
  en: {
    hero: {
      title: 'Hawaii Kona Coffee Complete Guide: Flavor, Brewing & Tasting',
      subtitle: 'An in-depth look at Kona coffee origin, flavor profile, brewing methods, and why it makes the perfect Americano',
      breadcrumb: 'Blog',
      breadcrumbCurrent: 'Kona Coffee Chinese Guide',
    },
    intro: {
      title: 'Introduction to Hawaii Kona Coffee: One of the World\'s Most Precious Coffees',
      paragraphs: [
        'Hawaii Kona Coffee is one of the world\'s most celebrated specialty coffees, grown exclusively on the western coast of Hawaii\'s Big Island in the Kona District. This narrow coffee belt spans just 30 miles long and 2 miles wide, situated on the slopes of Mauna Loa and Hualalai volcanoes at elevations between 500 and 900 meters.',
        'Kona coffee cultivation dates back to 1828. Nearly two centuries of growing in unique volcanic soil, mild tropical climate, and consistent afternoon cloud cover have created ideal conditions found nowhere else on Earth. The soil is rich in minerals with excellent drainage; afternoon clouds provide natural shade; moderate rainfall and frost-free temperatures complete this perfect combination.',
        'Today, approximately 800 small farms produce the entire world\'s supply of genuine Kona coffee — less than 1% of global production. Every cherry is hand-picked at peak ripeness, and Hawaii\'s Department of Agriculture enforces strict grading standards.',
        'These factors — unique terroir, artisanal harvesting, and rigorous quality control — make Kona coffee the "liquid gold" of the coffee world.',
      ],
    },
    flavor: {
      title: 'Kona Coffee Flavor Profile: Detailed Tasting Notes',
      intro: 'What makes Kona coffee captivating is its unique and complex flavor layers. Unlike commercial coffee, 100% Kona presents an elegant, balanced, and delightful taste — thanks to the mineral-rich volcanic soil and ideal growing conditions.',
      notes: [
        { name: 'Brown Sugar Sweetness', description: 'Natural sweetness reminiscent of brown sugar or muscovado, present from first sip to finish.' },
        { name: 'Chocolate', description: 'Medium roast reveals 70% dark chocolate notes; deeper roasts bring cocoa and chocolate cake flavors.' },
        { name: 'Nuts', description: 'Roasted almond, hazelnut, and macadamia flavors interweave with the sweetness.' },
        { name: 'Low Acidity', description: 'One of Kona\'s greatest advantages — exceptionally smooth and gentle on the stomach.' },
        { name: 'Floral & Fruit', description: 'Light roasts show delicate jasmine, honey, and tropical fruit aromatics.' },
        { name: 'Silky Body & Long Finish', description: 'Medium-full body with a clean, chocolate-sweet aftertaste that lingers.' },
      ],
      comparisonTitle: 'Kona vs Other Origins: Flavor Comparison',
      comparisonHeaders: ['Characteristic', 'Kona', 'Ethiopia', 'Colombia', 'Brazil'],
      comparisonRows: [
        ['Sweetness', '★★★★★', '★★★', '★★★★', '★★★★'],
        ['Acidity', '★★ Low', '★★★★★ High', '★★★★ Med-High', '★★★ Med-Low'],
        ['Body', '★★★★ Med-Full', '★★★ Medium', '★★★★ Med-Full', '★★★★★ Full'],
        ['Chocolate', '★★★★★', '★★', '★★★', '★★★★'],
        ['Nuttiness', '★★★★★', '★★', '★★★', '★★★★'],
        ['Floral/Fruit', '★★★', '★★★★★', '★★★', '★★'],
        ['Smoothness', '★★★★★', '★★★', '★★★★', '★★★★'],
      ],
    },
    americano: {
      title: 'Is Kona Good for Americano? Absolutely!',
      boldAnswer: 'The answer is: YES! Kona coffee is one of the best beans in the world for making Americano.',
      paragraphs: [
        'Americano — espresso diluted with hot water — demands high-quality beans because dilution amplifies both strengths and weaknesses.',
        'Here\'s why Kona excels:',
      ],
      reasons: [
        { title: 'Low Acidity = Smooth & Gentle', text: 'Kona\'s naturally low acidity keeps the Americano silky smooth even after dilution.' },
        { title: 'Natural Sweetness = No Sugar Needed', text: 'The inherent brown sugar sweetness persists, making black Americano surprisingly enjoyable.' },
        { title: 'Medium Body = Balanced Mouthfeel', text: 'Neither too heavy nor too thin — perfectly suited for daily drinking.' },
        { title: 'Clean Finish = Lingering Pleasure', text: 'A chocolate-and-nut aftertaste rather than bitterness or off-flavors.' },
      ],
      recommendation: 'Our recommendation: Medium roast 100% Kona, double shot + 180ml hot water at 92-96°C.',
    },
    brewing: {
      title: 'Kona Coffee Brewing Methods Guide',
      subtitle: 'Beyond Americano, Kona coffee shines with multiple brewing methods:',
      methods: [
        { name: 'Pour-Over', icon: 'pourover', params: 'Grind: Medium-Fine | Temp: 90-93°C | Ratio: 1:15 | Time: 2.5-3 min', description: 'Pour-over best showcases Kona\'s delicate floral and chocolate notes. Use V60 or Kalita Wave with a 30-second bloom.' },
        { name: 'French Press', icon: 'frenchpress', params: 'Grind: Coarse | Temp: 93-96°C | Ratio: 1:12 | Time: 4 min', description: 'French press maximizes body and nut/chocolate depth. The oils preserved create a fuller, rounder mouthfeel.' },
        { name: 'Cold Brew', icon: 'coldbrew', params: 'Grind: Coarse | Temp: Room temp | Ratio: 1:8 | Time: 12-18 hrs', description: 'Cold brew and Kona are a match made in heaven. Low-temp extraction maximizes sweetness while nearly eliminating acidity.' },
        { name: 'Espresso', icon: 'espresso', params: 'Grind: Very Fine | Temp: 92-95°C | Ratio: 1:2 | Time: 25-30 sec', description: 'Kona espresso produces rich crema with silky body. Low acidity means a smooth, balanced shot perfect for lattes too.' },
      ],
    },
    whereToBuy: {
      title: 'Where to Try Authentic Kona Coffee in Waikiki',
      paragraphs: [
        'When visiting Hawaii, the key is identifying real Kona coffee. Many products labeled "Kona Blend" contain only 10% Kona beans. Always look for "100% Kona Coffee."',
        'If you\'re in Waikiki, visit Kona Coffee Donut — we use exclusively 100% Kona beans sourced directly from Big Island farms.',
      ],
      shopInfo: {
        name: 'Kona Coffee Donut',
        address: '2142 Kalakaua Ave, Waikiki, Honolulu, HI 96815',
        highlight: '100% Authentic Kona Coffee | Fresh Mochi Donuts | Walking distance from Waikiki Beach',
        cta: 'View Menu',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { question: 'Why is Kona coffee so expensive?', answer: 'Limited supply (less than 1% of global production), hand-picking, Hawaii labor costs, and strict quality grading. Expect $30-50 per pound for 100% Kona.' },
        { question: 'What\'s the difference between 100% Kona and Kona Blend?', answer: '100% Kona means every bean is from the Kona District. "Kona Blend" may contain as little as 10% Kona beans with 90% cheap imports.' },
        { question: 'What\'s the best brewing method for Kona?', answer: 'Americano for smoothness, pour-over for tasting notes, French press for body, cold brew for sweetness. Medium roast at 90-96°C.' },
        { question: 'Is Kona coffee good for sensitive stomachs?', answer: 'Yes! Kona\'s very low acidity (pH ~5.0-5.1) makes it much gentler on the stomach than African or Central American coffees.' },
        { question: 'Where can I try real Kona coffee in Waikiki?', answer: 'Kona Coffee Donut at 2142 Kalakaua Ave serves 100% Kona coffee in Americano, pour-over, latte, and cold brew styles.' },
      ],
    },
    cta: {
      title: 'Try Authentic Kona Coffee in Waikiki',
      text: 'At Kona Coffee Donut, we serve only 100% genuine Kona coffee. Whether you prefer Americano, pour-over, or latte, experience Hawaii\'s finest.',
      button: 'View Menu',
      directions: 'Get Directions',
    },
  },
  ja: {
    hero: {
      title: 'ハワイ コナコーヒー完全ガイド：風味・淹れ方・味わい方',
      subtitle: 'コナコーヒーの産地、フレーバープロファイル、抽出方法を徹底解説。アメリカーノに最適な理由も',
      breadcrumb: 'ブログ',
      breadcrumbCurrent: 'コナコーヒーガイド',
    },
    intro: {
      title: 'ハワイ コナコーヒー紹介：世界で最も希少なコーヒーの一つ',
      paragraphs: [
        'ハワイ コナコーヒーは世界最高級のスペシャルティコーヒーの一つで、ハワイ島西海岸のコナ地区でのみ栽培されています。この狭い栽培エリアは約48km×3kmの帯状で、マウナロアとフアラライ火山の斜面、標高500〜900mに位置します。',
        '1828年から栽培が始まり、約200年にわたり、独特の火山性土壌、温暖な熱帯気候、午後の雲がもたらす天然の日陰という、世界でここだけの理想的な条件でコーヒーが育てられてきました。',
        '現在約800の小規模農園が世界のコナコーヒー全量を生産しており、世界のコーヒー生産量の1%未満です。すべて手摘みで、ハワイ州農業局が厳格な等級基準を設けています。',
        'これらの要素が、コナコーヒーをコーヒー愛好家の間で「液体の金」たらしめています。',
      ],
    },
    flavor: {
      title: 'コナコーヒーの風味：詳細テイスティングノート',
      intro: 'コナコーヒーの魅力は、その独特で複雑なフレーバーレイヤーにあります。火山性土壌のミネラルと理想的な栽培環境が、エレガントでバランスの取れた味わいを生み出します。',
      notes: [
        { name: '黒糖の甘み', description: '黒糖やきび砂糖を思わせる自然な甘さが、最初の一口から最後まで続きます。' },
        { name: 'チョコレート', description: 'ミディアムローストでダークチョコレート、深煎りでココアやチョコレートケーキの風味に。' },
        { name: 'ナッツ', description: 'ローストアーモンド、ヘーゼルナッツ、マカダミアの風味が甘さと絡み合います。' },
        { name: '低酸味', description: 'コナ最大の長所の一つ。非常にスムーズで胃に優しい味わいです。' },
        { name: 'フローラル＆フルーツ', description: '浅煎りではジャスミン、ハニー、トロピカルフルーツの繊細な香りが現れます。' },
        { name: 'シルキーなボディと長い余韻', description: 'ミディアムフルボディで、クリーンなチョコレートの余韻が長く続きます。' },
      ],
      comparisonTitle: 'コナ vs 他の産地：風味比較',
      comparisonHeaders: ['特徴', 'コナ', 'エチオピア', 'コロンビア', 'ブラジル'],
      comparisonRows: [
        ['甘さ', '★★★★★', '★★★', '★★★★', '★★★★'],
        ['酸味', '★★ 低い', '★★★★★ 高い', '★★★★ やや高い', '★★★ やや低い'],
        ['ボディ', '★★★★ 中〜フル', '★★★ ミディアム', '★★★★ 中〜フル', '★★★★★ フル'],
        ['チョコレート', '★★★★★', '★★', '★★★', '★★★★'],
        ['ナッツ', '★★★★★', '★★', '★★★', '★★★★'],
        ['花・果実', '★★★', '★★★★★', '★★★', '★★'],
        ['滑らかさ', '★★★★★', '★★★', '★★★★', '★★★★'],
      ],
    },
    americano: {
      title: 'コナはアメリカーノに向いている？もちろん！',
      boldAnswer: '答え：非常に向いています！コナコーヒーは世界で最もアメリカーノに適した豆の一つです。',
      paragraphs: [
        'アメリカーノはエスプレッソをお湯で割るため、豆の品質がダイレクトに反映されます。',
        'コナが優れている理由：',
      ],
      reasons: [
        { title: '低酸味 = スムーズ', text: '天然の低酸味で、お湯で割っても滑らかな味わいを保ちます。' },
        { title: '天然の甘み = 砂糖不要', text: '黒糖の甘さが残り、ブラックでも美味しくいただけます。' },
        { title: 'ミディアムボディ = バランス', text: '重すぎず軽すぎない、毎日飲むのに最適なバランス。' },
        { title: 'クリーンな余韻 = 心地よい', text: 'チョコとナッツの心地よい余韻が続きます。' },
      ],
      recommendation: 'おすすめ：ミディアムローストの100%コナ、ダブルショット＋180mlのお湯（92-96°C）。',
    },
    brewing: {
      title: 'コナコーヒー抽出方法ガイド',
      subtitle: 'アメリカーノ以外にも、コナコーヒーは様々な抽出方法で輝きます：',
      methods: [
        { name: 'ハンドドリップ', icon: 'pourover', params: '挽き目：中細 | 温度：90-93°C | 比率：1:15 | 時間：2.5-3分', description: 'V60やKalita Waveで30秒蒸らし後、ゆっくり注ぐ。花の香りとチョコの甘みが際立ちます。' },
        { name: 'フレンチプレス', icon: 'frenchpress', params: '挽き目：粗 | 温度：93-96°C | 比率：1:12 | 時間：4分', description: 'オイルを保持し、ナッツとチョコの深い風味を最大限に引き出します。' },
        { name: 'コールドブリュー', icon: 'coldbrew', params: '挽き目：粗 | 温度：常温 | 比率：1:8 | 時間：12-18時間', description: '低温抽出で甘みを最大化し、酸味をほぼゼロに。夏のハワイに最高の一杯。' },
        { name: 'エスプレッソ', icon: 'espresso', params: '挽き目：極細 | 温度：92-95°C | 比率：1:2 | 時間：25-30秒', description: '豊かなクレマとシルキーなボディ。ラテやカプチーノにも最適。' },
      ],
    },
    whereToBuy: {
      title: 'ワイキキで本物のコナコーヒーを飲める場所',
      paragraphs: [
        'ハワイ旅行中は「Kona Blend」に注意。10%しかコナ豆が入っていない場合があります。「100% Kona Coffee」を確認しましょう。',
        'ワイキキなら、Kona Coffee Donutへ。大島コナ地区の農園から直接仕入れた100%コナコーヒーをお楽しみいただけます。',
      ],
      shopInfo: {
        name: 'Kona Coffee Donut',
        address: '2142 Kalakaua Ave, Waikiki, Honolulu, HI 96815',
        highlight: '100%本物のコナコーヒー | 新鮮モチドーナツ | ワイキキビーチから徒歩圏内',
        cta: 'メニューを見る',
      },
    },
    faq: {
      title: 'よくある質問',
      items: [
        { question: 'コナコーヒーはなぜ高いのですか？', answer: '生産量が世界の1%未満、手摘み、ハワイの高い人件費、厳格な品質基準が理由です。100%コナは1ポンド$30-50。' },
        { question: '100%コナとコナブレンドの違いは？', answer: '100%コナは全てコナ産。コナブレンドは最低10%のコナ豆で、90%は安価な輸入豆の場合があります。' },
        { question: 'コナの最適な抽出方法は？', answer: 'アメリカーノ、ハンドドリップ、フレンチプレス、コールドブリュー全てに適しています。ミディアムロースト、90-96°Cがおすすめ。' },
        { question: '胃が弱い人でも飲めますか？', answer: 'はい。コナは酸度が非常に低く（pH約5.0-5.1）、胃に優しいです。コールドブリューならさらに酸度が下がります。' },
        { question: 'ワイキキでどこで飲めますか？', answer: 'Kona Coffee Donut（2142 Kalakaua Ave）で100%コナをアメリカーノ、ドリップ、ラテ、コールドブリューでご提供。' },
      ],
    },
    cta: {
      title: 'ワイキキで本物のコナコーヒーを',
      text: 'Kona Coffee Donutでは100%純正コナコーヒーのみ使用。アメリカーノ、ハンドドリップ、ラテ、お好みのスタイルでどうぞ。',
      button: 'メニューを見る',
      directions: '道順を見る',
    },
  },
  ko: {
    hero: {
      title: '하와이 코나 커피 완벽 가이드: 풍미, 브루잉 & 테이스팅',
      subtitle: '코나 커피의 산지, 풍미 프로필, 브루잉 방법을 깊이 있게 분석합니다. 아메리카노에 완벽한 이유도 함께',
      breadcrumb: '블로그',
      breadcrumbCurrent: '코나 커피 가이드',
    },
    intro: {
      title: '하와이 코나 커피 소개: 세계에서 가장 귀한 커피 중 하나',
      paragraphs: [
        '하와이 코나 커피는 세계적으로 인정받는 최고급 스페셜티 커피로, 하와이 빅아일랜드 서해안의 코나 지역에서만 재배됩니다. 이 좁은 커피 벨트는 약 48km 길이, 3km 폭으로, 마우나로아와 후알라라이 화산 경사면 해발 500~900m에 위치합니다.',
        '1828년부터 재배가 시작되어 약 200년간, 독특한 화산 토양, 온화한 열대 기후, 오후의 구름이 만드는 천연 그늘이라는 세계 유일의 이상적 조건에서 커피가 자라고 있습니다.',
        '현재 약 800개의 소규모 농장이 전 세계 코나 커피 전량을 생산하며, 이는 세계 커피 생산량의 1% 미만입니다. 모두 손으로 수확하며, 하와이 주 농업부가 엄격한 등급 기준을 시행합니다.',
        '이러한 요소들이 코나 커피를 커피 애호가들 사이에서 "액체 금"으로 만들었습니다.',
      ],
    },
    flavor: {
      title: '코나 커피 풍미: 상세 테이스팅 노트',
      intro: '코나 커피의 매력은 독특하고 복잡한 풍미 레이어에 있습니다. 화산 토양의 미네랄과 이상적인 재배 환경이 우아하고 균형 잡힌 맛을 만들어냅니다.',
      notes: [
        { name: '흑설탕 단맛', description: '흑설탕이나 비정제 설탕을 연상시키는 자연스러운 단맛이 처음부터 끝까지 이어집니다.' },
        { name: '초콜릿', description: '미디엄 로스트에서 다크 초콜릿, 딥 로스트에서 코코아와 초콜릿 케이크 풍미가 나타납니다.' },
        { name: '견과류', description: '로스트 아몬드, 헤이즐넛, 마카다미아의 풍미가 단맛과 어우러집니다.' },
        { name: '낮은 산도', description: '코나의 가장 큰 장점 중 하나. 매우 부드럽고 위에 부담이 적습니다.' },
        { name: '꽃 & 과일', description: '라이트 로스트에서 자스민, 꿀, 열대 과일의 섬세한 향이 나타납니다.' },
        { name: '실키한 바디 & 긴 여운', description: '미디엄 풀 바디로, 깨끗한 초콜릿 여운이 오래 지속됩니다.' },
      ],
      comparisonTitle: '코나 vs 다른 산지: 풍미 비교',
      comparisonHeaders: ['특성', '코나', '에티오피아', '콜롬비아', '브라질'],
      comparisonRows: [
        ['단맛', '★★★★★', '★★★', '★★★★', '★★★★'],
        ['산도', '★★ 낮음', '★★★★★ 높음', '★★★★ 중상', '★★★ 중하'],
        ['바디', '★★★★ 중상', '★★★ 중간', '★★★★ 중상', '★★★★★ 풀'],
        ['초콜릿', '★★★★★', '★★', '★★★', '★★★★'],
        ['견과류', '★★★★★', '★★', '★★★', '★★★★'],
        ['꽃/과일', '★★★', '★★★★★', '★★★', '★★'],
        ['부드러움', '★★★★★', '★★★', '★★★★', '★★★★'],
      ],
    },
    americano: {
      title: '코나는 아메리카노에 적합한가요? 물론입니다!',
      boldAnswer: '답변: 매우 적합합니다! 코나 커피는 세계에서 아메리카노에 가장 적합한 원두 중 하나입니다.',
      paragraphs: [
        '아메리카노는 에스프레소를 뜨거운 물로 희석하기 때문에 원두 품질이 직접적으로 드러납니다.',
        '코나가 뛰어난 이유:',
      ],
      reasons: [
        { title: '낮은 산도 = 부드러움', text: '천연의 낮은 산도로 희석해도 부드러운 맛을 유지합니다.' },
        { title: '천연 단맛 = 설탕 불필요', text: '흑설탕의 단맛이 남아 블랙으로도 맛있게 즐길 수 있습니다.' },
        { title: '미디엄 바디 = 균형', text: '무겁지도 가볍지도 않은, 매일 마시기에 완벽한 균형.' },
        { title: '깨끗한 여운 = 즐거움', text: '초콜릿과 견과류의 기분 좋은 여운이 지속됩니다.' },
      ],
      recommendation: '추천: 미디엄 로스트 100% 코나, 더블 샷 + 180ml 뜨거운 물(92-96°C).',
    },
    brewing: {
      title: '코나 커피 브루잉 방법 가이드',
      subtitle: '아메리카노 외에도 코나 커피는 다양한 브루잉 방법에서 빛납니다:',
      methods: [
        { name: '핸드드립 (Pour-Over)', icon: 'pourover', params: '분쇄도: 중세 | 온도: 90-93°C | 비율: 1:15 | 시간: 2.5-3분', description: 'V60이나 칼리타 웨이브로 30초 뜸들인 후 천천히 추출. 꽃향과 초콜릿 단맛이 돋보입니다.' },
        { name: '프렌치프레스', icon: 'frenchpress', params: '분쇄도: 굵음 | 온도: 93-96°C | 비율: 1:12 | 시간: 4분', description: '오일을 보존하여 견과류와 초콜릿의 깊은 풍미를 최대한 끌어냅니다.' },
        { name: '콜드브루', icon: 'coldbrew', params: '분쇄도: 굵음 | 온도: 상온 | 비율: 1:8 | 시간: 12-18시간', description: '저온 추출로 단맛을 극대화하고 산도를 거의 제로로. 하와이 여름에 최고의 한 잔.' },
        { name: '에스프레소', icon: 'espresso', params: '분쇄도: 극세 | 온도: 92-95°C | 비율: 1:2 | 시간: 25-30초', description: '풍부한 크레마와 실키한 바디. 라떼와 카푸치노에도 완벽.' },
      ],
    },
    whereToBuy: {
      title: '와이키키에서 정통 코나 커피를 마실 수 있는 곳',
      paragraphs: [
        '하와이 여행 중 "Kona Blend" 표시에 주의하세요. 코나 원두가 10%만 들어있을 수 있습니다. "100% Kona Coffee"를 확인하세요.',
        '와이키키에서는 Kona Coffee Donut을 방문하세요. 빅아일랜드 코나 지역 농장에서 직접 구매한 100% 코나 커피를 즐기실 수 있습니다.',
      ],
      shopInfo: {
        name: 'Kona Coffee Donut',
        address: '2142 Kalakaua Ave, Waikiki, Honolulu, HI 96815',
        highlight: '100% 정통 코나 커피 | 신선한 모찌 도넛 | 와이키키 비치 도보 거리',
        cta: '메뉴 보기',
      },
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        { question: '코나 커피는 왜 비싼가요?', answer: '생산량이 세계의 1% 미만, 손수확, 하와이의 높은 인건비, 엄격한 품질 기준이 이유입니다. 100% 코나는 1파운드 $30-50.' },
        { question: '100% 코나와 코나 블렌드의 차이는?', answer: '100% 코나는 모두 코나 산지산. 코나 블렌드는 최소 10%의 코나 원두만 포함되며 90%는 저가 수입두일 수 있습니다.' },
        { question: '코나의 최적 브루잉 방법은?', answer: '아메리카노, 핸드드립, 프렌치프레스, 콜드브루 모두 적합합니다. 미디엄 로스트, 90-96°C 추천.' },
        { question: '위가 약한 사람도 마실 수 있나요?', answer: '네. 코나는 산도가 매우 낮아(pH 약 5.0-5.1) 위에 부담이 적습니다. 콜드브루로 마시면 산도가 더 낮아집니다.' },
        { question: '와이키키에서 어디서 마실 수 있나요?', answer: 'Kona Coffee Donut(2142 Kalakaua Ave)에서 100% 코나를 아메리카노, 드립, 라떼, 콜드브루로 제공합니다.' },
      ],
    },
    cta: {
      title: '와이키키에서 정통 코나 커피를 맛보세요',
      text: 'Kona Coffee Donut에서는 100% 순수 코나 커피만 사용합니다. 아메리카노, 핸드드립, 라떼, 원하시는 스타일로 즐기세요.',
      button: '메뉴 보기',
      directions: '길찾기',
    },
  },
};

// BlogPosting JSON-LD
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '夏威夷科纳咖啡完全指南：风味、冲泡与品鉴',
  alternativeHeadline: 'Hawaii Kona Coffee Complete Guide: Flavor, Brewing & Tasting',
  description: '夏威夷科纳咖啡风味详细介绍，科纳适合冲美式吗？深度解析科纳咖啡的产地、种植、烘焙、手冲与法压壶冲泡方法。',
  image: 'https://www.konacoffeedonut.com/og-image.jpg',
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
  author: {
    '@type': 'Organization',
    name: 'Kona Coffee Donut',
    url: 'https://www.konacoffeedonut.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kona Coffee Donut',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.konacoffeedonut.com/og-image.jpg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/zh/blog/kona-coffee-chinese-guide',
  },
  inLanguage: 'zh-CN',
  keywords: '夏威夷科纳咖啡, 夏威夷科纳咖啡风味, 夏威夷科纳咖啡介绍, 夏威夷科纳适合冲美式吗, 科纳咖啡, 夏威夷咖啡',
};

// FAQPage JSON-LD (Chinese)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '夏威夷科纳咖啡为什么这么贵？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '科纳咖啡之所以价格较高，有几个重要原因：第一，产量极其有限，全球科纳咖啡产量不到世界咖啡总产量的1%；第二，全部采用手工采摘，人工成本高；第三，夏威夷的生活成本和劳动力成本远高于其他咖啡产区；第四，夏威夷州对科纳咖啡有严格的品质分级标准。一磅100%科纳咖啡通常价格在30-50美元之间。',
      },
    },
    {
      '@type': 'Question',
      name: '科纳咖啡和"科纳混合"（Kona Blend）有什么区别？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '100%科纳咖啡意味着每一粒豆子都来自科纳产区。而"科纳混合"根据夏威夷法律，只需要含有最低10%的科纳豆，其余90%可以是任何来源的廉价咖啡。所以购买时一定要认准"100% Kona Coffee"的标识。',
      },
    },
    {
      '@type': 'Question',
      name: '科纳咖啡的最佳冲泡方式是什么？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '科纳咖啡适合多种冲泡方式。美式咖啡（Americano）能展现科纳的顺滑低酸特点；手冲（Pour-Over）最适合品鉴其细腻的花果香和巧克力风味；法压壶（French Press）能最大化其醇厚度和坚果味；冷萃（Cold Brew）则将科纳的天然甜感发挥到极致。',
      },
    },
    {
      '@type': 'Question',
      name: '科纳咖啡适合胃不好的人喝吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '科纳咖啡是胃敏感人群的极佳选择。科纳咖啡的酸度极低（pH值约5.0-5.1），远低于非洲或中美洲咖啡。这意味着它对胃的刺激更小，不容易引起胃酸反流或胃部不适。',
      },
    },
    {
      '@type': 'Question',
      name: '在威基基哪里能买到或喝到正宗科纳咖啡？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '在威基基，Kona Coffee Donut（2142 Kalakaua Ave）提供100%正宗科纳咖啡，从大岛科纳地区的农场直接采购。提供美式、手冲、浓缩、拿铁、冷萃等多种冲泡方式。',
      },
    },
  ],
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function KonaCoffeeChineseGuidePage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const t = content[locale as keyof typeof content] || content.zh;

  return (
    <>
      <Script
        id="blog-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-[#faf8f5] via-[#f5f0eb] to-[#faf8f5]">
        <SubpageNav locale={locale} />

        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center justify-center gap-2 text-sm text-amber-700/60 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Link href={`/${locale}`} className="hover:text-amber-700 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={`/${locale}/blog`} className="hover:text-amber-700 transition-colors">{t.hero.breadcrumb}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-amber-700/80">{t.hero.breadcrumbCurrent}</span>
            </motion.nav>

            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-amber-200/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 px-4">
          <motion.div className="max-w-4xl mx-auto" {...fadeIn}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center">
                <Coffee className="w-6 h-6 text-amber-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.intro.title}</h2>
            </div>
            <div className="space-y-5">
              {t.intro.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed text-base md:text-lg">{p}</p>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Flavor Profile Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.flavor.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-10 text-base md:text-lg">{t.flavor.intro}</p>
            </motion.div>

            {/* Flavor Notes */}
            <div className="grid md:grid-cols-2 gap-5 mb-16">
              {t.flavor.notes.map((note, i) => (
                <motion.div
                  key={i}
                  className="bg-white/80 border border-gray-200 rounded-2xl p-6 hover:bg-white/8 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <h3 className="text-lg font-semibold text-amber-700 mb-3">{note.name}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">{note.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Comparison Table */}
            <motion.div {...fadeIn}>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{t.flavor.comparisonTitle}</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      {t.flavor.comparisonHeaders.map((h, i) => (
                        <th key={i} className={`py-4 px-4 text-left text-sm font-semibold border-b border-gray-200 ${i === 1 ? 'text-amber-700 bg-amber-600/10' : 'text-gray-400'}`}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.flavor.comparisonRows.map((row, i) => (
                      <tr key={i} className="border-b border-white/5">
                        {row.map((cell, j) => (
                          <td key={j} className={`py-3 px-4 text-sm ${j === 0 ? 'text-gray-300 font-medium' : j === 1 ? 'text-amber-200 bg-amber-600/5' : 'text-gray-400'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Americano Section - Direct Query Answer */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.americano.title}</h2>
              </div>

              {/* Bold Answer */}
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-lg md:text-xl font-bold text-green-300 leading-relaxed">
                  {t.americano.boldAnswer}
                </p>
              </div>

              {t.americano.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">{p}</p>
              ))}

              <div className="grid md:grid-cols-2 gap-5 mt-8 mb-8">
                {t.americano.reasons.map((reason, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/80 border border-gray-200 rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-amber-700 mb-2">{reason.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{reason.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Recommendation */}
              <div className="bg-amber-900/20 border border-amber-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-amber-700 mt-1 flex-shrink-0" />
                  <p className="text-amber-200/90 leading-relaxed text-sm md:text-base">{t.americano.recommendation}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brewing Methods Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.brewing.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-10 text-base md:text-lg">{t.brewing.subtitle}</p>
            </motion.div>

            <div className="space-y-6">
              {t.brewing.methods.map((method, i) => (
                <motion.div
                  key={i}
                  className="bg-white/80 border border-gray-200 rounded-2xl p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {method.icon === 'pourover' && <Droplets className="w-5 h-5 text-blue-400" />}
                    {method.icon === 'frenchpress' && <Bean className="w-5 h-5 text-orange-400" />}
                    {method.icon === 'coldbrew' && <Droplets className="w-5 h-5 text-cyan-400" />}
                    {method.icon === 'espresso' && <Flame className="w-5 h-5 text-red-400" />}
                    <h3 className="text-xl font-semibold text-gray-900">{method.name}</h3>
                  </div>
                  <div className="bg-black/30 rounded-lg px-4 py-2 mb-4 inline-block">
                    <span className="text-amber-700/80 text-sm font-mono">{method.params}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Buy Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-rose-600/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-rose-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.whereToBuy.title}</h2>
              </div>

              {t.whereToBuy.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">{p}</p>
              ))}

              {/* Shop Card */}
              <div className="mt-8 bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-amber-700 mb-2">{t.whereToBuy.shopInfo.name}</h3>
                <p className="text-gray-300 mb-3">{t.whereToBuy.shopInfo.address}</p>
                <p className="text-amber-200/80 mb-6">{t.whereToBuy.shopInfo.highlight}</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}/menu`}
                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    <Coffee className="w-4 h-4" />
                    {t.whereToBuy.shopInfo.cta}
                  </Link>
                  <a
                    href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-amber-500/50 hover:bg-amber-900/30 text-amber-700 px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    {t.cta.directions}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.faq.title}</h2>
              </div>
            </motion.div>

            <div className="space-y-5">
              {t.faq.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white/80 border border-gray-200 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <h3 className="text-lg font-semibold text-amber-700 mb-3">{item.question}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.cta.title}</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{t.cta.text}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/menu`}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                <Coffee className="w-5 h-5" />
                {t.cta.button}
              </Link>
              <a
                href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-amber-500/50 hover:bg-amber-900/30 text-amber-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                <MapPin className="w-5 h-5" />
                {t.cta.directions}
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
