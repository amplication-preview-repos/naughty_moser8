import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskJobServiceBase } from "./base/taskJob.service.base";

@Injectable()
export class TaskJobService extends TaskJobServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
