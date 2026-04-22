'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import SubpageNav from '@/components/SubpageNav';
import { MapPin, Clock, DollarSign, Coffee, Star, ChevronRight, Sparkles } from 'lucide-react';

// ──────────────────────────────────────────────────
// PRIMARY: Korean (ko) — this page targets Korean tourists
// Secondary: en, ja, zh
// GSC target queries: 코나커피, 코나 커피, 말라사다, 하와이 코나 커피,
//   코나 카페, 하와이 커피, 하와이코나커피, 하와이 원두
// ──────────────────────────────────────────────────

const content = {
  ko: {
    hero: {
      badge: '2026년 최신판',
      title: '와이키키 맛집 완벽 가이드 2026',
      subtitle: '코나 커피부터 말라사다까지, 하와이에서 꼭 먹어야 할 음식 총정리',
    },
    tableOfContents: {
      title: '목차',
      items: [
        '와이키키에서 꼭 먹어야 할 것들',
        '코나 커피란?',
        '말라사다란?',
        '모찌 도넛 — MOCHILAND',
        '빙수 — 하와이에서 한국 빙수를',
        '추천 맛집 리스트',
        '가격대 안내',
        '자주 묻는 질문',
      ],
    },
    intro: {
      title: '와이키키에서 꼭 먹어야 할 것들',
      p1: '하와이 여행을 계획하고 계신가요? 와이키키는 단순히 아름다운 해변만 있는 곳이 아닙니다. 세계 각국의 미식 문화가 어우러진 진정한 맛집 천국이기도 합니다. 특히 한국인 관광객 여러분이 와이키키에서 반드시 경험해야 할 음식들이 있습니다.',
      p2: '하와이의 식문화는 폴리네시안, 일본, 포르투갈, 미국 등 다양한 문화가 융합되어 독특한 맛의 세계를 만들어냈습니다. 그중에서도 코나 커피, 말라사다, 모찌 도넛, 빙수는 와이키키를 방문하는 한국 관광객들이 가장 사랑하는 메뉴입니다.',
      p3: '이 가이드에서는 와이키키 맛집을 철저하게 분석하여, 여러분의 하와이 여행이 미식 여행이 될 수 있도록 도와드리겠습니다. 가격, 위치, 영업시간은 물론 팁 문화까지 한국 관광객에게 꼭 필요한 정보를 모두 담았습니다.',
      highlights: [
        { icon: 'coffee', label: '코나 커피', desc: '세계 3대 커피, 하와이 빅아일랜드 직송' },
        { icon: 'donut', label: '말라사다', desc: '포르투갈 전통 도넛, 하와이식으로 재탄생' },
        { icon: 'sparkle', label: '모찌 도넛', desc: '겉바속쫄의 정석, 12가지 이상 맛' },
        { icon: 'ice', label: '빙수', desc: '하와이 열대 과일을 올린 한국식 빙수' },
      ],
    },
    konaCoffee: {
      title: '코나 커피란? — 하와이 코나 커피의 모든 것',
      p1: '코나 커피(Kona Coffee)는 하와이 빅아일랜드의 코나 지역에서 재배되는 프리미엄 커피입니다. 세계 3대 커피 중 하나로 꼽히며, 전 세계 커피 생산량의 1%도 채 되지 않는 희귀한 원두입니다. 하와이 코나 커피가 특별한 이유는 빅아일랜드의 독특한 화산 토양, 적절한 고도(200~800m), 그리고 오전에는 맑고 오후에는 구름이 끼는 이상적인 기후 조건 덕분입니다.',
      p2: '코나 커피의 맛은 부드럽고 깔끔하며, 쓴맛이 적고 은은한 견과류 향과 캐러멜 같은 단맛이 특징입니다. 산미는 밝고 가벼워 커피를 잘 못 마시는 분들도 편하게 즐길 수 있습니다. 한국에서 흔히 마시는 아메리카노와는 확연히 다른 부드러운 풍미를 경험하실 수 있습니다.',
      p3: '주의하실 점이 있습니다. "코나 블렌드(Kona Blend)"라는 이름으로 판매되는 제품은 코나 원두가 10%만 포함되어 있어도 합법적으로 사용할 수 있는 명칭입니다. 진짜 코나 커피를 경험하시려면 반드시 "100% Kona Coffee"라고 표기된 제품을 선택하셔야 합니다. 저희 Kona Coffee Donut에서는 100% 정통 코나 원두만을 사용합니다.',
      tip: '커피 원두를 한국으로 가져가시려면 로스팅된 원두(roasted beans)는 세관 신고 없이 반입 가능합니다. 생두(green beans)는 식물검역 대상이므로 로스팅된 제품을 구매하세요.',
      stats: [
        { label: '재배 고도', value: '200~800m' },
        { label: '연간 생산량', value: '전 세계 1% 미만' },
        { label: '수확 시기', value: '8월~1월' },
        { label: '가격대', value: '1lb당 $30~$60' },
      ],
    },
    malasada: {
      title: '말라사다란? — 하와이 대표 전통 디저트',
      p1: '말라사다(Malasada)는 19세기 포르투갈 이민자들이 하와이에 전해준 전통 도넛입니다. 겉은 바삭하고 안은 부드러운 이 도넛은 구멍이 없는 것이 특징이며, 갓 튀겨 따뜻할 때 설탕을 듬뿍 묻혀 먹습니다. 한국의 꽈배기나 호떡과 비교할 수 있지만, 말라사다만의 독특한 식감은 한번 맛보면 잊을 수 없습니다.',
      p2: '전통 말라사다는 설탕만 묻힌 심플한 형태지만, 요즘은 커스타드 크림, 하우피아(코코넛 크림), 우베(보라색 고구마), 리리코이(패션프루트) 등 다양한 필링을 넣은 현대적인 변형이 인기입니다. 하와이에서만 맛볼 수 있는 열대 과일 필링은 특히 추천드립니다.',
      p3: '말라사다는 반드시 갓 튀긴 것을 드셔야 합니다. 시간이 지나면 특유의 바삭한 식감이 사라지기 때문입니다. 저희 Kona Coffee Donut에서는 주문 후 바로 튀겨 가장 완벽한 상태의 말라사다를 제공합니다.',
    },
    mochiDonut: {
      title: '모찌 도넛 — 겉바속쫄의 매력, MOCHILAND',
      p1: '모찌 도넛은 일본의 모찌(찹쌀떡)에서 영감을 받은 도넛으로, 겉은 바삭하고 속은 쫄깃한 독특한 식감이 특징입니다. "겉바속쫄"이라는 표현이 딱 맞는 디저트입니다. 일반 도넛과 달리 글루텐이 적어 가벼운 식감을 자랑하며, 하나만 먹어도 충분한 만족감을 줍니다.',
      p2: '저희 Kona Coffee Donut의 모찌 도넛 브랜드 MOCHILAND에서는 우베, 말차, 흑당, 딸기, 타로, 리리코이 등 12가지 이상의 다양한 맛을 선보이고 있습니다. 모든 모찌 도넛은 매일 아침 신선하게 만들어지며, 글레이즈가 아직 반짝반짝할 때 드시는 것이 가장 맛있습니다.',
      p3: '한국에서도 모찌 도넛이 유행하고 있지만, 하와이 현지에서 먹는 모찌 도넛은 열대 과일 맛과 하와이 특산 재료를 사용한다는 점에서 특별합니다. 특히 우베(보라색 고구마)와 리리코이(패션프루트) 맛은 하와이에서만 경험할 수 있는 맛입니다.',
    },
    bingsu: {
      title: '빙수 — 하와이에서 한국 빙수를 만나다',
      p1: '하와이의 뜨거운 햇살 아래 시원한 빙수 한 그릇만큼 완벽한 디저트가 있을까요? 한국의 대표 여름 디저트인 빙수가 이제 와이키키에서도 즐길 수 있습니다. 일반 셰이브 아이스(shave ice)와 달리, 빙수는 우유 얼음을 곱게 갈아 만들어 눈처럼 부드러운 식감이 특징입니다.',
      p2: '저희 Kona Coffee Donut에서는 한국 정통 빙수에 하와이 열대 과일을 더한 특별한 빙수를 선보입니다. 망고 빙수, 딸기 빙수, 팥 빙수는 물론 하와이에서만 맛볼 수 있는 리리코이(패션프루트) 빙수와 하우피아(코코넛) 빙수도 준비되어 있습니다. 한국에서 먹던 익숙한 빙수에 하와이의 열대 감성을 더한 특별한 경험이 될 것입니다.',
      p3: '해변에서 놀다가 칼라카우아 애비뉴로 올라오시면, 시원한 빙수 한 그릇으로 더위를 식히실 수 있습니다. 인스타그램에 올리기 딱 좋은 비주얼은 덤입니다.',
    },
    recommended: {
      title: '와이키키 추천 맛집 리스트',
      subtitle: '한국 관광객이 꼭 가봐야 할 와이키키 맛집을 엄선했습니다.',
      shops: [
        {
          rank: 1,
          name: 'Kona Coffee Donut (코나커피도넛)',
          address: '2142 Kalakaua Ave, Waikiki',
          description: '100% 코나 커피, 모찌 도넛(MOCHILAND), 말라사다, 빙수, 코리안 콘도그까지 한 곳에서 즐길 수 있는 와이키키의 새로운 핫플레이스. 와이키키 비치에서 도보 5분 거리, 칼라카우아 애비뉴에 위치해 접근성도 뛰어납니다. 한국인 관광객 여러분이 좋아하실 모든 메뉴가 한곳에 모여 있습니다.',
          hours: '매일 오전 7시 ~ 오후 9시',
          mustTry: ['100% 코나 커피', '모찌 도넛', '말라사다', '하와이안 빙수', '코리안 콘도그'],
          highlight: true,
        },
        {
          rank: 2,
          name: 'Island Vintage Coffee',
          address: 'Royal Hawaiian Center, Waikiki',
          description: '와이키키에서 코나 커피를 즐길 수 있는 유명 카페. 아사이 볼도 인기 메뉴입니다. 로얄 하와이안 센터 내에 위치해 쇼핑 중 들르기 좋습니다.',
          hours: '매일 오전 6시 ~ 오후 9시',
          mustTry: ['코나 커피', '아사이 볼'],
          highlight: false,
        },
        {
          rank: 3,
          name: 'Leonard\'s Bakery',
          address: '933 Kapahulu Ave (와이키키에서 차로 5분)',
          description: '1952년부터 영업해온 하와이의 전설적인 말라사다 전문점. 오리지널 말라사다의 원조라 할 수 있으며, 항상 긴 줄이 있지만 기다릴 가치가 충분합니다.',
          hours: '매일 오전 5:30 ~ 오후 7시',
          mustTry: ['오리지널 말라사다', '커스타드 말라사다'],
          highlight: false,
        },
        {
          rank: 4,
          name: 'Matsumoto Shave Ice',
          address: 'Haleiwa, North Shore (와이키키에서 차로 1시간)',
          description: '노스쇼어의 명물 셰이브 아이스 전문점. 와이키키에서는 멀지만, 노스쇼어 투어 시 꼭 들러야 하는 곳입니다. 1951년부터 영업 중.',
          hours: '매일 오전 9시 ~ 오후 6시',
          mustTry: ['레인보우 셰이브 아이스'],
          highlight: false,
        },
        {
          rank: 5,
          name: 'Marukame Udon',
          address: '2310 Kuhio Ave, Waikiki',
          description: '와이키키에서 가장 유명한 우동집. 줄이 항상 길지만 회전이 빨라 오래 기다리지 않습니다. 합리적인 가격으로 갓 뽑은 우동을 즐길 수 있어 한국인 관광객들에게도 인기입니다.',
          hours: '매일 오전 11시 ~ 오후 9시',
          mustTry: ['카케우동', '온타마 우동'],
          highlight: false,
        },
      ],
    },
    pricing: {
      title: '와이키키 맛집 가격대 안내',
      subtitle: '한국 관광객을 위한 실용적인 가격 정보 (USD 기준, 2026년 4월 환율 약 1,380원/달러)',
      categories: [
        {
          name: '커피 & 음료',
          items: [
            { item: '100% 코나 커피 (핫)', price: '$5~$7', krw: '약 6,900~9,700원' },
            { item: '코나 커피 라떼', price: '$6~$8', krw: '약 8,300~11,000원' },
            { item: '콜드브루', price: '$6~$8', krw: '약 8,300~11,000원' },
          ],
        },
        {
          name: '도넛 & 디저트',
          items: [
            { item: '모찌 도넛 (1개)', price: '$3.50~$4.50', krw: '약 4,800~6,200원' },
            { item: '말라사다 (1개)', price: '$4~$5', krw: '약 5,500~6,900원' },
            { item: '빙수', price: '$12~$16', krw: '약 16,500~22,000원' },
          ],
        },
        {
          name: '식사',
          items: [
            { item: '아사이 볼', price: '$10~$14', krw: '약 13,800~19,300원' },
            { item: '코리안 콘도그', price: '$6~$8', krw: '약 8,300~11,000원' },
            { item: '플레이트 런치 (로코모코 등)', price: '$12~$18', krw: '약 16,500~24,800원' },
          ],
        },
      ],
      tipInfo: {
        title: '미국 팁 문화 안내',
        tips: [
          '카페/테이크아웃: 팁 없거나 $1~$2 (15~20% 선택 화면이 나오지만, 카페에서는 부담 없이 적게 하셔도 됩니다)',
          '레스토랑(풀서비스): 세전 금액의 18~20%가 기본',
          '팁은 세금(Tax) 전 금액 기준으로 계산합니다',
          '하와이 세일즈택스(GET): 약 4.712%',
        ],
      },
    },
    practicalInfo: {
      title: '한국 관광객을 위한 실용 정보',
      items: [
        { icon: 'dollar', title: '환율 & 결제', desc: '대부분의 가게에서 신용카드 결제 가능. Visa, Mastercard 선호. 환전은 한국에서 미리 하시는 것이 유리합니다. 현금은 소액($50~$100)만 준비하세요.' },
        { icon: 'clock', title: '영업시간 참고', desc: '와이키키 대부분의 카페는 오전 6~7시에 오픈합니다. 레스토랑 라스트오더는 보통 오후 8~9시입니다. 미국은 일요일에도 정상 영업하는 곳이 많습니다.' },
        { icon: 'map', title: '위치 & 교통', desc: '와이키키 중심가(칼라카우아 애비뉴)에 대부분의 맛집이 몰려 있어 도보로 충분합니다. 알라모아나 센터는 버스(The Bus) 이용 시 약 15분 소요됩니다.' },
        { icon: 'star', title: '현지인 팁', desc: '인기 맛집은 오전 10시 이전에 방문하면 줄을 피할 수 있습니다. Google Maps에서 실시간 대기 시간을 확인하세요. 알레르기가 있으시면 "allergy"라고 말씀하시면 됩니다.' },
      ],
    },
    faq: {
      title: '자주 묻는 질문 (FAQ)',
      items: [
        {
          q: '와이키키에서 코나 커피는 어디서 마실 수 있나요?',
          a: '와이키키 칼라카우아 애비뉴에 위치한 Kona Coffee Donut에서 100% 정통 코나 커피를 즐기실 수 있습니다. 코나 블렌드가 아닌 100% 코나 원두만을 사용하므로 진짜 코나 커피의 맛을 경험하실 수 있습니다. Island Vintage Coffee 등 로얄 하와이안 센터 내 카페에서도 코나 커피를 판매합니다.',
        },
        {
          q: '말라사다와 일반 도넛의 차이는 뭔가요?',
          a: '말라사다는 포르투갈에서 유래한 하와이 전통 도넛으로, 일반 도넛과 달리 가운데 구멍이 없습니다. 이스트 반죽을 기름에 튀긴 후 설탕을 묻히며, 겉은 바삭하고 안은 에어리하고 부드러운 것이 특징입니다. 크림이나 과일 필링을 넣은 버전도 인기입니다.',
        },
        {
          q: '와이키키 맛집 가격대는 어느 정도인가요?',
          a: '커피 한 잔은 $5~$8(약 6,900~11,000원), 도넛류는 $3.50~$5(약 4,800~6,900원), 빙수는 $12~$16(약 16,500~22,000원) 정도입니다. 한국 카페 가격과 비교하면 다소 비싸지만, 하와이 물가와 100% 코나 원두 사용을 감안하면 합리적인 가격대입니다.',
        },
        {
          q: '와이키키에서 빙수를 먹을 수 있는 곳이 있나요?',
          a: '네, Kona Coffee Donut에서 한국 정통 빙수를 즐기실 수 있습니다. 우유 얼음을 곱게 갈아 만든 빙수에 하와이 열대 과일(망고, 리리코이 등)을 올린 하와이안 빙수가 특히 인기입니다. 와이키키 비치에서 도보 5분 거리에 위치해 있어 해변에서 놀다가 시원한 빙수를 즐기기 좋습니다.',
        },
        {
          q: '하와이 코나 커피 원두를 한국으로 가져갈 수 있나요?',
          a: '네, 로스팅된 코나 커피 원두는 별도의 세관 신고 없이 한국으로 반입 가능합니다. 다만 생두(green beans)는 식물검역 대상이므로, 반드시 로스팅된 원두를 구매하세요. 저희 매장에서도 100% 코나 원두 패키지를 판매하고 있어 선물용으로도 좋습니다. 면세 한도(미화 $800) 안에서는 세금 없이 반입 가능합니다.',
        },
      ],
    },
    cta: {
      title: '와이키키 맛집 여행, 코나커피도넛에서 시작하세요',
      text: '100% 코나 커피 한 잔과 갓 튀긴 말라사다, 쫄깃한 모찌 도넛, 시원한 빙수까지. 하와이 여행의 맛있는 기억을 만들어 드립니다.',
      address: '2142 Kalakaua Ave, Waikiki, Honolulu, HI 96815',
      button: '길찾기 (Google Maps)',
      menuButton: '메뉴 보기',
    },
  },
  en: {
    hero: {
      badge: 'Updated April 2026',
      title: 'Waikiki Food Guide 2026 for Korean Tourists',
      subtitle: 'From Kona Coffee to Malasada — Everything You Must Eat in Hawaii',
    },
    tableOfContents: {
      title: 'Table of Contents',
      items: [
        'Must-Eat Foods in Waikiki',
        'What is Kona Coffee?',
        'What is Malasada?',
        'Mochi Donuts — MOCHILAND',
        'Bingsu in Hawaii',
        'Recommended Restaurants',
        'Price Guide',
        'FAQ',
      ],
    },
    intro: {
      title: 'Must-Eat Foods in Waikiki',
      p1: 'Planning a trip to Hawaii? Waikiki is not just beautiful beaches — it is a true food paradise where culinary traditions from around the world come together. For Korean tourists especially, there are must-try foods that you simply cannot miss.',
      p2: 'Hawaii\'s food culture is a unique fusion of Polynesian, Japanese, Portuguese, and American influences. Among these, Kona coffee, malasada, mochi donuts, and bingsu are the most beloved items for Korean visitors to Waikiki.',
      p3: 'This guide thoroughly analyzes the best food spots in Waikiki to help make your Hawaii trip a culinary adventure. We cover prices, locations, hours, and even tipping culture — everything Korean tourists need to know.',
      highlights: [
        { icon: 'coffee', label: 'Kona Coffee', desc: 'One of the world\'s top 3 coffees, direct from Big Island' },
        { icon: 'donut', label: 'Malasada', desc: 'Portuguese donut reinvented Hawaiian style' },
        { icon: 'sparkle', label: 'Mochi Donuts', desc: 'Crispy outside, chewy inside — 12+ flavors' },
        { icon: 'ice', label: 'Bingsu', desc: 'Korean shaved ice with tropical Hawaiian fruits' },
      ],
    },
    konaCoffee: {
      title: 'What is Kona Coffee? — Everything About Hawaii\'s Premium Coffee',
      p1: 'Kona Coffee is a premium coffee grown in the Kona district of Hawaii\'s Big Island. Ranked among the world\'s top three coffees, it accounts for less than 1% of global production. What makes Kona coffee special is the Big Island\'s unique volcanic soil, ideal altitude (200–800m), and perfect microclimate — sunny mornings and cloudy afternoons.',
      p2: 'Kona coffee is smooth, clean, low in bitterness, with subtle nutty and caramel-like sweetness. The acidity is bright but gentle, making it enjoyable even for those who don\'t usually drink coffee. It offers a noticeably different experience from the typical Americano.',
      p3: 'Important: products labeled "Kona Blend" can legally contain as little as 10% Kona beans. For the real experience, always look for "100% Kona Coffee." At Kona Coffee Donut, we use only 100% authentic Kona beans.',
      tip: 'Roasted Kona coffee beans can be brought into South Korea without customs declaration. Green (unroasted) beans require phytosanitary inspection, so purchase roasted products.',
      stats: [
        { label: 'Growing Altitude', value: '200–800m' },
        { label: 'Annual Production', value: '<1% of world supply' },
        { label: 'Harvest Season', value: 'August–January' },
        { label: 'Price Range', value: '$30–$60/lb' },
      ],
    },
    malasada: {
      title: 'What is Malasada? — Hawaii\'s Iconic Traditional Dessert',
      p1: 'Malasada is a traditional donut brought to Hawaii by Portuguese immigrants in the 19th century. Crispy on the outside and soft inside, this holeless donut is rolled in sugar while still warm from the fryer. Think of it as Hawaii\'s answer to beignets — once you try one fresh, you\'ll never forget it.',
      p2: 'Traditional malasadas are simply coated in sugar, but modern versions feature fillings like custard cream, haupia (coconut cream), ube (purple sweet potato), and lilikoi (passionfruit). The tropical fruit fillings available only in Hawaii are especially recommended.',
      p3: 'Malasadas must be eaten fresh — the signature crispy texture disappears over time. At Kona Coffee Donut, we fry to order so every malasada is served at peak perfection.',
    },
    mochiDonut: {
      title: 'Mochi Donuts — The Irresistible Texture of MOCHILAND',
      p1: 'Mochi donuts are inspired by Japanese mochi (rice cake), featuring a uniquely crispy exterior and chewy interior. Unlike regular donuts, they use less gluten for a lighter texture that\'s satisfying without being heavy.',
      p2: 'Our mochi donut brand MOCHILAND at Kona Coffee Donut offers 12+ flavors including ube, matcha, brown sugar, strawberry, taro, and lilikoi. All mochi donuts are freshly made every morning and are best enjoyed while the glaze is still glistening.',
      p3: 'While mochi donuts have become trendy in Korea too, Hawaiian mochi donuts stand apart with their tropical fruit flavors and local ingredients. The ube and lilikoi flavors in particular are uniquely Hawaiian experiences.',
    },
    bingsu: {
      title: 'Bingsu — Korean Shaved Ice Meets Hawaii',
      p1: 'What could be more perfect than a bowl of cool bingsu under Hawaii\'s warm sun? Korea\'s signature summer dessert is now available in Waikiki. Unlike regular shave ice, bingsu features finely shaved milk-ice with a snow-like, melt-on-your-tongue texture.',
      p2: 'At Kona Coffee Donut, we offer special bingsu that combines Korean tradition with Hawaiian tropical fruits. Mango, strawberry, and patbingsu (red bean) are available, plus Hawaii-exclusive lilikoi and haupia (coconut) bingsu. It\'s a unique fusion of familiar Korean taste with tropical Hawaiian flair.',
      p3: 'After a morning at the beach, walk up to Kalakaua Avenue and cool down with a refreshing bowl of bingsu. Instagram-worthy presentation is a bonus.',
    },
    recommended: {
      title: 'Recommended Waikiki Restaurants',
      subtitle: 'Curated picks that Korean tourists should not miss.',
      shops: [
        {
          rank: 1,
          name: 'Kona Coffee Donut',
          address: '2142 Kalakaua Ave, Waikiki',
          description: 'Enjoy 100% Kona coffee, MOCHILAND mochi donuts, malasadas, bingsu, and Korean corn dogs all in one place. Located on Kalakaua Avenue, just a 5-minute walk from Waikiki Beach. Everything Korean tourists love, under one roof.',
          hours: 'Daily 7AM – 9PM',
          mustTry: ['100% Kona Coffee', 'Mochi Donuts', 'Malasada', 'Hawaiian Bingsu', 'Korean Corn Dog'],
          highlight: true,
        },
        {
          rank: 2,
          name: 'Island Vintage Coffee',
          address: 'Royal Hawaiian Center, Waikiki',
          description: 'Popular cafe for Kona coffee in Waikiki. Acai bowls are also a hit. Located inside the Royal Hawaiian Center for convenient shopping breaks.',
          hours: 'Daily 6AM – 9PM',
          mustTry: ['Kona Coffee', 'Acai Bowl'],
          highlight: false,
        },
        {
          rank: 3,
          name: 'Leonard\'s Bakery',
          address: '933 Kapahulu Ave (5min drive from Waikiki)',
          description: 'Legendary malasada shop operating since 1952. The original malasada institution — long lines but absolutely worth the wait.',
          hours: 'Daily 5:30AM – 7PM',
          mustTry: ['Original Malasada', 'Custard Malasada'],
          highlight: false,
        },
        {
          rank: 4,
          name: 'Matsumoto Shave Ice',
          address: 'Haleiwa, North Shore (1hr drive from Waikiki)',
          description: 'Iconic North Shore shave ice shop. Far from Waikiki but a must-stop during a North Shore tour. Operating since 1951.',
          hours: 'Daily 9AM – 6PM',
          mustTry: ['Rainbow Shave Ice'],
          highlight: false,
        },
        {
          rank: 5,
          name: 'Marukame Udon',
          address: '2310 Kuhio Ave, Waikiki',
          description: 'Waikiki\'s most famous udon shop. Always a line but fast turnover. Affordable fresh udon popular with Korean tourists too.',
          hours: 'Daily 11AM – 9PM',
          mustTry: ['Kake Udon', 'Ontama Udon'],
          highlight: false,
        },
      ],
    },
    pricing: {
      title: 'Waikiki Food Price Guide',
      subtitle: 'Practical price info for Korean tourists (USD, April 2026 rate approx. 1,380 KRW/USD)',
      categories: [
        {
          name: 'Coffee & Drinks',
          items: [
            { item: '100% Kona Coffee (Hot)', price: '$5–$7', krw: 'approx. 6,900–9,700 KRW' },
            { item: 'Kona Coffee Latte', price: '$6–$8', krw: 'approx. 8,300–11,000 KRW' },
            { item: 'Cold Brew', price: '$6–$8', krw: 'approx. 8,300–11,000 KRW' },
          ],
        },
        {
          name: 'Donuts & Desserts',
          items: [
            { item: 'Mochi Donut (1pc)', price: '$3.50–$4.50', krw: 'approx. 4,800–6,200 KRW' },
            { item: 'Malasada (1pc)', price: '$4–$5', krw: 'approx. 5,500–6,900 KRW' },
            { item: 'Bingsu', price: '$12–$16', krw: 'approx. 16,500–22,000 KRW' },
          ],
        },
        {
          name: 'Meals',
          items: [
            { item: 'Acai Bowl', price: '$10–$14', krw: 'approx. 13,800–19,300 KRW' },
            { item: 'Korean Corn Dog', price: '$6–$8', krw: 'approx. 8,300–11,000 KRW' },
            { item: 'Plate Lunch (Loco Moco etc.)', price: '$12–$18', krw: 'approx. 16,500–24,800 KRW' },
          ],
        },
      ],
      tipInfo: {
        title: 'US Tipping Culture',
        tips: [
          'Cafe/Takeout: No tip or $1–$2 (a 15–20% screen may appear but small amounts are fine at cafes)',
          'Full-service restaurant: 18–20% of pre-tax total is standard',
          'Calculate tips on the pre-tax amount',
          'Hawaii sales tax (GET): approximately 4.712%',
        ],
      },
    },
    practicalInfo: {
      title: 'Practical Info for Korean Tourists',
      items: [
        { icon: 'dollar', title: 'Currency & Payment', desc: 'Most shops accept credit cards. Visa and Mastercard preferred. Exchange money in Korea for better rates. Carry only small cash amounts ($50–$100).' },
        { icon: 'clock', title: 'Business Hours', desc: 'Most Waikiki cafes open at 6–7AM. Restaurant last orders are typically 8–9PM. Many places are open on Sundays.' },
        { icon: 'map', title: 'Location & Transport', desc: 'Most food spots are concentrated along Kalakaua Avenue — walkable. Ala Moana Center is about 15 min by bus (TheBus).' },
        { icon: 'star', title: 'Local Tips', desc: 'Visit popular spots before 10AM to avoid lines. Check real-time wait times on Google Maps. Say "allergy" if you have dietary restrictions.' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'Where can I drink Kona coffee in Waikiki?',
          a: 'Kona Coffee Donut on Kalakaua Avenue in Waikiki serves 100% authentic Kona coffee — not a Kona Blend, but pure 100% Kona beans. Island Vintage Coffee at the Royal Hawaiian Center also sells Kona coffee.',
        },
        {
          q: 'What\'s the difference between malasada and regular donuts?',
          a: 'Malasadas are Portuguese-origin Hawaiian donuts without a hole in the center. They\'re made from yeast dough fried in oil and rolled in sugar while warm. The texture is crispy outside and airy-soft inside. Cream and fruit-filled versions are also popular.',
        },
        {
          q: 'How much should I budget for food in Waikiki?',
          a: 'Coffee is $5–$8 (approx. 6,900–11,000 KRW), donuts $3.50–$5 (approx. 4,800–6,900 KRW), bingsu $12–$16 (approx. 16,500–22,000 KRW). A bit pricier than Korean cafes, but reasonable for Hawaii and 100% Kona beans.',
        },
        {
          q: 'Is there bingsu in Waikiki?',
          a: 'Yes! Kona Coffee Donut serves authentic Korean bingsu with Hawaiian tropical fruits like mango and lilikoi. Located a 5-minute walk from Waikiki Beach — perfect for cooling down after the beach.',
        },
        {
          q: 'Can I bring Kona coffee beans back to Korea?',
          a: 'Yes, roasted Kona coffee beans can be brought into Korea without customs declaration. Green beans require inspection, so buy roasted. We sell 100% Kona bean packages — great as souvenirs. Duty-free up to $800 USD.',
        },
      ],
    },
    cta: {
      title: 'Start Your Waikiki Food Tour at Kona Coffee Donut',
      text: 'A cup of 100% Kona coffee, fresh malasada, chewy mochi donuts, and refreshing bingsu. Create delicious memories on your Hawaii trip.',
      address: '2142 Kalakaua Ave, Waikiki, Honolulu, HI 96815',
      button: 'Get Directions (Google Maps)',
      menuButton: 'View Menu',
    },
  },
  ja: {
    hero: {
      badge: '2026年最新版',
      title: 'ワイキキグルメガイド2026',
      subtitle: 'コナコーヒーからマラサダまで、ハワイで絶対に食べるべきものを完全網羅',
    },
    tableOfContents: {
      title: '目次',
      items: [
        'ワイキキで必ず食べるべきもの',
        'コナコーヒーとは？',
        'マラサダとは？',
        'モチドーナツ — MOCHILAND',
        'ビンス — ハワイで韓国かき氷を',
        'おすすめレストランリスト',
        '価格帯ガイド',
        'よくある質問',
      ],
    },
    intro: {
      title: 'ワイキキで必ず食べるべきもの',
      p1: 'ハワイ旅行を計画していますか？ワイキキは美しいビーチだけではありません。世界各国のグルメが融合した本格的な食の楽園でもあります。',
      p2: 'ハワイの食文化は、ポリネシアン、日本、ポルトガル、アメリカなど多様な文化が融合し、独特な味の世界を生み出しました。コナコーヒー、マラサダ、モチドーナツ、ビンスが特に人気です。',
      p3: 'このガイドではワイキキのグルメスポットを徹底分析し、価格、場所、営業時間、チップ文化まで必要な情報をすべてお届けします。',
      highlights: [
        { icon: 'coffee', label: 'コナコーヒー', desc: '世界三大コーヒー、ビッグアイランド直送' },
        { icon: 'donut', label: 'マラサダ', desc: 'ポルトガル伝統ドーナツのハワイ版' },
        { icon: 'sparkle', label: 'モチドーナツ', desc: '外サク中モチの12種類以上のフレーバー' },
        { icon: 'ice', label: 'ビンス', desc: 'ハワイのトロピカルフルーツをのせた韓国式かき氷' },
      ],
    },
    konaCoffee: {
      title: 'コナコーヒーとは？ — ハワイプレミアムコーヒーのすべて',
      p1: 'コナコーヒーはハワイ・ビッグアイランドのコナ地区で栽培されるプレミアムコーヒーです。世界三大コーヒーの一つで、全世界のコーヒー生産量の1%未満の希少な豆です。',
      p2: 'なめらかでクリーン、苦味が少なく、ナッツやキャラメルのような甘さが特徴。酸味は明るく軽やかで、コーヒーが苦手な方でも楽しめます。',
      p3: '「コナブレンド」はコナ豆が10%しか含まれていない場合があります。本物を味わうなら「100% Kona Coffee」表記を確認してください。当店では100%正真正銘のコナ豆のみを使用しています。',
      tip: 'ローストされたコナコーヒー豆は税関申告なしで日本に持ち込めます。生豆は検疫対象のため、ロースト済みの製品をお買い求めください。',
      stats: [
        { label: '栽培高度', value: '200〜800m' },
        { label: '年間生産量', value: '世界の1%未満' },
        { label: '収穫時期', value: '8月〜1月' },
        { label: '価格帯', value: '1lbあたり$30〜$60' },
      ],
    },
    malasada: {
      title: 'マラサダとは？ — ハワイの伝統デザート',
      p1: 'マラサダは19世紀にポルトガル移民がハワイに伝えた伝統ドーナツです。穴がないのが特徴で、揚げたてに砂糖をまぶして食べます。',
      p2: '伝統的なマラサダはシンプルに砂糖だけですが、カスタード、ハウピア（ココナッツクリーム）、ウベ、リリコイなどのフィリングが人気です。',
      p3: 'マラサダは必ず揚げたてを食べてください。当店では注文後すぐに揚げて最高の状態でお届けします。',
    },
    mochiDonut: {
      title: 'モチドーナツ — MOCHILANDの魅力',
      p1: 'モチドーナツは日本のもちにインスパイアされた、外はサクサク中はもちもちのドーナツです。グルテンが少なく軽い食感が特徴。',
      p2: '当店のMOCHILANDでは、ウベ、抹茶、黒糖、いちご、タロ、リリコイなど12種類以上のフレーバーを毎朝新鮮にお作りしています。',
      p3: 'ハワイのモチドーナツは、トロピカルフルーツフレーバーとローカル食材を使用している点が特別です。',
    },
    bingsu: {
      title: 'ビンス — ハワイで韓国かき氷を楽しむ',
      p1: 'ハワイの暖かい日差しの下、冷たいビンスほど完璧なデザートはありません。韓国の代表的な夏デザートがワイキキでも楽しめます。',
      p2: '当店では韓国正統ビンスにハワイのトロピカルフルーツを合わせた特別なビンスをご用意。マンゴー、いちご、小豆はもちろん、リリコイやハウピアビンスも。',
      p3: 'ビーチで遊んだ後、カラカウア通りで冷たいビンスをどうぞ。インスタ映えも抜群です。',
    },
    recommended: {
      title: 'ワイキキおすすめレストラン',
      subtitle: '必ず行くべきワイキキのグルメスポット厳選。',
      shops: [
        {
          rank: 1, name: 'Kona Coffee Donut', address: '2142 Kalakaua Ave, Waikiki',
          description: '100%コナコーヒー、MOCHILAND、マラサダ、ビンス、コーンドッグが一か所で。ワイキキビーチから徒歩5分。',
          hours: '毎日 7:00–21:00', mustTry: ['100%コナコーヒー', 'モチドーナツ', 'マラサダ', 'ビンス', 'コーンドッグ'], highlight: true,
        },
        {
          rank: 2, name: 'Island Vintage Coffee', address: 'Royal Hawaiian Center, Waikiki',
          description: 'ワイキキでコナコーヒーを楽しめる有名カフェ。アサイーボウルも人気。',
          hours: '毎日 6:00–21:00', mustTry: ['コナコーヒー', 'アサイーボウル'], highlight: false,
        },
        {
          rank: 3, name: 'Leonard\'s Bakery', address: '933 Kapahulu Ave',
          description: '1952年創業の伝説的マラサダ専門店。行列必至ですが待つ価値あり。',
          hours: '毎日 5:30–19:00', mustTry: ['オリジナルマラサダ'], highlight: false,
        },
        {
          rank: 4, name: 'Matsumoto Shave Ice', address: 'Haleiwa, North Shore',
          description: 'ノースショアの名物シェイブアイス。1951年創業。',
          hours: '毎日 9:00–18:00', mustTry: ['レインボーシェイブアイス'], highlight: false,
        },
        {
          rank: 5, name: 'Marukame Udon', address: '2310 Kuhio Ave, Waikiki',
          description: 'ワイキキで最も有名なうどん店。リーズナブルで回転が速い。',
          hours: '毎日 11:00–21:00', mustTry: ['かけうどん'], highlight: false,
        },
      ],
    },
    pricing: {
      title: 'ワイキキグルメ価格帯ガイド',
      subtitle: '実用的な価格情報（USD基準、2026年4月レート約150円/ドル）',
      categories: [
        { name: 'コーヒー＆ドリンク', items: [
          { item: '100%コナコーヒー', price: '$5〜$7', krw: '約750〜1,050円' },
          { item: 'コナコーヒーラテ', price: '$6〜$8', krw: '約900〜1,200円' },
          { item: 'コールドブリュー', price: '$6〜$8', krw: '約900〜1,200円' },
        ]},
        { name: 'ドーナツ＆デザート', items: [
          { item: 'モチドーナツ（1個）', price: '$3.50〜$4.50', krw: '約525〜675円' },
          { item: 'マラサダ（1個）', price: '$4〜$5', krw: '約600〜750円' },
          { item: 'ビンス', price: '$12〜$16', krw: '約1,800〜2,400円' },
        ]},
        { name: '食事', items: [
          { item: 'アサイーボウル', price: '$10〜$14', krw: '約1,500〜2,100円' },
          { item: 'コーンドッグ', price: '$6〜$8', krw: '約900〜1,200円' },
          { item: 'プレートランチ', price: '$12〜$18', krw: '約1,800〜2,700円' },
        ]},
      ],
      tipInfo: {
        title: 'アメリカのチップ文化',
        tips: [
          'カフェ/テイクアウト：チップなしまたは$1〜$2',
          'レストラン：税前金額の18〜20%が基本',
          'ハワイ消費税（GET）：約4.712%',
        ],
      },
    },
    practicalInfo: {
      title: '観光客向け実用情報',
      items: [
        { icon: 'dollar', title: '通貨＆決済', desc: 'ほとんどの店でクレジットカード利用可能。Visa/Mastercard推奨。' },
        { icon: 'clock', title: '営業時間', desc: 'カフェは朝6〜7時オープン。レストランのラストオーダーは20〜21時頃。' },
        { icon: 'map', title: 'アクセス', desc: 'カラカウア通り沿いに集中。アラモアナはバスで約15分。' },
        { icon: 'star', title: '現地のコツ', desc: '人気店は10時前の訪問がおすすめ。Google Mapsで待ち時間確認を。' },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        { q: 'ワイキキでコナコーヒーはどこで飲めますか？', a: 'カラカウア通りのKona Coffee Donutで100%コナコーヒーをお楽しみいただけます。Island Vintage Coffeeでも販売しています。' },
        { q: 'マラサダと普通のドーナツの違いは？', a: 'マラサダはポルトガル由来の穴なしドーナツ。イースト生地を揚げて砂糖をまぶします。外はカリッと中はふわふわ。' },
        { q: 'ワイキキの食事の予算は？', a: 'コーヒー$5〜$8、ドーナツ$3.50〜$5、ビンス$12〜$16程度です。' },
        { q: 'ワイキキでビンスは食べられますか？', a: 'はい、Kona Coffee Donutで韓国正統ビンスにハワイフルーツを合わせたメニューを提供しています。' },
        { q: 'コナコーヒー豆は日本に持ち帰れますか？', a: 'ローストされた豆は申告なしで持ち込み可能です。当店でも100%コナ豆パッケージを販売しています。' },
      ],
    },
    cta: {
      title: 'ワイキキグルメツアー、コナコーヒードーナツで始めよう',
      text: '100%コナコーヒー、揚げたてマラサダ、もちもちドーナツ、冷たいビンス。ハワイの美味しい思い出を作りましょう。',
      address: '2142 Kalakaua Ave, Waikiki, Honolulu, HI 96815',
      button: '道順を見る',
      menuButton: 'メニューを見る',
    },
  },
  zh: {
    hero: {
      badge: '2026年最新版',
      title: '威基基美食完全指南2026',
      subtitle: '从科纳咖啡到马拉萨达，夏威夷必吃美食全攻略',
    },
    tableOfContents: {
      title: '目录',
      items: [
        '威基基必吃美食',
        '什么是科纳咖啡？',
        '什么是马拉萨达？',
        '麻糬甜甜圈 — MOCHILAND',
        '刨冰 — 在夏威夷遇见韩式刨冰',
        '推荐餐厅列表',
        '价格指南',
        '常见问题',
      ],
    },
    intro: {
      title: '威基基必吃美食',
      p1: '计划去夏威夷旅行？威基基不仅有美丽的海滩，更是一个汇聚世界各地美食文化的美食天堂。',
      p2: '夏威夷的饮食文化融合了波利尼西亚、日本、葡萄牙和美国等多种文化，创造出独特的味觉世界。科纳咖啡、马拉萨达、麻糬甜甜圈和刨冰是最受欢迎的美食。',
      p3: '本指南全面分析威基基美食，涵盖价格、位置、营业时间和小费文化等实用信息。',
      highlights: [
        { icon: 'coffee', label: '科纳咖啡', desc: '世界三大咖啡之一，来自大岛' },
        { icon: 'donut', label: '马拉萨达', desc: '葡萄牙传统甜甜圈的夏威夷版' },
        { icon: 'sparkle', label: '麻糬甜甜圈', desc: '外酥内糯，12种以上口味' },
        { icon: 'ice', label: '刨冰', desc: '搭配热带水果的韩式牛奶刨冰' },
      ],
    },
    konaCoffee: {
      title: '什么是科纳咖啡？— 夏威夷顶级咖啡全解析',
      p1: '科纳咖啡产自夏威夷大岛科纳地区，是世界三大咖啡之一，产量不到全球的1%。火山土壤、适宜海拔和独特微气候造就了它的非凡品质。',
      p2: '口感顺滑干净，苦味低，带有微妙的坚果和焦糖甜味。酸度明亮轻柔，即使不常喝咖啡的人也能轻松享用。',
      p3: '"科纳混合（Kona Blend）"可能只含10%科纳豆。请认准"100% Kona Coffee"标识。我们只使用100%正宗科纳豆。',
      tip: '烘焙过的科纳咖啡豆可以无需申报带入中国。生豆需要检疫，请购买烘焙产品。',
      stats: [
        { label: '种植海拔', value: '200–800米' },
        { label: '年产量', value: '全球不到1%' },
        { label: '收获季节', value: '8月–1月' },
        { label: '价格区间', value: '$30–$60/磅' },
      ],
    },
    malasada: {
      title: '什么是马拉萨达？— 夏威夷标志性甜点',
      p1: '马拉萨达是19世纪葡萄牙移民带到夏威夷的传统甜甜圈。没有中间的孔洞，刚炸好时裹上砂糖，外酥内软。',
      p2: '传统只裹糖，现代版本有奶油、椰子奶油、紫薯、百香果等馅料。热带水果馅料特别推荐。',
      p3: '必须趁热吃！我们现点现炸，确保每个马拉萨达都是最佳状态。',
    },
    mochiDonut: {
      title: '麻糬甜甜圈 — MOCHILAND的魅力',
      p1: '麻糬甜甜圈灵感来自日本麻糬，外酥内糯的独特口感让人着迷。少麸质，口感轻盈。',
      p2: '我们的MOCHILAND品牌提供紫薯、抹茶、黑糖、草莓等12种以上口味，每天早晨新鲜制作。',
      p3: '夏威夷的麻糬甜甜圈使用热带水果口味和当地食材，体验独一无二。',
    },
    bingsu: {
      title: '刨冰 — 在夏威夷邂逅韩式刨冰',
      p1: '夏威夷的阳光下，一碗冰凉的刨冰再完美不过了。韩国经典夏日甜品现在威基基也能享用。',
      p2: '我们将韩式正宗刨冰与夏威夷热带水果相融合。芒果、草莓、红豆，还有百香果和椰子口味。',
      p3: '海滩嬉戏后，到卡拉卡瓦大道来一碗清凉刨冰。拍照效果也超棒。',
    },
    recommended: {
      title: '威基基推荐美食店',
      subtitle: '精选必去美食地点。',
      shops: [
        {
          rank: 1, name: 'Kona Coffee Donut（科纳咖啡甜甜圈）', address: '2142 Kalakaua Ave, Waikiki',
          description: '100%科纳咖啡、MOCHILAND麻糬甜甜圈、马拉萨达、刨冰、韩式热狗一站式享受。距威基基海滩步行5分钟。',
          hours: '每天 7:00–21:00', mustTry: ['100%科纳咖啡', '麻糬甜甜圈', '马拉萨达', '刨冰', '韩式热狗'], highlight: true,
        },
        {
          rank: 2, name: 'Island Vintage Coffee', address: 'Royal Hawaiian Center',
          description: '威基基知名科纳咖啡馆。巴西莓碗也很受欢迎。', hours: '每天 6:00–21:00', mustTry: ['科纳咖啡', '巴西莓碗'], highlight: false,
        },
        {
          rank: 3, name: 'Leonard\'s Bakery', address: '933 Kapahulu Ave',
          description: '1952年创立的传奇马拉萨达店。排队虽长但值得等。', hours: '每天 5:30–19:00', mustTry: ['原味马拉萨达'], highlight: false,
        },
        {
          rank: 4, name: 'Matsumoto Shave Ice', address: 'Haleiwa, North Shore',
          description: '北岸标志性刨冰店，1951年至今。', hours: '每天 9:00–18:00', mustTry: ['彩虹刨冰'], highlight: false,
        },
        {
          rank: 5, name: 'Marukame Udon', address: '2310 Kuhio Ave',
          description: '威基基最著名的乌冬面店。价格实惠，翻桌快。', hours: '每天 11:00–21:00', mustTry: ['清汤乌冬'], highlight: false,
        },
      ],
    },
    pricing: {
      title: '威基基美食价格指南',
      subtitle: '实用价格信息（美元，2026年4月汇率约7.25元/美元）',
      categories: [
        { name: '咖啡和饮品', items: [
          { item: '100%科纳咖啡', price: '$5–$7', krw: '约36–51元' },
          { item: '科纳拿铁', price: '$6–$8', krw: '约44–58元' },
          { item: '冷萃咖啡', price: '$6–$8', krw: '约44–58元' },
        ]},
        { name: '甜甜圈和甜品', items: [
          { item: '麻糬甜甜圈（1个）', price: '$3.50–$4.50', krw: '约25–33元' },
          { item: '马拉萨达（1个）', price: '$4–$5', krw: '约29–36元' },
          { item: '刨冰', price: '$12–$16', krw: '约87–116元' },
        ]},
        { name: '正餐', items: [
          { item: '巴西莓碗', price: '$10–$14', krw: '约73–102元' },
          { item: '韩式热狗', price: '$6–$8', krw: '约44–58元' },
          { item: '夏威夷便当', price: '$12–$18', krw: '约87–131元' },
        ]},
      ],
      tipInfo: {
        title: '美国小费文化',
        tips: [
          '咖啡厅/外带：无需小费或$1–$2',
          '正式餐厅：税前金额的18–20%',
          '夏威夷消费税（GET）：约4.712%',
        ],
      },
    },
    practicalInfo: {
      title: '游客实用信息',
      items: [
        { icon: 'dollar', title: '货币和支付', desc: '大多数店铺接受信用卡。推荐Visa/Mastercard。' },
        { icon: 'clock', title: '营业时间', desc: '咖啡厅早6–7点开门。餐厅最后点餐通常在晚8–9点。' },
        { icon: 'map', title: '交通', desc: '美食集中在卡拉卡瓦大道，步行可达。阿拉莫阿纳坐公交约15分钟。' },
        { icon: 'star', title: '当地建议', desc: '热门店铺10点前去可避开排队。Google Maps可查实时等待时间。' },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        { q: '威基基哪里能喝到科纳咖啡？', a: '卡拉卡瓦大道的Kona Coffee Donut提供100%科纳咖啡。Island Vintage Coffee也有售。' },
        { q: '马拉萨达和普通甜甜圈有什么区别？', a: '马拉萨达是葡萄牙传统无孔甜甜圈，酵母面团油炸后裹糖，外酥内软。也有奶油和水果馅料版本。' },
        { q: '威基基吃饭预算多少？', a: '咖啡$5–$8，甜甜圈$3.50–$5，刨冰$12–$16左右。' },
        { q: '威基基有刨冰吗？', a: '有，Kona Coffee Donut提供韩式刨冰搭配夏威夷热带水果。距海滩步行5分钟。' },
        { q: '科纳咖啡豆能带回国吗？', a: '烘焙过的咖啡豆可以携带入境。生豆需要检疫。我们也出售100%科纳豆包装，适合做伴手礼。' },
      ],
    },
    cta: {
      title: '威基基美食之旅，从科纳咖啡甜甜圈开始',
      text: '一杯100%科纳咖啡、新鲜马拉萨达、Q弹麻糬甜甜圈、清凉刨冰。在夏威夷创造美味回忆。',
      address: '2142 Kalakaua Ave, Waikiki, Honolulu, HI 96815',
      button: '获取路线',
      menuButton: '查看菜单',
    },
  },
};

// BlogPosting JSON-LD
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '와이키키 맛집 완벽 가이드 2026: 코나 커피부터 말라사다까지',
  description: '2026년 와이키키 맛집 추천! 하와이 코나 커피, 말라사다, 모찌 도넛, 빙수 등 꼭 먹어야 할 음식 총정리. 한국 관광객을 위한 완벽 가이드.',
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
    '@id': 'https://www.konacoffeedonut.com/ko/blog/waikiki-food-guide-korean',
  },
  inLanguage: 'ko',
  keywords: '와이키키 맛집, 코나커피, 코나 커피, 말라사다, 하와이 코나 커피, 모찌 도넛, 빙수, 하와이 맛집',
};

// FAQPage JSON-LD
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '와이키키에서 코나 커피는 어디서 마실 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '와이키키 칼라카우아 애비뉴에 위치한 Kona Coffee Donut에서 100% 정통 코나 커피를 즐기실 수 있습니다. 코나 블렌드가 아닌 100% 코나 원두만을 사용합니다. Island Vintage Coffee 등 로얄 하와이안 센터 내 카페에서도 코나 커피를 판매합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '말라사다와 일반 도넛의 차이는 뭔가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '말라사다는 포르투갈에서 유래한 하와이 전통 도넛으로, 일반 도넛과 달리 가운데 구멍이 없습니다. 이스트 반죽을 기름에 튀긴 후 설탕을 묻히며, 겉은 바삭하고 안은 에어리하고 부드러운 것이 특징입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '와이키키 맛집 가격대는 어느 정도인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '커피 한 잔은 $5~$8(약 6,900~11,000원), 도넛류는 $3.50~$5(약 4,800~6,900원), 빙수는 $12~$16(약 16,500~22,000원) 정도입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '와이키키에서 빙수를 먹을 수 있는 곳이 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut에서 한국 정통 빙수를 즐기실 수 있습니다. 우유 얼음을 곱게 갈아 만든 빙수에 하와이 열대 과일을 올린 하와이안 빙수가 특히 인기입니다. 와이키키 비치에서 도보 5분 거리에 위치해 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '하와이 코나 커피 원두를 한국으로 가져갈 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '로스팅된 코나 커피 원두는 별도의 세관 신고 없이 한국으로 반입 가능합니다. 생두(green beans)는 식물검역 대상이므로 로스팅된 원두를 구매하세요. 면세 한도(미화 $800) 안에서는 세금 없이 반입 가능합니다.',
      },
    },
  ],
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WaikikiFoodGuideKoreanPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'ko';
  const t = content[locale as keyof typeof content] || content.ko;

  const getIcon = (type: string) => {
    switch (type) {
      case 'coffee': return <Coffee className="w-6 h-6" />;
      case 'donut': return <span className="text-2xl">🍩</span>;
      case 'sparkle': return <Sparkles className="w-6 h-6" />;
      case 'ice': return <span className="text-2xl">🍧</span>;
      case 'dollar': return <DollarSign className="w-5 h-5" />;
      case 'clock': return <Clock className="w-5 h-5" />;
      case 'map': return <MapPin className="w-5 h-5" />;
      case 'star': return <Star className="w-5 h-5" />;
      default: return null;
    }
  };

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

      <main className="min-h-screen bg-[#0a0a0a] text-gray-100">
        <SubpageNav locale={locale} />

        {/* Hero Section */}
        <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f07]/90 via-[#0a0a0a]/70 to-[#0a0a0a] z-10" />
          <div className="absolute inset-0">
            <Image
              src="/images/background/waikiki-sunrise.jpg"
              alt="와이키키 맛집 가이드 2026 - Waikiki Food Guide"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <motion.span
              className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t.hero.badge}
            </motion.span>
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto bg-[#141414] border border-gray-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-semibold text-amber-300 mb-4">{t.tableOfContents.title}</h2>
            <ol className="space-y-2">
              {t.tableOfContents.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 hover:text-amber-200 transition-colors">
                  <span className="text-amber-500/70 font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-amber-100 mb-6">{t.intro.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{t.intro.p1}</p>
              <p className="text-gray-300 leading-relaxed mb-4">{t.intro.p2}</p>
              <p className="text-gray-300 leading-relaxed mb-8">{t.intro.p3}</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.intro.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 text-center"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex justify-center mb-2 text-amber-400">{getIcon(h.icon)}</div>
                  <h3 className="text-sm font-semibold text-amber-200 mb-1">{h.label}</h3>
                  <p className="text-xs text-gray-400">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kona Coffee Section */}
        <section className="py-12 px-4 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <Coffee className="w-7 h-7 text-amber-400" />
                <h2 className="text-2xl md:text-3xl font-bold text-amber-100">{t.konaCoffee.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{t.konaCoffee.p1}</p>
              <p className="text-gray-300 leading-relaxed mb-4">{t.konaCoffee.p2}</p>
              <p className="text-gray-300 leading-relaxed mb-6">{t.konaCoffee.p3}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {t.konaCoffee.stats.map((stat, i) => (
                  <div key={i} className="bg-[#1a1a1a] border border-amber-900/30 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-sm font-semibold text-amber-300">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Tip Box */}
              <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4">
                <p className="text-sm text-amber-200/90 flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">TIP</span>
                  {t.konaCoffee.tip}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Malasada Section */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🍩</span>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-100">{t.malasada.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{t.malasada.p1}</p>
              <p className="text-gray-300 leading-relaxed mb-4">{t.malasada.p2}</p>
              <p className="text-gray-300 leading-relaxed">{t.malasada.p3}</p>
            </motion.div>
          </div>
        </section>

        {/* Mochi Donut Section */}
        <section className="py-12 px-4 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-7 h-7 text-amber-400" />
                <h2 className="text-2xl md:text-3xl font-bold text-amber-100">{t.mochiDonut.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{t.mochiDonut.p1}</p>
              <p className="text-gray-300 leading-relaxed mb-4">{t.mochiDonut.p2}</p>
              <p className="text-gray-300 leading-relaxed">{t.mochiDonut.p3}</p>
            </motion.div>
          </div>
        </section>

        {/* Bingsu Section */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🍧</span>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-100">{t.bingsu.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{t.bingsu.p1}</p>
              <p className="text-gray-300 leading-relaxed mb-4">{t.bingsu.p2}</p>
              <p className="text-gray-300 leading-relaxed">{t.bingsu.p3}</p>
            </motion.div>
          </div>
        </section>

        {/* Recommended Restaurants */}
        <section className="py-12 px-4 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-amber-100 mb-2 text-center">{t.recommended.title}</h2>
              <p className="text-gray-400 text-center mb-10">{t.recommended.subtitle}</p>
            </motion.div>

            <div className="space-y-6">
              {t.recommended.shops.map((shop, i) => (
                <motion.div
                  key={i}
                  className={`rounded-2xl p-6 md:p-8 border ${
                    shop.highlight
                      ? 'bg-gradient-to-br from-amber-900/30 to-[#1a1a1a] border-amber-600/40'
                      : 'bg-[#141414] border-gray-800'
                  }`}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                      shop.highlight ? 'bg-amber-500 text-black' : 'bg-gray-800 text-gray-400'
                    }`}>
                      {shop.rank}
                    </span>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-1 ${shop.highlight ? 'text-amber-200' : 'text-gray-100'}`}>
                        {shop.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 mb-3">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {shop.address}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {shop.hours}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-3">{shop.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {shop.mustTry.map((item, j) => (
                          <span key={j} className={`px-3 py-1 rounded-full text-xs font-medium ${
                            shop.highlight
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'bg-gray-800 text-gray-400'
                          }`}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-amber-100 mb-2 text-center">{t.pricing.title}</h2>
              <p className="text-gray-400 text-center mb-10 text-sm">{t.pricing.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {t.pricing.categories.map((cat, i) => (
                <motion.div
                  key={i}
                  className="bg-[#141414] border border-gray-800 rounded-xl overflow-hidden"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="bg-amber-900/20 px-5 py-3 border-b border-gray-800">
                    <h3 className="font-semibold text-amber-200">{cat.name}</h3>
                  </div>
                  <div className="p-5 space-y-4">
                    {cat.items.map((item, j) => (
                      <div key={j}>
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-sm text-gray-300">{item.item}</span>
                          <span className="text-sm font-semibold text-amber-300">{item.price}</span>
                        </div>
                        <p className="text-xs text-gray-500">{item.krw}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tip Culture */}
            <motion.div
              className="bg-[#141414] border border-gray-800 rounded-xl p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-semibold text-amber-200 mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                {t.pricing.tipInfo.title}
              </h3>
              <ul className="space-y-2">
                {t.pricing.tipInfo.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-amber-500/50 mt-0.5 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Practical Info */}
        <section className="py-12 px-4 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-amber-100 mb-8 text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t.practicalInfo.title}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.practicalInfo.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-[#141414] border border-gray-800 rounded-xl p-5"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-900/30 flex items-center justify-center text-amber-400">
                      {getIcon(item.icon)}
                    </div>
                    <h3 className="font-semibold text-amber-200">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-amber-100 mb-8 text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t.faq.title}
            </motion.h2>
            <div className="space-y-4">
              {t.faq.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-[#141414] border border-gray-800 rounded-xl p-6"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <h3 className="text-base font-semibold text-amber-200 mb-3 flex items-start gap-2">
                    <span className="text-amber-500 font-bold">Q.</span>
                    {item.q}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed pl-6">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-amber-900/20 to-[#0a0a0a]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-amber-100 mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-2 leading-relaxed">{t.cta.text}</p>
              <p className="text-sm text-gray-500 mb-8 flex items-center justify-center gap-1">
                <MapPin className="w-4 h-4" />
                {t.cta.address}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full font-semibold text-base transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  {t.cta.button}
                </a>
                <Link
                  href={`/${locale}/menu`}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-amber-500/50 hover:border-amber-400 text-amber-300 hover:text-amber-200 px-8 py-4 rounded-full font-semibold text-base transition-colors"
                >
                  {t.cta.menuButton}
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
