export interface ProjectItem {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  href: string;
  year?: number;
}

export const projects: ProjectItem[] = [
  {
    slug: 'byline',
    title: 'Byline — AI-written newsletters on your tech topics',
    tags: ['Multi-Agent Systems', 'Agentic Tool Use', 'Vertex AI'],
    summary:
      'Multi-user scheduled newsletter service built on a multi-agent workflow: planner, researcher, writer and editor agents coordinate tool-use across HN, Reddit, GitHub, ArXiv, Perplexity, Yahoo Finance, and web search, then typeset the output as a retro broadsheet-style PDF newspaper delivered on a cadence.',
    href: 'https://byline.siddhantpathakk.com',
    year: 2026,
  },
  {
    slug: 'clarion',
    title: 'Clarion — AI chief of staff for your inbox',
    tags: ['Anthropic SDK', 'MCP', 'Next.js'],
    summary:
      'An AI secretary built on the Anthropic SDK and MCP that turns a noisy inbox into a single prioritized briefing. Streaming chat with cited answers, a structured daily digest, and three swappable personas (Developer / Manager / Finance). Built at Push to Prod 2026, Singapore.',
    href: 'https://pushtoprod-theta.vercel.app',
    year: 2026,
  },
  {
    slug: 'tagon',
    title: 'TAGON — Graph Neural Networks for Sequential Recommendation',
    tags: ['GNN', 'Temporal Attention', 'PyTorch'],
    summary:
      'Designed a temporal graph-attention sequential recommender that learns from the time between interactions, as a final-year project graded A and published in NTU’s research repository. Beat 6 baselines, including LightGCN, GRU4Rec and Caser, on all 5 datasets (4 Amazon categories and MovieLens-100K) by up to 46% on Recall@20, and ran 5 ablations to isolate each design choice.',
    href: 'https://github.com/siddhantpathakk/tagon',
  },
  {
    slug: 'icarus-ai',
    title: 'Icarus AI — GenAI Job Recommendation',
    tags: ['LLM', 'Explainability', 'Full-Stack'],
    summary:
      'Explainable job recommendation platform using candidate CVs and LLMs to deliver personalised career suggestions. Earned Third Place at the NTU Deep Learning Week Hackathon.',
    href: 'https://github.com/siddhantpathakk',
  },
  {
    slug: 'speech-emotion-recognition',
    title: 'Speech Emotion Recognition with Bi-GRU + Attention',
    tags: ['MELD', 'Multi-modal', 'Attention'],
    summary:
      'Bi-directional GRU with attention mechanisms on the MELD dataset, improving classification accuracy beyond single-utterance baselines for multi-party dialogue and cross-utterance emotional dynamics.',
    href: 'https://github.com/siddhantpathakk/EmotionNet',
  },
  {
    slug: 'expected-goals',
    title: 'Expected Goals Model — Singapore Football',
    tags: ['Sports Analytics', 'Ensembles', 'NN'],
    summary:
      'Built expected-goals models from 244 Premier League matches in URECA-funded research, comparing 6 model families across 5 levels of event data to show what a low-resource league must collect. NTU President Undergraduate Research Scholar.',
    href: 'https://github.com/siddhantpathakk/URECA-SG_Football',
  },
  {
    slug: 'openclaw-ec2',
    title: 'openclaw-ec2 — One AI agent server per git branch',
    tags: ['AWS CloudFormation', 'Ansible', 'GitHub Actions OIDC'],
    summary:
      'Solo-built deployment kit that turns any git branch into its own AI agent server on AWS, and deleting the branch tears it all down. Hosts are configured with Ansible over SSM with no SSH and no inbound ports, deploys use keyless GitHub OIDC, and S3 backups restore onto a fresh instance.',
    href: 'https://github.com/siddhantpathakk/openclaw-ec2',
    year: 2026,
  },
  {
    slug: 'frequentmining',
    title: 'FrequentMining — Frequent itemsets on PySpark',
    tags: ['PySpark', 'SON algorithm', 'Big data'],
    summary:
      'Implemented the SON two-pass frequent-itemset algorithm on PySpark in a team of 3, mining MovieLens-20M (10M transactions) and a 5.48 GB Yelp dataset that Apriori could not fit in memory.',
    href: 'https://github.com/siddhantpathakk/FrequentMining',
  },
  {
    slug: 'delphi',
    title: 'Delphi — News Credibility via GCNs',
    tags: ['GCN', 'Word2Vec', 'AWS'],
    summary:
      'End-to-end misinformation detection pipeline using GCNs over Twitter propagation patterns, achieving 95% accuracy. Awarded the “Innovative Use of Natural Language Processing” distinction.',
    href: 'https://github.com/siddhantpathakk',
  },
];
