import React ,{Component} from 'react'
import { connect } from 'react-redux'

import * as SchoolDetailsAction from '../../actions/schools'


class Details extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.getSchoolDetails();
    }

    render(){

        const { todos, actions, children , schoolDetail} = this.props
        console.log('render');
        console.log(schoolDetail);

        console.log(schoolDetail.fetched);
        if (!schoolDetail.fetched){
            return (<div>
                no data
            </div>)
        }

        const {schoolData, schoolCountyRating, schoolFacilities} = schoolDetail.schoolDetail;

        return(

            <main style={{marginTop:'60px',marginBottom: '20px'}}>


                <div class="school-profile">
                    <div class="breadcrumbs">
                        <div class="container">
                            <span></span>
                            <span><a href="/missouri/">Karnataka</a></span>
                            <span> &gt; </span>
                            <span><a href="/missouri/moberly/">Bangalore</a></span>
                            <span> &gt; </span>
                            <span><a href="/missouri/moberly/schools/">Schools</a></span>
                            <span> &gt; </span>
                            <span>School Profile</span>
                        </div>
                    </div>


                    <div id="hero">
                        <div class="container">
                            <div class="school-name-container">
                                <h1 class="school-name">{schoolData.name}

                                </h1>

                                <span>
  <span class="osp-label">Unclaimed</span>
  <a data-content-type="info_box" data-content-html="This school has not yet claimed its profile.<br /><br /> School leaders - <a href='/official-school-profile/register.page?city=Moberly&amp;schoolId=1249&amp;state=MO'>claim your school's profile</a> to edit general information and share what makes your school unique. <a href='/gk/schools/'>Learn more</a>.
" class="gs-tipso info-circle tipso_style" data-ga-click-label="Unclaimed badge"  data-remodal-target="modal_info_box"><span class="icon-question"></span>
  </a>
</span>

                            </div>

                            <div class="school-contact">
                                <div class="school-contact__item school-contact__address">
                                    <a href="#Neighborhood" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="Hero links" data-ga-click-label="Neighborhood">

                                        <div class="badge-and-content">
                                            <span class="badge icon-location"></span><span class="content">{schoolData.address}</span>
                                        </div>

                                    </a>
                                </div>
                                <div class="school-contact__item school-contact__district-name">
                                    <a class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="Hero links" data-ga-click-label="District" href="/missouri/moberly/moberly-school-district/">{schoolData.district} District</a>
                                </div>
                                <div class="school-contact__item school-contact__phone">
                                    <a href="tel:(660) 269-2660" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="Hero links" data-ga-click-label="Phone">

                                        <div class="badge-and-content">
                                            <span class="badge icon-phone"></span><span class="content">            {schoolData.phonenumber}
</span>
                                        </div>

                                    </a>
                                </div>
                                <div class="school-contact__item school-contact__more">
                                    <a class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="Hero links" data-ga-click-label="More Contact" href="#Neighborhood">More contact</a>
                                </div>
                            </div>

                            <div class="school-info">
                                <div class="school-info__item school-info__gs-rating">
                                    <div class="gs-rating-with-label">
                                        <div class="gs-rating-with-label__rating">
                                            <div class="rs-gs-rating circle-rating--large-responsive circle-rating--5">
                                                {schoolData.schoolscountyrating}<span class="rating-circle-small">/10</span>
                                            </div>
                                        </div>
                                        <div class="gs-rating-with-label__label">

                                            <span class="coming-soon">Coming soon!</span>
                                            <span class="info-circle"><span class="icon-question"></span></span>

                                            SchoolCounty Rating
                                        </div>
                                    </div>
                                </div>
                                <div class="school-info__item school-info__five-star-rating school-info-reviews-mobile" >
                                    <div class="label">Reviews</div>

                                    <div class="five-star-rating ">
  <span class="five-star-rating__number">
      {schoolData.reviews}
  </span>
                                        <span class="rs-five-star-rating five-star-rating__stars">

  <span class="five-stars"><span class="icon-star filled-star"></span><span class="icon-star filled-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span></span>


    </span>
                                    </div>

                                </div>
                                <div class="school-info__item">
                                    <div class="label">Grades</div>
                                    <div>{schoolData.grades}</div>
                                </div>
                                <div class="school-info__item">
                                    <div class="label">Students</div>
                                    <div>{schoolData.students}</div>
                                </div>
                                <div class="school-info__item">
                                    <div class="label">Type</div>
                                    <div>{schoolData.type}</div>
                                </div>

                                <div class="vertical-items js-toggle-target" style={{display: 'none'}}>
                                    <div class="school-info__item-mobile">
                                        <span class="label">Grades</span>
                                        <span>{schoolData.grades}</span>
                                    </div>
                                    <div class="school-info__item-mobile">
                                        <span class="label">Students</span>
                                        <span>{schoolData.students}</span>
                                    </div>
                                    <div class="school-info__item-mobile">
                                        <span class="label">Type</span>
                                        <span>{schoolData.type}</span>
                                    </div>
                                </div>

                                <a href="javascript:void(0);" class="see-more js-toggle-button">Show more</a>
                            </div>
                        </div>
                    </div>


                    <div class="static-container">
                        <div class="right_rail">
                            <div class="schoollist" style={{marginTop: '10px',marginBottom: '10px'}}>
                                <h2 style={{    fontSize: '100%',fontWeight:'bold',textAlign:'center',backgroundColor: 'cornflowerblue',padding: '5px'}}>Recommending/Related Schools</h2>
                                <ul class="images" style={{height:'700px',margin: '0',padding: '0',whiteSpace: 'nowrap',width: '100%',overflowY: 'auto'}}>
                                    <li style={{height: '100px',padding: '10px'}}> <div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">Carmel High School</a><div class="school-info"><span>Basaveshwaranagar</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--9">9<span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/prairie-home/1597-Prairie-Home-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/prairie-home/1597-Prairie-Home-High-School/">National Public School</a><div class="school-info"><span>Koramangala</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--9">9<span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/hale/687-Hale-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/hale/687-Hale-High-School/">St. Germain High School</a><div class="school-info"><span> Fraser Town</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">Kendriya Vidyalaya</a><div class="school-info"><span>Malleswaram</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">
                                        Bangalore Education Society</a><div class="school-info"><span>Malleswaram</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--9">9<span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/prairie-home/1597-Prairie-Home-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/prairie-home/1597-Prairie-Home-High-School/">National Public School</a><div class="school-info"><span>Indiranagar</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">
                                        Notre Dame Academy</a><div class="school-info"><span>Choodasandra</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">St. Joseph's  College</a><div class="school-info"><span>JP Nagar</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">Carmel High School</a><div class="school-info"><span>Basaveshwaranagar</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--9">9<span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/prairie-home/1597-Prairie-Home-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/prairie-home/1597-Prairie-Home-High-School/">National Public School</a><div class="school-info"><span>Koramangala</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--9">9<span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/hale/687-Hale-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/hale/687-Hale-High-School/">St. Germain High School</a><div class="school-info"><span> Fraser Town</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">Kendriya Vidyalaya</a><div class="school-info"><span>Malleswaram</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">
                                        Bangalore Education Society</a><div class="school-info"><span>Malleswaram</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--9">9<span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/prairie-home/1597-Prairie-Home-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/prairie-home/1597-Prairie-Home-High-School/">National Public School</a><div class="school-info"><span>Indiranagar</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">
                                        Notre Dame Academy</a><div class="school-info"><span>Choodasandra</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">St. Joseph's  College</a><div class="school-info"><span>JP Nagar</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">Carmel High School</a><div class="school-info"><span>Basaveshwaranagar</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--9">9<span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/prairie-home/1597-Prairie-Home-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/prairie-home/1597-Prairie-Home-High-School/">National Public School</a><div class="school-info"><span>Koramangala</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--9">9<span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/hale/687-Hale-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/hale/687-Hale-High-School/">St. Germain High School</a><div class="school-info"><span> Fraser Town</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">Kendriya Vidyalaya</a><div class="school-info"><span>Malleswaram</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">
                                        Bangalore Education Society</a><div class="school-info"><span>Malleswaram</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--9">9<span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/prairie-home/1597-Prairie-Home-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/prairie-home/1597-Prairie-Home-High-School/">National Public School</a><div class="school-info"><span>Indiranagar</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">
                                        Notre Dame Academy</a><div class="school-info"><span>Choodasandra</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                    <li style={{height: '100px',padding: '10px'}}><div class="nearby-school"><div class="rating"><div class="circle-rating circle-rating--small circle-rating--8"><span class="rating-circle-small">/10</span></div></div><div><a class="js-gaClick" href="/missouri/bucklin/289-Bucklin-High-School/" data-ga-click-category="Profile" data-ga-click-action="Nearest high-performing" data-ga-click-label="/missouri/bucklin/289-Bucklin-High-School/">St. Joseph's  College</a><div class="school-info"><span>JP Nagar</span></div><div>Bangalore,Karnataka</div></div></div></li>
                                </ul>
                            </div>



                        </div>
                        <div class="content">

                            <div>

                                <div id="toc">
                                    <div class="toc-container-box">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-4" id="academics-tour-anchor">
                                                <div class="toc-section-title">
                                                    ACADEMICS&nbsp;<span class="icon-question"></span>


                                                </div>


                                                <div class="clearfix toc-entry">
                                                    <a href="#Test_scores" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Test scores">
                                                        <span>Test scores</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {schoolData.testscore}<span class="denominator">/10</span>
          </span>
                                                    </a>
                                                </div>


                                                <div class="clearfix toc-entry">
                                                    <a href="#College_readiness" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="College readiness">
                                                        <span>College readiness</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
          {schoolData.collegescore}<span class="denominator">/10</span>
          </span>
                                                    </a>
                                                </div>

                                                <div class="clearfix toc-entry">
                                                    <a href="#Advanced_courses" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Advanced courses">
                                                        <span>Advanced courses</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {schoolData.advancescore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>

                                            </div>
                                            <div class="col-xs-12 col-sm-4" id="equity-tour-anchor">
                                                <div class="toc-section-title">
                                                    EQUITY&nbsp;<span class="icon-question"></span>


                                                </div>

                                                <div class="clearfix toc-entry">
                                                    <a href="#Race_ethnicity" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Race/ethnicity">
                                                        <span>Attendance</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {schoolData.attendancescore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>



                                                <div class="clearfix toc-entry">
                                                    <a href="#Low-income_students" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Low-income students">
                                                        <span>Low-income students</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--4 circle-rating--xtra-small">
          {schoolData.lowincscore}<span class="denominator">/10</span>
          </span>
                                                    </a>
                                                </div>

                                                <div class="clearfix toc-entry">
                                                    <a href="#Students_with_Disabilities" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Students with disabilities">
                                                        <span>Disabled Students</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {schoolData.disabilitiesscore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>

                                            </div>
                                            <div class="col-xs-12 col-sm-4" id="environment-tour-anchor">
                                                <div class="toc-section-title">
                                                    ENVIRONMENT&nbsp;<span class="icon-question"></span>


                                                </div>

                                                <div class="clearfix toc-entry">
                                                    <a href="#Students" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Students">
                                                        <span>Students</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {schoolData.studentscore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>


                                                <div class="clearfix toc-entry">
                                                    <a href="#Race_ethnicity*Discipline_and_attendance" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Discipline &amp; attendance">
                                                        <span>Discipline</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {schoolData.disciplinescore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>


                                                <div class="clearfix toc-entry">
                                                    <a href="#Teachers_staff" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Teachers &amp; staff">
                                                        <span>Teachers &amp; staff</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {schoolData.teacherscore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>


                                                <div class="clearfix toc-entry">
                                                    <a href="#Neighborhood" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Neighborhood">
                                                        <span>Neighborhood</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {schoolData.neighborscore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                            <div class="js-Profiles_First2_Ad-wrapper hidden-print visible-xs visible-sm">
                                <div class="gs_ad_slot ad-slot tac" id="Profiles_First2_Ad" data-ad-size="[300, 250]" data-dfp="Profiles_First" data-ad-setting="box_or_tall"></div>

                                <div class="" width="100%">
                                    <div class="advertisement-text ma dn">
                                        ADVERTISEMENT
                                    </div>
                                </div>

                            </div>


                            <a class="anchor-mobile-offset" name="Academics"></a>
                            <div class="academics-container">
                                <div class="row">
                                    <div class="col-xs-12 col-lg-3">
                                        <div class="rating-container__title" style={{position: 'static', width: 'auto', top: '20px'}}>
                                            Academics
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-lg-9">

                                        <div id="TestScores" class="rating-container rs-test-scores" data-ga-click-label="Test scores">
                                            <a class="anchor-mobile-offset" name="Test_scores"></a>
                                            <div class="rating-container__rating js-historical-module">

                                                <div class="module-header">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-md-8">
                                                            <div class="circle-rating--5 circle-rating--medium">
                                                                {schoolData.testscore}<span class="rating-circle-small">/10</span>
                                                            </div>
                                                            <div class="title-container">
                                                                <div>
            <span class="title">
            Test scores
        </span>

                                                                    <span class="icon-question"></span>


                                                                </div>
                                                                <span>Find out <a href="/gk/articles/state-standardized-test-scores-issues-to-consider/">what state standardized test scores really tell you</a> about a school – and what they don’t.</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-md-4 show-history-button">
                                                            <div>
                                                                <button class="js-historical-button">
                                                                    <span class="icon-clock"></span>
                                                                    <div class="dib">Past ratings</div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div class="historical-ratings js-historical-target" >
                                                    <div class="title">
                                                        <h4>Past SchoolCounty Test Score Ratings</h4>
                                                        <p>This chart shows how this school's SchoolCounty Test Score Rating has changed over time.</p>
                                                    </div>
                                                    <div class="row panel">
                                                        <div class="col-xs-12 col-md-5">
                                                            <div class="header">
                                                                <div>Rating</div>
                                                                Year
                                                            </div>
                                                            <div class="rating-row clearfix">
                                                                <div class="gs-rating-inline circle-rating--xtra-small circle-rating--5">
                                                                    {schoolData.y16score}<span class="rating-circle-small">/10</span>
                                                                </div>
                                                                2016
                                                            </div>
                                                            <div class="rating-row clearfix">
                                                                <div class="gs-rating-inline circle-rating--xtra-small circle-rating--5">
                                                                    {schoolData.y15score}<span class="rating-circle-small">/10</span>
                                                                </div>
                                                                2015
                                                            </div>
                                                            <div class="rating-row clearfix">
                                                                <div class="gs-rating-inline circle-rating--xtra-small circle-rating--5">
                                                                    {schoolData.y14score}<span class="rating-circle-small">/10</span>
                                                                </div>
                                                                2014
                                                            </div>
                                                            <div class="rating-row clearfix">
                                                                <div class="gs-rating-inline circle-rating--xtra-small circle-rating--6">
                                                                    {schoolData.y13score}<span class="rating-circle-small">/10</span>
                                                                </div>
                                                                2013
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-md-6 col-md-offset-1 text">
                                                            <p class="parent-tip">
                                                                <img src="/assets/school_profiles/owl.png" alt="Owl" />
                                                                <span class="speech-bubble left">Notes</span>
                                                            </p>
                                                            Ratings show a school’s performance relative to other schools in the state. Ratings can change for a variety of reasons, including changes in assessments or changes in rating methodology. Because the underlying data and methodology can vary over time, comparing past ratings to current ones may not accurately reflect changes in the school’s quality. If we are missing a rating year, it’s most likely because we did not receive the underlying data from the state Department of Education for that year and so did not compute a rating.

                                                        </div>
                                                    </div>
                                                </div>



                                                <div class="panel">
                                                    <div class="auto-narration"><h3 class="neutral">Worth a deeper look:</h3> <p>Test scores at this school are <span class="emphasis">about the same as</span> the state average, though still below the top-performing schools in the state. Because test scores in some states are so low, many students at this school may not be performing at grade level. </p> <p class="parent-tip"><img src="/assets/school_profiles/owl.png" /><span class="speech-bubble left">Parent tips</span></p> <p class="footnote">Ask the school what it’s doing to help students who are behind. Understand what <a href="/gk/milestones/">on-track learning looks like</a>, and ask the school what it’s doing to accelerate progress for students.</p>


                                                        <div class="row bar-graph-display">
                                                            <div class="test-score-container clearfix">
                                                                <div class="col-xs-12 col-sm-5 subject">English</div>
                                                                <div class="col-sm-1"></div>
                                                                <div class="col-xs-9 col-sm-4">
                                                                    <div class="bar-graph-container">
                                                                        <div class="score">{schoolData.engscore}%</div>
                                                                        <div class="viz">
                                                                            <div class="item-bar">
                                                                                <div class="single-bar-viz">
                                                                                    <div class="color-row rating_8" style={{width:'70.6%'}}></div>
                                                                                    <div class="grey-row" style={{width:'29.400000000000006%'}}></div>
                                                                                    <div class="arrow-up"><span style={{top: '11px',left:'66.3%'}}></span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="state-average">
                                                                                State avg: {schoolData.avgengscore}%
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div class="col-xs-3 col-sm-2">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div class="row bar-graph-display">
                                                            <div class="test-score-container clearfix">
                                                                <div class="col-xs-12 col-sm-5 subject">Government</div>
                                                                <div class="col-sm-1"></div>
                                                                <div class="col-xs-9 col-sm-4">
                                                                    <div class="bar-graph-container">
                                                                        <div class="score">{schoolData.govscore}%</div>
                                                                        <div class="viz">
                                                                            <div class="item-bar">
                                                                                <div class="single-bar-viz">
                                                                                    <div class="color-row rating_6" style={{width:'58.20000000000001%'}}></div>
                                                                                    <div class="grey-row" style={{width:'41.79999999999999%'}}></div>
                                                                                    <div class="arrow-up"><span style={{top: '11px',left:'63.3%'}}></span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="state-average">
                                                                                State avg: {schoolData.avggovscore}%
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div class="col-xs-3 col-sm-2">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div class="row bar-graph-display">
                                                            <div class="test-score-container clearfix">
                                                                <div class="col-xs-12 col-sm-5 subject">English 2</div>
                                                                <div class="col-sm-1"></div>
                                                                <div class="col-xs-9 col-sm-4">
                                                                    <div class="bar-graph-container">
                                                                        <div class="score">{schoolData.eng2score}%</div>
                                                                        <div class="viz">
                                                                            <div class="item-bar">
                                                                                <div class="single-bar-viz">
                                                                                    <div class="color-row rating_8" style={{width:'73.1%'}}></div>
                                                                                    <div class="grey-row" style={{width:'26.900000000000006%'}}></div>
                                                                                    <div class="arrow-up"><span style={{top: '11px',left:'79.2%'}}></span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="state-average">
                                                                                State avg: {schoolData.avgeng2score}%
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div class="col-xs-3 col-sm-2">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="rating-container__more-items">

                                                        <div class="js-drawer show-more show-more--closed" data-ga-category="Profile" data-ga-label="Test Scores">
                                                            <div class="show-more__items js-toggle-target" >

                                                                <div>
                                                                    <div class="row bar-graph-display">
                                                                        <div class="test-score-container clearfix">
                                                                            <div class="col-xs-12 col-sm-5 subject">Algebra I</div>
                                                                            <div class="col-sm-1"></div>
                                                                            <div class="col-xs-9 col-sm-4">
                                                                                <div class="bar-graph-container">
                                                                                    <div class="score">40%</div>
                                                                                    <div class="viz">
                                                                                        <div class="item-bar">
                                                                                            <div class="single-bar-viz">
                                                                                                <div class="color-row rating_4" style={{width:'39.8%'}}></div>
                                                                                                <div class="grey-row" style={{width:'60.2%'}}></div>
                                                                                                <div class="arrow-up"><span style={{top: '11px',left:'65.8%'}}></span></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="state-average">
                                                                                            State avg: 66%
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-3 col-sm-2">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div class="row bar-graph-display">
                                                                        <div class="test-score-container clearfix">
                                                                            <div class="col-xs-12 col-sm-5 subject">Geometry</div>
                                                                            <div class="col-sm-1"></div>
                                                                            <div class="col-xs-9 col-sm-4">
                                                                                <div class="bar-graph-container">
                                                                                    <div class="score">46%</div>
                                                                                    <div class="viz">
                                                                                        <div class="item-bar">
                                                                                            <div class="single-bar-viz">
                                                                                                <div class="color-row rating_5" style={{width:'46.2%'}}></div>
                                                                                                <div class="grey-row" style={{width:'53.8%'}}></div>
                                                                                                <div class="arrow-up"><span style={{top: '11px',left:'61.0%'}}></span></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="state-average">
                                                                                            State avg: 61%
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-3 col-sm-2">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div class="row bar-graph-display">
                                                                        <div class="test-score-container clearfix">
                                                                            <div class="col-xs-12 col-sm-5 subject">US History</div>
                                                                            <div class="col-sm-1"></div>
                                                                            <div class="col-xs-9 col-sm-4">
                                                                                <div class="bar-graph-container">
                                                                                    <div class="score">70%</div>
                                                                                    <div class="viz">
                                                                                        <div class="item-bar">
                                                                                            <div class="single-bar-viz">
                                                                                                <div class="color-row rating_7" style={{width:'69.8%'}}></div>
                                                                                                <div class="grey-row" style={{width:'30.200000000000003%'}}></div>
                                                                                                <div class="arrow-up"><span style={{top: '11px',left:'49.4%'}}></span></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="state-average">
                                                                                            State avg: 49%
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-3 col-sm-2">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div class="row bar-graph-display">
                                                                        <div class="test-score-container clearfix">
                                                                            <div class="col-xs-12 col-sm-5 subject">Biology I</div>
                                                                            <div class="col-sm-1"></div>
                                                                            <div class="col-xs-9 col-sm-4">
                                                                                <div class="bar-graph-container">
                                                                                    <div class="score">68%</div>
                                                                                    <div class="viz">
                                                                                        <div class="item-bar">
                                                                                            <div class="single-bar-viz">
                                                                                                <div class="color-row rating_7" style={{width:'68.4%'}}></div>
                                                                                                <div class="grey-row" style={{width:'31.599999999999994%'}}></div>
                                                                                                <div class="arrow-up"><span style={{top: '11px',left:'66.8%'}}></span></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="state-average">
                                                                                            State avg: 67%
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-3 col-sm-2">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div class="row bar-graph-display">
                                                                        <div class="test-score-container clearfix">
                                                                            <div class="col-xs-12 col-sm-5 subject">Algebra II</div>
                                                                            <div class="col-sm-1"></div>
                                                                            <div class="col-xs-9 col-sm-4">
                                                                                <div class="bar-graph-container">
                                                                                    <div class="score">40%</div>
                                                                                    <div class="viz">
                                                                                        <div class="item-bar">
                                                                                            <div class="single-bar-viz">
                                                                                                <div class="color-row rating_4" style={{width:'39.5%'}}></div>
                                                                                                <div class="grey-row" style={{width:'60.5%'}}></div>
                                                                                                <div class="arrow-up"><span style={{top: '11px',left:'70.2%'}}></span></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="state-average">
                                                                                            State avg: 70%
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xs-3 col-sm-2">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="show-more__button js-toggle-button">
                                                                Show more Test scores
                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>

                                            </div>
                                        </div>


                                        <div id="CollegeReadiness" class="rating-container rs-college-readiness" data-ga-click-label="College readiness">
                                            <a class="anchor-mobile-offset" name="College_readiness"></a>
                                            <div class="rating-container__rating js-historical-module">

                                                <div class="module-header">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-md-12">
                                                            <div class="circle-rating--5 circle-rating--medium">
                                                                {schoolData.readinessscore}<span class="rating-circle-small">/10</span>
                                                            </div>
                                                            <div class="title-container">
                                                                <div>
           <span class="title">
             College readiness
           </span>


                                                                </div>
                                                                <span>Learn more about how to help your child graduate ready for college. <a href="/gk/articles/jump-start-college-planning/" target="_blank">See how.</a></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="panel">
                                                    <div class="auto-narration"><h3 class="neutral">Worth a deeper look:</h3> <p>This school is <span class="emphasis">about the same as</span> the state average in key measures of college and career readiness, but depending on the state, average can mean only a minority of students are ready for college and career.</p> <p>(Remember: <span class="emphasis">high graduation rates don't mean much</span> if students are graduating without the coursework and test scores they need to succeed.)</p>  <p class="parent-tip"><img src="/assets/school_profiles/owl.png" /><span class="speech-bubble left">Parent tip</span></p> <p class="footnote">Ask the school what it’s doing to help all students succeed in advanced classes and prepare for <a href="/gk/articles/improving-sat-scores/">college entrance tests</a>.</p>
                                                    </div>



                                                    <div class="row bar-graph-display">
                                                        <div class="test-score-container clearfix">
                                                            <div class="col-xs-12 col-sm-5 subject">
                                                                4-year high school graduation rate



                                                            </div>
                                                            <div class="col-sm-1"></div>
                                                            <div class="col-xs-12 col-sm-6">
                                                                <div class="bar-graph-container">
                                                                    <div class="score">{schoolData.graduationscore}%</div>
                                                                    <div class="person-bar-viz">
                                                                        <div class="person-progress">
                                                                            <div class="background">
                                                                                <span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span>

                                                                            </div>
                                                                            <div class="foreground rating_color_9" style={{width:'89.33%'}}>
                                                                                <span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span>

                                                                            </div>
                                                                        </div>
                                                                        <div class="state-average" style={{paddingLeft: '0px'}}>State avg: {schoolData.avggraduationscore}</div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>





                                                    <div class="row bar-graph-display">
                                                        <div class="test-score-container clearfix">
                                                            <div class="col-xs-12 col-sm-5 subject">Average ACT score



                                                            </div>
                                                            <div class="col-sm-1"></div>
                                                            <div class="col-xs-12 col-sm-6">
                                                                <div class="bar-graph-container">
                                                                    <div class="score">{schoolData.avgactscore}</div>
                                                                    <div class="viz">
                                                                        <div class="item-bar">
                                                                            <div class="single-bar-viz">
                                                                                <div class="color-row rating_6" style={{width:'54.57142857142857%'}}></div>
                                                                                <div class="grey-row" style={{width:'45.42857142857143%'}}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div class="row bar-graph-display">
                                                        <div class="test-score-container clearfix">
                                                            <div class="col-xs-12 col-sm-5 subject">
                                                                AP course participation



                                                            </div>
                                                            <div class="col-sm-1"></div>
                                                            <div class="col-xs-12 col-sm-6">
                                                                <div class="bar-graph-container">
                                                                    <div class="score">{schoolData.participationscore}%</div>
                                                                    <div class="person-bar-viz">
                                                                        <div class="person-progress">
                                                                            <div class="background">
                                                                                <span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span>

                                                                            </div>
                                                                            <div class="foreground rating_color_2" style={{width:'17.0%'}}>
                                                                                <span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span><span class="icon-person"></span>

                                                                            </div>
                                                                            <div class="arrow-up">
                                                                                <span style={{left:'11.72%', top: '1px'}}></span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="state-average" style={{paddingLeft: '0px'}}>State avg: {schoolData.avgparticipationscore}%</div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div class="rating-container__more-items">

                                                        <div class="js-drawer show-more show-more--closed" data-ga-category="Profile" data-ga-label="College Readiness">
                                                            <div class="show-more__items js-toggle-target" >




                                                                <div class="row bar-graph-display">
                                                                    <div class="test-score-container clearfix">
                                                                        <div class="col-xs-12 col-sm-5 subject">Percentage of students passing 1 or more AP exams grades 9-12


                                                                        </div>
                                                                        <div class="col-sm-1"></div>
                                                                        <div class="col-xs-12 col-sm-6">
                                                                            <div class="bar-graph-container">
                                                                                <div class="score">&lt;1%</div>
                                                                                <div class="viz">
                                                                                    <div class="item-bar">
                                                                                        <div class="single-bar-viz">
                                                                                            <div class="color-row rating_1" style={{width:'0.0%'}}></div>
                                                                                            <div class="grey-row" style={{width:'100.0%'}}></div>
                                                                                            <div class="arrow-up"><span style={{top: '11px',left:'65.79%'}}></span></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="state-average">
                                                                                        State avg: 66%
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="show-more__button js-toggle-button">
                                                                Show more College readiness
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>






                                    </div>
                                </div>
                            </div>

                            <div class="environment-container">
                                <div class="row">
                                    <div class="col-xs-12 col-lg-3">
                                        <div class="rating-container__title" style={{position: 'static', width: 'auto'}}>
                                            Environment
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-lg-9">

                                        <div style={{marginBottom: '40px'}}>
                                            <div id="osp-school-info" class="rating-container">
                                                <a class="anchor-mobile-offset" name="General_info"></a>
                                                <div class="rating-container__rating">
                                                    <div class="module-header">
                                                        <div class="circle-rating--equity-blue circle-rating--medium">
                                                            <span class="icon-user"></span>
                                                        </div>
                                                        <div class="title-container">
                                                            <div class="title">General Information
                                                                <a class="anchor-button" href="/official-school-profile/register.page?city=Moberly&amp;schoolId=1249&amp;state=MO">
                                                                    <div>Edit</div>
                                                                </a>
                                                            </div>
                                                            <div class="ptm">
                                                                <span class="no-data">Here you can learn about this school’s hours, enrollment, sports, classes and more. An administrator from this school will need to “claim” the profile to add this information.</span>
                                                                <ul style={{padding: '20px'}}>
                                                                    <li class="no-data">Are you an administrator at this school?<br/> <a href="/official-school-profile/">Claim your school’s profile</a> to edit general information and share what makes your school unique.<br/> <a href="/gk/schools/">Learn more.</a>
                                                                        <br/><br/></li>
                                                                    <li class="no-data">Are you a parent or student at this school?<br/> <a href="mailto:Avitt@Moberly.K12.Mo.Us?subject=Claim your school’s profile on SchoolCounty.org!&amp;body=Dear Mr. George Vitt,%0D%0A&#10;%0D%0A&#10;SchoolCounty.org offers school administrators like you the ability to “claim” your school’s SchoolCounty profile page so you can add and edit information. It’s a great way to help tell your school’s story and ensure parents see robust and accurate information.%0D%0A&#10;%0D%0A&#10;Get started by claiming your school’s profile page here: http%3A%2F%2Fwww.SchoolCounty.org%2Fofficial-school-profile%2Fregister.page%3Fcity%3DMoberly%26schoolId%3D1249%26state%3DMO%0D%0A&#10;%0D%0A&#10;Thank you,%0D%0A&#10;(your name)&#10;">Encourage school administrators</a> to claim this school’s profile.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <a class="anchor-mobile-offset" name="Students"></a>
                                        <div id="Students" class="students-container" data-ga-click-label="Students">
                                            <div class="rating-container__rating">
                                                <div class="module-header">
                                                    <div class="circle-rating--equity-blue circle-rating--medium">
                                                        <span class="icon-users"></span>
                                                    </div>
                                                    <div class="title-container">
                                                        <span class="title">Students</span><br/>
                                                        <span>Studies show that diversity in school leads to long-term benefits for students. <a href="/gk/articles/why-diversity-in-classrooms-matters/" target="_blank">Discover why!</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-12 col-sm-7">
                                                    <div id="ethnicity-graph" data-highcharts-chart="0">
                                                        <img src="../../assets/img/det3.png" />
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-5">
                                                    <div class="legend-separator js-highlightPieChart clearfix" data-slice-id="0" >
                                                        <div class="legend-square" style={{float:'left',backgroundColor: '#0f69c4'}}></div>
                                                        <div class="legend-title" style={{float:'left'}}>Hindu</div>
                                                        <div class="legend-title" style={{float: 'right'}}>{schoolData.hindu}%</div>
                                                    </div>
                                                    <div class="legend-separator js-highlightPieChart clearfix" data-slice-id="1" >
                                                        <div class="legend-square" style={{float:'left',backgroundColor: '#2bdc99'}}></div>
                                                        <div class="legend-title" style={{float:'left'}}>Muslim</div>
                                                        <div class="legend-title" style={{float: 'right'}}>{schoolData.muslim}%</div>
                                                    </div>
                                                    <div class="legend-separator js-highlightPieChart clearfix" data-slice-id="2" >
                                                        <div class="legend-square" style={{float:'left',backgroundColor: '#f1830f'}}></div>
                                                        <div class="legend-title" style={{float:'left'}}>Christian</div>
                                                        <div class="legend-title" style={{float: 'right'}}>{schoolData.christian}%</div>
                                                    </div>
                                                    <div class="legend-separator js-highlightPieChart clearfix" data-slice-id="3" >
                                                        <div class="legend-square" style={{float:'left',backgroundColor: '#f1e634'}}></div>
                                                        <div class="legend-title" style={{float:'left'}}>Sikh</div>
                                                        <div class="legend-title" style={{float: 'right'}}>{schoolData.sikh}%</div>
                                                    </div>
                                                    <div class="legend-separator js-highlightPieChart clearfix" data-slice-id="4" >
                                                        <div class="legend-square" style={{float:'left',backgroundColor: '#6f2eb4'}}></div>
                                                        <div class="legend-title" style={{float:'left'}}>SC/ST </div>
                                                        <div class="legend-title" style={{float: 'right'}}>{schoolData.scst}%</div>
                                                    </div>
                                                    <div class="legend-separator js-highlightPieChart clearfix" data-slice-id="5" >
                                                        <div class="legend-square" style={{float:'left',backgroundColor: '#ef60d0'}}></div>
                                                        <div class="legend-title" style={{float:'left'}}>NRIs</div>
                                                        <div class="legend-title" style={{float: 'right'}}>&lt;{schoolData.nri}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="subgroups">
                                                <div class="row">

                                                    <div class="subgroup col-xs-6 col-sm-4 col-md-6 col-lg-4">
                                                        <div class="title"> Students from low-income families </div>
                                                        <div id="students-participating-in-free-or-reduced-price-lunch-program" data-highcharts-chart="1">
                                                         <img src="../../assets/img/det1.png"/>
                                                        </div></div>
                                                    <div class="subgroup col-xs-6 col-sm-4 col-md-6 col-lg-4">
                                                    <div class="title gender">Gender</div>
                                                    <div id="gender" data-highcharts-chart="2">
                                                    <img src="../../assets/img/det2.png"/>
                                                    </div></div></div>
                                            </div>
                                            <div class="gender"> </div>
                                        </div>


                                        <div id="TeachersStaff" class="teachers-staff" data-ga-click-label="Teachers and staff">
                                            <a class="anchor-mobile-offset" name="Teachers_staff"></a>
                                            <div class="rating-container__rating">
                                                <div class="module-header">
                                                    <div class="circle-rating--equity-blue circle-rating--medium">
                                                        <span class="icon-user"></span>
                                                    </div>
                                                    <div class="title-container">
                                                        <span class="title">Teachers &amp; staff</span><br/>
                                                        <span>Parents often value small class sizes, but the <a href="/gk/articles/class-size/">truth is more complicated</a>.</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="rating-container__score-item">
                                                <div class="rating-score-item">
                                                    <div class="row">
                                                        <div class="col-xs-6 rating-score-item__label">
                                                            Students per teacher

                                                            <a data-remodal-target="modal_info_box" data-content-type="info_box" data-content-html="The average number of students per full-time teacher at this school; please note that this is not a reflection of average class size." class="gs-tipso info-circle tipso_style" href="javascript:void(0)"><span class="icon-question"></span>
                                                            </a>

                                                        </div>
                                                        <div class="col-xs-6">
                                                            <div class="rating-score-item__score">
                                                                18
                                                                <span class="ratio-viz">:1</span>
                                                            </div>
                                                            <div class="rating-score-item__state-average">
                                                                State avg: 14
                                                                <span class="ratio-viz-state-avg">:1</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="rating-container__score-item">
                                                <div class="rating-score-item">
                                                    <div class="row">
                                                        <div class="col-xs-6 rating-score-item__label">
                                                            Students per counselor

                                                            <a data-remodal-target="modal_info_box" data-content-type="info_box" data-content-html="The average number of students per counselor at this school." class="gs-tipso info-circle tipso_style" href="javascript:void(0)"><span class="icon-question"></span>
                                                            </a>

                                                        </div>
                                                        <div class="col-xs-6">
                                                            <div class="rating-score-item__score">
                                                                364
                                                                <span class="ratio-viz">:1</span>
                                                            </div>
                                                            <div class="rating-score-item__state-average">
                                                                State avg: 346
                                                                <span class="ratio-viz-state-avg">:1</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>




                                            <div class="row bar-graph-display">
                                                <div class="test-score-container clearfix">
                                                    <div class="col-xs-12 col-sm-5 subject">Percent of teachers with 3 or more years experience

                                                        <a data-remodal-target="modal_info_box" data-content-type="info_box" data-content-html="The percentage of full-time teachers at this school who have been teaching for 3 or more years." class="gs-tipso info-circle tipso_style" href="javascript:void(0)"><span class="icon-question"></span>
                                                        </a>

                                                    </div>
                                                    <div class="col-sm-1"></div>
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="bar-graph-container">
                                                            <div class="score">84%</div>
                                                            <div class="viz">
                                                                <div class="item-bar">
                                                                    <div class="single-bar-viz">
                                                                        <div class="color-row rating_9" style={{width:'84.15%'}}></div>
                                                                        <div class="grey-row" style={{width:'15.849999999999994%'}}></div>
                                                                        <div class="arrow-up"><span style={{top: '11px',left:'88.53%'}}></span></div>
                                                                    </div>
                                                                </div>
                                                                <div class="state-average">
                                                                    State avg: 89%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                            <div class="rating-container__more-items">

                                                <div class="js-drawer show-more show-more--closed" data-ga-category="Profile" data-ga-label="Teachers Staff">
                                                    <div class="show-more__items js-toggle-target" >




                                                        <div class="row bar-graph-display">
                                                            <div class="test-score-container clearfix">
                                                                <div class="col-xs-12 col-sm-5 subject">% of full time teachers who are certified

                                                                    <a data-remodal-target="modal_info_box" data-content-type="info_box" data-content-html="The percentage of full-time teachers at this school who have met all applicable state standard teacher certification requirements." class="gs-tipso info-circle tipso_style" href="javascript:void(0)"><span class="icon-question"></span>
                                                                    </a>

                                                                </div>
                                                                <div class="col-sm-1"></div>
                                                                <div class="col-xs-12 col-sm-6">
                                                                    <div class="bar-graph-container">
                                                                        <div class="score">100%</div>
                                                                        <div class="viz">
                                                                            <div class="item-bar">
                                                                                <div class="single-bar-viz">
                                                                                    <div class="color-row rating_10" style={{width:'100.0%'}}></div>
                                                                                    <div class="grey-row" style={{width:'0.0%'}}></div>
                                                                                    <div class="arrow-up"><span style={{top: '11px',left:'99.16%'}}></span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="state-average">
                                                                                State avg: 99%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="rating-container__score-item">
                                                            <div class="rating-score-item">
                                                                <div class="row">
                                                                    <div class="col-xs-6 rating-score-item__label">
                                                                        Average teacher salary

                                                                        <a data-remodal-target="modal_info_box" data-content-type="info_box" data-content-html="The average salary for full-time teachers at this school." class="gs-tipso info-circle tipso_style" href="javascript:void(0)"><span class="icon-question"></span>
                                                                        </a>

                                                                    </div>
                                                                    <div class="col-xs-6">
                                                                        <div class="rating-score-item__score">
                                                                            $60,936
                                                                        </div>

                                                                        <div class="rating-score-item__state-average">
                                                                            State avg: $44,804
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="show-more__button js-toggle-button">
                                                        Show more Teachers &amp; staff
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>






                            <div id="ReviewSummary" class="review-summary rs-review-summary">
                                <div class="review-sumary__info">
                                    <div class="number-of-reviews">
                                        <span class="count">16</span>
                                        <span class="label">Reviews</span>
                                    </div>

                                    <span class="five-stars"><span class="icon-star filled-star"></span><span class="icon-star filled-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span></span>


                                    <div class="n-out-of-5-stars">2 out of 5 stars</div>
                                </div>
                                <div class="review-summary__distribution" style={{color:'grey'}}>

                                    <div class="star-rating-bar-viz">
                                        <span class="icon-star"></span>
                                        <span class="number-of-stars">5</span>
                                        <span class="bar rating_scale-5_5" style={{width: '17%'}}></span>

                                        <span class="answer-count">2</span>
                                    </div>

                                    <div class="star-rating-bar-viz">
                                        <span class="icon-star"></span>
                                        <span class="number-of-stars">4</span>
                                        <span class="bar rating_scale-5_4" style={{width: '17%'}}></span>

                                        <span class="answer-count">2</span>
                                    </div>

                                    <div class="star-rating-bar-viz">
                                        <span class="icon-star"></span>
                                        <span class="number-of-stars">3</span>

                                        <span class="answer-count">0</span>
                                    </div>

                                    <div class="star-rating-bar-viz">
                                        <span class="icon-star"></span>
                                        <span class="number-of-stars">2</span>

                                        <span class="answer-count">0</span>
                                    </div>

                                    <div class="star-rating-bar-viz">
                                        <span class="icon-star"></span>
                                        <span class="number-of-stars">1</span>
                                        <span class="bar rating_scale-5_1" style={{width: '51%'}}></span>

                                        <span class="answer-count">6</span>
                                    </div>
                                </div>
                            </div>

                            <a class="anchor-mobile-offset" name="Topical_Review_Summary"></a>
                            <div class="topical-review">
                                <div class="topical-review-summary">
                                    <div class="row">
                                        <div class="col-xs-12 col-lg-3">
                                            <div class="topical-title">
                                                Topical reviews
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-lg-9">

                                        </div>
                                    </div>
                                </div>
                                <div id="js-topical-review-distribution" ><div data-reactroot="" class="topical-review review-distribution"><h4><span class="blue-highlight">Teachers</span> at this school are effective:</h4><div class="rating-bar-viz"><span class="answer-icon topic-icon strongly-agree"></span><span class="title">Strongly agree</span><span class="bar rating_scale-5_5" style={{width: '26.6667%'}}></span><span class="answer-count">2</span></div><div class="rating-bar-viz"><span class="answer-icon topic-icon agree"></span><span class="title">Agree</span><span class="bar rating_scale-5_4" style={{width: '0.5%'}}></span><span class="answer-count">0</span></div><div class="rating-bar-viz"><span class="answer-icon topic-icon neutral"></span><span class="title">Neutral</span><span class="bar rating_scale-5_3" style={{width: '0.5%'}}></span><span class="answer-count">0</span></div><div class="rating-bar-viz"><span class="answer-icon topic-icon disagree"></span><span class="title">Disagree</span><span class="bar rating_scale-5_2" style={{width: '0.5%'}}></span><span class="answer-count">0</span></div><div class="rating-bar-viz"><span class="answer-icon topic-icon strongly-disagree"></span><span class="title">Strongly disagree</span><span class="bar rating_scale-5_1" style={{width: '0.5%'}}></span><span class="answer-count">0</span></div></div></div>
                            </div>




                        </div>
                    </div>

                    <div class="static-container" id="Reviews" style={{marginTop: '30px'}}><div class="rating-container"><div class="row"><div class="col-xs-12 col-lg-3"><div class="rating-container__title">Recent comments</div></div><div class="col-xs-12 col-lg-9"><div class="review-list"><div></div><div><div class="user-reviews-container"><div class="row"><div class="col-xs-12 col-sm-2 user-info-column"><div class="avatar icon-avatar-1"></div><div class="user-type">Parent</div></div><div class="col-xs-12 col-sm-10 review-list-column"><div class="five-star-review"><div class="header">Overall experience</div><div class="answer"><span class="five-stars"><span class="icon-star filled-star"></span><span class="icon-star filled-star"></span><span class="icon-star filled-star"></span><span class="icon-star filled-star"></span><span class="icon-star filled-star"></span></span></div>
                        <div class="comment"><span>{schoolData.comment1}</span></div></div><div class="type-and-date">Submitted by a parent · {schoolData.comment1date}</div><div class="review-button-bar"><span class="button"><span class="icon-flag"></span><span class="hidden-xs-inline pls">Report Review</span></span></div></div></div></div><div class="user-reviews-container"><div class="row"><div class="col-xs-12 col-sm-2 user-info-column"><div class="avatar icon-avatar-1"></div><div class="user-type">Parent</div></div><div class="col-xs-12 col-sm-10 review-list-column"><div class="five-star-review"><div class="header">Overall experience</div><div class="answer"><span class="five-stars"><span class="icon-star filled-star"></span><span class="icon-star filled-star"></span><span class="icon-star filled-star"></span><span class="icon-star filled-star"></span><span class="icon-star filled-star"></span></span></div>
                        <div class="comment"><span><span>{schoolData.comment2}... <a>More</a></span></span></div></div><div class="type-and-date">Submitted by a parent ·{schoolData.comment2date} </div><div class="review-button-bar"><span class="button"><span class="icon-flag"></span><span class="hidden-xs-inline pls">Report Review</span></span></div></div></div></div><div class="user-reviews-container"><div class="row"><div class="col-xs-12 col-sm-2 user-info-column"><div class="avatar icon-avatar-2"></div><div class="user-type">Student</div></div><div class="col-xs-12 col-sm-10 review-list-column"><div class="five-star-review"><div class="header">Overall experience</div><div class="answer"><span class="five-stars"><span class="icon-star filled-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span></span></div>
                        <div class="comment"><span><span>{schoolData.comment3}... <a href="javascript:void(0);">More</a></span></span></div></div><div class="type-and-date">Submitted by a student ·{schoolData.comment3date}</div><div class="review-button-bar"><span class="button"><span class="icon-flag"></span><span class="hidden-xs-inline pls">Report Review</span></span></div></div></div></div><div class="user-reviews-container"><div class="row"><div class="col-xs-12 col-sm-2 user-info-column"><div class="avatar icon-avatar-2"></div><div class="user-type">Student</div></div><div class="col-xs-12 col-sm-10 review-list-column"><div class="five-star-review"><div class="header">Overall experience</div><div class="answer"><span class="five-stars"><span class="icon-star filled-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span></span></div>
                        <div class="comment"><span><span>{schoolData.comment4}... <a href="javascript:void(0);">More</a></span></span></div></div><div class="type-and-date">Submitted by a student · {schoolData.comment4date}</div><div class="review-button-bar"><span class="button"><span class="icon-flag"></span><span class="hidden-xs-inline pls">Report Review</span></span></div>
                    </div></div></div></div><div class="show-more__button">Show more</div></div></div></div></div></div>


                </div>

                <a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top" role="button" title="Click to return on the top page" data-toggle="tooltip" data-placement="left"><span class="glyphicon glyphicon-chevron-up"></span></a>

            </main>
        )
    }
}

function mapStateToProps(state) {

    return {
        schoolDetail: state.schools.schoolDetail
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getSchoolDetails: () => {
            console.log('called');
            dispatch(SchoolDetailsAction.getCompareSchoolDetailsParams())
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)