export interface Interview {
    id: number;
    company: string;
    date: Date;
    pcGlobalScore?: number;
    tdGlobalScore?: number;
    exGlobalScore?: number;
    idGlobalScore?: number;
}

export interface Review {
    interviewId: number;
    judgeName: string;
    pcScore: number;
    pcDebrief: string;
    tdScore: number;
    tdDebrief: string;
    exScore: number;
    exDebrief: string;
    idScore: number;
    idDebrief: string;
}