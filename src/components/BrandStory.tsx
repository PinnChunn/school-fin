import React from 'react';
import { Star, Award, Heart, Coffee } from 'lucide-react';

const milestones = [
  {
    year: '2010',
    title: '品牌創立',
    description: '由米其林星級主廚 Jean-Pierre 創立，將純正法式甜點帶進台灣。'
  },
  {
    year: '2015',
    title: '榮獲米其林推薦',
    description: '以精湛工藝與創新風味獲得米其林指南推薦。'
  },
  {
    year: '2018',
    title: '國際甜點大賽金獎',
    description: '巧克力歌劇院蛋糕榮獲巴黎國際甜點大賽金獎。'
  },
  {
    year: '2020',
    title: '品牌十週年',
    description: '成功打造台灣最具代表性的法式甜點品牌。'
  }
];

const BrandStory = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-[#B87333] mb-6">
            品牌故事
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            傳承法國甜點工藝，創造獨特味覺體驗
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&q=80"
              alt="甜點製作過程"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-[#B87333]">
              從巴黎到台北的甜蜜旅程
            </h2>
            <p className="text-gray-300 leading-relaxed">
              2010年，在巴黎米其林三星餐廳擁有15年經驗的主廚 Jean-Pierre 懷抱著對甜點的熱情，決定在台北開設法式甜點工坊。他深信，完美的甜點不僅需要精湛的技藝，更需要對細節的執著與對品質的堅持。
            </p>
            <p className="text-gray-300 leading-relaxed">
              我們的每位甜點師傅都經過嚴格的培訓，定期赴法進修，確保能夠完美呈現最道地的法式風味。從選用頂級食材到製作過程的每個細節，我們都秉持著追求完美的精神。
            </p>
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif text-[#B87333] text-center mb-12">
            品牌里程碑
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors"
              >
                <div className="text-[#B87333] text-2xl font-serif mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-white font-serif mb-2">{milestone.title}</h3>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Star className="w-12 h-12 text-[#B87333] mx-auto mb-4" />
            <h3 className="text-white font-serif mb-2">匠心獨具</h3>
            <p className="text-gray-400">
              堅持傳統工藝，每一道甜點都是藝術品
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Award className="w-12 h-12 text-[#B87333] mx-auto mb-4" />
            <h3 className="text-white font-serif mb-2">品質保證</h3>
            <p className="text-gray-400">
              嚴選頂級食材，確保最佳品質
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Heart className="w-12 h-12 text-[#B87333] mx-auto mb-4" />
            <h3 className="text-white font-serif mb-2">用心服務</h3>
            <p className="text-gray-400">
              以客為尊，提供貼心專業服務
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Coffee className="w-12 h-12 text-[#B87333] mx-auto mb-4" />
            <h3 className="text-white font-serif mb-2">創新精神</h3>
            <p className="text-gray-400">
              傳統與創新的完美結合
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80"
              alt="精緻甜點"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80"
              alt="主廚作品"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80"
              alt="季節限定"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;