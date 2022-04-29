class Dto {
  field1: number = 1;
  field2: string = '';
}

class DtoGenerator {

  // ----- AUTOMATICALLY -----

  public readonly result: Dto;

  constructor(
    private readonly _target: Dto,
  ) {
    this.result = _target
  }

  withField1(field1: number) {
    this._target.field1 = field1
    return this
  }

  withField2(field2: string) {
    this._target.field2 = field2
    return this
  }

  // ----- MANUALLY -----

  public static default(): DtoGenerator {
    return new DtoGenerator(new Dto())
  }
}

const something = DtoGenerator.default()
  .withField1(1)
  .withField2('something')
  .result


