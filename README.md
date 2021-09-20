# Hotel reservation - https://hotel-reservation-bay.vercel.app/

### В данном проекте будет:

- получение отелей по api https://docs.impala.travel/docs/booking-api/docs/getting-started.md
- возможность выбрать номер на определенные даты
- бронирование номера и его оплата

### В проекте используются следующие технологии:

- NextJs
- TypeScript
- Firebase: firestore & auth, как серверная часть и для авторизации пользователя на сайте
- Axios для запросов на сервер
- SCSS для стилизации
- Classnames для объединение classNames вместе.
- для форм будет использована react-hook-form
- для анимации - framer motion
- ESLint, typescript-eslint [parser,strikethrough text eslint-plugin]
- StyleLint to css and scss [config-standard, order, order-config-standard]
- Husky для StyleLint (автоматически прогоняет StyleLint перед комитом на GitHub)
- @svgr/webpack для использования svg как components
- для состояний Redux, Redux-thunk, next-redux-wrapper, @reduxjs/toolkit (не работает для  получения данных в стейт, в процессе реализации)

