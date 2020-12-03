# CK0236 - Tec. de Programação II


## Descrição do repositório

Este repositório será usado para controlar as versões de um projeto simples destinado à disciplina **Técnicas de programação 2 - (CK0236)**.

**Equipe**: Ubiratan Junior (397322)

## Sobre o Projeto

 O projeto consiste em um todo-list simples, que contará com uma interface gráfica onde o usuário poderá realizar CRUD de suas tarefas, além disso será possível mudar os estados das tarefas entre: A Fazer, Fazendo, Feito.


## Especificações Técnicas

  - **Estrutura do projeto**:
    - O BackEnd será composto de uma API Rest desenvolvida usando **NodeJS**.

    - O FrontEnd será desenvolvido usando os frameworks **Ionic** e **AngularJS**.

## Convenções de commits e branchs

### Convenções de commits:

Os commits deverão ser feitos seguindo a seguinte estrutura:

**\<tipo\>:** **\<descrição breve da atividade realizada\>**

Onde o **tipo** pode ser:

1. **fix**: Um commit do tipo **fix** soluciona um problema no código fonte.

2. **feat**: Um commit do tipo **feat** inclui um novo recurso no projeto.

3. **docs**: Um commit do tipo **docs** inclui uma melhoria que não se relacione diretamente com o código fonte (melhoria no README, mudança no changeLog e etc).

4. **test**: Um commit do tip **test** inclui novos testes ou correção de antigos.

### Convenções de branchs:  

- A branch ```main``` possui a última versão estável do projeto.

- A branch ```develop``` possui a versão mais atualizada do projeto que ainda está em estágio de desenvolvimento e/ou teste.

- As demais branchs devem ser criadas usando o seguinte padrão:

  **\<tipo\>/\<nome_descritivo_separado_por_underscores\>**

  Onde o **tipo** pode ser:

  1. **feature**: Uma  branch do tipo **feature** cria um ramo no repositório onde será adicionado um recurso no projeto.

  2. **bugfix**: Uma branch do tipo **bugfix** cria um ramo no repositório onde haverão alterações no código como refatoração ou correção de bugs.

  As novas branchs sempre devem ser criadas a partir da branch ```develop``` e ao terem suas atividades concluidas deve ser feito o merge com ```develop```, a branch ```main``` só é alterada através de merges com a branch ```develop``` sob revisão e teste das alterações.
