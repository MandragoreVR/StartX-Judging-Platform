export interface Interview {
    id: number;
    company: string;
    date: string;
    pc_global_score?: number;
    td_global_score?: number;
    ex_global_score?: number;
    id_global_score?: number;
}

export interface Review {
    publication_date?: string;
    interview_id: number;
    judge_name: string;
    overall_debrief: string;
    pc_score: number;
    pc_debrief: string;
    td_score: number;
    td_debrief: string;
    ex_score: number;
    ex_debrief: string;
    id_score: number;
    id_debrief: string;
}