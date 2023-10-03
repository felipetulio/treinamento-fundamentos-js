# Treinamento Fundamentos de Javascript

Este repositório contém materiais e códigos básicos para ensino da linguagem Javascript a pessoas desenvolvedoras iniciantes.


## Preparando o ambiente de desenvolvimento
Antes de qualquer coisa, é importante ressaltar que este processo foi realizado no OpenSuse Leap 15.4 e 15.5. É possível que versões antigas ou mais recentes apresentem alterações no processo.

## Passo a passo para instalação do Node.js no OpenSuse

1. Você tem duas opções: baixar o arquivo instalável no site oficial do [Node.js](https://nodejs.org/pt-br/download) ou instalar via gerenciador de pacotes. Aqui, vamos instalar via gerenciador de pacotes `zypper`.
2. Abra o terminal (`Ctrl + Alt + t`).
3. Digite o comando `sudo zypper install nodejs18`.
    - *Obs: Substitua o número 18 pela versão do Node que você deseja instalar. Instalei a versão 18 porque era a mais atual da ferramenta quando o README foi criado.*
4. Para confirmar se a instalação deu certo, digite no terminal `node --version` ou `node -v`. Será apresentada a versão instalada do Node.js em seu sistema.

## Passo a passo para instalação do VS Code no OpenSuse

1. Abra o terminal (`Ctrl + Alt + t`).
2. Primeiro, importe os pacotes do VS Code por meio do gerenciador de pacotes `RPM`. Digite o comando: `sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc`
3. Em seguida, adicione o repositório de pacotes da Microsoft no gerenciador `Zypper`. Para isso, digite: `sudo zypper addrepo https://packages.microsoft.com/yumrepos/vscode vscode`
4. Atualize o repositório `zypper` com o comando: `sudo zypper refresh`
5. Por fim, instale o VS Code com o comando: `sudo zypper install code`

### Pasta js-base

É a pasta mais básica desse repositório. Ela contém códigos para apresentação de tipos de variáveis primitivas em JS.

### Pasta js-arrays

É a pasta com códigos simples para manipulação de arrays em JS.
