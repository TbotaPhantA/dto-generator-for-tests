import {ExampleEnum} from "./example.enum";

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

    constructor(
        requiredNumberField: number,
        requiredStringField: string,
        requiredEnumField: ExampleEnum,
        requiredDateField: Date,
    ) {
        this.requiredNumberField = requiredNumberField;
        this.requiredStringField = requiredStringField;
        this.requiredEnumField = requiredEnumField;
        this.requiredDateField = requiredDateField;
    }
}