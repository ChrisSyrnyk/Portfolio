import React, {Component} from 'react';
import SkillCard from './SkillCard';

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
                                <SkillCard category = {'FE'}/>
                            </div>
                        </div>
                        <div className='category-div'>
                            <div className='skill-category'>Back-end</div>
                            <div className='skills-card'>
                                <SkillCard category = {'BE'}/>
                            </div>
                        </div>
                        <div className='category-div'>
                            <div className='skill-category'>Miscellaneous</div>
                            <div className='skills-card'>
                                <SkillCard category = {'MS'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default Skills