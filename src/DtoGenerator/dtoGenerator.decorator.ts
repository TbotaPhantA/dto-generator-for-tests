/**
 * Creates class-generator for dto
 * @constructor
 * @param { class } constructor <h3>DTO class</h3>
 * @return { class }
 */
const DtoGenerator =
  <T extends { new(...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      // TODO: generator
      public withFirstProperty: (firstKey) => this;

      static default() {
        return new this().makeWithMethods();
      }

      public makeWithMethods() {
        const firstKey = Object.keys(this)[0]

        this.withFirstProperty = function (firstKey) {
          this[firstKey] = firstKey;
          return this
        }

        return this
      }
    };
  };

export { DtoGenerator };
