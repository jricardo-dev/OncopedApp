import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity , Platform} from 'react-native';
import Navegacao from '../../features/navegacao/navegacao';
import { openSafeUrl } from '../../utils/security';

const DOWNLOAD_ITEMS = [
  { id: 1, image: require('../../assets/ICO_BAIXAR/modelo-1.png'), url: 'https://drive.google.com/file/d/1J-yBkt8Gn08zaqdWdJh91qt1lakF6lUG/view?usp=sharing' },
  { id: 2, image: require('../../assets/ICO_BAIXAR/modelo-2.png'), url: 'https://drive.google.com/file/d/1AQFF4YbRQ8m-nVsDuXiGYODjE3SsyLwU/view?usp=sharing' },
  { id: 3, image: require('../../assets/ICO_BAIXAR/modelo-3.png'), url: 'https://drive.google.com/file/d/1PB2aDdHFjoADy2z5x7cF5ReIaS9u9v-a/view?usp=sharing' },
  { id: 4, image: require('../../assets/ICO_BAIXAR/modelo-4.png'), url: 'https://drive.google.com/file/d/17-GrNPyt6woF96QRUiLV1zpij0myQyBh/view?usp=sharing' },
  { id: 5, image: require('../../assets/ICO_BAIXAR/modelo-5.png'), url: 'https://drive.google.com/file/d/1q6hSLwWIySm82CjxXJpZla-vV2nh089s/view?usp=sharing' },
  { id: 6, image: require('../../assets/ICO_BAIXAR/modelo-6.png'), url: 'https://drive.google.com/file/d/1mub8VVO8__poG4uE7Uwqk-5au-OEq6mi/view?usp=sharing' },
  { id: 7, image: require('../../assets/ICO_BAIXAR/modelo-7.png'), url: 'https://drive.google.com/file/d/1vbrqpSgZ5COPK-qHondhQSB_Vnl7_g4n/view?usp=sharing' },
  { id: 8, image: require('../../assets/ICO_BAIXAR/modelo-8.png'), url: 'https://drive.google.com/file/d/1mPE0Zzj70PwmIJcDzXuthdNM_aDGn4tE/view?usp=sharing' },
  { id: 9, image: require('../../assets/ICO_BAIXAR/modelo-9.png'), url: 'https://drive.google.com/file/d/1oCk_O90g43_EjygmX4CIi3GUVVmPX44f/view?usp=sharing' },
  { id: 10, image: require('../../assets/ICO_BAIXAR/modelo-10.png'), url: 'https://drive.google.com/file/d/1fGFCOeQfJerqBeQkcHUOedDopSXZoVQt/view?usp=sharing' },
];

export default function ViewBaixar({ navigation }: any) {
  Navegacao(32, 'ViewBaixar');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerSub}>{"   "}</Text> 
        <Text style={styles.headerTitle}>Para baixar</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={Platform.OS === 'web'}
        >
          <View style={styles.bannerContainer}> 
            <View style={styles.bannerButton}>
              <Text style={styles.bannerText}>
                Baixe e imprima para pintar e se divertir!
              </Text>
            </View>
          </View>

          <View style={styles.gridContainer}>
            {DOWNLOAD_ITEMS.map((item) => (
              <TouchableOpacity                            
                key={item.id}
                activeOpacity={0.7}
                style={styles.cardItem}
                onPress={() => {
                  openSafeUrl(item.url, `Modelo ${item.id}`);
                }}
              >                            
                <Image               
                  style={styles.cardImage}                
                  source={item.image} 
                />
              </TouchableOpacity>
            ))}
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
    paddingTop: 40,
    paddingBottom: 15,
    borderBottomColor: '#d2d9e2',
    borderBottomWidth: 10,
    alignItems: 'center',
  },
  headerSub: {
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
    paddingBottom: 30,
    alignItems: 'center',
  },
  bannerContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  bannerButton: {
    width: '85%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 70,
    backgroundColor: '#fea9a7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  bannerText: {
    color: '#ffffff', 
    fontSize: 18, 
    fontWeight: '900', 
    textAlign: 'center',
  },
  gridContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  cardItem: {
    width: '45%',
    maxWidth: 260,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: 260,
    maxHeight: 260,
    resizeMode: 'contain',
  },
});