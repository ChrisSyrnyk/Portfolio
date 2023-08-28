import React, {Component} from 'react';
import ProjectList from './ProjectList';
import Project from './Project';

class Projects extends Component{
    constructor(props){
        super(props)
    }
    


    render(){
        return(
            <>
                <div className='half-page-column-container'>
                    <div className='title-container'>
                        <div className='title'>Featured Projects</div>
                        <div className='line'/>
                    </div>
                    <div className='side-scroll-container'>
                        <Project ProjectList = {ProjectList}/>
                    </div>
                </div>
            </>
            
        )
    }
}

export default Projects