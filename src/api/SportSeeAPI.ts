import {apiRequest} from "./utils.ts";

export interface User {
    id: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number
    };
    todayScore: number;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    }
}

export class SportSeeAPI {
    static getUser = async (id: number): Promise<User> =>
        (await apiRequest(`user/${id}`, "GET")).data;
}