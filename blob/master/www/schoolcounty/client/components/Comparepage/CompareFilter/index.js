import React,{Component} from 'react'
import {Link} from 'react-router'

class CompareFilter extends Component{
    render(){
        return(
            <header style={{padding:" 20px"}}>
                <h2>Compare Schools</h2>

                <div class="actions" style={{float:" right"}}>

                    <Link to={"/listing"} class="filter" style={{cursor:" pointer", backgroundColor: "#9dc997", padding: ".6em 2em", marginLeft: "1.6em"}}>Reset</Link>
                </div>
            </header>
        )
    }
}

export default CompareFilter