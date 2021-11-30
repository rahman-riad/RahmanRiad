import React from 'react';
import './SingleProject.css';

const SingleProject = (props) => {
    const { mainImg, name } = props.project;
    return (
        <div className="col-md-6">
            <div className="singleProjectDesign">
                <img src={mainImg}
                    width="100%"
                    className="img-fluid border rounded-3 img-thumbnail"
                    alt="Project Banner" />
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <h3 className="fw-bold fst-italic mt-2">{name}</h3>
                    <button className="btn btn-dark">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;