import React, { Component } from 'react'

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    getTypes() {
        const {filterParams} =  this.props;
        let schoolTypeList = []
        let typesOfSchools = filterParams.typeOfSchool;
        for (let typeIndex in typesOfSchools ) {
            let schoolType = typesOfSchools[typeIndex];
            schoolTypeList.push(
                <li key={typeIndex}>
                    <input class="filter" data-filter=".radio2" type="radio" name="radioButton" id={'radio'+typeIndex}/>
                    <label class="radio-label" for={'radio'+typeIndex}>{schoolType}</label>
                </li>
            );
        }

        return schoolTypeList
    }

    getLevels() {
        const {filterParams} =  this.props;
        let schoolLevelList = []
        let schoolsLevels = filterParams.level;
        for (let levelIndex in  schoolsLevels) {
            let schoolLevel = schoolsLevels[levelIndex];
            schoolLevelList.push(
                <li key={levelIndex}>
                    <input class="filter" data-filter={'.check1'+levelIndex} type="checkbox" id={'checkbox'+levelIndex}/>
                    <label class="checkbox-label" for={'checkbox'+levelIndex}>{schoolLevel}</label>
                </li>
            );
        }
        return schoolLevelList;
    }

    getSyllabus() {
        const {filterParams} =  this.props;
        let syllabusList = [];
        let syllabusTypes = filterParams.typesOfSyllabus;
        for (let syllabusIndex in syllabusTypes ) {
            let syllabusType = syllabusTypes[syllabusIndex];
            syllabusList.push(
                <option key={syllabusIndex} value={'.option'+syllabusIndex}>{syllabusType}</option>
            );
        }

        return syllabusList;
    }


    render() {
        const {filterParams} =  this.props;
        if (!filterParams.fetched) {
            return null;
        }


        let schoolTypeList = this.getTypes();

        let schoolLevelList = this.getLevels();

        let syllabusList = this.getSyllabus();

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
                        <h4>Levels of Education</h4>

                        <ul class="cd-filter-content cd-filters list">
                            {schoolLevelList}
                        </ul>
                    </div>

                    <div class="cd-filter-block">
                        <h4>Select</h4>

                        <div class="cd-filter-content">
                            <div class="cd-select cd-filters">
                                <select class="filter" name="selectThis" id="selectThis">
                                    <option value="">Choose an Syllabus</option>
                                    {syllabusList}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="cd-filter-block">
                        <h4>Type of School</h4>

                        <ul class="cd-filter-content cd-filters list">
                            {schoolTypeList}
                        </ul>
                    </div>
                </form>

                <a href="#0" class="cd-close">Close</a>
            </div>


        )
    }
}

export default Filter