export interface Award {
  title: string;
  detail: string;
  year?: number;
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year?: number;
  href?: string;
}

export const awards: Award[] = [
  {
    title: 'Third Place — Deep Learning Week Hackathon 2024',
    detail: 'MLDA@EEE Club, NTU. Icarus AI — explainable GenAI job recommendations.',
    year: 2024,
    image: '/photos/awards/icarus.jpeg',
  },
  {
    title: 'NTU President Undergraduate Research Scholar',
    detail: 'Awarded by Nanyang Technological University for the Expected Goals Model for Singapore Football research project.',
    year: 2023,
  },
  {
    title: 'Innovative Use of Natural Language Processing',
    detail: 'Deep Learning Week Hackathon 2022, MLDA@EEE Club, NTU. Delphi — news credibility via GCNs.',
    year: 2022,
    image: '/photos/awards/delphi.jpeg',
  },
];

export const certifications: Certification[] = [];
