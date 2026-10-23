import type { ImageMetadata } from 'astro';
import icarus from '../assets/photos/awards/icarus.jpeg';
import delphi from '../assets/photos/awards/delphi.jpeg';

export interface Award {
  title: string;
  detail: string;
  year?: number;
  image?: { src: ImageMetadata; alt: string };
}

export const awards: Award[] = [
  {
    title: 'Third Place — Deep Learning Week Hackathon 2024',
    detail: 'MLDA@EEE Club, NTU. Icarus AI — explainable GenAI job recommendations.',
    year: 2024,
    image: { src: icarus, alt: 'The Icarus AI team holding the third-place cheque at Deep Learning Week Hackathon 2024' },
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
    image: { src: delphi, alt: 'The Delphi team on stage in front of the Innovative Use of Natural Language Processing award slide' },
  },
];
