import { ScrollView, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
    header: null,
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
