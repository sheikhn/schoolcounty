import React ,{Component} from 'react'
import { connect } from 'react-redux'

import * as SchoolDetailsAction from '../../actions/schools'


class Details extends Component{

    constructor(props){
        super(props);
    }

    showActivities() {

        const { schoolDetail} = this.props
        const {cca} = schoolDetail.schoolDetail;
    
        let activitiesList = [];
        
        let ccaIndex = cca;
      
        for (let ccaIndex in cca ) {
            let ccas = cca[ccaIndex]
           //console.log('ccas',ccas);
            activitiesList.push(
                <tr key={ccaIndex}>
                  <th  scope="row">{ccaIndex}</th>
                  <td>{ccas.school_cca_id}</td>
                </tr>
            );
            
        }
        
        return activitiesList;
    }

    showLevels() {

        const { schoolDetail} = this.props
        const {levels} = schoolDetail.schoolDetail;
    
        let levelsList = [];
        
        let levelsIndex = levels;
      
        for (let levelsIndex in levels ) {
            let level = levels[levelsIndex]
           //console.log('ccas',levels);
            levelsList.push(
                <tr key={levelsIndex}>
                  <th  scope="row">{levelsIndex}</th>
                  <td>{level.school_level_id}</td>
                </tr>
            );
            
        }
        
        return levelsList;
    }

    showInfra() {

        const { schoolDetail} = this.props
        const {infra} = schoolDetail.schoolDetail;
    
        let infraList = [];
        
        let infraIndex = infra;
      
        for (let infraIndex in infra ) {
            let infras = infra[infraIndex]
           //console.log('ccas',levels);
            infraList.push(
                <tr key={infraIndex}>
                  <th  scope="row">{infraIndex}</th>
                  <td>{infras.school_infra_id}</td>
                </tr>
            );
            
        }
        
        return infraList;
    }

    showSyllabus() {

        const { schoolDetail} = this.props
        const {syllabus} = schoolDetail.schoolDetail;
    
        let syllabusList = [];
        
        let syllabusIndex = syllabus;
      
        for (let syllabusIndex in syllabus ) {
            let syllabuses = syllabus[syllabusIndex]
           //console.log('ccas',levels);
            syllabusList.push(
                <tr key={syllabusIndex}>
                  <th  scope="row">{syllabusIndex}</th>
                  <td>{syllabuses.school_syllabus_id}</td>
                </tr>
            );
        }
        
        return syllabusList;
    }
    

    render(){

        const { schoolDetail} = this.props
       // console.log('sore',this.props.schoolDetail.schoolDetail.cca);
        if (!schoolDetail.fetched){
            return (<div>
                no data
            </div>)
        }

        const {details} = schoolDetail.schoolDetail;

        let activitiesList = this.showActivities();
        let schoolLevelList = this.showLevels();
        let infrastructureList = this.showInfra();
        let syllabusList =this.showSyllabus();


        return(

            <div class="detailsection col-md-12" >


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
                                <h1 class="school-name">{details.name}

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
                                            <span class="badge icon-location"></span><span class="content">{details.address}</span>
                                        </div>

                                    </a>
                                </div>
                                <div class="school-contact__item school-contact__district-name">
                                    <a class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="Hero links" data-ga-click-label="District" href="/missouri/moberly/moberly-school-district/">{details.district} District</a>
                                </div>
                                <div class="school-contact__item school-contact__phone">
                                    <a href="tel:(660) 269-2660" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="Hero links" data-ga-click-label="Phone">

                                        <div class="badge-and-content">
                                            <span class="badge icon-phone"></span><span class="content">            {details.phonenumber}
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
                                                {details.schoolscountyrating}<span class="rating-circle-small">/10</span>
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
      {details.reviews}
  </span>
                                        <span class="rs-five-star-rating five-star-rating__stars">

  <span class="five-stars"><span class="icon-star filled-star"></span><span class="icon-star filled-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span><span class="icon-star empty-star"></span></span>


    </span>
                                    </div>

                                </div>
                                <div class="school-info__item">
                                    <div class="label">Grades</div>
                                    <div>{details.grades}</div>
                                </div>
                                <div class="school-info__item">
                                    <div class="label">Students</div>
                                    <div>{details.students}</div>
                                </div>
                                <div class="school-info__item">
                                    <div class="label">Type</div>
                                    <div>{details.type}</div>
                                </div>

                                <div class="vertical-items js-toggle-target" style={{display: 'none'}}>
                                    <div class="school-info__item-mobile">
                                        <span class="label">Grades</span>
                                        <span>{details.grades}</span>
                                    </div>
                                    <div class="school-info__item-mobile">
                                        <span class="label">Students</span>
                                        <span>{details.students}</span>
                                    </div>
                                    <div class="school-info__item-mobile">
                                        <span class="label">Type</span>
                                        <span>{details.type}</span>
                                    </div>
                                </div>

                                <a href="javascript:void(0);" class="see-more js-toggle-button">Show more</a>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-12 static-container">
                        
                        <div class="col-md-9">


                                <div id="toc">
                                    <div class="toc-container-box">
                                        <div class="col-md-12">
                                            <div class="col-xs-12 col-sm-4" id="academics-tour-anchor">
                                                <div class="toc-section-title">
                                                    ACADEMICS&nbsp;<span class="icon-question"></span>


                                                </div>


                                                <div class="clearfix toc-entry">
                                                    <a href="#Test_scores" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Test scores">
                                                        <span>Test scores</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {details.testscore}<span class="denominator">/10</span>
          </span>
                                                    </a>
                                                </div>


                                                <div class="clearfix toc-entry">
                                                    <a href="#College_readiness" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="College readiness">
                                                        <span>College readiness</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
          {details.collegescore}<span class="denominator">/10</span>
          </span>
                                                    </a>
                                                </div>

                                                <div class="clearfix toc-entry">
                                                    <a href="#Advanced_courses" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Advanced courses">
                                                        <span>Advanced courses</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {details.advancescore}<span class="denominator">/10</span></span>
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
                                                            {details.attendancescore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>



                                                <div class="clearfix toc-entry">
                                                    <a href="#Low-income_students" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Low-income students">
                                                        <span>Low-income students</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--4 circle-rating--xtra-small">
          {details.lowincscore}<span class="denominator">/10</span>
          </span>
                                                    </a>
                                                </div>

                                                <div class="clearfix toc-entry">
                                                    <a href="#Students_with_Disabilities" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Students with disabilities">
                                                        <span>Disabled Students</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {details.disabilitiesscore}<span class="denominator">/10</span></span>
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
                                                            {details.studentscore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>


                                                <div class="clearfix toc-entry">
                                                    <a href="#Race_ethnicity*Discipline_and_attendance" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Discipline &amp; attendance">
                                                        <span>Discipline</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {details.disciplinescore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>


                                                <div class="clearfix toc-entry">
                                                    <a href="#Teachers_staff" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Teachers &amp; staff">
                                                        <span>Teachers &amp; staff</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {details.teacherscore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>


                                                <div class="clearfix toc-entry">
                                                    <a href="#Neighborhood" class="js-gaClick" data-ga-click-category="Profile" data-ga-click-action="TOC Clicked" data-ga-click-label="Neighborhood">
                                                        <span>Neighborhood</span>
                                                        <span class="icon-chevron-right"></span>
                                                        <span class="gs-rating circle-rating--5 circle-rating--xtra-small">
                                                            {details.neighborscore}<span class="denominator">/10</span></span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                            </div>

                            <div class="schoollinks">
                                <div class="col-md-12">
                                    <div class="col-md-3">
                                        <table class="table table-dark">
                                          <thead>
                                            <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">Activities</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {activitiesList}
                                          </tbody>
                                        </table>
                                    </div>
                                    <div class="col-md-3">
                                        <table class="table table-dark">
                                          <thead>
                                            <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">Levels</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {schoolLevelList}
                                          </tbody>
                                        </table>
                                    </div>
                                    <div class="col-md-3">
                                        <table class="table table-dark">
                                          <thead>
                                            <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">Infrastructure</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {infrastructureList}
                                          </tbody>
                                        </table>
                                    </div>
                                    <div class="col-md-3">
                                        <table class="table table-dark">
                                          <thead>
                                            <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">Syllabus</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {syllabusList}
                                          </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="col-md-3">
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

                     <a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top" role="button" data-toggle="tooltip" data-placement="left"><span class="glyphicon glyphicon-chevron-up"></span></a>

                    </div>


                </div>

               
            </div>
        )
    }
}



export default Details;