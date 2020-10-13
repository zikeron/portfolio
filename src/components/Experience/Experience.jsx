import React from 'react';

const experience = [
  {
    id: 1,
    position: 'Full-Stack Developer',
    company: 'Ironbit',
    startAt: '08/2018',
    endAt: '',
    location: 'Mexico City, Mexico',
    tasks: [
      'Build APIs and Services using NodeJS and PHP with different frameworks such as Lumen, Slim, Codeigniter.',
      'Develop and support from many Angular v8 apps built in-house.',
      'Manage code revision history using SourceTree & Bitbucket. Manage Sprint tasks using JIRA boards.',
      'Migration of Onboarding platform in PHP to Angular from Clarodrive.',
      'Develop Docker scripts to generate local and production environments.',
      'Develop page in React for other Claro products.',
    ],
  },
  {
    id: 2,
    position: 'Full-Stack Developer',
    company: 'Telemedic / Telasist',
    startAt: '02/2017',
    endAt: '07/2018',
    location: 'Mexico City, Mexico',
    tasks: [
      "Developed a survey management system using Laravel 5.6 and VueJS v.2 to show a KPI's charts board.",
      'Built modules using ZendFramework for a service operation in-house system. Affiliate management information analysis collection.',
      'Database administration (MySQL, MongoDB).',
      'Built collection Process & Reports.',
    ],
  },
  {
    id: 3,
    position: 'Full-Stack Developer',
    company: 'Iké Asistencia',
    startAt: '05/2015',
    endAt: '01/2017',
    location: 'Mexico City, Mexico',
    tasks: [
      'Building PHP modules for an ERP in-house system.',
      'Improving database design to reduce query processing time. (MySQL, MSSQ',
      'Planning requirements analysis.',
      'Improving performance of development & production servers.',
      'Migration of site-wide front-end from HTML to Jquery & Bootstrap v.3.',
    ],
  },
];

export const Experience = () => {
  return (
    <section>
      {experience.map(job => {
        return (
          <section key={job.id}>
            <div>Postion: {job.position}</div>
            <div>Company: {job.company}</div>
            <div>
              Period: {job.startAt} -{' '}
              {job.endAt === '' ? 'Still Working' : job.endAt}
            </div>
            <div>Location: {job.location}</div>
            <div>Tasks:</div>
            <ul>
              {job.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </section>
        );
      })}
    </section>
  );
};
