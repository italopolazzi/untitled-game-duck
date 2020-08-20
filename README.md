---
title: "UntitledGameDuck: Um jogo de simulação de vida em JavaScript + React + Grommet"
resume: Baseado nos jogos de simulação de vida, como The Sims, Tamagotchi e Pou, em UntitledGameDuck o jogador deve cuidar de um animal de estimação virtual
live_demo: https://untitled-game-duck.web.app/
tags: [React, Grommet, AfterEffects, JavaScript, Game, Figma]
---

## Descrição do jogo

Um jogo desenvolvido com **JavaScript**, utilizando componentes [**React**](https://pt-br.reactjs.org/) e estilizado com a [***component library* Grommet**](https://v2.grommet.io/) (styled components), baseado nos jogos de simulação de vida, como [**The Sims**](https://wikipedia.org/wiki/The_Sims), [**Tamagotchi**](https://wikipedia.org/wiki/Tamagotchi) e [**Pou**](https://wikipedia.org/wiki/Pou), em que o jogador deve cuidar de um animal de estimação virtual (inicialmente um pato), mantendo suas necessidades em níveis positivos, para que o humor do bichinho mantenha-se bom e não termine em um trágico "game over".

Implementado como parte de estudos independentes para aprimoramento dos conhecimentos de UI, Web Components e do framework React.

Visualmente elaborado com um design [**neuromórfico**](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6), em botões e containers, e [**plano**](https://wikipedia.org/wiki/Flat_design) para ícones, animações e emoticons.

As animações do personagem e o próprio foram idealizadas para serem simples e repetitivas, com formas geométricas básicas, permitindo o desenvolvimento utilizando transformações com CSS e Javascript, sem a necessidade de engines ou programas complexos para desenvolvimento de jogos. As ilustrações foram feitas utilizando o software **Illustrator** e transferidas para o **AfterEffects**, este possui um plugin chamado [**BodyMovin**](https://aescripts.com/bodymovin/) que permite a exportação da animação como um objeto JSON para ser renderizado na web ou em aplicações utilizando a biblioteca [**Lottie**](https://airbnb.design/lottie/).

## Estória de usuário

* O jogador poderá controlar um personagem que será 1 animal de estimação
* O personagem terá 3 vidas
* As vidas decaem se o humor reduzir totalmente
* O jogo termina se as vidas esgotarem
* O jogador deve poder ver uma fila de ações a serem executadas
* Deve ser possível visualizar a porcentagem de cada necessidade
* Deve ser possível adicionar ações à fila se esta não estiver cheia
* A fila de ações se torna cheia ao total de 6 ações adicionadas
* Deve ser possível cancelar ações que estejam na fila de execução
* As necessidades são bexiga, fome, higiene, sono, diversão e social
* Deve haver 4 tempos: pausa e velocidades 1, 2 e 3
* O humor do personagem deve ser alterado por modificadores
* Os modificadores devem representar estados extremos das necessidades (ex. "Com muito sono")
* Devem haver no mínimo 7 animações, uma para cada ação em execução e uma extra para o estado em repouso
* Deve ser possível salvar o jogo localmente
* As horas devem passar como minutos (24 horas no jogo é igual à 24 minutos na realidade)

## Detalhes de implementação

Utilizei React Redux para gerenciar os estados. Ao iniciar um novo jogo o objeto, a seguir, é definido como *default* para a *store* como estado inicial:

``` js
const state = {
  // as mensagens que são mostradas como notificações durante o jogo
  global_messages: [],
  // a velocidade atual do jogo
  current_speed: 1,
  // as seis necessidades do personagem
  needs: { ...needs },
  // a fila de ações que devem ser executadas para preencher as necessidades
  actions: [],
  // vidas disponíveis para o personagem
  lifes: 3,
  // estado do personagem, o jogo executa enquanto 'ALIVE' e para quando 'DEAD'
  status: 'ALIVE',
  // humor do personagem contendo o valor, a legenda e os modificadores (que inicialmente estará vazio)
  mood: {
    value: 10,
    label: 'unhappy',
    mods: {
      sad: {
        value: -10,
        timeout: 10000,
        emoji: '😥',
        label: 'sad',
        description: 'Duck is sad'
      },
      ...
    }
  }
}
```
Se o usuário optar por carregar um jogo salvo, o *reducer* recebe um estado anteriormente salvo no *localStorage*.

As atualizações do estado são feitas a cada segundo, disparadas por um componente chamado **GameRunner**. Este componente atualmente apenas executa uma ação e pode parecer dispensável, porém foi pensado para em atualizações futuras mostrar diferentes estilos para a interface. 

``` js
const GameRunner = ({ updateGame, game_state }) => {

  useEffect(() => {
    const interval = setInterval(() => {
      updateGame(game_state)
    }, 1000);
    return () => clearInterval(interval)

  }, [game_state])


  return <Text weight="bold">{game_state.current_speed}</Text>
}
```

As atualizações ficam por conta da *action* "updateGame", que é uma função encarregada de disparar multiplos *side effects* no estado atual do jogo, como: 
* verificar o total de vidas
* atualizar as necessidades
* verificar as necessidades em níveis extremos
* remover a ação atual do ínicio da fila se ela cumpriu seu objetivo
* gerar modificadores de humor baseados nas necessidades
* atualizar o humor

``` js
export const updateGame = state => {
  return dispatch => {
    if (state.lifes === 0) {
      dispatch(killDuck())
    } else {
      const current_action = getCurrentAction(state, dispatch)
      const updated_needs = updateNeeds(state, current_action)

      const border_keys = getBorderNeedsKeys(updated_needs)
      removeCurrentActionIfFullfied(current_action, border_keys, dispatch)

      const mood_mods = getMoodMods(border_keys)
      const updated_mood = updateMood(mood_mods, state.mood, dispatch)

      if (updated_mood.value <= 0) {
        dispatch(decrementLifes())
      } else {
        dispatch(setNeeds(updated_needs))
        dispatch(setMood(updated_mood))
      }
    }
  }
}
```

## Implementações futuras

* Adicionar sons na execução de ações e animações
* Adicionar modificadores de humor com base na temperatura
* Adicionar customização de traços de personalidade (exemplo: "Dorminhoco")
* Novos personagens e customização dos mesmos
* Temas da interface
* Salvamento remoto
* Pontos de experiência e recompensas
* Atalhos de teclado
* Traduções de textos


## Notas sobre a versão de demostração atual

* <del>Apenas as animações para higienização e alimentação foram implementadas</del>
* O componente que mostra o tempo e dia atual é estático
* O botão de cura não executa nenhuma ação ainda
* Há alguns erros de interface, como a barra de rolagem aparecendo quando se adiciona uma nova ação
* Alguns efeitos sonoros, como o de notificação e de clique, já foram adicionados
