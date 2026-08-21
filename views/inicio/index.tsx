import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Navegacao from '../../features/navegacao/navegacao';

export default function TelaInicial({ navigation }: any) {
  Navegacao(0, 'TelaInicial');

  return (
    <LinearGradient
      colors={['#ffffff', '#abcef7']}
      style={styles.container}
    >
      <Text style={styles.welcomeText}>
        Bem vindo à
      </Text>

      <Image 
        style={styles.logo} 
        source={require('../../assets/logo_01.png')} 
      />

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => {
          navigation.navigate('ViewInicio');
        }}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  welcomeText: {
    textTransform: 'uppercase',
    color: '#fea9a7',
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Montserrat-Bold',
    marginBottom: 20,
  },
  logo: {
    width: '80%',
    maxWidth: 440,
    height: 200,
    maxHeight: 220,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  button: {
    width: '70%',
    maxWidth: 320,
    paddingVertical: 14,
    borderWidth: 3,
    borderRadius: 18,
    borderColor: '#ffffff',
    backgroundColor: '#fea9a7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    fontFamily: 'Montserrat-Bold',
  },
});
