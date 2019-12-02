import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Form, Grid, Header, Icon, Segment, Message, Checkbox } from 'semantic-ui-react';
const Register = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Icon name='sign-in' /> Create An Account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input
            fluid
            icon='at'
            type='email'
            iconPosition='left'
            placeholder='E-mail address'
          />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' />
          <Form.Input
            fluid
            icon='lock'
            name='password'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Form.Input
            fluid
            name='password2'
            icon='lock'
            iconPosition='left'
            placeholder='Confirm Password'
            type='password'
          />
          <Segment>
            <Checkbox name='isAdmin' label='Register as an Admin' />
          </Segment>
          <Button color='teal' fluid size='large'>
            Sign Up
          </Button>
        </Segment>

        <Link to='/'>
          <Message>
            <Icon name='arrow circle left' />
            Back
          </Message>
        </Link>
      </Form>
    </Grid.Column>
  </Grid>
);

export default Register;
