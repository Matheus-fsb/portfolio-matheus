import { ReactNode } from "react";

export interface Hobby {
  id: string;
  title: string;
  tag: string;
  icon: ReactNode;
  description: string;
  color: string;
  borderColor: string;
}
