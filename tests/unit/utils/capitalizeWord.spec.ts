import { capitalizeWord } from '../../../src/utils/capitalizeWord';

describe('capitalizeWord', function() {
  const testCases = [
    {
      toString: 'The word "name" - should return "Name"',
      name: 'name',
      expected: 'Name',
    }
  ]

  test.each(testCases)('%s', ({ name, expected }) => {
    const resultWord = capitalizeWord(name)

    expect(resultWord).toStrictEqual(expected)
  })
});
