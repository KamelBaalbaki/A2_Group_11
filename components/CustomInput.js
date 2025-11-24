import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


export default function CustomInput({ label, value, onChangeText, placeholder, keyboardType='default', autoCapitalize='characters' }) {
  return (
    <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    style={styles.input}
    keyboardType={keyboardType}
    autoCapitalize={autoCapitalize}
    />
    </View>
  );
}


const styles = StyleSheet.create({
  row: { marginBottom: 16 },
  label: { color: '#374151', marginBottom: 6, fontSize: 13 },
  input: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 0.5,
    borderColor: 'rgba(16,24,40,0.04)',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2
  }
});