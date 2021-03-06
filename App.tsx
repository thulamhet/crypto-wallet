import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import icons from './app/themes/icons'
import colors from './app/themes/colors'
import VolumeScreen from './src/screens/VolumeScreen';
import PopularScreen from './src/screens/PopularScreen';
import UsdScreen from './src/screens/UsdScreen'


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function App() {
    const [searchText, setSearchText] = useState('a');
    
    return (  
        <NavigationContainer>
            {/* Title and Menu */}
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                    <Image
                        source={icons.menu}
                        resizeMode="cover"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
           
                <Text style={styles.title}>ThuCoin</Text>
            </View>
            
            {/* Search */}
            <View style={styles.searchCoin}>
                <TouchableOpacity onPress={() => console.log(searchText)}>
                    <Image
                        source={icons.search}
                        resizeMode="cover"
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>

                <TextInput
                    style={{}}
                    placeholder='Search'
                    onChangeText={setSearchText}
                />
            </View>

            <Tab.Navigator 
                // screenOptions={{headerShown: false}}
            >
                <Tab.Screen name="USD" component={UsdScreen} initialParams={{searchText}}/>
                <Tab.Screen name="Volume" component={VolumeScreen}/>
                <Tab.Screen name="Popular" component={PopularScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
  }

export default App;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Roboto-Black',
        fontSize: 20, 
        alignSelf: 'center',
        color: colors.black,
        marginLeft: 120
    },
    searchCoin: {
        flexDirection: 'row', 
        alignItems: 'center', 
        borderRadius: 20, 
        borderWidth:1, 
        borderColor:colors.gray, 
        margin: 10
    },
   
})

