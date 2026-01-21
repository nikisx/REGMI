import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Activity, ShieldCheck, BookOpen, Users, Globe, Award, Target, Calendar, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { NavItem, BoardMember, NewsItem } from './types';
import { SectionTitle } from './components/SectionTitle';
import { ContactForm } from './components/ContactForm';

const NAV_ITEMS: NavItem[] = [
  { label: 'Начало', href: '#home' },
  { label: 'За нас', href: '#about' },
  { label: 'Цели', href: '#objectives' },
  { label: 'Ръководство', href: '#board' },
  { label: 'Членство', href: '#membership' },
  { label: 'Новини', href: '#news' },
  { label: 'Контакти', href: '#contact' },
];

const BOARD_MEMBERS: BoardMember[] = [
  { name: 'Проф. д-р Албена Златарева', role: 'Председател', title: 'Експерт по регулация' },
  { name: 'Доц. д-р Иван Малкодански', role: 'Член на УС', title: 'Медицински специалист' },
  { name: 'Доц. Даниела Кафалова д.ф.', role: 'Член на УС', title: 'Фармацевтични науки' },
];

const NEWS_MOCK: NewsItem[] = [
  {
    id: 1,
    title: 'Учредяване на РЕГМИ',
    date: '22.01.2026',
    excerpt: 'Официалното учредяване на Българското научно дружество по регулация и осигуряване на медицински изделия постави началото на нова ера в сектора.',
    imageUrl: 'https://picsum.photos/id/48/800/600'
  },
  // {
  //   id: 2,
  //   title: 'Предстоящ семинар: MDR/IVDR',
  //   date: '15 Юни 2024',
  //   excerpt: 'Заповядайте на нашата първа отворена дискусия относно новите европейски регламенти за медицински изделия.',
  //   imageUrl: 'https://picsum.photos/id/180/800/600'
  // }
];

const OBJECTIVES = [
  "Повишаване на авторитета и видимостта на регулаторната експертиза в сферата на медицинските изделия.",
  "Подкрепа за висок стандарт и последователност в прилагането на регулаторни изисквания и добри практики.",
  "Разработване на програми, обучения и инициативи за повишаване на професионалното ниво на членовете.",
  "Насърчаване на обмена на знания и внедряване на актуални международни подходи и стандарти.",
  "Сътрудничество със сродни организации в България и чужбина за по-бързо пренасяне на добри практики у нас.",
  "Развитие на международна дейност и професионални контакти.",
  "Подкрепа за поддържане и осъвременяване на квалификацията в областта на регулацията и оценката.",
  "Защита на професионалните интереси на членовете и изграждане на лоялни отношения и етика на работа.",
  "Съдействие за разработване и актуализиране на стандарти и подходи за оценка на качество и стойност."
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
            <img 
              src="./logo.jpg" 
              alt="РЕГМИ" 
              className="h-14 md:h-16 w-auto object-contain" 
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-regmi-600 transition-colors uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#membership" 
              className="bg-regmi-600 hover:bg-regmi-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-md"
            >
              Стани член
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-regmi-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 flex flex-col animate-fade-in-down">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-regmi-600 font-medium border-l-4 border-transparent hover:border-regmi-600 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Medical Laboratory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-regmi-500/20 border border-regmi-400/30 text-regmi-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Activity size={14} />
              Наука • Регулация • Качество
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Българско Научно Дружество по Регулация и Осигуряване на Медицински Изделия
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Работим за по-високо качество, предвидимост и прозрачност в здравеопазването чрез обмен на знания и експертна регулаторна култура.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-regmi-600 rounded-lg hover:bg-regmi-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-regmi-500"
              >
                Научете повече
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-200 transition-all border border-slate-600 rounded-lg hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                Свържете се с нас
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Нашата мисия
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                РЕГМИ приема за своя мисия да събира и развива най-добрите практики, базирани на доказателства, в областта на регулацията и осигуряването на медицински изделия, и да подпомага прилагането им в реалната практика.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                В динамична среда от изисквания, стандарти и технологии, ние работим за по-високо качество, предвидимост и прозрачност — чрез обмен на знания, обучения, експертни дискусии и професионално сътрудничество.
              </p>
              <div className="flex items-center gap-4 text-regmi-700 font-medium">
                <Activity className="w-6 h-6" />
                <span>Сигурни решения за пациента</span>
              </div>
            </div>
            <div className="relative h-full min-h-[400px]">
               <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Medical Team Discussion" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-regmi-600 max-w-xs hidden md:block">
                <p className="text-sm font-bold text-slate-800">
                  "Информираността и добрата регулаторна култура са директен път към по-добри резултати."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Основни цели" 
            subtitle="Нашите стратегически приоритети за развитие на сектора"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OBJECTIVES.map((obj, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                <div className="w-10 h-10 bg-regmi-50 text-regmi-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-regmi-600 group-hover:text-white transition-colors">
                  <span className="font-bold font-display">{index + 1}</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section id="board" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Управителен съвет" 
            subtitle="Водещи експерти, посветени на развитието на организацията"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {BOARD_MEMBERS.map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all border border-slate-100 group">
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-regmi-200">
                  <Users size={48} className="text-regmi-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">{member.name}</h3>
                <p className="text-regmi-600 font-semibold mb-1">{member.role}</p>
                {/* <p className="text-slate-500 text-sm">{member.title}</p> */}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#contact" className="text-regmi-600 font-semibold hover:text-regmi-800 inline-flex items-center gap-2 group">
              Свържете се с ръководството <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Membership Call to Action */}
      <section id="membership" className="py-20 bg-regmi-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Станете част от РЕГМИ</h2>
          <p className="text-xl text-regmi-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Ако споделяте нашата мисия и искате да участвате в инициативи, обучения и експертни дискусии, вижте условията за членство и начина за кандидатстване.
          </p>
          <button 
            onClick={() => window.location.href = '#contact'}
            className="bg-white text-regmi-900 hover:bg-regmi-50 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-3"
          >
            <BookOpen className="w-5 h-5" />
            Кандидатствай за членство
          </button>
        </div>
      </section>

      {/* News Placeholder */}
      <section id="news" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Новини и събития" subtitle="Актуална информация за дейността на дружеството" />
          
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {NEWS_MOCK.map((news) => (
              <article key={news.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full border border-slate-100">
                <div className="h-48 overflow-hidden">
                  <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-regmi-600 mb-2 flex items-center gap-1">
                    <Calendar size={12} />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{news.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    {news.excerpt}
                  </p>
                  {/* <a href="#" className="text-regmi-600 font-bold text-sm hover:underline inline-flex items-center gap-1">
                    Прочети повече <ChevronRight size={14} />
                  </a> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Свържете се с нас" subtitle="Имате въпроси? Изпратете ни съобщение." />
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-regmi-50 rounded-lg flex items-center justify-center text-regmi-600 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-600 text-sm">Пишете ни по всяко време</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-regmi-50 rounded-lg flex items-center justify-center text-regmi-600 flex-shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Онлайн</h4>
                      <p className="text-slate-600 text-sm">Последвайте ни в социалните мрежи за актуални новини.</p>
                      <span className="text-slate-400 text-sm italic">Скоро</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-regmi-50 rounded-lg flex items-center justify-center text-regmi-600 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Локация</h4>
                      <p className="text-slate-600 text-sm">България, София</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <a href="#home" className="flex items-center gap-2 mb-4 text-white">
                <div className="w-8 h-8 bg-regmi-600 rounded flex items-center justify-center font-bold">R</div>
                <span className="font-bold text-xl">РЕГМИ</span>
              </a>
              <p className="text-sm leading-relaxed max-w-xs">
                Българско научно дружество по регулация и осигуряване на медицински изделия.
              </p>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Бързи връзки</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-regmi-400 transition-colors">За нас</a></li>
                <li><a href="#objectives" className="hover:text-regmi-400 transition-colors">Цели</a></li>
                <li><a href="#membership" className="hover:text-regmi-400 transition-colors">Членство</a></li>
                <li><a href="#contact" className="hover:text-regmi-400 transition-colors">Контакти</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Контакт</h4>
              <ul className="space-y-2 text-sm">
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} РЕГМИ. Всички права запазени.</p>
            <div className="mt-4 md:mt-0 flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Политика за поверителност</a>
              <a href="#" className="hover:text-white transition-colors">Общи условия</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;