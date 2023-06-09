# Minesweeper React Typescript Game

Игра Сапёр написанная на React с Hooks и Typescript

Тестовое задание(Не выполнил только статистику лидеров на Redux)
### :hammer_and_wrench: Languages and Tools :
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40"height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="JavaScript" alt="JavaScript" width="40"height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>&nbsp;
</div>


Тестовое задание - сапёр
Задача
Требуется реализовать игру "сапёр" согласно правилам, описанным ниже. Это должно быть приложение, с экраном настройки игры и таблицей лидеров. Таблица лидеров и игра должны иметь разные адреса (распологаться на разных роутах).

На экране настройки должен быть выбор уровня сложности

Простой 8x8, 10 мин
Средний 16x16, 40 мин
Сложный 32x16, 100 мин

На экране игры должны быть таймер, счетчик "общее количество мин минус количество флажков", кнопка перезапуска игры и кнопка возврата на экран настроек. Ранее открытые клетки не должно быть можно переоткрыть. Если игрок проигрывает, то игра и таймер должны останавливаться, клетки становится не кликабельными.

Таблица результатов должна содержать 10 игроков с наименьшим временем решения игры, отсортированные по возрастанию

Приложение должно быть красиво оформлено и нормально работать на устройствах с шириной экрана от 320px, должны быть проработаны краевые ситуации и сделана обработка ошибок

Не обязательно, но будет плюсом
Реализация обработки средней кнопки мыши
Реализация такой генерации мин, чтобы при первом ходе невозможно было проиграть
Автоматический выигрыш, если открыты все клетки, на которых нет мин
Кастомный режим, с пользовательским размером поля и количеством мин

Стек
React.js
Redux или любой другой стейт-менеджер (для таблицы рекордов. Данные должны подгружаться и сохраняться в Local Storage)
Можно использовать Next
Можно использовать TypeScript
Можно использвать сторонний UI Kit (bootstrap и тд)
Можно использовать сторонние библиотеки для упрощения работы с данными
Запрещается использовать сторонние библиотеки или код, реализующий логику игры
Сдача задания
После выполнения задания, обязательно выложите исходники на GitHub, GitLab или BitBucket и разверните приложение на GitHub/GitLab Pages, Heroku или любом другом подобном сервисе, после пришлите ссылки нашему HR.

Помните, репозиторий - лицо продукта, он должен быть оформлен как боевой проект

Правила игры
Игровое поле - прямоугольник из клеток. В начале игры все клетки "закрыты" - на них ничего нет. В начале игры мины проставляются случайным образом под клетки, не показываясь игроку

Игрок может кликом левой кнопки мыши на любую неоткытую клетку открыть ее, правила открытия клеток:

Если в клетке мина, то игрок проигрывает
Если в сосеедних 8 клетках, граничахих с ней хотябы углом, есть хоть одна мина, то клетка покажет число мин в этих клетках
Цифра должна иметь цвет, зависящий от числа мин вокруг: 1 — синяя, 2 — зелёная, 3 — красная, 4 — тёмно-синяя 5 — коричневая 6 — бирюзовая 7 — чёрная 8 — белая
Если первые два условия не выполнены, то клетка автоматически открывает все восемь клеток вокруг себя и остаются пустой. Так клетки открываться должны, пока не дойдут до границы игрового поля либо не наткнутся на клетки, под которыми будут цифры
Игрок правой кнопкой мыши может поставить метку на неоткытую клетку. Доступные метки: "флажок", "вопросик" и без метки, меняются циклически

Если все поля либо открыты, либо помечены флажками, а на счетчике 0, то игрок побеждает
