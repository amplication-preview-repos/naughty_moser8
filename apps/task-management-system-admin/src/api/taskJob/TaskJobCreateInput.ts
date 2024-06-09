export type TaskJobCreateInput = {
  cronExpression?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  isOneTime?: boolean | null;
  lastExecutionTime?: Date | null;
  name?: string | null;
  nextExecutionTime?: Date | null;
};
