import React, {Component} from 'react';

class KKhome extends Component {
   state = {
       value: 0
   };

   setNewValue = () => {
       this.setState({value: 1});
   };

   render() {
       return (

                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


              )
   }
}

export default KKhome;