import React, { Component } from 'react';

class Checkbox extends Component {
    state = {ischecked:true  }

    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
      }
      render() {
        return (
          <label>
            <input type="checkbox"
              checked={this.state.isChecked}
              onChange={this.toggleChange}
            />
            Check Me!
          </label>
        );
      }
    }
 
export default Checkbox;