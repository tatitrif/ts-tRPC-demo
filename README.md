# Создание Node.js (серверного) приложения на TypeScript

Язык JavaScript (ECMAScript) создавался в середине девяностых компанией Mozilla как простой скриптовый язык программирования, встраиваемый в код HTML-страниц. Он создавался для программирования как на стороне клиента, так и на стороне сервера, целью было создать «язык для склеивания» составляющих частей веб-ресурса: изображений, плагинов. Постепенно JavaScript оброс целой инфраструктурой фреймворков, библиотек, компиляторов и протоколов. В том числе появилось несколько платформ исполнения серверных и клиентских приложений. Node.js — самая популярная из них. 

Программная платформа Node.js работает на движке V8, который транслирует JavaScript в машинный код. Грубо говоря, сама платформа является приложением C++, которое получает на входе JavaScript-код и выполняет его.

## Node.js 

[Node.js](https://nodejs.org) — это событийно-ориентированный I/O-фреймворк на JavaScript. 

Благодаря Node.js написанный для браузера код JavaScript получает доступ к глобальным объектам, таким как document и window, наряду с другими API и библиотеками. С помощью Node.js код обращается к жёсткому диску, базам данных и Сети. Это делает возможным написание любых приложений: от утилит командной строки и видеоигр до полноценных веб-серверов.

Важной частью Node.js является пакетный менеджер NPM — Node Package Manager, который устанавливается вместе с интерпретатором. На данный момент три самых популярных менеджера пакетов (npm, yarn и [pnpm](https://pnpm.io)). 

В проекте использован pnpm, который управляет node_modules, используя жесткие ссылки и символические ссылки на глобальное хранилище на диске с адресацией содержимого. Это позволяет получить преимущества от гораздо меньшего использования дискового пространства, а также сохранить ваши node_modules чистыми. Также pnpm не позволяет устанавливать пакеты без сохранения их в package.json в отличии от npm.

```
pnpm prune 					Removes unnecessary packages.
pnpm add -D sax				Save to devDependencies
pnpm add -O sax				Save to optionalDependencies
pnpm add -g sax				Install package globally
pnpm i --offline			Install offline from the store only
pnpm i --frozen-lockfile	pnpm-lock.yaml is not updated
pnpm i --lockfile-only		Only pnpm-lock.yaml is updated
pnpm up --latest			Updates all dependencies to their latest versions
pnpm remove (Aliases: rm, uninstall, un)
```

В правильной структуре node_modules pnpm заключается в том, что она «помогает избегать глупых ошибок», делая невозможным использование модулей, которые не указаны в package.json проекта.

## Express

[Express](https://expressjs.com) — это минималистичная и гибкая среда веб-приложений Node.js, которая предоставляет надежный набор функций для веб- и мобильных приложений. Имея в своем распоряжении множество служебных методов HTTP и промежуточного программного обеспечения, на котором можно быстро и легко создать надежный API.
Например, библиотеки Vue.js, Svelte и Angular. 

## JSX

JSX — это специальный JavaScript синтаксис для генерации HTML. Синтаксический сахар для функции React.createElement(component, props, ...children).

## TypeScript

[TypeScript](https://www.typescriptlang.org/tsconfig) — это «разновидность» или «вариант» JavaScript.
 
## TypeScript Generics

[TypeScript Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) — является одним из основных инструментов в наборе инструментов для создания повторно используемых компонентов являются обобщения, то есть возможность создания компонента, который может работать с различными типами, а не с одним. Это позволяет пользователям потреблять эти компоненты и использовать свои собственные типы.

Основная часть разработки программного обеспечения заключается в создании компонентов, которые не только имеют четко определенные и согласованные API, но и могут быть повторно использованы. Компоненты, которые способны работать как с сегодняшними данными, так и с данными будущего, предоставят вам наиболее гибкие возможности для создания крупных программных систем.

## tRPC

[tRPC](https://trpc.io) — библиотека для создания типобезопасных API, которая использует всю мощь современного TypeScript. 

Альтернатива традиционному REST или GraphQL. Поскольку GraphQL разработан как независимая от языка спецификация для реализации API, он не использует в полной мере возможности такого языка, как TypeScript. 

Прекрасный инструмент для TypeScript фулстек разработки.

Если проект создан с использованием полнофункционального TypeScript, вы можете обмениваться типами напрямую между клиентом и сервером, не прибегая к генерации кода. Он упрощает написание конечных точек, которые можно безопасно использовать как на фронтенде, так и на бэкенде вашего приложения. Ошибки типов в ваших контрактах API будут обнаруживаться во время сборки, что сокращает поверхность для ошибок в вашем приложении во время выполнения.

### Рабата с данными

Существует 2 типа tRPC процедур:

Query — это процедура, которая не изменяет данные на сервере. На фронте обычно такие процедуры вызываются в момент инициализации компонента.

Mutation — это процедура, которая изменяет данные на сервере. На фронте такие процедуры вызываются в момент отправки формы, или прочих действий пользователя
 
### Контекст

Контекст приложение создаётся один раз при запуске приложения.

[tRPC контекст](https://trpc.io/docs/server/context) создаётся для каждого запроса
 
### Песочница

Песочница для тестирования tRPC-запросов в браузере.

В проекте используется [tRPC Playground](https://github.com/sachinraja/trpc-playground) предоставляет обработчики, которые обслуживают HTML-страницу Playground и обрабатывают запросы, связанные с Playground, такие как получение типов от маршрутизатора.  

Аналог: [Панель tRPC](https://github.com/iway1/trpc-panel) автоматически генерирует пользовательский интерфейс для ручного тестирования вашего бэкэнда tRPC

## Zod 

[Zod](https://zod.dev/) — это библиотека проверки на уровне схемы с поддержкой типов Typescript. Цель — исключить дублирующие объявления типов. С Zod вы объявляете валидатор один раз, и Zod автоматически выведет статический тип TypeScript. Легко объединять более простые типы в сложные структуры данных.

## Prisma

PostgreSQL — это реляционная база данных
Альтернативы PostgreSQL: MySQL, MongoDB, ...

[Prisma](https://www.prisma.io) позволяет описать схему БД, сгенерировать миграции БД, сгенерировать типы TS, и работать с БД через TS код.
Альтернативы Prisma: TypeORM, Sequelize.

## Авторизация 

[JWT](https://jwt.io/introduction) — это способ передачи данных между клиентом и сервером в зашифрованном виде

[Passport.js](https://www.passportjs.org/) — это библиотека для авторизации на сервере

[passport-jwt](https://www.passportjs.org/packages/passport-jwt/) — это плагин для Passport.js, который позволяет авторизовывать пользователей по JWT токену

[Соль](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/) — это выражение относится к добавлению случайных данных к входным данным хэш-функции для гарантии уникального выхода, хеша, даже если входные данные одинаковы. Следовательно, уникальный хэш, полученный путем добавления соли, может защитить нас от различных векторов атак, таких как атаки с использованием хэш-таблиц, одновременно замедляя атаки по словарю и атаки методом грубой силы в автономном режиме. Добавляется к хэшу пароля, чтобы в случае утечки данных, злоумышленник совсем никак не смог получить пароли пользователей.

# Создание frontend React приложения с помощью Vite

Современные приложения и сайты состоят из множества файлов: стилей, JS-кода, кусочков HTML-разметки, а также статических ассетов (иконок, шрифтов и так далее). Кроме того, в процессе разработки могут использоваться шаблонизаторы, препроцессоры, внешние библиотеки и npm-пакеты. Охватить такое большое количество процессов и вспомогательных инструментов довольно сложно.

На помощь приходят так называемые «бандлеры» — сборщики. Они помогают собирать проект, объединять кусочки кода в одно целое. Благодаря бандлерам разработчик может по кусочкам писать исходники, а сборщик собирает из этого проект.

Среди наиболее известных банлеров можно отметить Webpack, Parcel, Rollup. В State of JS придумали хорошее название для всей категории — Build Tools (инструменты для сборки). Одним из наиболее современных бандлеров является и Vite.

# Vite

[Vite](https://vitejs.dev) (с французского "быстрый", произносится /вит/ ) — это быстрый сборщик и сервер разработки для веб-приложений, который значительно упрощает разработку. 

Он предлагает мгновенную рекомпиляцию и горячую замену модулей без необходимости полной перезагрузки страницы, что делает процесс разработки быстрым и эффективным. Vite также предлагает встроенную поддержку для различных фреймворков, таких как Vue.js, React, и других, а также предоставляет оптимизации производительности, такие как tree shaking, сжатие кода и другие, чтобы сделать веб-приложения быстрыми и эффективными в производственной среде.

Vite самодостаточный и имеет практичные настройки по умолчанию прямо из коробки, но он также может очень гибко настраиваться и расширять свой функционал через его Plugin API и JavaScript API с полной поддержкой типов. Например для поддержки устаревших браузеров воспользуйтесь официальным плагином @vitejs/plugin-legacy. 

DevServer и HMR
С помощью команды npm run dev можно запустить dev-сборку проекта. Откроется страница index.html со всеми подключенными к ней скриптами и стилями. Dev-сервер поднимается очень быстро за счёт ESM. Vite разделяет весь ваш JS-код на модули и отдаёт браузеру. Браузер загружает их параллельно.

Что происходит при обновлении кода, когда разработчик редактирует JS-файл? Нужно пересобрать код заново? Не совсем. Vite использует HMR в связке с ESM. 

HMR (Hot Module Replacement, с английского — «Горячая замена модулей») — это функция, которая позволяет обновлять модули в работающем приложении в режиме реального времени без необходимости полной перезагрузки страницы.

При изменении файла Vite определяет, в каком модуле произошло изменение и затрагивает ли оно другие модули. Обычно не затрагивает. После этого Vite точечно обновляет изменённый модуль, не касаясь остальных. Бандлеру не нужно пересобирать всё заново, что значительно ускоряет процесс разработки. HMR также работает в контексте CSS.

Entrypoint — это входная точка приложения — JS-файл, который сшивает в себе все модули и части приложения.  В Vite такой входной точкой является HTML-файл. Именно к index.html подключается тег <script> с обязательным указанием type="module". Точно так же подключаются стили. 

Чтобы получить оптимизированный код, который работает в старых версиях браузеров, JavaScript необходимо пропустить через транспилятор и минификатор. Для этих целей обычно используются такие инструменты, как Babel и Terser. В конфигурационном файле Vite легко настроить эти процессы. Например, можно указать параметр minify в значение esbuild или terser, указав тем самым, что будет отвечать за минификацию. 

Чтобы создать проект на основе React с использованием TypeScript, нужно создать файлы с расширением .tsx.

## React 

Пользовательский интерфейс приложения будет на React

[React](https://react.dev) — это JavaScript-библиотека от «Фейсбука» для создания пользовательских интерфейсов, то есть внешней части сайтов и приложений, с которой взаимодействует пользователь. 

Главная фишка:

Компонент — это кусочек кода, который отвечает за внешний вид одного из элементов сайта или приложения. Причём такие кусочки-компоненты могут быть вложенными.

Состояние — это вся информация об элементе, в том числе о его отображении. Например, состояние объекта «термометр» может описываться свойствами current_temperature, min и max.

Например, внутри поста есть текст, изображение, аватарка, имя автора, лайки, комментарии, различные информационные элементы. Внутри блока с фотографиями — отдельные фото, а внутри блока с краткой информацией — собственно та самая краткая информация. 

У каждого из этих компонентов есть состояния. Например, блок краткой информации будет по-разному выглядеть в мобильной и десктопной версиях, у сердечка меняется число с лайками или цвет (если вы лайкнули или не лайкнули запись), а пост может обрезать текст, показывать содержимое полностью, меняться в зависимости от содержания. Ведь содержание поста — это тоже его состояние. Именно в этом проявляется гибкость и сила React.js: вы пишете компонент один раз, а потом просто передаёте ему разные состояния.
Иконка профиля мб: 
Большая — в шапке личной страницы.
Стандартная — в верхнем меню и записи в ленте.
Совсем крошечная — в строке «у вас столько-то подписчиков».
Уже получилось три состояния, но это не предел — ведь внешний вид аватарки различается в мобильной и десктопной версиях, в приложениях для Android, iOS и так далее. Отметим, что аватарка практически везде будет вложенной — в составе более крупных компонентов React.js, таких как пост, шапка, боковая панель или меню.

В React.js есть собственные средства для управления состояниями, но на практике в средних и крупных проектах чаще используют Redux — сторонний менеджер состояний. Он удобнее и лучше масштабируется.

Компоненты React.js пишут на особом языке — JSX, который выглядит как смесь JavaScript и HTML. Код React.js транслируется в JavaScript, с которым понимает браузер. Для этого написанное на React.js приложение прогоняют, например, через Babel — специальную программу-транспайлер, которая переводит разные представления (то есть языки вроде JSX) в JavaScript-код.

Babel — это библиотека транспиляции. Она берет код ES6/7/Next и компилирует его до предыдущего стандарта. Она позволяет использовать ES6, часть ES7 и с плагинами, то, что официально еще не является частью языка. Babel обычно используется для преобразования кода ES6+, чтобы его можно было запустить в браузере, многие из которых, которые все еще широко используются, поддерживают только ES5.

## React query

[React query](https://tanstack.com/query/latest) — это мощный инструмент для асинхронного управления состоянием для TS/JS, React и тд.

## React Router 

[React Router](https://reactrouter.com) — это инструмент для создания многостраничных приложений

## Подгрузка данных при скроле

[React infinite scroller](https://www.npmjs.com/package/react-infinite-scroller) — компонент позволяет создать простую, легкую бесконечную прокручиваемую страницу или элемент, поддерживая как оконные, так и прокручиваемые элементы.

## React Native

React Native — тоже разработка «Фейсбука»*, которую не следует путать с обычным React.js. В какой-то момент компания поняла, что на React.js пишут приложения не только для браузеров, но и для разных операционных систем. Правда, работали такие приложения довольно медленно. Чтобы решить эту проблему, в «Фейсбуке»* и создали нативную версию библиотеки.

Синтаксис React Native похож на JSX, но переводится на понятный и привычный для Windows, macOS, Android и других операционных систем язык. То есть приложение становится нативным — использует стандартные для разных платформ возможности и протоколы, а не запускается в браузере. Мало того, на платформе React Native можно использовать и другие языки программирования — например, Java, Swift, Objective-C.


## Форма

[React по useState](https://react.dev/reference/react/useState)

[Formik](https://formik.org/) — библиотека форм с открытым исходным кодом для React и React Native. 
Альтернативы Formik: react-hook-form, final-form

## Валидация данных

Для TypeScript лучшее решние, которое используется в бэкэнде — это [Zod](https://zod.dev)
Альтернативы Zod: yup, joi

# Автоматическое форматирование кода

## Prettier

[Prettier](https://prettier.io) — это продуманный форматировщик кода с поддержкой множества языков.

## Проверка типов tsc

[tsc](https://www.dev-notes.ru/articles/typescript/typescript-basics-typescript-compiler-tsc-and-tsconfig/) — это компилятор TypeScript. Он принимает TypeScript код (файлы .ts или .tsx ) и компилирует его в JavaScript код (файлы .js), который может быть выполнен средой выполнения JavaScript.

## ESLint

[ESLint](https://eslint.org) — это инструмент для статического анализа кода

## Stylelint

[Stylelint](https://stylelint.io) — CSS-линтер, который поможет избежать ошибок и обеспечить соблюдение соглашений.

## husky

[husky](https://typicode.github.io/husky) — автоматическая проверка сообщения коммитов, кода и запуск тестов при коммите или отправке. 

## Стили

Vite также поддерживает PostCSS-модули и PostCSS-плагины. Например, плагин autoprefixer генерирует префиксы для кроссбраузерности стилей.

Vite поддерживает Lightning CSS из коробки, поэтому необходимости в PostCSS практически нет. Lightning CSS покрывает множество правил из PostCSS.

Vite поддерживает несколько препроцессоров: Sass, LESS, Stylus.

[Tailwind CSS](https://tailwindcss.com/docs/guides/vite) — CSS-фреймворк использует подход под названием «атомарный css». Нам не надо писать стили в отдельных файлах, вместо этого на страницу автоматически добавляются классы, которые затем прописываются в разметке.

CSS — это язык для описания внешнего вида веб-страницы.

SCSS — CSS препроцессор, который добавляет множество полезных возможностей: 

- Сбрасывайте дефолтные стили браузера, чтобы не было непредвиденных проблем

- Храните все переиспользуемые переменные в styles/_vars.scss

- Храните все переиспользуемые наборы стилей (миксины) в styles/_mixins.scss

- Стили в файла *.modue.scss будут применены только к компонентам, которые импортируют этот файл

- Стили в файла *.scss будут применены ко всем компонентам

## Минификация

Скомпилированные стили можно минифицировать, чтобы облегчить стилевой файл и ускорить загрузку страницы. При работе с JavaScript помимо этого можно транспилировать код, чтобы он работал в старых версиях браузеров. При работе с JavaScript помимо этого можно транспилировать код, чтобы он работал в старых версиях браузеров. В Gulp и Webpack для этих целей используют внешние пакеты-плагины, а с Vite всё проще. Укажем в конфигурационном файле следующие опции:
```
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: true,
  },
});
```   
Эта опция включает транспиляцию JavaScript и минификацию CSS. Значение true является значением по умолчанию, его можно не указывать. Также по умолчанию транспиляцией занимается ESBuild.

## Работа с графикой

### Оптимизация изображений в Vite

Для уменьшения веса картинок используем плагин vite-plugin-image-optimizer. Внутри плагина используются популярные библиотеки SVGO и Sharp.js.

Так как в пакете не предусмотрены SVGO и Sharp.js, установим их отдельно:
```  
npm install sharp --save-dev
npm install svgo --save-dev
```     
Подключим плагин в vite.config.js. Импортируем плагин, прописываем его в поле pligins и передаём необходимые настройки.
```  
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        // options will be here..
      }),
    ],
  };
});
```     
В опциях укажем расширения изображений и на сколько будем их ужимать.
```  
ViteImageOptimizer({
  jpg: {
    quality: 75,
  },
  png: {
    quality: 75,
  },
});
```  

### Создание SVG-спрайта

Векторный спрайт — набор иконок, используемых в проекте. Все иконки собраны в один файл, каждая со своим уникальным именем. Спрайт существенно упрощает использование векторной графики.

Попробуем собрать спрайт при помощи Vite и рассмотрим его использование в проекте.

Для спрайта используем плагин vite-plugin-svg-spriter, его просто настроить и использовать.
```  
npm i vite-plugin-svg-spriter
```      
Уже знакомым способом добавляем спрайт в конфиг. В качестве опций передадим только svgFolder, где будет указан путь до папки с иконками, которые нужно включить в спрайт.
```  
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import createSvgSpritePlugin from "vite-plugin-svg-spriter";

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 15,
      },
      png: {
        quality: 75,
      },
    }),
    createSvgSpritePlugin({
      svgFolder: "./assets/images/svg/",
    }),
  ],
});
```      
В dev-сборке и в production-сборке плагин встроит инлайновый спрайт в разметку. Обращаться к иконкам при этом можно будет следующим образом:
```  
<svg>
  <use href="#htmlacademy">
</svg>
```  

### Генерация WebP

Для создания WebP в сборке на Vite существуют плагины, но они могут работать некорректно. Это происходит в силу молодости экосистемы. В репозитории Awesome Vite вы найдете несколько плагинов, связанных с WebP.

Например, связка vite-plugin-imagemin и imagemin-webp. Установка:
```  
npm install vite-plugin-imagemin imagemin-webp --save-dev
```      
Конфигурация:
```  
import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import imageminWebp from "imagemin-webp";

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
      webp: imageminWebp({
        quality: 75,
      }),
    }),
  ],
});
```  

## Серверный прокси в Vite

Серверный прокси в Vite используется для перенаправления запросов с вашего локального сервера разработки на другой сервер. Это особенно полезно, когда есть бэкенд-сервер, к которому ваше фронтенд-приложение должно обращаться для получения данных или выполнения других операций.

Прокси-сервер помогает решить несколько задач:

- Разделение окружений. Разделяет фронтенд и бэкенд, что позволяет разрабатывать и тестировать их независимо.

- Избежание CORS-проблем. Устраняет проблемы, связанные с политикой ограничений междоменных запросов (CORS), при работе с API.

- Управление маршрутами. Позволяет перенаправлять запросы на различные серверы или пути без изменения кода фронтенда.

Пример настройки:
``` 
// vite.config.js
export default {
  server: {
    proxy: {
      // Пример: перенаправить все запросы, начинающиеся с /api, на другой сервер
      "/api": {
        target: "http://localhost:5000", // URL бэкенд-сервера
        changeOrigin: true, // Устанавливает заголовок Host в целевой сервер
        rewrite: (path) => path.replace(/^\/api/, ""), // Переписывает путь запроса
      },
      // Можно добавить больше конфигураций для других маршрутов
    },
  },
};
``` 

# Переменные окружения

Переменные окружения — это переменные, которые могут отличаться в зависимости от окружения, в котором запускается приложение. Например, в продакшене вы можете использовать одну БД, а при локальной разработку другую.

Цикл разработки включает следующие этапы (они же среды разработки/окружения):

- development — среда разработки, которая используется разработчиками для написания функционала;

- testing — среда тестирования, используемая для проверки нового кода;

- staging — среда, максимально приближенная к боевому окружению, используется для финальной проверки;

- production — среда эксплуатации, которую видят пользователи.

[Dotenv](https://github.com/motdotla/dotenv) — это модуль с нулевой зависимостью, который загружает переменные среды из файла .env в process.env. 

# Компоненты

Layout компонента общего для всех страниц
компонент Segment, для сокращения количества кода и его переиспользования


# Полезные ссылки

- https://balsamiq.com — официальный сайт Balsamiq. Создание графического прототипа для проекта

- https://ohmyz.sh — официальный сайт Oh My Zsh, красивая и удобная консоль с поддержкой коротких git команд. [Официальная статья о том, как поставить WSL на windows](https://learn.microsoft.com/en-us/windows/wsl/install) там потом и используйте Oh My Zsh, и вообще разрабатывайте в WSL

- [Статья о том, как поставить WSL на windows на русском](https://winitpro.ru/index.php/2020/07/13/zapusk-linux-v-windows-wsl-2)

- [Статья о том, как разрабатывать в VSCode внутри WSL](https://code.visualstudio.com/docs/remote/wsl)

- https://www.reshot.com — сайт с реально бесплатными иконками

- https://realfavicongenerator.net — сайт для генерации favicon

- https://scale.flexiple.com/illustrations/single — сайт с бесплатными иллюстрациями

- https://tinypng.com — сайт для уменьшения размера картинок


# Расширения VSCode

<ul>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens">VSCode Extension: GitLens — Git supercharged</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">VSCode Extension: Prettier Formatter for Visual Studio Code</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next">VSCode Extension: JavaScript and TypeScript Nightly</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">VSCode Extension: ESLint</a> — расширение для VSCode, которое позволяет использовать ESLint
</li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=JayFong.generate-index">VSCode Extension: Generate Index</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=Prisma.prisma">VSCode Extension: Prisma</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=mjmlio.vscode-mjml">VSCode Extension: MJML</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner">VSCode Extension: Jest Runner</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot">VSCode Extension: GitHub Copilot</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare">VSCode Extension: Live Share</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command">VSCode Extension: multi-command</a> — расширение для VSCode, которое позволяет создавать горячие клавиши для нескольких команд</li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools">VSCode Extension: SQLTools</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint">VSCode Extension: Stylelint</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons">VSCode Extension: vscode-icons</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=rusnasonov.vscode-typograf">VSCode Extension: vscode-typograf</a></li>
<li><a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings">VSCode Extension: IntelliJ IDEA Keybindings</a> — только для тех, кто переезжает с IntelliJ IDEA на VSCode
</li>
</ul>

# Команды  VSCode

<ul>
<li>В VSCode в верхнем меню выберите View → Command Palette... (там рядом будет написана ваша горячая клавиша, запомните её и используйте). Перед вами откроется поисковая строка по всем командам доступным в VSCode и установленных экстеншенах. Вот перечень команд, которыми я сам постоянно пользуюсь. Вводите их в поиске, запоминайте горячие клавиши, также написанные рядом с ними и пользуйтесь.</li>
<li>Format Document — форматирование всего файла. Я использую эту команду постоянно, чтобы не заморачиваться с форматированием кода вручную.</li>
<li>Toggle Line Comment — комментирование/раскомментирование кода.</li>
<li>Go to Definition — переход к определению. Иногда нужно перейти к определению переменной или функции. Для этого использую эту команду.</li>
<li>Go to References — переход к ссылкам. Чтобы перейти к местам, где используется переменная или функция. Или можно просто с зажтой клавишей команд на маке кликнуть по переменной.</li>
<li>Go to File — переход к файлу. Когда нужно перейти к определенному файлу по его названию.</li>
<li>Search: Find in Files — поиск по файлам. Когда нужно найти определенный текст во всех файлах.</li>
<li>Transform to (Uppercase, Lowercase, Snake case...) — преобразование текста. Когда нужно преобразовать текст в верхний регистр, нижний регистр, змеиный регистр и т.д. Удобно при массовом редактировании кода</li>
<li>Зажмите клавишу опшинс на маке, или альт на виндовс (или ещё какую-то такую), и кликайте по разным местам файла, устанавливая множество крусоров для массового редактирования файла. Ещё можете зажать левую клавишу мыши и выделять множество срок, расставляя множество курсоров.</li>
<li>File: Reveal Active File in Explorer View — показать текущий файл в файловом менеджере в влевой части экрана. Удобно, когда вы потерялись в файлах.</li>
<li>Go Back — возврат к предыдущему месту. Когда вы перешли к определению переменной, а потом хотите вернуться к тому месту, где вы были.</li>
<li>Go Forward — возврат к следующему месту. Когда вы вернулись к предыдущему месту, а потом хотите вернуться к тому месту, где вы были.</li>
<li>Rename Symbol — переименование переменной/функции/... везде, где она используется</li>
<li>Copy Line Down — дублирование строки (копирование + вставка), в которой установлен кусор</li>
<li>Organize Imports — удалить неиспользуемые импорты из верхушки файла</li>
</ul>

# Терминальные команды Git (система контроля версий)

<ul>
<li><code>git init</code> — инициализировать репозиторий</li>
<li><code>git status</code> — посмотреть статус репозитория</li>
<li><code>git add -A</code> — добавить изменения в индекс</li>
<li><code>git commit -m "..."</code> — закоммитить изменения</li>
<li><code>git remote add origin ...</code> — добавить удалённый репозиторий</li>
<li><code>git push -u origin master</code> — запушить изменения в удалённый репозиторий в первый раз</li>
<li><code>git pull</code> — забрать изменения из удалённого репозитория</li>
<li><code>git push</code> — запушить изменения в удалённый репозиторий в последующие разы</li>
</ul>