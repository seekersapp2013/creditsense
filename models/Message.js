import { Model } from 'radiks';

export default class Message extends Model {
    static className = 'Message';

    static schema = {
      creditorName: String,
      content: String,
      age: Number,
      phone: Number,
      address: String,
      bName: String,
      bType: String,
      sales: Number,
      kinName: String,
      guarantor: String,
      guarantorAddress: String,
      guarantorBusiness: String,
      guarantorPhone: Number,
      loanAmount: Number,
      customerSignature: String,
      guarantorSignature: String,
      
      debtHistory: Boolean,
      hasDebt: {
        type: Boolean,
        decrypted: false // all users will know if this record likes dogs!
      },
      meetingDay: String,
      mainSavings: Number,
      disbursementDate: String,
      schemeName: String,//MSP
      loanType: String,//Soft
      serviceCharge: Number,//Amount of Service Charge
      serviceCharge2: Number,//Loan + Service Charge
      totalInstallments: Number,//Total Number of Installments
      amountPayable: Number,//Amount Per Weekly Installment
      date: String,//Weekly Loan Dates
      manDeposit: Number,//Mandatory Deposit
      volDeposit: Number,//Voluntary Deposit
      interestSavings: Number,//Interest on interestSavings
      withdrawal: Number,//withdrawal/return
      balance: Number,//withdrawal Balance
      installmentNumber: Number,//
      repayment: Number,//Repayment
      balance2: Number,//Repayment balance
      agentSignature: Number,// Agent signature


    }


}
