import { ReactNode } from "react";

export interface TimelineStepData {
  title: string;
  institution: string;
  period: string;
  location: string;
  badge: string;
  badgeColor: string;
  icon: ReactNode;
  description: string;
  highlights: string[];
}
