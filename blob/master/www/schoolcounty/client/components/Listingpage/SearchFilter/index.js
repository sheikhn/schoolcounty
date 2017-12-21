import React ,{Component} from 'react'
import { connect } from 'react-redux'

class SearchFilter extends Component{

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
        }, this.search);
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
                html.push(<li key={list[school].id}><Link style={{lineHeight: '1.1em'}} class="open-sans_sb mbs font-size-medium rs-schoolName" 
                        to={"/details"} query={{ id: list[school].id }}>{list[school].name}</Link></li>)
            }
        }
        return html;
    }

	render(){

		return(

            <div class="col-md-12">

            <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span class="glyphicon glyphicon-plus"></span> 
                            Search
                           </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                        <div class="panel-body">
                            <div class="cd-tab-filter">
                            <ul class="cd-filters">
                                <li class="placeholder"><a data-type="all" href="#0">All</a></li>
                                <li class="filter" onClick={() => this.selectFilter('name')}><a class="selected" >Name</a></li>
                                <li class="filter" onClick={() => this.selectFilter('city')}><a>City</a></li>
                                <li class="filter" onClick={() => this.selectFilter('pincode')}><a>PinCode</a></li>
                                <div style={{display: 'inline-block'}}>
                                <input onChange={this.setKeyWord} value={this.state.keyword} style={{top: '70px !important'}} type="text" class="form-control"  name="x" placeholder="Search term..." />
                                </div>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>    


			
						

			
			)
	}

}

export default SearchFilter;



