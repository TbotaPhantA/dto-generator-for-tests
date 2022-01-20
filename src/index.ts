import { ExampleDto } from './exampleDto/example.dto';
import { DtoGenerator } from './DtoGenerator/dtoGenerator.decorator';

// eslint-disable-next-line new-cap
const ExampleDtoGenerator = DtoGenerator(ExampleDto);

// // eslint-disable-next-line require-jsdoc
// class ExampleDtoGenerator extends ExampleDto {
//   // eslint-disable-next-line require-jsdoc
//   withRequiredStringField(requiredStringField: string): ExampleDtoGenerator {
//     this.requiredStringField = requiredStringField;
//     return this;
//   }
//
//   // eslint-disable-next-line require-jsdoc
//   static deafult(): ExampleDtoGenerator {
//     // @ts-ignore
//     return new ExampleDtoGenerator().withRequiredStringField('something');
//   }
// }

const main = () => {
  console.log(Object.keys(ExampleDtoGenerator.default()));
};

main();
