import {GovernmentBuildingType, HouseType} from "../02-object/02_02";


export const getStreetsTitleOfGovermentsBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(b => b.address.street.title);
}
export const getStreetsTitleOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title);

}
export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`);

}