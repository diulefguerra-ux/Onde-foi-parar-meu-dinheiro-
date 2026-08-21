import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any, 'Dashboard'>;
};

export default function DashboardScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Diúle!</Text>
      
      <View style={styles.card}>
        <Text>Total gasto no mês</Text>
        <Text style={styles.value}>R$ 682,80</Text>
      </View>

      <Button title="Registrar Nova Despesa" onPress={() => navigation.navigate('NovaDespesa')} />
      <Button title="Ver Histórico (Em breve)" onPress={() => {}} />
      <Button title="Sair" onPress={() => navigation.replace('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#D1FAE5',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  value: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#065F46',
    marginTop: 10,
  }
});
