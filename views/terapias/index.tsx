import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import Navegacao from '../../features/navegacao/navegacao';

const { width, height } = Dimensions.get('window');

export default function ViewTerapias({ navigation }: any) {
  Navegacao(2, 'ViewTerapias');

  return (
    <View style={styles.container}>
      <Image 
        style={styles.backgroundImage} 
        source={require('../../assets/fundo_rosa.png')} 
      />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Selecione a opção que</Text>
          <Text style={styles.headerTitle}>você deseja conhecer</Text>
        </View>

        <TouchableOpacity                            
          activeOpacity={0.7}
          style={styles.buttonOption}
          onPress={() => {
            navigation.navigate('ViewQuimioterapia');
          }}
        >                            
          <Image               
            style={styles.buttonImage}                
            source={require('../../assets/ico_btn_quimeoterapia.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity                            
          activeOpacity={0.7}
          style={styles.buttonOption}
          onPress={() => {
            navigation.navigate('ViewRadioterapia');
          }}
        >                            
          <Image               
            style={styles.buttonImage}                
            source={require('../../assets/ico_btn_radioterapia.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity                            
          activeOpacity={0.7}
          style={[styles.buttonOption, styles.lastButton]}
          onPress={() => {
            navigation.navigate('ViewSinaisSintomas');
          }}
        >                            
          <Image               
            style={styles.buttonImage}                
            source={require('../../assets/ico_btn_sinais_sintomas.png')} 
          />
        </TouchableOpacity>
      </ScrollView> 
    </View>       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fea9a7',
  },
  backgroundImage: {
    height: height, 
    width: width, 
    position: 'absolute', 
    top: 0, 
    left: 0,
    resizeMode: 'cover',
  },
  scrollContent: {
    paddingTop: 80,
    paddingBottom: 40,
    alignItems: 'center',
  },
  headerTitleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonOption: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  lastButton: {
    marginBottom: 30,
  },
  buttonImage: {
    height: 180,
    width: '80%',
    resizeMode: 'contain',
  },
});