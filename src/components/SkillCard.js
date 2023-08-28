import React, {Component} from 'react';
import SkillList from './SkillList';
import Skill from './Skill'

class SkillCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            isHover: false,
        }
        

    }


    
    


    render(){
        
        return(
            <>
              {SkillList.filter(skill => skill.category === this.props.category).map((skill)=>{
                return(
                    <>
                    <Skill skill = {skill}/>

                    </>  
                )
              })}  
                
                    
                    
                
                            
            </>
            
        )
    }
}

export default SkillCard