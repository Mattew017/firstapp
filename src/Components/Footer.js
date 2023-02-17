import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
            Главная</a></li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
            Возможности</a></li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
            Цены</a></li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
            FAQs</a></li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
            О продукте</a></li>
        </ul>
        <p className="text-center text-muted">© 2023 React JS</p>
      </footer>
    </div>
    )
  }
}
