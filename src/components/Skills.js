import React, {Component} from 'react';

class Skills extends Component{
    constructor(props){
        super(props)
    }
    


    render(){
        return(
            <>
                <div className='half-page-column-container'>
                    <div className='title-container'>
                        <div className='title'>Tools & Skills</div>
                        <div className='line'/>
                    </div>
                    <div className='skills-container'>
                        <div className='category-div'>
                            <div className='skill-category'>Front-end</div>
                            <div className='skills-card'>
                                <div className='skill'></div>
                                <div className='skill'></div>
                                <div className='skill'></div>
                                <div className='skill'></div>
                                <div className='skill'></div>
                                <div className='skill'></div>
                            </div>
                        </div>
                        <div className='category-div'>
                            <div className='skill-category'>Back-end</div>
                            <div className='skills-card'>
                            </div>
                        </div>
                        <div className='category-div'>
                            <div className='skill-category'>Miscellaneous</div>
                            <div className='skills-card'>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default Skills