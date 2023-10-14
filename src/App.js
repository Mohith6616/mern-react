import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header,intro,image,aboutMe,skills,task,resume,footer } from './Project';
library.add(fas);

function App() {
    return (
      <div>
        <Header />
        {intro()}
        {image()}
        {aboutMe()}
        {skills()}
        {task()}
        <br></br>
        {resume()}
        <br></br>
        <hr></hr>
        {footer()}
      </div>
      
    );
  }

export default App;