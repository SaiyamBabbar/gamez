import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from '../gamez/screens/WelcomeScreen'; // Assuming welcomescreen.js is in the same directory

export default function App() {
  return (
    <WelcomeScreen />  // Render the WelcomeScreen component
  );
}