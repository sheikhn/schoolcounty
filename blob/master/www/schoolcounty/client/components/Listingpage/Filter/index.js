import React, { Component } from 'react'

class Filter extends Component {
	constructor(props) {
		super(props);
	}




	getStates() {

		const {filterParams} =  this.props;
		let stateList = [];
		let states = filterParams.states.list;
		for (let stateIndex in states ) {
			let state = states[stateIndex];
			
			stateList.push(
				<option key={stateIndex} value={'.option'+stateIndex}>{state.name}</option>
			);
		}
		return stateList;
	}

	getSyllabus() {

		const {filterParams} =  this.props;
		let syllabusList = [];
		let syllabus = filterParams.syllabus.list;
		//console.log(syllabus);
		for (let syllabusIndex in syllabus ) {
			
			syllabusList.push(

				<li  key={syllabusIndex}>
					<input id={'checkboxsy'+syllabusIndex}  onClick={() => this.setSyllabusFilter()} class="selectSyllabus" value={syllabus[syllabusIndex].id} data-filter=".check1" name={'checkbox'+syllabusIndex} type="checkbox" />
					<label class="checkbox-label" for={'checkboxsy'+syllabusIndex}>{syllabus[syllabusIndex].syllabus}</label>
				</li>
			);
		}
		
		return syllabusList;
	}

	getLevels() {
		const {filterParams} =  this.props;
		let levelList = [];

		let levels = filterParams.level.list;
		for (let levelIndex in levels ) {
			//console.log('levels',levels)
			let level = levels[levelIndex];
			
			levelList.push(
			<li key={levelIndex}>
					<input class="selectLevels" onClick={() => this.setLevelsFilter()} type="checkbox" id={'checkboxle'+levelIndex} value={levels[levelIndex].id} name={'checkbox'+levelIndex} data-filter=".check1" />
					<label class="checkbox-label" for={'checkboxle'+levelIndex}>{level.level}</label>
				</li>
			);
		}
		return levelList;
	}


	getInfrastructure() {
		const {filterParams} =  this.props;
		let infraList = [];

		let infrastructures = filterParams.infrastructure.list;
		for (let infrastructuresIndex in infrastructures ) {
			let infrastructure = infrastructures[infrastructuresIndex];
			
			infraList.push(
			<li key={infrastructuresIndex}>
					<input class="selectInfra" onClick={() => this.setInfraFilter()} data-filter="check1" type="checkbox" name={'checkboxin'+infrastructuresIndex} value={infrastructures[infrastructuresIndex].id} id={'radioinfra'+infrastructuresIndex}/>
					<label class="radio-label" for={'radioinfra'+infrastructuresIndex}>{infrastructure.name}</label>
				</li>
			);
		}
		return infraList;
	}

	getActivities() {
		const {filterParams} =  this.props;
		let activitieList = [];

		let activities = filterParams.activities.list;
		for (let activitiesIndex in activities ) {
			let activitie = activities[activitiesIndex];
			
			activitieList.push(
			<li key={activitiesIndex}>
					<input class="selectAct" onClick={() => this.setActivitiesFilter()} data-filter="check1" type="checkbox" name={'checkboxact'+activitiesIndex} value={activitie.id} id={'checkbox'+activitiesIndex}/>
					<label class="radio-label" for={'checkbox'+activitiesIndex}>{activitie.name}</label>
				</li>
			);
		}
		return activitieList;
	}

	setSyllabusFilter(event) {
		

		var checkboxes = document.getElementsByClassName('selectSyllabus');
		var selected = [];
		for (var i=0; i<checkboxes.length; i++) {
		    if (checkboxes[i].checked) {
		        selected.push(checkboxes[i].value);
		    }
		}

			//console.log('sylafli',selected);
			var syllabusId = selected;

		this.props.setFilterParams({'syllabus': syllabusId})
	}

	setLevelsFilter(event) {
		

		var checkboxes = document.getElementsByClassName('selectLevels');
		var selected = [];
		for (var i=0; i<checkboxes.length; i++) {
		    if (checkboxes[i].checked) {
		        selected.push(checkboxes[i].value);
		    }
		}
			var levelId = selected;
			//console.log('sylafle',selected);
		this.props.setFilterParams({'level': levelId})
	}

	setActivitiesFilter(event) {
		

		var checkboxes = document.getElementsByClassName('selectAct');
		var selected = [];
		for (var i=0; i<checkboxes.length; i++) {
		    if (checkboxes[i].checked) {
		        selected.push(checkboxes[i].value);
		    }
		}

			var ccaId = selected;

		this.props.setFilterParams({'cca': ccaId})
	}

	setInfraFilter(event) {
		

		var checkboxes = document.getElementsByClassName('selectInfra');
		var selected = [];
		for (var i=0; i<checkboxes.length; i++) {
		    if (checkboxes[i].checked) {
		        selected.push(checkboxes[i].value);
		    }
		}

			var infraId = selected;

		this.props.setFilterParams({'infra': infraId})
	}

	render() {
		let {filterParams} =  this.props;
	   // console.log('comporen',filterParams);
	   
		if (!filterParams.states.fetched && !filterParams.level.fetched && !filterParams.syllabus.fetched && !filterParams.infrastructure.fetched) {
			return null;
		}


	   let schoolLevelList = this.getLevels();     
		let stateList = this.getStates();
		let syllabusList =this.getSyllabus();
		let infrastructureList = this.getInfrastructure();
		let activitiesList = this.getActivities();


		return (

		<div class="col-sm-4 col-xs-12">
				<div class="sidebarInner sidebarCategory">
					<div class="panel panel-default">
						<div class="panel-heading">Search</div>
						<div class="input-group">
							<input type="text" class="form-control" placeholder="What are you looking for?" aria-describedby="basic-addon2" />
							<a href="#" class="input-group-addon" id="basic-addon2"><i class="fa fa-search" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
				<div class="sidebarInner sidebarCategory">
					<div class="panel panel-default">
						<div class="panel-heading">Syllabus</div>
						<div class="panel-body">
							<ul class="list-unstyle categoryList">
								{syllabusList}
							</ul>
						</div>
					</div>
				</div>
				<div class="sidebarInner sidebarCategory">
					<div class="panel panel-default">
						<div class="panel-heading">States</div>
						<div class="panel-body">
							<select class="filter" name="selectThis" id="selectThis">
								<option value="">Choose a state</option>
								{stateList}
							</select>
						</div>
					</div>
				</div>
				<div class="sidebarInner sidebarCategory">
					<div class="panel panel-default">
						<div class="panel-heading">Levels of Education</div>
						<div class="panel-body">
							<ul class="list-unstyle categoryList">
								{schoolLevelList}
							</ul>
						</div>
					</div>
				</div>
				<div class="sidebarInner sidebarCategory">
					<div class="panel panel-default">
						<div class="panel-heading">Infrastructure</div>
						<div class="panel-body">
							<ul class="list-unstyle categoryList">
								{infrastructureList}
							</ul>
						</div>
					</div>
				</div>
				<div class="sidebarInner sidebarCategory">
					<div class="panel panel-default">
						<div class="panel-heading">Extra and Co Curricular Activities</div>
						<div class="panel-body">
							<ul class="list-unstyle categoryList">
								{activitiesList}
							</ul>
						</div>
					</div>
				</div>
		</div>



		)
	}
}

export default Filter