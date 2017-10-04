
import React,{Component} from 'react'
import Search from "./Search/index";
import Categories from './Categories/index';

class Home extends Component{
    render(){
        return(
            <div>


            <div>

            <Search/>

            <Categories />


            </div>

            </div>
        )
    }
}

export default Home