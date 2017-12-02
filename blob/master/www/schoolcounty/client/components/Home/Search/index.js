
import React,{Component} from 'react'
import {Link} from 'react-router'

class Search extends Component{
    render(){

    var style={ height:'37px !important' };

        return(

                    <form class="" >
                         
                        <div class="col-xs-8 col-xs-offset-2">
                            <div class="input-group">
                                <div class="input-group-btn search-panel">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                        <span id="search_concept">Filter by</span> <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu" role="menu">
                                      <li>School Name</li>
                                      <li>City</li>
                                      <li>Pincode</li>
                                    </ul>
                                </div>
                                <input type="hidden" name="search_param" value="all" id="search_param"/>         
                                <input style={{top: '70px !important'}}type="text" class="form-control"  name="x" placeholder="Search term..." />
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
                                </span>
                            </div>
                        </div>
                    </form>
               
        )
    }
}

export default Search
