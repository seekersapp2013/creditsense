import { Model } from 'radiks';

export default class Cusomter extends Model {
    static className = 'Customer';

    static schema = {
      creditorMVN: Number,
      creditorName: String,
      content: String,
      age: Number,
      phone: Number,
      address: String,
      bName: String,
      bType: String,
      sales: Number,
      kinName: String,
      gurantor: String,
      gurantorAddress: String,
      gurantorBusiness: String,
      gurantorPhone: Number,
      loanAmount: Number,
      customerSignature: String,
      gurantorSignature: String,
      decrypted: false, 
      debtHistory: Boolean,
      hasDebt: {
        type: Boolean,
        decrypted: false // all users will know if this record likes dogs!
      }
    }


}
