type SessionsData = {
    sessionLength: number;
    day: number;
}

export type AverageSessionsData = {
    userId: number;
    sessions: SessionsData[];
}
