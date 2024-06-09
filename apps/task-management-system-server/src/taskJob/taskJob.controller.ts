import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskJobService } from "./taskJob.service";
import { TaskJobControllerBase } from "./base/taskJob.controller.base";

@swagger.ApiTags("taskJobs")
@common.Controller("taskJobs")
export class TaskJobController extends TaskJobControllerBase {
  constructor(protected readonly service: TaskJobService) {
    super(service);
  }
}
