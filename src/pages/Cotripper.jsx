import React from 'react';
import ProjectContent from '../components/ProjectContent';

export default function Cotripper() {
  return (
    <div className='page'>
      <ProjectContent
        title='Cotripper'
        link='https://cotripper.netlify.app/home'
        gif={require('../components/CSS/cotrip.gif')}
        description='a collaborative open sourced, full stack, client project for traveling single mothers built using react and django.'
        challenge=''
        tech='MongoDB, Mongoose, Node.js, Express.js, React.js, Victory Charts'
        github='https://github.com/CotripperPlatform/CoTrip'
        link='https://cotripper.netlify.app/home'
      />
    </div>
  );
}
