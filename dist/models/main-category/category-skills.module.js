"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySkillsModule = void 0;
const category_skill_entity_1 = require("./entities/category-skill.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const category_skills_service_1 = require("./category-skills.service");
const category_skills_controller_1 = require("./category-skills.controller");
let CategorySkillsModule = class CategorySkillsModule {
};
CategorySkillsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_skill_entity_1.CategorySkillEntity])],
        controllers: [category_skills_controller_1.CategorySkillsController],
        providers: [category_skills_service_1.CategorySkillsService],
    })
], CategorySkillsModule);
exports.CategorySkillsModule = CategorySkillsModule;
//# sourceMappingURL=category-skills.module.js.map