import React, { useRef, useEffect, useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Modal, 
  PanResponder, 
  Platform, 
  useWindowDimensions 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../app/hooks/hooks';
import { alterarPagina, paginaSelector } from '../features/pagina_atual/paginaAtualSlice';
import { navigationRef } from '../Index';
import { TERAPIAS_FLOW, NUTRICAO_FLOW, WebScreenItem } from './WebTopNavigationBar';

const STORAGE_KEY = '@oncoped_has_seen_swipe_tip';

interface SwipeNavigationHandlerProps {
  children: React.ReactNode;
}

export default function SwipeNavigationHandler({ children }: SwipeNavigationHandlerProps) {
  const dispatch = useAppDispatch();
  const paginaAtual = useAppSelector(paginaSelector);
  const { width } = useWindowDimensions();

  const [showTutorial, setShowTutorial] = useState<boolean>(false);
  const activeFlowRef = useRef<WebScreenItem[] | null>(null);
  const nextTargetRef = useRef<WebScreenItem | null>(null);
  const prevTargetRef = useRef<WebScreenItem | null>(null);

  // Identifica dispositivos móveis (App Mobile ou Navegador Mobile)
  const isMobile = Platform.OS !== 'web' || width < 768 || (typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|webOS/i.test(navigator.userAgent || ''));

  // Atualiza as referências e checa se deve exibir o pop-up na primeira vez
  useEffect(() => {
    let flow: WebScreenItem[] | null = null;

    const indexInTerapias = TERAPIAS_FLOW.findIndex(
      (item) => item.routeName === paginaAtual.nome || item.id === paginaAtual.id
    );

    const indexInNutricao = NUTRICAO_FLOW.findIndex(
      (item) => item.routeName === paginaAtual.nome || item.id === paginaAtual.id
    );

    let currentIndex = -1;

    if (indexInTerapias >= 0) {
      flow = TERAPIAS_FLOW;
      currentIndex = indexInTerapias;
    } else if (indexInNutricao >= 0) {
      flow = NUTRICAO_FLOW;
      currentIndex = indexInNutricao;
    }

    activeFlowRef.current = flow;

    if (flow && currentIndex >= 0) {
      const isFirst = currentIndex === 0;
      const isLast = currentIndex === flow.length - 1;

      // Deslizar para a direita (Voltar)
      prevTargetRef.current = isFirst
        ? { id: 1, routeName: 'ViewInicio', title: 'Menu Principal' }
        : flow[currentIndex - 1];

      // Deslizar para a esquerda (Avançar / Retornar ao início se for a última tela)
      nextTargetRef.current = isLast
        ? { id: 1, routeName: 'ViewInicio', title: 'Menu Principal' }
        : flow[currentIndex + 1];

      // Se for mobile e entrou pela primeira vez em uma tela com gestos, checa se já viu a dica
      if (isMobile) {
        AsyncStorage.getItem(STORAGE_KEY).then((value) => {
          if (!value) {
            setShowTutorial(true);
          }
        }).catch(() => {
          // fallback silencioso
        });
      }
    } else {
      prevTargetRef.current = null;
      nextTargetRef.current = null;
    }
  }, [paginaAtual.nome, paginaAtual.id, isMobile]);

  const handleDismissTutorial = async () => {
    setShowTutorial(false);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // fallback silencioso
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Só ativa se estiver dentro das sessões de Terapias ou Nutrição e sem modal aberto
        if (!activeFlowRef.current || showTutorial) {
          return false;
        }

        const { dx, dy } = gestureState;
        // Identifica movimento horizontal intencional sem bloquear o scroll vertical
        return Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy) * 1.8;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (!activeFlowRef.current || showTutorial) {
          return;
        }

        const { dx, vx } = gestureState;

        // Deslizar para a esquerda (dx negativo -> Avançar para próxima tela)
        if (dx < -50 || (dx < -25 && vx < -0.35)) {
          const target = nextTargetRef.current;
          if (target) {
            dispatch(alterarPagina({ id: target.id, nome: target.routeName }));
            if (navigationRef.isReady()) {
              navigationRef.navigate(target.routeName as never);
            }
          }
        }
        // Deslizar para a direita (dx positivo -> Voltar para tela anterior)
        else if (dx > 50 || (dx > 25 && vx > 0.35)) {
          const target = prevTargetRef.current;
          if (target) {
            dispatch(alterarPagina({ id: target.id, nome: target.routeName }));
            if (navigationRef.isReady()) {
              navigationRef.navigate(target.routeName as never);
            }
          }
        }
      },
    })
  ).current;

  return (
    <View style={styles.wrapper} {...panResponder.panHandlers}>
      {children}

      {/* Pop-up Dica de Gestos */}
      <Modal
        transparent
        animationType="fade"
        visible={showTutorial}
        onRequestClose={handleDismissTutorial}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            {/* Ícone de Dica / Mãozinha */}
            <View style={styles.iconCircle}>
              <FontAwesome name="hand-pointer-o" size={30} color="#ffffff" />
            </View>

            {/* Título */}
            <Text style={styles.modalTitle}>Dica de Navegação</Text>

            {/* Descrição */}
            <Text style={styles.modalText}>
              Você pode <Text style={styles.boldText}>deslizar para a esquerda</Text> ou <Text style={styles.boldText}>direita</Text> para alternar entre as telas com facilidade!
            </Text>

            {/* Demonstração visual */}
            <View style={styles.gestureDemoContainer}>
              <View style={styles.demoItem}>
                <SimpleLineIcons name="arrow-left" size={14} color="#5e718b" />
                <Text style={styles.demoText}>Voltar</Text>
              </View>
              <View style={styles.demoDivider} />
              <View style={styles.demoItem}>
                <Text style={styles.demoText}>Avançar</Text>
                <SimpleLineIcons name="arrow-right" size={14} color="#5e718b" />
              </View>
            </View>

            {/* Botão de confirmação */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.confirmButton}
              onPress={handleDismissTutorial}
            >
              <Text style={styles.confirmButtonText}>Entendi 👍</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    zIndex: 999999,
  },
  modalCard: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 26,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fea9a7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    shadowColor: '#fea9a7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },
  modalTitle: {
    fontSize: 19,
    fontWeight: '900',
    color: '#5e718b',
    textTransform: 'uppercase',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    color: '#6e819b',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 16,
  },
  boldText: {
    fontWeight: '800',
    color: '#fea9a7',
  },
  gestureDemoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f1f4f8',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 20,
  },
  demoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  demoText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#5e718b',
    marginHorizontal: 6,
  },
  demoDivider: {
    width: 1,
    height: 20,
    backgroundColor: '#d2d9e2',
  },
  confirmButton: {
    width: '100%',
    backgroundColor: '#fea9a7',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#fea9a7',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  confirmButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
