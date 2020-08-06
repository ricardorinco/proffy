import { ScheduleItem } from './schedule-item';

export interface ClasseAddRequest {
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: number;

    scheduleItems: ScheduleItem[];
}
