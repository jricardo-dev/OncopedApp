import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import Navegacao from '../../../features/navegacao/navegacao';

const SYMPTOMS = [
  { id: 1, title: 'Febre', route: 'ViewFebreSinaisSintomas' },
  { id: 2, title: 'Dor', route: 'ViewDorSintomas' },
  { id: 3, title: 'Fadiga / cansaço', route: 'ViewFadigaCansacoSinaisSintomas' },
  { id: 4, title: 'Nausea e Vômito', route: 'ViewNauseaVomitoSinaisSintomas' },
  { id: 5, title: 'Distúrbios do sono', route: 'ViewDisturbiosSonoSinaisSintomas' },
  { id: 6, title: 'Diarréia', route: 'ViewDiarreiaSinaisSintomas' },
  { id: 7, title: 'Constipação', route: 'ViewConstipacaoSinaisSintomas' },
  { id: 8, title: 'Distúrbios Psicoemocionais', route: 'ViewDisturbiosPsicoemocionaisSinaisSintomas' },
  { id: 9, title: 'Convulsões', route: 'ViewConvulsoesSinaisSintomas' },
  { id: 10, title: 'Distúrbios Sensoriais', route: 'ViewDisturbiosSensoriaisSinaisSintomas' },
  { id: 11, title: 'Mucosite Oral', route: 'ViewMucoseOralSinaisSintomas' },
  { id: 12, title: 'Anorexia', route: 'ViewAnorexiaSinaisSintomas' },
  { id: 13, title: 'Neuropatias', route: 'ViewNeuropatiasSinaisSintomas' },
  { id: 14, title: 'Sangramentos', route: 'ViewSangramentosSinaisSintomas' },
  { id: 15, title: 'Falta de Ar', route: 'ViewFaltaArSinaisSintomas' },
  { id: 16, title: 'Alopécia', route: 'ViewAlopeciaSinaisSintomas' },
];

export default function ViewSinaisSintomas({ navigation }: any) {
  Navegacao(12, 'ViewSinaisSintomas');

  return (
    <View style={styles.container}>
      <View style={styles.backgroundPink}>
        <View style={styles.bottomWhiteCard} />
      </View>

      <View style={styles.headerIconContainer}>
        <Image               
          style={styles.headerIcon}                
          source={require('../../../assets/ico_btn_sinais_sintomas.png')} 
        />
      </View>

      <View style={styles.menuContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.instructionText}>Selecione a opção</Text>
            <Text style={styles.instructionText}>que você deseja saber</Text>
            <Text style={styles.instructionText}>mais informações</Text>
          </View>

          {SYMPTOMS.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              style={[
                styles.menuButton,
                index === SYMPTOMS.length - 1 && styles.lastMenuButton,
              ]}
              onPress={() => {
                navigation.navigate(item.route);
              }}
            >
              <Text style={styles.menuButtonText}>{item.title}</Text> 
            </TouchableOpacity>
          ))}
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
    paddingTop: 10,
    paddingBottom: 40,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  instructionText: {
    color: '#fea9a7',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  menuButton: {
    width: '75%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 70,
    backgroundColor: '#96b9e0',
    marginVertical: 6,
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
    fontSize: 18, 
    fontWeight: '900', 
    textAlign: 'center',
  },
});