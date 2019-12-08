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
    // newCustomer: '',
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



  customers() {
    return this.state.customers.map(customer => (
      <div key={customer._id}>
        <Text.p mt={4} mb={1}>
          {customer.attrs.createdBy}
          {' '}
          says:
        </Text.p>
        <Text.em>{customer.attrs.creditorMVN}</Text.em>
        <Text.em>{customer.attrs.creditorName}</Text.em>
        <Text.em>{customer.attrs.age}</Text.em>
        <Text.em>{customer.attrs.phone}</Text.em>
        <Text.em>{customer.attrs.address}</Text.em>
        <Text.em>{customer.attrs.bName}</Text.em>
        <Text.em>{customer.attrs.bType}</Text.em>
        <Text.em>{customer.attrs.sales}</Text.em>
        <Text.em>{customer.attrs.kinName}</Text.em>
        <Text.em>{customer.attrs.gurantor}</Text.em>
        <Text.em>{customer.attrs.gurantorAddress}</Text.em>
        <Text.em>{customer.attrs.gurantorBusiness}</Text.em>
        <Text.em>{customer.attrs.gurantorPhone}</Text.em>
        <Text.em>{customer.attrs.loanAmount}</Text.em>
        <Text.em>{customer.attrs.customerSignature}</Text.em>
        <Text.em>{customer.attrs.gurantorSignature}</Text.em>
        <Text.em>{customer.attrs.debtHistory}</Text.em>
        <Text.em>{customer.attrs.content}</Text.em>
      </div>
    ));
  }

  render() {
    return (
      <Flex>
        <Box width={[1, 1 / 2]} mx="auto" textAlign="center">
          <Text.p textAlign="center">
            My Customers
          </Text.p>


          {this.customers()}

          <Text.p textAlign="center">
            Only showing the most recent
            {' '}
            {this.state.customers.length}
            {' '}
            customers.
          </Text.p>
        </Box>
      </Flex>
    );
  }
}
