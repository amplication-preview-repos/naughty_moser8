import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PermissionService } from "./permission.service";
import { PermissionControllerBase } from "./base/permission.controller.base";

@swagger.ApiTags("permissions")
@common.Controller("permissions")
export class PermissionController extends PermissionControllerBase {
  constructor(protected readonly service: PermissionService) {
    super(service);
  }
}
