import { TaskJob as TTaskJob } from "../api/taskJob/TaskJob";

export const TASKJOB_TITLE_FIELD = "name";

export const TaskJobTitle = (record: TTaskJob): string => {
  return record.name?.toString() || String(record.id);
};
