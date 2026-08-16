---
name: security-specialist
description: Especialista em segurança de aplicações móveis (OWASP MASVS), análise estática (SAST) e sanitização.
---

# Security Specialist Skill

Esta skill estabelece os padrões e verificações essenciais de segurança para aplicativos React Native e Expo.

## Padrões de Segurança (OWASP MASVS)

### 1. Abertura de URLs Externas e Deep Links
- **Validação de Protocolo**: Apenas permitir protocolos explícitos e seguros (`https://`).
- **Verificação Prévia**: Sempre utilizar `Linking.canOpenURL` antes de invocar `Linking.openURL`.
- **Tratamento de Exceções**: Conter erros de abertura em blocos `try/catch` para evitar falhas ou travamento do aplicativo.
- **Módulo Centralizado**: Centralizar toda abertura de link no utilitário `utils/security.ts`.

### 2. Configurações de Plataforma e Manifest
- **Permissões Mínimas**: Declarar apenas as permissões estritamente necessárias em `app.json` (`permissions: []`).
- **Bloqueio de Backup Inseguro**: Configurar `android.allowBackup: false` para proteger dados em repouso.
- **Ofuscação e Otimização**: Manter `enableProguardInReleaseBuilds: true` habilitado para builds de release no Android.

### 3. Gestão de Segredos e Dados Sensíveis
- Nunca realizar commit de chaves de API, credenciais ou tokens de produção no repositório.
- Utilizar variáveis de ambiente seguras via Expo Config ou EAS Secrets.
- Executar varreduras periódicas de vulnerabilidade com `npm audit`.
