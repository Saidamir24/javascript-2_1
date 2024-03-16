const age = +prompt("Введите свой возраст:")

if (age <= 18) {
    alert("Вы молоды. Идите учитесь")
} else if (age <= 50) {
    alert("Вам необходимо работать")
} else if (age <= 58) {
    alert("Вам скоро на пенсию")
} else if (age <= 100) {
    alert("Вы пенсионер")
} else {
    alert("Ошибка")
}

const time = +prompt("Введите время:")

switch (time) {
    case 0:
        alert("00:00 часов ночи")
        break;

    case 1:
        alert("1:00 часов ночи")
        break;

    case 2:
        alert("2:00 часа ночи")
        break;

    case 3:
        alert("3:00 часа ночи")
        break;

    case 4:
        alert("4:00 часа ночи")
        break;


    case 5:
        alert("5:00 часов ночи")
        break;


    case 6:
        alert("6:00 часов утра")
        break;


    case 7:
        alert("7:00 часов утра")
        break;


    case 8:
        alert("8:00 часов утра")
        break;


    case 9:
        alert("9:00 часов утра")
        break;

    case 10:
        alert("10:00 часов утра")
        break;


    case 11:
        alert("11:00 часов утра")
        break;

    case 12:
        alert("12:00 часов дня")
        break;
    case 13:
        alert("13:00 часов дня")
        break;
    case 14:
        alert("14:00 часов дня")
        break;
    case 15:
        alert("15:00 часов дня")
        break;
    case 16:
        alert("16:00 часов дня")
        break;
    case 17:
        alert("17:00 часов вечера")
        break;
    case 18:
        alert("18:00 часов вечера")
        break;
    case 19:
        alert("19:00 часов вечера")
        break;
    case 20:
        alert("20:00 часов вечера")
        break;
    case 21:
        alert("21:00 часов вечера")
        break;
    case 22:
        alert("22:00 часов вечера")
        break;
    case 23:
        alert("23:00 часов вечера")
        break;
    case 24:
        alert("00:00 часов ночи")
        break;

    default:
    alert("ошибка")
        break;
}

const numberOne = +prompt("Введите число:")
const numberTwo = +prompt("Введите число:")
const numberThree = +prompt("Введите число:")




if (numberOne > numberTwo && numberOne < numberThree) {
    alert(numberOne)
} 
else if (numberOne < numberTwo && numberTwo > numberThree) {
    alert('среднее число ' + numberThree)
}
/* else if (numberTwo < numberOne && numberTwo > numberThree) {
    alert(numberTwo)
}  */
 else if (numberTwo > numberOne && numberTwo < numberThree) {
    alert(numberTwo)
}
else if (numberOne < numberTwo && numberOne < numberThree) {
    alert(numberOne)
}
else if (numberOne < numberTwo && numberTwo < numberThree) {
    alert('среднее число ' + numberTwo)
}
else if (numberOne > numberTwo && numberTwo < numberThree) {
    alert('среднее число ' + numberThree)
}
else if (numberOne < numberTwo && numberTwo > numberThree) {
    alert('среднее число ' + numberOne)
}
else if (numberOne > numberTwo && numberTwo > numberThree) {
    alert('среднее число ' + numberTwo)
}
else if (numberOne < numberTwo && numberOne < numberThree) {
    alert(numberTwo)
}