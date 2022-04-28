class InjectionGenerator<T extends Record<string, any>> {
  constructor(
    private _target: T,
  ) {}

  public getResult(): T {
    return this._target
  }
}

export default InjectionGenerator;
