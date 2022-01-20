import { ExampleEnum } from './example.enum';

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

  /**
   *
   * @param { number } requiredNumberField
   * @param { string } requiredStringField
   * @param { ExampleEnum } requiredEnumField
   * @param { Date } requiredDateField
   * @param { number } optionalNumberField
   * @param { string } optionalStringField
   * @param { ExampleEnum } optionalEnumField
   * @param { Date } optionalDateField
   */
  constructor(
      requiredNumberField: number,
      requiredStringField: string,
      requiredEnumField: ExampleEnum,
      requiredDateField: Date,
      optionalNumberField?: number,
      optionalStringField?: string,
      optionalEnumField?: ExampleEnum,
      optionalDateField?: Date,
  ) {
    this.requiredNumberField = requiredNumberField;
    this.requiredStringField = requiredStringField;
    this.requiredEnumField = requiredEnumField;
    this.requiredDateField = requiredDateField;
    this.optionalNumberField = optionalNumberField;
    this.optionalStringField = optionalStringField;
    this.optionalEnumField = optionalEnumField;
    this.optionalDateField = optionalDateField;
  }
}
