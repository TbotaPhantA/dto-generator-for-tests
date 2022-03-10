/**
 * Creates class-generator for dto
 * @constructor
 * @param { class } constructor <h3>DTO class</h3>
 * @return { class }
 */
import { capitalizeWord } from '../utils/capitalizeWord';

const DtoGenerator =
  <T extends { new(...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      public constructor(...any: any[]) {
        super();
        const propertyNames = Object.keys(this)
        propertyNames.forEach(name => {
          this[`with${capitalizeWord(name)}`] = function(property) {
            this[name] = property
            return this
          }
        })
      }
    };
  };

export { DtoGenerator };
