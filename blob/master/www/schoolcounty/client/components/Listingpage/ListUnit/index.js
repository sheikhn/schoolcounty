import React, { Component } from 'react'
import {Link} from 'react-router'

class ListUnit extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
       <div class="row">
                  <div class="col-xs-7 col-sm-5 col-md-7 col-lg-6 clearfix school-info">
                    <div class=" fl js-schoolPhoto">
                      <img src="./../assets/img/product.jpg" alt="No school photo available" class="thumbnail-border"/>
                    </div>
                    <div class="fl pll">
                      <div class="ptm notranslate">
                        <div class="mtm "></div>
                        <div><Link style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" to={"/details"}>{this.props.name}


                        </Link></div>
                        <div class=" font-size-small rs-schoolAddress">{this.props.location}</div>
                        <div class="clearfix visible-xs font-size-small">
                          <div class="prs fl ">Public district</div>
                          <div class="fl">9-12,{this.props.website}</div>
                        </div>
                      </div>
                      <div class="font-size-small mvm clearfix ptm ">
                        <div class="fl">
                          <span class="prm vam"><span class="iconx16-stars i-16-orange-star i-16-star-2"></span><span class="iconx16-stars i-16-grey-star i-16-star-3"></span></span>
                          <a class="font-size-small js-reviewCount" href="/missouri/moberly/1249-Moberly-Sr.-High-School/#Reviews">{this.props.review} reviews</a>
                        </div>
                        <div class="phm fl">|</div>
                        <div class="prs fl">Public district</div>
                        <div class="fl">9-12</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-5 col-sm-4 col-md-3 col-lg-4 icons">
                    <div class="ptl "></div>
                    <div class="row">

                      
                      <div class="col-xs-6 col-sm-4 mvl tac">
                        <a href="/missouri/moberly/1249-Moberly-Sr.-High-School/">

  <span class="gs-rating circle-rating--5 circle-rating--xtra-small ma">
      {this.props.schoolrating}
  </span>

                          <div class="pts"></div>
                          <span class="tac font-size-xs db link-darkgray" style={{lineheight: '1.3em'}}>SchoolCounty<br/>Rating</span>
                        </a>            </div>
                      
                      <div class="col-xs-6 col-sm-4 mtl mbs js-schoolFitScore">
                      </div>
                    </div>
                  </div>
                  
                  
                  <div class=" col-sm-3 col-md-2 tar pvl">
                    <div class="clearfix">
                      <div class="btn btn-default full-width clearfix mbm db fl js-compareSchoolButton" id="js-compareSchool1249" data-schoolname="Moberly Sr. High School" data-schoolstate="mo" data-schoolid="1249" data-schoolrating="5"
                           style={{cursor: 'pointer', backgroundColor: '#9dc997',padding: '.6em 2em'}}>
                        <input type="checkbox" style={{    margin: '2px !important',    float: 'left'}}/>
                          <div class="fl js-compareSchoolsButtonText"><Link to={"/compare"} data-toggle="tooltip" title="Compare">Compare</Link></div>
                      </div>
                    </div>
                  </div>
                </div>

    )
  }
}

export default ListUnit