import { Link } from 'react-router-dom';

export default function HomePage({ openModal }) {
  return (
    <>
      {/* Блок 1: Hero (строго по ТЗ) */}
      <section className="bg-gradient-to-br from-dark to-gray-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IT-поддержка и внедрение решений для розницы и ресторанов
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Работаем с 2008 года. Поддерживаем бизнес по всей России и СНГ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-primary hover:bg-primaryHover text-white font-bold py-4 px-8 rounded-md transition transform hover:-translate-y-1 text-center">
              Получить консультацию
            </Link>
            <button onClick={openModal} className="bg-transparent border-2 border-white hover:bg-white hover:text-dark text-white font-bold py-4 px-8 rounded-md transition">
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* Блок 1.5: Проблемы аудитории (из ТЗ) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark mb-10">Проблемы, которые мы решаем</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏢', title: 'Нет своего IT-отдела', desc: 'Заменим штатных сотрудников на профессиональную команду без затрат на налоги, рабочее место и оборудование.' },
              { icon: '💸', title: 'Дорогая техподдержка', desc: 'Предлагаем прозрачный IT-аутсорсинг с фиксированной стоимостью, что выгоднее разовых выездов или содержания штата.' },
              { icon: '⚠️', title: 'Нестабильная работа касс и ПО', desc: 'Обеспечим бесперебойную работу POS-систем, CRM и складского учета 24/7, чтобы вы не теряли прибыль.' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-light rounded-lg border border-gray-100 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 2: Для кого мы работаем (строго по ТЗ) */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">Для кого мы работаем</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Розничные сети', desc: 'Поддержка касс, складских систем, минимизация простоев.' },
              { title: 'Рестораны', desc: 'POS системы, CRM, автоматизация кухни и зала.' },
              { title: 'Франшизы', desc: 'Единая IT-инфраструктура и удаленное управление точками.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 3: Наши услуги (строго по ТЗ) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'IT-аутсорсинг', link: '/services' },
              { title: 'Техническая поддержка 24/7', link: '/services' },
              { title: 'Внедрение IT-решений', link: '/services' },
              { title: 'Сопровождение ПО', link: '/services' }
            ].map((service, idx) => (
              <div key={idx} className="bg-light p-6 rounded-lg shadow-sm border-t-4 border-primary hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-bold text-dark mb-3">{service.title}</h3>
                <Link to={service.link} className="text-primary font-semibold hover:underline text-sm">Подробнее →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 4: Почему Хэдлайн (строго по ТЗ) */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">Почему Хэдлайн</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '15+', text: 'лет опыта (с 2008 г.)' },
              { num: '100+', text: 'успешных проектов' },
              { num: 'Retail & Horeca', text: 'глубокая экспертиза' },
              { num: 'РФ и СНГ', text: 'поддержка по всей географии' }
            ].map((stat, idx) => (
              <div key={idx}>
                <span className="block text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.num}</span>
                <span className="text-dark font-medium">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Блок 5: Кейсы (строго по ТЗ) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">Кейсы внедрения</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              { title: 'Сеть ресторанов "Вкус"', res: 'Скорость обслуживания +30%, простой касс = 0' },
              { title: 'Розничная сеть "Продукты"', res: 'Сокращение издержек на 15% за квартал' },
              { title: 'Франшиза кофеен', res: 'Полный контроль над 50+ точками удаленно' }
            ].map((c, idx) => (
              <div key={idx} className="bg-light p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="font-bold text-dark text-lg mb-2">{c.title}</h3>
                <p className="text-primary font-semibold text-sm">Результат: {c.res}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/cases" className="bg-primary hover:bg-primaryHover text-white font-bold py-3 px-8 rounded-md transition">Смотреть все кейсы</Link>
          </div>
        </div>
      </section>

      {/* Блок 6: CTA (строго по ТЗ) */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Нужна стабильная работа IT-систем?</h2>
          <button onClick={openModal} className="bg-white text-primary hover:bg-dark hover:text-white font-bold py-4 px-10 rounded-md transition text-lg">
            Оставить заявку
          </button>
        </div>
      </section>
    </>
  );
}