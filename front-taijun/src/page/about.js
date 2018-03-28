import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
        super(props);
        this.state = {
          foo: props.defaultFoo,
        };
    }

    render () {
      return(
        <div className={'about'}>this is About page...</div>
        )

    }


}
export default About;