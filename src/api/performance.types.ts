type KindData = { [key: string]: string };

type PerfData = {
    value: number;
    kind: number;
}

export type Performance = {
    userId: number;
    kind: KindData;
    data2: PerfData[];
}
