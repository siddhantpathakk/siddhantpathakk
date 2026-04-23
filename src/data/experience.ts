export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  summary: string;
  current?: boolean;
  links?: { label: string; href: string }[];
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
    companyUrl: 'https://www.singaporeair.com',
    current: true,
    summary:
      'Re-architected the Flight Recommender, cutting infra costs ~90% and latency by 33%. Built an internal LLM gateway powering 200+ AI applications enterprise-wide, a RAG-powered search engine on Agent360 for B2B travel, and a natural-language interface for authoring and orchestrating agentic workflows. Led open-source LLM deployments on cloud GPUs and on-prem Mac Studio clusters.',
    links: [
      { label: 'Flight Recommender', href: 'https://www.singaporeair.com/flight-recommender/' },
      { label: 'Agent360', href: 'https://agent360.singaporeair.com/en_UK/us/index' },
    ],
  },
  {
    period: 'Jan 2024 — Apr 2024',
    role: 'Data Science & GenAI Engineer (Intern)',
    company: 'Asurion',
    companyUrl: 'https://www.asurion.com',
    summary:
      'Built ML models for supply-chain optimisation and customer segmentation across high-volume operational data. Shipped a LangChain-based retrieval chatbot for customer support, reducing churn and accelerating ticket resolution.',
  },
  {
    period: 'May 2023 — Aug 2023',
    role: 'Software Development Engineer (Intern)',
    company: 'Glance, InMobi',
    companyUrl: 'https://glance.com',
    summary:
      'Designed a CI/CD pipeline for on-device ML training and federated learning, automating Scikit-learn → ONNX / Kotlin weight conversion for mobile. Prototyped a Flower-based federated server to sync models across distributed devices.',
  },
  {
    period: 'Aug 2022 — Dec 2022',
    role: 'Data Analytics Consultant (Apprentice)',
    company: 'MSD',
    companyUrl: 'https://www.msd.com',
    summary:
      'Led a team of 4 to build an internal analytics tool for Adverse Event tracking and drug benchmarking. Shipped Power BI dashboards over a Python ETL and cloud ingestion pipeline, enabling real-time reporting on clinical data.',
  },
  {
    period: 'May 2022 — Aug 2022',
    role: 'AI Algorithm Engineer (Intern)',
    company: 'Panasonic R&D Center',
    companyUrl: 'https://www.panasonic.com/sg/corporate/profile/panasonic-r-d-center-singapore.html',
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
