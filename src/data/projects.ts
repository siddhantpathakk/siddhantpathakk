import type { Accent } from '../lib/accents';

export interface ProjectItem {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  href: string;
  year?: number;
  accent: Accent;
}

export const projects: ProjectItem[] = [
  {
    slug: 'clarion',
    title: 'Clarion — AI Chief-of-Staff for Your Inbox',
    tags: ['Anthropic SDK', 'MCP', 'Next.js'],
    summary:
      'An AI secretary built on the Anthropic SDK and MCP that turns a noisy inbox into a single prioritized briefing. Streaming chat with cited answers, a structured daily digest, and three swappable personas (Developer / Manager / Finance). Built at Push to Prod 2026, Singapore.',
    href: 'https://pushtoprod-theta.vercel.app',
    year: 2026,
    accent: 'sky',
  },
  {
    slug: 'tagon',
    title: 'TAGON — Graph Neural Networks for Sequential Recommendation',
    tags: ['GNN', 'Temporal Attention', 'PyTorch'],
    summary:
      'Temporal Attention Graph-Optimised Network modelling dynamic user interactions, improving relevance and timeliness by 20% across five real-world datasets and outperforming SOTA baselines in precision, recall, and user satisfaction.',
    href: 'https://github.com/siddhantpathakk/tagon',
    accent: 'violet',
  },
  {
    slug: 'icarus-ai',
    title: 'Icarus AI — GenAI Job Recommendation',
    tags: ['LLM', 'Explainability', 'Full-Stack'],
    summary:
      'Explainable job recommendation platform using candidate CVs and LLMs to deliver personalised career suggestions. Earned Third Place at the NTU Deep Learning Week Hackathon.',
    href: 'https://github.com/siddhantpathakk',
    accent: 'indigo',
  },
  {
    slug: 'speech-emotion-recognition',
    title: 'Speech Emotion Recognition with Bi-GRU + Attention',
    tags: ['MELD', 'Multi-modal', 'Attention'],
    summary:
      'Bi-directional GRU with attention mechanisms on the MELD dataset, improving classification accuracy beyond single-utterance baselines for multi-party dialogue and cross-utterance emotional dynamics.',
    href: 'https://github.com/siddhantpathakk/EmotionNet',
    accent: 'emerald',
  },
  {
    slug: 'expected-goals',
    title: 'Expected Goals Model — Singapore Football',
    tags: ['Sports Analytics', 'Ensembles', 'NN'],
    summary:
      'Spatio-temporal xG framework combining KNN, Random Forest, Logistic Regression, and neural networks with ensemble methods. Achieved 99.58% accuracy on a 1M-point English Premier League dataset. NTU President Research Scholar.',
    href: 'https://github.com/siddhantpathakk/URECA-SG_Football',
    accent: 'amber',
  },
  {
    slug: 'delphi',
    title: 'Delphi — News Credibility via GCNs',
    tags: ['GCN', 'Word2Vec', 'AWS'],
    summary:
      'End-to-end misinformation detection pipeline using GCNs over Twitter propagation patterns, achieving 95% accuracy. Awarded "Innovative Use of Natural Language Processing" distinction.',
    href: 'https://github.com/siddhantpathakk',
    accent: 'rose',
  },
];
