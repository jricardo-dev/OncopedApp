import { useEffect } from 'react';
import { BackHandler } from 'react-native';

/**
 * Hook utilitário para escutar o botão de voltar físico no Android
 */
export function useBackButton(handler: () => boolean) {
  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', handler);
    return () => subscription.remove();
  }, [handler]);
}