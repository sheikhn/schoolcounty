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
        
        for (let syllabusIndex in syllabus ) {
            
            syllabusList.push(
               <option key={syllabusIndex} value={'.option'+syllabusIndex}>{syllabus[syllabusIndex].syllabus}</option>
            );
        }
        
        return syllabusList;
    }

    getLevels() {
        const {filterParams} =  this.props;
        let levelList = [];

        let levels = filterParams.level.list;
        for (let levelIndex in levels ) {
            let level = levels[levelIndex];
            
            levelList.push(
            <li key={levelIndex}>
                    <input class="filter" data-filter=".radio2" type="radio" name="radioButton" id={'radio'+levelIndex}/>
                    <label class="radio-label" for={'radio'+levelIndex}>{level.level}</label>
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
                    <input class="filter" data-filter=".radio2" type="radio" name="radioButton" id={'radio'+infrastructuresIndex}/>
                    <label class="radio-label" for={'radio'+infrastructuresIndex}>{infrastructure.name}</label>
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

                        <div class="cd-filter-content">
                            <div class="cd-select cd-filters">
                                <select class="filter" name="selectThis" id="selectThis">
                                    <option value="">Choose a Syllabus</option>
                                    {syllabusList}
                                </select>
                            </div>
                        </div>
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