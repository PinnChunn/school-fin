import React from 'react';

export type Category = {
  id: string;
  name: string;
  description: string;
};

export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  categoryId: string;
  ingredients?: string[];
};

export const categories: Category[] = [
  {
    id: 'macarons',
    name: '馬卡龍',
    description: '精緻可愛的法式甜點，多種獨特風味'
  },
  {
    id: 'choux',
    name: '泡芙',
    description: '酥脆外皮，綿密內餡的完美結合'
  },
  {
    id: 'tarts',
    name: '塔類',
    description: '新鮮水果與香酥塔皮的美味組合'
  },
  {
    id: 'cakes',
    name: '蛋糕',
    description: '經典法式蛋糕，層次豐富口感細緻'
  },
  {
    id: 'seasonal',
    name: '季節限定',
    description: '依季節推出的特製甜點'
  },
  {
    id: 'giftboxes',
    name: '禮盒',
    description: '精美包裝，最佳送禮選擇'
  },
  {
    id: 'teatime',
    name: '下午茶組合',
    description: '豐富多樣的下午茶套餐'
  }
];

export const products: Product[] = [
  // 馬卡龍系列
  {
    id: 1,
    name: '覆盆子馬卡龍',
    price: 'NT$ 320',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80',
    description: '新鮮覆盆子製成的內餡，搭配粉嫩外殼，酸甜適中。',
    categoryId: 'macarons',
    ingredients: ['法國杏仁粉', '新鮮覆盆子', '蛋白', '糖粉', '奶油']
  },
  {
    id: 2,
    name: '開心果馬卡龍',
    price: 'NT$ 320',
    image: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?auto=format&fit=crop&q=80',
    description: '使用西西里開心果製成的內餡，濃郁堅果香氣。',
    categoryId: 'macarons',
    ingredients: ['法國杏仁粉', '西西里開心果醬', '蛋白', '糖粉', '奶油']
  },
  {
    id: 3,
    name: '巧克力馬卡龍',
    price: 'NT$ 320',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&q=80',
    description: '比利時巧克力製成的內餡，經典不敗的口味。',
    categoryId: 'macarons',
    ingredients: ['法國杏仁粉', '比利時巧克力', '蛋白', '糖粉', '奶油']
  },

  // 泡芙系列
  {
    id: 4,
    name: '巧克力閃電泡芙',
    price: 'NT$ 180',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80',
    description: '香濃比利時巧克力醬與法國鮮奶油的完美結合，酥脆的泡芙外皮包裹著綿密的內餡。',
    categoryId: 'choux',
    ingredients: ['比利時頂級巧克力', '法國鮮奶油', '雞蛋', '麵粉', '牛奶']
  },
  {
    id: 5,
    name: '香草卡士達泡芙',
    price: 'NT$ 160',
    image: 'https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&q=80',
    description: '馬達加斯加香草籽製成的卡士達醬，搭配酥脆泡芙皮。',
    categoryId: 'choux',
    ingredients: ['馬達加斯加香草莢', '法國鮮奶油', '雞蛋', '麵粉', '牛奶']
  },
  {
    id: 6,
    name: '焦糖榛果泡芙',
    price: 'NT$ 180',
    image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&q=80',
    description: '手工焦糖醬與榛果醬的結合，濃郁香甜的美味。',
    categoryId: 'choux',
    ingredients: ['法國榛果醬', '手工焦糖醬', '法國鮮奶油', '雞蛋', '麵粉']
  },

  // 塔類系列
  {
    id: 7,
    name: '季節水果塔',
    price: 'NT$ 220',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80',
    description: '嚴選當季水果，搭配香酥塔皮與香草卡士達醬，每一口都能品嚐到新鮮水果的甜美。',
    categoryId: 'tarts',
    ingredients: ['新鮮時令水果', '法國鮮奶油', '杏仁粉', '奶油', '麵粉']
  },
  {
    id: 8,
    name: '檸檬蛋白霜塔',
    price: 'NT$ 200',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80',
    description: '清新檸檬卡士達搭配蓬鬆蛋白霜，酸甜完美平衡。',
    categoryId: 'tarts',
    ingredients: ['有機檸檬', '蛋白', '法國鮮奶油', '杏仁粉', '奶油']
  },
  {
    id: 9,
    name: '巧克力榛果塔',
    price: 'NT$ 240',
    image: 'https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?auto=format&fit=crop&q=80',
    description: '濃郁巧克力甘納許與香脆榛果碎片，口感層次豐富。',
    categoryId: 'tarts',
    ingredients: ['法國榛果', '比利時巧克力', '法國鮮奶油', '杏仁粉', '奶油']
  },

  // 蛋糕系列
  {
    id: 10,
    name: '法式千層薄餅蛋糕',
    price: 'NT$ 1,280',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80',
    description: '層層堆疊的薄餅與香草奶油，搭配焦糖醬，口感豐富層次分明。',
    categoryId: 'cakes',
    ingredients: ['法國奶油', '香草籽', '雞蛋', '麵粉', '手工焦糖醬']
  },
  {
    id: 11,
    name: '巧克力歌劇院蛋糕',
    price: 'NT$ 1,380',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80',
    description: '六層巧克力蛋糕與咖啡慕斯的經典組合。',
    categoryId: 'cakes',
    ingredients: ['比利時巧克力', '咖啡', '杏仁粉', '法國鮮奶油', '可可粉']
  },
  {
    id: 12,
    name: '覆盆子香檳蛋糕',
    price: 'NT$ 1,480',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80',
    description: '清爽的覆盆子慕斯與香檳凍，搭配杏仁海綿蛋糕。',
    categoryId: 'cakes',
    ingredients: ['新鮮覆盆子', '法國香檳', '杏仁粉', '法國鮮奶油', '雞蛋']
  },

  // 季節限定系列
  {
    id: 13,
    name: '草莓季限定塔',
    price: 'NT$ 250',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80',
    description: '季節限定！使用日本空運草莓，搭配特製草莓慕斯與香草卡士達，完美呈現草莓的清甜。',
    categoryId: 'seasonal',
    ingredients: ['日本草莓', '法國鮮奶油', '杏仁粉', '糖粉', '香草籽']
  },
  {
    id: 14,
    name: '夏季芒果千層',
    price: 'NT$ 280',
    image: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&q=80',
    description: '新鮮愛文芒果與香草卡士達層層堆疊，夏季限定。',
    categoryId: 'seasonal',
    ingredients: ['愛文芒果', '法國鮮奶油', '香草籽', '糖粉', '麵粉']
  },
  {
    id: 15,
    name: '秋季栗子蒙布朗',
    price: 'NT$ 260',
    image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80',
    description: '法國進口栗子泥製成，秋季限定甜點。',
    categoryId: 'seasonal',
    ingredients: ['法國栗子', '鮮奶油', '蛋白', '糖粉', '杏仁粉']
  },

  // 禮盒系列
  {
    id: 16,
    name: '經典甜點禮盒',
    price: 'NT$ 1,680',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80',
    description: '精選馬卡龍、巧克力、手工餅乾等綜合禮盒。',
    categoryId: 'giftboxes',
    ingredients: ['馬卡龍', '手工餅乾', '巧克力', '法式軟糖', '蝴蝶酥']
  },
  {
    id: 17,
    name: '節慶特製禮盒',
    price: 'NT$ 2,280',
    image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&q=80',
    description: '特別節慶包裝，內含精選甜點與香檳。',
    categoryId: 'giftboxes',
    ingredients: ['馬卡龍', '巧克力', '法式香檳', '手工餅乾', '蝴蝶酥']
  },
  {
    id: 18,
    name: '手工餅乾禮盒',
    price: 'NT$ 980',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80',
    description: '綜合口味手工餅乾，精美禮盒包裝。',
    categoryId: 'giftboxes',
    ingredients: ['奶油', '杏仁粉', '巧克力', '開心果', '蔓越莓']
  },

  // 下午茶組合
  {
    id: 19,
    name: '經典下午茶組合',
    price: 'NT$ 1,580',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80',
    description: '內含：精選馬卡龍4入、迷你泡芙4入、手工餅乾組合、精選茶包，完美的下午茶饗宴。',
    categoryId: 'teatime',
    ingredients: ['馬卡龍', '迷你泡芙', '手工餅乾', '精選茶包', '司康']
  },
  {
    id: 20,
    name: '豪華雙人下午茶',
    price: 'NT$ 2,180',
    image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?auto=format&fit=crop&q=80',
    description: '內含多款精選甜點與茶品，適合兩人分享。',
    categoryId: 'teatime',
    ingredients: ['馬卡龍', '迷你蛋糕', '水果塔', '司康', '精選茶品']
  },
  {
    id: 21,
    name: '法式早午餐組合',
    price: 'NT$ 1,880',
    image: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&q=80',
    description: '可頌、丹麥酥、咖啡與新鮮果汁的早午餐組合。',
    categoryId: 'teatime',
    ingredients: ['可頌', '丹麥酥', '手工果醬', '精選咖啡', '鮮榨果汁']
  }
];