import React, { Component } from 'react';
import timg from '../static/img/baidu-timg.jpeg';
import { Carousel } from 'antd';

class Home extends Component {
  constructor(props) {
        super(props);
        this.state = {
          foo: props.defaultFoo,
        };
    }

    render () {
      return(
        <div className={'home'}>
          <Carousel autoplay={true} autoplaySpeed={5000}>
            <div>
              <img src={timg} alt={'home-pic'} height={'300px'} width={'100%'} />
            </div>
            <div>
              <img src={timg} alt={'home-pic'} height={'300px'} width={'100%'} />
            </div>
            <div>
              <img src={timg} alt={'home-pic'} height={'300px'} width={'100%'} />
            </div>
          </Carousel>


          this is Home page...

        </div>
        )

    }


}
export default Home;