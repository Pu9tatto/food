//метод document существует только в браузере
//ПОЛУЧЕНИЕ
const box = document.getElementById('box'), //обратились к определенному элементу
      btns= document.getElementsByTagName('button'), //получили в константу псевдомассив из всех кнопок
      btns2= document.getElementsByTagName('button')[1], //получили вторую кнопку
      btns1 = btns[0],//или так
      circles = document.getElementsByClassName('circle'),//получили как и через тэг нейм псевдомассив из кружков
//выше старые, ниже новые методы
      hearts = document.querySelectorAll('.heart'), //внутрь помещаем селектор
      wrapper=document.querySelector('.wrapper'),
      HeartsW = wrapper.querySelector('.wrapper'); //полчили сердца именно из реппера
// (уникальный идентификатор, класс, атрбуты и др.) Ставится точка(если она есть у селектора). ЕСТЬ метод foreach
hearts.forEach(item=>{
    console.log(item);
});//ввыводит в консоль каждый элемент
const oneHeart = document.querySelector('.heart'); //передает первый селектор в переменную
//изменение объектов
box.style.backgroundColor = 'blue'; //смена цвета у коробки
box.style.width = '250px'; //изменение ширины коробки
btns[1].style.borderRadius = '100%'; //превращает кнопку в овал
circles[0].style.backgroundColor = 'red';  //окрашивает первый круг в красный
box.style.cssText ='background-color: red; widht: 25px'; //изменение нескольких параметров через сиэсэс
//для нескольких переменных
for (let i =0; i<hearts.length; i++){
      hearts[i].style.backgroundColor='green';
}
//
hearts.forEach(item => {
      item.style.backgroundColor='green';
});
//создание элементов
const div = document.createElement('div'), //элемент создается только внутри джавового узла
      text = document.createTextNode('Тут был я'); //добавляет текст через нод
//
div.classList.add('black');
//методы используемые на странице
document.body.append(div); //вставили элемент на страницу в конец бади
//document.querySelector('.wrapper').append(div); // блок после реппера, без его создания.
wrapper.prepend(div); //вставляем блок перед вреппером
hearts[0].before(div);//  div вставился перед сердцем
hearts[0].after(div);//  div вставился после сердцем
circles[0].remove();//удаляет первый кружок
hearts[0].replaceWith(circles[0]); //заменили первое сердце первым кругом
///ниже устаревшие конструкции///
wrapper.appendChild(div); //аналог аппенда
wrapper.insertBefore(div, hearts[3]);  //вставить див перед третьем сердцем
wrapper.removeChild(hearts[1]);// удаление сердца,
wrapper.replaceChild(circles[0],hearts[2]);
//изменение самого объекта
div.innerHTML = "<h1>Руддщ Цщкдв</h1>";// Присваиваем текст коробки
//div.textContent = "Hello"; //тоже самое но толкьо для текста
div.insertAdjacentHTML('beforebegin',"<h2>Hello</h2>"); //вставили ХТМЛ код перед объектом, другой переменной можео и в