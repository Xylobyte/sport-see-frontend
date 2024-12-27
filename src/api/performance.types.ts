export type KindData = { [key: string]: string };

export type PerfData = {
    value: number;
    kind: number;
}

export type Performance = {
    userId: number;
    kind: KindData;
    data2: PerfData[];
}
