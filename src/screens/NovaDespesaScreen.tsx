import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any, 'NovaDespesa'>;
};

export default function NovaDespesaScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova despesa</Text>
      
      <TextInput style={styles.input} placeholder="Descrição (Ex: Café da manhã)" />
      <TextInput style={styles.input} placeholder="Valor (R$)" keyboardType="numeric" />
      
      <Button title="Salvar despesa" onPress={() => navigation.goBack()} />
      <Button title="Cancelar" color="red" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F3F4F6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  }
});
