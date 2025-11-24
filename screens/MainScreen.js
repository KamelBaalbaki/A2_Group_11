import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import GradientHeader from '../components/GradientHeader';
import CustomInput from '../components/CustomInput';
import GradientButton from '../components/GradientButton';
import Card from '../components/Card';
import CustomDropdown from '../components/CustomDropdown';
import { CURRENCY_LIST } from '../data/currencies';
import { buildUrl, API_KEY } from '../config/api';

export default function MainScreen({ navigation }) {
  const [base, setBase] = useState('CAD');
  const [dest, setDest] = useState('USD');
  const [amount, setAmount] = useState('1');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [rateUsed, setRateUsed] = useState(null);

  // Validate input fields
  const validate = () => {
    const num = Number(amount);
    if (isNaN(num) || num <= 0) {
      Alert.alert('Validation', 'Amount must be a positive number.');
      return false;
    }
    return true;
  };


  // Handle currency conversion
  const handleConvert = async () => {
  if (!validate()) return;

  setLoading(true);
  setResult(null);
  setRateUsed(null);

  if (!API_KEY) {
      Alert.alert('Error', 'Missing API key in config/api.js');
      setLoading(false);
      return;
    }

  try {
    const url = buildUrl(base, dest);
    const resp = await fetch(url);

    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`Network error: ${resp.status} ${resp.statusText} ${text}`);
    }

    const json = await resp.json();
    if (!json?.data) throw new Error(json?.error?.message || json?.message || 'Invalid API response');

    const rate = json.data[dest];
    if (rate === undefined) throw new Error(`Exchange rate for ${dest} not found.`);

    setRateUsed(rate);
    setResult((Number(amount) * rate).toFixed(4));

    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={styles.screen}>
      <GradientHeader title="Currency Converter" />

      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        {/* Currency selectors */}
        <View style={styles.row}>
          <Card style={styles.card}>
            <Text style={styles.label}>From</Text>
            <CustomDropdown
              label="Base Currency"
              options={CURRENCY_LIST}
              value={base}
              onSelect={setBase}
            />
          </Card>

          <View style={{ width: 12 }} />

          <Card style={styles.card}>
            <Text style={styles.label}>To</Text>
            <CustomDropdown
              label="Destination Currency"
              options={CURRENCY_LIST}
              value={dest}
              onSelect={setDest}
            />
          </Card>
        </View>

        {/* Amount input */}
        <CustomInput
          label="Amount"
          value={amount}
          onChangeText={setAmount}
          placeholder="1"
          keyboardType="numeric"
          autoCapitalize="none"
        />

        {/* Convert button */}
        <GradientButton onPress={handleConvert} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : 'Convert Currency'}
        </GradientButton>

        {/* Conversion result */}
        {result && (
          <Card style={styles.resultCard}>
            <View style={styles.resultRow}>
              <Ionicons name="speedometer" size={22} color="#7C3AED" />
              <Text style={styles.resultTitle}> Converted</Text>
            </View>
            <Text style={styles.resultAmount}>{result} {dest}</Text>
            <Text style={styles.rateText}>1 {base} = {rateUsed} {dest}</Text>
          </Card>
        )}

        {/* About link */}
        <TouchableOpacity style={styles.aboutLink} onPress={() => navigation.navigate('About')}>
          <Text style={styles.aboutText}>About this app →</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F4F8' },
  container: { padding: 20, paddingTop: 20 },
  row: { flexDirection: 'row', marginBottom: 12 },
  card: { flex: 1, paddingVertical: 10 },
  label: { color: '#6b7280', marginBottom: 6, fontSize: 12 },
  resultCard: { marginTop: 18 },
  resultRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  resultTitle: { fontSize: 16, fontWeight: '700', color: '#111827' },
  resultAmount: { fontSize: 22, fontWeight: '800', marginTop: 6, color: '#0f172a' },
  rateText: { marginTop: 8, color: '#6b7280' },
  aboutLink: { marginTop: 18, alignItems: 'center' },
  aboutText: { color: '#4C1D95', fontWeight: '700' },
});
