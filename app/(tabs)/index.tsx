import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const FinancingSimulator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [installments, setInstallments] = useState('');
  const [fees, setFees] = useState('');
  const [results, setResults] = useState<{
    totalAmount: number;
    monthlyPayment: number;
  } | null>(null);

  const calculateFinancing = () => {
    const amount = parseFloat(loanAmount) || 0;
    const rate = parseFloat(interestRate) / 100 || 0;
    const numInstallments = parseInt(installments) || 1;
    const additionalFees = parseFloat(fees) || 0;

    // Cálculo da parcela (PMT)
    const monthlyRate = rate;
    const pmt = amount * (monthlyRate * Math.pow(1 + monthlyRate, numInstallments)) / 
                (Math.pow(1 + monthlyRate, numInstallments) - 1);

    // Valor total a ser pago
    const total = (pmt * numInstallments) + additionalFees;

    setResults({
      totalAmount: total,
      monthlyPayment: pmt
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Simulador de Financiamento</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Valor do financiamento:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={loanAmount}
              onChangeText={setLoanAmount}
              placeholder="Digite o valor"
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
            <Text style={styles.currency}>R$</Text>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Taxa de juros ao mês:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={interestRate}
              onChangeText={setInterestRate}
              placeholder="Digite a taxa de juros"
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
            <Text style={styles.currency}>%</Text>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Número de parcelas:</Text>
          <TextInput
            style={styles.input}
            value={installments}
            onChangeText={setInstallments}
            placeholder="Digite o número de parcelas"
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Demais taxas e custos:</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={fees}
              onChangeText={setFees}
              placeholder="Digite o total de taxas"
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
            <Text style={styles.currency}>R$</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={calculateFinancing}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {results && (
          <View style={styles.resultsContainer}>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Valor total a ser pago:</Text>
              <Text style={styles.resultValue}>R$ {results.totalAmount.toFixed(2)}</Text>
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Valor da parcela:</Text>
              <Text style={styles.resultValue}>R$ {results.monthlyPayment.toFixed(2)}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    padding: 24,
    paddingBottom: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 32,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 8,
    fontWeight: '500',
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: '#333',
    paddingRight: 40,
  },
  currency: {
    position: 'absolute',
    right: 16,
    color: '#7f8c8d',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resultsContainer: {
    marginTop: 32,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  resultLabel: {
    fontSize: 16,
    color: '#34495e',
  },
  resultValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
});

export default FinancingSimulator;