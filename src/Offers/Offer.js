
import Calendar from './image/calendar.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div className='offer-all'>
        <div className='container'>
            <p className='text-center'>Testimony</p>
            <h2 className='text-center'>Happy customers</h2>
            <Carousel>
                <Carousel.Item>
                <Row>
        <Col xs={12} md={4}>
        <div className='card'>
                            <h4>Maria</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='card-div'>
                                <img src={Calendar}/>
                            </div>
                        </div>
        </Col>
        <Col xs={12} md={4}>
        <div className='card'>
                            <h4>Maria</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='card-div'>
                                <img src={Calendar}/>
                            </div>
                        </div>
        </Col>
        <Col xs={12} md={4}>
        <div className='card'>
                            <h4>Maria</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='card-div'>
                                <img src={Calendar}/>
                            </div>
                        </div>
        </Col>
      </Row>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
      <Carousel.Item>
      <div className='card'>
                            <h4>Maria</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='card-div'>
                                <img src={Calendar}/>
                            </div>
                        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='card'>
                            <h4>Maria</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='card-div'>
                                <img src={Calendar}/>
                            </div>
                        </div>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    </div>
  );
}



export default UncontrolledExample;