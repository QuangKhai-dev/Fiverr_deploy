"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobDetailModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const job_detail_service_1 = require("./job-detail.service");
const job_detail_controller_1 = require("./job-detail.controller");
const job_detail_entity_1 = require("./entities/job-detail.entity");
let JobDetailModule = class JobDetailModule {
};
JobDetailModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([job_detail_entity_1.JobDetailEntity])],
        controllers: [job_detail_controller_1.JobDetailController],
        providers: [job_detail_service_1.JobDetailService],
    })
], JobDetailModule);
exports.JobDetailModule = JobDetailModule;
//# sourceMappingURL=job-detail.module.js.map