import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/ prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";


@Injectable()
export class UsersRepository {
    constructor(private readonly prismaService: PrismaService) { }

    async findAll() {
        return await this.prismaService.user.findMany();
    }

    async findOne(id: number) {
        return await this.prismaService.user.findUnique({
            where: {
                id: id
            }
        });
    }

    async create(createUserDto: CreateUserDto) {
        return await this.prismaService.user.create({
            data: createUserDto
        });
    }
    
    async update(id: number, updateUserDto: CreateUserDto) {
        return await this.prismaService.user.update({
            where: {
                id: id
            },
            data: updateUserDto
        });
    }

    async remove(id: number) {
        return await this.prismaService.user.delete({
            where: {
                id: id
            }
        });
    }

}