export interface Award {
  title: string;
  detail: string;
  year?: number;
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  href?: string;
}

export const awards: Award[] = [
  {
    title: 'NTU President Research Scholar',
    detail: 'Expected Goal Model for Singapore Football.',
  },
  {
    title: 'Third Place — Deep Learning Week Hackathon',
    detail: 'Icarus AI, NTU.',
    image: '/photos/awards/icarus.jpeg',
  },
  {
    title: 'Innovative Use of Natural Language Processing',
    detail: 'Distinction award for the Delphi news credibility project.',
    image: '/photos/awards/delphi.jpeg',
  },
];

export const certifications: Certification[] = [
  { title: 'Applied Social Network Analysis in Python', issuer: 'University of Michigan' },
  { title: 'The Science of Well-Being', issuer: 'Yale University' },
  { title: 'Moral Foundation of Politics', issuer: 'Yale University' },
  { title: 'Introduction to Climate Change and Health', issuer: 'Yale University' },
  {
    title: 'Ubiquitous Learning and Instructional Technologies',
    issuer: 'University of Illinois at Urbana-Champaign',
  },
];
