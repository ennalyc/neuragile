import { Card } from "../types/card";

export const data: Card[] = [
    {
        id: 1,
        category: "Práticas Ágeis",
        relatedND: ["TDAH"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "01",
                title: "Pequenos Passos",
                text: "Divida tarefas maiores em partes menores e concretas para uma maior clareza e capacidade de gerenciamento e ou/execução, incluindo um cronograma com prazos para conclusão dessas tarefas menores.",
            },
        ],
        back: "Pessoas neurodivergentes, sobretudo com TDAH, podem apresentar dificuldades em funções executivas como planejamento, organização e memória de trabalho, como também em ações como iniciar tarefas e estimar o tempo. Por isso, pode ser importante a utilização de ferramentas que auxiliem a organizar e priorizar tarefas, tornando mais claro por onde começar.",
    },
    {
        id: 2,
        category: "Práticas Ágeis",
        relatedND: ["TDAH"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "02",
                title: "Dividir para Conquistar",
                text: "Para tornar uma Sprint Planning mais inclusiva, certifique-se de que a quebra de tarefas é clara e explícita para pessoas colaboradoras neurodivergentes, com definições claras do que é considerado como uma parte concluída.",
            },
        ],
        back: "Pessoas neurodivergentes, sobretudo com TDAH, podem apresentar dificuldades em funções executivas como planejamento organização e memória de trabalho, como também em ações como estimar o tempo ou concluir tarefas. Por isso, pode ser importante a utilização de estratégias que auxiliam a manter o foco nas tarefas, tornando mais fácil a sua conclusão.",
    },
    {
        id: 3,
        category: "Práticas Ágeis",
        relatedND: ["TDAH", "TEA"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "03",
                title: "Teste Primeiro",
                text: "Considere a aplicação do método ágil TDD (Test Driven Development), pois com ele é necessário escrever testes antes mesmo de uma funcionalidade ser implementada, forçando a quebra de tarefas da Sprint em subtarefas menores.",
            },
        ],
        back: "apresentam diferenças no processamento de estímulos ao lidar com tarefas que exigem as funções executivas de estratégia, planejamento e memória de trabalho, bem como na forma como lidam com o estresse.",
    },
    {
        id: 4,
        category: "Práticas Ágeis",
        relatedND: ["TDAH", "TEA"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "04",
                title: "Descarga Mental",
                text: "Para auxiliar a visualização do trabalho a ser executado, inicie anotando todas as tarefas necessárias em qualquer ordem, utilizando notas escritas, por áudio ou desenhadas, ao seu gosto. Escrever tudo numa lista pode ajudar a reduzir a carga mental ou auxiliar nos desafios de memória.",
            },
        ],
        back: "A dificuldade em relacionar as partes e o todo pode prejudicar a capacidade de pessoas neurodivergentes de decompor a implementação de uma feature em atividades menores. Diante dessa dificuldade de decomposição, pessoas colaboradoras neurodivergentes podem desenvolver crises de ansiedade, dar estimativas imprecisas ou adiar o início da tarefa.",
    },
    {
        id: 5,
        category: "Práticas Ágeis",
        relatedND: ["TDAH", "TEA"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "05",
                title: "Lote Focado",
                text: "Agrupe tarefas semelhantes da Sprint em “lotes” para evitar troca constante de contexto de trabalho, ou reserve mais tempo ininterrupto numa tarefa para alavancar o hiperfoco de pessoas colaboradoras neurodivergentes, auxiliando a sua conclusão."
            }
            ],
        back: "Uma característica neurodivergente é a dificuldade em relacionar as partes e o todo. Por exemplo, diante de uma imagem com vários detalhes, a pessoa com TEA tende a perceber apenas uma parte do todo (detalhe), enquanto a pessoa com TDAH tende a  não conseguir filtrar as partes e percebe o todo ao mesmo tempo. Por isso, há a necessidade de reforçadores consistentes para que seja possível estabelecer vínculos claros entre as divisões das partes e o todo.",
    },
    {
        id: 6,
        category: "Práticas Ágeis",
        relatedND: ["TDAH", "TEA"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "06",
                title: "Matriz 2X2",
                text: "Agrupe tarefas semelhantes da Sprint em “lotes” para evitar troca constante de contexto de trabalho, ou reserve mais tempo ininterrupto numa tarefa para alavancar o hiperfoco de pessoas colaboradoras neurodivergentes, auxiliando a sua conclusão."
            }
            ],
        back: "Melhore a identificação das prioridades utilizando técnicas como Matriz de Eisenhower ou Matriz 2x2 (com por exemplo, -Urgente / +Urgente, e -Importante / +Importante), MoSCoW (Must have, Should have, Could have e Won't have), entre outras.",
    },
    {
        id: 7,
        category: "Práticas Ágeis",
        relatedND: ["TDAH", "TEA"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "07",
                title: "Missão Monótona",
                text: "Na distribuição de tarefas numa Sprint Planning, identifique explicitamente e destaque tarefas tediosas e repetitivas, pois algumas pessoas colaboradoras neurodivergentes podem ou ter dificuldade em concluílas, ou ter preferência por fazer tais tarefas."
            }
            ],
        back: "Em estudo recente com pessoas neurodivergentes, a cerimônia Daily foi comumente apontada um gatilho de ansiedade por pessoas com TEA e/ou TDAH. Apesar da rotina ser um fator positivo para pessoas com TEA, a dificuldade de socialização e comunicação sobressai como fator detrator da daily, bem como, no caso de pessoas com TDAH, a dificuldade na gestão de tempo e manutenção do foco na produção de tarefas devido à elevação da ansiedade antes da daily, requerendo alternativas para o modelo usual de cerimônia.",
    },
    {
        id: 8,
        category: "Práticas Ágeis",
        relatedND: ["TDAH", "TEA"],
        relatedCP: ["Organização", "Planejamento"],
        front: [
            {
                cardNum: "08",
                title: "Estimativa Real",
                text: "Ajude a ajustar estimativas de entrega de pessoas colaboradoras neurodivergentes, pois a visualização/formulação de estimativas realistas pode ser um ponto de dificuldade."
            }
            ],
        back: "Cerimônias ágeis comumente envolvem apresentações orais e visuais simultaneamente, assim como um maior número de pessoas (como equipe técnica e clientes). Pessoas com TDAH podem apresentar desafios na chamada atenção dividida a dois estímulos diferentes, enquanto pessoas com TEA podem apresentar dificuldades na comunicação e interação social. Ambas as situações requerem um alto esforço mental para o controle funcional, podendo acarretar em fadiga cognitiva.",
    },
    {
        id: 9,
        category: "Práticas Ágeis",
        relatedND: ["TEA"],
        relatedCP: ["Organização"],
        front: [
            {
                cardNum: "09",
                title: "Função Flexível",
                text: "Ajude a ajustar estimativas de entrega de pessoas colaboradoras neurodivergentes, pois a visualização/formulação de estimativas realistas pode ser um ponto de dificuldade."
            }
            ],
        back: "Para muitas pessoas neurodivergentes, sobretudo com TEA devido à rigidez cognitiva, rotina, organização e previsibilidade são fatores de contribuem para o bem estar nas atividades diárias. Assim, uma rotina clara e previsível pode reduzir a ansiedade e o estresse, além de fornecer uma sensação de segurança e estabilidade, contribuindo também para o desenvolvimento da autonomia na execução de tarefas.",
    },
    {
        id: 10,
        category: "Práticas Ágeis",
        relatedND: ["TEA"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "10",
                title: "Rotina Estável",
                text: "Realize poucas mudanças e mantenha rotinas, horários de reuniões e cerimônias, pois um Time Ágil pode ser um local onde pessoas colaboradoras neurodivergentes encontram estabilidade, promovendo conforto psicológico e uma melhor performance."
            }
            ],
        back: "Pessoas neurodivergentes, sobretudo aquelas com TEA, frequentemente apresentam dificuldades de socialização e comunicação, podendo resultar em crise de ansiedade devido à necessidade de realização de tarefas que requerem essas habilidades, como por exemplo, uma reunião “cara-a-cara” com o cliente, ou o envio de uma mensagem ou email para pessoas externas ao time."
        },
        {
        id: 11,
        category: "Práticas Ágeis",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "11",
                title: "Rápido e Efetivo",
                text: "Busque encurtar a duração de sessões de programação em pares e de cerimônias como Daily e Sprint Review, para reduzir a chance de fadiga cognitiva em pessoas colaboradoras neurodivergentes."
            }
            ],
        back: "Pessoas neurodivergentes, sobretudo com TEA, podem apresentar uma lógica de planejamento diferente, bem como aquelas com TDAH frequentemente apresentam dificuldades nos níveis atencionais e percepção de tempo. Ambos os casos podem levar a dificuldades em estimar, controlar ou gerenciar a duração de realização de uma tarefa.Pessoas neurodivergentes, sobretudo com TEA, podem apresentar uma lógica de planejamento diferente, bem como aquelas com TDAH frequentemente apresentam dificuldades nos níveis atencionais e percepção de tempo. Ambos os casos podem levar a dificuldades em estimar, controlar ou gerenciar a duração de realização de uma tarefa."
        },
        {
        id: 12,
        category: "Práticas Ágeis",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "12",
                title: "Daily Escrita",
                text: "Possibilite a adaptação da cerimônia Daily presencial/online para a prática de uma daily escrita, utilizando ferramentas online de gestão de projetos ou comunicação (como um canal #daily no Slack) na qual as pessoas colaboradoras escrevam: o que fiz, o que estou fazendo, o que vou fazer, meus bloqueios."
            }
            ],
        back: "Pessoas com TEA frequentemente apresentam apego por tarefas repetitivas devido à chamada rigidez cognitiva, bem como pessoas com TDAH apresentam níveis mais baixos de dopamina, o que dificulta a motivação para iniciar ou concluir tarefas monótonas ou sem recompensa imediata, constituindo gatilhos para a procrastinação. Diante disso, identificar claramente tais tarefas pode auxiliar numa melhor escolha da pessoa a executá-la."
        },
        {
        id: 13,
        category: "Práticas Ágeis",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "13",
                title: "Daily 1:1",
                text: "Ofereça a possibilidade da pessoa colaboradora neurodivergente não participar da cerimônia Daily, fazendo um follow-up escrito ou 1:1 presencial/online com a liderança ao longo do dia."
            }
            ],
        back: "Pessoas com TEA podem enfrentar dificuldades com comunicação e interpretação de instruções, o que pode gerar insegurança em iniciar tarefas com dúvidas. Já pessoas com TDAH podem ter baixa autoconfiança em ambientes que exigem foco contínuo, evitando pedir ajuda por medo de julgamentos. A falta de um ambiente acolhedor e claro quanto à possibilidade de esclarecer qualquer tipo de dúvida, mesmo as mais simples, pode resultar em travamentos, isolamento ou erros evitáveis."
        },
        {
        id: 14,
        category: "Práticas Ágeis",
        relatedND: ["TEA"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "14",
                title: "Foco no Fim",
                text: "Teste agendar reuniões e cerimônias ágeis para o horário de final de expediente, em vez do período da manhã ou início da tarde, verificando encerrar o dia de trabalho com possibilidade de um momento posterior para redução do stress ou autorregulação de pessoas colaboradoras neurodivergentes."
             }
            ],
        back: "Pessoas neurodivergentes, sobretudo com TEA, podem vir a apresentar dificuldades não apenas na inicialização, mas também na conclusão de tarefas. Isto pode ocorrer tanto devido ao apego excessivo por precisão e excelência, quanto à condição de rigidez cognitiva, o que pode acarretar em um conforto psicológico em manter-se na tarefa que está e evitar um novo cenário de trabalho."
        },
        {
        id: 15,
        category: "Práticas Ágeis",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Planejamento"],
        front: [
            {
                cardNum: "15",
                title: "Reunião Informada",
                text: "Busque explicitar o motivo de uma reunião, para reduzir a ansiedade ou auxiliar no planejamento de pessoas colaboradoras neurodivergentes, bem como fornecer documentos previamente para permitir tempo de processamento antes de discussões."
            }
            ],
        back: "Pessoas neurodivergentes frequentemente apresentam variações nos níveis de foco e energia ao longo do dia, influenciadas por fatores como hiperfoco, sensibilidade sensorial e fadiga cognitiva. Exigir uma produtividade constante pode levar ao esgotamento, queda de desempenho e aumento da ansiedade. Reconhecer que o ritmo ideal de trabalho pode variar e permitir certa flexibilidade nos ciclos de realização de tarefas pode contribuir para um melhor aproveitamento do potencial de neurodivergentes."
    },
    {
        id: 16,
        category: "Práticas Ágeis",
        relatedND: ["TEA"],
        relatedCP: ["Auto-regulação"],
        front: [
            {
                cardNum: "16",
                title: "Bateria Recarregável",
                text: "Respeite diferentes ritmos de trabalho e apoie ciclos de trabalho baseados em energia para atender às necessidades e reduzir a fadiga cognitiva de pessoas colaboradoras neurodivergentes."
             }
            ],
        back: "Pessoas neurodivergentes, sobretudo com TEA, costumam requerer previsibilidade e planejamento, devido a sua rigidez cognitiva. Já pessoas com TDAH podem precisar de um tempo maior para processamento de informações e fornecimento de respostas."
    },
    {
        id: 17,
        category: "Práticas Ágeis",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Organização"],
        front: [
            {
                cardNum: "17",
                title: "Parada Obrigatória",
                text: "Observe se pessoas colaboradoras neurodivergentes encontram-se desperdiçando tempo em tarefas desnecessárias, realizando gold plating ou se comprometendo excessivamente com o trabalho, orientando-as sobre quando encerrar as tarefas."
             }
            ],
        back: "Devido ao alto esforço mental para manter o controle funcional diante de cerimônias ágeis geradoras de estresse, tanto pela dificuldade de socialização e comunicação em pessoas com TEA, quanto pela dificuldade em manutenção da concentração, atenção dividida, e memória de trabalho por pessoas com TDAH, frequentemente pessoas neurodivergentes precisam de um momento de descompressão para redução do estresse e/ou autorregulação emocional, logo após a reunião."
    },
    {
        id: 18,
        category: "Práticas Ágeis",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Comunicação"],
        front: [
            {
                cardNum: "18",
                title: "Pergunta Amiga",
                text: "Incentive e normalize a solicitação de esclarecimentos ou ajuda sobre a realização de tarefas, evitando ambiguidades e o travamento/isolamento de pessoas colaboradoras neurodivergentes."
            }
            ],
        back: "Em estudo recente com pessoas neurodivergentes, a cerimônia Daily foi comumente apontada um gatilho de ansiedade por pessoas com TEA e/ou TDAH. Apesar da rotina ser um fator positivo para pessoas com TEA, a dificuldade de socialização e comunicação sobressai como fator detrator da daily, bem como, no caso de pessoas com TDAH, a dificuldade na gestão de tempo e manutenção do foco na produção de tarefas devido à elevação da ansiedade antes da daily, requerendo alternativas para o modelo usual de cerimônia."
    },
    {
        id: 19,
        category: "Práticas Ágeis",
        relatedND: ["TDAH"],
        relatedCP: ["Comunicação"],
        front: [
            {
                cardNum: "19",
                title: "Fora da Caixa",
                text: "Esteja aberto a reformulações de idéias ou ao reconhecimento de que uma tarefa pode ser realizada de uma forma que você não havia considerado, pois pessoas neurodivergentes podem apresentar um modo diferente de raciocínio ou resolução de problemas."
            }
            ],
        back: "Pessoas com TDAH frequentemente apresentam dificuldades em funções executivas como organização e memória de trabalho, além de em ações como manutenção do nível atencional ou inicialização/finalização de tarefas. Isso pode requerer estratégias para a manutenção do seu engajamento e produtividade, como o pareamento com uma pessoa neurotípica. No entanto, tal estratégia pode ter efeito contrário em pessoas com TEA, por apresentarem dificuldades em socialização, muitas vezes preferindo o isolamento na execução de tarefas."
    },
    {
        id: 20,
        category: "Práticas Ágeis",
        relatedND: ["TDAH"],
        relatedCP: ["Comunicação"],
        front: [
            {
                cardNum: "20",
                title: "Dupla Dinâmica",
                text: `Crie o pareamento entre uma pessoa colaboradora neurodivergente e uma "buddie": buddies são membros de um mesmo Time Ágil que dão assistência a neurodivergentes em seu engajamento e produtividade diários, como em iniciar e manter o foco nas tarefas, bem como priorizar e gerenciar a carga de trabalho.`
             }
            ],
        back: "Pessoas neurodivergentes possuem um cérebro que funciona de um modo diferente da maioria, podendo ter uma mente criativa e menos restrita a padrões convencionais, e apresentando outras formas de raciocínio e de interação com o mundo. No trabalho, essas diferenças podem manifestar-se de modos distintos, como a capacidade de resolver problemas e ter ideias inovadoras."
    },
    {
        id: 21,
        category: "Comunicação e Socialização",
        relatedND: ["TEA"],
        relatedCP: ["Comunicação"],
        front: [
            {
                cardNum: "21",
                title: "Bem Claro",
                text: "Torne normas sociais explícitas, como num guia de integração, assim como verifique a compreensão e confirme regularmente se as comunicações são assimiladas conforme pretendido, evitando mal-entendidos com pessoas colaboradoras neurodivergentes."
            }
            ],
        back: "Pessoas neurodivergentes, sobretudo com TEA, podem apresentar dificuldades na comunicação e interação social, bem como pode, frequentemente, apresentar introversão. Tais dificuldades sociais e comunicativas requerem não apenas um alto esforço mental para o controle funcional durante cerimônias e reuniões, mas também podem necessitar de estratégias que promovam um maior conforto psicológico durante as atividades."
    },
    {
        id: 22,
        category: "Comunicação e Socialização",
        relatedND: ["TEA"],
        relatedCP: ["Comunicação"],
        front: [
            {
                cardNum: "22",
                title: "Fala Fácil",
                text: "Mantenha uma linguagem clara, acessível e, se possível, sem jargões para garantir que todas as pessoas colaboradoras neurodivergentes compreendam, independentemente da sua experiência ou formação."
            }
            ],
        back: "Para pessoas neurodivergentes, sobretudo com TEA, mensagens escritas (como por email, Slack WhastApp e similares) tornam-se um auxílio para interação e comunicação devido à natureza assíncrona e distância social, mitigando a ansiedade associada à comunicação em tempo real. No entanto, assim como nos telefonemas, o ato da chegada de mensagens escritas também pode tornar-se um gatilho de ansiedade para a pessoas neurodivergentes."
    },
    {
        id: 23,
        category: "Comunicação e Socialização",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Comunicação"],
        front: [
            {
                cardNum: "23",
                title: "Reforço Escrito",
                text: "Não faça muitas perguntas ou forneça instruções muito longas de modo puramente oral, aumentando o uso de comunicação escrita como reforço (também após reuniões)."
            }
            ],
        back: "Pessoas neurodivergentes podem apresentar ruídos na compreensão de informações e instruções, sobretudo quando puramente orais, por motivos distintos. Enquanto pessoas com TDAH podem apresentar dificuldades na manutenção do nível atencional devido ao fluxo de pensamentos paralelos, pessoas com TEA podem apresentar dificuldades na comunicação, com prejuízo na compreensão de gestos, contatos, expressões e outros aspectos da linguagem oral ou escrita."
    },
    {
        id: 24,
        category: "Comunicação e Socialização",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Comunicação"],
        front: [
            {
                cardNum: "24",
                title: "Lendo o Áudio",
                text: "A utilização de ferramentas com transcrição de mensagens de áudio, como Slack e Whatsapp, pode ajudar na comunicação com pessoas colaboradoras neurodivergentes."
            }
            ],
        back: "Pessoas neurodivergentes podem apresentar ruídos na compreensão de informações e instruções, sobretudo quando puramente orais, por motivos distintos. Enquanto pessoas com TDAH podem apresentar dificuldades na manutenção do nível atencional devido ao fluxo de pensamentos paralelos, pessoas com TEA podem apresentar dificuldades na comunicação, com prejuízo na compreensão de gestos, contatos, expressões e outros aspectos da linguagem oral ou escrita."
    },
    {
        id: 25,
        category: "Comunicação e Socialização",
        relatedND: ["TEA"],
        relatedCP: ["Comunicação"],
        front: [
            {
                cardNum: "25",
                title: "Direto ao Ponto",
                text: "Ao se comunicar por email ou mensagem com uma pessoa colaboradora neurodivergente: introduza o assunto no título/início do texto para reduzir ansiedade, seja bastante claro e específico (utilizar verbos para ações pode ajudar), mantenha-se breve e/ou topifique o assunto caso seja mais longo, buscando grifar palavras/partes importantes."
            }
            ],
        back: "Pessoas neurodivergentes, sobretudo com TEA, podem apresentar ruídos na compreensão de expressões da comunicação oral ou escrita, tendo dificuldades na comunicação e prejuízo na compreensão de ironia, sarcasmo, piadas, jargões e outros aspectos da linguagem."
    },
    {
        id: 26,
        category: "Comunicação e Socialização",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Comunicação"],
        front: [
            {
                cardNum: "26",
                title: "Câmera Livre",
                text: "Permita que pessoas colaboradoras neurodivergentes mantenham suas câmeras desligadas durante reuniões online, auxiliando na ansiedade social e compreendendo que câmera desligada não significa desinteresse ou desatenção."
            }
            ],
        back: "Pessoas neurodivergentes podem apresentar dificuldades na compreensão de regras sociais, ou de informações e instruções (sobretudo quando puramente orais). Enquanto pessoas com TDAH podem apresentar dificuldades na manutenção do nível atencional devido ao fluxo de pensamentos paralelos, pessoas com TEA podem apresentar dificuldades na comunicação, como prejuízo na compreensão de gestos e expressões, ou não ter certeza sobre quando falar e interromper pessoas em reuniões."
    },
    {
        id: 27,
        category: "Comunicação e Socialização",
        relatedND: ["TEA"],
        relatedCP: ["Comunicação"],
        front: [
            {
                cardNum: "27",
                title: "Ponte Social",
                text: "As pessoas neurotípicas pareadas como buddies também podem auxiliar a pessoa colaboradora neurodivergente na comunicação e socialização dentro da empresa, como no atendimento a clientes e no envio de mensagens/emails a outras pessoas colaboradoras as quais não conhecem."
            }
            ],
        back: "Em eventos sociais, reuniões ou encontros com um maior número de participantes, pessoas com TEA podem experimentar desafios relacionados à comunicação, interação social e hipersensibilidade sensorial, diminuindo sua capacidade de manter-se por muito tempo em um ambiente excessivamente estimulante sem acarretar em fadiga cognitiva e ansiedade social."
    },
    {
        id: 28,
        category: "Comunicação e Socialização",
        relatedND: ["TEA"],
        relatedCP: ["Comunicação"],
        front: [
            {
                cardNum: "28",
                title: "Sem Pressão",
                text: `Realize convites, mas busque compreender que algumas pessoas colaboradoras neurodivergentes podem preferir não participar de cerimônias ágeis ou eventos "sociais" do time/empresa, devendo ser consideradas tanto "team player" quanto aquelas que participam.`
            }
            ],
        back: "Assim com no caso das pessoas com TDAH, para auxílio na manutenção do foco e produtividade, o pareamento com pessoas neurotípicas mais familiares pode auxiliar pessoas com TEA com dificuldades de interação social, diminuindo gatilhos de ansiedade na comunicação interna e externa à empresa."
    },
    {
        id: 29,
        category: "Liderança e Empresa",
        relatedND: ["TEA"],
        relatedCP: ["Organização"],
        front: [
            {
                cardNum: "29",
                title: "Gestão Empática",
                text: "Promova um tratamento individualizado e com adaptações claras a pessoas lideradas neurodivergentes, mantendo as adaptações bem informadas à empresa (criação de um espaço seguro psicológico)."
            }
            ],
        back: "O deslocamento até o local de trabalho e a permanência em ambientes presenciais podem representar fontes significativas de estresse para pessoas neurodivergentes, sobretudo com TEA. Dificuldades como hipersensibilidade sensorial, mudanças de rotina, interações sociais inesperadas ou variações no nível de energia mental ao longo do dia podem comprometer o bem-estar e a produtividade no contexto presencial."
    },
    {
        id: 30,
        category: "Liderança e Empresa",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Organização"],
        front: [
            {
                cardNum: "30",
                title: "Foco em Resultado",
                text: `Busque sempre avaliar o desempenho de pessoas lideradas neurodivergentes pela sua produtividade, não pelo “ritmo e velocidade” na realização de tarefas, e/ou "sensação de presença/participação" nas atividades do time ou da empresa.`
            }
            ],
        back: "A ausência de controle sobre ambientes de trabalho compartilhados pode pode gerar crise de ansiedade, fadiga cognitiva, distração ou desconforto em pessoas neurodivergentes,, pois aquelas com TEA podem apresentar ansiedade social diante de muitas pessoas ou hipersensibilidade sensorial a determinadas luzes, tipos de ruídos e níveis de temperatura, enquanto as com TDAH podem facilmente ter seu foco desviado por fatores como socialização constante."
    },
    {
        id: 31,
        category: "Liderança e Empresa",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Organização"],
        front: [
            {
                cardNum: "31",
                title: "Foco em Resultado",
                text: "Identifique necessidades de pessoas lideradas neurodivergentes e assuma a responsabilidade pela solicitação e articulação de adaptações com demais áreas da empresa, evitando a carga total sobre elas para que enfrentarem as negociações ou busquem suas próprias soluções."
            }
            ],
        back: "Para pessoas neurodivergentes, mudanças frequentes de colegas de time podem representar desafios adicionais relacionados à socialização, comunicação interpessoal e à previsibilidade das interações. Pessoas com TEA, por exemplo, podem levar mais tempo para estabelecer segurança emocional e compreender dinâmicas sociais no novo time, enquanto as com TDAH podem se beneficiar de relações já estabelecidas para manter foco e engajamento."
    },
    {
        id: 32,
        category: "Liderança e Empresa",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Organização"],
        front: [
            {
                cardNum: "32",
                title: "Alocação Produtiva",
                text: "Em modelos de trabalho projetizados, se possível, busque manter pessoas lideradas neurodivergentes alocadas junto a colegas que já têm familiaridade, pois isto pode auxiliar na comunicação, socialização, engajamento e produtividade."
            }
            ],
        back: "Para que pessoas neurodivergentes tenham acesso a adaptações de ambiente/modelo de trabalho, é comum que precisem solicitar ao RH da empresa. Esse processo pode ser especialmente desgastante para pessoas que têm dificuldades de comunicação (TEA) ou de planejamento e execução de negociações (TDAH). Ter que negociar escrita ou pessoalmente pode gerar sobrecarga emocional e levar até à desistência do pedido ou do próprio trabalho."
    },
    {
        id: 33,
        category: "Liderança e Empresa",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Organização"],
        front: [
            {
                cardNum: "33",
                title: "Lugar Reservado",
                text: "Possibilite a reserva de uma sala ou ambiente de trabalho presencial em separado para pessoas neurodivergentes, com possibilidades de controles como luz, temperatura e ergonomia de mobiliário. Prover fones canceladores de ruído também ajudam na sensação de controle, conforto e segurança física e psicológica."
            }
            ],
        back: "Pessoas neurodivergentes podem apresentar estilos de trabalho diferentes, como pausas frequentes para autorregulação (TDAH) ou preferências por interações mais objetivas e silenciosas (TEA). Avaliar desempenho com base em velocidade de produção ou sinais de engajamento (como falas em reuniões), pode gerar avaliações injustas e mascarar a real contribuição da pessoa neurodivergente. Focar na qualidade técnica na entrega de resultados, respeitando o modo de funcionamento individual, garante uma avaliação mais justa e alinhada com a diversidade e inclusão nos times."
    },
    {
        id: 34,
        category: "Liderança e Empresa",
        relatedND: ["TEA", "TDAH"],
        relatedCP: ["Organização"],
        front: [
            {
                cardNum: "34",
                title: "100% Remoto",
                text: "Se possível, possibilite o trabalho 100% remoto a pessoas lideradas neurodivergentes, ou diminua drasticamente a necessidade de comparecimento presencial (criação de um espaço seguro físico e psicológico)."
            }
            ],
        back: "Pessoas neurodivergentes possuem necessidades específicas que podem não ser contempladas por práticas padronizadas de gestão, gerando sensação de inadequação ao time. Ainda, quando adaptações não são comunicadas pela liderança à empresa, há risco de instabilidade e insegurança nas pessoas lideradas. Um ambiente com respeito à individualidade e clareza sobre as adaptações acordadas pode fortalecer a inclusão e o bem-estar das pessoas neurodivergentes na empresa."
    },
    ]