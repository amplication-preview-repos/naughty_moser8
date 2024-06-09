import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TaskJobWhereInput = {
  cronExpression?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isOneTime?: BooleanNullableFilter;
  lastExecutionTime?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  nextExecutionTime?: DateTimeNullableFilter;
};
