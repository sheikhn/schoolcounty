
import React,{Component} from 'react'
import Search from "./Search/index";
import Categories from './Categories/index';
import {Link} from 'react-router'

class Home extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>


            <div>

             <div class="jumbotron">
                <div class="container text-center">
                    <Link href="/listing" ><h1 style={{color: '#fff'}}>Find the Right School for You</h1></Link>
                    <p style={{color: '#fff'}}>Start your search for a great school at SchoolCounty.com! We have reviews,ratings,recommendation,location,scores,rankings,school and district boundaries,student/teacher ratios ,scores of other userful metrics and information of over 10,000 elementary,primary and high school in India!</p>
                         <Search setFilter={this.props.setFilter} schools={this.props.schools}/>
                </div>
             </div>

            <Categories />


            </div>

            </div>
        )
    }
}

export default Home