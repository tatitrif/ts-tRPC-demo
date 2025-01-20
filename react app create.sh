## фронт
pnpm create vite webapp --template react-ts # создать Vite приложение с React в директории webapp
cd webapp # перейти в директорию с созданным приложением
pnpm install # установка всех зависимостей
pnpm run dev # запуск dev-сборки, которая в свою очередь вызовет Vite. В результате мы получим локальный сервер для разработки с HMR.
pnpm run build # соберёт проект в папку dist без запуска сервера.
pnpm run preview # соберёт проект в папку dist и поднимет локальный сервер для просмотра результата.

pnpm i -D prettier # установить Prettier в dev зависимости
# в package.json создать настройки prettify для форматирования 
pnpm prettify # отформатировать все файлы проекта

## бэк
cd ..

mkdir backend # создать директорию для бэкенда
cd backend # перейти в директорию с бэкендом

pnpm i -D prettier rimraf ts-node-dev typescript @types/node # установить зависимости
# rimraf удаляет файлы (alternative rm -rf)
# ts-node-dev запускает без билда
# в package.json создать настройки prettify dev сборки билда и запуска билда
# для поддержки typescript добавить расширение в VSCode: [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
touch tsconfig.json # создадим файл с правилами по которым ts->js

pnpm dev # запустить приложение в режиме разработки
pnpm build # собрать приложение
pnpm start # запустить собранное приложение
# nvm version # узнать текущую версию node
# nvm use 22.11.0 # переключиться на конкретную версию node
node -v > .nvmrc # зафиксировать версию node для разработчиков
nvm use # переключиться на версию node указанную в .nvmrc
pnpm i express # установить express
pnpm i -D @types/express # установить типы для express
pnpm i @trpc/server # установить tRPC для сервера
pnpm i cors # установить cors для бэкенда
pnpm i -D @types/cors  


## фронт продолжение
cd webapp  
pnpm i @trpc/client @trpc/react-query # установить tRPC и его зависимости для клиента

# trpc client, его адаптер для react-query, и сам react-query
pnpm i @tanstack/react-query@4.36.1 # установите версию "@tanstack/react-query": 4 версию, а не 5 тк trpc с 5 не работает




## монорепа
cd ..
"packages:
  - backend
  - webapp" > pnpm-workspace.yaml # сделаем монорепу чтобы можно было импортировать с фронта на бэк
touch package.json # создадим файл с зависимостями
# обновим его
pnpm i # установим все зависимости

# установим зависимости из бэка и переносим в корень
pnpm i -D prettier rimraf ts-node ts-node-dev typescript 
pnpm i -D concurrently # установить concurrently для запуска нескольких скриптов одновременно

pnpm b ... # вызвать скрипт из package.json в папке бэкенда
pnpm w ... # вызвать скрипт из package.json в папке фронтенда
pnpm dev # запустить разработческий процесс во всех приложениях монорепы
pnpm types # проверить все типы во всех приложениях монорепы
pnpm prettify # отформатировать все файлы во всех приложениях монорепы
pnpm i -w -D eslint @eslint/eslintrc 
pnpm i -w -D eslint-plugin-prettier eslint-plugin-react-app  eslint-config-love  
pnpm i -w -D husky lint-staged # Причёсывать и проверять код на стильность автоматчиески при коммите
pnpm lint # линтинг монорепы

pnpm w i react-router-dom react-dom # установить react-router-dom и react-dom в воркспейс webapp

pnpm b i lodash # установить lodash в бэкенд
pnpm b i -D @types/lodash # установить типы для lodash в бэкенд

pnpm b i zod # установить zod в бэкенд

pnpm w i sass reset-css include-media # установить CSS препроцессор, сброс стилей, медиазапросов CSS
pnpm w i -D stylelint stylelint-config-prettier-scss stylelint-config-standard-scss # установить stylelint и его зависимости в webapp

pnpm w stylelint # проверить стиль SCSS файлов

pnpm w i formik # установить formik в webapp
pnpm w i zod formik-validator-zod
pnpm w i classnames # установить классы CSS стилей в webapp

psql -U ideanick # -U:username, вход через командную строку
create database "ideanick"; # создать базу данных ideanick
create user "ideanick" with encrypted password 'ideanick'; # создать пользователя ideanick с паролем ideanick
grant all privileges on database "ideanick" to "ideanick"; # дать пользователю ideanick все права на базу данных ideanick
alter user "ideanick" createdb; # дать пользователю ideanick право создавать базы данных
alter database "ideanick" owner to "ideanick"; # сделать пользователя ideanick владельцем базы данных ideanick


pnpm b i @prisma/client # установить клиент Prisma в бэкенд
pnpm b i -D prisma # установить коммандный интерфейс Prisma в бэкенд

cd backend/src/

pnpm prisma init # генерации файлов prisma/schema.prisma и .env.
pnpm b ppush     # отправляем схему без создания миграций, будет ошибка не обращать внимание на нее
pnpm b pgenerate # генерируем схему на нашей строне
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to ideanick;


pnpm b pdp # синхронизирует состояние схемы
pnpm b pmd # сформировать миграции БД на основе Prisma и прогнать их
pnpm b pgc # сгенерировать типы TS на основе Prisma схемы
 
pnpm b i superjson # установить superjson в бэкенд
pnpm w i superjson date-fns # установить superjson и date-fns во фронтенд

pnpm b i trpc-playground # установить trpc-playground в бэкенд

pnpm b i jsonwebtoken passport passport-jwt # установить jsonwebtoken, passport, passport-jwt в backend
pnpm b i -D @types/jsonwebtoken @types/passport @types/passport-jwt # установить типы в backend
pnpm w i js-cookie # установить js-cookie в webapp
pnpm w i -D @types/js-cookie # установить типы js-cookie в webapp

pnpm b i dotenv # установить dotenv в backend

pnpm w i lodash # установить lodash в webapp
pnpm w i -D @types/lodash # установить типы для lodash в webapp

pnpm w i react-infinite-scroller # установить react-infinite-scroller в webapp
pnpm w i -D @types/react-infinite-scroller # установить типы react-infinite-scroller в webapp

pnpm w i usehooks-ts # чтобы установить задержку при вводе текста в поиск

pnpm w i react-helmet-async # для генерации тайтлов

pnpm w i -D vite-plugin-svgr # вшивает svg картинки в бандл

pnpm b i mjml # установить mjml в backend
pnpm b build-emails # сбилдить письма из MJML в HTML
pnnpm b watch-emails # билдить письма на лету 
# pnpm b i fast-glob # установить fast-glob в backend 
# pnpm -w -D i copyfiles # устаревший пакет пока уберу
pnpm b i handlebars # установить handlebars в backend'

pnpm b i nodemailer
pnpm b i -D @types/nodemailer

pnpm i -w -D ts-patch typescript-transform-paths # установить ts-patch и typescript-transform-paths в webapp

pnpm b i cron # установить cron в backend
pnpm b i -D @types/cron # установить типы cron в backend

pnpm w i nanostores @nanostores/react # установить state manager nanostores и @nanostores/react в webapp 

pnpm b i winston # логировать ошибки, запросы, ответы, а также другие события
pnpm b i serialize-error@8.1.0 # установить serialize-error в backend с указанием версии
pnpm b i picocolors triple-beam yaml # во время разработки логи выводились в приятном yaml формате с разными цветами
pnpm b i -D @types/triple-beam

pnpm b i debug 
pnpm b i -D @types/debug

pnpm -w i -D jest ts-jest @types/jest eslint-plugin-jest
pnpm b i date-fns

pnpm w i -D @vitejs/plugin-legacy
pnpm w i -D autoprefixer


pnpm w i -D rollup-plugin-visualizer

pnpm -w -D i cross-env 

ps:
Problem: pnpm i gives you warns about a deprecated sub-dependency.
Fix: pnpm list --depth=3 >> result.txt then you can search in that file for the deprecated sub package