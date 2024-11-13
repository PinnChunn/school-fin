import React from 'react';
import { Award, Clock, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '專業認證',
    description: '法國藍帶認證主廚團隊，傳承百年工藝技術'
  },
  {
    icon: Clock,
    title: '新鮮製作',
    description: '每日清晨手工現做，堅持最佳品質'
  },
  {
    icon: Users,
    title: '用心服務',
    description: '專業團隊提供貼心諮詢與客製化服務'
  },
  {
    icon: Heart,
    title: '嚴選食材',
    description: '使用頂級法國進口食材，確保極致美味'
  }
];

const About = () => {
  return (
    <div className="py-20 bg-gray-800" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#B87333] mb-4">
            關於我們
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            傳承法式甜點的精緻工藝，為您獻上最純正的味覺饗宴
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80"
              alt="我們的主廚團隊"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-[#B87333] mb-6">
              傳承與創新的完美結合
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              成立於2010年，法式甜點工坊由米其林星級餐廳主廚 Jean-Pierre 領軍，將純正的法式甜點工藝帶進台灣。我們的甜點師傅皆經過法國藍帶學院嚴格的專業訓練，並定期赴法進修，確保每一道甜點都能呈現最道地的法式風味。
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              堅持使用最優質的食材，從法國空運進口的 AOP 認證奶油、比利時頂級巧克力，到在地小農的新鮮水果，每一樣食材都經過嚴格把關。我們相信，只有最好的食材，才能製作出最美味的甜點。
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              每一位甜點師傅都懷抱著對甜點的熱情與執著，在製作過程中注入細膩的心思與專業的技藝。從選料到烘焙，從擺盤到包裝，每個環節都力求完美，為的就是帶給您最極致的味蕾享受。
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#B87333] text-white px-6 py-2 rounded-full hover:bg-[#A66323] transition-colors">
                預約參觀
              </button>
              <button className="border-2 border-[#B87333] text-[#B87333] px-6 py-2 rounded-full hover:bg-[#B87333] hover:text-white transition-colors">
                了解更多
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg text-center group hover:bg-[#B87333] transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-[#B87333] group-hover:text-white transition-colors" />
              <h3 className="text-xl font-serif text-[#B87333] mb-2 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-white/90 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80"
              alt="精緻甜點"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-serif text-[#B87333] mb-2">精緻工藝</h4>
            <p className="text-gray-400">
              每一道甜點都是藝術品，展現法式甜點的精緻與優雅
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&q=80"
              alt="季節限定"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-serif text-[#B87333] mb-2">季節限定</h4>
            <p className="text-gray-400">
              依季節推出特製甜點，使用當季最新鮮的食材
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80"
              alt="客製服務"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-serif text-[#B87333] mb-2">客製服務</h4>
            <p className="text-gray-400">
              提供客製化甜點服務，為您的特別時刻增添甜蜜
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;