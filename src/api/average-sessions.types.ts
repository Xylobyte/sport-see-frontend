export type SessionsData = {
    sessionLength: number;
    day: number;
}

export type AverageSessions = {
    userId: number;
    sessions: SessionsData[];
}
