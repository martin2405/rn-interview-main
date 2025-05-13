import { Candidate } from './candidates';

const technologies = [
  { name: 'JavaScript', yearsOfExperience: 5 },
  { name: 'React', yearsOfExperience: 3 },
  { name: 'Node.js', yearsOfExperience: 4 },
  { name: 'Python', yearsOfExperience: 6 },
  { name: 'Django', yearsOfExperience: 4 },
  { name: 'AWS', yearsOfExperience: 2 },
  { name: 'Java', yearsOfExperience: 7 },
  { name: 'Spring Boot', yearsOfExperience: 5 },
  { name: 'Kubernetes', yearsOfExperience: 3 },
  { name: 'TypeScript', yearsOfExperience: 4 },
  { name: 'Angular', yearsOfExperience: 3 },
  { name: 'RxJS', yearsOfExperience: 2 },
  { name: 'Go', yearsOfExperience: 3 },
  { name: 'Rust', yearsOfExperience: 2 },
  { name: 'Docker', yearsOfExperience: 4 },
  { name: 'GraphQL', yearsOfExperience: 3 },
  { name: 'MongoDB', yearsOfExperience: 4 },
  { name: 'PostgreSQL', yearsOfExperience: 5 },
];

const getRandomTechnologies = () => {
  const count = Math.floor(Math.random() * 4) + 2; // 2-5 technologies
  const shuffled = [...technologies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1990-05-15',
    technologies: getRandomTechnologies(),
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    birthDate: '1988-11-23',
    technologies: getRandomTechnologies(),
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Johnson',
    birthDate: '1992-03-07',
    technologies: getRandomTechnologies(),
  },
  {
    id: '4',
    firstName: 'Sarah',
    lastName: 'Williams',
    birthDate: '1991-08-19',
    technologies: getRandomTechnologies(),
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Brown',
    birthDate: '1989-07-12',
    technologies: getRandomTechnologies(),
  },
  {
    id: '6',
    firstName: 'Emily',
    lastName: 'Davis',
    birthDate: '1993-02-28',
    technologies: getRandomTechnologies(),
  },
  {
    id: '7',
    firstName: 'Robert',
    lastName: 'Miller',
    birthDate: '1991-11-05',
    technologies: getRandomTechnologies(),
  },
  {
    id: '8',
    firstName: 'Jennifer',
    lastName: 'Wilson',
    birthDate: '1994-09-17',
    technologies: getRandomTechnologies(),
  },
  {
    id: '9',
    firstName: 'William',
    lastName: 'Moore',
    birthDate: '1987-04-23',
    technologies: getRandomTechnologies(),
  },
  {
    id: '10',
    firstName: 'Elizabeth',
    lastName: 'Taylor',
    birthDate: '1992-12-30',
    technologies: getRandomTechnologies(),
  },
  {
    id: '11',
    firstName: 'James',
    lastName: 'Anderson',
    birthDate: '1990-06-14',
    technologies: getRandomTechnologies(),
  },
  {
    id: '12',
    firstName: 'Patricia',
    lastName: 'Thomas',
    birthDate: '1988-03-21',
    technologies: getRandomTechnologies(),
  },
  {
    id: '13',
    firstName: 'Charles',
    lastName: 'Jackson',
    birthDate: '1993-08-09',
    technologies: getRandomTechnologies(),
  },
  {
    id: '14',
    firstName: 'Linda',
    lastName: 'White',
    birthDate: '1991-01-25',
    technologies: getRandomTechnologies(),
  },
];
