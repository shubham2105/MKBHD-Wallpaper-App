import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation';

export default function WallpaperApp() {
  return (
    // <View>
    //   <Text>WallpaperApp</Text>
    // </View>

    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
