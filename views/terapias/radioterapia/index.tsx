import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import Navegacao from '../../../features/navegacao/navegacao';

export default function ViewRadioterapia({ navigation }: any) {
  Navegacao(8, 'ViewRadioterapia');

  return (
    <View style={styles.container}>
      <View style={styles.backgroundPink}>
        <View style={styles.bottomWhiteCard} />
      </View>

      <View style={styles.headerIconContainer}>
        <Image               
          style={styles.headerIcon}                
          source={require('../../../assets/ico_btn_radioterapia.png')} 
        />
      </View>

      <View style={styles.menuContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.menuButton}
            onPress={() => {
              navigation.navigate('ViewOQueEhRadioterapia');
            }}
          >
            <Text style={styles.menuButtonText}>O que é?</Text> 
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.menuButton}
            onPress={() => {
              navigation.navigate('ViewComoEhFeitaRadioterapia');
            }}  
          >
            <Text style={styles.menuButtonText}>Como é feita?</Text> 
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.menuButton, styles.lastMenuButton]}
            onPress={() => {
              navigation.navigate('ViewOQueEsperarRadioterapia');
            }}   
          >
            <Text style={styles.menuButtonText}>O que esperar?</Text>
          </TouchableOpacity>
        </ScrollView> 
      </View>                 
    </View>            
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundPink: {
    backgroundColor: '#fea9a7',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  bottomWhiteCard: {
    backgroundColor: '#ffffff',
    height: '75%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
  },
  headerIconContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    marginTop: 40,
    height: 220,
    width: '60%',
    resizeMode: 'contain',
  },
  menuContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: 'center',
  },
  menuButton: {
    width: '70%',
    height: 60,
    borderRadius: 70,
    backgroundColor: '#96b9e0',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  lastMenuButton: {
    marginBottom: 30,
  },
  menuButtonText: {
    color: '#ffffff', 
    fontSize: 19, 
    fontWeight: '900', 
    textAlign: 'center',
  },
});