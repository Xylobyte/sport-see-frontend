import {apiRequest} from "./utils.ts";
import {User} from "./user.types.ts";
import {Activity} from "./activity.types.ts";

export class SportSeeAPI {
    static getUser = async (id: number): Promise<User> =>
        (await apiRequest(`user/${id}`, "GET")).data;

    static getUserActivity = async (id: number): Promise<Activity> =>
        (await apiRequest(`user/${id}/activity`, "GET")).data;

    static getUserAverageSessions = async (id: number): Promise<Activity> =>
        (await apiRequest(`user/${id}/average-session`, "GET")).data;

    static getUserPerformance = async (id: number): Promise<Activity> =>
        (await apiRequest(`user/${id}/performance`, "GET")).data;
}
