import React from 'react';
import { Flex, Box, Button } from 'rebass';
import PropTypes from 'prop-types';
import { User } from 'radiks';

import Text from '../styled/typography';
import Input from '../styled/input';
import Customer from '../models/Customer';
// import Person from '../models/Person';



export default class Feed extends React.Component {
  static propTypes = {
    customers: PropTypes.array,
  }

  static defaultProps = {
    customers: [],
  }

  state = {
    creditorMVN:'',
    name: '',
    age:'',
    phone:'',
    address: '',
    bName: '',
    bType: '',
    sales:'',
    kinName:'',
    gurantor: '',
    gurantorAddress: '',
    gurantorBusiness: '',
    gurantorPhone: '',
    loanAmount:'',
    customerSignature:'',
    gurantorSignature:'',
    debtHistory:'',
    createdAgentIDs: {},
    customers: [],
    currentUser: null,
  }

  componentWillMount() {
    const rawCustomers = this.props.customers;
    const customers = rawCustomers.map(customerData => new Customer(customerData.attrs));
    this.setState({ customers });
  }

  componentDidMount() {
    this.setState({
      currentUser: User.currentUser(),
    });
    // Customer.addStreamListener(this.newCustomerListener.bind(this));
    // Person.addStreamListener(this.newPersonListener.bind(this));
  }


  componentWillReceiveProps(newProps) {
    const rawCustomers = newProps.customers;
    const customers = rawCustomers.map(customerData => new Customer(customerData.attrs));
    this.setState({ customers });
  }


  newCustomerListener(customer) {
    const { customers } = this.state;
    if (!this.state.createdAgentIDs[customer._id]) {
      customers.unshift(customer);
      this.setState({ customers });
    }
  }

  // newPersonListener(person) {
  //   const { persons } = this.state;
  //   if (!this.state.createdPersonIDs[person._id]) {
  //     persons.unshift(person);
  //     this.setState({ persons });
  //   }
  // }

  async submit() {//Next line is important
    const { newCustomer, creditorMVN, name, age, phone, address, bName, bType, sales, kinName, gurantor, gurantorAddress, gurantorBusiness, gurantorPhone, loanAmount, customerSignature,gurantorSignature, debtHistory  } = this.state;
    const customer = new Customer({
      content: newCustomer,
      creditorMVN: creditorMVN,
      creditorName: name,
      age: age,
      phone:phone,
      address:address,
      bName: bName,
      bType: bType,
      sales: sales,
      kinName:kinName,
      gurantor:gurantor,
      gurantorAddress:gurantorAddress,
      gurantorBusiness:gurantorBusiness,
      gurantorPhone:gurantorPhone,
      loanAmount:loanAmount,
      customerSignature:customerSignature,
      gurantorSignature:gurantorSignature,
      debtHistory:debtHistory,
      createdBy: this.state.currentUser._id,
    });
    const { customers, createdAgentIDs } = this.state;
    customers.unshift(customer);
    createdAgentIDs[customer._id] = true;
    this.setState({ customers, createdAgentIDs, newCustomer: '' });
    await customer.save();
  }

  customers() {
    return this.state.customers.map(customer => (
      <div key={customer._id}>
        <Text.p mt={4} mb={1}>
          {customer.attrs.createdBy}
          {' '}
          says:
        </Text.p>

      </div>
    ));
  }

  render() {
    return (
      <Flex>
        <Box width={[1, 1 / 2]} mx="auto" textAlign="center">
          <Text.p textAlign="center">
            Create Customer
          </Text.p>
          
          <Input
            mt={3}
            width={1}
            placeholder="BVN Number"
            value={this.state.creditorMVN}
            onChange={evt => this.setState({ creditorMVN: evt.target.value })}
          />

          <Input
            mt={3}
            width={1}
            placeholder="Name"
            value={this.state.name}
            onChange={evt => this.setState({ name: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Age"
            value={this.state.age}
            onChange={evt => this.setState({ age: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Phone"
            value={this.state.phone}
            onChange={evt => this.setState({ phone: evt.target.value })}
          />

          <Input
            mt={3}
            width={1}
            placeholder="Address"
            value={this.state.address}
            onChange={evt => this.setState({ address: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Business Name"
            value={this.state.bName}
            onChange={evt => this.setState({ bName: evt.target.value })}
          />

          <Input
            mt={3}
            width={1}
            placeholder="Business Type"
            value={this.state.bType}
            onChange={evt => this.setState({ bType: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Sales"
            value={this.state.sales}
            onChange={evt => this.setState({ sales: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Next of Kin"
            value={this.state.kinName}
            onChange={evt => this.setState({ kinName: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Gurantor"
            value={this.state.gurantor}
            onChange={evt => this.setState({ gurantor: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Gurantor Address"
            value={this.state.gurantorAddress}
            onChange={evt => this.setState({ gurantorAddress: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Gurantor Business"
            value={this.state.gurantorBusiness}
            onChange={evt => this.setState({ gurantorBusiness: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Gurantor Phone"
            value={this.state.gurantorPhone}
            onChange={evt => this.setState({ gurantorPhone: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Gurantor Signature"
            value={this.state.gurantorSignature}
            onChange={evt => this.setState({ gurantorSignature: evt.target.value })}
          />

          <Input
            mt={3}
            width={1}
            placeholder="Loan Amount"
            value={this.state.loanAmount}
            onChange={evt => this.setState({ loanAmount: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Customer Signature"
            value={this.state.customerSignature}
            onChange={evt => this.setState({ customerSignature: evt.target.value })}
          />
          <Input
            mt={3}
            width={1}
            placeholder="Debt History"
            value={this.state.debtHistory}
            onChange={evt => this.setState({ debtHistory: evt.target.value })}
          />
          {/* <Input
            mt={3}
            width={1}
            placeholder="What do you have to say?"
            value={this.state.newCustomer}
            onChange={evt => this.setState({ newCustomer: evt.target.value })}
          /> */}
          
          <Button onClick={() => this.submit()} mt={2}>
            Submit
          </Button>

         </Box>
      </Flex>
    );
  }
}
