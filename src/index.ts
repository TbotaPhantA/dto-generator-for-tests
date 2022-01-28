import { ExampleDto } from './exampleDto/example.dto';
import { DtoGenerator } from './DtoGenerator/dtoGenerator.decorator';

// eslint-disable-next-line new-cap
const ExampleDtoGenerator = DtoGenerator(ExampleDto);

const main = () => {
  console.log(Object.keys(ExampleDtoGenerator.default()));
};

main();
