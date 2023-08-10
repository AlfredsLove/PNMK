import * as React from 'react';
import {Text, View, Button, Image, StyleSheet, FlatList} from 'react-native'

import party from '../data/Data.js'

const MainScreen = ({navigation}) => {
    return(
      <View style={styles.container}>

        <FlatList
          data={party}
          renderItem = {({item}) => (
            <View style={styles.partyContainer}>
            <Image 
              source={{uri: item.logo}}
              style={styles.images}
            />

          </View>
          )}
          numColumns={2}

          /* <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          /> */
        />

      </View>
        
          
        
    )
}

const styles = StyleSheet.create({
  images: {
    width: 150,
    height: 150,
    borderRadius: 150 / 1.5,
    borderWidth: 2,
    borderColor: '#000',
    margin: 10,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  partyContainer: {
    width: '50%',
    padding: 1,
    alignItems: 'center',
    
  }
}) 

export default MainScreen;