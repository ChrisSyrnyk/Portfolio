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
                            <div className='filler'>I’m a recent university graduate with a passion for creating responsive web applications. In university I began my studies in Biological sciences before expanding my outlook to include computer sciences.</div>
                            <div className='animation-container'></div>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default About