import React, { Component } from 'react';
import SinglePost from './SinglePost.js';
import { FilterPosts } from '../Functions/FilterResults'
import OpenUpContext from '../OpenUpContext.js';


class ResultList extends Component{
    static contextType = OpenUpContext;
    render(){
      
        //component passes in either the default posts to display on the page
        let posts=this.props.posts;
       // console.log(posts)
        let filteredResults = posts;
       // console.log(posts)
       
        let currentDisplay= this.context.currentDisplay;
        
        filteredResults = FilterPosts(posts, currentDisplay)
      //  console.log(filteredResults);
        return(
            <section className="results-list">
                <h2>{this.props.heading}</h2>
                <ul className="result-list">
                    {filteredResults.map((post, i)=>
                    <SinglePost
                      key={i}
                      {...post}
                      postsToDisplay={this.props.postsToDisplay}
                    />)}
                </ul>
            </section>
        )
    }
}

export default ResultList;