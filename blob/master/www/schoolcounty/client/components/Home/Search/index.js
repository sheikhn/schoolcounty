
import React,{Component} from 'react'
import {Link} from 'react-router'

class Search extends Component{
    render(){
        return(
            <div class="jumbotron">
                <div class="container text-center">
                    <Link href="/listing" ><h1 style={{color: '#fff'}}>Find the Right School for You</h1></Link>
                    <p style={{color: '#fff'}}>Start your search for a great school at SchoolCOunty.com! We have reviews,ratings,recommendation,location,scores,rankings,school and district boundaries,student/teacher ratios ,scores of other userful metrics and information of over 10,000 elementary,primary and high school in India!</p>
                    <form class="search-wrapper" >
                        <div class="inner-addon right-addon"> <i class="glyphicon glyphicon-search"></i>
                        <input id="searchInput" type="text" name="search" placeholder="Type a school,city,pincode,syllabus,district name........."/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search
