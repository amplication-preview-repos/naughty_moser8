import { TaskJobWhereInput } from "./TaskJobWhereInput";
import { TaskJobOrderByInput } from "./TaskJobOrderByInput";

export type TaskJobFindManyArgs = {
  where?: TaskJobWhereInput;
  orderBy?: Array<TaskJobOrderByInput>;
  skip?: number;
  take?: number;
};
