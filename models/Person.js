import { Model } from 'radiks';

export default class Person extends Model {
    static className = 'Person';

    static schema = {
      name: String,
      age: Number,
      isHuman: Boolean,
      likesDogs: {
        type: Boolean,
        decrypted: false // all users will know if this record likes dogs!
      }
    }
  
  
}
