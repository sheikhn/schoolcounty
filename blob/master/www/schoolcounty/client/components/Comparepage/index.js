import React,{Component} from 'react'

import CompareUnit from './CompareUnit/index'
import CompareFilter from './CompareFilter/index'
import {getSchoolsList} from "../../actions/schools";

class Comparepage extends Component{
    constructor(props){
        super(props);
    }

    getSchoolUnits() {

       
        let schoolList = this.props.schoolUnits;

        let schoolUnitHtml = [];
        for (let unitIndex in schoolList) {
            let schoolUnitData = schoolList[unitIndex];
            
            schoolUnitHtml.push(
                <CompareUnit schoolunit={schoolUnitData}/>
            );
        }

        return schoolUnitHtml;
    }
    render(){


        let schoolUnits = this.getSchoolUnits();
        return(
            <div>

            <CompareFilter/>

            <div class="container">
                 <div class="col-sm-12 col-xs-12">
                    <div class="row">
                    {schoolUnits}   
                    </div>
                </div>
            </div>
            
            </div>
        )
    }
}


export default Comparepage