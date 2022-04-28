import InjectionGenerator from '../generators/injectionGenerator';

class Dto {
  field1: number = 1;
  field2: string = '';
}

class DtoGenerator extends InjectionGenerator<Dto> {
  public static default() {
    return new InjectionGenerator(new Dto())
  }
}
