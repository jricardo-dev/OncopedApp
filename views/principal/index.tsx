import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions , Platform} from 'react-native';
import Navegacao from '../../features/navegacao/navegacao';
import { openSafeUrl } from '../../utils/security';

const { width, height } = Dimensions.get('window');

export default function ViewInicio({ navigation }: any) {
  Navegacao(1, 'ViewInicio');

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/fundo_azul.png')} 
        style={styles.backgroundImage} 
      />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={Platform.OS === 'web'}
      >
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Clique na opção que</Text>
          <Text style={styles.headerTitle}>deseja para interagir</Text>
        </View>

        <TouchableOpacity                            
          activeOpacity={0.7}
          style={styles.buttonOption}
          onPress={() => {
            navigation.navigate('ViewTerapias');
          }}
        >                            
          <Image               
            style={styles.buttonImage}                
            source={require('../../assets/ico_btn_terapias.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity                            
          activeOpacity={0.7}
          style={styles.buttonOption}
          onPress={() => {
            navigation.navigate('ViewNutricao');
          }}
        >  
          <Image               
            style={styles.buttonImage}                
            source={require('../../assets/ico_btn_nutricao.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity                            
          activeOpacity={0.7}
          style={styles.buttonOption}
          onPress={() => {
            openSafeUrl('https://youtu.be/wVmY3LSGzNI', 'Vídeo explicativo');
          }}
        >  
          <Image               
            style={styles.buttonImage}                
            source={require('../../assets/ico_btn_video.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity                            
          activeOpacity={0.7}
          style={styles.buttonOption}
          onPress={() => {
            openSafeUrl('https://drive.google.com/drive/folders/1m8-OENwa9lzqee4Wu5n1gf23B2MJJEfD', 'Referências');
          }}
        >  
          <Image               
            style={styles.buttonImage}                
            source={require('../../assets/ico_btn_referencias.png')} 
          />
        </TouchableOpacity>

        <TouchableOpacity                            
          activeOpacity={0.7}
          style={[styles.buttonOption, styles.lastButton]}
          onPress={() => {
            navigation.navigate('ViewBaixar');
          }}
        >  
          <Image               
            style={styles.buttonImage}                
            source={require('../../assets/ico_btn_para_baixar.png')} 
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96b9e0',
  },
  backgroundImage: {
    height: height, 
    width: width, 
    position: 'absolute', 
    top: 0, 
    left: 0,
    resizeMode: 'cover',
  },
  scrollContent: {
    paddingTop: 80,
    paddingBottom: 40,
    alignItems: 'center',
  },
  headerTitleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonOption: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  lastButton: {
    marginBottom: 30,
  },
  buttonImage: {
    height: 180,
    width: '80%',
    maxWidth: 320,
    maxHeight: 190,
    resizeMode: 'contain',
  },
});