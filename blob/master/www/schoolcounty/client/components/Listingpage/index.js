import React, {Component} from 'react';
import ListUnit from "./ListUnit/index";


class Listingpage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedSchools: []
        }
        this.addSchoolToCompare = this.addSchoolToCompare.bind(this);
        this.compareSchools = this.compareSchools.bind(this);
    }

    addSchoolToCompare(id) {
        let newSelectedSchools = this.state.selectedSchools;
        if(newSelectedSchools.includes(id)){
            let index = newSelectedSchools.indexOf(id);
            newSelectedSchools.slice(newSelectedSchools, index);
        } else {
            newSelectedSchools.push(id);
        }
        this.setState({
            selectedSchools: newSelectedSchools
        })
    }

    compareSchools() {
        //console.log('compare', this.state.selectedSchools.length);
        //zconsole.log(this.props);
        if (this.state.selectedSchools.length > 1) {
            //redirect to compare with selectedschoold ids
            let schools = this.state.selectedSchools;
            this.props.history.push({
              pathname: '/compare',
              search: '?id='.schools,
              state: {ids: schools}
            })
        }
    }


    render(){

        const { schools } = this.props;

        let schoolListDiv = [];
        let schoolList = schools.list;
        for (let schoolIndex in schoolList) {
            let schoolDetails = schoolList[schoolIndex];
            schoolListDiv.push(
                <li class="mix color-3 check1 radio2 option3" key = {schoolIndex}>
                    <ListUnit details={schoolDetails} addSchoolToCompare={this.addSchoolToCompare}
                    compareSchools={this.compareSchools} allowCompare={this.state.selectedSchools.length >1}      />
                </li>
            );
        }

        return(
            <div class="col-md-12">
            {schoolListDiv}
            </div>
        )
    }
}

export default Listingpage;
