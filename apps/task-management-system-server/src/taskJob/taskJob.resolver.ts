import * as graphql from "@nestjs/graphql";
import { TaskJobResolverBase } from "./base/taskJob.resolver.base";
import { TaskJob } from "./base/TaskJob";
import { TaskJobService } from "./taskJob.service";

@graphql.Resolver(() => TaskJob)
export class TaskJobResolver extends TaskJobResolverBase {
  constructor(protected readonly service: TaskJobService) {
    super(service);
  }
}
