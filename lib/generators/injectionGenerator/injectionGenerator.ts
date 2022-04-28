class InjectionGenerator<T extends Record<string, any>> {
  public readonly result: T;

  constructor(
    private _target: T,
  ) {
    this.result = _target
  }
}

export default InjectionGenerator;
