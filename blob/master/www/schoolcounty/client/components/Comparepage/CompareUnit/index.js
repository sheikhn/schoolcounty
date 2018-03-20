import React,{Component} from 'react'
import {Link} from 'react-router'

class CompareUnit extends Component{

    constructor(props){
    super(props);
    }

    getNameAddress(){


        const {schoolunit} =this.props;
        let details= schoolunit;
        
        //console.log('compore',details);

        return (
            <div class="col-sm-4 col-xs-12">
                <div class="thingsBox thinsSpace">
                    <div class="thingsImage">
                        <img src="./assets/img/school4.jpg" alt="Image things" />
                        <div class="thingsMask">
                            <ul class="list-inline rating">
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                            </ul>
                            <a href="listing-details-left.html">
                    <h2>
                    <Link style={{lineHeight: "1.1em"}} class="open-sans_sb mbs font-size-medium"
                    to={"/details"} query={{ id: details.id }}>{details.name} </Link><i class="fa fa-check-circle" aria-hidden="true"></i></h2></a>
                            <p>Bangalore</p>
                        </div>
                    </div>
                    <div class="thingsCaption ">
                        <ul class="list-inline captionItem">
                            <li><i class="fa fa-heart-o" aria-hidden="true"></i> 8 k</li>
                        </ul>
                    </div>
                    
                   
                </div>
                <div class="priceTableWrapper">
                    <div class="priceTableTitle">
                        <h2>2,00,000 <small>Students enrolled </small></h2>
                    </div>
                    <div class="priceTableTitle">
                        <h2>4<small>SchoolCounty Rating</small></h2>
                    </div>
                    <div class="priceInfo">
                        <ul class="priceShorting">
                            <li class="active"><i class="fa fa-check-square"></i><p>Infrastructure</p></li>
                            <li><i class="fa fa-check-square"></i><p>Extra and Co Curricular Activities</p>
                                <ul>
                                    <li><i class="fa fa-check-square"></i>Discovery Room</li>
                                    <li><i class="fa fa-check-square"></i>Maths Laboratories</li>
                                    <li><i class="fa fa-check-square"></i>Smart Board Classrooms</li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="list-unstyled">
                            <li>3 Libraries</li>
                            <li>2 Multimedia Centre</li>
                            <li>2 Playground</li>
                            <li>4    Art Room</li>
                        </ul>
                        <div class="priceBtn">
                            <a href="payment-process.html" class="btn btn-primary">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        );

    }



    render(){

        const {schoolunit} =  this.props;


        return(
                    <div>
                    {this.getNameAddress()}
                    </div>
                


        )
    }
}


export default CompareUnit