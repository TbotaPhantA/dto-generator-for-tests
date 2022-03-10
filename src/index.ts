import { ExampleDto } from './exampleDto/example.dto';
import { DtoGenerator } from './DtoGenerator/dtoGenerator.decorator';

const ExampleDtoGenerator = DtoGenerator(ExampleDto);

const main = () => {
  console.log(new ExampleDtoGenerator());
};

main();
