import React, { Component } from 'react'
import {Link} from 'react-router'

class ListUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ids : []
        }
    }

    selectSchool(id) {
      
      this.props.addSchoolToCompare(id);
    //this.props.setFilterParams({'compareId': compareId})
    }

 

  render() {

     const {details} = this.props;
     
     const {address} = this.props.details;
     console.log('ladn',this.props.details.address);
     //let getAddressline1 = this.getAddressline1(); 
     //let getAddressline2 = this.getAddressline2();  
     
    return (

       <div class="listContent">
          <div class="row">
            <div class="col-sm-5 col-xs-12">
              <div class="categoryImage">
                <img src="./assets/img/school1.jpg" alt="Image category" class="img-responsive img-rounded" />
                <span class="label label-primary">Verified</span>
              </div>
            </div>
            <div class="col-sm-7 col-xs-12">
              <div class="categoryDetails">
                <ul class="list-inline rating">
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                <h2>
                <Link style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" 
                        to={"/details"} query={{ id: details.id }}>{details.name}
                </Link>
                   <span class="likeCount"><i class="fa fa-heart-o" aria-hidden="true"></i> 10 k</span></h2>
                <p> {address.Address_Line_1}<span class="placeName">{address.Address_Line_2}</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua. </p>
                <input class="selectCompare" value={details.id} type="checkbox" onClick={() => this.selectSchool(details.id)} style={{    margin: '2px !important',    float: 'left'}}/>
                <div class="fl js-compareSchoolsButtonText">
                    <p class={this.props.allowCompare ? '' :'disabled'} onClick={() => this.props.compareSchools()}  data-toggle="tooltip" title="Compare">Compare</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default ListUnit