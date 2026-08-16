import { Linking, Alert } from 'react-native';

/**
 * Utilitário de segurança para abertura de links externos.
 * Aplica validação de protocolo HTTPS e checagem de suporte antes da abertura.
 */
export async function openSafeUrl(url: string, title?: string): Promise<boolean> {
  try {
    if (!url || typeof url !== 'string') {
      Alert.alert('Link inválido', 'O endereço informado não é válido.');
      return false;
    }

    const trimmedUrl = url.trim();

    // Validação estrita: somente URLs HTTPS são permitidas para evitar tráfego em texto claro e ataques de redirecionamento
    if (!trimmedUrl.startsWith('https://')) {
      Alert.alert(
        'Aviso de Segurança',
        'Por razões de segurança, apenas links seguros (HTTPS) podem ser abertos.'
      );
      return false;
    }

    const canOpen = await Linking.canOpenURL(trimmedUrl);
    if (!canOpen) {
      Alert.alert(
        'Não foi possível abrir o link',
        `Não foi encontrado um aplicativo compatível para abrir este conteúdo${title ? ` (${title})` : ''}.`
      );
      return false;
    }

    await Linking.openURL(trimmedUrl);
    return true;
  } catch (error) {
    console.error(`Erro ao abrir URL segura: ${url}`, error);
    Alert.alert('Erro', 'Ocorreu um erro ao tentar abrir o link externo.');
    return false;
  }
}
