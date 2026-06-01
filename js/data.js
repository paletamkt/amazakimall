/* ── CHECKLISTS DATA ── */
const CHECKLISTS = [
  {
    id: 1, num: '01', scope: 'marketing',
    title: 'Briefing e Informações do Empreendimento',
    objective: 'Garantir que a Paleta tem tudo que precisa para iniciar a ativação',
    responsible: 'Paleta + Construtora Arruda',
    phases: [
      { label: 'FASE 1 — Antes da reunião de kickoff', items: [
        { text: 'Confirmar data prevista de entrega da obra', type: 'A' },
        { text: 'Confirmar se a administradora já existe ou está sendo criada', type: 'A' },
        { text: 'Confirmar número total de unidades, metragens e andares', type: 'A' },
      ]},
      { label: 'FASE 2 — Reunião de kickoff', items: [
        { text: 'Realizar reunião de kickoff com o Robério', type: 'A' },
        { text: 'Registrar visão do CEO sobre o posicionamento do Amazaki', type: 'E' },
        { text: 'Confirmar data prevista de lançamento / início de captação de investidores', type: 'A' },
        { text: 'Confirmar perfil de locatário esperado (restaurante, loja, serviço)', type: 'A' },
        { text: 'Identificar âncoras comerciais previstas', type: 'A' },
        { text: 'Confirmar orçamento disponível para tráfego pago', type: 'A' },
      ]},
      { label: 'FASE 3 — Até 4 dias após o kickoff', items: [
        { text: 'Receber plantas baixas de todas as tipologias de salas', type: 'E' },
        { text: 'Receber memorial descritivo do empreendimento', type: 'E' },
        { text: 'Receber fotos do terreno e entorno atual', type: 'E' },
        { text: 'Confirmar condições de pagamento disponíveis', type: 'A' },
        { text: 'Confirmar estimativa de valor de aluguel por m²', type: 'A' },
        { text: 'Receber mapeamento de concorrentes que a construtora já tem', type: 'E' },
        { text: 'Receber informações sobre histórico da administradora (se houver)', type: 'E' },
      ]},
      { label: 'FASE 4 — Quando disponível (não bloqueia o início)', items: [
        { text: 'Receber tabela de preços ou faixa de valor por m²', type: 'E' },
        { text: 'Receber renders ou perspectivas externas/internas', type: 'E' },
        { text: 'Confirmar modelo de gestão diária do mall', type: 'A' },
        { text: 'Confirmar vagas de garagem por unidade', type: 'A' },
      ]},
    ]
  },
  {
    id: 2, num: '02', scope: 'marketing',
    title: 'Identidade Visual e Comunicação',
    objective: 'Garantir que o Amazaki tem uma identidade visual definida antes de qualquer material ser produzido',
    responsible: 'Paleta + Construtora Arruda',
    phases: [
      { label: 'DEFINIÇÃO', items: [
        { text: 'Confirmar se já existe logo e identidade visual do Amazaki', type: 'A' },
        { text: 'Definir direção estética da marca (temática japonesa, moderna, híbrida)', type: 'A' },
        { text: 'Receber referências visuais aprovadas pelo Robério', type: 'E' },
        { text: 'Definir paleta de cores, tipografia e tom visual', type: 'A' },
      ]},
      { label: 'PRODUÇÃO', items: [
        { text: 'Desenvolver ou validar logo do Amazaki', type: 'E' },
        { text: 'Criar manual de identidade visual básico', type: 'E' },
        { text: 'Definir template padrão para redes sociais', type: 'E' },
        { text: 'Definir template para materiais impressos (folder, banner)', type: 'E' },
        { text: 'Aprovação da identidade visual pelo Robério', type: 'A' },
      ]},
      { label: 'APLICAÇÃO', items: [
        { text: 'Aplicar identidade visual na landing page', type: 'A' },
        { text: 'Aplicar identidade visual nos materiais comerciais', type: 'A' },
        { text: 'Aplicar identidade visual nas peças de tráfego pago', type: 'A' },
        { text: 'Definir layout do tapume com comunicação visual do Amazaki', type: 'E' },
        { text: 'Definir layout do totem externo do mall', type: 'E' },
      ]},
    ]
  },
  {
    id: 3, num: '03', scope: 'marketing',
    title: 'Presença Digital',
    objective: 'Estruturar todos os canais digitais do Amazaki antes do lançamento',
    responsible: 'Paleta',
    phases: [
      { label: 'CONTAS E ACESSOS', items: [
        { text: 'Verificar se redes sociais do Amazaki já existem ou criar do zero', type: 'A' },
        { text: 'Criar perfil no Instagram do Amazaki', type: 'A' },
        { text: 'Criar página no Facebook do Amazaki', type: 'A' },
        { text: 'Definir e registrar domínio da landing page', type: 'A' },
        { text: 'Criar e-mail comercial do empreendimento', type: 'A' },
        { text: 'Configurar conta de Meta Ads (ou vincular existente)', type: 'A' },
        { text: 'Configurar conta de Google Ads (se aplicável)', type: 'A' },
      ]},
      { label: 'CONFIGURAÇÃO', items: [
        { text: 'Instalar pixel do Meta na landing page', type: 'A' },
        { text: 'Configurar Google Tag Manager', type: 'A' },
        { text: 'Integrar formulário da landing page ao CRM', type: 'A' },
        { text: 'Configurar notificação de lead em tempo real (WhatsApp/e-mail)', type: 'A' },
        { text: 'Configurar perfil do WhatsApp Business do Amazaki', type: 'A' },
      ]},
      { label: 'CONTEÚDO INICIAL', items: [
        { text: 'Preencher bio e informações dos perfis nas redes sociais', type: 'A' },
        { text: 'Publicar primeiros 3 posts de apresentação do Amazaki', type: 'E' },
        { text: 'Configurar mensagem automática de boas-vindas no WhatsApp Business', type: 'A' },
        { text: 'Definir frequência e calendário inicial de postagens', type: 'E' },
      ]},
    ]
  },
  {
    id: 4, num: '04', scope: 'marketing',
    title: 'Lançamento',
    objective: 'Garantir que todas as ações de marketing para o lançamento estejam prontas e coordenadas',
    responsible: 'Paleta + Construtora Arruda',
    phases: [
      { label: 'PRÉ-LANÇAMENTO', items: [
        { text: 'Definir data oficial do lançamento com o Robério', type: 'A' },
        { text: 'Definir formato do lançamento (evento, digital ou híbrido)', type: 'A' },
        { text: 'Criar campanha de aquecimento nas redes sociais (teaser)', type: 'E' },
        { text: 'Ativar lista de espera na landing page antes do lançamento', type: 'A' },
        { text: 'Disparar campanha de tráfego pago de pré-lançamento', type: 'A' },
        { text: 'Preparar lista de convidados / prospects para o evento', type: 'E' },
      ]},
      { label: 'DIA DO LANÇAMENTO', items: [
        { text: 'Publicar conteúdo de lançamento nas redes sociais', type: 'A' },
        { text: 'Ativar campanhas de tráfego pago com verba de lançamento', type: 'A' },
        { text: 'Garantir presença de equipe comercial para atender leads', type: 'A' },
        { text: 'Registrar o evento em foto e vídeo para conteúdo posterior', type: 'E' },
      ]},
      { label: 'PÓS-LANÇAMENTO', items: [
        { text: 'Publicar conteúdo de repercussão do lançamento', type: 'E' },
        { text: 'Seguir up com todos os leads captados no evento', type: 'A' },
        { text: 'Avaliar performance das campanhas e ajustar', type: 'A' },
        { text: 'Produzir relatório de resultados do lançamento', type: 'E' },
      ]},
    ]
  },
  {
    id: 5, num: '05', scope: 'marketing',
    title: 'Materiais Comerciais',
    objective: 'Produzir todos os materiais que o time comercial vai usar para apresentar o Amazaki ao investidor',
    responsible: 'Paleta',
    phases: [
      { label: 'MATERIAIS DIGITAIS PRIORITÁRIOS', items: [
        { text: 'Produzir estudo de rentabilidade para o investidor', type: 'E' },
        { text: 'Produzir folder digital (1 página) para envio por WhatsApp', type: 'E' },
        { text: 'Produzir apresentação comercial completa (PDF/PowerPoint)', type: 'E' },
        { text: 'Criar modelo de proposta de investimento personalizada', type: 'E' },
      ]},
      { label: 'CONTEÚDO PARA REDES SOCIAIS', items: [
        { text: 'Produzir pack de posts de lançamento (mínimo 6 peças)', type: 'E' },
        { text: 'Produzir sequência de stories de lançamento (3 a 5)', type: 'E' },
        { text: 'Produzir vídeo de apresentação do empreendimento', type: 'E' },
        { text: 'Produzir peças para campanhas de tráfego pago', type: 'E' },
      ]},
      { label: 'MATERIAIS DE SUPORTE COMERCIAL', items: [
        { text: 'Criar script de abordagem para o time comercial', type: 'E' },
        { text: 'Criar FAQ do investidor (perguntas frequentes com respostas)', type: 'E' },
        { text: 'Configurar assinatura de e-mail do time comercial', type: 'E' },
        { text: 'Aprovação de todos os materiais pelo Robério antes de distribuir', type: 'A' },
      ]},
    ]
  },
  {
    id: 6, num: '06', scope: 'operacional',
    title: 'Jurídico e Documental',
    objective: 'Garantir que toda a estrutura legal do Amazaki está resolvida antes da operação',
    responsible: 'Construtora Arruda',
    phases: [
      { label: 'ESTRUTURA JURÍDICA', items: [
        { text: 'Definir se o Amazaki abrirá CNPJ próprio ou operará sob a Construtora Arruda', type: 'A' },
        { text: 'Abrir CNPJ do Amazaki (se aplicável)', type: 'A' },
        { text: 'Definir regime tributário adequado para o modelo de locação', type: 'A' },
        { text: 'Contratar assessoria jurídica especializada em direito imobiliário', type: 'A' },
      ]},
      { label: 'CONTRATOS', items: [
        { text: 'Elaborar modelo de contrato de compra e venda da sala para o investidor', type: 'E' },
        { text: 'Elaborar modelo de contrato de locação para os lojistas', type: 'E' },
        { text: 'Elaborar contrato de gestão com a administradora do mall', type: 'E' },
        { text: 'Definir cláusulas de reajuste, carência e garantias nos contratos de locação', type: 'A' },
        { text: 'Validar contratos com assessoria jurídica', type: 'A' },
      ]},
      { label: 'LICENÇAS E ALVARÁS', items: [
        { text: 'Verificar aprovação do projeto junto à prefeitura de Manaus', type: 'A' },
        { text: 'Dar entrada no alvará de construção (se ainda não houver)', type: 'A' },
        { text: 'Mapear licenças necessárias para funcionamento do mall', type: 'A' },
        { text: 'Verificar exigências do Corpo de Bombeiros para o projeto', type: 'A' },
        { text: 'Verificar exigências de acessibilidade (NBR 9050)', type: 'A' },
      ]},
    ]
  },
  {
    id: 7, num: '07', scope: 'operacional',
    title: 'Infraestrutura Física',
    objective: 'Garantir que a infraestrutura física do Amazaki está pronta para receber locatários e visitantes',
    responsible: 'Construtora Arruda',
    phases: [
      { label: 'OBRA E CANTEIRO', items: [
        { text: 'Instalar tapume com comunicação visual do Amazaki', type: 'A' },
        { text: 'Garantir sinalização de segurança no perímetro da obra', type: 'A' },
        { text: 'Definir cronograma de obras com marcos mensais', type: 'E' },
        { text: 'Contratar empresa responsável pelo acompanhamento da obra', type: 'A' },
      ]},
      { label: 'SINALIZAÇÃO E IDENTIDADE FÍSICA', items: [
        { text: 'Instalar totem externo com nome e identidade do Amazaki', type: 'A' },
        { text: 'Definir sinalização interna das áreas comuns', type: 'E' },
        { text: 'Definir numeração e identificação das salas/lojas', type: 'A' },
        { text: 'Instalar placa de lançamento com informações de contato', type: 'A' },
      ]},
      { label: 'INFRAESTRUTURA DO CONDOMÍNIO', items: [
        { text: 'Confirmar instalação de gerador de energia', type: 'A' },
        { text: 'Confirmar instalação de elevadores (quantidade e capacidade)', type: 'A' },
        { text: 'Definir infraestrutura de internet e cabeamento do mall', type: 'A' },
        { text: 'Definir sistema de câmeras e controle de acesso', type: 'A' },
        { text: 'Definir infraestrutura de estacionamento e vagas', type: 'A' },
      ]},
    ]
  },
  {
    id: 8, num: '08', scope: 'operacional',
    title: 'Segurança',
    objective: 'Definir e implementar o modelo de segurança do Amazaki para a operação do mall',
    responsible: 'Construtora Arruda + Administradora',
    phases: [
      { label: 'PLANEJAMENTO', items: [
        { text: 'Definir modelo de segurança (armada, desarmada ou mista)', type: 'A' },
        { text: 'Definir horário de funcionamento da segurança', type: 'A' },
        { text: 'Mapear pontos críticos de segurança no projeto', type: 'A' },
        { text: 'Verificar exigências legais para segurança armada em Manaus', type: 'A' },
      ]},
      { label: 'CONTRATAÇÃO E IMPLANTAÇÃO', items: [
        { text: 'Contratar empresa de segurança homologada', type: 'A' },
        { text: 'Definir número de seguranças por turno', type: 'A' },
        { text: 'Instalar sistema de câmeras de vigilância (CFTV)', type: 'A' },
        { text: 'Instalar catracas ou controle de acesso nas entradas', type: 'A' },
        { text: 'Criar protocolo de ocorrências e emergências', type: 'E' },
      ]},
      { label: 'OPERAÇÃO', items: [
        { text: 'Treinar equipe de segurança nos protocolos do mall', type: 'A' },
        { text: 'Definir rondas e escalas de segurança', type: 'E' },
        { text: 'Integrar sistema de segurança ao controle da administradora', type: 'A' },
      ]},
    ]
  },
  {
    id: 9, num: '09', scope: 'operacional',
    title: 'Administradora do Mall',
    objective: 'Estruturar a administradora responsável pela gestão diária do Amazaki após a abertura',
    responsible: 'Construtora Arruda',
    phases: [
      { label: 'ESTRUTURAÇÃO', items: [
        { text: 'Definir se a administradora será interna (Arruda) ou terceirizada', type: 'A' },
        { text: 'Criar ou formalizar o CNPJ da administradora (se necessário)', type: 'A' },
        { text: 'Definir estrutura de equipe da administradora (cargos e funções)', type: 'A' },
        { text: 'Elaborar regimento interno do condomínio comercial', type: 'E' },
      ]},
      { label: 'PROCESSOS OPERACIONAIS', items: [
        { text: 'Definir processo de cobrança de aluguel e taxas condominiais', type: 'E' },
        { text: 'Definir processo de gestão de inadimplência', type: 'E' },
        { text: 'Definir processo de manutenção preventiva e corretiva', type: 'E' },
        { text: 'Definir processo de gestão de locatários (entrada, saída, renovação)', type: 'E' },
        { text: 'Implantar sistema de gestão do condomínio (software)', type: 'A' },
      ]},
      { label: 'COMUNICAÇÃO COM INVESTIDORES', items: [
        { text: 'Definir frequência e formato de relatórios para investidores', type: 'A' },
        { text: 'Criar modelo de extrato mensal de rendimentos', type: 'E' },
        { text: 'Definir canal de comunicação oficial com investidores', type: 'A' },
        { text: 'Criar procedimento de repasse de aluguéis aos investidores', type: 'E' },
      ]},
    ]
  },
  {
    id: 10, num: '10', scope: 'operacional',
    title: 'Locatários e Mix Comercial',
    objective: 'Definir e prospectar o mix de lojas, restaurantes e serviços do Amazaki',
    responsible: 'Construtora Arruda + Administradora',
    phases: [
      { label: 'PLANEJAMENTO DO MIX', items: [
        { text: 'Definir categorias de negócios desejadas no mall (restaurantes, serviços, lojas)', type: 'A' },
        { text: 'Definir âncoras comerciais prioritárias', type: 'A' },
        { text: 'Mapear negócios locais com perfil para o Amazaki', type: 'E' },
        { text: 'Definir critérios de seleção de locatários', type: 'E' },
      ]},
      { label: 'PROSPECÇÃO', items: [
        { text: 'Prospectar âncoras comerciais com abordagem direta', type: 'A' },
        { text: 'Criar material de apresentação do Amazaki para locatários', type: 'E' },
        { text: 'Realizar reuniões de interesse com potenciais locatários', type: 'A' },
        { text: 'Registrar negociações em andamento no CRM', type: 'A' },
      ]},
      { label: 'FECHAMENTO', items: [
        { text: 'Assinar cartas de intenção com locatários confirmados', type: 'E' },
        { text: 'Assinar contratos de locação definitivos', type: 'E' },
        { text: 'Definir período de carência para início do pagamento de aluguel', type: 'A' },
        { text: 'Comunicar ao investidor o locatário da sua unidade', type: 'A' },
      ]},
    ]
  },
  {
    id: 11, num: '11', scope: 'compartilhado',
    title: 'Abertura do Mall',
    objective: 'Garantir que tudo está pronto para o funcionamento do Amazaki no dia da abertura',
    responsible: 'Paleta + Construtora Arruda + Administradora',
    phases: [
      { label: 'ATÉ 30 DIAS ANTES DA ABERTURA', items: [
        { text: 'Confirmar que todos os contratos de locação estão assinados', type: 'A' },
        { text: 'Confirmar que a administradora está operacional', type: 'A' },
        { text: 'Confirmar que a segurança armada está contratada e escalada', type: 'A' },
        { text: 'Confirmar que a infraestrutura física está concluída', type: 'A' },
        { text: 'Confirmar alvarás e licenças de funcionamento em mãos', type: 'A' },
        { text: 'Planejar evento de inauguração com ação de marketing', type: 'A' },
      ]},
      { label: 'ATÉ 7 DIAS ANTES DA ABERTURA', items: [
        { text: 'Confirmar comunicação visual do mall instalada (tapume, totem, sinalização)', type: 'A' },
        { text: 'Realizar vistoria geral de infraestrutura', type: 'A' },
        { text: 'Treinar equipe de segurança e administração no local', type: 'A' },
        { text: 'Publicar campanha de abertura nas redes sociais', type: 'A' },
        { text: 'Enviar comunicado oficial de abertura para investidores', type: 'E' },
      ]},
      { label: 'DIA DA ABERTURA', items: [
        { text: 'Realizar evento de inauguração com cobertura de mídia', type: 'A' },
        { text: 'Registrar abertura em fotos e vídeos para conteúdo', type: 'E' },
        { text: 'Garantir presença da administradora no local', type: 'A' },
        { text: 'Garantir presença da segurança operacional', type: 'A' },
        { text: 'Publicar conteúdo ao vivo nas redes sociais', type: 'A' },
      ]},
    ]
  },
  {
    id: 12, num: '12', scope: 'compartilhado',
    title: 'Marcos e Aprovações',
    objective: 'Registrar as aprovações necessárias de cada parte antes de avançar nas etapas do projeto',
    responsible: 'Paleta + Construtora Arruda',
    phases: [
      { label: 'APROVAÇÕES DA PALETA → CONSTRUTORA', items: [
        { text: 'Aprovação da Estrutura Estratégica do Empreendimento', type: 'A' },
        { text: 'Aprovação da Narrativa Comercial do Projeto', type: 'A' },
        { text: 'Aprovação da Identidade Visual do Amazaki', type: 'A' },
        { text: 'Aprovação da Landing Page antes de publicar', type: 'A' },
        { text: 'Aprovação dos Materiais Comerciais antes de distribuir', type: 'A' },
        { text: 'Aprovação da Estrutura de Campanhas antes de ativar', type: 'A' },
      ]},
      { label: 'APROVAÇÕES DA CONSTRUTORA → PALETA', items: [
        { text: 'Envio do briefing completo (plantas, preços, informações técnicas)', type: 'E' },
        { text: 'Confirmação do orçamento de tráfego pago aprovado', type: 'A' },
        { text: 'Confirmação de acesso às contas digitais (Meta Ads, domínio, CRM)', type: 'A' },
        { text: 'Confirmação da data de lançamento oficial', type: 'A' },
      ]},
      { label: 'MARCOS GERAIS DO PROJETO', items: [
        { text: 'Kickoff realizado e registrado', type: 'A' },
        { text: 'Briefing recebido e validado pela Paleta', type: 'A' },
        { text: 'Todos os entregáveis da ativação concluídos', type: 'A' },
        { text: 'Landing page no ar e captando leads', type: 'A' },
        { text: 'Primeira campanha de tráfego ativa', type: 'A' },
        { text: 'Primeiro investidor captado', type: 'A' },
        { text: 'Mall aberto e operacional', type: 'A' },
      ]},
    ]
  },
  {
    id: 13, num: '13', scope: 'marketing',
    title: 'Mídia e Divulgação',
    objective: 'Teaser, outdoor, mídia física e canais de divulgação para captação de investidores e locatários',
    responsible: 'Paleta Marketing',
    phases: [
      { label: 'TEASER E PRÉ-LANÇAMENTO', items: [
        { text: 'Definir conceito e roteiro do teaser do Amazaki', type: 'A' },
        { text: 'Produzir vídeo teaser do Amazaki (15 a 30 segundos)', type: 'E' },
        { text: 'Publicar teaser nas redes sociais com contagem regressiva', type: 'A' },
        { text: 'Ativar campanha de tráfego pago com o teaser como criativo', type: 'A' },
      ]},
      { label: 'OUTDOOR E MÍDIA FÍSICA', items: [
        { text: 'Mapear pontos de outdoor estratégicos no Aleixo e entorno', type: 'A' },
        { text: 'Produzir arte para outdoor no padrão da identidade visual do Amazaki', type: 'E' },
        { text: 'Contratar espaços de outdoor (negociar com fornecedores locais)', type: 'A' },
        { text: 'Confirmar instalação e período de veiculação do outdoor', type: 'A' },
      ]},
      { label: 'CANAIS ADICIONAIS DE DIVULGAÇÃO', items: [
        { text: 'Mapear influenciadores locais de Manaus com perfil de investimento/negócios', type: 'A' },
        { text: 'Prospectar parceiros para divulgação por indicação (corretores, escritórios, advogados)', type: 'A' },
        { text: 'Criar programa de indicação com comissão para parceiros externos', type: 'E' },
        { text: 'Avaliar canais adicionais: e-mail marketing, LinkedIn, grupos de WhatsApp de investidores', type: 'A' },
        { text: 'Registrar cada canal ativado e monitorar origem dos leads captados', type: 'A' },
      ]},
    ]
  },
  {
    id: 14, num: '14', scope: 'operacional',
    title: 'Decoração Temática do Mall',
    objective: 'Definir e implementar a identidade visual temática japonesa nos espaços físicos do Amazaki',
    responsible: 'Construtora Arruda',
    phases: [
      { label: 'CONCEITO E PLANEJAMENTO', items: [
        { text: 'Definir o nível de imersão temática japonesa (superficial, moderado ou total)', type: 'A' },
        { text: 'Mapear referências visuais de decoração japonesa para apresentar ao Robério', type: 'E' },
        { text: 'Definir orçamento disponível para decoração temática', type: 'A' },
        { text: 'Contratar arquiteto ou designer de interiores especializado em temática japonesa', type: 'A' },
      ]},
      { label: 'ÁREAS COMUNS E FACHADA', items: [
        { text: 'Definir decoração temática da fachada e entrada principal do mall', type: 'A' },
        { text: 'Definir decoração dos corredores e áreas de circulação (plantas, painéis, iluminação)', type: 'A' },
        { text: 'Planejar ponto focal temático (jardim zen, mural, torii, elemento de água)', type: 'A' },
        { text: 'Definir projeto de iluminação temática para as áreas comuns', type: 'E' },
      ]},
      { label: 'EXECUÇÃO E APROVAÇÃO', items: [
        { text: 'Produzir projeto executivo de decoração para aprovação do Robério', type: 'E' },
        { text: 'Contratar fornecedores de decoração e mobiliário temático', type: 'A' },
        { text: 'Executar instalação da decoração antes da abertura do mall', type: 'A' },
        { text: 'Fotografar a decoração finalizada para uso em materiais de marketing', type: 'E' },
      ]},
    ]
  },
];
