export type SessionsData = {
    kilogram: number;
    day: string;
    calories: number;
}

export type Activity = {
    userId: number;
    sessions: SessionsData[];
}
