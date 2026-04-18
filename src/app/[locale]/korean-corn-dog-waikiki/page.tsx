'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import { Flame, ChefHat, Star, MapPin, Clock, Sparkles } from 'lucide-react';
import JoinTeamCTA from '@/components/JoinTeamCTA';

// SEO-optimized content for "korean corn dog waikiki" keyword (near-zero competition)
const content = {
  en: {
    hero: {
      badge: 'Now in Waikiki',
      title: 'Korean Corn Dogs in Waikiki',
      subtitle: 'Crispy Rice Flour Batter, Stretchy Mozzarella & Crunchy Coatings — Fried Fresh to Order',
      cta: 'View Our Menu'
    },
    whatIs: {
      title: 'What Is a Korean Corn Dog?',
      paragraph1: 'A Korean corn dog — known as "hotdog" in Korea — is a wildly popular street food that has taken the world by storm. Unlike the traditional American corn dog made with cornmeal batter, the Korean version uses a light, airy rice flour and wheat flour batter that fries up incredibly crispy on the outside while staying pillowy soft inside. The result is a golden, crunchy shell that shatters with every bite.',
      paragraph2: 'What truly sets the Korean corn dog apart is its fillings and coatings. While classic American corn dogs wrap a single hot dog in batter, Korean corn dogs can be filled with stretchy mozzarella cheese that creates the iconic "cheese pull," sausage, or both. The batter is then rolled in creative coatings like crispy french fries, crunchy ramen noodles, or sweet sugar — making each variety a completely different experience.',
      paragraph3: 'Born in the vibrant street food markets of Seoul and Busan, Korean corn dogs became a viral sensation on social media, with millions of TikTok and Instagram videos showcasing their satisfying crunch and mesmerizing cheese stretches. Now, this beloved K-food phenomenon has arrived in the heart of Waikiki.'
    },
    whyUs: {
      title: 'Why Our Korean Corn Dogs Stand Out',
      points: [
        {
          title: 'Fried Fresh to Order',
          description: 'Every corn dog is battered and fried the moment you order — never pre-made, never sitting under a heat lamp. You get it hot, crispy, and perfect.'
        },
        {
          title: 'Authentic Rice Flour Batter',
          description: 'Our signature batter blends rice flour and wheat flour for that distinctly Korean crunch — light, airy, and shatteringly crispy every single time.'
        },
        {
          title: 'Real Stretchy Mozzarella',
          description: 'We use premium whole-milk mozzarella that melts into long, Instagram-worthy cheese pulls. No processed substitutes — just real, gooey cheese.'
        },
        {
          title: 'Creative Crunchy Coatings',
          description: 'Choose from crispy potato cubes, crunchy ramen noodles, panko breadcrumbs, or a sweet sugar coating for a fun twist on every bite.'
        }
      ]
    },
    menu: {
      title: 'Korean Corn Dog Menu',
      subtitle: '6 Varieties — All Fried Fresh to Order',
      items: [
        {
          name: 'Classic Sausage Dog',
          description: 'Premium all-beef sausage wrapped in our crispy rice flour batter. The original Korean street food classic.',
          price: 'from $6'
        },
        {
          name: 'Mozzarella Cheese Dog',
          description: 'Loaded with stretchy whole-milk mozzarella. Pull it apart for the ultimate cheese experience.',
          price: 'from $7'
        },
        {
          name: 'Half & Half Dog',
          description: 'Half sausage, half mozzarella — the best of both worlds in one golden, crispy bite.',
          price: 'from $7'
        },
        {
          name: 'Potato Dog',
          description: 'Coated in crispy cubed potatoes for an extra-crunchy texture that shatters with every bite.',
          price: 'from $8'
        },
        {
          name: 'Crispy Ramen Dog',
          description: 'Wrapped in crushed ramen noodles for an addictively crunchy, savory coating. A fan favorite.',
          price: 'from $8'
        },
        {
          name: 'Sugar Dog',
          description: 'Rolled in sweet sugar after frying for a sweet-savory combination inspired by Korean street stalls.',
          price: 'from $7'
        }
      ]
    },
    experience: {
      title: 'The Ultimate Waikiki Street Food Experience',
      paragraph1: 'Picture this: a golden, freshly fried Korean corn dog in one hand and a smooth cup of 100% Kona coffee in the other, strolling down Kalakaua Avenue with the warm Hawaiian breeze and Diamond Head in the distance. That is the Kona Coffee Donut experience — where Korean street food culture meets Hawaiian aloha.',
      paragraph2: 'Korean corn dogs are the perfect grab-and-go snack for exploring Waikiki. They are portable, fun to eat, and endlessly shareable. Pair a crispy Mozzarella Cheese Dog with our iced Kona latte for an afternoon pick-me-up, or grab a Sugar Dog after a beach session for a sweet treat that hits different. Whether you are a first-time visitor or a Waikiki regular, our Korean corn dogs add a delicious new chapter to your Hawaiian adventure.',
      highlight: 'Pro tip: Pair a Half & Half Dog with our signature Kona Coffee for the perfect sweet-savory combo.'
    },
    hours: {
      title: 'Opening Soon',
      text: 'Opening Late April 2026',
      note: 'Korean corn dogs, fresh donuts & premium Kona coffee — all under one roof in Waikiki!'
    },
    cta: {
      title: 'Try the Best Korean Corn Dogs in Hawaii',
      text: 'Visit Kona Coffee Donut at 2142 Kalakaua Ave, Waikiki',
      button: 'Get Directions'
    }
  },
  ja: {
    hero: {
      badge: 'ワイキキに登場',
      title: 'ワイキキで韓国式チーズドッグ',
      subtitle: 'サクサク米粉バッター、伸びるモッツァレラ＆カリカリコーティング — 注文後に揚げたて',
      cta: 'メニューを見る'
    },
    whatIs: {
      title: '韓国式チーズドッグとは？',
      paragraph1: '韓国式チーズドッグ（ハットグ）は、日本でもK-フードブームとともに大人気の韓国ストリートフードです。アメリカンコーンドッグがコーンミールの衣を使うのに対し、韓国式は米粉と小麦粉をブレンドした軽くてサクサクの衣が特徴。外はカリッと、中はふわっとした食感が楽しめます。',
      paragraph2: '韓国式チーズドッグの最大の魅力は、伸びるモッツァレラチーズのフィリングとバラエティ豊かなコーティング。フライドポテト、砕いたラーメン、甘い砂糖など、さまざまなコーティングで一本一本が全く違う味わいに。新大久保やコリアンタウンで行列ができる人気グルメが、ついにハワイ・ワイキキに上陸しました。',
      paragraph3: 'ソウルや釜山の屋台から生まれた韓国式チーズドッグは、TikTokやInstagramで数百万回再生される人気コンテンツに。チーズがとろ〜りと伸びる瞬間は、まさにSNS映え抜群。このK-フードの新定番が、ワイキキの中心でお楽しみいただけます。'
    },
    whyUs: {
      title: '私たちの韓国式チーズドッグが選ばれる理由',
      points: [
        {
          title: '注文後に揚げたて',
          description: 'すべてのチーズドッグは注文を受けてから衣をつけて揚げます。作り置きなし、常に揚げたてアツアツ。'
        },
        {
          title: '本格米粉バッター',
          description: '米粉と小麦粉をブレンドした特製バッターで、韓国本場のサクサク食感を再現。'
        },
        {
          title: '本物の伸びるモッツァレラ',
          description: 'プレミアムモッツァレラチーズを使用。SNS映えする長〜いチーズプルをお楽しみください。'
        },
        {
          title: 'クリエイティブなコーティング',
          description: 'カリカリポテト、砕きラーメン、パン粉、甘い砂糖コーティングから選べます。'
        }
      ]
    },
    menu: {
      title: '韓国式チーズドッグメニュー',
      subtitle: '6種類 — すべて注文後に揚げたて',
      items: [
        {
          name: 'クラシックソーセージドッグ',
          description: 'プレミアムソーセージをサクサク米粉バッターで包んだ、韓国屋台の定番。',
          price: '$6から'
        },
        {
          name: 'モッツァレラチーズドッグ',
          description: '伸びるモッツァレラチーズたっぷり。究極のチーズ体験をどうぞ。',
          price: '$7から'
        },
        {
          name: 'ハーフ＆ハーフドッグ',
          description: '半分ソーセージ、半分モッツァレラ。一本で二つの味わいが楽しめる欲張りメニュー。',
          price: '$7から'
        },
        {
          name: 'ポテトドッグ',
          description: 'カリカリのダイスポテトをコーティング。ザクザク食感がたまらない一品。',
          price: '$8から'
        },
        {
          name: 'クリスピーラーメンドッグ',
          description: '砕いたラーメンをまとった、やみつきになるカリカリ食感。ファンの一番人気。',
          price: '$8から'
        },
        {
          name: 'シュガードッグ',
          description: '揚げたてに甘い砂糖をまぶした、韓国屋台スタイルの甘じょっぱい組み合わせ。',
          price: '$7から'
        }
      ]
    },
    experience: {
      title: 'ワイキキ究極のストリートフード体験',
      paragraph1: '揚げたての韓国式チーズドッグを片手に、もう片方には100%コナコーヒー。ダイヤモンドヘッドを眺めながらカラカウア通りをお散歩 — これがコナコーヒードーナツならではの体験です。韓国ストリートフード文化とハワイアンアロハが出会う場所。',
      paragraph2: '韓国式チーズドッグはワイキキ散策にぴったりの食べ歩きスナック。モッツァレラチーズドッグとアイスコナラテの組み合わせは午後のリフレッシュに最適。ビーチの後にはシュガードッグで甘いご褒美を。初めてのハワイでもリピーターでも、新しいワイキキの味をお楽しみください。',
      highlight: 'おすすめ：ハーフ＆ハーフドッグと当店自慢のコナコーヒーで、甘じょっぱいコンビをぜひ。'
    },
    hours: {
      title: 'まもなくオープン',
      text: '2026年4月下旬オープン',
      note: '韓国式チーズドッグ、新鮮なドーナツ＆プレミアムコナコーヒー — ワイキキで全部揃います！'
    },
    cta: {
      title: 'ハワイ最高の韓国式チーズドッグを食べに来てください',
      text: 'ワイキキ 2142 Kalakaua Ave のコナコーヒードーナツへ',
      button: '道順を見る'
    }
  },
  ko: {
    hero: {
      badge: '와이키키에 오픈',
      title: '와이키키에서 만나는 한국식 핫도그',
      subtitle: '바삭한 쌀가루 반죽, 쭉쭉 늘어나는 모짜렐라 & 다양한 토핑 — 주문 즉시 튀겨 드려요',
      cta: '메뉴 보기'
    },
    whatIs: {
      title: '한국식 핫도그(하뚜)란?',
      paragraph1: '한국식 핫도그, 일명 "하뚜"는 전 세계를 사로잡은 한국 대표 길거리 음식입니다. 미국식 콘도그가 옥수수 반죽을 사용하는 반면, 한국식 핫도그는 쌀가루와 밀가루를 블렌딩한 가볍고 바삭한 반죽이 특징이에요. 겉은 황금빛으로 바삭하게, 속은 부드럽게 — 한 입 베어물면 반죽이 사르르 부서지는 식감이 일품입니다.',
      paragraph2: '한국식 핫도그의 진짜 매력은 다양한 속재료와 토핑에 있어요. 쭉쭉 늘어나는 모짜렐라 치즈, 소시지, 또는 반반 조합이 가능하고, 바깥에는 감자 큐브, 부순 라면, 달콤한 설탕 등 다양한 코팅을 입힐 수 있죠. 하나하나가 완전히 다른 맛의 경험을 선사합니다.',
      paragraph3: '서울과 부산의 활기찬 길거리 시장에서 탄생한 한국식 핫도그는 틱톡과 인스타그램에서 수백만 조회수를 기록하며 글로벌 바이럴 푸드가 되었습니다. 치즈가 쭈욱 늘어나는 장면은 SNS에서 늘 화제! 이제 이 한국의 맛을 와이키키 한복판에서 즐길 수 있습니다.'
    },
    whyUs: {
      title: '우리 핫도그가 특별한 이유',
      points: [
        {
          title: '주문 즉시 튀김',
          description: '모든 핫도그는 주문 후 반죽을 입혀 바로 튀겨 드립니다. 미리 만들어 두지 않아요. 항상 뜨겁고 바삭하게!'
        },
        {
          title: '정통 쌀가루 반죽',
          description: '쌀가루와 밀가루를 블렌딩한 특제 반죽으로 한국 본토의 바삭한 식감을 그대로 재현합니다.'
        },
        {
          title: '진짜 쭉쭉 늘어나는 모짜렐라',
          description: '프리미엄 모짜렐라 치즈 사용. SNS에 올리고 싶은 길~게 늘어나는 치즈를 직접 경험하세요.'
        },
        {
          title: '다양한 바삭 토핑',
          description: '감자 큐브, 부순 라면, 빵가루, 달콤한 설탕 코팅 중 취향에 맞게 골라보세요.'
        }
      ]
    },
    menu: {
      title: '한국식 핫도그 메뉴',
      subtitle: '6가지 종류 — 모두 주문 즉시 튀김',
      items: [
        {
          name: '클래식 소시지 핫도그',
          description: '프리미엄 소시지를 바삭한 쌀가루 반죽으로 감싼 한국 길거리 음식의 정석.',
          price: '$6부터'
        },
        {
          name: '모짜렐라 치즈 핫도그',
          description: '쭉쭉 늘어나는 모짜렐라 치즈가 가득. 최고의 치즈 경험을 선사합니다.',
          price: '$7부터'
        },
        {
          name: '반반 핫도그',
          description: '반은 소시지, 반은 모짜렐라 — 두 가지 맛을 한 번에 즐기는 인기 메뉴.',
          price: '$7부터'
        },
        {
          name: '감자 핫도그',
          description: '바삭한 감자 큐브로 코팅. 한 입 베어물면 바삭바삭 식감이 환상적!',
          price: '$8부터'
        },
        {
          name: '라면 핫도그',
          description: '부순 라면으로 감싼 중독성 있는 바삭함. 팬들이 가장 사랑하는 메뉴.',
          price: '$8부터'
        },
        {
          name: '슈가 핫도그',
          description: '튀긴 후 달콤한 설탕을 묻힌, 한국 포장마차 스타일의 달짭조합.',
          price: '$7부터'
        }
      ]
    },
    experience: {
      title: '와이키키 최고의 길거리 음식 체험',
      paragraph1: '한 손에는 갓 튀긴 바삭한 한국식 핫도그, 다른 손에는 부드러운 100% 코나 커피. 다이아몬드 헤드를 바라보며 칼라카우아 거리를 걸어보세요 — 이것이 코나커피도넛만의 경험입니다. 한국 길거리 음식 문화와 하와이안 알로하가 만나는 곳.',
      paragraph2: '한국식 핫도그는 와이키키 산책에 딱 맞는 길거리 간식이에요. 모짜렐라 치즈 핫도그와 아이스 코나 라떼로 오후 에너지를 충전하거나, 해변 놀이 후 슈가 핫도그로 달콤한 보상을. 처음 방문이든 단골이든, 와이키키의 새로운 맛을 만나보세요.',
      highlight: '꿀팁: 반반 핫도그와 시그니처 코나 커피의 달짭 조합을 꼭 드셔보세요.'
    },
    hours: {
      title: '곧 오픈',
      text: '2026년 4월 말 오픈',
      note: '한국식 핫도그, 신선한 도넛 & 프리미엄 코나 커피 — 와이키키에서 한 곳에!'
    },
    cta: {
      title: '하와이 최고의 한국식 핫도그를 맛보세요',
      text: '와이키키 2142 Kalakaua Ave 코나커피도넛 방문',
      button: '길찾기'
    }
  },
  zh: {
    hero: {
      badge: '威基基新开业',
      title: '威基基韩式热狗',
      subtitle: '酥脆米粉面糊、拉丝马苏里拉 & 多种脆皮涂层 — 现点现炸',
      cta: '查看菜单'
    },
    whatIs: {
      title: '什么是韩式热狗？',
      paragraph1: '韩式热狗是风靡全球的韩国街头美食。与使用玉米面糊的美式热狗不同，韩式热狗采用米粉和面粉混合的面糊，炸出来外皮极其酥脆，内里却松软蓬松。金黄色的脆壳，每一口都能听到清脆的声响。',
      paragraph2: '韩式热狗的最大特色在于丰富的馅料和创意涂层。可以选择拉丝马苏里拉芝士、香肠，或两者兼有的组合。外层还可以裹上酥脆薯块、碎方便面、甜糖等，每一种口味都是全新的体验。',
      paragraph3: '诞生于首尔和釜山充满活力的街头市场，韩式热狗在TikTok和Instagram上获得数百万播放量，成为全球病毒式传播的美食现象。那令人着迷的芝士拉丝瞬间，正是社交媒体上的超级明星。现在，这款备受喜爱的韩国美食已来到威基基中心。'
    },
    whyUs: {
      title: '我们的韩式热狗为何与众不同',
      points: [
        {
          title: '现点现炸',
          description: '每根热狗都是下单后现裹面糊、现炸制作——绝不预制，保证滚烫酥脆。'
        },
        {
          title: '正宗米粉面糊',
          description: '我们的特制面糊混合米粉和面粉，呈现地道韩式口感——轻盈、蓬松、酥脆无比。'
        },
        {
          title: '真正拉丝马苏里拉',
          description: '使用优质全脂马苏里拉芝士，拉出超长芝士丝，拍照发圈超上镜。'
        },
        {
          title: '创意脆皮涂层',
          description: '可选酥脆薯块、碎方便面、面包糠或甜糖涂层，每种都别有风味。'
        }
      ]
    },
    menu: {
      title: '韩式热狗菜单',
      subtitle: '6种口味 — 全部现点现炸',
      items: [
        {
          name: '经典香肠热狗',
          description: '优质香肠裹上酥脆米粉面糊，韩国街头美食的经典之选。',
          price: '$6起'
        },
        {
          name: '马苏里拉芝士热狗',
          description: '满满拉丝马苏里拉芝士，拉开体验极致芝士快感。',
          price: '$7起'
        },
        {
          name: '半半热狗',
          description: '一半香肠，一半芝士——一根尽享两种美味。',
          price: '$7起'
        },
        {
          name: '薯块热狗',
          description: '外层裹上酥脆薯块，咬下去咔嚓作响，口感超满足。',
          price: '$8起'
        },
        {
          name: '脆面热狗',
          description: '裹上碎方便面，酥脆咸香让人上瘾，粉丝最爱。',
          price: '$8起'
        },
        {
          name: '糖衣热狗',
          description: '炸好后裹上甜糖，甜咸交织的韩式街头经典风味。',
          price: '$7起'
        }
      ]
    },
    experience: {
      title: '威基基终极街头美食体验',
      paragraph1: '想象一下：一手拿着刚出锅的金黄韩式热狗，另一手端着醇厚的100%科纳咖啡，漫步卡拉卡瓦大道，远眺钻石山——这就是科纳咖啡甜甜圈的独特体验，韩国街头美食文化与夏威夷阿罗哈精神的完美邂逅。',
      paragraph2: '韩式热狗是探索威基基的完美便携小吃。搭配一杯冰科纳拿铁享用马苏里拉芝士热狗，是午后最佳选择；海滩归来后来一根糖衣热狗，甜蜜犒赏自己。无论初次到访还是常客，韩式热狗为您的夏威夷之旅增添美味新篇章。',
      highlight: '小贴士：半半热狗搭配招牌科纳咖啡，甜咸完美组合不容错过。'
    },
    hours: {
      title: '即将开业',
      text: '2026年4月下旬开业',
      note: '韩式热狗、新鲜甜甜圈 & 优质科纳咖啡——威基基一站式享受！'
    },
    cta: {
      title: '来尝夏威夷最好的韩式热狗',
      text: '访问威基基2142 Kalakaua Ave的科纳咖啡甜甜圈',
      button: '获取路线'
    }
  },
  es: {
    hero: {
      badge: 'Ahora en Waikiki',
      title: 'Korean Corn Dogs en Waikiki',
      subtitle: 'Masa Crujiente de Harina de Arroz, Mozzarella Elástico y Coberturas Crocantes — Fritos al Momento',
      cta: 'Ver Nuestro Menú'
    },
    whatIs: {
      title: '¿Qué es un Korean Corn Dog?',
      paragraph1: 'El Korean corn dog, conocido como "hotdog" en Corea, es una comida callejera popular que ha conquistado el mundo. A diferencia del corn dog americano hecho con masa de maíz, la versión coreana usa una masa ligera de harina de arroz y trigo que queda increíblemente crujiente por fuera y suave por dentro.',
      paragraph2: 'Lo que distingue al corn dog coreano son sus rellenos y coberturas. Puede rellenarse con mozzarella elástico que crea el icónico "cheese pull", salchicha, o ambos. La masa se recubre con papas crujientes, fideos ramen triturados o azúcar dulce.',
      paragraph3: 'Nacido en los mercados callejeros de Seúl y Busan, el corn dog coreano se convirtió en sensación viral en TikTok e Instagram. Ahora esta delicia de K-food ha llegado al corazón de Waikiki.'
    },
    whyUs: {
      title: 'Por Qué Nuestros Korean Corn Dogs Son Únicos',
      points: [
        {
          title: 'Fritos al Momento',
          description: 'Cada corn dog se prepara y fríe al instante — nunca pre-hechos, siempre calientes y crujientes.'
        },
        {
          title: 'Masa Auténtica de Harina de Arroz',
          description: 'Nuestra masa mezcla harina de arroz y trigo para esa textura crujiente coreana distintiva.'
        },
        {
          title: 'Mozzarella Real Elástico',
          description: 'Usamos mozzarella premium de leche entera. Queso real y derretido, perfecto para fotos.'
        },
        {
          title: 'Coberturas Creativas',
          description: 'Elige entre papas crujientes, fideos ramen, panko o cobertura de azúcar dulce.'
        }
      ]
    },
    menu: {
      title: 'Menú de Korean Corn Dogs',
      subtitle: '6 Variedades — Todos Fritos al Momento',
      items: [
        {
          name: 'Clásico de Salchicha',
          description: 'Salchicha premium envuelta en nuestra crujiente masa de harina de arroz. El clásico coreano.',
          price: 'desde $6'
        },
        {
          name: 'Mozzarella Cheese Dog',
          description: 'Cargado con mozzarella elástico. La experiencia de queso definitiva.',
          price: 'desde $7'
        },
        {
          name: 'Mitad y Mitad',
          description: 'Mitad salchicha, mitad mozzarella — lo mejor de ambos mundos en un bocado.',
          price: 'desde $7'
        },
        {
          name: 'Potato Dog',
          description: 'Cubierto de papas en cubos crujientes para una textura extra crocante.',
          price: 'desde $8'
        },
        {
          name: 'Crispy Ramen Dog',
          description: 'Envuelto en fideos ramen triturados. Adictivamente crujiente y sabroso.',
          price: 'desde $8'
        },
        {
          name: 'Sugar Dog',
          description: 'Espolvoreado con azúcar dulce después de freír. La combinación dulce-salada coreana.',
          price: 'desde $7'
        }
      ]
    },
    experience: {
      title: 'La Experiencia Definitiva de Street Food en Waikiki',
      paragraph1: 'Imagina: un corn dog coreano recién frito en una mano y un café 100% Kona en la otra, paseando por Kalakaua Avenue con Diamond Head de fondo. Esa es la experiencia Kona Coffee Donut — donde la cultura K-food se encuentra con el aloha hawaiano.',
      paragraph2: 'Los corn dogs coreanos son el snack perfecto para explorar Waikiki. Acompaña un Mozzarella Cheese Dog con nuestro latte Kona helado para un break por la tarde, o disfruta un Sugar Dog después de la playa. Tu aventura hawaiana tiene un nuevo capítulo delicioso.',
      highlight: 'Consejo: El Mitad y Mitad con nuestro café Kona es la combinación dulce-salada perfecta.'
    },
    hours: {
      title: 'Próxima Apertura',
      text: 'Apertura Finales de Abril 2026',
      note: '¡Korean corn dogs, donuts frescos y café Kona premium — todo en un solo lugar en Waikiki!'
    },
    cta: {
      title: 'Prueba los Mejores Korean Corn Dogs de Hawaii',
      text: 'Visita Kona Coffee Donut en 2142 Kalakaua Ave, Waikiki',
      button: 'Obtener Direcciones'
    }
  }
};

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Korean corn dog?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Korean corn dog is a popular street food originating from South Korea. Unlike American corn dogs made with cornmeal batter, Korean corn dogs use a rice flour and wheat flour batter that creates an extra crispy exterior. They can be filled with mozzarella cheese, sausage, or both, and coated in creative toppings like potato cubes, crushed ramen noodles, or sugar.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where can I get Korean corn dogs in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut at 2142 Kalakaua Ave in Waikiki serves authentic Korean corn dogs fried fresh to order. We offer 6 varieties including Classic Sausage, Mozzarella Cheese, Half & Half, Potato Dog, Crispy Ramen, and Sugar Dog.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes Korean corn dogs different from American corn dogs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Korean corn dogs differ from American corn dogs in several ways: they use a rice flour batter instead of cornmeal for a crispier texture, they can be filled with stretchy mozzarella cheese in addition to sausage, and they feature creative coatings like cubed potatoes, ramen noodles, or sugar. The batter is lighter and crunchier than traditional corn dog batter.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the most popular Korean corn dog flavor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Mozzarella Cheese Dog and Half & Half (half cheese, half sausage) are the most popular Korean corn dog varieties. The cheese dog is famous for its stretchy cheese pull that has gone viral on social media. The Potato Dog, coated in crispy cubed potatoes, is also a fan favorite.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I pair Korean corn dogs with coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! At Kona Coffee Donut in Waikiki, we recommend pairing our Korean corn dogs with our signature 100% Kona coffee. The savory, crispy corn dog pairs perfectly with smooth Hawaiian coffee. Try the Half & Half Dog with an iced Kona latte for the ultimate sweet-savory combination.'
      }
    }
  ]
};

// Restaurant structured data
const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Kona Coffee Donut - Korean Corn Dogs Waikiki',
  description: 'Authentic Korean corn dogs fried fresh to order in Waikiki. 6 varieties including mozzarella cheese, potato, and ramen dogs. Paired with premium 100% Kona coffee.',
  image: 'https://www.konacoffeedonut.com/og-image.jpg',
  servesCuisine: ['Korean', 'Street Food', 'Coffee', 'Donuts'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2142 Kalakaua Ave',
    addressLocality: 'Honolulu',
    addressRegion: 'HI',
    postalCode: '96815',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.2793,
    longitude: -157.8294
  },
  priceRange: '$$',
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: {
      '@type': 'MenuSection',
      name: 'Korean Corn Dogs',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Classic Sausage Dog', description: 'Premium sausage in crispy rice flour batter', offers: { '@type': 'Offer', price: '6.00', priceCurrency: 'USD' } },
        { '@type': 'MenuItem', name: 'Mozzarella Cheese Dog', description: 'Stretchy mozzarella in crispy rice flour batter', offers: { '@type': 'Offer', price: '7.00', priceCurrency: 'USD' } },
        { '@type': 'MenuItem', name: 'Half & Half Dog', description: 'Half sausage, half mozzarella', offers: { '@type': 'Offer', price: '7.00', priceCurrency: 'USD' } },
        { '@type': 'MenuItem', name: 'Potato Dog', description: 'Coated in crispy cubed potatoes', offers: { '@type': 'Offer', price: '8.00', priceCurrency: 'USD' } },
        { '@type': 'MenuItem', name: 'Crispy Ramen Dog', description: 'Wrapped in crushed ramen noodles', offers: { '@type': 'Offer', price: '8.00', priceCurrency: 'USD' } },
        { '@type': 'MenuItem', name: 'Sugar Dog', description: 'Sweet sugar coating', offers: { '@type': 'Offer', price: '7.00', priceCurrency: 'USD' } }
      ]
    }
  }
};

export default function KoreanCornDogWaikikiPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      <Script
        id="corndog-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="corndog-restaurant-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 via-orange-800/70 to-red-900/80 z-10" />
          <div className="absolute inset-0 bg-[url('/images/background/waikiki-sunset.jpg')] bg-cover bg-center" />
          <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Flame className="w-4 h-4" />
              {t.hero.badge}
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href={`/${locale}/menu`}
                className="inline-block bg-white text-red-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-colors"
              >
                {t.hero.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What Is a Korean Corn Dog? */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-red-900 text-center">
                {t.whatIs.title}
              </h2>
              <Sparkles className="w-6 h-6 text-orange-500" />
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {t.whatIs.paragraph1}
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {t.whatIs.paragraph2}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.whatIs.paragraph3}
            </p>
          </motion.div>
        </section>

        {/* Why Our Korean Corn Dogs Stand Out */}
        <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-12 text-center">
              {t.whyUs.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.whyUs.points.map((point, index) => {
                const icons = [
                  <Flame key="flame" className="w-7 h-7 text-red-600" />,
                  <ChefHat key="chef" className="w-7 h-7 text-red-600" />,
                  <Star key="star" className="w-7 h-7 text-red-600" />,
                  <Sparkles key="sparkles" className="w-7 h-7 text-red-600" />
                ];
                return (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-white rounded-2xl shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {icons[index]}
                    </div>
                    <h3 className="text-lg font-bold text-red-800 mb-2">{point.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-2 text-center">
              {t.menu.title}
            </h2>
            <p className="text-center text-gray-500 mb-12">{t.menu.subtitle}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.menu.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-red-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-red-800">{item.name}</h3>
                    <span className="text-orange-600 font-semibold whitespace-nowrap ml-3">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Ultimate Waikiki Street Food Experience */}
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-6 text-center">
                {t.experience.title}
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {t.experience.paragraph1}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t.experience.paragraph2}
              </p>
              <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-4 flex items-start gap-3">
                <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-orange-800 font-medium">{t.experience.highlight}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hours / Opening */}
        <section className="py-12 px-4 bg-red-100">
          <div className="max-w-2xl mx-auto text-center">
            <Clock className="w-8 h-8 text-red-700 mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-red-900 mb-2">{t.hours.title}</h2>
            <p className="text-3xl font-bold text-red-600 mb-2">{t.hours.text}</p>
            <p className="text-gray-600">{t.hours.note}</p>
          </div>
        </section>

        {/* Join Team CTA */}
        <JoinTeamCTA locale={locale} />

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-700 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-xl mb-8 opacity-90">{t.cta.text}</p>
            <a
              href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-colors"
            >
              {t.cta.button}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
