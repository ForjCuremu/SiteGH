export default function ServicesPage({ openModal }) {
  const services = [
    { 
      title: 'IT-аутсорсинг', 
      desc: 'Полное ведение IT-инфраструктуры без затрат на собственный штат. Выгоднее, чем содержать свой отдел.',
      highlight: true 
    },
    { 
      title: 'Техническая поддержка 24/7', 
      desc: 'Круглосуточная помощь. Быстрое реагирование на инциденты, удаленное и выездное обслуживание по SLA.',
      highlight: true 
    },
    { 
      title: 'Внедрение IT-решений', 
      desc: 'Подбор, установка и настройка ПО для автоматизации ресторанов (iiko, r-keeper) и розницы (1С, кассы).' 
    },
    { 
      title: 'Сопровождение ПО', 
      desc: 'Регулярные обновления, настройка резервного копирования данных, мониторинг безопасности.' 
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-dark mb-4">Наши услуги</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Комплексный подход к IT-инфраструктуре вашего бизнеса.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((s, idx) => (
            <div key={idx} className={`p-8 rounded-lg border-l-4 ${s.highlight ? 'bg-light border-primary shadow-md' : 'bg-white border-gray-300 shadow-sm'}`}>
              <h3 className="text-2xl font-bold text-dark mb-4">{s.title}</h3>
              <p className="text-gray-600 mb-6">{s.desc}</p>
              {s.highlight && (
                <button 
                  onClick={openModal} 
                  className="bg-primary hover:bg-primaryHover text-white font-bold py-2 px-6 rounded-md transition text-sm"
                >
                  Получить консультацию
                </button>
              )}
            </div>
          ))}
        </div>

        {/* User Flow Scenario 1: Прямой призыв к действию */}
        <div className="text-center bg-dark text-white p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Готовы передать IT-задачи профессионалам?</h2>
          <button onClick={openModal} className="bg-primary hover:bg-primaryHover text-white font-bold py-4 px-10 rounded-md transition">
            Оставить заявку на IT-аутсорсинг
          </button>
        </div>
      </div>
    </section>
  );
}