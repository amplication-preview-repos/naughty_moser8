import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const TaskJobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cronExpression" source="cronExpression" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="isActive" source="isActive" />
        <BooleanInput label="isOneTime" source="isOneTime" />
        <DateTimeInput label="lastExecutionTime" source="lastExecutionTime" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="nextExecutionTime" source="nextExecutionTime" />
      </SimpleForm>
    </Edit>
  );
};
