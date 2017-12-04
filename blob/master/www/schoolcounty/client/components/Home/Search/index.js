
import React,{Component} from 'react'
import {Link} from 'react-router'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: 'name',
            keyword: ''
        }
        this.setKeyWord = this.setKeyWord.bind(this);
    }

    selectFilter(filter) {
        this.setState({
            filterName: filter
        })
    }

    setKeyWord(e) {
        this.setState({
            keyword: e.target.value
        }, this.search());
    }

    search() {
        let filter = {};
        let filterName = this.state.filterName;
        filter[filterName] = this.state.keyword;
        this.props.setFilter(filter);
    }

    showSchools() {
        const {fetched, list} = this.props.schools;
        let html = [];
        if (fetched) {
            for (let school in list ){
                html.push(<li>{list[school].name}</li>)
            }
        }
        return html;
    }


    render(){
        return(
                <div class="col-xs-8 col-xs-offset-2">
                    <div class="input-group">
                        <div class="input-group-btn search-panel">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <span id="search_concept">Filter by</span> <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                                <li onClick={() => this.selectFilter('name')}>School Name</li>
                                <li onClick={() => this.selectFilter('city')}>City</li>
                                <li onClick={() => this.selectFilter('pincode')}>Pincode</li>
                            </ul>
                        </div>
                        <input  type="hidden" name="search_param"  id="search_param"/>
                        <input onChange={this.setKeyWord} value={this.state.keyword} style={{top: '70px !important'}}type="text" class="form-control"  name="x" placeholder="Search term..." />
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button" onClick={() => this.search()}>
                                <span class="glyphicon glyphicon-search"></span>
                            </button>
                        </span>
                        <div class='listing'>
                            <ul>
                            {this.showSchools()}
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Search
