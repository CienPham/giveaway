export interface Project {
  id: string;
  title: string;
  description: string;
  currentAmount: number;
  targetAmount: number;
  endDate: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}