import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const TaskJobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cronExpression" source="cronExpression" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="isActive" source="isActive" />
        <BooleanInput label="isOneTime" source="isOneTime" />
        <DateTimeInput label="lastExecutionTime" source="lastExecutionTime" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="nextExecutionTime" source="nextExecutionTime" />
      </SimpleForm>
    </Create>
  );
};
