export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { title: 'Languages', items: ['Python', 'SQL', 'R', 'C++', 'Java', 'Bash'] },
  { title: 'GenAI & LLMs', items: ['RAG', 'Agentic AI', 'Anthropic SDK', 'MCP', 'vLLM', 'LangGraph', 'Google ADK'] },
  { title: 'ML & DL', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Flower', 'MLX', 'ONNX'] },
  { title: 'Cloud & MLOps', items: ['AWS', 'GCP', 'Vercel', 'Cloudflare', 'SageMaker', 'Vertex AI', 'Docker', 'CloudFormation', 'GitHub Actions', 'Datadog'] },
];
