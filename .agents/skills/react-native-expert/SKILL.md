---
name: react-native-expert
description: Especialista em arquitetura, modernização e boas práticas de React Native e Expo SDK.
---

# React Native Expert Skill

Esta skill define os padrões e fluxos de trabalho para modernização, desenvolvimento de interfaces e gerenciamento de estado em React Native.

## Diretrizes de Interface
1. **Componentes Nativos Puros**: Priorizar componentes essenciais de `react-native` (`View`, `Text`, `TouchableOpacity`, `Pressable`, `ScrollView`, `Image`, `StyleSheet`) com `StyleSheet.create` para melhor desempenho.
2. **Evitar Bibliotecas Obsoletas**: Não utilizar bibliotecas descontinuadas (como NativeBase ou UI kits legados que quebram com versões modernas do React).
3. **Gradientes e Ícones**: Utilizar `expo-linear-gradient` para gradientes de alta performance e `@expo/vector-icons` para ícones vetoriais.
4. **Fontes Customizadas**: Carregar fontes com o hook `useFonts` de `expo-font`.

## Diretrizes de Navegação e Estado
1. **React Navigation**: Utilizar navegadores modernos (`@react-navigation/drawer`, `@react-navigation/native-stack`) sem flags depreciadas.
2. **Ciclo de Vida do Redux**: Nunca realizar `dispatch` durante a renderização síncrona de componentes. Sempre sincronizar estados dentro de `useEffect` ou ouvintes de foco (`useFocusEffect`).
3. **Botão Voltar Nativo**: Tratar o `hardwareBackPress` do Android através de listeners limpos com limpeza no retorno do `useEffect`.
