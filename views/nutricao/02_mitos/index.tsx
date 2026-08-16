import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import Navegacao from '../../../features/navegacao/navegacao';

const MITOS = [
  {
    id: 1,
    title: 'Mito 1',
    image: require('../../../assets/ICO_NUTRICAO/MITOS/MITOS_1.png'),
    text: '“Carboidratos (pães, farinha de trigo, açúcar, arroz) alimentam o tumor”\n\nA principal função dos carboidratos é fornecer energia para as células e quando você deixa de consumir, o organismo pode usar proteínas dos músculos, causando perda de peso que pode gerar prejuízo para o corpo e o tratamento.',
  },
  {
    id: 2,
    title: 'Mito 2',
    image: require('../../../assets/ICO_NUTRICAO/MITOS/MITOS_2.png'),
    text: '“Cortar carboidratos ajuda no tratamento do câncer”;\nNão existem evidências científicas suficientes que confirmem que cortar carboidratos ajuda a “matar o tumor” em humanos.',
  },
  {
    id: 3,
    title: 'Mito 3',
    image: require('../../../assets/ICO_NUTRICAO/MITOS/MITOS_3.png'),
    text: '“Proteínas de origem animal (carne vermelha, ovos, queijos) devem ser cortadas da alimentação, pois alimentam o tumor”\n\nIngerir proteínas em quantidades adequadas, além de garantir a manutenção de diversas atividades do corpo, mantém os músculos saudáveis.',
  },
  {
    id: 4,
    title: 'Mito 4',
    image: require('../../../assets/ICO_NUTRICAO/MITOS/MITOS_4.png'),
    text: '“Cogumelo do sol, noni, graviola, chá de graviola, chá verde, dentre outros muitos alimentos, curam o câncer”\n\nNão existem alimentos que, milagrosamente, curam o câncer.',
  },
];

export default function ViewMitosNutricao({ navigation }: any) {
  Navegacao(30, 'ViewMitosNutricao'); 
    
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
              Os mitos da{"\n"}alimentação durante o{"\n"}tratamento do câncer
            </Text> 
          </View>

          {MITOS.map((mito) => (
            <View key={mito.id} style={styles.mitoSection}>
              <Image               
                style={styles.mitoImage}                
                source={mito.image} 
              />
              <View style={styles.subBadge}>
                <Text style={styles.subBadgeText}>{mito.title}</Text>  
              </View>
              <View style={styles.textCard}>
                <Text style={styles.bodyText}>
                  {mito.text}
                </Text>
              </View>
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
    minHeight: 80,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 40,
    backgroundColor: '#fea9a7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 20,
  },
  mainBadgeText: {
    color: '#ffffff', 
    fontSize: 18, 
    fontWeight: '900', 
    textAlign: 'center',
    lineHeight: 24,
  },
  mitoSection: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 25,
  },
  mitoImage: {
    width: '65%',
    height: 160,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  subBadge: {
    width: '60%',
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
});