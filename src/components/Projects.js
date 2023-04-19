import React, {Component} from 'react';

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
                        <div className='project-card'></div>
                        <div className='project-card'></div>
                        <div className='project-card'></div>
                        <div className='project-card'></div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default Projects