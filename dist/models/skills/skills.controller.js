"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const skills_service_1 = require("./skills.service");
const skill_dto_1 = require("./dto/skill.dto");
const role_enum_1 = require("../../common/enums/role.enum");
const role_decorator_1 = require("../../decorators/role.decorator");
const roles_guard_1 = require("../../guards/roles.guard");
const jwt_decorator_1 = require("../../decorators/jwt.decorator");
let SkillsController = class SkillsController {
    constructor(skillsService) {
        this.skillsService = skillsService;
    }
    create(createSkillDto) {
        return this.skillsService.create(createSkillDto);
    }
    findAll() {
        return this.skillsService.findAll();
    }
    findOne(id) {
        return this.skillsService.findOne(id);
    }
    update(id, updateSkillDto) {
        return this.skillsService.update(id, updateSkillDto);
    }
    remove(id) {
        return this.skillsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.SuperAdmin),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [skill_dto_1.SkillDto]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, jwt_decorator_1.Public)(),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, jwt_decorator_1.Public)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, jwt_decorator_1.Public)(),
    (0, swagger_1.ApiBody)({
        type: skill_dto_1.UpdateSkillDto,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, skill_dto_1.UpdateSkillDto]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, jwt_decorator_1.Public)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "remove", null);
SkillsController = __decorate([
    (0, common_1.Controller)('skills'),
    (0, swagger_1.ApiTags)('Skills-Done'),
    __metadata("design:paramtypes", [skills_service_1.SkillsService])
], SkillsController);
exports.SkillsController = SkillsController;
//# sourceMappingURL=skills.controller.js.map