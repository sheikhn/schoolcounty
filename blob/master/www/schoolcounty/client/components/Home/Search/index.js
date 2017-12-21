
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
        const {fetched, list} = this.props.schools;
        let html = [];
        if (fetched) {
            for (let school in list ){
                html.push(
                    <li key={list[school].id}>
                        <Link style={{lineHeight: '1.1em'}}
                        to={"/details"} query={{ id: list[school].id }}>{list[school].name}</Link></li>
                )
            }
        }
        return html;
    }


    render(){
        return(

                <div>
                <div class="col-xs-8 col-xs-offset-2">
                    <div style={{display:'inline'}}>
                        <select onChange={this.selectFilter} class="form-control" style={{width:'18%',float:'left'}}>
                            <option value={SEARCH_BY_NAME} >School Name</option>
                            <option value={SEARCH_BY_CITY} >City</option>
                            <option value={SEARCH_BY_PINCODE} >Pincode</option>
                        </select>
                        <input  type="hidden" name="search_param"  id="search_param"/>
                        <input onChange={this.setKeyWord} value={this.state.keyword} style={{top: '70px !important'}} id="myInput" type="text" class="form-control"  name="x" placeholder="Search term..." />
                        <img class="form-control" src="/assets/img/searchicon.png" onClick={() => this.search()} style={{width:'5%'}}/>
                        <div class='listing'>
                            <ul id='myUL' class="searchlist">
                            {this.showSchools()}
                            </ul>
                        </div>
                    </div>
                </div>  
                </div>

        )
    }
}

export default Search
