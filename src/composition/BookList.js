import React, { Component } from "react";
export default class BooksList extends Component {
    render() {
    return (
      <div className="search">
        {this.props.propsItems.map((item, i) => {
          return (
            <div className='searchResult'>
              <img src={item.image}
              alt={item.title}
              className="img" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text"><b>Author:</b> {item.authors}</p>
                <a href={item.link} target="_blank" className="btn btn-primary">See this Book</a>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}