# Nexo

Projeto React + TypeScript + Vite exportado do Figma Make e organizado para execução local e publicação no GitHub Pages.

## Rodar no computador

1. Instale o Node.js 22 ou superior: https://nodejs.org/
2. Abra esta pasta no VS Code.
3. No terminal integrado, execute:

   ```bash
   npm install
   npm run dev
   ```

4. Abra no navegador o endereço local mostrado no terminal.

## Publicar no GitHub e abrir pelo celular

1. No GitHub, crie um repositório novo chamado `nexo` (pode ser público).
2. Envie todos os arquivos e pastas deste projeto para a raiz do repositório. Inclua a pasta oculta `.github/workflows`.
3. Abra **Settings → Pages** e, em **Build and deployment**, selecione **GitHub Actions**.
4. Abra a aba **Actions** e aguarde o fluxo **Publicar Nexo no GitHub Pages** terminar com sucesso.
5. O endereço público aparecerá no fluxo ou em **Settings → Pages**. Abra esse link no celular.

Depois, cada atualização enviada para a branch `main` será publicada automaticamente.

Se preferir manter `Aula09` dentro do repositório `UC15`, não copie os arquivos para outro repositório. O workflow da raiz em [`.github/workflows/aula09-pages.yml`](../.github/workflows/aula09-pages.yml) publica esta pasta automaticamente; basta configurar **Settings → Pages → GitHub Actions** nesse repositório.

## Observação

O formulário de entrada é demonstrativo: o site não salva nem envia nome ou e-mail. O projeto precisa de conexão com a internet para carregar a fonte do Google Fonts; há fontes alternativas configuradas.
