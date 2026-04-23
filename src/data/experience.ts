export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  summary: string;
  current?: boolean;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  detail?: string;
}

export const experience: ExperienceItem[] = [
  {
    period: 'Aug 2024 — Present',
    role: 'Data Scientist',
    company: 'Singapore Airlines',
    current: true,
    summary:
      'Re-architected the Flight Recommender onto serverless Lambda + in-house fare cache (~90% infra cost reduction, 33% latency improvement). Built a centralised LLM gateway over 30+ models via LiteLLM, production RAG for B2B travel search, and end-to-end open-source LLM deployments across AWS GPU and on-prem Mac Studio clusters.',
  },
  {
    period: 'Jan 2024 — Apr 2024',
    role: 'Data Science & GenAI Engineer (Intern)',
    company: 'Asurion',
    summary:
      'Built ML models for supply-chain optimisation and customer segmentation across high-volume operational data. Shipped a LangChain-based retrieval chatbot for customer support, reducing churn and accelerating ticket resolution.',
  },
  {
    period: 'May 2023 — Aug 2023',
    role: 'Software Development Engineer (Intern)',
    company: 'Glance, InMobi',
    summary:
      'Designed a CI/CD pipeline for on-device ML training and federated learning, automating Scikit-learn → ONNX / Kotlin weight conversion for mobile. Prototyped a Flower-based federated server to sync models across distributed devices.',
  },
  {
    period: 'Aug 2022 — Dec 2022',
    role: 'Data Analytics Consultant (Apprentice)',
    company: 'MSD',
    summary:
      'Led a team of 4 to build an internal analytics tool for Adverse Event tracking and drug benchmarking. Shipped Power BI dashboards over a Python ETL and cloud ingestion pipeline, enabling real-time reporting on clinical data.',
  },
  {
    period: 'May 2022 — Aug 2022',
    role: 'AI Algorithm Engineer (Intern)',
    company: 'Panasonic R&D Center',
    summary:
      'Built a real-time monitoring system combining OCR (PaddleOCR/Tesseract) and fuzzy search for robust text extraction in noisy, unstructured environments. Optimised the edge inference pipeline end-to-end, cutting latency by 30%.',
  },
];

export const education: EducationItem[] = [
  {
    period: 'Aug 2020 — Jun 2024',
    degree: 'B.Eng. Computer Science (Honours, Distinction)',
    institution: 'Nanyang Technological University',
    detail: 'Specialised in Data Science and Artificial Intelligence.',
  },
];
