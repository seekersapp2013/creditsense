/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React from 'react';
import {
  Flex, Box, Button,
} from 'rebass';
import PropTypes from 'prop-types';
import { User, getConfig } from 'radiks';

import Text from '../styled/typography';
import Customer from '../models/Customer';
// import Person from '../models/Person';


import Feed from '../components/feed';
import Customers from '../components/Customers';

class Home extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  state = {
    currentUser: null,
    customers: [],
  }

  static async getInitialProps() {
    return {
    };
  }



  async componentDidMount() {
    const { userSession } = getConfig();
    if (userSession.isUserSignedIn()) {
      const currentUser = userSession.loadUserData();
      this.setState({ currentUser });

      const customers = await Customer.fetchOwnList({
        sort: '-createdAt',
        limit: 10,
      }, { decrypt: false });
      console.log({customers});
      this.setState({customers});
    } else if (userSession.isSignInPending()) {
      const currentUser = await userSession.handlePendingSignIn();
      await User.createWithCurrentUser();
      this.setState({ currentUser });
    }
  }

  login = () => {
    const { userSession } = getConfig();
    userSession.redirectToSignIn();
  }

  logout = () => {
    const { userSession } = getConfig();
    userSession.signUserOut();
    this.setState({
      currentUser: null,
    });
  }

  render() {
    const { currentUser, customers } = this.state;
    console.log({customers})
    return (
      <>
        <Flex>
          <Box width={[1, 3 / 4]} mx="auto">
            <Text.h1 textAlign="center">Credit Sense</Text.h1>
            {currentUser ? (
              <>
                <Text.small textAlign="center" display="block">Logged in as
{' '}
                  {currentUser.username}
                  {'. '}
                  <a href="javascript:void(0)" onClick={this.logout}>Log Out</a>
                </Text.small>
                <Feed customers={customers} />
                <Customers customers={customers} />
              </>
            ) : (
              <>
                <Text.p textAlign="center">Log in with Blockstack to get started.
</Text.p>

                <Button mt={3} onClick={this.login} mx="auto" style={{ display: 'block' }}>Log In
</Button>
              </>
            )}
          </Box>
        </Flex>
      </>
    );
  }
}

export default Home;
