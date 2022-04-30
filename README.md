# TS FIXTURE BUILDER
***
### WHAT IS THIS?

This is convenient fixture generator for tests based on builder pattern.
***
#### Example:
<br />

- Let's say you have a User entity and you want it to be generated for tests:

```tsx
class User {
  name: string;
  email: string;
  lastName?: string;
  age?: number;
}
```
<br />

- Then you can declare builder of this user:
```tsx
class UserBuilder extends InjectionBuilder<User> {
  public static defaultOnlyRequired() {
    return new UserBuilder(new User())
      .with({ name: 'John' })
      .with({ email: 'john@gmail.com' })
  }

  public static defaultAll() {
    return new UserBuilder(new User())
      .with({ name: 'John' })
      .with({ email: 'john@gmail.com' })
      .with({ lastName: 'Smith' })
      .with({ age: 20 })
  }
}
```
<br />

- finally, you can use this builder in your tests:
```tsx
const teenagerFixture = UserBuilder.defaultOnlyRequired()
  .with({ age: 16 })
  .result

const adultFixture = UserBuilder.defaultOnlyRequired()
  .with({ age: 30 })
  .result
```
<br />

### LICENCE
***

This library is [MIT licensed](https://github.com/derbent-ninjas/fixture-builder-for-tests/blob/main/LICENSE)
