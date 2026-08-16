import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import Navegacao from '../../../../features/navegacao/navegacao';

const IMAGES = [
  require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_01.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_02.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_03.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_04.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_05.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/COMO_E_FEITA_06.png'),
];

export default function ViewComoEhFeitaQuimioterapia({ navigation }: any) {
  Navegacao(6, 'ViewComoEhFeitaQuimioterapia');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerCategory}>Terapias</Text> 
        <Text style={styles.headerTitle}>Quimioterapia</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.badgeContainer}> 
            <View style={styles.badgeButton}>
              <Text style={styles.badgeButtonText}>Como é feita?</Text> 
            </View>
          </View>

          {IMAGES.map((imgSrc, index) => (
            <View key={index} style={styles.imageItemContainer}>                            
              <Image               
                style={styles.stepImage}                
                source={imgSrc} 
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96b9e0',
  },
  header: {
    backgroundColor: '#96b9e0',
    width: '100%',
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomColor: '#d2d9e2',
    borderBottomWidth: 10,
    alignItems: 'center',
  },
  headerCategory: {
    color: '#ffffff', 
    fontSize: 18, 
    textTransform: 'uppercase',
  },
  headerTitle: {
    color: '#ffffff', 
    fontSize: 28, 
    fontWeight: '900',
    textTransform: 'uppercase',
    marginTop: 5,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderLeftColor: '#d2d9e2',
    borderLeftWidth: 10,
    borderRightColor: '#d2d9e2',
    borderRightWidth: 10,
  },
  scrollContent: {
    paddingTop: 15,
    paddingBottom: 40,
    alignItems: 'center',
  },
  badgeContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  badgeButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fea9a7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  badgeButtonText: {
    color: '#ffffff', 
    fontSize: 19, 
    fontWeight: '900', 
    textAlign: 'center',
  },
  imageItemContainer: {
    width: '85%',
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepImage: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
});