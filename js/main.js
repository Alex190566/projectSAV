/* variables */
let citylist = ['Москва', 'Немосква', 'Караганда', 'Магадан', 'Люберцы', 'Севастополь', 'Ярославль', 'Вологда', 'Владивосток', 'Барнаул', 'Петрозаводск', 'Самара', 'Саратов', 'Тверь', 'Вашингтон', 'Париж', 'Пермь', 'Екатеринбург', 'Новосибирск', 'Калининград', 'Петрозаводск', 'Волгоград', 'Архангельск', 'Краснодар', 'Симферополь', 'Санкт-Петербург', 'Мурманск', 'Петропавловск-Камчатский', 'Ростов-на-Дону', 'Волжский', 'Саратов', 'Сыктывкар', 'Череповец'];
let rangemin = 0;
let rangemax = 100000000;
let rangemin1 = 0;
let rangemax1 = 100000;
let deal = '.sale, .rent';
let deal1 = '';

/* functions */
function getModalWindow(idname) {
    $('body').append('<div class="screener"></div><div class="modal" id="'+idname+'"><button type="button" class="close">&times;</button></div>');
    $('.screener, .modal .close').click(dropModalWindow);
}
function dropModalWindow() {
    $('.screener, .modal').remove();
}
function actiontimer() {
    let counter = new Date($('.actiontimer').data('actionend'));
    let today = new Date();
    let delta = counter.getTime() - today.getTime();
    let res = true;
    if (delta < 0) {
        delta = 0;
        res = false;
    }
    delta = Math.round(delta/1000);
    let seconds = delta % 60;
    delta = Math.floor(delta/60);
    let minutes = delta % 60;
    delta = Math.floor(delta/60);
    let hours = delta % 24;
    let days = Math.floor(delta/24);
    let helpstr = `<span>${days}</span> ${multiple(days, 'день', 'дня', 'дней')} <span>${addZero(hours)}</span> ${multiple(hours, 'час', 'часа', 'часов')}`;
    /* <span>${addZero(minutes)}</span> ${multiple(minutes, 'минута', 'минуты', 'минут')} <span>${addZero(seconds)}</span> ${multiple(seconds, 'секунда', 'секунды', 'секунд')} */
    $('.actiontimer').html(helpstr);
    return res;
}
function addZero(num) {
    if (num < 10) {
        num = '0' + num;
    }
    return num;
}
function multiple(num, word1, word2, word3) {
    wnum = num % 100;
    if (((wnum % 10) == 1) && (wnum != 11)) {
        return word1;
    } else if (((wnum % 10) >= 2) && ((wnum % 10) <= 4) && (wnum != 12) && (wnum != 13) && (wnum != 14)) {
        return word2;
    } else {
        return word3;
    }
}
function orderReCount() {
    let point = $('.table');
    let allsum = 0;
    let data = 0;
    point.find('tbody tr').each(function(){
        let price = +$(this).find('.price').html();
        data += 1;
        allsum += price;
        $(this).find('.index').html(data);
    });
    point.find('.allsum span').html(allsum);
}

$('.all').on('click', (event) => {
    $('.sale, .rent').attr('style', 'display: block')
    $('#amount1').val(rangemin);
    $('#amount2').val(rangemax);
    $('#amount3').val(rangemin1);
    $('#amount4').val(rangemax1);
    $('#slider-range').slider('values', [rangemin, rangemax]);
    $('#slider-range1').slider('values', [rangemin1, rangemax1]);
    deal = '.sale, .rent';
    deal1 = '';
    // filterPrices()
})

$('.s').on('click', (event) => {
    $('.sale').attr('style', 'display: block')
    $('.rent').attr('style', 'display: none')
    $('#amount1').val(rangemin);
    $('#amount2').val(rangemax);
    $('#amount3').val(rangemin1);
    $('#amount4').val(rangemax1);
    $('#slider-range').slider('values', [rangemin, rangemax]);
    $('#slider-range1').slider('values', [rangemin1, rangemax1]);
    deal = '.sale';
    deal1 = '.rent';
    // filterPrices()
})

$('.r').on('click', (event) => {
    $('.rent').attr('style', 'display: block')
    $('.sale').attr('style', 'display: none')
    $('#amount1').val(rangemin);
    $('#amount2').val(rangemax);
    $('#amount3').val(rangemin1);
    $('#amount4').val(rangemax1);
    $('#slider-range').slider('values', [rangemin, rangemax]);
    $('#slider-range1').slider('values', [rangemin1, rangemax1]);
    deal = '.rent';
    deal1 = '.sale';
    // filterPrices()
})

$('.sc').on('click', (event) => {
    $('.sale, .cottage').attr('style', 'display: block')
    $('.rent, .flat, .land').attr('style', 'display: none')
    $('#amount1').val(rangemin);
    $('#amount2').val(rangemax);
    $('#amount3').val(rangemin1);
    $('#amount4').val(rangemax1);
    $('#slider-range').slider('values', [rangemin, rangemax]);
    $('#slider-range1').slider('values', [rangemin1, rangemax1]);
    deal = '.sale, .cottage';
    deal1 = '.rent, .flat, .land';
    // filterPrices()
})

$('.sf').on('click', (event) => {
    $('.sale, .flat').attr('style', 'display: block')
    $('.rent, .cottage, .land').attr('style', 'display: none')
    $('#amount1').val(rangemin);
    $('#amount2').val(rangemax);
    $('#amount3').val(rangemin1);
    $('#amount4').val(rangemax1);
    $('#slider-range').slider('values', [rangemin, rangemax]);
    $('#slider-range1').slider('values', [rangemin1, rangemax1]);
    deal = '.sale, .flat';
    deal1 = '.rent, .cottage, .land';
    // filterPrices()
})

$('.sl').on('click', (event) => {
    $('.sale, .land').attr('style', 'display: block')
    $('.rent, .cottage, .flat').attr('style', 'display: none')
    $('#amount1').val(rangemin);
    $('#amount2').val(rangemax);
    $('#amount3').val(rangemin1);
    $('#amount4').val(rangemax1);
    $('#slider-range').slider('values', [rangemin, rangemax]);
    $('#slider-range1').slider('values', [rangemin1, rangemax1]);
    deal = '.sale, .land';
    deal1 = '.rent, .cottage, .flat';
    // filterPrices()
})

$('.rc').on('click', (event) => {
    $('.rent, .cottage').attr('style', 'display: block')
    $('.sale, .land, .flat').attr('style', 'display: none')
    $('#amount1').val(rangemin);
    $('#amount2').val(rangemax);
    $('#amount3').val(rangemin1);
    $('#amount4').val(rangemax1);
    $('#slider-range').slider('values', [rangemin, rangemax]);
    $('#slider-range1').slider('values', [rangemin1, rangemax1]);
    deal = '.rent, .cottage';
    deal1 = '.sale, .land, .flat';
    // filterPrices()
})

$('.rf').on('click', (event) => {
    $('.rent, .flat').attr('style', 'display: block')
    $('.sale, .cottage, .land').attr('style', 'display: none')
    $('#amount1').val(rangemin);
    $('#amount2').val(rangemax);
    $('#amount3').val(rangemin1);
    $('#amount4').val(rangemax1);
    $('#slider-range').slider('values', [rangemin, rangemax]);
    $('#slider-range1').slider('values', [rangemin1, rangemax1]);
    deal = '.rent, .flat';
    deal1 = '.sale, .cottage, .land';
    // filterPrices()
})

$('.rl').on('click', (event) => {
    $('.rent, .land').attr('style', 'display: block')
    $('.sale, .cottage, .flat').attr('style', 'display: none')
    $('#amount1').val(rangemin);
    $('#amount2').val(rangemax);
    $('#amount3').val(rangemin1);
    $('#amount4').val(rangemax1);
    $('#slider-range').slider('values', [rangemin, rangemax]);
    $('#slider-range1').slider('values', [rangemin1, rangemax1]);
    deal = '.rent, .land';
    deal1 = '.sale, .cottage, .flat';
    // filterPrices()
})

function filterPrices() {
    let min_ = +$('#amount1').val();
    let max_ = +$('#amount2').val();
    let min1_ = +$('#amount3').val();
    let max1_ = +$('#amount4').val();
    console.log(min_);
    console.log(max_);
    console.log(min1_);
    console.log(max1_);
    $('.cat-item').each(function () {
        // let point = $('.cat-item');
        // point.find('tbody tr').each(function () {
        let price = +$(this).find('.price').html();
        let square = +$(this).find('.square').html();
        // let catprice = document.getElementsByClassName('catprice');
        // console.log(document.getElementsByClassName('price')[0]);
        // let price = document.getElementsByClassName('price');
        // console.log(price[0]);
        console.log(price);
        console.log(square);
        console.log(deal);
        console.log(deal1);
        // $(deal).attr('style', 'display: block');
        if ((price > max_) || (price < min_) || (square > max1_) || (square < min1_)) {
            // $('.cat-item').addClass('hidden');
            // $(deal1).attr('style', 'display: none');
            $(this).attr('style', 'display: none');
        }
        else {
            // $(this).removeClass('hidden')
            // $(deal).attr('style', 'display: block');
            $(this).attr('style', 'display: block');
            $(deal1).attr('style', 'display: none');
            /* if ((square > max1_) || (square < min1_)) {
                // $('.cat-item').addClass('hidden');
                $(this).attr('style', 'display: none');
            } else {
                // $(this).removeClass('hidden')
                $(this).attr('style', 'display: block');
            } */
        }
        // deal = '.sale, .rent';
        // deal1 = '';
    });
}

$('.filterbutton').on('click', (event) => {
    $('.sale, .rent').attr('style', 'display: block');
    $('#amount1').val(rangemin);
    $('#amount2').val(rangemax);
    $('#amount3').val(rangemin1);
    $('#amount4').val(rangemax1);
    $('#slider-range').slider('values', [rangemin, rangemax]);
    $('#slider-range1').slider('values', [rangemin1, rangemax1]);
    deal = '.sale, .rent';
    deal1 = '';
})

$(function(){
    $('.topmenu a').each(function(){
        if (this.href == location.href.split('#')[0]) this.className = 'current';
    });
    
    $('#city span').html(localStorage.getItem('city') || 'Москва');
    
    $('#city').click(function(){
        getModalWindow('citymodal');
        $('.modal').append('<h1>Выберите город:</h1><input type="text" id="citysearch" placeholder="Введите часть названия города..."><div class="columns"></div>');
        for (let city of citylist) {
            $('.modal .columns').append('<p>' + city + '</p>');
        }
        $('.modal p').click(function(){
            let city = $(this).html()
            $('#city span').html(city);
            localStorage.setItem('city', city);
            dropModalWindow();
        });
        $('#citysearch').on('input', function(){
            let namepart = $('#citysearch').val().toLowerCase();
            $('.modal p').each(function(){
                if (!this.innerHTML.toLowerCase().includes(namepart)) {
                    this.style.display = 'none';
                } else {
                    this.style.display = 'block';
                }
            });
        });
    });
    
    if ($('.action').length) {
        actiontimer();
        let timer0 = setInterval(function(){
            if (!actiontimer()) clearInterval(timer0);
        }, 1000);
    }
    
    $('.slider').each(function(){
        makeSlider(this.id, 2000);
    });
    
    if ($('.catmenu li li').length) {
        if ($('.catmenu.simple').length) { // если мы хотим простейший аккордеон без сложной анимации
            $('.catmenu > ul > li').click(function(e){
                if (e.target.tagName != 'A') {
                    $('.open').removeClass('open'); // отнимаем класс open у ранее открытого вложенного списка
                    $(this).find('ul').addClass('open'); // добавляем класс open вложенному списку в кликнутом пункте
                }
            });
        } else { // если мы хотим аккордеон с более красивой анимацией
            $('.catmenu li li').slideUp(1); // скрываем все пункты второго уровня
            $('.catmenu > ul > li').click(function(e){ // ловим клик на пункте первого уровня
                if ((e.target.tagName != 'A') && (!$(this).find('.open').length)) { // если клик не был по ссылке и вложенный список в этом пункте уже не раскрыт...
                    let here = $(this).find('ul'); // сохраняем указатель на вложенный список в кликнутом пункте 
                    if (here.length) { // если в кликнутом пункте есть вложенный список...
                        if ($('.catmenu .open').length) { // если был раскрытый вложенный список...
                            $('.catmenu .open li').slideUp(1000, function(){ // прячем его пункты
                                $('.catmenu .open').removeClass('open'); // затем убираем с него класс open
                                here.find('li').slideDown(1000, function(){ // затем открываем пункты списка по нашему указателю
                                    here.addClass('open'); // и вешаем на него класс open
                                });
                            });
                        } else { // если раскрытого вложенного списка не было...
                            here.find('li').slideDown(1000, function(){ // открываем пункты списка по нашему указателю
                                here.addClass('open'); // и вешаем на него класс open
                            });
                        }
                    } else {
                        if ($('.catmenu .open').length) { // если был раскрытый вложенный список...
                            $('.catmenu .open li').slideUp(1000, function(){ // прячем его пункты
                                $('.catmenu .open').removeClass('open'); // затем убираем с него класс open
                            });
                        }
                    }
                }
            });
        }
    }
    
    if ($('#slider-range').length) {
        $('#slider-range').slider({
            range: true,
            min: rangemin,
            max: rangemax,
            values: [rangemin, rangemax],
            slide: function(event, ui) {
                $('#amount1').val(ui.values[0]);
                $('#amount2').val(ui.values[1]);
                filterPrices();
            }
        });
        $('#amount1').on('change', function() {
            let v1 = +$('#amount1').val();
            let v2 = +$('#amount2').val();
            if (v1 > rangemax) {
                v1 = rangemax;
            } else if (v1 < rangemin) {
                v1 = rangemin;
            }
            $('#amount1').val(v1);
            if (v1 > v2) {
                v2 = v1;
                $('#amount2').val(v2);
            }
            $('#slider-range').slider('values', [v1, v2]);
            filterPrices();
        });
        $('#amount2').on('change', function() {
            let v1 = +$('#amount1').val();
            let v2 = +$('#amount2').val();
            if (v2 > rangemax) {
                v2 = rangemax;
            } else if (v2 < rangemin) {
                v2 = rangemin;
            }
            $('#amount2').val(v2);
            if (v1 > v2) {
                v1 = v2;
                $('#amount1').val(v1);
            }
            $('#slider-range').slider('values', [v1, v2]);
            filterPrices();
        });
        $('#amount1').val(rangemin);
        $('#amount2').val(rangemax);
    }

    if ($('#slider-range1').length) {
        $('#slider-range1').slider({
            range: true,
            min: rangemin1,
            max: rangemax1,
            values: [rangemin1, rangemax1],
            slide: function (event, ui) {
                $('#amount3').val(ui.values[0]);
                $('#amount4').val(ui.values[1]);
                filterPrices();
            }
        });
        $('#amount3').on('change', function () {
            let v1 = +$('#amount3').val();
            let v2 = +$('#amount4').val();
            if (v1 > rangemax1) {
                v1 = rangemax1;
            } else if (v1 < rangemin1) {
                v1 = rangemin1;
            }
            $('#amount3').val(v1);
            if (v1 > v2) {
                v2 = v1;
                $('#amount4').val(v2);
            }
            $('#slider-range1').slider('values', [v1, v2]);
            filterPrices();
        });
        $('#amount4').on('change', function () {
            let v1 = +$('#amount3').val();
            let v2 = +$('#amount4').val();
            if (v2 > rangemax1) {
                v2 = rangemax1;
            } else if (v2 < rangemin1) {
                v2 = rangemin1;
            }
            $('#amount4').val(v2);
            if (v1 > v2) {
                v1 = v2;
                $('#amount3').val(v1);
            }
            $('#slider-range1').slider('values', [v1, v2]);
            filterPrices();
        });
        $('#amount3').val(rangemin1);
        $('#amount4').val(rangemax1);
    }

    if ($('.map').length) {
        $('.map img').click(function () {
            lightbox(this);
        });
    }

    if ($('.images .gallery').length) {
        $('.bigimage img').click(function(){
            lightbox(this);
        });
        
        $('.gal_left').click(function(){
            if (!$(this).hasClass('disabled')) galSlide('right');
        });
        
        $('.gal_right').click(function(){
            if (!$(this).hasClass('disabled')) galSlide('left');
        });
        
        $('.rail img').click(function(){
            let attr = $(this).attr('src').split('mini_').join('');
            $('.bigimage img').attr('src', attr);
        });
    }
    $('.egrn').click(function () {
        let res = {}
        let aim = $(this).parents('.product');
        res.id = aim.data('product-id');
        let image = 'images/obj/egrn' + res.id + '.jpg';
        location.href = image;
    });
    $('.op').click(function () {
        let res = {}
        let aim = $(this).parents('.product');
        res.id = aim.data('product-id');
        let image = 'images/obj/op' + res.id + '.png';
        location.href = image;
    });
    $('.pl').click(function () {
        let res = {}
        let aim = $(this).parents('.product');
        res.id = aim.data('product-id');
        let image = 'images/obj/p' + res.id + '.jpg';
        location.href = image;
    });
    $('.select').click(function () {
        location.href = "order.html";
    });

    /*
    $('.egrn').click(function () {
        let w, wfix, h, hfix, sides;
        let res = {}
        let aim = $(this).parents('.product');
        res.id = aim.data('product-id');
        console.log(res.id)
        let bigimage = 'images/obj/egrn' + res.id + '.jpg';
        console.log(bigimage)
        let curimage = '<img src="' + bigimage + '">';
        console.log(curimage)
        getModalWindow('lightbox');
        w = document.documentElement.clientWidth - 40; // определяем максимальную доступную ширину
        console.log(w)
        h = document.documentElement.clientHeight - 40; // определяем максимальную доступную высоту
        console.log(h)
        // sides = curimage.clientWidth / curimage.clientHeight; // определяем соотношение сторон картинки
        sides = 0.6;
        console.log(sides)
        if (w > sides * h) { // если по соотношению сторон доступная ширина больше нужной
            wfix = Math.floor(sides * h); // вычисляем нужную ширину
            hfix = h;
        } else if (w < sides * h) { // если по соотношению сторон доступная ширина меньше нужной
            wfix = w
            hfix = Math.floor(w / sides); // вычисляем нужную высоту
        }
        // устанавливаем размеры модалке
        document.getElementById('lightbox').style.cssText = `left: ${(w - wfix) / 2 + 20}px; top: ${(h - hfix) / 2 + 20}px; width: ${wfix - 80}px; height: ${hfix - 80}px;`;
        // вставляем картинку
        document.getElementById('lightbox').insertAdjacentHTML('beforeend', `<img src="${bigimage}">`);
        // добавляем класс для плавного проявления
        setTimeout(function () {
            document.getElementById('lightbox').classList.add('ready');
        });
    });
    */
    
    $('.btn-buy').click(function(){
        let res = {}
        let aim = $(this).parents('.product');
        res.id = aim.data('product-id');
        res.name = aim.find('h1').html();
        res.price = aim.find('.price span').html();
        res.quantity = aim.find('.square span').html();
        res.link = location.href;
        console.log(res.id);
        let basket = JSON.parse(localStorage.getItem('basket'));
        /*
        вариант с флагом
        */
        /*
        if (basket) {
            let flag = false;
            for (let item of basket) {
                if (item.id == res.id) {
                    item.quantity = +item.quantity + +res.quantity;
                    flag = true;
                    break;
                }
            }
            if (!flag) basket.push(res);
        } else {
            basket = [res];
        }
        localStorage.setItem('basket', JSON.stringify(basket));
        */
        /*
        вариант без флага
        */

        if (!basket) basket = [];
        for (let item of basket) {
            if (item.id == res.id) {
                alert('Объект уже избран');
                return;
            }
        }
        alert('Объект добавлен в "Избранное"');
        basket.push(res);
        localStorage.setItem('basket', JSON.stringify(basket));
        console.log({basket})
    });

    
    if ('.order') {
        let point = $('.table tbody');
        let count = 1;
        let basket = JSON.parse(localStorage.getItem('basket'));

        if (!basket) basket = [];
        /* basket.push(...startbasket); */
        for (let item of basket) {
            let hlpstr = '<tr data-id="' + item.id + '"><th scope="row" class="index">' + count + '</th><td class="name"><a href="' + item.link + '">' + item.name + '</a></td><td class="qty"><strong>' + item.quantity + '</strong></td><td class="price">' + item.price + '</td><td class="delete icon">&#xe906;</td></tr>';
            point.append(hlpstr);
            count++;
        }
        orderReCount();
        if ($(basket).length) {
            orderReCount();
        } else {
            $('.order').addClass('empty');
        }

        /*
        $('.table .plus').click(function(){
            changeOrder($(this).parents('tr'), 1);
        });
        $('.table .minus').click(function(){
            changeOrder($(this).parents('tr'), -1);
        });
        */

        $('.table .delete').click(function () {
            let mark = $(this).parents('tr');
            let data = mark.find('.index').html() - 1;
            basket = JSON.parse(localStorage.getItem('basket'));
            console.log(data);
            $(this).parents('tr').remove();
            basket.splice(data, 1);
            console.log({ basket });
            localStorage.removeItem('basket');
            localStorage.setItem('basket', JSON.stringify(basket));
            if ($('tbody tr').length) {
                orderReCount();
            } else {
                $('.order').addClass('empty');
                localStorage.removeItem('basket');
            }
        });

        $('.order form .submit').click(function(){
            $('.is-invalid').removeClass('is-invalid');
            $('.invalid-feedback').remove();
            let form = document.forms[0];
            let valid = true;
            if (!form.name.value) {
                $('form #name').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Должно быть указано имя!</div>');
                valid = false;
            }
            if (!form.addr.value) {
                $('form #addr').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Должен быть указан адрес!</div>');
                valid = false;
            }
            if (!form.phone.value.match(/^((\+7)|(8))?\s?\(?\d{3}\)?\s?\d{3}\-?\d{2}\-?\d{2}$/)) {
                $('form #phone').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Должен быть указан телефон!</div>');
                valid = false;
            }
            if (valid) {
                let products = [];
                $('.table tbody tr').each(function(){
                    let res = {
                        id: this.dataset.id,
                        square: +$(this).find('.qty strong').html(),
                        price: +$(this).find('.price').html()
                    };
                    products.push(res);
                })
                let data = {
                    name: form.name.value,
                    phone: form.phone.value,
                    mail: form.mail.value,
                    addr: form.addr.value,
                    comm: form.comm.value,
                    date: form.date.value,
                    order: products
                };
                console.log([ data ])
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                }).then((response) => response.json()).then(function(json){
                    localStorage.removeItem('basket')
                    getModalWindow('order');
                    $('.modal').append('<p>Ваш заказ оформлен под номером ' + json.id + '.</p>');
                    $('.order').addClass('empty');
                    form.reset();
                });
            }
        });
        $('.order .input-group .icon').click(function(){
            let date = new Date()
            makeDatePicker(`${date.getFullYear()}-${addZero(+date.getMonth() + 1)}-${addZero(+date.getDate())}`)
        });
    }
    
    console.log('just loaded');
});