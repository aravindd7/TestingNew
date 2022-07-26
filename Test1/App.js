import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  FlatList,
  Button,
  TextInput,
} from 'react-native';
import axios from 'axios';
import {resolvePlugin} from '@babel/core';
import moment from 'moment';

const windowHeight = Dimensions.get('window').height;
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [itemsToRender, setItemsToRender] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    try {
      axios({
        method: 'get',
        url: 'https://gnews.io/api/v4/top-headlines?token=1d9d8710b55223346224c11253ec4a60&lang=en',
      }).then(function (response) {
        console.log('response: ', response);
        setItemsToRender(response, _response.articles);
      });
    } catch (er) {
      console.log('er: ', er);
    }
  }, []);

  function LoginScreen() {
    return (
      <View style={styles.root}>
        <Text>Enter your Email</Text>
        <TextInput style={{borderWidth: '2px'}} />
        <Text>Enter your password</Text>
        <Button
          onPress={() => {
            setIsLoggedIn(true);
          }}
          title="Login">
          Login
        </Button>
      </View>
    );
  }

  const renderItem = item => {
    return (
      <View>
        <Image source={item.image} />
        <Text>{item.name}</Text>
        <Text>{item.title}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>{moment(item.publishedAt).fromNow()}</Text>
          <Text>Three Dots</Text>
        </View>
      </View>
    );
  };

  function DetailsScreen() {
    return (
      <SafeAreaView style={styles.root}>
        <FlatList
          data={itemsToRender}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal={false}
          numColumns={2}
        />
      </SafeAreaView>
    );
  }

  return <View>{isLoggedIn ? <DetailsScreen /> : <LoginScreen />}</View>;
};

const styles = StyleSheet.create({
  root: {
    height: windowHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
