/**
 * Creates class-generator for dto
 * @constructor
 * @param { class } constructor <h3>DTO class</h3>
 * @return { class }
 */
const DtoGenerator =
  <T extends { new(...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      public constructor(...any: any[]) {
        super();
        const propertyNames = Object.keys(this)

      }
    };
  };

export { DtoGenerator };
