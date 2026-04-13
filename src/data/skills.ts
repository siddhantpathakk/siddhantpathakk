export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { title: 'Languages', items: ['Python', 'SQL', 'R', 'C++', 'Java', 'Bash'] },
  { title: 'GenAI & LLMs', items: ['LiteLLM', 'vLLM', 'SGLang', 'LangChain', 'LangGraph', 'RAG'] },
  { title: 'ML & DL', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Flower', 'MLX'] },
  { title: 'Cloud & MLOps', items: ['AWS', 'GCP', 'CI/CD', 'Datadog', 'Splunk', 'Prometheus'] },
];
