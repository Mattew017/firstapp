import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import calculator from '../assets/calculator.jpg'
import blog from '../assets/blog.jpg'
import recipe from '../assets/recipe.jpg'


class ProjectCard extends Component {
    render(image, title, text){
        return(
            <Card  className='m-2'>
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.text}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Это Footer</small>
          </Card.Footer>
        </Card>
        )

    }
}

export default class Projects extends Component {
  render() {
    return (
        <div>
        <a name= "projects"></a>
        <CardGroup>
            <ProjectCard image={calculator} title={'Калькулятор на React в стиле IOS'}
             text={'Это простой проект, который копирует стиль калькулятора в IOS'}/>
            <ProjectCard image={blog} title={'Мини-блог на React JS'}
             text={'Это простой блог, написанный на React JS. В нем можно создавать посты с картинками и описаниями.'}/>
            <ProjectCard image={recipe} title={'Сайт для поиска рецептов'}
             text={'Удобное приложение для того, чтобы находить рецепты любимых блюд.'}/>
      </CardGroup>
        </div>
        
    )
  }
}


//Калькулятор на React в стиле IOS
//Это простой проект, который копирует стиль калькулятора в IOS
//Мини-блог на React JS
//Это простой блог, написанный на React JS. В нем можно создавать посты с картинками и описаниями.
//Сайт для поиска рецептов
//Удобное приложение для того, чтобы находить рецепты любимых блюд.