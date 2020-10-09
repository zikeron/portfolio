import React from 'react';
import './skills.css';
import { Dropdown } from '../Dropdown/Dropdown';

const skills = [
  {
    id: 1,
    name: 'Javascript',
    image: '',
    content: ['React', 'Redux', 'Angular', 'Svelte', 'Vue', 'NodeJS', 'JEST'],
  },
  {
    id: 2,
    name: 'PHP',
    content: ['Slim', 'Codeigniter', 'Lumen', 'Laravel', 'PHPUnit'],
  },
  {
    id: 3,
    name: 'Go Lang',
    content: [],
  },
  {
    id: 4,
    name: 'Database',
    content: ['Mysql', 'SQL Server', 'Redis', 'MongoDB', 'Firebase'],
  },
  {
    id: 5,
    name: 'Git',
    content: ['SourceTree', 'Bitbucket'],
  },
  {
    id: 6,
    name: 'Travis',
    content: [],
  },
  {
    id: 7,
    name: 'Docker',
    content: [],
  },
  {
    id: 8,
    name: 'CSS',
    content: ['SASS', 'Stylus', 'LESS'],
  },
];

const listItems = skills.map((skill, index) => {
  return <Dropdown className="list-items" key={index} skill={skill} />;
});

export const Skills = () => {
  return (
    <section>
      <h3>Skills</h3>
      {listItems}
    </section>
  );
};
