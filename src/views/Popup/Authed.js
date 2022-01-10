import React, { Component } from 'react';
import {
  Container, Segment, Button, Checkbox, Header, Icon, Card, Placeholder
} from 'semantic-ui-react';

export default class Authed extends Component {
  onSettings = (e) => {
    e.preventDefault();
    chrome.runtime.openOptionsPage && chrome.runtime.openOptionsPage();
  }

  onLogout = (e) => {
    e.preventDefault();
    const {accountLogout} = this.props;
    accountLogout();
  }

  onCheck = (e, { checked }) => {
    e.preventDefault();
    const {setEnabled, setStats} = this.props;
    setEnabled(checked);
    !checked && setStats(false);
  }

  render () {
    const { name, keywords, enabled, stats } = this.props;
    const storyPoints = [0,1,2,3,5,8,13,21,34,'?'];
    return (
      <div>

        <Container textAlign='center'>
          <Button floated='left' circular icon='cog' onClick={this.onSettings} />
          <Button floated='right' circular icon='sign out' onClick={this.onLogout} />
        </Container>

        <Segment textAlign='center'>

          {!name && !keywords &&
          <Placeholder fluid>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder>
          }

          {name &&
          <>
          <Header as='h4'>
            <Icon name='user' />{name}
          </Header>
          <Header as='h4'>
            Vote your story point for AL-123
          </Header>
          </>
          }
          <Card.Group itemsPerRow={5}>
            {storyPoints.map(point => <Card className="card">{point}</Card>)}
          </Card.Group>
        </Segment>

      </div>
    );
  }
}
