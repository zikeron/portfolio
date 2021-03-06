import React from 'react';
import javascriptImg from '../../assets/skills/JavaScript-logo.png';
import reactImg from '../../assets/skills/React.png';
import reduxImg from '../../assets/skills/redux_2.png';
import angularImg from '../../assets/skills/angular.png';
import vueImg from '../../assets/skills/vue.png';
import nodeImg from '../../assets/skills/nodejs.png';
import jestImg from '../../assets/skills/jest-logo-png-transparent.png';
import phpImg from '../../assets/skills/PHP-logo.png';
import slimImg from '../../assets/skills/slim.png';
import codeigniterImg from '../../assets/skills/codeigniter_2.png';
import lumenImg from '../../assets/skills/Lumen.png';
import laravelImg from '../../assets/skills/Laravel_2.png';
import phpUnitImg from '../../assets/skills/phpunit.png';
import goImg from '../../assets/skills/GoLang.png';
import mysqlImg from '../../assets/skills/MySQL.png';
import sqlServerImg from '../../assets/skills/sql-server.png';
import redisImg from '../../assets/skills/Redis.png';
import mongodbImg from '../../assets/skills/mongodb.png';
import firebaseImg from '../../assets/skills/firebase.png';
import gitImg from '../../assets/skills/git.png';
import githubImg from '../../assets/skills/github.png';
import bitbucketImg from '../../assets/skills/bitbucket.png';
import dockerImg from '../../assets/skills/docker.png';
import htmlImg from '../../assets/skills/html5.png';
import cssImg from '../../assets/skills/CSS3.png';
import sassImg from '../../assets/skills/sass.jpg';
import stylusImg from '../../assets/skills/stylus.png';
import lessImg from '../../assets/skills/less.png';
import travisImg from '../../assets/skills/Travis.png';
import './skills.css';

const skills = [
  {
    id: 1,
    name: 'Javascript',
    src: javascriptImg,
  },
  {
    id: 2,
    name: 'React',
    src: reactImg,
  },
  {
    id: 3,
    name: 'Redux',
    src: reduxImg,
  },
  {
    id: 4,
    name: 'Angular',
    src: angularImg,
  },
  {
    id: 5,
    name: 'Vue',
    src: vueImg,
  },
  {
    id: 7,
    name: 'NodeJS',
    src: nodeImg,
  },
  {
    id: 8,
    name: 'JEST',
    src: jestImg,
  },
  {
    id: 9,
    name: 'PHP',
    src: phpImg,
  },
  {
    id: 10,
    name: 'Slim',
    src: slimImg,
  },
  {
    id: 11,
    name: 'Codeigniter',
    src: codeigniterImg,
  },
  {
    id: 12,
    name: 'Lumen',
    src: lumenImg,
  },
  {
    id: 13,
    name: 'Laravel',
    src: laravelImg,
  },
  {
    id: 14,
    name: 'PHPUnit',
    src: phpUnitImg,
  },
  {
    id: 15,
    name: 'Go',
    src: goImg,
  },
  {
    id: 17,
    name: 'Mysql',
    src: mysqlImg,
  },
  {
    id: 18,
    name: 'SQL Server',
    src: sqlServerImg,
  },
  {
    id: 19,
    name: 'Redis',
    src: redisImg,
  },
  {
    id: 20,
    name: 'MongoDB',
    src: mongodbImg,
  },
  {
    id: 21,
    name: 'Firebase',
    src: firebaseImg,
  },
  {
    id: 22,
    name: 'Git',
    src: gitImg,
  },
  {
    id: 23,
    name: 'Github',
    src: githubImg,
  },
  {
    id: 24,
    name: 'Bitbucket',
    src: bitbucketImg,
  },
  {
    id: 25,
    name: 'Travis',
    src: travisImg,
  },
  {
    id: 26,
    name: 'Docker',
    src: dockerImg,
  },
  {
    id: 222,
    name: 'HTML',
    src: htmlImg,
  },
  {
    id: 27,
    name: 'CSS',
    src: cssImg,
  },
  {
    id: 28,
    name: 'SASS',
    src: sassImg,
  },
  {
    id: 29,
    name: 'Stylus',
    src: stylusImg,
  },
  {
    id: 30,
    name: 'LESS',
    src: lessImg,
  },
];

export default () => {
  return (
    <section>
      <div className="skills__container">
        {skills.map((skill, index) => {
          return (
            <div className="skills__image-container" key={skill.id}>
              <figure className="skills__figure">
                <img
                  src={skill.src}
                  alt={skill.name}
                  height="50px"
                  width="50px"
                />
                <p className="skills__image-label">{skill.name}</p>
              </figure>
            </div>
          );
        })}
      </div>
    </section>
  );
};
