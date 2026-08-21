import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity , Platform} from 'react-native';
import Navegacao from '../../features/navegacao/navegacao';

export default function ViewNutricao({ navigation }: any) {
  Navegacao(3, 'ViewNutricao');

  return (
    <View style={styles.container}>
      <View style={styles.backgroundPink}>
        <View style={styles.bottomWhiteCard} />
      </View>

      <View style={styles.headerIconContainer}>
        <Image               
          style={styles.headerIcon}                
          source={require('../../assets/ICO_NUTRICAO.png')} 
        />
      </View>

      <View style={styles.menuContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={Platform.OS === 'web'}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.menuButton}
            onPress={() => {
              navigation.navigate('ViewPassosNutricao');
            }}
          >
            <Text style={styles.menuButtonText}>
              Passos para uma{"\n"}alimentação saudável
            </Text> 
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.menuButton}
            onPress={() => {
              navigation.navigate('ViewMitosNutricao');
            }}
          >
            <Text style={styles.menuButtonText}>
              Os mitos da{"\n"}alimentação durante o{"\n"}tratamento do câncer
            </Text> 
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.menuButton, styles.lastMenuButton]}
            onPress={() => {
              navigation.navigate('ViewSondasNutricao');
            }}
          >
            <Text style={styles.menuButtonText}>
              Sondas{"\n"}alimentares
            </Text>
          </TouchableOpacity>
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
    maxWidth: 240,
    maxHeight: 240,
    resizeMode: 'contain',
  },
  menuContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  menuButton: {
    width: '75%',
    minHeight: 90,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 45,
    backgroundColor: '#96b9e0',
    marginVertical: 10,
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
    fontSize: 17, 
    fontWeight: '900', 
    textAlign: 'center',
    lineHeight: 22,
  },
});