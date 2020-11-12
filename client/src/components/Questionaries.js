import React from 'react';
import PropTypes from 'prop-types';

const Questionaries = () => {
  return (
    <div>
      
      <tr> <td><h5>1. Do you have eatching ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address" value = "q1"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>
      <tr> <td><h5>2. Do you have tearing in your eye ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>
      <tr> <td><h5>3. Do you feel burning eyes ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>
      <tr> <td><h5>4. Do you have headache or flu ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>
      <tr> <td><h5>5. Do you feel redness of the eye ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>
      <tr> <td><h5>6. Do you have any bluring in vision ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>
      <tr> <td><h5>7. Are there any green or white discharge from your eye ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>
      <tr> <td><h5>8. Do you have poor night vision ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>
      <tr> <td><h5>9. Do you feel cloudy in vision ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>
      <tr> <td><h5>10. Can you identify colors clearly ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>
      <tr> <td><h5>11. Do you recently change or spectacles ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>
      <tr> <td><h5>12. Do you have double vision in single eye ? </h5> </td> </tr>
      <tr> <td><h5><input type="radio" name="address"></input> Yes </h5> </td>
      <td><h5><input type="radio" name="address"></input> No </h5> </td> 
      </tr>

      <button type='submit' className='btn upload btn-block mt-4'><span>Submit Answers</span></button>
      {/* <td><input type="radio" name="address" value=''>Yes</input></td> */}
      
     
</div>

  );
};

Questionaries.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Questionaries;
