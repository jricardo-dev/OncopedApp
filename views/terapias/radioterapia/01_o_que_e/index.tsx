import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import Navegacao from '../../../../features/navegacao/navegacao';

export default function ViewOQueEhRadioterapia({ navigation }: any) {
  Navegacao(9, 'ViewOQueEhRadioterapia');
    
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
          <View style={styles.imageContainer}>
            <Image               
              style={styles.heroImage}                
              source={require('../../../../assets/ICO_RADIO/RADIOTERAPIA_O_QUE_E.png')} 
            />
          </View>       

          <View style={styles.cardWrapper}>
            <View style={styles.badgeButton}>
              <Text style={styles.badgeButtonText}>O que é?</Text> 
            </View>

            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                É o tratamento em que se utiliza um tipo de energia para destruir ou impedir
                que as células do tumor aumentem: os raios ionizantes (raio-x, por exemplo).
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
    paddingBottom: 40,
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
  },
  heroImage: {
    height: 220,     
    width: '80%',
    resizeMode: 'contain',
  },
  cardWrapper: {
    width: '90%',
    alignItems: 'center',
    marginTop: 15,
  },
  badgeButton: {
    width: '60%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fea9a7',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  badgeButtonText: {
    color: '#ffffff', 
    fontSize: 19, 
    fontWeight: '900',
  },
  textCard: {
    backgroundColor: '#edeff3',
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingTop: 35,
    paddingBottom: 25,
    marginTop: -25,
    width: '100%',
    zIndex: 1,
  },
  bodyText: {
    color: '#5e718b',
    fontSize: 18, 
    fontWeight: '800', 
    textAlign: 'center',
    lineHeight: 26,
  },
});