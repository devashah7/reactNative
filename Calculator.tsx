import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const addNumbers = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum.toString());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        keyboardType="numeric"
        onChangeText={text => setNum1(text)}
        value={num1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        keyboardType="numeric"
        onChangeText={text => setNum2(text)}
        value={num2}
      />
      <View style={styles.buttonRow}>
      <Button title="Add" onPress={addNumbers} />
      <Button title="Sub" onPress={() => {/* Logic for Button 1 */}} />
      <Button title="Mul" onPress={() => {/* Logic for Button 2 */}} />
      <Button title="Div" onPress={() => {/* Logic for Button 3 */}} />
      </View>
      
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Result:</Text>
        <Text style={styles.resultValue}>{result}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding:  40
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  resultContainer: {
    marginTop: 24,
    backgroundColor: 'lightgray',
    padding: 16,
    borderRadius: 8,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  }
});

export default Calculator;
