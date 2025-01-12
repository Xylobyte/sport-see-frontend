import {apiRequest} from "./utils.ts";
import {UserData} from "./user.types.ts";
import {ActivityData} from "./activity.types.ts";
import {AverageSessionsData} from "./average-sessions.types.ts";
import {PerformanceData} from "./performance.types.ts";

export class SportSeeAPI {
    static getUser = async (id: number): Promise<UserData> =>
        (await apiRequest(`user/${id}`, "GET")).data;

    static getUserActivity = async (id: number): Promise<ActivityData> =>
        (await apiRequest(`user/${id}/activity`, "GET")).data;

    static getUserAverageSessions = async (id: number): Promise<AverageSessionsData> =>
        (await apiRequest(`user/${id}/average-sessions`, "GET")).data;

    static getUserPerformance = async (id: number): Promise<PerformanceData> =>
        (await apiRequest(`user/${id}/performance`, "GET")).data;
}
