import React ,{Component} from 'react'
import { connect } from 'react-redux'

import * as SchoolDetailsAction from '../../actions/schools'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
            let ccas = cca[ccaIndex];
            console.log(ccas);
           //console.log('ccas',ccas);
            activitiesList.push(
                <tr key={ccaIndex}>
                  <th  scope="row">{ccaIndex}</th>
                  <td>{ccas.cca_name}</td>
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
                  <td>{level.level_name}</td>
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
                  <td>{infras.infra_name}</td>
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
                  <td>{syllabuses.syllabus_name}</td>
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

               
            <section class="clearfix paddingAdjustBottom">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="listingTitleArea">
                                <h2>{details.name}</h2>
                                <p>Address{details.address}, District{details.district}</p>
                                <div class="listingReview">
                                    <ul class="list-inline rating">
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                    </ul>
                                    <span>( {details.reviews} 5 Reviews )</span>
                                    <ul class="list-inline captionItem">
                                        <li><i class="fa fa-heart-o" aria-hidden="true"></i> 10 k</li>
                                    </ul>
                                    <a href="#" class="btn btn-primary">Write a review</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


<section class="clearfix paddingAdjustTopBottom">
    <ul class="list-inline listingImage">
        <li><img src="./assets/img/school1.jpg" style={{height:'250px'}} alt="Image Listing" class="img-responsive" /></li>
        <li><img src="./assets/img/school2.jpg" style={{height:'250px'}} alt="Image Listing" class="img-responsive" /></li>
        <li><img src="./assets/img/school3.jpg" style={{height:'250px'}} alt="Image Listing" class="img-responsive" /></li>
        <li><img src="./assets/img/school4.jpg" style={{height:'250px'}} alt="Image Listing" class="img-responsive" /></li>
    </ul>
</section>


<section class="clearfix paddingAdjustTop">
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-xs-12">
                <div class="listDetailsInfo">
                    <div class="detailsInfoBox">
                        <h3>About This School</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt  labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                        <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. </p>
                        <p>Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui </p>
                    </div>
                    <div class="detailsInfoBox">
                        <h3>Features</h3>
                        <ul class="list-inline featuresItems">
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>  Wi-Fi</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>  Street Parking</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>  Alcohol</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>  Vegetarian</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>  Reservations</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>  Pets Friendly</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>  Accept Credit Card</li>
                        </ul>
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

                    <div class="detailsInfoBox">
                        <h3>Reviews (3)</h3>
                        <div class="media media-comment">
                            <div class="media-left">
                            <img src="./assets/img/list-user-1.jpg" class="media-object img-circle" alt="Image User" />
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">Jessica Brown</h4>
                                <ul class="list-inline rating">
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                </ul>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan
                                totam rem ape riam,</p>
                            </div>
                        </div>
                        <div class="media media-comment">
                            <div class="media-left">
                            <img src="./assets/img/list-user-2.jpg" class="media-object img-circle" alt="Image User" />
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">Jessica Brown</h4>
                                <ul class="list-inline rating">
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                </ul>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan
                                totam rem ape riam,</p>
                            </div>
                        </div>
                        <div class="media media-comment">
                            <div class="media-left">
                            <img src="./assets/img/list-user-3.jpg" class="media-object img-circle" alt="Image User" />
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">Jessica Brown</h4>
                                <ul class="list-inline rating">
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                </ul>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan
                                totam rem ape riam,</p>
                            </div>
                        </div>
                    </div>
                    <div class="detailsInfoBox">
                        <h3>Write A Review </h3>
                        <div class="listingReview">
                            <span>( 5 Reviews )</span>
                            <ul class="list-inline rating rating-review">
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                        <form action="#">
                            <div class="formSection formSpace">
                                <div class="form-group">
                                    <textarea class="form-control" rows="3" placeholder="Comment"></textarea>
                                </div>
                                <div class="form-group mb0">
                                    <button type="submit" class="btn btn-primary">Send Review</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 col-xs-12">
                <div class="clearfix map-sidebar map-right">

                     <GoogleMapReact
                          api={'AIzaSyB-GPNJUs1UB3t-rQ8dQAd7BNAyDBYOCXQ'}
                          defaultCenter={{lat: 12.971599, lng: 77.594563}}
                          defaultZoom={10}
                      >
                        <AnyReactComponent
                            lat={12.971599}
                            lng={77.594563}
                            text={'Kreyser Avrora'}
                        />
                      </GoogleMapReact>
                </div>
                <div class="listSidebar">
                    <h3>Location</h3>
                    <div class="contactInfo">
                        <ul class="list-unstyled list-address">
                            <li>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                {details.address}{details.district}
                            </li>
                            <li>
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                {details.phonenumber}
                            </li>
                            <li>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <a href="#">info @example.com</a> <a href="#">info@startravelbangladesh.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="listSidebar">
                    <h3>Opening Hours</h3>
                    <ul class="list-unstyled sidebarList">
                        <li>
                            <span class="pull-left">Monday</span>
                            <span class="pull-right">08.00am - 05.00pm</span>
                        </li>
                        <li>
                            <span class="pull-left">Tuesday</span>
                            <span class="pull-right">08.00am - 05.00pm</span>
                        </li>
                        <li>
                            <span class="pull-left">Wednesday</span>
                            <span class="pull-right">08.00am - 05.00pm</span>
                        </li>
                        <li>
                            <span class="pull-left">Thrusday</span>
                            <span class="pull-right">08.00am - 05.00pm</span>
                        </li>
                        <li>
                            <span class="pull-left">Friday</span>
                            <span class="pull-right">08.00am - 05.00pm</span>
                        </li>
                        <li>
                            <span class="pull-left">Saturday</span>
                            <span class="pull-right"><a href="#">Closed</a></span>
                        </li>
                        <li>
                            <span class="pull-left">Sunday</span>
                            <span class="pull-right"><a href="#">Closed</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

               
            </div>
        )
    }
}



export default Details;