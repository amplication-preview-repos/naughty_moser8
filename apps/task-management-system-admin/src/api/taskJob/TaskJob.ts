export type TaskJob = {
  createdAt: Date;
  cronExpression: string | null;
  description: string | null;
  id: string;
  isActive: boolean | null;
  isOneTime: boolean | null;
  lastExecutionTime: Date | null;
  name: string | null;
  nextExecutionTime: Date | null;
  updatedAt: Date;
};
