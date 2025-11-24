import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function GradientButton({ children, onPress, disabled }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} disabled={disabled}>
    <LinearGradient
    colors={disabled ? ['#a78bfa', '#a78bfa'] : ['#7C3AED', '#00D4FF']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={[styles.btn, disabled && styles.disabled]}
    >
    <Text style={styles.text}>{children}</Text>
    </LinearGradient>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  btn: {
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7C3AED',
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 4
  },
  text: { color: '#fff', fontWeight: '700', fontSize: 16 },
  disabled: { opacity: 0.65 }
});