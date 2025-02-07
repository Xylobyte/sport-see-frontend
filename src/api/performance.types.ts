type KindData = { [key: string]: string };

type PerfData = {
    value: number;
    kind: number;
}

export type PerformanceData = {
    userId: number;
    kind: KindData;
    data: PerfData[];
}
