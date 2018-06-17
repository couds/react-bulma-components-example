import React from 'react';

// import Container from 'react-bulma-components/lib/components/container';
// import Columns from 'react-bulma-components/lib/components/columns';
// import Box from 'react-bulma-components/lib/components/box';
// import Dropdown from 'react-bulma-components/lib/components/dropdown'

import { Container, Columns, Box, Dropdown } from 'react-bulma-components/full';
import Icon from './components/icon';

import Navbar from './components/navbar';
import './app.scss';

export default () => (
    <React.Fragment>
      <Navbar />
      <Container>
        <Columns>
          <Columns.Column size={3}>
            <Box>
            <Dropdown hoverable>
              <Dropdown.Item value="item">
                Dropdown item
              </Dropdown.Item>
              <Dropdown.Item value="other">
                Other Dropdown item
              </Dropdown.Item>
              <Dropdown.Item value="active">
                Active Dropdown item
              </Dropdown.Item>
              <Dropdown.Item value="other 2">
                Other Dropdown item
              </Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item value="divider">
                With divider
              </Dropdown.Item>
            </Dropdown>
            </Box>
          </Columns.Column>
          <Columns.Column>
            <Box>
              <Icon icon={["fab", "font-awesome"]} />
              <Icon icon={["fas", "coffee"]} />
              <Icon icon={["fas", "cog"]} spin fixedWidth={false} />
              <Icon icon={["fab", "fort-awesome"]} size="large" />
              <Icon icon={["fas", "spinner"]} pulse fixedWidth />
              <Icon icon={["fab", "fort-awesome"]} rotation={90} />
              <Icon icon={["fab", "internet-explorer"]} flip="both" />
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
