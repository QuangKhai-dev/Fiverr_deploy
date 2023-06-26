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
exports.CertificatesSeederService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const certificate_entity_1 = require("../../../models/certificates/entities/certificate.entity");
const typeorm_2 = require("typeorm");
let CertificatesSeederService = class CertificatesSeederService {
    constructor(certificateRepository) {
        this.certificateRepository = certificateRepository;
    }
    async addCertificateSeed() {
        try {
            const listCertificate = [
                {
                    name: 'AWS Solutions Architect - Associate',
                    description: 'This certification validates your knowledge of the AWS Cloud and your ability to design scalable, fault-tolerant systems.',
                    link: 'https://www.udemy.com/certificate/UC-8e1b0b1a-1b1a-4b1a-8b1a-1b1a4b1a8b1a/',
                    userId: 1,
                },
                {
                    name: 'Microsoft Certified: Azure Developer Associate',
                    description: 'This certification validates your skills in developing solutions using Microsoft Azure services, tools, and technologies.',
                    link: 'https://www.udemy.com/certificate/UC-b1a8b1a4-1b1a-8b1a-4b1a-1b1a8b1a4b1a/',
                    userId: 1,
                },
                {
                    name: 'Google Certified Professional Cloud Architect',
                    description: 'This certification validates your expertise in designing and managing solutions using Google Cloud Platform technologies.',
                    link: 'https://www.udemy.com/certificate/UC-1b1a8b1a-4b1a-1b1a-8b1a-b1a4b1a8b1a4/',
                    userId: 1,
                },
            ];
            for (let i = 0; i < listCertificate.length; i++) {
                const certificate = new certificate_entity_1.CertificateEntity();
                certificate.name = listCertificate[i].name;
                certificate.description = listCertificate[i].description;
                certificate.link = listCertificate[i].link;
                certificate.userId = listCertificate[i].userId;
                await this.certificateRepository.save(certificate);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
};
CertificatesSeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(certificate_entity_1.CertificateEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CertificatesSeederService);
exports.CertificatesSeederService = CertificatesSeederService;
//# sourceMappingURL=certificates.service.js.map