import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <CarouselItem>
            <img
                className='d-block w-100'
                src={photo1}
                alt="photo1"
            />
            <Carousel.Caption>
                <h3>Пейзаж утреннего тумана и гор с воздушными шарами на восходе солнца.</h3>
            </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
            <img
                className='d-block w-100'
                src={photo2}
                alt="photo2"
            />
            <Carousel.Caption>
                <h3>Река в окружении лесов под облачным небом в тюрингии в германии</h3>
            </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
            <img
                className='d-block w-100'
                src={photo3}
                alt="photo3"
            />
            <Carousel.Caption>
                <h3>Красивый снимок леса с высокими зелеными деревьями</h3>
            </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    )
  }
}

//Пейзаж утреннего тумана и гор с воздушными шарами на восходе солнца.