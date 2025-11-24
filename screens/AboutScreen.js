import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GradientHeader from '../components/GradientHeader';
import Card from '../components/Card';


export default function AboutScreen({ navigation }) {
  return (
    <View style={{flex:1, backgroundColor: '#F4F4F8'}}>
      <GradientHeader title="About" />
      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{marginBottom:8}}>
      <Text style={{color:'#374151'}}>← Back</Text>
      </TouchableOpacity>


      <Card>
        <Text style={styles.name}>About the App - Group 11</Text>
        <Text style={styles.desc}>
        This app converts currency values using live exchange rates fetched from a free online API. Enter base and destination  currency ISO codes and an amount — the app validates input, handles errors, and shows the converted result and rate used.
        </Text>
      </Card>

      <Card>
        <Text style={styles.name}>Kamel Baalbaki</Text>
        <Text style={styles.id}>Student ID: 101496645</Text>
      </Card>

      <Card>
        <Text style={styles.name}>Libareo Barbour</Text>
        <Text style={styles.id}>Student ID: 101499536</Text>
      </Card>


      <Text style={styles.footer}>Built for COMP 3074 Assignment 2</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { padding: 20 },
  name: { fontSize: 20, fontWeight: '800', color: '#0f172a' },
  id: { marginTop: 6, color: '#6b7280', fontWeight: '600' },
  desc: { marginTop: 12, color: '#374151', lineHeight: 20 },
  footer: { marginTop: 20, color: '#6b7280', fontSize: 13 }
});