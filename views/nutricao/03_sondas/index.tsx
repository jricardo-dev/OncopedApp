import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Navegacao from '../../../features/navegacao/navegacao';

const SONDA_ILLUSTRATIONS = [
  require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_2.png'),
  require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_3.png'),
  require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_4.png'),
  require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_5.png'),
  require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_6.png'),
  require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_7.png'),
  require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_8.png'),
  require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_9.png'),
];

export default function ViewSondasNutricao({ navigation }: any) {
  Navegacao(31, 'ViewSondasNutricao'); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerCategory}>{" "}</Text> 
        <Text style={styles.headerTitle}>Nutrição</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Badge Principal */}
          <View style={styles.mainBadge}>
            <Text style={styles.mainBadgeText}>
              Sondas{"\n"}alimentares
            </Text> 
          </View>

          {/* O que é */}
          <View style={styles.sectionContainer}>
            <Image               
              style={styles.heroImage}                
              source={require('../../../assets/ICO_NUTRICAO/SONDAS/SONDAS_1.png')} 
            />

            <View style={styles.subBadge}>
              <Text style={styles.subBadgeText}>O que é:</Text>  
            </View>

            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                É um tubo usado para alimentar e introduzir os medicamentos necessários ao tratamento, pelo nariz, descendo até o estômago ou intestino. É necessária, por um determinado período, quando há dificuldades para engolir ou digerir o alimento.
              </Text>
            </View>
          </View>

          {/* Cuidados essenciais */}
          <View style={[styles.sectionContainer, { marginTop: 25 }]}>
            <View style={styles.subBadge}>
              <Text style={styles.subBadgeText}>Cuidados essenciais</Text>  
            </View>

            <View style={[styles.textCard, { paddingTop: 40 }]}>
              <View style={styles.bulletItem}>
                <FontAwesome name="arrow-right" size={14} color="#5e718b" />
                <Text style={styles.bulletText}>
                  {" "}O paciente e seus familiares devem receber instruções da equipe de Enfermagem sobre como usar a sonda e indicar o material para introdução dos alimentos, que devem ser lavados com água e sabão antes e após seu uso;
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <FontAwesome name="arrow-right" size={14} color="#5e718b" />
                <Text style={styles.bulletText}>
                  {" "}Em caso de entupimento por alimentos ou remédios e a saída acidental pelo nariz, é necessário buscar a equipe especializada no hospital de tratamento.
                </Text>
              </View>
            </View>
          </View>

          {/* Alerta de febre */}
          <View style={styles.alertCard}>
            <Text style={styles.alertText}>
              Deve-se comunicar imediatamente a equipe de saúde a ocorrência de febre
            </Text>
          </View>

          {/* Imagens instrutivas */}
          {SONDA_ILLUSTRATIONS.map((imgSrc, index) => (
            <View key={index} style={styles.imageItemContainer}>
              <Image               
                style={styles.instructionImage}                
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
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  mainBadge: {
    width: '80%',
    minHeight: 70,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 35,
    backgroundColor: '#fea9a7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 15,
  },
  mainBadgeText: {
    color: '#ffffff', 
    fontSize: 19, 
    fontWeight: '900', 
    textAlign: 'center',
    lineHeight: 25,
  },
  sectionContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  heroImage: {
    width: '65%',
    height: 180,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  subBadge: {
    width: '65%',
    height: 48,
    borderRadius: 24,
    backgroundColor: '#96b9e0',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  subBadgeText: {
    fontSize: 18, 
    fontWeight: '900',
    color: '#5e718b',
    textAlign: 'center',
  },
  textCard: {
    backgroundColor: '#edeff3',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 20,
    marginTop: -24,
    width: '100%',
    zIndex: 1,
  },
  bodyText: {
    color: '#5e718b',
    fontSize: 17, 
    fontWeight: '800', 
    textAlign: 'center',
    lineHeight: 24,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  bulletText: {
    color: '#5e718b',
    fontSize: 16, 
    fontWeight: '800', 
    lineHeight: 23,
    flex: 1,
    marginLeft: 8,
  },
  alertCard: {
    backgroundColor: '#96b9e0', 
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '85%',
    marginTop: 20,
    marginBottom: 20,
  },
  alertText: {
    color: '#5e718b',
    fontSize: 17, 
    fontWeight: '900', 
    textAlign: 'center',
    lineHeight: 23,
  },
  imageItemContainer: {
    width: '85%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});