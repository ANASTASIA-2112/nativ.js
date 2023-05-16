import {AddressType, CityType} from "./02_02";

export let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            }, {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            }, {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            },
        ],
        governmentBuilding: [
            {
                type: "HOSPITAL", budget: 2000000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 100,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000

    }
})

//01. создайте тип CityType
//02. заполните обьект city, чтобы тесты наши прошли
//тест сити должен содержать 3 дома
test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);
//[] к обьекту обращаемся через точку.Если это обьект мы обязаны создать тип для этого обьекта
    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");


    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Happy street");
})

//01. дополните тип GovernmentBuildingType
//02. заполните обьект city, чтобы тесты наши прошли
//можно написать skip- тест проходить не будет
//щписание теста говорит, что город должен содержать хоспитал и фаир стейшен
test("test city should contains  hospital and fire station ", () => {
    expect(city.governmentBuilding.length).toBe(2);

    expect(city.governmentBuilding[0].type).toBe("HOSPITAL");
    expect(city.governmentBuilding[0].budget).toBe(2000000);
    expect(city.governmentBuilding[0].staffCount).toBe(200);
    expect(city.governmentBuilding[0].address.street.title).toBe("Central Str");

    expect(city.governmentBuilding[1].type).toBe("FIRE-STATION");
    expect(city.governmentBuilding[1].budget).toBe(500000);
    expect(city.governmentBuilding[1].staffCount).toBe(100);
    expect(city.governmentBuilding[1].address.street.title).toBe("South Str");
})
//Итог: обьект - это ключ :значение,
//обьекты могут быть вложенные и лежать в массиваx,обязательно нужно описать тип значения
//что бы составить общий тип нужно типизировать маленькие под обьекты
//свойтсва это id /нужно индефенцироваться очень четко
//в описании здание id нет там адресс улицы и номер дома -состовные индексы 