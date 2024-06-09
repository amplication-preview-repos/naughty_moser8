import * as graphql from "@nestjs/graphql";
import { PermissionResolverBase } from "./base/permission.resolver.base";
import { Permission } from "./base/Permission";
import { PermissionService } from "./permission.service";

@graphql.Resolver(() => Permission)
export class PermissionResolver extends PermissionResolverBase {
  constructor(protected readonly service: PermissionService) {
    super(service);
  }
}
