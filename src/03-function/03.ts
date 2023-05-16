import React from 'react';
import {PropsType, student} from "../02-object/02";
//У нас есть функция, которрая сумирует два числа,
// функция нужна чтоб делать одно и тоже действие с разными субьектами
//Над кем эти действия производяться
//возвращаем а+б(у нас есть обстрактные переменные параметры а и б)
//вызывая меня (sum) дайте пожалуйста параметры и я буду давать разный результат
//Если в функции есть ретурн -это значит во время вызова функции мы воспринимаем
// вызов функции, когда мы ставим () , что в этом месте появляеться, то значение которое функция ретурнет
// Мы засовываем функцию sum  в качестве аргумента засовываем вызов суммы
//ЧАЩЕ ВСЕГО БУДУТ ПРИНИМАТЬ НЕ ПРИМЕТИВНЫЕ ПАРАМЕТРЫ ,А ДРУГИЕ ОБЬЕКТЫ

export const sum = (a: number, b: number) => {
    return a + b
};
const res = sum(sum(1, 2), sum(1, 3))




//ЧТО НАШИ ФУНКЦИИ УМЕЮТ ДЕЛАТЬ С ОБЬЕКТАМИ
export const addSkill =  (st:PropsType, skill:string)=>{
    st.technologies.push({
        id:new Date().getDate(),
        title:skill
    })
}
export function addSkill2   (st:PropsType, skill:string){
    st.technologies.push({
        id:new Date().getDate(),
        title:skill
    })
}
export function makeStudentActive( s:PropsType){
  s.isActive = true;

}
export const    doesStudentLiveInCity=( s:PropsType, city:string)=>{
    return s.address.city.title === city;

}



















