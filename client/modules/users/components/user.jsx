import React, { PropTypes } from 'react';

import { Row, Col, Button, Panel, Input, Alert, PageHeader } from 'react-bootstrap';

const User = ({ error, user: { _id, name, phone, email }, handleUpdateUser }) => (
    <div>
      <PageHeader>{ name }</PageHeader>

      <Row>
        <Col md={ 6 } mdOffset={ 3 } >
          <Panel>
            <PageHeader> User Info </PageHeader>
            { error ? <Alert bsStyle='danger'>{error}</Alert> : null }

            <form name='edit-user' onSubmit={handleUpdateUser.bind(null, _id)}>
              <Input type="text" name="name"
                placeholder="User X..."
                label="Name"
                defaultValue={name}/>
              <Input type="text" name="phone"
                placeholder="(076) 123 4567"
                label="Phone"
                defaultValue={phone} />
              <Input type="text" name="email"
                placeholder="email@address.com"
                label="Email"
                value={email} readOnly/>
              <Button type="submit" bsStyle="default"> Save </Button>
            </form>
          </Panel>
        </Col>
      </Row>
  </div>
);

export default User;
