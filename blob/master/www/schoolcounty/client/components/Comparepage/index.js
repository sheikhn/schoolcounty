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
            <div style={{padding:"20px"}} >

            <CompareFilter/>

            <div class="limit-width-1200">
                <div class="mha oh js-comparedSchoolsListContainer">
                    <div class="js-comparedSchoolsList" style={{width:"1200px"}}>
                        {schoolUnits}
                        <a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top" role="button" title="Click to return on the top page" data-toggle="tooltip" data-placement="left"><span class="glyphicon glyphicon-chevron-up"></span></a>
                    </div>
                </div>
            </div>


            </div>
        )
    }
}


export default Comparepage