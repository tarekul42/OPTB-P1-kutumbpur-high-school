export interface Holiday {
  id: number;
  title: string;
  date: string;
  type: 'public_holiday' | 'school_event';
  description?: string;
  bnTitle?: string;
}

export interface SchoolEvent {
  id: number;
  title: string;
  date: string;
  type: 'school_event';
  description?: string;
  bnTitle?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  category: string;
}

export type EventType = Holiday | SchoolEvent;

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isHoliday: boolean;
  isWeekend: boolean;
  events: EventType[];
}
