# Сборка проекта на Gulp 4
Быстро настроить сборку вашего проекта на Gulp и писать код на:
- HTML
- CSS, SCSS
- JavaScript

## Функционал сборки
- компиляция препроцессоров SCSS
- минификация CSS
- автоматическое добавление префиксов CSS
- преобразования кода ECMAScript 2015 + в обратно совместимую версию JavaScript с помощью Babel
- минификация JavaScript
- объединение нескольких файлов JavaScript в один
- сжатие изображений
- отслеживание новых изображений, которые еще не были сжаты
- отслеживание изменений в файлах и автоматический запуск повторной обработки
- генерация sourcemaps
- локальный сервер с автоматическим обновлением страницы при изменении файлов

## Input
|| HTML | Styles | Scripts | Images |
|:---|:------:|:-----:|:----:|:-----:|
| **Каталог** | src/ | src/scss/ | src/js/ | src/img/ |
| **Расширение** | .html | .css, .scss | .js | .jpg, .png, .gif, .svg |

## Output
|| HTML | CSS | JavaScript | Images |
|:---|:------:|:-----:|:----:|:-----:|
| **Путь** | dist/ | dist/css/style.min.css | dist/js/script.min.js | dist/img/ |

## Зупуск:  
1. Скачать все файлы проекта  
2. В терминале перейти в каталог проекта  
3. Выполнить команду: npm i (должен быть установлен node.js)  
4. Выполнить команду: gulp (запуск таска default)  
5. Писать свой код и наслаждаться автоматической сборкой проекта. 

## Команды
- `gulp` - Запуск проекта (включает запуст всех нижеперечисленых команд +запуск локального сервера)
- `gulp build` - Сборка проекта для production (включает команды clean, styles, scripts, img)
- `gulp clean` - Очистка папки dist/
- `gulp styles` - Компиляция стилей
- `gulp scripts` - Сборка JavaScript
- `gulp img` - Минификация картинок
- `gulp watch` - Запуск отслеживания изменений проекта

## Используемые NPM пакеты
[gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp  
[sass](https://www.npmjs.com/package/sass) Компилятор Sass  
[gulp-sass](https://www.npmjs.com/package/gulp-sass) Компиляция Sass и Scss файлов  
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Сжатие и оптимизация JavaScript кода  
[gulp-babel](https://www.npmjs.com/package/gulp-babel) Преобразует JavaScript в старый стандарт  
[@babel/core](https://www.npmjs.com/package/@babel/core) Ядро Babel  
[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) Пресет для компиляции Babel  
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Минификация и оптимизация CSS файлов   
[del](https://www.npmjs.com/package/del) Удаление каталогов и файлов  
[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) Карта строк кода для инструментов  разработчика   
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Автоматическое добавление префиксов в CSS   
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Сжатие изображений   
[gulp-concat](https://www.npmjs.com/package/gulp-concat) Объединение нескольких файлов в один  
[gulp-newer](https://www.npmjs.com/package/gulp-newer) Отслеживание только новых файлов  
[gulp-rename](https://www.npmjs.com/package/gulp-rename) Переименовывает файлы    
[browser-sync](https://browsersync.io/docs/gulp) Автоматическое обновление сайта при изменении файлов  

### Контакты
[![Telegram](https://img.shields.io/badge/-Telegram-333?style=for-the-badge&logo=telegram&logoColor=27A0D9)](https://t.me/LordOfTime_1327)
[![Instagram](https://img.shields.io/badge/-Instagram-333?style=for-the-badge&logo=instagram&logoColor=B4068E)](https://www.instagram.com/dima_kaminskiy_1327)
[![GitHub](https://img.shields.io/badge/-GitHub-333?style=for-the-badge&logo=GitHub&logoColor=fff)](https://github.com/LordOfTime1327)
