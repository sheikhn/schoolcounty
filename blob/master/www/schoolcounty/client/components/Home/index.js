
import React,{Component} from 'react'
import Search from "./Search/index";

class Home extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

             
                         <Search setFilter={this.props.setFilter} schools={this.props.schools}/>
               


            
        )
    }
}

export default Home