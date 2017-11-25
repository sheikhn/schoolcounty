import React, {Component} from 'react'
import ListUnit from "./ListUnit/index";


class Listingpage extends Component{



    render(){

        const { schools } = this.props;


        let schoolListDiv = [];
        let schoolList = schools.list;
        for (let schoolIndex in schoolList) {
            let schoolDetails = schoolList[schoolIndex];
            console.log('schoolDetails', schoolDetails);
            schoolListDiv.push(
                <li class="mix color-3 check1 radio2 option3" key = {schoolIndex}>
                    <ListUnit details = {schoolDetails}      />
                </li>
            );
        }

        return(
            <div>
            {schoolListDiv}
            </div>
        )
    }
}

export default Listingpage;
