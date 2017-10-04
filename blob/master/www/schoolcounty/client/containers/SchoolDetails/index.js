import React, {Component} from 'react'
import { connect } from 'react-redux'
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Details from "../../components/Details/index";



class SchoolDetails extends Component{



    render(){
    return(

        <div>

            <Header/>

    <Details/>

    <Footer/>

        </div>

    )
    }
}



export default connect(

)(SchoolDetails)
