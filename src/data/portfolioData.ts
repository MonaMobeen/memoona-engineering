export type ExposureLevel =
  | 'Development Experience'
  | 'Hands-on Project Exposure'
  | 'Technical Knowledge & Study';

export interface SkillItem {
  name: string;
  exposure: ExposureLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  summary: string;
  items: SkillItem[];
}

export interface ContextNode {
  id: string;
  step: string;
  title: string;
  shortLabel: string;
  focusConcept: string;
  description: string;
  engineeringConcerns: string[];
  examplePayload: string;
}

export type ProjectDiagramId =
  | 'sentinelflow'
  | 'atlas'
  | 'predictiq'
  | 'flowpilot'
  | 'devmind';

export interface ProjectCaseStudy {
  id: ProjectDiagramId;
  index: string;
  name: string;
  category: string;
  statusLabel: 'Concept / Case Study';
  summary: string;
  problemStatement: string;
  proposedSolution: string;
  technicalArchitecture: string[];
  keyCapabilities: string[];
  technologies: string[];
  designNotes: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  focusAreas: string[];
}

export interface MindsetStep {
  number: string;
  title: string;
  summary: string;
  guidingQuestions: string[];
}

export interface LearningTopic {
  id: string;
  title: string;
  focus: string;
  explorationNotes: string;
}

export const PROFILE = {
  fullName: 'Memoona Mobeen',
  monogram: 'MM.',
  roleTitle: 'AI/ML Engineer · Full-Stack Developer · AI Systems Builder',
  location: 'Pakistan',
  linkedinUrl: 'https://www.linkedin.com/in/monaamobeen/',
  email: 'memoonamobeen612@gmail.com',
  portraitPath: '/src/assets/images/memoona_portrait_clear_1795288801807.jpg',
  education: {
    degree: 'BS Information Technology',
    institution: 'University of Education, Lahore',
    graduationYear: '2024',
  },
  hero: {
    headlineLine1: 'Building Intelligent Systems.',
    headlineLine2: 'Engineering What Comes Next.',
    description:
      "I'm Memoona Mobeen — an AI/ML-focused developer with a foundation in full-stack engineering. I explore the intersection of intelligent systems, modern software architecture, and human-centered technology.",
    metadata: [
      'AI / Machine Learning',
      'Full-Stack Development',
      'Agentic AI Systems',
    ],
  },
  about: {
    identifier: '01 — The Engineer',
    heading: 'Curiosity drives the build. Engineering makes it real.',
    paragraphs: [
      'I graduated in Information Technology from the University of Education, Lahore in 2024, starting out by building responsive interfaces and full-stack web applications. Working across frontend components, backend APIs, and databases taught me how software behaves when real users interact with it.',
      'Over time, my curiosity moved beyond static interfaces toward systems that can retrieve knowledge, reason over unstructured data, and adapt across multi-step workflows. That led me deeper into Machine Learning, Deep Learning, Retrieval-Augmented Generation (RAG), and Agentic AI.',
      'Today, I focus on understanding both sides of intelligent software: clean application engineering and the AI pipelines underneath—especially how Context Engineering, structured tool calling, and evaluation make language models reliable rather than unpredictable.',
    ],
  },
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const EXPOSURE_LEGEND: {
  level: ExposureLevel;
  description: string;
}[] = [
  {
    level: 'Development Experience',
    description:
      'Applied in internship environments and full-stack web builds.',
  },
  {
    level: 'Hands-on Project Exposure',
    description:
      'Practiced through experimentation, notebooks, and prototype architectures.',
  },
  {
    level: 'Technical Knowledge & Study',
    description:
      'Core concepts studied thoroughly and actively explored in system design.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    summary: 'Component architecture, accessible interfaces, and responsive layout systems.',
    items: [
      { name: 'HTML5', exposure: 'Development Experience' },
      { name: 'CSS3', exposure: 'Development Experience' },
      { name: 'JavaScript', exposure: 'Development Experience' },
      { name: 'React.js', exposure: 'Development Experience' },
      { name: 'Responsive UI', exposure: 'Development Experience' },
      { name: 'Tailwind CSS', exposure: 'Development Experience' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Application Development',
    summary: 'API design, server-side data flow, and application persistence.',
    items: [
      { name: 'Node.js', exposure: 'Development Experience' },
      { name: 'Express.js', exposure: 'Development Experience' },
      { name: 'REST APIs', exposure: 'Development Experience' },
      { name: 'MongoDB', exposure: 'Development Experience' },
      { name: 'FastAPI', exposure: 'Hands-on Project Exposure' },
      { name: 'Python', exposure: 'Hands-on Project Exposure' },
    ],
  },
  {
    id: 'ml',
    title: 'AI & Machine Learning',
    summary: 'Classical supervised and unsupervised learning, feature work, and evaluation.',
    items: [
      { name: 'Python', exposure: 'Hands-on Project Exposure' },
      { name: 'NumPy', exposure: 'Hands-on Project Exposure' },
      { name: 'Pandas', exposure: 'Hands-on Project Exposure' },
      { name: 'Scikit-learn', exposure: 'Hands-on Project Exposure' },
      { name: 'Data preprocessing', exposure: 'Hands-on Project Exposure' },
      { name: 'Feature engineering', exposure: 'Hands-on Project Exposure' },
      { name: 'Model evaluation', exposure: 'Hands-on Project Exposure' },
      { name: 'Classification and regression', exposure: 'Hands-on Project Exposure' },
      { name: 'Decision Trees', exposure: 'Technical Knowledge & Study' },
      { name: 'Random Forests', exposure: 'Technical Knowledge & Study' },
      { name: 'Gradient Boosting', exposure: 'Technical Knowledge & Study' },
      { name: 'KNN', exposure: 'Technical Knowledge & Study' },
      { name: 'SVM', exposure: 'Technical Knowledge & Study' },
      { name: 'Naive Bayes', exposure: 'Technical Knowledge & Study' },
      { name: 'K-Means', exposure: 'Technical Knowledge & Study' },
    ],
  },
  {
    id: 'dl',
    title: 'Deep Learning',
    summary: 'Foundational neural architectures, training dynamics, and generalization.',
    items: [
      { name: 'Neural Networks', exposure: 'Technical Knowledge & Study' },
      { name: 'Activation Functions', exposure: 'Technical Knowledge & Study' },
      { name: 'Backpropagation', exposure: 'Technical Knowledge & Study' },
      { name: 'Optimization', exposure: 'Technical Knowledge & Study' },
      { name: 'CNN', exposure: 'Technical Knowledge & Study' },
      { name: 'RNN', exposure: 'Technical Knowledge & Study' },
      { name: 'Regularization', exposure: 'Technical Knowledge & Study' },
      { name: 'Batch Normalization', exposure: 'Technical Knowledge & Study' },
      { name: 'Dropout', exposure: 'Technical Knowledge & Study' },
    ],
  },
  {
    id: 'genai',
    title: 'Generative AI & Intelligent Systems',
    summary: 'Retrieval pipelines, agentic orchestration, context shaping, and guardrails.',
    items: [
      { name: 'LLM Applications', exposure: 'Hands-on Project Exposure' },
      { name: 'Prompt Engineering', exposure: 'Hands-on Project Exposure' },
      { name: 'Retrieval-Augmented Generation', exposure: 'Hands-on Project Exposure' },
      { name: 'Vector Databases', exposure: 'Technical Knowledge & Study' },
      { name: 'Embeddings', exposure: 'Technical Knowledge & Study' },
      { name: 'Semantic Search', exposure: 'Technical Knowledge & Study' },
      { name: 'Hybrid Search', exposure: 'Technical Knowledge & Study' },
      { name: 'LangChain', exposure: 'Technical Knowledge & Study' },
      { name: 'LangGraph', exposure: 'Technical Knowledge & Study' },
      { name: 'Agentic Workflows', exposure: 'Technical Knowledge & Study' },
      { name: 'Tool Calling', exposure: 'Technical Knowledge & Study' },
      { name: 'Multi-Agent Concepts', exposure: 'Technical Knowledge & Study' },
      { name: 'Context Engineering', exposure: 'Technical Knowledge & Study' },
      { name: 'Evaluation and Guardrails', exposure: 'Technical Knowledge & Study' },
    ],
  },
  {
    id: 'tools',
    title: 'Development & Engineering Tools',
    summary: 'Everyday tooling for version control, prototyping, and API verification.',
    items: [
      { name: 'Git', exposure: 'Development Experience' },
      { name: 'GitHub', exposure: 'Development Experience' },
      { name: 'VS Code', exposure: 'Development Experience' },
      { name: 'REST API Testing', exposure: 'Development Experience' },
      { name: 'Jupyter Notebook', exposure: 'Hands-on Project Exposure' },
      { name: 'Google Colab', exposure: 'Hands-on Project Exposure' },
      { name: 'Streamlit', exposure: 'Hands-on Project Exposure' },
      { name: 'Docker', exposure: 'Technical Knowledge & Study' },
    ],
  },
];

export const CONTEXT_PIPELINE_NODES: ContextNode[] = [
  {
    id: 'intent',
    step: '01',
    title: 'User Intent',
    shortLabel: 'Intent',
    focusConcept: 'Context selection',
    description:
      'Interpret the raw request, classify task constraints, and determine whether the query requires retrieval, tool execution, or direct synthesis.',
    engineeringConcerns: [
      'Clarifying ambiguous instructions before retrieval',
      'Extracting entity filters and temporal bounds',
      'Routing between lightweight and deep reasoning paths',
    ],
    examplePayload: '{ intent: "root_cause_lookup", scope: "auth-service", requires_tools: true }',
  },
  {
    id: 'retrieval',
    step: '02',
    title: 'Context Retrieval',
    shortLabel: 'Retrieval',
    focusConcept: 'Retrieval strategies',
    description:
      'Fetch relevant external evidence using hybrid search (dense vector embeddings paired with lexical keyword matching) and reranking.',
    engineeringConcerns: [
      'Chunking boundaries that preserve semantic coherence',
      'Metadata filtering before similarity scoring',
      'Balancing recall vs. precision to avoid noisy chunks',
    ],
    examplePayload: 'hybrid_search(top_k=12) -> rerank(top_n=4, threshold=0.72)',
  },
  {
    id: 'memory',
    step: '03',
    title: 'Memory',
    shortLabel: 'Memory',
    focusConcept: 'Short-term & long-term memory',
    description:
      'Combine active session state (short-term turn history) with persistent user or domain summaries (long-term memory) without overflowing tokens.',
    engineeringConcerns: [
      'Rolling summarization of older conversation turns',
      'Separating verified facts from transient chat history',
      'Preventing stale memory from overriding fresh evidence',
    ],
    examplePayload: 'session_turns: 4 | pinned_constraints: ["use_strict_citations"]',
  },
  {
    id: 'tools',
    step: '04',
    title: 'Tool Selection',
    shortLabel: 'Tools',
    focusConcept: 'Tool orchestration',
    description:
      'Select only the minimal schemas and external functions needed for the current step, keeping definitions concise and typed.',
    engineeringConcerns: [
      'Dynamic tool pruning to save context window budget',
      'Strict input parameter validation before execution',
      'Read-only vs. state-changing approval gates',
    ],
    examplePayload: 'tools_exposed: ["query_index", "fetch_dependency_graph"]',
  },
  {
    id: 'assembly',
    step: '05',
    title: 'Context Assembly',
    shortLabel: 'Assembly',
    focusConcept: 'Context windows & relevance',
    description:
      'Pack instructions, retrieved evidence, memory, and tool outputs into a structured prompt layout respecting token budgets and attention ordering.',
    engineeringConcerns: [
      'Allocating token budgets across system, evidence, and output',
      'Deduplicating overlapping passages prior to inference',
      'Placing high-priority constraints at optimal attention positions',
    ],
    examplePayload: 'tokens_allocated: { system: 420, evidence: 1850, memory: 310, reserve: 1024 }',
  },
  {
    id: 'reasoning',
    step: '06',
    title: 'LLM Reasoning',
    shortLabel: 'Reasoning',
    focusConcept: 'Structured outputs',
    description:
      'Execute model inference under explicit schema constraints so responses separate verified claims, citations, and uncertainty.',
    engineeringConcerns: [
      'Enforcing JSON/typed schemas for downstream consumers',
      'Instructing explicit abstention when evidence is missing',
      'Tracking multi-step intermediate tool observations',
    ],
    examplePayload: 'schema: { answer: string, citations: SourceRef[], confidence_note: string }',
  },
  {
    id: 'evaluation',
    step: '07',
    title: 'Evaluation',
    shortLabel: 'Evaluation',
    focusConcept: 'Grounding & evaluation',
    description:
      'Verify that the generated output stays grounded in retrieved context, follows formatting rules, and passes guardrail checks before display.',
    engineeringConcerns: [
      'Checking citation alignment against retrieved snippets',
      'Detecting unsupported claims or policy violations',
      'Triggering fallback or re-retrieval on low grounding checks',
    ],
    examplePayload: 'grounding_check: "pass" | schema_valid: true | citations_verified: 4/4',
  },
  {
    id: 'response',
    step: '08',
    title: 'Response',
    shortLabel: 'Response',
    focusConcept: 'Human-centered delivery',
    description:
      'Deliver a clear, traceable answer to the user with inspectable sources and actionable next steps.',
    engineeringConcerns: [
      'Surfacing source references alongside key conclusions',
      'Streaming incremental output without layout shifts',
      'Logging trace metadata for iterative debugging',
    ],
    examplePayload: 'status: "delivered" | trace_inspectable: true',
  },
];

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'sentinelflow',
    index: '01',
    name: 'SentinelFlow',
    category: 'Agentic AI / Cybersecurity',
    statusLabel: 'Concept / Case Study',
    summary:
      'An intelligent security operations assistant designed to analyze security alerts, correlate signals across sources, prioritize potential threats, and guide analyst investigations.',
    problemStatement:
      'Security analysts often triage high volumes of fragmented alerts across logs, identity events, and endpoint telemetry—leading to slow context gathering and alert fatigue.',
    proposedSolution:
      'A structured agentic triage workflow that ingests incoming alerts, retrieves historical incident patterns and runbook context, drafts a prioritized investigation brief, and pauses for human analyst approval before any response action.',
    technicalArchitecture: [
      'FastAPI ingestion endpoint normalizing raw alert payloads into a uniform event schema',
      'Retrieval layer indexing past incident notes and security playbooks',
      'Agentic workflow orchestrating enrichment queries with deterministic state transitions',
      'Human-in-the-loop approval gate separating investigation summaries from containment actions',
    ],
    keyCapabilities: [
      'Multi-source alert correlation & signal grouping',
      'Structured severity triage rationale with cited log evidence',
      'Playbook-grounded next-step recommendations',
      'Explicit human approval checkpoints before action execution',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'LLM Integration',
      'Agentic Workflows',
      'Retrieval',
      'Structured Alert Analysis',
    ],
    designNotes:
      'Conceptual architecture exploring how deterministic guardrails and human-approval checkpoints keep agentic workflows safe in high-stakes operational domains.',
  },
  {
    id: 'atlas',
    index: '02',
    name: 'Atlas Intelligence',
    category: 'Enterprise RAG / Document Intelligence',
    statusLabel: 'Concept / Case Study',
    summary:
      'An intelligent knowledge platform enabling organizations to search, synthesize, and reason across large multi-format document collections with source grounding.',
    problemStatement:
      'Important operational knowledge is scattered across PDFs, technical specifications, and policy manuals where keyword search alone misses intent and naive LLM chat risks unsupported answers.',
    proposedSolution:
      'A multi-stage Retrieval-Augmented Generation architecture combining query rewriting, hybrid semantic + lexical retrieval, document summarization, and citation-first answer generation.',
    technicalArchitecture: [
      'Document ingestion pipeline handling chunking, section hierarchy metadata, and embeddings',
      'Vector store (Chroma or equivalent) paired with sparse keyword retrieval for hybrid search',
      'LangChain / LangGraph orchestration handling query reformulation and context assembly',
      'FastAPI backend with a Streamlit exploration interface displaying source excerpts',
    ],
    keyCapabilities: [
      'Multi-document ingestion with metadata tagging',
      'Semantic & hybrid retrieval with query rewriting',
      'Source-grounded Q&A linking claims back to exact document chunks',
      'Retrieval evaluation harness for tracking relevance',
    ],
    technologies: [
      'Python',
      'LangChain',
      'LangGraph',
      'Chroma / Vector DB',
      'FastAPI',
      'Streamlit',
      'LLM APIs',
    ],
    designNotes:
      'Case study focused on retrieval quality, chunking trade-offs, and transparent source attribution rather than opaque single-prompt generation.',
  },
  {
    id: 'predictiq',
    index: '03',
    name: 'PredictIQ',
    category: 'Applied Machine Learning',
    statusLabel: 'Concept / Case Study',
    summary:
      'An explainable predictive analytics workspace designed to turn structured tabular datasets into transparent model comparisons and interpretable insights.',
    problemStatement:
      'Teams working with tabular business or operational data often rely on single-metric model scores without inspecting data quality issues, class imbalance, or feature behavior.',
    proposedSolution:
      'An end-to-end ML experimentation workflow that profiles dataset health, applies reproducible preprocessing, benchmarks multiple Scikit-learn models via cross-validation, and surfaces diagnostic charts.',
    technicalArchitecture: [
      'Pandas and NumPy pipeline for missingness audits, leakage checks, and feature encoding',
      'Scikit-learn modeling pipelines comparing linear, tree-based, and boosting baselines',
      'Cross-validation evaluation engine generating confusion matrices and ROC curves',
      'Interactive Streamlit & Plotly interface for inspecting feature importance and error slices',
    ],
    keyCapabilities: [
      'Automated data quality & distribution diagnostics',
      'Classification and regression model benchmarking',
      'Cross-validation with Precision, Recall, F1, and ROC-AUC reporting',
      'Confusion matrix inspection & model explainability views',
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Streamlit',
      'Plotly',
    ],
    designNotes:
      'Designed around rigorous ML evaluation fundamentals—prioritizing interpretability, validation splits, and error analysis over black-box predictions.',
  },
  {
    id: 'flowpilot',
    index: '04',
    name: 'FlowPilot',
    category: 'Multi-Agent AI / Workflow Automation',
    statusLabel: 'Concept / Case Study',
    summary:
      'A multi-agent task orchestration concept where specialized agents collaborate through shared state to plan, research, execute, and verify complex workflows.',
    problemStatement:
      'Complex knowledge tasks quickly degrade inside a single monolithic prompt because planning, information gathering, execution, and self-checking compete for attention.',
    proposedSolution:
      'A stateful graph architecture modeled with specialized roles—Planner, Research, Execution, and Verification agents—communicating via typed handoff schemas and monitored checkpoints.',
    technicalArchitecture: [
      'LangGraph state machine coordinating transitions across four specialized agent roles',
      'Shared context store holding verified intermediate artifacts and task progress',
      'Typed tool-calling interfaces with bounded retry and error-recovery edges',
      'FastAPI orchestration service exposing step-by-step execution traces and approval hooks',
    ],
    keyCapabilities: [
      'Structured task decomposition via Planner Agent',
      'Context-sharing between Research and Execution Agents',
      'Verification Agent checking constraints against original goals',
      'Execution trace visibility & human-in-the-loop pause points',
    ],
    technologies: [
      'Python',
      'LangGraph',
      'LLM APIs',
      'FastAPI',
      'Structured Outputs',
    ],
    designNotes:
      'Explores bounded autonomy in multi-agent systems—keeping agent handoffs inspectable, deterministic where possible, and easy to interrupt.',
  },
  {
    id: 'devmind',
    index: '05',
    name: 'DevMind',
    category: 'Developer Intelligence / AI Engineering',
    statusLabel: 'Concept / Case Study',
    summary:
      'A developer intelligence assistant built to help engineers onboard onto unfamiliar codebases, trace module dependencies, and reason through architectural questions.',
    problemStatement:
      'Onboarding onto an unfamiliar repository requires piecing together scattered files, implicit conventions, and cross-module dependencies before making safe changes.',
    proposedSolution:
      'A codebase-aware RAG and structural analysis concept that pairs semantic code search with dependency graph mapping to answer architectural questions grounded in actual source files.',
    technicalArchitecture: [
      'Repository parser indexing symbols, imports, and module boundaries into embeddings',
      'Dependency graph builder mapping upstream and downstream relationships',
      'Context-aware Q&A pipeline assembling relevant file snippets and call-path context',
      'FastAPI service outputting structured architecture summaries and documentation drafts',
    ],
    keyCapabilities: [
      'Semantic code search across modules and functions',
      'Interactive dependency & architecture mapping',
      'Context-grounded technical Q&A with file-level citations',
      'Automated module documentation drafting',
    ],
    technologies: [
      'Python',
      'RAG',
      'Embeddings',
      'Vector Databases',
      'FastAPI',
      'LLMs',
    ],
    designNotes:
      'Connects software architecture comprehension with retrieval engineering to reduce cognitive overhead when navigating unfamiliar systems.',
  },
];

export const EXPERIENCE_TIMELINE: ExperienceEntry[] = [
  {
    id: 'invozone',
    company: 'InvoZone',
    role: 'Junior AI/ML Engineer',
    period: 'September 2026 – Present',
    type: 'Engineering Role',
    description:
      'Working on applied AI/ML engineering workflows, integrating language model capabilities, data processing pipelines, and backend services into practical software solutions.',
    focusAreas: [
      'Applied AI & ML workflow implementation',
      'LLM integration, retrieval & prompt engineering',
      'Python & API-backed intelligent system features',
    ],
  },
  {
    id: 'web-hunters',
    company: 'Web Hunters',
    role: 'Frontend Development Intern',
    period: 'December 2024 – March 2025',
    type: 'Internship',
    description:
      'Worked on building responsive user interfaces, translating design layouts into clean frontend components, and collaborating on interactive web features with modern CSS and JavaScript.',
    focusAreas: [
      'Responsive component implementation',
      'HTML5, CSS3, JavaScript & React UI workflows',
      'Cross-device layout consistency & visual polish',
    ],
  },
  {
    id: 'asdev',
    company: 'ASDEV',
    role: 'MERN Stack Intern',
    period: 'August 2024 – November 2024',
    type: 'Internship',
    description:
      'Gained practical full-stack exposure working across MongoDB, Express.js, React, and Node.js—connecting frontend views with RESTful API endpoints and structured database schemas.',
    focusAreas: [
      'Full-stack MERN feature development',
      'REST API integration & CRUD data flows',
      'MongoDB data modeling & Express routing',
    ],
  },
];

export const MINDSET_STEPS: MindsetStep[] = [
  {
    number: '01',
    title: 'Understand the problem',
    summary: 'Start with the real problem, requirements, and intended outcome.',
    guidingQuestions: [
      'Who is affected, and what friction actually exists?',
      'Does this problem truly need AI, or is deterministic logic cleaner?',
      'What does a reliable, verifiable outcome look like?',
    ],
  },
  {
    number: '02',
    title: 'Design the system',
    summary:
      'Think about architecture, data flow, maintainability, and appropriate tools.',
    guidingQuestions: [
      'How do inputs, state, retrieval, and outputs flow between components?',
      'Where should clear schema boundaries and failure fallbacks live?',
      'Which stack keeps the system simple to inspect and evolve?',
    ],
  },
  {
    number: '03',
    title: 'Build & experiment',
    summary: 'Implement, test, evaluate, and improve iteratively.',
    guidingQuestions: [
      'Can we validate a narrow vertical slice end-to-end early?',
      'How do prompt structure, chunk size, or features change behavior?',
      'Are edge cases tested with concrete inputs rather than guesswork?',
    ],
  },
  {
    number: '04',
    title: 'Validate & refine',
    summary: 'Check reliability, usability, performance, and limitations.',
    guidingQuestions: [
      'Where can the model or interface mislead a user or fail silently?',
      'Is the interface clear, accessible, and responsive across devices?',
      'What assumptions or known limitations should be documented honestly?',
    ],
  },
];

export const LEARNING_TOPICS: LearningTopic[] = [
  {
    id: 'adv-ml',
    title: 'Advanced Machine Learning',
    focus: 'Ensemble methods, feature pipelines & disciplined validation',
    explorationNotes:
      'Studying tree ensembles, gradient boosting behavior, hyperparameter sensitivity, and bias-variance trade-offs on structured data.',
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    focus: 'Representation learning, optimization & sequence models',
    explorationNotes:
      'Exploring neural network internals—backpropagation dynamics, regularization strategies, CNNs, and sequence architectures.',
  },
  {
    id: 'genai',
    title: 'Generative AI',
    focus: 'LLM capabilities, structured generation & retrieval grounding',
    explorationNotes:
      'Investigating embedding spaces, hybrid search strategies, and methods for keeping generated outputs factual and inspectable.',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    focus: 'Tool use, stateful orchestration & bounded autonomy',
    explorationNotes:
      'Studying graph-based agent control flows, tool-calling reliability, human-in-the-loop checkpoints, and error recovery.',
  },
  {
    id: 'context-eng',
    title: 'Context Engineering',
    focus: 'Context budgets, memory design & relevance filtering',
    explorationNotes:
      'Examining how retrieval ranking, conversation memory compaction, and structured prompt framing shape reasoning quality.',
  },
  {
    id: 'ai-sys-design',
    title: 'AI System Design',
    focus: 'Evaluation harnesses, latency budgets & guardrails',
    explorationNotes:
      'Learning how AI components integrate cleanly into full-stack architectures with observability, caching, and fallback paths.',
  },
  {
    id: 'data-eng',
    title: 'Data Engineering Fundamentals',
    focus: 'Ingestion, cleaning, schemas & vector indexing pipelines',
    explorationNotes:
      'Understanding how clean, well-structured data ingestion forms the foundation for both classical ML and modern RAG systems.',
  },
  {
    id: 'sw-arch',
    title: 'Software Architecture',
    focus: 'Modular APIs, separation of concerns & maintainable UI',
    explorationNotes:
      'Strengthening clean TypeScript, React, FastAPI, and backend patterns so intelligent features live inside dependable software.',
  },
];
