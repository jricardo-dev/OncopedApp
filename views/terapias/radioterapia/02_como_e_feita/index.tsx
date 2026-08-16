import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import Navegacao from '../../../../features/navegacao/navegacao';

export default function ViewComoEhFeitaRadioterapia({ navigation }: any) {
  Navegacao(10, 'ViewComoEhFeitaRadioterapia');
    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerCategory}>Terapias</Text> 
        <Text style={styles.headerTitle}>Radioterapia</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.mainBadgeContainer}> 
            <View style={styles.mainBadgeButton}>
              <Text style={styles.mainBadgeButtonText}>Como é feita?</Text> 
            </View>
          </View>

          {/* Seção 1: Radioterapia externa */}
          <View style={styles.sectionContainer}>
            <Image               
              style={styles.stepImage}                
              source={require('../../../../assets/ICO_RADIO/COMO_E_FEITA_01.png')} 
            />

            <View style={styles.subBadgeButton}>
              <Text style={styles.subBadgeButtonText}>Radioterapia externa</Text> 
              <Text style={styles.subBadgeButtonSub}>(teleterapia)</Text> 
            </View>

            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                A radiação é emitida por um aparelho direcionado ao local a ser tratado,
                com o paciente deitado. As aplicações são, geralmente, diárias e as
                seções são rápidas.
              </Text>
            </View>
          </View>

          {/* Seção 2: Braquiterapia */}
          <View style={[styles.sectionContainer, { marginTop: 25 }]}>
            <Image               
              style={styles.stepImage}                
              source={require('../../../../assets/ICO_RADIO/COMO_E_FEITA_02.png')} 
            />

            <View style={styles.subBadgeButton}>
              <Text style={styles.subBadgeButtonText}>Braquiterapia</Text> 
            </View>

            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                Aplicadores são colocados próximos ao local a ser tratado, a radiação é emitida
                do aparelho para os aplicadores. Esse tratamento é feito no ambulatório
                (podendo necessitar de anestesia), de uma a duas vezes por semana.
              </Text>
            </View>
          </View>
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
  mainBadgeContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  mainBadgeButton: {
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
  mainBadgeButtonText: {
    color: '#ffffff', 
    fontSize: 19, 
    fontWeight: '900', 
    textAlign: 'center',
  },
  sectionContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  stepImage: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  subBadgeButton: {
    width: '70%',
    minHeight: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor: '#96b9e0',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 2,
  },
  subBadgeButtonText: {
    color: '#ffffff', 
    fontSize: 18, 
    fontWeight: '900', 
    textAlign: 'center',
  },
  subBadgeButtonSub: {
    color: '#ffffff', 
    fontSize: 16, 
    fontWeight: '800', 
    textAlign: 'center',
  },
  textCard: {
    backgroundColor: '#edeff3', 
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    borderRadius: 25,
    width: '95%',
    marginTop: -20,
    zIndex: 1,
  },
  bodyText: {
    color: '#5e718b',
    fontSize: 17, 
    fontWeight: '800', 
    textAlign: 'center',
    lineHeight: 24,
  },
});