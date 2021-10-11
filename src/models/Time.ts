export enum TimeType {
    INTERVAL,
    BIG_INTERVAL,
    FOCUS
}
export type Time = {
    time: number
    completed: boolean
    type: TimeType
}