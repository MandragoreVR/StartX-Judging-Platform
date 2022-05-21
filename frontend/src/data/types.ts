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
    date?: Date;
    interviewId: number;
    judgeName: string;
    overallDebrief: string;
    pcScore: number;
    pcDebrief: string;
    tdScore: number;
    tdDebrief: string;
    exScore: number;
    exDebrief: string;
    idScore: number;
    idDebrief: string;
}