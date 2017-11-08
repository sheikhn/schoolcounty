import React,{Component} from 'react'
import {Link} from 'react-router'

class CompareUnit extends Component{

    constructor(props){
    super(props);
    }

    getNameAddress(){
        const {schoolunit} =this.props;
        let details= schoolunit;

        return (
            <div class="mam">
                <div class="js-schoolName full-width notranslate" style={{height: " 21px"}}>
                    <Link
                    style={{lineHeight: "1.1em"}} class="open-sans_sb mbs font-size-medium"
                    to={"/details"}>{details.name}
                </Link></div>
                <div class="ptm full-width js-gradeLevel" style={{height: " 31px"}}>{details.address} Road,
                    bangalore-21
                </div>
            </div>
        );

    }



    render(){

        const {schoolunit} =  this.props;


        return(

            <div class="pull-left di mal js-comparedSchool js-comparedSchool1" data-school-id="1255">
                <a class="fr pointer js-removeComparedSchool">remove<i class="mls vam iconx16 i-16-blue-x-circle"></i></a>
                <div class="clearfix"></div>
                <div style={{borderRadius:" 4px", border:" 1.5px solid #d3d3d3", width: "260px", backgroundColor: "white"}}>

                    {this.getNameAddress()}

                <div class="ptl tac">
                    <div class="pbm phl">
                        <button class="btn btn-default tal clearfix js-save-this-school-button" data-link-value="1255" style={{width:"80%"}} rel="" data-link-use-new-window="">
                            <span class="vat iconx16 i-16-heart mrs"></span>
                            Follow this school
                        </button>
                    </div>
                </div>
                    <div>
                        <div class="mtm mbm pts tac full-width header-bg-color pointer js-categoryTitle" style={{height:"42px", fontSize:" 16pt"}}>
                            Quality
                        </div>
                        <div class="js-qualityCategoryData js-categoryData">




                            <div class="phm">
                                <span class="open-sans_sb">SchoolCounty Rating</span><br/>
                            </div>


                            <div class="phm">
                                <table class="full-width">
                                    <tbody><tr>
                                        <td>SchoolCounty rating</td>
                                        <td class="tac open-sans_sb" style={{width: "40px"}}>
                                            <div class="gs-rating-sm average ma">
                                                <div class="dib">
                                                    <div class="">
                                                        5
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Test score rating</td>
                                        <td class="tac open-sans_sb" style={{width: "40px"}}>5</td>
                                    </tr>
                                    </tbody></table>
                            </div>



                            <div class="phm">
                                <table class="full-width">
                                </table>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div class="mtm mbm pts tac full-width header-bg-color pointer js-categoryTitle" style={{height:"42px", fontSize:" 16pt"}}>
                            Details
                        </div>
                        <div class="js-detailsCategoryData js-categoryData">

                            <div class="phm">
                                <span class="open-sans_sb">At a glance</span><br/>
                            </div>
                            <div class="phm">
                                <table class="full-width ">
                                    <tbody><tr>
                                        <td style={{width: "30px"}}><i class="iconx16 i-16-blue-students-enrolled"></i></td>
                                        <td>Students enrolled</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}>500</td>
                                    </tr>
                                    <tr>
                                        <td style={{width: "30px"}}><i class="iconx16 i-16-blue-transportation"></i></td>
                                        <td>Transportation</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}><div class="pr js-compareNoDataWrapper">
                                            <div class="pointer js-compareNoDataSymbol"><i class="iconx16 i-16-question-mark"></i></div>
                                            <div class="panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup">
                                                This school has not provided SchoolCounty with information about this program/service.
                                                Contact the school directly to find out more.
                                            </div>
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td style={{width: "30px"}}><i class="iconx16 i-16-blue-before-care"></i></td>
                                        <td>Before care</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}><div class="pr js-compareNoDataWrapper">
                                            <div class="pointer js-compareNoDataSymbol"><i class="iconx16 i-16-question-mark"></i></div>
                                            <div class="panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup">
                                                This school has not provided SchoolCounty with information about this program/service.
                                                Contact the school directly to find out more.
                                            </div>
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td style={{width: "30px"}}><i class="iconx16 i-16-blue-after-school"></i></td>
                                        <td>After school</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}><div class="pr js-compareNoDataWrapper">
                                            <div class="pointer js-compareNoDataSymbol"><i class="iconx16 i-16-question-mark"></i></div>
                                            <div class="panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup">
                                                This school has not provided SchoolCounty with information about this program/service.
                                                Contact the school directly to find out more.
                                            </div>
                                        </div></td>
                                    </tr>
                                    </tbody></table>
                            </div>
                            <div class="pam mvn">
                                <div class="hbs"></div>
                            </div>              <div class="phm">
                            <span class="open-sans_sb">Programs</span><br/>
                        </div>
                            <div class="phm">
                                <table class="full-width ">
                                    <tbody><tr>
                                        <td style={{width: "30px"}}><i class="iconx16 i-16-blue-world-languages"></i></td>
                                        <td>World language</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}><div class="pr js-compareNoDataWrapper">
                                            <div class="pointer js-compareNoDataSymbol"><i class="iconx16 i-16-question-mark"></i></div>
                                            <div class="panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup">
                                                This school has not provided SchoolCounty with information about this program/service.
                                                Contact the school directly to find out more.
                                            </div>
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td style={{width: "30px"}}><i class="iconx16 i-16-blue-clubs"></i></td>
                                        <td>Clubs</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}><div class="pr js-compareNoDataWrapper">
                                            <div class="pointer js-compareNoDataSymbol"><i class="iconx16 i-16-question-mark"></i></div>
                                            <div class="panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup">
                                                This school has not provided SchoolCounty with information about this program/service.
                                                Contact the school directly to find out more.
                                            </div>
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td style={{width: "30px"}}><i class="iconx16 i-16-blue-sports-trophy"></i></td>
                                        <td>Sports</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}><div class="pr js-compareNoDataWrapper">
                                            <div class="pointer js-compareNoDataSymbol"><i class="iconx16 i-16-question-mark"></i></div>
                                            <div class="panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup">
                                                This school has not provided SchoolCounty with information about this program/service.
                                                Contact the school directly to find out more.
                                            </div>
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td style={{width: "30px"}}><i class="iconx16 i-16-blue-arts-and-music"></i></td>
                                        <td>Arts &amp; Music</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}><div class="pr js-compareNoDataWrapper">
                                            <div class="pointer js-compareNoDataSymbol"><i class="iconx16 i-16-question-mark"></i></div>
                                            <div class="panel pa dn tal pal font-size-xs open-sans js-compareNoDataPopup">
                                                This school has not provided SchoolCounty with information about this program/service.
                                                Contact the school directly to find out more.
                                            </div>
                                        </div></td>
                                    </tr>
                                    </tbody></table>
                            </div>
                            <div class="pam mvn">
                                <div class="hbs"></div>
                            </div>              <div class="phm">
                            <span class="open-sans_sb">Student Diversity</span><br/>
                        </div>




                            <div id="pie-chart1255" class="notranslate" style={{width:" 250px"}}><div style={{position: "relative"}}><div dir="ltr" style={{position:" relative",  width:" 250px", height: "250px"}}><div style={{position:  "absolute", left: "0px", top: "0px",  width: "100%", height: "100%"}} aria-label="A chart."><svg width="250" height="250" aria-label="A chart." style={{overflow:" hidden"}}><defs id="defs"></defs><rect x="0" y="0" width="250" height="250" stroke="none" stroke-width="0" fill="#ffffff"></rect><g><path d="M128,128L128,16A112,112,0,0,1,135.0325381872831,16.22100641603359L128,128A0,0,0,0,0,128,128" stroke="#ffffff" stroke-width="1" fill="#6cbfb5"></path></g><g><path d="M128,128L135.0325381872831,16.22100641603359A112,112,0,0,1,193.831948256757,37.390096630005885L128,128A0,0,0,0,0,128,128" stroke="#ffffff" stroke-width="1" fill="#fcc769"></path></g><g><path d="M128,128L193.831948256757,37.390096630005885A112,112,0,0,1,209.6444862711981,51.33072413598687L128,128A0,0,0,0,0,128,128" stroke="#ffffff" stroke-width="1" fill="#ef975b"></path></g><g><path d="M128,128L209.6444862711981,51.33072413598687A112,112,0,0,1,234.5183298250572,93.3900966300059L128,128A0,0,0,0,0,128,128" stroke="#ffffff" stroke-width="1" fill="#c4d66b"></path></g><g><path d="M128,128L234.5183298250572,93.3900966300059A112,112,0,1,1,128,16L128,128A0,0,0,1,0,128,128" stroke="#ffffff" stroke-width="1" fill="#836d93"></path></g><g></g></svg><div aria-label="A tabular representation of the data in the chart." style={{position:"absolute", left: "-10000px",  top: "auto",  width: "1px", height: "1px",  overflow: "hidden"}}><table><thead><tr><th>Label</th><th>Value</th></tr></thead><tbody><tr><td>American Indian/Alaska Native</td><td>0</td></tr><tr><td>Asian or Asian/Pacific Islander</td><td>1</td></tr><tr><td>Black</td><td>9</td></tr><tr><td>Hawaiian Native/Pacific Islander</td><td>0</td></tr><tr><td>Hispanic</td><td>3</td></tr><tr><td>Two or more races</td><td>7</td></tr><tr><td>White</td><td>80</td></tr></tbody></table></div></div></div><div aria-hidden="true" style={{display: "none",  position: "absolute", top: "260px",  left: "260px",  whiteSpace: " nowrap",  fontFamily: "Arial",  fontSize: "13px", fontWeight: "bold"}}>diversity</div><div></div></div></div>


                            <div class="phm">
                                <table class="full-width js-comparePieChartTable" style={{height:" 147px"}}>
                                    <tbody><tr>
                                        <td style={{width:" 30px"}}><i class="fl square js-comparePieChartSquare" style={{background: "rgb(105, 182, 132)"}}></i></td>
                                        <td><div class="pr js-popupWrapper">
                                            <div class="pointer js-popupActivator">Hindu</div>
                                            <div class="panel pa dn tal pal font-size-xs open-sans js-popupBody">
                                                American Indian/Alaska Native
                                            </div>
                                        </div></td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}>0%</td>
                                    </tr>
                                    <tr>
                                        <td style={{width:" 30px"}}><i class="fl square js-comparePieChartSquare" style={{background: "rgb(108, 191, 181)"}}></i></td>
                                        <td><div class="pr js-popupWrapper">
                                            <div class="pointer js-popupActivator">Muslim</div>
                                            <div class="panel pa dn tal pal font-size-xs open-sans js-popupBody">
                                                Asian or Asian/Pacific Islander
                                            </div>
                                        </div></td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}>1%</td>
                                    </tr>
                                    <tr>
                                        <td style={{width:" 30px"}}><i class="fl square js-comparePieChartSquare" style={{background: "rgb(252, 199, 105)"}}></i></td>
                                        <td>Jain</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}>9%</td>
                                    </tr>
                                    <tr>
                                        <td style={{width:" 30px"}}><i class="fl square js-comparePieChartSquare" style={{background: "rgb(231, 113, 93)"}}></i></td>
                                        <td><div class="pr js-popupWrapper">
                                            <div class="pointer js-popupActivator">Christian</div>
                                            <div class="panel pa dn tal pal font-size-xs open-sans js-popupBody">
                                                Hawaiian Native/Pacific Islander
                                            </div>
                                        </div></td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}>n/a</td>
                                    </tr>
                                    <tr>
                                        <td style={{width:" 30px"}}><i class="fl square js-comparePieChartSquare" style={{background: "rgb(239, 151, 91)"}}></i></td>
                                        <td>Sikh</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}>3%</td>
                                    </tr>
                                    <tr>
                                        <td style={{width:" 30px"}}><i class="fl square js-comparePieChartSquare" style={{background: "rgb(196, 214, 107)"}}></i></td>
                                        <td>SC/ST</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}>7%</td>
                                    </tr>
                                    <tr>
                                        <td style={{width:" 30px"}}><i class="fl square js-comparePieChartSquare" style={{background: "rgb(131, 109, 147)"}}></i></td>
                                        <td>NRI</td>


                                        <td class="tac open-sans_sb" style={{width: "40px"}}>80%</td>
                                    </tr>
                                    </tbody></table>
                            </div>

                        </div>
                    </div>              <div>
                    <div class="mtm mbm pts tac full-width header-bg-color pointer js-categoryTitle" style={{height:"42px", fontSize:" 16pt"}}>
                        Reviews
                    </div>
                    <div class="js-reviewsCategoryData js-categoryData">


                        <div class="ptm tac js-reviewSnapshot" style={{height:" 143px"}}>
                            <div class="js-reviewStars" style={{height:" 61px"}}>
                                <div class="pts"><span class="iconx24-stars i-24-orange-star i-24-star-3"></span><span class="iconx24-stars i-24-grey-star i-24-star-2"></span></div>
                                <div class="font-size-large">3 stars</div>
                            </div>
                            <div>Based on 9 ratings</div>
                            <div class="ptm pbl"><a href="/missouri/moberly/1255-Moberly-Middle-School/reviews/">18 reviews</a></div>
                        </div>

                    </div>
                </div>              <div class="ptl tac">
                    <div class="pbm phl">
                        <button class="btn btn-primary tac clearfix js-button-link" data-link-value="https://www.SchoolCounty.org/missouri/moberly/1255-Moberly-Middle-School/" style={{width:"80%"}} rel="" data-link-use-new-window="">
                            <span class="vat  mrs"></span>
                            View full profile
                        </button>
                    </div>
                    <div class="pbm phl">
                        <button class="btn btn-default tal clearfix js-save-this-school-button" data-link-value="1255" style={{width:"80%"}} rel="" data-link-use-new-window="">
                            <span class="vat iconx16 i-16-heart mrs"></span>
                            Follow this school
                        </button>
                    </div>
                    <div class="pbm phl">
                        <button class="btn btn-default tal clearfix js-button-link" data-link-value="https://www.zillow.com/MO-65270?cbpartner=Great+Schools&amp;utm_source=SchoolCounty&amp;utm_medium=referral&amp;utm_campaign=schoolsearch" style={{width:"80%"}} rel="nofollow" data-link-use-new-window="true">
                            <span class="vat iconx16 i-16-blue-home mrs"></span>
                            Homes for sale
                        </button>
                    </div>
                </div>

                </div>
            </div>

        )
    }
}


export default CompareUnit