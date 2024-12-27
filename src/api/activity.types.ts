type SessionsData = {
    kilogram: number;
    day: string;
    calories: number;
}

export type ActivityData = {
    userId: number;
    sessions: SessionsData[];
}
