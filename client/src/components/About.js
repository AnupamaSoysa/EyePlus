import React from 'react';
import PropTypes from 'prop-types';

const About = () => {
  return (
    <div>
      
      <tr> <td><h5>Step 1 : Browse to your gallary and select eye image. </h5> </td> </tr>
      
      <tr> <td><h5>Step 2 : Browse to your gallary and select eye image. </h5> </td> </tr>

      <tr> <td><h5>Step 3 : Load the image by clicking on "Load Image" button. </h5> </td> </tr>

      <tr> <td><h5>Step 4 : Navigate to questions by clicking on "Questionaries" button. </h5> </td> </tr>

      <tr> <td><h5>Step 5 : Give "Yes" and "No" answers to the gven questions. </h5> </td> </tr>
    
      <tr> <td><h5>Step 6 : Click on "Submit" button. </h5> </td> </tr>
      
</div>

  );
};

About.propTypes = {
  msg: PropTypes.string.isRequired
};

export default About;
