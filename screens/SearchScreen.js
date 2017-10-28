import { ScrollView, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Header, Item, Input, Icon, Button, Text, List, ListItem } from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      book:{},

     };
  }

  searchbutton = async () => {
  console.log('Search');
  fetch(`http://192.168.43.197/hashhacks/public/books/${this.state.text}`,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          //'Authorization': 'Bearer ' + token,
          //'Host': 'byld.tech'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          book: responseJson.data[0],
          
        }, function() {
          //console.log('home:  ' + this.state.home);
          //console.log('username:' + this.state.username);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input 
             placeholder="Search"
             onChangeText={(text) => this.setState({text})}
             value={this.state.text} />
          </Item>
        </Header>
        <Button 
           transparent
           style={{alignSelf:'center'}} 
           onPress={this.searchbutton} >
            <Text>Search</Text>
          </Button>
        
        <List>
            <ListItem itemDivider>
              <Text >Book Name: {this.state.book.book_name}</Text>
            </ListItem>                    
            <ListItem >
              <Text>Author: {this.state.book.book_author}</Text>
            </ListItem>
            <ListItem>
              <Text>Availability: {this.state.book.availability}</Text>
            </ListItem>
            <ListItem>
              <Text>Shelf: {this.state.book.availability}</Text>
            </ListItem>
          </List>

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
