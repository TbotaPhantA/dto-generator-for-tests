class InjectionBuilder<T extends {} = {}> {
  public readonly result: T;

  constructor(
    private _target: T,
  ) {
    this.result = _target
  }

  with<F extends keyof T>(field: Pick<T, F>): InjectionBuilder<T> {
    Object.assign<T, Pick<T, F>>(this._target, field)
    return this
  }
}


export default InjectionBuilder;
