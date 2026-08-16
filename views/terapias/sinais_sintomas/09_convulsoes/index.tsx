import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Navegacao from '../../../../features/navegacao/navegacao';

export default function ViewConvulsoesSinaisSintomas({ navigation }: any) {
  Navegacao(21, 'ViewConvulsoesSinaisSintomas');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerCategory}>Terapias</Text> 
        <Text style={styles.headerTitle}>Sinais e sintomas</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Badge Principal */}
          <View style={styles.mainBadge}>
            <Text style={styles.mainBadgeText}>Convulsões</Text> 
          </View>

          {/* Imagem */}
          <View style={styles.imageWrapper}>                            
            <Image               
              style={styles.illustrationImage}                
              source={require('../../../../assets/ICO_SINAIS_E_SINTOMAS/09_CONVULSOES.png')} 
            />
          </View>

          {/* O que é */}
          <View style={styles.cardSection}>
            <View style={styles.subBadge}>
              <Text style={styles.subBadgeText}>O que é:</Text>  
            </View>
            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                Contratura involuntária dos músculos com ou sem perda de consciência;
              </Text>
            </View>
          </View>

          {/* Quando ocorre */}
          <View style={styles.cardSection}>
            <View style={styles.subBadge}>
              <Text style={styles.subBadgeText}>Quando ocorre:</Text>  
            </View>
            <View style={styles.textCard}>
              <Text style={styles.bodyText}>
                Por alterações no sistema nervoso, febre muito alta ou efeito de medicações específicas;
              </Text>
            </View>
          </View>

          {/* Como tratar e aliviar */}
          <View style={styles.cardSection}>
            <View style={styles.subBadgeLarge}>
              <Text style={styles.subBadgeText}>
                Como tratar {"\n"}e aliviar:
              </Text>  
            </View>
            <View style={[styles.textCard, { paddingTop: 45 }]}>
              
            <View style={styles.treatmentItem}>
              <View style={styles.chipContainer}>
                <FontAwesome name="arrow-right" size={14} color="#5e718b" />
                <Text style={styles.chipText}> Segurança imediata</Text>
              </View>
              <Text style={styles.treatmentDesc}>Manter a calma, deitar o paciente de lado para evitar engasgo e proteger a cabeça contra traumas;</Text>
            </View>

            <View style={styles.treatmentItem}>
              <View style={styles.chipContainer}>
                <FontAwesome name="arrow-right" size={14} color="#5e718b" />
                <Text style={styles.chipText}> Não introduzir objetos</Text>
              </View>
              <Text style={styles.treatmentDesc}>Nunca colocar a mão ou qualquer objeto dentro da boca durante a crise;</Text>
            </View>

            <View style={styles.treatmentItem}>
              <View style={styles.chipContainer}>
                <FontAwesome name="arrow-right" size={14} color="#5e718b" />
                <Text style={styles.chipText}> Socorro urgente</Text>
              </View>
              <Text style={styles.treatmentDesc}>Procurar atendimento médico hospitalar imediato.</Text>
            </View>
            </View>
          </View>

          
          <View style={styles.alertCard}>
            <Text style={styles.alertText}>
              Em caso de crise convulsiva, busque auxílio médico de urgência imediatamente.
            </Text>
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
  mainBadgeText: {
    color: '#ffffff', 
    fontSize: 19, 
    fontWeight: '900', 
    textAlign: 'center',
  },
  imageWrapper: {
    width: '60%',
    aspectRatio: 1,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardSection: {
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
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
    width: '65%',
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
  treatmentItem: {
    alignItems: 'center',
    marginBottom: 15,
  },
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2.5,
    borderColor: '#5e718b',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  chipText: {
    color: '#5e718b',
    fontSize: 16, 
    fontWeight: '900',
  },
  treatmentDesc: {
    color: '#5e718b',
    fontSize: 16, 
    fontWeight: '800', 
    textAlign: 'center',
    lineHeight: 23,
    paddingHorizontal: 5,
  },
  alertCard: {
    backgroundColor: '#96b9e0', 
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '90%',
    marginTop: 20,
    marginBottom: 10,
  },
  alertText: {
    color: '#5e718b',
    fontSize: 17, 
    fontWeight: '900', 
    textAlign: 'center',
    lineHeight: 23,
  },
});
