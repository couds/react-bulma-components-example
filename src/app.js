import React from 'react';

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Box from 'react-bulma-components/lib/components/box';

import Navbar from './components/navbar';
import './app.scss';

export default () => (
    <React.Fragment>
      <Navbar />
      <Container>
        <Columns>
          <Columns.Column size={3}>
            <Box>
              Left Column
            </Box>
          </Columns.Column>
          <Columns.Column>
            <Box>
              Center Column
            </Box>
          </Columns.Column>
          <Columns.Column size={3}>
            <Box>
              Right Column
            </Box>
          </Columns.Column>
        </Columns>
      </Container>
    </React.Fragment>
);
