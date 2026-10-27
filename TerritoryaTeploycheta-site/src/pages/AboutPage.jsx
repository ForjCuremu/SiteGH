import { Link } from 'react-router-dom';

export default function AboutPage({ openModal }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-dark mb-8">О компании</h1>
        <p className="text-lg text-gray-600 mb-6">
          Компания «Хэдлайн» работает на рынке с 2008 года. Мы специализируемся на разработке и сопровождении IT-решений для розницы и общепита на территории РФ и СНГ.
        </p>
        <p className="text-lg text-gray-600 mb-12">
          Наша миссия — обеспечить стабильную работу IT-систем вашего бизнеса. Мы предлагаем гибкую и персонализированную альтернативу крупным массовым игрокам (таким как <strong>СБИС</strong> или <strong>Open Service</strong>), уделяя внимание деталям именно вашего бизнеса, а не работая по шаблону.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
          <div className="bg-light p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-4">Наша команда</h3>
            <p className="text-gray-600">Профессиональные инженеры и системные администраторы с глубоким пониманием специфики retail и horeca. Мы говорим с вами на одном языке и понимаем бизнес-задачи, а не только технические нюансы.</p>
          </div>
          <div className="bg-light p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-4">Наши партнёры</h3>
            <p className="text-gray-600">Мы сотрудничаем с ведущими вендорами ПО и поставщиками оборудования, что позволяет нам предлагать оптимальные решения для задач любого масштаба.</p>
          </div>
        </div>

        {/* User Flow Scenario 2: Напоминание о кейсах перед заявкой */}
        <div className="bg-primary/10 p-8 rounded-xl border border-primary/20">
          <h3 className="text-2xl font-bold text-dark mb-4">Убедились в нашей экспертизе?</h3>
          <p className="text-gray-600 mb-6">Посмотрите, как мы решили аналогичные задачи для других компаний, или свяжитесь с нами прямо сейчас.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cases" className="bg-dark hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition">
              Смотреть кейсы
            </Link>
            <button onClick={openModal} className="bg-primary hover:bg-primaryHover text-white font-bold py-3 px-8 rounded-md transition">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}