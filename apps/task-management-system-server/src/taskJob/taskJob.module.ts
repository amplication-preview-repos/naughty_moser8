import { Module } from "@nestjs/common";
import { TaskJobModuleBase } from "./base/taskJob.module.base";
import { TaskJobService } from "./taskJob.service";
import { TaskJobController } from "./taskJob.controller";
import { TaskJobResolver } from "./taskJob.resolver";

@Module({
  imports: [TaskJobModuleBase],
  controllers: [TaskJobController],
  providers: [TaskJobService, TaskJobResolver],
  exports: [TaskJobService],
})
export class TaskJobModule {}
