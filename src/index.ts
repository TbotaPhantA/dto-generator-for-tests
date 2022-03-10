import { ExampleDto } from './exampleDto/example.dto';
import { DtoGenerator } from './DtoGenerator/dtoGenerator.decorator';
import * as util from 'util';

const ExampleDtoGenerator = DtoGenerator(ExampleDto);

const main = () => {
  console.log(util.inspect(new ExampleDtoGenerator()));
};

main();
