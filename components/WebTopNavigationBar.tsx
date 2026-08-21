import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../app/hooks/hooks';
import { alterarPagina, paginaSelector } from '../features/pagina_atual/paginaAtualSlice';
import { navigationRef } from '../Index';

export interface WebScreenItem {
  id: number;
  routeName: string;
  title: string;
}

// Fluxo de telas da sessão de Terapias
export const TERAPIAS_FLOW: WebScreenItem[] = [
  { id: 2, routeName: 'ViewTerapias', title: 'Terapias' },
  { id: 4, routeName: 'ViewQuimioterapia', title: 'Quimioterapia' },
  { id: 5, routeName: 'ViewOQueEhQuimioterapia', title: 'O que é Quimioterapia?' },
  { id: 6, routeName: 'ViewComoEhFeitaQuimioterapia', title: 'Como é feita?' },
  { id: 7, routeName: 'ViewOQueEsperarQuimioterapia', title: 'O que esperar?' },
  { id: 8, routeName: 'ViewRadioterapia', title: 'Radioterapia' },
  { id: 9, routeName: 'ViewOQueEhRadioterapia', title: 'O que é Radioterapia?' },
  { id: 10, routeName: 'ViewComoEhFeitaRadioterapia', title: 'Como é feita?' },
  { id: 11, routeName: 'ViewOQueEsperarRadioterapia', title: 'O que esperar?' },
  { id: 12, routeName: 'ViewSinaisSintomas', title: 'Sinais e Sintomas' },
  { id: 13, routeName: 'ViewFebreSinaisSintomas', title: 'Febre' },
  { id: 14, routeName: 'ViewDorSintomas', title: 'Dor' },
  { id: 15, routeName: 'ViewFadigaCansacoSinaisSintomas', title: 'Fadiga e Cansaço' },
  { id: 16, routeName: 'ViewNauseaVomitoSinaisSintomas', title: 'Náusea e Vômito' },
  { id: 17, routeName: 'ViewDisturbiosSonoSinaisSintomas', title: 'Distúrbios do Sono' },
  { id: 18, routeName: 'ViewDiarreiaSinaisSintomas', title: 'Diarreia' },
  { id: 19, routeName: 'ViewConstipacaoSinaisSintomas', title: 'Constipação' },
  { id: 20, routeName: 'ViewDisturbiosPsicoemocionaisSinaisSintomas', title: 'Distúrbios Psicoemocionais' },
  { id: 21, routeName: 'ViewConvulsoesSinaisSintomas', title: 'Convulsões' },
  { id: 22, routeName: 'ViewDisturbiosSensoriaisSinaisSintomas', title: 'Distúrbios Sensoriais' },
  { id: 23, routeName: 'ViewMucoseOralSinaisSintomas', title: 'Mucosite Oral' },
  { id: 24, routeName: 'ViewAnorexiaSinaisSintomas', title: 'Anorexia' },
  { id: 25, routeName: 'ViewNeuropatiasSinaisSintomas', title: 'Neuropatias' },
  { id: 26, routeName: 'ViewSangramentosSinaisSintomas', title: 'Sangramentos' },
  { id: 27, routeName: 'ViewFaltaArSinaisSintomas', title: 'Falta de Ar' },
  { id: 28, routeName: 'ViewAlopeciaSinaisSintomas', title: 'Alopécia' },
];

// Fluxo de telas da sessão de Nutrição
export const NUTRICAO_FLOW: WebScreenItem[] = [
  { id: 3, routeName: 'ViewNutricao', title: 'Nutrição' },
  { id: 29, routeName: 'ViewPassosNutricao', title: 'Passos Alimentação' },
  { id: 30, routeName: 'ViewMitosNutricao', title: 'Mitos Alimentação' },
  { id: 31, routeName: 'ViewSondasNutricao', title: 'Sondas Alimentares' },
];

export default function WebTopNavigationBar() {
  const { width } = useWindowDimensions();

  // O menu superior só é exibido na versão Web acessada por computadores/desktop (oculto no mobile web)
  const isMobileBrowser = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|webOS/i.test(navigator.userAgent || '');
  const isDesktopWeb = Platform.OS === 'web' && width >= 768 && !isMobileBrowser;

  if (!isDesktopWeb) {
    return null;
  }

  const dispatch = useAppDispatch();
  const paginaAtual = useAppSelector(paginaSelector);

  // Escuta mudanças de rota no NavigationContainer para sincronização imediata
  useEffect(() => {
    const unsubscribe = navigationRef.addListener('state', () => {
      const currentRoute = navigationRef.getCurrentRoute();
      if (currentRoute && currentRoute.name !== paginaAtual.nome) {
        const allItems = [...TERAPIAS_FLOW, ...NUTRICAO_FLOW];
        const found = allItems.find((i) => i.routeName === currentRoute.name);
        if (found) {
          dispatch(alterarPagina({ id: found.id, nome: found.routeName }));
        } else if (currentRoute.name === 'ViewInicio' || currentRoute.name === 'TelaInicial' || currentRoute.name === 'ViewBaixar') {
          const defaultId = currentRoute.name === 'TelaInicial' ? 0 : (currentRoute.name === 'ViewInicio' ? 1 : 32);
          dispatch(alterarPagina({ id: defaultId, nome: currentRoute.name }));
        }
      }
    });

    return unsubscribe;
  }, [paginaAtual.nome, dispatch]);

  // Identifica se a tela atual pertence à sessão de Terapias ou Nutrição
  let activeFlow: WebScreenItem[] | null = null;
  let sectionLabel = '';

  const indexInTerapias = TERAPIAS_FLOW.findIndex(
    (item) => item.routeName === paginaAtual.nome || item.id === paginaAtual.id
  );

  const indexInNutricao = NUTRICAO_FLOW.findIndex(
    (item) => item.routeName === paginaAtual.nome || item.id === paginaAtual.id
  );

  if (indexInTerapias >= 0) {
    activeFlow = TERAPIAS_FLOW;
    sectionLabel = 'Terapias';
  } else if (indexInNutricao >= 0) {
    activeFlow = NUTRICAO_FLOW;
    sectionLabel = 'Nutrição';
  }

  // O menu superior só é exibido nas opções Terapias e Nutrição
  if (!activeFlow) {
    return null;
  }

  const validIndex = activeFlow === TERAPIAS_FLOW ? indexInTerapias : indexInNutricao;
  const currentItem = activeFlow[validIndex];
  const isFirstScreen = validIndex === 0;
  const isLastScreen = validIndex === activeFlow.length - 1;

  // Botão da Esquerda: se for a primeira tela da sessão, volta ao Menu Principal
  const prevTarget: WebScreenItem = isFirstScreen
    ? { id: 1, routeName: 'ViewInicio', title: 'Menu Principal' }
    : activeFlow[validIndex - 1];

  // Botão da Direita: se for a última tela da sessão, exibe a opção de voltar ao Início
  const nextTarget: WebScreenItem = isLastScreen
    ? { id: 1, routeName: 'ViewInicio', title: 'Voltar ao Início' }
    : activeFlow[validIndex + 1];

  const navigateTo = (target: WebScreenItem) => {
    dispatch(alterarPagina({ id: target.id, nome: target.routeName }));
    if (navigationRef.isReady()) {
      navigationRef.navigate(target.routeName as never);
    }
  };

  return (
    <View style={styles.navBar}>
      {/* Botão Anterior / Menu */}
      <View style={styles.sideButtonWrapper}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.navButton, styles.prevButton]}
          onPress={() => navigateTo(prevTarget)}
        >
          <SimpleLineIcons
            name={isFirstScreen ? "home" : "arrow-left"}
            size={14}
            color="#5e718b"
            style={styles.buttonIconLeft}
          />
          <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">
            {prevTarget.title}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Indicador Central */}
      <View style={styles.centerIndicator}>
        <Text style={styles.sectionBadge}>
          {sectionLabel}
        </Text>
        <Text style={styles.currentTitle} numberOfLines={1}>
          {currentItem.title}
        </Text>
        <Text style={styles.progressText}>
          {validIndex + 1} de {activeFlow.length}
        </Text>
      </View>

      {/* Botão Próxima / Voltar ao Início */}
      <View style={styles.sideButtonWrapper}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.navButton,
            styles.nextButton,
            isLastScreen && styles.returnHomeButton
          ]}
          onPress={() => navigateTo(nextTarget)}
        >
          <Text
            style={[
              styles.buttonText,
              isLastScreen && styles.returnHomeText
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {nextTarget.title}
          </Text>
          <SimpleLineIcons
            name={isLastScreen ? "home" : "arrow-right"}
            size={14}
            color={isLastScreen ? "#ffffff" : "#5e718b"}
            style={styles.buttonIconRight}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: 56,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#d2d9e2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 999,
  },
  sideButtonWrapper: {
    flex: 1,
    maxWidth: 240,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#edeff3',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d2d9e2',
  },
  prevButton: {
    alignSelf: 'flex-start',
  },
  nextButton: {
    alignSelf: 'flex-end',
  },
  returnHomeButton: {
    backgroundColor: '#fea9a7',
    borderColor: '#fea9a7',
  },
  returnHomeText: {
    color: '#ffffff',
    fontWeight: '800',
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#5e718b',
    maxWidth: 165,
  },
  buttonIconLeft: {
    marginRight: 8,
  },
  buttonIconRight: {
    marginLeft: 8,
  },
  centerIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  sectionBadge: {
    fontSize: 10,
    fontWeight: '800',
    color: '#96b9e0',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  currentTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#fea9a7',
    textTransform: 'uppercase',
  },
  progressText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#96b9e0',
    marginTop: 1,
  },
});
