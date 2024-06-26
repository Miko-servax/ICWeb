import { IsNotEmpty, MinLength, MaxLength, IsString, IsIn, IsOptional, Max, Min, ValidateNested, IsNumber, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseEntity } from 'typeorm';

export class CreateGroupDto {
  @ApiProperty({ example: 10, description: '应用ID', required: false })
  @IsOptional()
  appId: number;

  @ApiProperty({ example: "", description: '对话模型配置项序列化的字符串', required: false })
  modelConfig?: any;
}
