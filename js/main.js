    //создаем модель таскборда
    let data = localStorage.getItem('boards');

    //если нет сохраненного, выдаем стартовый объект
    if (data == null) {

    data = {
        'boards': [
            {
                'backgrounds': [],
                'title': 'inordic',
                'columns': [
                    {
                        'title': 'Задачи',
                        'cards': [

                        ]
                    }
                ]
            }
        ]
    };

} else {

    data = JSON.parse(data);

}

        //создаем объект для обоев

        let backgrounds = [
            {
                'theme': 'Фэнтези',
                'image': [
                    'https://stacymch.github.io/wallpapers/img/castle.jpg',
                    'https://stacymch.github.io/wallpapers/img/forest.jpg',
                    'https://stacymch.github.io/wallpapers/img/hall.jpg',
                    'https://stacymch.github.io/wallpapers/img/house.jpg',
                    'https://stacymch.github.io/wallpapers/img/portal.jpg',
                    'https://stacymch.github.io/wallpapers/img/river.jpg',
                    'https://stacymch.github.io/wallpapers/img/tree.jpg',
                    'https://stacymch.github.io/wallpapers/img/waterfall.jpg'
                ]
            },
            {
                'theme': 'Природа',
                'image': [
                    'https://stacymch.github.io/wallpapers/img/nature1.jpg',
                    'https://stacymch.github.io/wallpapers/img/nature2.jpg',
                    'https://stacymch.github.io/wallpapers/img/nature3.jpg',
                    'https://stacymch.github.io/wallpapers/img/nature4.jpg',
                    'https://stacymch.github.io/wallpapers/img/nature5.jpg',
                    'https://stacymch.github.io/wallpapers/img/nature6.jpg',
                    'https://stacymch.github.io/wallpapers/img/nature7.jpg',
                    'https://stacymch.github.io/wallpapers/img/nature8.jpg'
                ]
            },
            {
                'theme': 'Аниме',
                'image': [
                    'https://stacymch.github.io/wallpapers/img/anime2.jpg',
                    'https://stacymch.github.io/wallpapers/img/anime3.jpg',
                    'https://stacymch.github.io/wallpapers/img/anime4.jpg',
                    'https://stacymch.github.io/wallpapers/img/anime5.jpg',
                    'https://stacymch.github.io/wallpapers/img/anime6.jpg',
                    'https://stacymch.github.io/wallpapers/img/anime7.jpg',
                    'https://stacymch.github.io/wallpapers/img/anime8.jpg',
                    'https://stacymch.github.io/wallpapers/img/anime9.jpg'
                ]
            }
        ];

    renderBoards();

    //функция сохранения
    function save() {

        //кодируем data в json, т.к. localStorage может записывать только строки
        let dataJson = JSON.stringify(data);

        //сохраняем в localStorage
        localStorage.setItem('boards', dataJson);
    }

    //функция отрисовки досок
    function renderBoards() {

        //получаем шаблоны
        let tmpl_board = document.getElementById('tmpl-board').innerHTML;
        let tmpl_column = document.getElementById('tmpl-column').innerHTML;
        let tmpl_card = document.getElementById('tmpl-card').innerHTML;

        //находим контейнер под доски
        let container = document.getElementById('boards');

        //очищаем доски
        container.innerHTML = '';

        //в цикле подставляем данные в шаблоны (СОБИРАЕМ ДОСКИ)
        for (let i = 0; i < data['boards'].length; i++) {

           /*  //собираем html, заполненный обоями, для вставки в контейнер
            for (let l = 0; l < data['boards'][i]['backgrounds'].length; l++) {

                let backgroundsHtml = tmpl_backgrounds_list.replace('${background_img}', data['boards'][i]['backgrounds'][l]['image']);
                console.log(backgroundsHtml);
            }

            //собираем тематики фонов
            let backgroundsThemes = '';
            for (let l = 0; l < data['boards'][i]['backgrounds'].length; l++) {

                let themes = tmpl_backgrounds_list.replace('${background_theme}', data['boards'][i]['backgrounds'][l]['theme']);

                //console.log(themes);

                //собираем сами фоны по тематикам
                let backgroundsThemeImgs = '';
                for (let m = 0; m < data['boards'][i]['backgrounds'][l]['image'].length; m++) {

                    //в backgroundsListHtml записывается ПО ОТДЕЛЬНОСТИ версточный шаблон для КАЖДОЙ итерации цикла, заполняемый через массив своими фактическими данными. Сколько будет картинок, столько будет ОТДЕЛЬНЫХ заполненных html-шаблонов
                    let backgroundsListHtml = tmpl_backgrounds_list.replace('${background_theme}', data['boards'][i]['backgrounds'][l]['theme'])
                                                                   .replace('${background_img}', data['boards'][i]['backgrounds'][l]['image'][m]);
                    console.log(backgroundsListHtml);

                    //отрисовываем html-шаблон со списком фонов внутри предназначенного для него div-контейнера
                   menuContainer += backgroundsListHtml;
                    console.log(menuContainer); 
                }
            }; */

                
            //собираем html колонок доски (СОБИРАЕМ КОЛОНКИ ДОСКИ)
            let boardColumns = '';
            for (let j = 0; j < data['boards'][i]['columns'].length; j++) {

                //собираем html карточек колонки (СОБИРАЕМ КАРТОЧКИ КОЛОНКИ)
                let columnCards = '';
                for (let k = 0; k < data['boards'][i]['columns'][j]['cards'].length; k++) {

                    //html одной карточки
                    let cardHtml = tmpl_card.replace('${card_header}', data['boards'][i]['columns'][j]['cards'][k]['card-title'])
                                            .replace('${board_number}', i)
                                            .replace('${column_number}', j)
                                            .replace('${card_number}', k)
                                            .replace('${board_number}', i)
                                            .replace('${column_number}', j)
                                            .replace('${card_number}', k)
                                            .replace('${column_number}', j)
                                            .replace('${card_number}', k)
                                            .replace('${card_content}', data['boards'][i]['columns'][j]['cards'][k]['card-content']);
                                            
                    //добавляем готовый текст карточки к карточкам КОЛОНКИ
                    columnCards += cardHtml;

                }
                
                //в columnHtml записывается ПО ОТДЕЛЬНОСТИ версточный шаблон каждой из колонок, заполняемый через массив своими фактическими данными. Сколько будет колонок, столько будет ОТДЕЛЬНЫХ заполненных html-шаблонов
                let columnHtml = tmpl_column.replace('${column_header}', data['boards'][i]['columns'][j]['title'])
                                            .replace('${column_number}', j)
                                            .replace('${column_number}', j)
                                            .replace('${column_content}', columnCards)
                                            .replace('${board_number}', i)
                                            .replace('${column_number}', j);

                //добавляем готовый текст КОЛОНКИ к колонкам ДОСКИ. в boardColumns хранятся ВМЕСТЕ (сразу друг за другом) все колонки одной доски 
                boardColumns += columnHtml;

            }
            //чтобы рисовать доску, нужно знать, куда ее рисовать. подставляем данные в шаблон доски и подставляем в контейнер
            container.innerHTML += tmpl_board.replace('${board_background}', data['boards'][i]['backgrounds'])
                                             .replace('${board_header}', data['boards'][i]['title'])
                                             .replace('${board_number}', i)
                                             .replace('${board_number}', i)
                                            //  .replace('${background_theme}', data['boards'][i]['backgrounds'][j]['theme'])
                                            //  .replace('${background_img}', data['boards'][i]['backgrounds'][j]['image'][k])
                                             .replace('${board_content}', boardColumns);
        }
        
    }

//функция переименования доски
function boardRename(number) {

    let name = event.target.value;

    data['boards'][number]['title'] = name;
    
    console.log(data);

    save();
}

//функция для замены обоев
function boardChangeBackground(number) {

    //получаем ссылку на фон
    let background = event.target.value;

    //обновляем фон в модели
    data['boards'][number]['backgrounds'] = background;

    //сохраняем
    save();

    //перерисовываем
    renderBoards();

}

//функция создания колонки
function columnAdd() {

    //создаем пустую колонку
    let column = {
                    'title': 'Новый список',
                    'cards': []
    };
        
    //добавляем колонку на доску
    data['boards'][0]['columns'].push(column);

    //добавляем доску
    renderBoards();

    save();
}

//функция переименования колонки
function columnRename(number) {

    //определяем содержимое инпута
    let name = event.target.value;

    //кладем его в нужное место JSON-модели
    data['boards'][0]['columns'][number]['title'] = name;

    //сохраняем
    save();
}


//функция удаления колонок
function columnDelete(number) {

    //спросить подтверждение
    let ok = confirm('Вы действительно хотите удалить колонку?');

    if (ok) {
    //определить номер колонки. уже не нужно, т.к. привязали через цикл ниже

    //удаляем колонку из модели
    data['boards'][0]['columns'].splice(number, 1);

    //сохраняем
    save();

    //перерисовываем
    renderBoards();
    }
}


//функция добавления карточки(задачи)
function cardAdd(board_number, column_number) {

    //создаем пустую карточку(в виде объекта, т.к. она в таком виде в изначальном массиве)
    let card = {
        'card-title': 'Введите название карточки',
        'card-content': 'Описание'
    };

    //добавляем карточку на доску
    data['boards'][board_number]['columns'][column_number]['cards'].push(card);

    //добавляем доску
    renderBoards();

    save();
}

//функция сохранения введенного заголовка карточки
function cardInsertTitle(board_number, column_number, card_number) {

    //определяем содержимое инпута
    let name = event.target.value;

    //кладем его в нужное место JSON-модели
    data['boards'][board_number]['columns'][column_number]['cards'][card_number]['card-title'] = name;

    //сохраняем
    save();
}

//функция сохранения введенного содержимого карточки
function cardInsertContent(board_number, column_number, card_number) {

    //определяем содержимое инпута
    let name = event.target.value;

    data['boards'][board_number]['columns'][column_number]['cards'][card_number]['card-content'] = name;

    //сохраняем
    save();
}


//функция удаления карточки
function cardDelete(column_number, card_number) {

    //спросить подтверждение
    let ok = confirm('Вы действительно хотите удалить карточку?');

    if (ok) {
    //определить номер колонки. уже не нужно, т.к. привязали через цикл ниже

    //удаляем колонку из модели
    data['boards'][0]['columns'][column_number]['cards'].splice(card_number, 1);

    //сохраняем
    save();

    //перерисовываем
    renderBoards();

}
}

//кладем в переменную блок с развернутым меню
let menu = document.getElementById('menu');

//функция вызова меню по клику на три точки
function menuOpen() {
    
    //из-за правой границы выезжает блок меню
    menu.style.right = '0';

}

//функция закрытия меню по клику на крестик
function menuClose() {

    menu.style.right = '-500px';

}


//функция отрисовки страницы меню с выбором обоев
function renderBackgroundsList(board_number) {
    
    alert('it works');

    //находим контейнер под обои
    let backgroundsContainerHtml = document.getElementById('backgrounds');
    console.log(backgroundsContainerHtml);

    //шаблон со страницей меню с выбором обоев перенесла из общего списка обоев выше
    let tmpl_backgrounds_list = document.getElementById('tmpl-backgrounds_list').innerHTML;

    for (let i = 0; i < backgrounds.length; i++) {
        console.log(backgrounds.length);

        for (let j = 0; j < backgrounds[i]['image'].length; j++) {
            backgroundsContainerHtml.innerHTML += tmpl_backgrounds_list.replace('${background_img}', backgrounds[i]['image'][j])
                                                                       .replace('${board_number}', board_number)
                                                                       .replace('${background_number}', i)
                                                                       .replace('${image_number}', j);   
                                                                       
            onsole.log(backgroundsContainerHtml.innerHTML);
        }

    }

    //сохраняем
    save();
       
}

//функция смены фона по клику на иконку с фоном
function changeBackground(board_number, background_number, image_number) {

    //записываем фон в переменную
    let background = backgrounds[background_number]['image'][image_number];

    //переносим фон в JSON-модель
    data['boards'][board_number]['backgrounds'] = background;

    //сохраняем
    save();

    //перерисовываем
    renderBoards();

}
