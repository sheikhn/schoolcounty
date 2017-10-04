
import React,{Component} from 'react'

class Categories extends Component{
    render(){
        return(
            <div>

        <div class="container-fluid bg-3 text-center">
            <h3>Categories</h3><br/>
            <div class="row">
                <div class="col-sm-3">
                    <p>School Name</p>
                    <img src="../../assets/img/school1.jpg" class="img-responsive"  alt="Image" />
                </div>
                <div class="col-sm-3">
                    <p>Education Stage</p>
                    <img src="../../assets/img/school2.jpg" class="img-responsive"  alt="Image" />
                </div>
                <div class="col-sm-3">
                    <p>School Type</p>
                    <img src="../../assets/img/school3.jpg" class="img-responsive"  alt="Image" />
                </div>
                <div class="col-sm-3">
                    <p>Syllabus</p>
                    <img src="../../assets/img/school4.jpg" class="img-responsive"  alt="Image" />
                </div>
            </div>
        </div>

            <div class="container-fluid bg-3 text-center">
                <div class="row">
                <div class="col-sm-3">
                <p>Sate Wise</p>
            <img src="../../assets/img/school4.jpg" class="img-responsive"  alt="Image" />
                </div>
                <div class="col-sm-3">
                <p>Rating Wise</p>
            <img src="../../assets/img/school3.jpg" class="img-responsive"  alt="Image" />
                </div>
                <div class="col-sm-3">
                <p>Ranking Wise</p>
            <img src="../../assets/img/school2.jpg" class="img-responsive"  alt="Image" />
                </div>
                <div class="col-sm-3">
                <p>Budget Wise</p>
            <img src="../../assets/img/school1.jpg" class="img-responsive"  alt="Image" />
                </div>
                </div>
                </div>


            </div>
        )
    }
}

export default Categories