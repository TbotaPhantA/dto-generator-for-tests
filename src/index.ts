import { ExampleDto } from './exampleDto/example.dto';
import { ExampleEnum } from './exampleDto/example.enum';

class ExampleDtoGenerator extends ExampleDto {
    withRequiredNumberField(requiredNumberField: number) {
       this.requiredNumberField = requiredNumberField
       return this
    }

    withRequiredStringField(requiredStringField: string) {
        this.requiredStringField = requiredStringField
       return this
    }

    withRequiredEnumField(requiredEnumField: ExampleEnum) {
        this.requiredEnumField = requiredEnumField;
       return this
    }

    withRequiredDateField(requiredDateField: Date) {
        this.requiredDateField = requiredDateField
       return this
    }

    default(): ExampleDtoGenerator {
        return this
            .withRequiredNumberField(1)
            .withRequiredStringField("string")
            .withRequiredEnumField(ExampleEnum.exampleEnumOption1)
            .withRequiredDateField(new Date())
    }
}

const main = () => {
    // const generator = new ExampleDtoGenerator();
}

main();