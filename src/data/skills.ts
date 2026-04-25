import type { Accent } from '../lib/accents';

export interface SkillGroup {
  title: string;
  items: string[];
  accent: Accent;
}

export const skills: SkillGroup[] = [
  { title: 'Languages', accent: 'sky', items: ['Python', 'SQL', 'R', 'C++', 'Java', 'Bash'] },
  { title: 'GenAI & LLMs', accent: 'violet', items: ['RAG', 'Agentic AI', 'Anthropic SDK', 'MCP', 'vLLM', 'LangGraph', 'Google ADK'] },
  { title: 'ML & DL', accent: 'emerald', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Flower', 'MLX', 'ONNX'] },
  { title: 'Cloud & MLOps', accent: 'amber', items: ['AWS', 'GCP', 'Vercel', 'Cloudflare', 'SageMaker', 'Vertex AI', 'Docker', 'CloudFormation', 'GitHub Actions', 'Datadog'] },
];
