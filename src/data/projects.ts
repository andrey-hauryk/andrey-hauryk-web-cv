export interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Project One',
    description: 'A brief description of project one.',
    link: 'https://github.com/your-github/project-one',
  },
  // {
  //   id: 2,
  //   name: 'Project Two',
  //   description: 'A brief description of project two.',
  //   link: 'https://github.com/your-github/project-two',
  // },
  // {
  //   id: 3,
  //   name: 'Project Three',
  //   description: 'A brief description of project three.',
  //   link: 'https://github.com/your-github/project-three',
  // },
];
