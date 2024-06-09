import { SortOrder } from "../../util/SortOrder";

export type TaskJobOrderByInput = {
  createdAt?: SortOrder;
  cronExpression?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isOneTime?: SortOrder;
  lastExecutionTime?: SortOrder;
  name?: SortOrder;
  nextExecutionTime?: SortOrder;
  updatedAt?: SortOrder;
};
