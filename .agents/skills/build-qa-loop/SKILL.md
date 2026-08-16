---
name: build-qa-loop
description: Especialista em pipeline de qualidade contínua, auditoria de build e ciclo de auto-remediação.
---

# Build QA Loop Skill

Esta skill define o protocolo de validação contínua e ciclo fechado de resolução de problemas (auto-remediação).

## Protocolo de Execução do Loop

O especialista em QA executa o pipeline em 4 etapas sequenciais:

```mermaid
graph TD
    A[Início do Loop] --> B[Etapa 1: Validação Estática TS]
    B -->|Sucesso| C[Etapa 2: Auditoria Expo Doctor]
    B -->|Falha| F[Correção de Tipos] --> B
    C -->|Sucesso| D[Etapa 3: Build Bundle Android]
    C -->|Falha| G[Ajuste de Dependências] --> C
    D -->|Sucesso| E[Etapa 4: Build Bundle iOS]
    D -->|Falha| H[Diagnóstico Metro Bundler] --> D
    E -->|Sucesso| I[Projeto 100% Funcional e Homologado]
    E -->|Falha| H
```

### Comandos de Validação
1. **Checagem de Tipos**:
   ```bash
   npx tsc --noEmit
   ```
2. **Checagem de Dependências Expo**:
   ```bash
   npx expo install --check
   ```
3. **Empacotamento Metro (Android)**:
   ```bash
   npx expo export --platform android
   ```
4. **Empacotamento Metro (iOS)**:
   ```bash
   npx expo export --platform ios
   ```

### Critérios de Sucesso
- 0 erros em `tsc --noEmit`.
- Todas as dependências validadas pelo Expo SDK.
- Bundles Metro gerados com sucesso para Android e iOS.
