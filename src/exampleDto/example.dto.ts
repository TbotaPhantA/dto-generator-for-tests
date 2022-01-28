import { ExampleEnum } from './example.enum';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Example Dto class for decorator testing
 */
export class ExampleDto {
    requiredNumberField: number;
    optionalNumberField?: number;

    requiredStringField: string;
    optionalStringField?: string;

    requiredEnumField: ExampleEnum;
    optionalEnumField?: ExampleEnum;

    requiredDateField: Date;
    optionalDateField?: Date;

  // TODO: fields for required and optional *DtoFields or [*DtoFields]
}
