
import React,{Component} from 'react'
import {Link} from 'react-router'

const SEARCH_BY_NAME = 'name';
const SEARCH_BY_CITY = 'city';
const SEARCH_BY_PINCODE = 'pincode';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: SEARCH_BY_NAME,
            keyword: ''
        }
        this.setKeyWord = this.setKeyWord.bind(this);
        this.selectFilter = this.selectFilter.bind(this);
    }

    componentWillRecieveProps(newProps) {
        if (this.props.schools.fetching && newProps.schools.fetched) {
            this.showSchools();
        }
    }

    selectFilter(e) {
        this.setState({
            filterName: e.target.value
        })
    }

    setKeyWord(e) {
        this.setState({
            keyword: e.target.value
        }, this.search);
    }

    search() {
        if (this.state.keyword != '') {
            let filter = {};
            let filterName = this.state.filterName;
            filter[filterName] = this.state.keyword;
            this.props.setFilter(filter);
        }
    }

    showSchools() {
        const {list} = this.props.schools;
        let html = [];
            for (let school in list ){
                html.push(
                    <li key={list[school].id}>
                        <Link style={{lineHeight: '1.1em'}}
                        to={"/details"} query={{ id: list[school].id }}>{list[school].name}</Link></li>
                )
            }
        return html;
    }


    render(){
        return(

                
                <section class="clearfix homeBanner" style={{backgroundImage: 'url(./assets/img/banner1.jpg)'}}>
                  <div class="container">
                    <div class="row">
                      <div class="col-xs-12">
                        <div class="banerInfo">
                          <h1>Explore. Discover. Share</h1>
                          <p>SchoolCounty helps to find out great schools arround you</p>
                          
                            <div class="form-group">
                              <div class="input-group">
                                <div class="input-group-addon">Find</div>
                                <input type="text" class="form-control" id="findItem" placeholder="What are you looking for?" />
                                <div class="input-group-addon addon-right"></div>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="input-group">
                                <div class="input-group-addon">Near</div>
                                <input type="text" class="form-control" id="nearLocation" placeholder="Location" />
                                <div class="input-group-addon addon-right"><i class="icon-listy icon-target" aria-hidden="true"></i></div>
                              </div>
                            </div>
                            <Link href="/listing" >
                            <button type="submit" class="btn btn-primary">Search <i class="fa fa-search" aria-hidden="true"></i></button>
                            </Link>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </section>  
              

        )
    }
}

export default Search
