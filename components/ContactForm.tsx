import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto border border-slate-100">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-fade-in">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Благодарим Ви!</h3>
          <p className="text-slate-600">Вашето съобщение беше изпратено успешно. Ще се свържем с вас скоро.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Име</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-regmi-500 focus:border-regmi-500 transition-colors outline-none"
              placeholder="Вашето име"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Адрес</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-regmi-500 focus:border-regmi-500 transition-colors outline-none"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-regmi-500 focus:border-regmi-500 transition-colors outline-none"
              placeholder="+359..."
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Съобщение</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-regmi-500 focus:border-regmi-500 transition-colors outline-none resize-none"
              placeholder="Как можем да ви помогнем?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-regmi-600 hover:bg-regmi-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <span>Изпрати</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
};