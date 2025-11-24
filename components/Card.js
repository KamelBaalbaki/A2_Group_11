import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Card({ children, style }) {
return (
    <View style={[styles.card, style]}>{children}</View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#9b5a5aff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  }
});