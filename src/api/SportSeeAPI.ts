export interface User {
    id: number;
}

export class SportSeeAPI {
    static getUser = async (id: number): Promise<User> => {
        return {
            id: id
        }
    }
}