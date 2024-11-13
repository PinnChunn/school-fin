import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 這裡可以加入表單提交邏輯
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20 bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#B87333] mb-4">
            聯絡我們
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            無論是訂購諮詢、合作提案或是意見回饋，我們都誠摯歡迎您的聯繫
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#B87333] mt-1" />
                  <div>
                    <h3 className="text-white font-serif mb-2">門市地址</h3>
                    <p className="text-gray-400">台北市信義區甜點街123號</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#B87333] mt-1" />
                  <div>
                    <h3 className="text-white font-serif mb-2">聯絡電話</h3>
                    <p className="text-gray-400">+886 (02) 2345-6789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#B87333] mt-1" />
                  <div>
                    <h3 className="text-white font-serif mb-2">電子郵件</h3>
                    <p className="text-gray-400">info@patisserie.com.tw</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#B87333] mt-1" />
                  <div>
                    <h3 className="text-white font-serif mb-2">營業時間</h3>
                    <div className="text-gray-400 space-y-1">
                      <p>週一至週五：07:00 - 20:00</p>
                      <p>週六：08:00 - 21:00</p>
                      <p>週日：08:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7030272993837!2d121.56374931500707!3d25.033976983972536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2z5Y-w5YyX5biC5L-h576p5Y2A!5e0!3m2!1szh-TW!2stw!4v1635825謝謝"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-[#B87333] mb-6">
              聯絡表單
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#B87333]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  電子郵件
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#B87333]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2">
                  聯絡電話
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#B87333]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  訊息內容
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#B87333]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#B87333] text-white py-3 rounded-lg hover:bg-[#A66323] transition-colors"
              >
                送出訊息
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;