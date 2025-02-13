import {apiRequest} from "./utils.ts";
import {UserData} from "./user.types.ts";
import {ActivityData} from "./activity.types.ts";
import {AverageSessionsData} from "./average-sessions.types.ts";
import {PerformanceData} from "./performance.types.ts";

export const USE_MOCK = false;

export class SportSeeAPI {
	static getUser = async (id: number): Promise<UserData> => {
		const data: UserData & { score?: number } = (await apiRequest(`user/${id}`, "GET")).data;
		if (data.todayScore === undefined) data.todayScore = data.score || 0;
		return data;
	};

	static getUserActivity = async (id: number): Promise<ActivityData> =>
		(await apiRequest(`user/${id}/activity`, "GET")).data;

	static getUserAverageSessions = async (id: number): Promise<AverageSessionsData> =>
		(await apiRequest(`user/${id}/average-sessions`, "GET")).data;

	static getUserPerformance = async (id: number): Promise<PerformanceData> =>
		(await apiRequest(`user/${id}/performance`, "GET")).data;
}
