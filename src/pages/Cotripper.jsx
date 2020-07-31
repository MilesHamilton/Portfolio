import React from 'react';
import ProjectContent from '../components/ProjectContent';

export default function Cotripper() {
  return (
    <div className='page'>
      <ProjectContent
        title='Cotripper'
        link='https://cotripper.netlify.app/home'
        gif={require('../components/CSS/cotripper.jpg')}
        descriptionTitle='Mom Could Use a Break'
        description='a gigantic, collaborative, open sourced, client project for traveling single mothers to find and connect with one another.'
        challenges={[
          {
            challenge:
              'Working through 1000s of lines of code, while using best coding pratices to impliment your own features',
          },
          {
            challenge:
              'Conducting standup code reviews where you have to explain what you did, where you are now, and whats next',
          },
          {
            challenge:
              'Using GIT to its maximum capicity, branching and merging trees, creating detailed yet succinct commits and unfortunately reverting changes.',
          },
        ]}
        tech={[
          { tech: 'Django REST' },
          { tech: 'React.js' },
          { tech: 'Material UI' },
        ]}
        github='https://github.com/CotripperPlatform/CoTrip'
        link='https://cotripper.netlify.app/home'
      />
    </div>
  );
}
