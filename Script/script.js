const routes = {
    'home': renderHome,
    'services': renderServices,
    'about': renderAbout,
    'cases': renderCases,
    'contacts': renderContacts,
    'privacy': renderPrivacy
};

function router() {
    const hash = window.location.hash.slice(1) || 'home';
    const renderFn = routes[hash] || renderHome;
    
    const app = document.getElementById('app');
    app.style.opacity = '0';
    
    setTimeout(() => {
        app.innerHTML = renderFn();
        app.style.opacity = '1';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        initFormHandling(); 
    }, 150);
    
    updateActiveNav(hash);
}

function updateActiveNav(hash) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${hash}`) {
            link.classList.add('active');
        }
    });
    document.querySelector('.nav')?.classList.remove('active');
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').style.transition = 'opacity 0.15s ease-in-out';
    router();
    initModal();
    initMobileMenu();
});

function renderHome() {
    return `
        <section class="hero">
            <img src="image/Main.png" alt="Фон" class="hero-bg">
            <div class="container">
                <h1>Поверка и обслуживание приборов учета тепла и воды в Ижевске</h1>
                <p>Собственная метрологическая лаборатория. Срок поверки от 1 до 5 дней. Более 13 лет опыта, 1000+ приборов на обслуживании. Решаем вопросы с ресурсоснабжающими организациями под ключ.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary open-modal">Рассчитать стоимость</button>
                    <a href="#services" class="btn btn-outline">Смотреть услуги и цены</a>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Для кого мы работаем</h2>
                    <p class="section-subtitle">Обеспечиваем точный учет и законность для объектов любой сложности</p>
                </div>
                <div class="why-us-grid">
                    <div class="why-item">
                        <span class="why-number">ТСЖ</span>
                        <p>Обслуживание общедомовых узлов, поверка квартирных счетчиков, защита от предписаний.</p>
                    </div>
                    <div class="why-item">
                        <span class="why-number">Бизнес</span>
                        <p>Автоматика погодного регулирования для снижения счетов за отопление до 30%.</p>
                    </div>
                    <div class="why-item">
                        <span class="why-number">Заводы</span>
                        <p>Поверка крупных расходомеров на собственной проливной установке без длительного простоя.</p>
                    </div>
                    <div class="why-item">
                        <span class="why-number">УК</span>
                        <p>Комплексный аутсорсинг тепловых пунктов: от настройки автоматики до сдачи отчетов.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta">
            <div class="container">
                <h2>Не ждите предписаний от ресурсников</h2>
                <p>Проверьте готовность вашего узла учета к сезону прямо сейчас. Консультация инженера бесплатна.</p>
                <button class="btn open-modal">Получить консультацию</button>
            </div>
        </section>
    `;
}

function renderServices() {
    const services = [
        {
            title: "Поверка и ремонт теплосчетчиков",
            desc: "Проводим метрологическую поверку на собственных проливных установках. Осуществляем ремонт, замену компонентов и настройку оборудования.",
            features: ["Срок поверки от 1 до 5 дней", "Выдача свидетельств установленного образца", "Ремонт любой сложности"],
            price: "от 2 700 ₽ (квартирные), от 6 800 ₽ (общедомовые)",
            img: "image/schetcik.jpg"
        },
        {
            title: "Обслуживание узлов учета тепловой энергии",
            desc: "Регламентное ежемесячное обслуживание. Проверка показаний, визуальный осмотр, подготовка узлов учета к отопительному периоду.",
            features: ["Более 100 тепловых пунктов ежегодно", "Оперативный выезд при авариях", "Взаимодействие с теплосетями"],
            price: "от 3 500 ₽ / мес. за 1 узел",
            img: "image/Montag.jpg"
        },
        {
            title: "Автоматика погодного регулирования",
            desc: "Настройка и обслуживание контроллеров, датчиков температуры и исполнительных механизмов для автоматического регулирования отпуска тепла.",
            features: ["Экономия тепла до 30%", "Подбор оборудования под ваш бюджет", "Программирование контроллеров"],
            price: "Пусконаладка от 15 000 ₽",
            img: "image/pogod.jpg"
        },
        {
            title: "Учет холодного водоснабжения и сточных вод",
            desc: "Подбор, установка и обслуживание счетчиков воды и расходомеров сточных вод. Помощь в согласовании с ресурсоснабжающими организациями.",
            features: ["Работа с любыми диаметрами труб", "Помощь в оформлении документов", "Поверка без снятия (при возможности)"],
            price: "Поверка ИПУ от 900 ₽, монтаж от 4 500 ₽",
            img: "image/ychet.jpg"
        },
        {
            title: "Проектирование узлов учета",
            desc: "Разработка проектной документации на установку или модернизацию узлов учета тепловой энергии и воды с учетом всех действующих норм и правил (СП, СНиП).",
            features: ["Согласование с теплоснабжающей организацией", "Подбор оптимальной схемы узла", "Минимизация затрат на оборудование"],
            price: "от 12 000 ₽ за проект",
            img: "image/proetcirovania.jpeg"
        },
        {
            title: "Монтаж и демонтаж приборов учета",
            desc: "Профессиональные слесарные работы по установке, замене или временному демонтажу приборов учета для проведения поверки или ремонта.",
            features: ["Собственный штат сварщиков и сантехников", "Работы без остановки теплоснабжения (при возможности)", "Опрессовка и сдача узла в эксплуатацию"],
            price: "от 4 500 ₽ за точку",
            img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Диспетчеризация и телеметрия",
            desc: "Установка систем автоматического сбора данных (АСКУЭ). Передача показаний приборов учета в ресурсоснабжающие организации в электронном виде.",
            features: ["Исключение человеческого фактора при снятии показаний", "Круглосуточный мониторинг параметров сети", "SMS-оповещения об авариях"],
            price: "от 8 000 ₽ (оборудование + настройка)",
            img: "image/dispetcher.jpg"
        },
        {
            title: "Юридическое сопровождение и суды",
            desc: "Защита интересов клиента при спорах с теплоснабжающими организациями. Оспаривание необоснованных доначислений и предписаний.",
            features: ["Анализ договоров теплоснабжения", "Представительство в суде", "Помощь в прохождении проверок"],
            price: "Консультация от 5 000 ₽",
            img: "image/zakon.jpg"
        }
    ];

    const servicesHTML = services.map(s => `
        <div class="service-card">
            <div class="service-card-image">
                <img src="${s.img}" alt="${s.title}" class="custom-img">
            </div>
            <div class="service-card-content">
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
                <ul class="service-features">
                    ${s.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <div style="margin-bottom: 20px; padding: 12px 16px; background: #FFF3E0; border-radius: 8px; border-left: 4px solid var(--primary);">
                    <span style="font-weight: 700; color: var(--dark); font-size: 1.1rem;">${s.price}</span>
                </div>
                <button class="btn btn-primary open-modal" style="align-self: flex-start;">Заказать услугу</button>
            </div>
        </div>
    `).join('');

    return `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Наши услуги и цены</h2>
                    <p class="section-subtitle">Полный цикл работ: от проектирования и подбора оборудования до юридического сопровождения и сдачи узла учета в эксплуатацию</p>
                </div>
                <div class="services-list">
                    ${servicesHTML}
                </div>
                <div style="text-align: center; margin-top: 40px; padding: 20px; background: var(--light-bg); border-radius: 8px; color: var(--text-light); font-size: 0.95rem;">
                    * Указаны ориентировочные цены. Точная стоимость рассчитывается индивидуально после осмотра объекта и уточнения модели прибора. Для юридических лиц возможна оплата по безналичному расчету с НДС.
                </div>
            </div>
        </section>
    `;
}

function renderAbout() {
    return `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">О компании «Территория теплоучета»</h2>
                </div>
                
                <!-- Блок с директором -->
                <div class="about-grid" style="margin-bottom: 60px;">
                    <div>
                        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 24px;">
                            <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden; flex-shrink: 0;">
                                <img src="image/director.png" alt="Муранов Алексей Викторович" style="width: 100%; height: 100%; object-fit: cover;">
                            </div>
                            <div>
                                <h3 style="margin: 0; font-size: 1.5rem; color: var(--dark);">Муранов Алексей Викторович</h3>
                                <p style="margin: 5px 0 0; color: var(--primary); font-weight: 600;">Директор ООО «Территория теплоучета»</p>
                            </div>
                        </div>
                        <p style="font-size: 1.1rem; color: var(--text-light); line-height: 1.8;">
                            «С 2009 года помогаем нашим клиентам решать вопросы с учетом и экономией тепловой энергии, горячей и холодной воды. Профессионально подходим к обслуживанию и поверке узлов учета у абонентов.»
                        </p>
                    </div>
                    <div class="about-image-block">
                        <!-- ЗАМЕНИ src НА СВОЮ КАРТИНКУ, например: src="img/office.jpg" -->
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Наш офис" class="custom-img">
                    </div>
                </div>

                <!-- Основной текст -->
                <div style="max-width: 900px; margin: 0 auto;">
                    <p style="font-size: 1.15rem; color: var(--text); line-height: 1.8; margin-bottom: 24px;">
                        ООО «Территория теплоучета» более <strong>13 лет</strong> обслуживает, устанавливает узлы учета тепловой энергии, холодной воды, автоматику погодного регулирования.
                    </p>
                    <p style="font-size: 1.15rem; color: var(--text); line-height: 1.8; margin-bottom: 24px;">
                        Ежегодно мы готовим более <strong>1000 узлов</strong> к отопительному периоду, а также поверяем огромное количество теплосчетчиков, расходомеров в собственной аккредитованной метрологической лаборатории.
                    </p>
                    <p style="font-size: 1.15rem; color: var(--text); line-height: 1.8; margin-bottom: 40px;">
                        Мы — это команда профессиональных инженеров-теплотехников, метрологов, сантехников, сварщиков, которые решат любой вопрос, связанный с Вашим узлом учета. Нам доверили свои узлы учета более <strong>800 абонентов</strong>, и мы не только снимаем показания с приборов, но и смотрим правильность начисления платы за тепло и ГВС со стороны ресурсоснабжающей организации.
                    </p>

                    <!-- Что мы делаем -->
                    <div style="background: var(--light-bg); padding: 40px; border-radius: 12px; margin-bottom: 40px;">
                        <h3 style="color: var(--dark); margin-bottom: 24px; font-size: 1.8rem;">Что мы делаем:</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">✓</span>
                                <span>Поверка общедомовых счетчиков тепла, горячей, холодной воды</span>
                            </div>
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">✓</span>
                                <span>Монтаж узлов учета тепловой энергии</span>
                            </div>
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">✓</span>
                                <span>Обслуживание узлов учета тепловой энергии</span>
                            </div>
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">✓</span>
                                <span>Ремонт приборов учета тепла, воды</span>
                            </div>
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">✓</span>
                                <span>Диагностика узла учета тепловой энергии</span>
                            </div>
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">✓</span>
                                <span>Проектирование узлов учета тепловой энергии</span>
                            </div>
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">✓</span>
                                <span>Обслуживание тепловых пунктов</span>
                            </div>
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">✓</span>
                                <span>Установка автоматики погодного регулирования</span>
                            </div>
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">✓</span>
                                <span>Демонтаж, монтаж оборудования в поверку</span>
                            </div>
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">✓</span>
                                <span>Учет холодного водоснабжения</span>
                            </div>
                            <div style="display: flex; align-items: flex-start; gap: 12px;">
                                <span style="color: var(--primary); font-weight: 800; font-size: 1.2rem;">✓</span>
                                <span>Учет сточных вод</span>
                            </div>
                        </div>
                    </div>

                    <!-- Наши преимущества -->
                    <h3 style="color: var(--dark); margin-bottom: 30px; font-size: 1.8rem; text-align: center;">Наши преимущества</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 40px;">
                        <div style="padding: 30px; background: var(--white); border-radius: 12px; border: 1px solid var(--border); box-shadow: var(--shadow);">
                            <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary); margin-bottom: 12px;">5</div>
                            <h4 style="color: var(--dark); margin-bottom: 10px;">Собственная лаборатория</h4>
                            <p style="color: var(--text-light); font-size: 0.95rem;">Две проливные поверочные установки. На постоянной основе трудится 5 специалистов метрологической службы.</p>
                        </div>
                        <div style="padding: 30px; background: var(--white); border-radius: 12px; border: 1px solid var(--border); box-shadow: var(--shadow);">
                            <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary); margin-bottom: 12px;">27</div>
                            <h4 style="color: var(--dark); margin-bottom: 10px;">Квалифицированный персонал</h4>
                            <p style="color: var(--text-light); font-size: 0.95rem;">Штат компании составляет 27 человек, из них 11 инженеров. Сотрудники ежегодно проходят обучение и аттестацию по приборам «Взлет».</p>
                        </div>
                        <div style="padding: 30px; background: var(--white); border-radius: 12px; border: 1px solid var(--border); box-shadow: var(--shadow);">
                            <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary); margin-bottom: 12px;">1000+</div>
                            <h4 style="color: var(--dark); margin-bottom: 10px;">Узлы на обслуживании</h4>
                            <p style="color: var(--text-light); font-size: 0.95rem;">На техническом обслуживании находятся порядка 1000 узлов учета в школах, дошкольных учреждениях, многоквартирных домах, объектах культуры и социального обслуживания.</p>
                        </div>
                    </div>

                    <!-- Финальный акцент -->
                    <div style="text-align: center; padding: 40px; background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%); border-radius: 12px; color: var(--white);">
                        <h3 style="font-size: 1.8rem; margin-bottom: 16px;">Ремонт, поверка, обслуживание — в одном месте</h3>
                        <p style="font-size: 1.1rem; opacity: 0.95; margin-bottom: 24px;">Приглашаем к сотрудничеству! Вы всегда можете прийти в гости для знакомства с нашей лабораторией.</p>
                        <button class="btn open-modal" style="background: var(--white); color: var(--primary); font-size: 18px; padding: 16px 40px;">Оставить заявку</button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderCases() {
    const cases = [
        {
            title: "Модернизация узла учета ТЦ",
            problem: "Перерасход тепла, устаревшее оборудование, регулярные предписания от теплосетей.",
            solution: "Аудит системы, замена теплосчетчика, монтаж и пусконаладка автоматики погодного регулирования за 3 дня.",
            result: "Экономия тепловой энергии составила 18% за первый отопительный сезон. Предписания сняты.",
            img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Срочная поверка на промышленном предприятии",
            problem: "Необходимость поверки крупных расходомеров без остановки производственного цикла.",
            solution: "Организация оперативной доставки на нашу проливную установку, проведение работ в выходные дни.",
            result: "Ноль часов простоя производства, все свидетельства о поверке получены в срок.",
            img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Комплексное обслуживание школы (бюджетное учреждение)",
            problem: "Необходимость строгого соблюдения бюджетного законодательства и подготовки к сезону в сжатые сроки.",
            solution: "Заключение договора на годовое обслуживание, промывка системы, настройка автоматики, подготовка полного пакета отчетов для Министерства.",
            result: "Успешное прохождение проверки, экономия бюджетных средств на отоплении на 15%.",
            img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Внедрение телеметрии в крупном ЖК (5 корпусов)",
            problem: "Ручной съем показаний с 5 общедомовых приборов, ошибки в расчетах, жалобы жителей.",
            solution: "Установка модемов передачи данных, интеграция с городской системой диспетчеризации, обучение персонала УК.",
            result: "Показания передаются автоматически ежедневно. Количество жалоб снизилось до нуля.",
            img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Юридическая защита административного здания",
            problem: "Теплоснабжающая организация выставила счет на перерасход, ссылаясь на неисправность узла учета.",
            solution: "Проведение независимой экспертизы, анализ журналов событий тепловычислителя, представительство в арбитражном суде.",
            result: "Доначисления в размере 450 000 руб. признаны необоснованными и отменены судом.",
            img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
        }
    ];

    const casesHTML = cases.map(c => `
        <div class="service-card">
            <div class="service-card-image">
                <img src="${c.img}" alt="${c.title}" class="custom-img">
            </div>
            <div class="service-card-content">
                <h3>${c.title}</h3>
                <p><strong>Проблема:</strong> ${c.problem}</p>
                <p><strong>Решение:</strong> ${c.solution}</p>
                <p style="color: var(--primary); font-weight: 700; margin-top: 10px;">Результат: ${c.result}</p>
            </div>
        </div>
    `).join('');

    return `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Реальные кейсы и объекты</h2>
                    <p class="section-subtitle">Результаты нашей работы в цифрах и фактах. Мы гордимся каждым проектом.</p>
                </div>
                <div class="services-list">
                    ${casesHTML}
                </div>
            </div>
        </section>
    `;
}

function renderContacts() {
    return `
        <section class="section section-bg">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Контакты</h2>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
                    <div>
                        <h3 style="margin-bottom: 24px; font-size: 1.5rem;">Свяжитесь с нами</h3>
                        <div style="margin-bottom: 20px;">
                            <p style="font-weight: 600; color: var(--dark); margin-bottom: 4px;">Адрес офиса и лаборатории:</p>
                            <p>г. Ижевск, ул. Карла Маркса, 442</p>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <p style="font-weight: 600; color: var(--dark); margin-bottom: 4px;">Телефоны:</p>
                            <p><a href="tel:+73412573006" style="color: var(--primary); font-size: 1.2rem; font-weight: 700; text-decoration: none;">+7 (3412) 57-30-06</a></p>
                            <p><a href="tel:+73412573007" style="color: var(--primary); font-size: 1.2rem; font-weight: 700; text-decoration: none;">+7 (3412) 57-30-07</a></p>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <p style="font-weight: 600; color: var(--dark); margin-bottom: 4px;">Email:</p>
                            <a href="mailto:forjcuremu@gmail.com" style="color: var(--text); text-decoration: none; border-bottom: 1px dashed var(--primary); font-weight: 600;">forjcuremu@gmail.com</a>
                        </div>
                        <div style="margin-top: 30px;">
                            <p style="font-weight: 600; color: var(--dark); margin-bottom: 8px;">Режим работы:</p>
                            <p>Пн - Пт: c 8:30 до 17:30<br>Сб - Вс: Выходной</p>
                        </div>
                    </div>
                    <div class="service-card" style="border-top: none; flex-direction: column;">
                        <div class="service-card-content" style="padding: 30px;">
                            <h3 style="text-align: center; margin-bottom: 24px;">Быстрая заявка</h3>
                            <form action="https://formspree.io/f/mkjjbeno" method="POST" class="ajax-form">
                                <div class="form-group"><input type="text" name="name" placeholder="Ваше имя" required></div>
                                <div class="form-group"><input type="tel" name="phone" placeholder="Телефон" required></div>
                                <div class="form-group"><textarea name="message" placeholder="Ваш вопрос или модель прибора" rows="4"></textarea></div>
                                <div class="form-consent">
                                    <input type="checkbox" name="consent" value="yes" required checked>
                                    <label for="consent">Согласен на <a href="#privacy">обработку данных</a></label>
                                </div>
                                <button type="submit" class="btn btn-primary btn-full" id="submitBtn">Отправить</button>
                                <p class="form-status"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderPrivacy() {
    return `
        <section class="section">
            <div class="container" style="max-width: 900px;">
                <div class="section-header">
                    <h2 class="section-title">Политика конфиденциальности</h2>
                    <p class="section-subtitle">ООО «Территория теплоучета» серьезно относится к защите ваших персональных данных</p>
                </div>
                
                <div style="color: var(--text-light); line-height: 1.8; font-size: 1rem;">
                    <h3 style="color: var(--dark); margin: 30px 0 15px;">1. Общие положения</h3>
                    <p>Настоящая Политика конфиденциальности (далее – Политика) действует в отношении всей информации, которую ООО «Территория теплоучета» (далее – Оператор) может получить о Пользователе во время использования сайта.</p>
                    <p>Использование сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.</p>

                    <h3 style="color: var(--dark); margin: 30px 0 15px;">2. Какие данные мы собираем</h3>
                    <p>Мы можем собирать следующие персональные данные:</p>
                    <ul style="list-style: disc; padding-left: 20px; margin: 15px 0;">
                        <li>Фамилия, имя, отчество;</li>
                        <li>Контактный телефон и адрес электронной почты;</li>
                        <li>Информация о модели прибора учета или объекте (по желанию);</li>
                        <li>Данные, автоматически передаваемые устройством (IP-адрес, тип браузера) для корректного отображения сайта.</li>
                    </ul>

                    <h3 style="color: var(--dark); margin: 30px 0 15px;">3. Цели обработки данных</h3>
                    <p>Ваши данные используются исключительно для:</p>
                    <ul style="list-style: disc; padding-left: 20px; margin: 15px 0;">
                        <li>Обработки входящих заявок и связи с вами для уточнения деталей услуги;</li>
                        <li>Предоставления информационных и консультационных услуг;</li>
                        <li>Исполнения договоров на оказание услуг метрологической поверки и обслуживания;</li>
                        <li>Улучшения качества работы нашего сайта.</li>
                    </ul>

                    <h3 style="color: var(--dark); margin: 30px 0 15px;">4. Защита и хранение данных</h3>
                    <p>Оператор принимает все необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования или распространения.</p>
                    <p>Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ (например, по запросу суда или правоохранительных органов).</p>

                    <h3 style="color: var(--dark); margin: 30px 0 15px;">5. Права пользователя</h3>
                    <p>Пользователь имеет право:</p>
                    <ul style="list-style: disc; padding-left: 20px; margin: 15px 0;">
                        <li>Получать информацию о том, какие его данные обрабатываются;</li>
                        <li>Требовать уточнения, блокирования или уничтожения своих персональных данных;</li>
                        <li>Отозвать согласие на обработку персональных данных, направив письменное заявление на электронный адрес: <a href="mailto:forjcuremu@gmail.com" style="color: var(--primary);">forjcuremu@gmail.com</a>.</li>
                    </ul>

                    <h3 style="color: var(--dark); margin: 30px 0 15px;">6. Контактная информация</h3>
                    <p>По всем вопросам, связанным с обработкой персональных данных, вы можете обращаться:</p>
                    <p><strong>ООО «Территория теплоучета»</strong><br>
                    Адрес: г. Ижевск, ул. Карла Маркса, 442<br>
                    Телефон: +7 (3412) 57-30-06<br>
                    Email: forjcuremu@gmail.com</p>
                    
                    <p style="margin-top: 40px; font-size: 0.9rem; color: #999;">Дата последнего обновления: 29 октября 2026 г.</p>
                </div>
                
                <div style="text-align: center; margin-top: 40px;">
                    <a href="#home" class="btn btn-primary">Вернуться на главную</a>
                </div>
            </div>
        </section>
    `;
}

function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => nav.classList.toggle('active'));
    }
}

function initModal() {
    const modal = document.getElementById('modal');
    
    window.openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    window.closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.addEventListener('click', (e) => {
        if (e.target.matches('.open-modal')) {
            e.preventDefault();
            window.openModal();
        }
        if (e.target.matches('.close-modal') || e.target.id === 'modal') {
            window.closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) window.closeModal();
    });
}

function initFormHandling() {
    const forms = document.querySelectorAll('.ajax-form');
    
    forms.forEach(form => {
        form.addEventListener("submit", async function(event) {
            event.preventDefault();
            const status = form.querySelector(".form-status");
            const btn = form.querySelector("#submitBtn") || form.querySelector("button[type='submit']");
            const data = new FormData(form);

            btn.disabled = true;
            btn.textContent = "Отправка...";
            status.textContent = "";

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.textContent = "Спасибо! Заявка успешно отправлена. Мы скоро свяжемся с вами.";
                    status.className = "form-status success";
                    form.reset();
                    
                    if(form.closest('.modal')) {
                        setTimeout(() => {
                            window.closeModal();
                            status.textContent = "";
                        }, 2000);
                    }
                } else {
                    const errorData = await response.json();
                    if (Object.hasOwn(errorData, 'errors')) {
                        status.textContent = errorData["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.textContent = "Ошибка при отправке. Попробуйте позвонить нам.";
                    }
                    status.className = "form-status error";
                }
            } catch (error) {
                status.textContent = "Ошибка сети. Проверьте интернет-соединение.";
                status.className = "form-status error";
            } finally {
                btn.disabled = false;
                btn.textContent = form.closest('.modal') ? "Отправить заявку" : "Отправить";
            }
        });
    });
}