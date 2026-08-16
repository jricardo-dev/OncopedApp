import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Navegacao from '../../../features/navegacao/navegacao';

export default function ViewPassosNutricao({ navigation }: any) {
  Navegacao(29, 'ViewPassosNutricao'); 

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
              Passos para uma{"\n"}alimentação saudável
            </Text> 
          </View>

          {/* Passo 1 */}
          <View style={styles.stepSection}>
            <Image               
              style={styles.stepImage}                
              source={require('../../../assets/ICO_NUTRICAO/PASSOS/01_PASSOS.png')} 
            />
            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                Tornar como base da alimentação os alimentos naturais, como frutas, verduras e legumes. Quanto mais colorido o prato, mais atrativo e nutritivo;
              </Text>
            </View>
          </View>

          {/* Passo 2 */}
          <View style={styles.stepSection}>
            <Image               
              style={styles.stepImage}                
              source={require('../../../assets/ICO_NUTRICAO/PASSOS/PASSOS_2.png')} 
            />
            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                Utilizar óleos, gorduras, sal e açúcar em pequenas quantidades, evitar frituras e empanados, utilizar temperos naturais, preferir suco da própria fruta e comida feita em casa ao invés de refeições prontas ou industrializadas;
              </Text>
            </View>
          </View>

          {/* Observar os rótulos */}
          <View style={styles.badgeSection}>
            <View style={styles.subBadge}>
              <Text style={styles.subBadgeText}>Observar os rótulos:</Text>  
            </View>
            <View style={[styles.textCard, { paddingTop: 40 }]}>
              <View style={styles.bulletItem}>
                <FontAwesome name="arrow-right" size={14} color="#5e718b" />
                <Text style={styles.bulletText}>
                  {" "}Evitar produtos onde os primeiros ingredientes da lista são: gordura vegetal hidrogenada, sacarose, açúcar, glicose, xarope de milho ou de glicose, farinha de trigo;
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <FontAwesome name="arrow-right" size={14} color="#5e718b" />
                <Text style={styles.bulletText}>
                  {" "}Produtos diet ou light são desbalanceados;
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <FontAwesome name="arrow-right" size={14} color="#5e718b" />
                <Text style={styles.bulletText}>
                  {" "}Alimentos que parecem ser saudáveis, mas não são: barra de cereal, peito de peru, iogurte, suco de caixinha, guaraná natural, molho de tomate, biscoitos integrais, margarina, atum em lata, chás gelados industrializados e sobremesas lácteas.
                </Text>
              </View>
            </View>
          </View>

          {/* Passo 3 */}
          <View style={styles.stepSection}>
            <Image               
              style={styles.stepImage}                
              source={require('../../../assets/ICO_NUTRICAO/PASSOS/PASSOS_4.png')} 
            />
            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                Comer com regularidade e atenção;
              </Text>
            </View>
          </View>

          {/* Passo 4 */}
          <View style={styles.stepSection}>
            <Image               
              style={styles.stepImage}                
              source={require('../../../assets/ICO_NUTRICAO/PASSOS/PASSOS_3.png')} 
            />
            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                Reduzir o consumo de alimentos processados e evitar o consumo de alimentos ultraprocessados (biscoitos recheados, salgadinhos de pacote e refrigerantes);
              </Text>
            </View>
          </View>

          {/* Passo 5 */}
          <View style={styles.stepSection}>
            <Image               
              style={styles.stepImage}                
              source={require('../../../assets/ICO_NUTRICAO/PASSOS/PASSOS_5.png')} 
            />
            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                Cuidar da alimentação em festas e comemorações, evitando as bebidas industrializadas e açucaradas, não pulando refeições para comer mais nas festas;
              </Text>
            </View>
          </View>

          {/* Controlar o peso de forma consciente */}
          <View style={styles.stepSection}>
            <Image               
              style={styles.stepImage}                
              source={require('../../../assets/ICO_NUTRICAO/PASSOS/PASSOS_6.png')} 
            />
            <View style={styles.subBadgeLarge}>
              <Text style={styles.subBadgeText}>
                Controlar o peso{"\n"}de forma consciente
              </Text>  
            </View>
            <View style={[styles.textCard, { paddingTop: 45 }]}>
              <View style={styles.bulletItem}>
                <FontAwesome name="arrow-right" size={14} color="#5e718b" />
                <Text style={styles.bulletText}>
                  {" "}Conhecer seu peso e marcar consulta com um nutricionista;
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <FontAwesome name="arrow-right" size={14} color="#5e718b" />
                <Text style={styles.bulletText}>
                  {" "}Não tomar suplementos alimentares por conta própria;
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <FontAwesome name="arrow-right" size={14} color="#5e718b" />
                <Text style={styles.bulletText}>
                  {" "}Ocupar o tempo com atividades produtivas e atividade física para evitar descontar a ansiedade na alimentação.
                </Text>
              </View>
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
    marginBottom: 20,
  },
  mainBadgeText: {
    color: '#ffffff', 
    fontSize: 18, 
    fontWeight: '900', 
    textAlign: 'center',
    lineHeight: 24,
  },
  stepSection: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepImage: {
    width: '75%',
    height: 180,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  badgeSection: {
    width: '90%',
    alignItems: 'center',
    marginVertical: 15,
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
  subBadgeLarge: {
    width: '70%',
    paddingVertical: 10,
    paddingHorizontal: 15,
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
    fontSize: 17, 
    fontWeight: '900',
    color: '#5e718b',
    textAlign: 'center',
  },
  textCard: {
    backgroundColor: '#edeff3',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '100%',
    zIndex: 1,
    marginTop: 5,
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
});