import React, {Component} from 'react';
import profile from '../img/profile.png'

class About extends Component{
    constructor(props){
        super(props)
    }
    


    render(){
        return(
            <>
                <div className='half-page-row-container'>
                    <div className='about-left'>
                        <img className='about-photo' src = {profile}>
                        </img>
                    </div>
                    <div className='about-right'>
                        <div className='about-content'>
                            <div className='title-container'>
                                <div className='title'>About</div>
                                <div className='line'/>
                            </div>
                            <div className='filler'>In university I 
                            began my studies in the Biological sciences before expanding my outlook to 
                            include Computer science. My journey into the world of programming began as 
                            a hobby driven by curiosity and quickly developed into a passion. I am a full 
                            stack developer with the knowledge and skills to create responsive web applications 
                            utlizing Javascript, React, and NodeJS.
                            </div>
                        
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default About