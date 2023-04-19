import React, {Component} from 'react';
import gitIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png'

class Contact extends Component{
    constructor(props){
        super(props)
    }
    


    render(){
        return(
            <>
                <div className='half-page-column-container'>
                    <div className='title-container'>
                        <div className='line'/>
                        <div className='title'>Contact</div>
                        <div className='line'/>
                    </div>
                    <div className='filler'>Contact me via email at:</div>
                    <div className='email'>ChristopherSyrnyk2@ucalgary.ca</div>
                    <div className='filler'>or</div>
                    <div className='filler'>Reach me through social media:</div>
                    <div className='socials-holder'>
                        <img src = {gitIcon} className='social-icon'/>
                        <img src = {linkedinIcon} className='social-icon'/>
                    </div>
                    <div className='title-container'>
                        <div className='line'/>
                    </div>
                </div>
            </>
            
        )
    }
}

export default Contact