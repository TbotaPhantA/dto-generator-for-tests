class InjectionGenerator<T extends {} = {}> {
  public readonly result: T;

  constructor(
    private _target: T,
  ) {
    this.result = _target
  }

  with<F extends keyof T>(obj: Pick<T, F>): InjectionGenerator<T> {
    return Object.assign(this, obj)
  }
}


export default InjectionGenerator;
