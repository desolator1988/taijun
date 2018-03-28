import React, { Component } from 'react';
import timg from '../static/img/baidu-timg.jpeg';
import timg2 from '../static/img/baidu-timg2.jpeg';
import timg3 from '../static/img/baidu-timg3.jpeg';
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
          <Carousel autoplay={false} autoplaySpeed={5000}>
            <div>
              <img src={timg} alt={'home-pic1'} height={'auto'} width={'100%'} />
            </div>
            <div>
              <img src={timg2} alt={'home-pic2'} height={'auto'} width={'100%'} />
            </div>
            <div>
              <img src={timg3} alt={'home-pic3'} height={'auto'} width={'auto'} />
            </div>
          </Carousel>

        </div>
        )

    }


}
export default Home;