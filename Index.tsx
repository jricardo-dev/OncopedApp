import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, BackHandler } from 'react-native';
import { NavigationContainer, createNavigationContainerRef, useNavigation } from '@react-navigation/native';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons';

import TelaInicial from './views/inicio/index';
import ViewInicio from './views/principal/index';
import ViewTerapias from './views/terapias';
import ViewQuimioterapia from './views/terapias/quimioterapia';
import ViewOQueEhQuimioterapia from './views/terapias/quimioterapia/01_o_que_e';
import ViewComoEhFeitaQuimioterapia from './views/terapias/quimioterapia/02_como_e_feita';
import ViewOQueEsperarQuimioterapia from './views/terapias/quimioterapia/03_o_que_esperar';
import ViewRadioterapia from './views/terapias/radioterapia';
import ViewOQueEhRadioterapia from './views/terapias/radioterapia/01_o_que_e';
import ViewComoEhFeitaRadioterapia from './views/terapias/radioterapia/02_como_e_feita';
import ViewOQueEsperarRadioterapia from './views/terapias/radioterapia/03_o_que_esperar';
import ViewSinaisSintomas from './views/terapias/sinais_sintomas';
import ViewFebreSinaisSintomas from './views/terapias/sinais_sintomas/01_febre';
import ViewDorSintomas from './views/terapias/sinais_sintomas/02_dor';
import ViewFadigaCansacoSinaisSintomas from './views/terapias/sinais_sintomas/03_fadiga_cansaco';
import ViewNauseaVomitoSinaisSintomas from './views/terapias/sinais_sintomas/04_nausea_vomito';
import ViewDisturbiosSonoSinaisSintomas from './views/terapias/sinais_sintomas/05_disturbio_sono';
import ViewDiarreiaSinaisSintomas from './views/terapias/sinais_sintomas/06_diarreia';
import ViewConstipacaoSinaisSintomas from './views/terapias/sinais_sintomas/07_constipacao';
import ViewDisturbiosPsicoemocionaisSinaisSintomas from './views/terapias/sinais_sintomas/08_disturbio_psicoemocionais';
import ViewConvulsoesSinaisSintomas from './views/terapias/sinais_sintomas/09_convulsoes';
import ViewDisturbiosSensoriaisSinaisSintomas from './views/terapias/sinais_sintomas/10_disturbios_sensoriais';
import ViewMucoseOralSinaisSintomas from './views/terapias/sinais_sintomas/11_mucose_oral';
import ViewAnorexiaSinaisSintomas from './views/terapias/sinais_sintomas/12_anorexia';
import ViewNeuropatiasSinaisSintomas from './views/terapias/sinais_sintomas/13_neuropatias';
import ViewSangramentosSinaisSintomas from './views/terapias/sinais_sintomas/14_sangramentos';
import ViewFaltaArSinaisSintomas from './views/terapias/sinais_sintomas/15_falta_ar';
import ViewAlopeciaSinaisSintomas from './views/terapias/sinais_sintomas/16_alopecia';
import ViewNutricao from './views/nutricao';
import ViewPassosNutricao from './views/nutricao/01_passos';
import ViewMitosNutricao from './views/nutricao/02_mitos';
import ViewSondasNutricao from './views/nutricao/03_sondas';
import ViewBaixar from './views/baixar';

import { ViewReturnedInBackPress } from './features/backpress/returnedback';
import { useAppDispatch, useAppSelector } from './app/hooks/hooks';
import { alterarPagina, paginaSelector } from "./features/pagina_atual/paginaAtualSlice";

export const navigationRef = createNavigationContainerRef();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const navigation = useNavigation<any>();
  const [expandirBotaoTerapias, setExpandirBotaoTerapias] = useState<boolean>(false);
  const [expandirBotaoNutricao, setExpandirBotaoNutricao] = useState<boolean>(false);

  const btnExpandirBotaoTerapias = () => {
    setExpandirBotaoTerapias((prev) => !prev);
  };

  const btnExpandirBotaoNutricao = () => {
    setExpandirBotaoNutricao((prev) => !prev);
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <LinearGradient
        colors={['#fff', '#fef1f0']}
        style={styles.drawerHeader}
      >
        <Image 
          style={styles.drawerHeaderLogo} 
          source={require('./assets/logo_01.png')} 
        />
      </LinearGradient>

      {/* Início */}
      <View style={styles.viewStyle}>
        <TouchableOpacity                            
          activeOpacity={0.7}
          style={styles.touchStyle}
          onPress={() => {
            navigation.navigate('ViewInicio');
          }}
        >
          <Image style={styles.imgStyled} source={require('./assets/ico_nav_inicio.png')}/> 
          <Text style={styles.textStyle}>Início</Text>
        </TouchableOpacity>        
      </View>

      {/* Terapias */}
      <View style={styles.viewStyle}>
        <TouchableOpacity                            
          activeOpacity={0.7}
          style={styles.touchStyle}
          onPress={() => {
            navigation.navigate('ViewTerapias');
          }}
        >
          <Image style={styles.imgStyled} source={require('./assets/ico_nav_terapias.png')}/> 
          <Text style={styles.textStyle}>Terapias</Text>
        </TouchableOpacity>  
        <TouchableOpacity 
          style={styles.icoStyle}
          onPress={btnExpandirBotaoTerapias}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <SimpleLineIcons
            size={20}
            name={expandirBotaoTerapias ? 'arrow-up' : 'arrow-down'}
            color='#fea9a7'
          />    
        </TouchableOpacity>
      </View>

      {expandirBotaoTerapias && (
        <View>
          <View style={styles.viewSubStyle}>
            <TouchableOpacity                            
              activeOpacity={0.7}
              style={styles.touchStyle}
              onPress={() => {
                navigation.navigate('ViewQuimioterapia');
              }}
            >
              <Image style={styles.imgStyled} source={require('./assets/ico_nav_quimeo.png')}/> 
              <Text style={styles.textStyleSub}>Quimioterapia</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewSubStyle}>
            <TouchableOpacity                            
              activeOpacity={0.7}
              style={styles.touchStyle}
              onPress={() => {
                navigation.navigate('ViewRadioterapia');
              }}
            >
              <Image style={styles.imgStyled} source={require('./assets/ico_nav_radio.png')}/> 
              <Text style={styles.textStyleSub}>Radioterapia</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewSubStyle}>
            <TouchableOpacity                            
              activeOpacity={0.7}
              style={styles.touchStyle}
              onPress={() => {
                navigation.navigate('ViewSinaisSintomas');
              }}
            >
              <Image style={styles.imgStyled} source={require('./assets/ico_nav_sinais_sintomas.png')}/> 
              <Text style={styles.textStyleSub}>Sinais e sintomas</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Nutrição */}
      <View style={styles.viewStyle}>
        <TouchableOpacity                            
          activeOpacity={0.7}
          style={styles.touchStyle}
          onPress={() => {
            navigation.navigate('ViewNutricao');
          }}
        >
          <Image style={styles.imgStyled} source={require('./assets/ico_nav_nutricao.png')}/> 
          <Text style={styles.textStyle}>Nutrição</Text>
        </TouchableOpacity>  
        <TouchableOpacity 
          style={styles.icoStyle}
          onPress={btnExpandirBotaoNutricao}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <SimpleLineIcons
            size={20}
            name={expandirBotaoNutricao ? 'arrow-up' : 'arrow-down'}
            color='#fea9a7'
          />    
        </TouchableOpacity>      
      </View>

      {expandirBotaoNutricao && (
        <View>
          <View style={styles.viewSubStyle}>
            <TouchableOpacity                            
              activeOpacity={0.7}
              style={styles.touchStyle}
              onPress={() => {
                navigation.navigate('ViewPassosNutricao');
              }}
            >
              <Image style={styles.imgStyled} source={require('./assets/ico_nav_passos.png')}/> 
              <Text style={styles.textStyleSub}>Passos para uma alimentação saudável</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewSubStyle}>
            <TouchableOpacity                            
              activeOpacity={0.7}
              style={styles.touchStyle}
              onPress={() => {
                navigation.navigate('ViewMitosNutricao');
              }}
            >
              <Image style={styles.imgStyled} source={require('./assets/ico_nav_mitos_alimentacao.png')}/> 
              <Text style={styles.textStyleSub}>Os mitos da alimentação durante o tratamento do câncer</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewSubStyle}>
            <TouchableOpacity                            
              activeOpacity={0.7}
              style={styles.touchStyle}
              onPress={() => {
                navigation.navigate('ViewSondasNutricao');
              }}
            >
              <Image style={styles.imgStyled} source={require('./assets/ico_nav_sondas_alimentares.png')}/> 
              <Text style={styles.textStyleSub}>Sondas alimentares</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Para Baixar */}
      <View style={styles.viewStyle}>
        <TouchableOpacity                            
          activeOpacity={0.7}
          style={styles.touchStyle}
          onPress={() => {
            navigation.navigate('ViewBaixar');
          }}
        >
          <Image style={styles.imgStyled} source={require('./assets/ico_nav_para_baixar.png')}/> 
          <Text style={styles.textStyle}>Para baixar</Text>
        </TouchableOpacity>        
      </View>

      {/* Botão Sair */}
      <TouchableOpacity
        style={styles.exitButton}
        activeOpacity={0.7}
        onPress={() => BackHandler.exitApp()}
      >
        <Text style={styles.exitButtonText}>Sair</Text>
      </TouchableOpacity>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  drawerHeaderLogo: {
    width: '80%',
    height: 140,
    resizeMode: 'contain',
  },
  viewStyle: {
    width: '90%',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#96b9e0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewSubStyle: {
    width: '100%',
    backgroundColor: '#96b9e0',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imgStyled: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  textStyle: {
    marginLeft: 15,
    fontSize: 18, 
    fontWeight: '800',
    color: '#5e718b',
    flex: 1,
  },
  textStyleSub: {
    marginLeft: 15,
    fontSize: 16, 
    fontWeight: '800',
    color: '#fff',
    flex: 1,
  },
  icoStyle: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButton: {
    width: '90%',
    height: 48,
    borderRadius: 24,
    marginTop: 25,
    marginHorizontal: '5%',
    backgroundColor: '#fea9a7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  exitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});

export default function Main() {
  const dispatch = useAppDispatch();    
  const viewSel = useAppSelector(paginaSelector);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const onBackPress = () => {
      if (ready) {
        const nav = ViewReturnedInBackPress(viewSel!.id);
        if (nav.id > -1) {
          console.log('back press', nav);
          dispatch(alterarPagina(nav));
          if (navigationRef.isReady()) {
            navigationRef.navigate(nav.nome as never);
          }
          return true;
        } else {        
          BackHandler.exitApp();    
          return true;
        }  
      }
      return false;
    };

    const backHandlerSubscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );

    return () => backHandlerSubscription.remove();
  }, [ready, viewSel, dispatch]);

  return (
    <NavigationContainer 
      ref={navigationRef}
      onReady={() => {
        setReady(true);
      }}
    >
      <Drawer.Navigator 
        id="LeftDrawer"
        initialRouteName="TelaInicial"
        backBehavior='none'
        detachInactiveScreens={true}
        screenOptions={{
          headerTintColor: '#fff',            
          drawerPosition: 'left',
          drawerStyle: { height: '100%' },
          headerTransparent: true,
          drawerItemStyle: { display: 'none' },
        }}          
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >          
        <Drawer.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }} 
        />
        <Drawer.Screen
          name="ViewInicio"
          component={ViewInicio}
          options={{ title: 'Início', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewTerapias"
          component={ViewTerapias}
          options={{ title: 'Terapias' }}
        />
        <Drawer.Screen
          name="ViewQuimioterapia"
          component={ViewQuimioterapia}
          options={{ title: 'Quimioterapia' }}
        />
        <Drawer.Screen
          name="ViewOQueEhQuimioterapia"
          component={ViewOQueEhQuimioterapia}
          options={{ title: 'O que é quimioterapia?', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewComoEhFeitaQuimioterapia"
          component={ViewComoEhFeitaQuimioterapia}
          options={{ title: 'Como é feita?', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewOQueEsperarQuimioterapia"
          component={ViewOQueEsperarQuimioterapia}
          options={{ title: 'O que esperar?', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewRadioterapia"
          component={ViewRadioterapia}
          options={{ title: 'Radioterapia' }}
        />
        <Drawer.Screen
          name="ViewOQueEhRadioterapia"
          component={ViewOQueEhRadioterapia}
          options={{ title: 'O que é radioterapia?', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewComoEhFeitaRadioterapia"
          component={ViewComoEhFeitaRadioterapia}
          options={{ title: 'Como é feita?', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewOQueEsperarRadioterapia"
          component={ViewOQueEsperarRadioterapia}
          options={{ title: 'O que esperar?', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewSinaisSintomas"
          component={ViewSinaisSintomas}
          options={{ title: 'Sinais e Sintomas' }}
        />
        <Drawer.Screen
          name="ViewFebreSinaisSintomas"
          component={ViewFebreSinaisSintomas}
          options={{ title: 'Febre', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewDorSintomas"
          component={ViewDorSintomas}
          options={{ title: 'Dor', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewFadigaCansacoSinaisSintomas"
          component={ViewFadigaCansacoSinaisSintomas}
          options={{ title: 'Fadiga e cansaço', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewNauseaVomitoSinaisSintomas"
          component={ViewNauseaVomitoSinaisSintomas}
          options={{ title: 'Nausea e vômito', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewDisturbiosSonoSinaisSintomas"
          component={ViewDisturbiosSonoSinaisSintomas}
          options={{ title: 'Distúrbios do sono', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewDiarreiaSinaisSintomas"
          component={ViewDiarreiaSinaisSintomas}
          options={{ title: 'Diarréia', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewConstipacaoSinaisSintomas"
          component={ViewConstipacaoSinaisSintomas}
          options={{ title: 'Constipação', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewDisturbiosPsicoemocionaisSinaisSintomas"
          component={ViewDisturbiosPsicoemocionaisSinaisSintomas}
          options={{ title: 'Distúrbios psicoemocionais', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewConvulsoesSinaisSintomas"
          component={ViewConvulsoesSinaisSintomas}
          options={{ title: 'Convulsões', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewDisturbiosSensoriaisSinaisSintomas"
          component={ViewDisturbiosSensoriaisSinaisSintomas}
          options={{ title: 'Disturbios sensoriais', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewMucoseOralSinaisSintomas"
          component={ViewMucoseOralSinaisSintomas}
          options={{ title: 'Mucosite oral', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewAnorexiaSinaisSintomas"
          component={ViewAnorexiaSinaisSintomas}
          options={{ title: 'Anorexia', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewNeuropatiasSinaisSintomas"
          component={ViewNeuropatiasSinaisSintomas}
          options={{ title: 'Neuropatias', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewSangramentosSinaisSintomas"
          component={ViewSangramentosSinaisSintomas}
          options={{ title: 'Sangramentos', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewFaltaArSinaisSintomas"
          component={ViewFaltaArSinaisSintomas}
          options={{ title: 'Falta de ar', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewAlopeciaSinaisSintomas"
          component={ViewAlopeciaSinaisSintomas}
          options={{ title: 'Alopécia', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewNutricao"
          component={ViewNutricao}
          options={{ title: 'Nutrição' }}
        />
        <Drawer.Screen
          name="ViewPassosNutricao"
          component={ViewPassosNutricao}
          options={{ title: 'Passos para uma alimentação saudável', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewMitosNutricao"
          component={ViewMitosNutricao}
          options={{ title: 'Os mitos da alimentação durante o tratamento do câncer', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewSondasNutricao"
          component={ViewSondasNutricao}
          options={{ title: 'Sondas alimentares', headerTitleStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="ViewBaixar"
          component={ViewBaixar}
          options={{ title: 'Baixar', headerTitleStyle: { display: 'none' } }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
