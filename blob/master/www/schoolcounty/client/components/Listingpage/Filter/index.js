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
					<input class="selectInfra" onClick={() => this.setInfraFilter()} data-filter=".radio2" type="radio" name={'radio'+infrastructuresIndex} value={infrastructures[infrastructuresIndex].id} id={'radioinfra'+infrastructuresIndex}/>
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
					<input class="filter" data-filter=".radio2" type="radio" name="radioButton" id={'radio'+activitiesIndex}/>
					<label class="radio-label" for={'radio'+activitiesIndex}>{activitie.name}</label>
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

			<div class="cd-filter">
				<form>
					<div class="cd-filter-block">
						<h4>Search</h4>

						<div class="cd-filter-content">
							<input type="search" placeholder="Try color-1,color-2,color-3..."/>
						</div>
					</div>




					<div class="cd-filter-block">
							<h4>Syllabus</h4>
							<ul class="cd-filter-content cd-filters list">
									{syllabusList}
							</ul>
					</div>

				   
					<div class="cd-filter-block">
						<h4>States</h4>

						<div class="cd-filter-content">
							<div class="cd-select cd-filters">
								<select class="filter" name="selectThis" id="selectThis">
									<option value="">Choose a state</option>
									{stateList}
								</select>
							</div>
						</div>
					</div>
				   
					<div class="cd-filter-block">
						<h4>Levels of Education</h4>

						<ul class="cd-filter-content cd-filters list">
							{schoolLevelList}
						</ul>
					</div>

					<div class="cd-filter-block">
						<h4>Infrastructure</h4>

						<ul class="cd-filter-content cd-filters list">
							{infrastructureList}
						</ul>
					</div>

					<div class="cd-filter-block">
						<h4>Extra and Co Curricular Activities</h4>

						<ul class="cd-filter-content cd-filters list">
							{activitiesList}
						</ul>
					</div>

				</form>

				<a href="#0" class="cd-close">Close</a>
			</div>


		)
	}
}

export default Filter