import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text , Platform} from 'react-native';
import Navegacao from '../../../../features/navegacao/navegacao';

const SIDE_EFFECT_IMAGES = [
  require('../../../../assets/ICO_QUIMIOTERAPIA/EFEITOS_COLATERAIS_01.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/EFEITOS_COLATERAIS_02.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/EFEITOS_COLATERAIS_03.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/EFEITOS_COLATERAIS_04.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/EFEITOS_COLATERAIS_05.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/EFEITOS_COLATERAIS_06.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/EFEITOS_COLATERAIS_07.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/EFEITOS_COLATERAIS_08.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/EFEITOS_COLATERAIS_09.png'),
  require('../../../../assets/ICO_QUIMIOTERAPIA/EFEITOS_COLATERAIS_10.png'),
];

export default function ViewOQueEsperarQuimioterapia({ navigation }: any) {
  Navegacao(7, 'ViewOQueEsperarQuimioterapia');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerCategory}>Terapias</Text> 
        <Text style={styles.headerTitle}>Quimioterapia</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={Platform.OS === 'web'}
        >
          <View style={styles.sectionContainer}> 
            <View style={styles.badgeButton}>
              <Text style={styles.badgeButtonText}>
                O que esperar sobre a dor?
              </Text> 
            </View>

            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                O comum é não sentir dor durante a aplicação da quimioterapia,
                exceto a “picada” da agulha, porém, algumas medicações
                podem causar desconforto, ardência ou queimação quando aplicadas. 
              </Text>
            </View>
          </View>

          <View style={[styles.sectionContainer, { marginTop: 25 }]}> 
            <View style={styles.badgeButton}>
              <Text style={styles.badgeButtonText}>
                E os efeitos colaterais?
              </Text> 
            </View>
          </View>

          {SIDE_EFFECT_IMAGES.map((imgSrc, index) => (
            <View key={index} style={styles.imageItemContainer}>                            
              <Image               
                style={styles.effectImage}                
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
  sectionContainer: {
    width: '90%',
    alignItems: 'center',
    marginVertical: 10,
  },
  badgeButton: {
    width: '85%',
    minHeight: 50,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor: '#fea9a7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 2,
  },
  badgeButtonText: {
    color: '#ffffff', 
    fontSize: 18, 
    fontWeight: '900', 
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
  imageItemContainer: {
    width: '85%',
    maxWidth: 373,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  effectImage: {
    width: '100%',
    maxWidth: 373,
    height: 142,
    resizeMode: 'contain',
  },
});