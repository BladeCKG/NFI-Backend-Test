import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsOptional, IsNumber } from 'class-validator'

export class WithdrawUserDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    amount: number;
}
