import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab,  
  Left, 
  Right, 
  Body,
  Card,
  CardItem,
  Text,
  Badge,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    var books = [{"name":"Shoe Dog","author":"Phil Knight","returnDate":"28 August 2018","status":"Returned"},
                {"name":"Finite Automata","author":"Phil Knight","returnDate":"28 August 2018","status":"Returned"},
                {"name":"Shoe Dog","author":"Phil Knight","returnDate":"28 August 2018","status":"Due"}];
    return (
      <Container style={styles.container}>
        <Content>
          <Card style={{backgroundColor:"#0077B5"}}>
            <CardItem style={{ alignItems: 'center',justifyContent: 'center',backgroundColor:'#0077B5' }}>
              <Text style={{ fontSize:30,color:'#FFFFFF' }}> Hello, Alok !</Text>
            </CardItem>
            <CardItem style={{alignItems: 'center',justifyContent: 'center',paddingTop:0,backgroundColor:'#0077B5'}}>
                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomColor: 'white',
                    borderBottomWidth: 1.0,
                    width: 250}}/>
            </CardItem>
            <CardItem  style={styles.normalText}>
              <Body style={{ alignItems:"center",justifyContent:"center"}}>
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{ fontSize:35,color:'#FFFFFF' }}> 0 </Text>
                        <FontAwesomeIcons name="rupee" size={30} color="#FFFFFF" /> 
                      </View>
                      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{ fontSize:20,color:'#FFFFFF' }}>fine so far</Text>
                      </View>
                    </View>
              </Body>
            </CardItem>
          </Card>

          <View>
            <Text style={{padding:16}}> My Books </Text>
            {
              books.length > 0 ? (
                <List dataArray={books}
                renderRow={(books) =>
                  <ListItem>
                    <Image style={styles.thumbnailStyle} source={{ uri: 'http://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471146701/shoe-dog-9781471146701_hr.jpg' }} />
                    <Body>
                      <View style={styles.viewTextStyle}>
                        <Text>{books.name}</Text>
                        {
                          books.status == 'Returned' ? (
                            <Badge style={{ backgroundColor: '#388e3c' }}>
                              <Text style={{ color: 'white' }}>{books.status}</Text>
                            </Badge>
                            )
                            :
                            (
                            <Badge style={{ backgroundColor: '#ef5350' }}>
                              <Text style={{ color: 'white' }}>{books.status}</Text>
                            </Badge>
                            )
                        }
                      </View>
                      <View style={styles.viewTextStyle}>
                        <Text note>{books.author}</Text>
                        <Text note>{books.returnDate}</Text>
                      </View>
                    </Body>
                  </ListItem>
                }>
              </List>
                ):
              ( <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <Text note style={{fontSize: 20}}> No books issued ! </Text>
                </View>
                )
            }

          </View>
        </Content>
      </Container>    
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerText :{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#0077b5',
  },
  viewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  normalText :{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#0077b5',
  },
  smallText :{
    fontSize: 12,
    color: '#FFFFFF'
  },
  thumbnailStyle: {
    resizeMode: 'contain',
    borderColor: '#ddd',
    borderWidth: 1,
    height: 60,
    width: 60,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  floatingActionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'black',
  },
  notificationButtonIcon: {
    fontSize: 28,
    height: 30,
    color: 'black',
  },
  notificationActionButtonView: {
    height: 50,
    paddingTop: 20,
    alignItems:'flex-end',
    justifyContent: 'space-around',
    right: 20
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});