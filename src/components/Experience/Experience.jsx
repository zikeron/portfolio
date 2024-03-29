import React from 'react';
import clarodriveImg from '../../assets/experience/clarodrive.png';
import telasistImg from '../../assets/experience/telasist.png';
import ikeImg from '../../assets/experience/ike-asistencia.png';
import AspImg from '../../assets/experience/aspiration.png';
import './experience.css';

const experience = [
  {
    id: 0,
    position: 'Senior UI Frontend Developer',
    company: 'Noblesoft',
    startAt: '01/2021',
    endAt: '',
    location: 'California, USA',
    img: AspImg,
    url: 'https://www.aspiration.com/',
    project: 'Aspiration',
    projectUrl: 'https://www.aspiration.com/',
    tasks: [
      'Ensure cross-device and cross-platform compatibility.',
      'Fetch data from the backend using GraphQL.',
      'Responsible for styling and the look and feel of the web components using styled-component, and styled-system.',
      'Implemented ReactNative DevTools and Reactotron for debugging, testing, and optimization.',
      'Used Postman to test all endpoints from API’s to check consistency in their responses.',
      'All elements on the app were created based on Atomic Design methodology and implemented on the Storybook tool to maintain the modularity and be reusable in different app scenarios.',
      'Manage the templates information using Formik library.',
    ],
  },
  {
    id: 1,
    position: 'Full-Stack Developer',
    company: 'Ironbit',
    startAt: '08/2018',
    endAt: '12/2020',
    location: 'Mexico City, Mexico',
    img: clarodriveImg,
    url: 'https://www.clarodrive.com/',
    project: 'Clarodrive',
    projectUrl: 'https://www.clarodrive.com/',
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
    img: telasistImg,
    url: 'https://telasist.com/',
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
    img: ikeImg,
    url: 'https://ikeasistencia.com/',
    tasks: [
      'Building PHP modules for an ERP in-house system.',
      'Improving database design to reduce query processing time. (MySQL, MSSQL).',
      'Planning requirements analysis.',
      'Improving performance of development & production servers.',
      'Migration of site-wide front-end from HTML to Jquery & Bootstrap v.3.',
    ],
  },
];

export default () => {
  return (
    <>
      {experience.map(job => {
        return (
          <section key={job.id}>
            <div className="experience__container">
              <div className="experience__container_img">
                <figure>
                  <img
                    className="experience__job-img"
                    src={job.img}
                    alt={job.company}
                    height="200px"
                    width="100%"
                  />
                </figure>
              </div>
              <div className="experience__container-job">
                <div>
                  Company: <a href={job.url}>{job.company}</a>
                </div>
                {job.project && (
                  <div>
                    Project: <a href={job.projectUrl}>{job.project}</a>
                  </div>
                )}
                <div>Position: {job.position}</div>
                <div>
                  Period: {job.startAt} -{' '}
                  {job.endAt === '' ? 'Still Working' : job.endAt}
                </div>
                <div>Location: {job.location}</div>
              </div>
              <div className="experience__container-task">
                <div>Tasks:</div>
                <ul>
                  {job.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};
