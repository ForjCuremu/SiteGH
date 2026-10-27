const routes = {
    'home': renderHome,
    'services': renderServices,
    'about': renderAbout,
    'cases': renderCases,
    'news': renderNews,
    'contacts': renderContacts
};

function router() {
    const hash = window.location.hash.slice(1) || 'home';
    const renderFn = routes[hash] || renderHome;
    document.getElementById('app').innerHTML = renderFn();
    window.scrollTo(0, 0);
    updateActiveNav(hash);
}

function updateActiveNav(hash) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${hash}`) {
            link.classList.add('active');
        }
    });
    document.querySelector('.nav').classList.remove('active');
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

// === Рендеринг страниц (Views) ===
function renderHome() {
    return `
        <section class="hero">
            <div class="container">
                <h1>Поверка, ремонт и обслуживание приборов учета тепловой энергии и воды</h1>
                <p>Собственная метрологическая лаборатория в Ижевске. Срок поверки от 1 до 5 дней! Более 13 лет опыта в обслуживании узлов учета. Поверка, ремонт и настройка оборудования в одном месте.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary open-modal">Заказать поверку</button>
                    <button class="btn btn-outline open-modal">Получить консультацию</button>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="section-title">Для кого мы работаем</h2>
                <div class="grid">
                    <div class="card">
                        <h3>Жилые дома и ТСЖ</h3>
                        <p>Установка и обслуживание общедомовых приборов учета тепла и воды. Поверка квартирных счетчиков. Подготовка к отопительному сезону.</p>
                    </div>
                    <div class="card">
                        <h3>Административные здания</h3>
                        <p>Комплексное обслуживание узлов учета, установка автоматики погодного регулирования для существенной экономии тепловой энергии.</p>
                    </div>
                    <div class="card">
                        <h3>Промышленные предприятия</h3>
                        <p>Метрологическая поверка и ремонт крупных расходомеров и теплосчетчиков на собственной проливной установке. Минимальные сроки простоя.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-bg">
            <div class="container">
                <h2 class="section-title">Наши услуги</h2>
                <div class="grid">
                    <div class="card">
                        <h3>Поверка и ремонт теплосчетчиков</h3>
                        <p>Метрологическая поверка на собственных проливных установках. Ремонт и настройка оборудования любой сложности.</p>
                        <a href="#services" class="btn btn-primary" style="margin-top:auto; display:inline-block; text-align:center;">Подробнее</a>
                    </div>
                    <div class="card">
                        <h3>Обслуживание узлов учета</h3>
                        <p>Ежемесячное сервисное обслуживание более чем 1000 приборов учета у наших абонентов. Подготовка тепловых пунктов.</p>
                        <a href="#services" class="btn btn-primary" style="margin-top:auto; display:inline-block; text-align:center;">Подробнее</a>
                    </div>
                    <div class="card">
                        <h3>Автоматика погодного регулирования</h3>
                        <p>Проектирование, установка и сервисное обслуживание систем автоматики для оптимизации расходов на отопление.</p>
                        <a href="#services" class="btn btn-primary" style="margin-top:auto; display:inline-block; text-align:center;">Подробнее</a>
                    </div>
                    <div class="card">
                        <h3>Учет водоснабжения</h3>
                        <p>Установка и обслуживание приборов учета холодного водоснабжения и сточных вод. Подбор и поставка оборудования.</p>
                        <a href="#services" class="btn btn-primary" style="margin-top:auto; display:inline-block; text-align:center;">Подробнее</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="section-title">Почему выбирают нас</h2>
                <div class="why-us-grid">
                    <div class="why-item">
                        <span class="why-number">13+</span>
                        <p>лет успешной работы в сфере теплоучета</p>
                    </div>
                    <div class="why-item">
                        <span class="why-number">2</span>
                        <p>собственные проливные установки в лаборатории</p>
                    </div>
                    <div class="why-item">
                        <span class="why-number">1-5</span>
                        <p>дней – средний срок проведения поверки</p>
                    </div>
                    <div class="why-item">
                        <span class="why-number">1000+</span>
                        <p>приборов на ежемесячном обслуживании</p>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 40px; padding: 20px; background: #FFF3E0; border-radius: 8px; border-left: 4px solid var(--primary);">
                    <p style="font-size: 1.1rem; color: var(--dark);"><strong>Бонус:</strong> Профессиональная команда метрологов, инженеров и сантехников решит любой вопрос. А наш пушистый сотрудник порадует вас хорошим настроением при визите в наш офис!</p>
                </div>
            </div>
        </section>

        <section class="cta">
            <div class="container">
                <h2>Нужна надежная работа узлов учета тепловой энергии?</h2>
                <p style="margin-bottom: 30px; opacity: 0.9;">Приглашаем к сотрудничеству! Вы всегда можете прийти в гости для знакомства с нашей лабораторией.</p>
                <button class="btn open-modal">Оставить заявку</button>
            </div>
        </section>
    `;
}

function renderServices() {
    return `
        <section class="section">
            <div class="container">
                <h2 class="section-title">Полный перечень услуг</h2>
                <div class="grid">
                    <div class="card">
                        <h3>Поверка, ремонт теплосчетчиков, расходомеров</h3>
                        <p>Проводим метрологическую поверку на собственных проливных установках. Осуществляем ремонт, замену компонентов и настройку оборудования. Срок поверки от 1 до 5 дней.</p>
                    </div>
                    <div class="card">
                        <h3>Обслуживание узлов учета тепловой энергии</h3>
                        <p>Регламентное ежемесячное обслуживание. Проверка показаний, визуальный осмотр, подготовка узлов учета к отопительному периоду. Более 100 тепловых пунктов ежегодно.</p>
                    </div>
                    <div class="card">
                        <h3>Сервисное обслуживание автоматики погодного регулирования</h3>
                        <p>Настройка и обслуживание контроллеров, датчиков температуры и исполнительных механизмов для автоматического регулирования отпуска тепла в зависимости от погоды.</p>
                    </div>
                    <div class="card">
                        <h3>Учет тепловой энергии. Установка приборов учета</h3>
                        <p>Проектирование, монтаж и сдача в эксплуатацию узлов учета тепловой энергии в жилых, административных и промышленных зданиях.</p>
                    </div>
                    <div class="card">
                        <h3>Учет холодного водоснабжения и сточных вод</h3>
                        <p>Подбор, установка и обслуживание счетчиков воды и расходомеров сточных вод. Помощь в согласовании с ресурсоснабжающими организациями.</p>
                    </div>
                    <div class="card">
                        <h3>Поверка квартирных счетчиков воды</h3>
                        <p>Оперативная поверка индивидуальных приборов учета (ИПУ) холодной и горячей воды с выдачей всех необходимых документов для УК и ЕИРЦ.</p>
                    </div>
                </div>
                <div class="cta" style="margin-top: 60px; border-radius: 8px;">
                    <h2>Остались вопросы по услугам?</h2>
                    <button class="btn open-modal" style="background: white; color: var(--primary);">Получить консультацию</button>
                </div>
            </div>
        </section>
    `;
}

function renderAbout() {
    return `
        <section class="section">
            <div class="container">
                <h2 class="section-title">О компании «Территория теплоучета»</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <p style="margin-bottom: 20px; font-size: 1.1rem;">Рады приветствовать Вас на сайте ООО «Территория теплоучета»!</p>
                    <p style="margin-bottom: 20px; font-size: 1.1rem;">Наша компания осуществляет метрологическую поверку, монтаж и обслуживание общедомовых приборов учета тепловой энергии, а также устанавливает автоматику погодного регулирования для экономии тепла.</p>
                    
                    <div style="background: var(--light-bg); padding: 30px; border-radius: 8px; margin: 30px 0;">
                        <h3 style="color: var(--primary); margin-bottom: 15px;">Наши ключевые преимущества:</h3>
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: 15px; padding-left: 25px; position: relative;">
                                <span style="position: absolute; left: 0; color: var(--primary); font-weight: bold;">✓</span>
                                <strong>Собственная метрологическая лаборатория</strong> с 2 проливными установками. Поверка, ремонт и настройка оборудования в одном месте. Срок поверки от 1 до 5 дней!
                            </li>
                            <li style="margin-bottom: 15px; padding-left: 25px; position: relative;">
                                <span style="position: absolute; left: 0; color: var(--primary); font-weight: bold;">✓</span>
                                <strong>Качественный сервис.</strong> Более 13 лет опыта. Ежемесячно мы обслуживаем более 1000 приборов учета у абонентов и готовим к отопительному периоду более 100 тепловых пунктов.
                            </li>
                            <li style="margin-bottom: 15px; padding-left: 25px; position: relative;">
                                <span style="position: absolute; left: 0; color: var(--primary); font-weight: bold;">✓</span>
                                <strong>Профессиональная команда</strong> метрологов, инженеров-теплотехников, сварщиков и сантехников решит любой вопрос, связанный с Вашим узлом учета.
                            </li>
                        </ul>
                    </div>

                    <p style="font-size: 1.1rem;">Мы занимаемся установкой приборов учета тепла и воды в жилых домах, административных и промышленных зданиях. Вы всегда можете прийти в гости для знакомства с нашей лабораторией по адресу: <strong>г. Ижевск, ул. Карла Маркса, 442</strong>.</p>
                    <p style="font-size: 1.1rem; margin-top: 10px; color: var(--primary); font-weight: 600;">Приглашаем к сотрудничеству!</p>
                </div>
            </div>
        </section>
    `;
}

function renderCases() {
    return `
        <section class="section">
            <div class="container">
                <h2 class="section-title">Опыт и объекты</h2>
                <div class="grid">
                    <div class="card">
                        <h3>Модернизация узла учета ТЦ</h3>
                        <p><strong>Задача:</strong> Замена устаревшего теплосчетчика и внедрение автоматики погодного регулирования.</p>
                        <p><strong>Решение:</strong> Проведен аудит системы, подобрано оборудование, выполнен монтаж и пусконаладка за 3 дня.</p>
                        <p><strong>Результат:</strong> Экономия тепловой энергии составила 18% за первый отопительный сезон.</p>
                    </div>
                    <div class="card">
                        <h3>Обслуживание жилого комплекса</h3>
                        <p><strong>Задача:</strong> Ежемесячное обслуживание 15 общедомовых узлов учета тепла и воды.</p>
                        <p><strong>Решение:</strong> Заключение договора на сервисное обслуживание, регулярные регламентные работы, подготовка к сезону.</p>
                        <p><strong>Результат:</strong> Бесперебойная работа оборудования, отсутствие предписаний от ресурсоснабжающих организаций.</p>
                    </div>
                    <div class="card">
                        <h3>Поверка расходомеров предприятия</h3>
                        <p><strong>Задача:</strong> Срочная поверка крупных диаметров расходомеров без длительного демонтажа.</p>
                        <p><strong>Решение:</strong> Организация оперативной доставки на нашу проливную установку, проведение поверки за 2 дня.</p>
                        <p><strong>Результат:</strong> Минимальный простой производства, выдача всех свидетельств о поверке в срок.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderNews() {
    return `
        <section class="section">
            <div class="container">
                <h2 class="section-title">Новости компании</h2>
                <div class="grid">
                    <div class="card">
                        <span style="color: var(--primary); font-weight: 600; font-size: 14px;">26.04.2023</span>
                        <h3 style="margin-top: 10px;">Метрологическая поверка</h3>
                        <p>В Ижевске официально завершился отопительный сезон. А это значит, что мы ждем Ваши приборы учета на поверку и обслуживание межсезонья! Не откладывайте подготовку к следующему сезону.</p>
                    </div>
                    <div class="card">
                        <span style="color: var(--primary); font-weight: 600; font-size: 14px;">26.10.2022</span>
                        <h3 style="margin-top: 10px;">Скидка на поверку счетчиков холодной воды</h3>
                        <p>Приглашаем Вас на поверку счетчиков холодной воды. В осенне-зимний период действует специальное предложение для управляющих компаний и ТСЖ при групповой заявке.</p>
                    </div>
                    <div class="card">
                        <span style="color: var(--primary); font-weight: 600; font-size: 14px;">15.09.2022</span>
                        <h3 style="margin-top: 10px;">Готовность к отопительному сезону</h3>
                        <p>Наша команда успешно подготовила более 100 тепловых пунктов к новому отопительному сезону. Проведена промывка, настройка автоматики и поверка контрольных датчиков.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderContacts() {
    return `
        <section class="section">
            <div class="container">
                <h2 class="section-title">Контакты</h2>
                <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                    <div style="padding: 20px;">
                        <h3 style="margin-bottom: 20px; font-size: 1.5rem; color: var(--dark);">Свяжитесь с нами</h3>
                        <p style="margin-bottom: 15px;"><strong>Адрес:</strong> г. Ижевск, ул. Карла Маркса, 442</p>
                        <p style="margin-bottom: 15px;"><strong>Телефон:</strong> <a href="tel:+73412573006" style="color: var(--primary); text-decoration: none;">+7 (3412) 57-30-06</a></p>
                        <p style="margin-bottom: 15px;"><strong>Телефон:</strong> <a href="tel:+73412573007" style="color: var(--primary); text-decoration: none;">+7 (3412) 57-30-07</a></p>
                        <p style="margin-bottom: 15px;"><strong>Email:</strong> <a href="mailto:573006@bk.ru" style="color: var(--primary); text-decoration: none;">573006@bk.ru</a></p>
                        <p style="margin-bottom: 15px;"><strong>Режим работы:</strong> Пн - Пт: c 8:30 до 17:30</p>
                        
                        <div style="margin-top: 30px; padding: 20px; background: var(--light-bg); border-radius: 8px; border-left: 4px solid var(--primary);">
                            <p style="font-weight: 600; margin-bottom: 10px;">Приглашаем в гости!</p>
                            <p style="font-size: 14px;">Вы всегда можете прийти к нам в офис для знакомства с нашей метрологической лабораторией и обсуждения условий сотрудничества.</p>
                        </div>
                    </div>
                    <div class="card" style="border-top: none; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                        <h3 style="text-align: center; margin-bottom: 20px;">Оставить заявку</h3>
                        <form style="display: flex; flex-direction: column; gap: 15px;">
                            <input type="text" placeholder="Ваше имя" required>
                            <input type="tel" placeholder="Телефон" required>
                            <input type="email" placeholder="Email">
                            <select>
                                <option value="" disabled selected>Интересующая услуга</option>
                                <option value="poverka">Поверка теплосчетчиков</option>
                                <option value="obslyzhivanie">Обслуживание узлов учета</option>
                                <option value="avtomatika">Автоматика погодного регулирования</option>
                            </select>
                            <textarea placeholder="Сообщение или модель прибора"></textarea>
                            <button type="submit" class="btn btn-primary">Отправить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// === Глобальные обработчики событий (Event Delegation для SPA) ===
document.addEventListener('DOMContentLoaded', () => {
    // Мобильное меню
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Модальное окно (открытие)
    document.addEventListener('click', (e) => {
        if (e.target.matches('.open-modal')) {
            e.preventDefault();
            document.getElementById('modal').classList.add('active');
        }
        // Модальное окно (закрытие)
        if (e.target.matches('.close-modal') || e.target.id === 'modal') {
            document.getElementById('modal').classList.remove('active');
        }
    });

    // Обработка отправки формы
    document.addEventListener('submit', (e) => {
        if (e.target.tagName === 'FORM') {
            e.preventDefault();
            alert('Спасибо! Ваша заявка отправлена. Наши специалисты свяжутся с вами в ближайшее время.');
            document.getElementById('modal').classList.remove('active');
            e.target.reset();
        }
    });
});