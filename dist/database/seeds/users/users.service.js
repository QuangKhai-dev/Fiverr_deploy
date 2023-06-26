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
exports.UsersSeederService = void 0;
const user_entity_1 = require("../../../models/user/entities/user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const faker = require("faker");
const bcrypt = require("bcrypt");
const salt_rounds_1 = require("../../../util/salt.rounds");
const typeorm_2 = require("@nestjs/typeorm");
let UsersSeederService = class UsersSeederService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async addUserSeed() {
        try {
            for (let i = 0; i < 100; i++) {
                const user = new user_entity_1.UserEntity();
                const firstName = faker.name.firstName();
                const lastName = faker.name.lastName();
                user.name = `${firstName} ${lastName}`;
                user.userName = faker.internet.userName();
                user.email = faker.internet.email();
                user.gender = faker.random.boolean();
                user.phone = faker.phone.phoneNumber();
                user.password = bcrypt.hashSync('123456', salt_rounds_1.SALT_OR_ROUND);
                user.dateOfBirth = faker.date.past().toString();
                user.avatar = faker.image.avatar();
                user.isPublished = true;
                await this.userRepository.save(user);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
};
UsersSeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersSeederService);
exports.UsersSeederService = UsersSeederService;
//# sourceMappingURL=users.service.js.map