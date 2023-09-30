import React, {Component} from 'react';
import gitIcon from '../img/icons/github.svg'
import linkedinIcon from '../img/icons/linkedin.svg'

class Contact extends Component{
    constructor(props){
        super(props)
    }
    
    openInNewTab(url) {
        window.open(url, '_blank').focus();
      }

    mailTo(emailAddress)
      {
        window.location.href = "mailto:" + emailAddress;
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
                    <div className='contact-filler'>Contact me via email at:</div>
                    <div 
                      className='email'
                      onClick={()=>this.mailTo('christopher.syrnyk2@ucalgary.ca')}
                    >
                        Christopher.syrnyk2@ucalgary.ca
                    </div>
                    <div className='contact-filler'>or</div>
                    <div className='contact-filler'>Reach me through social media:</div>
                    <div className='socials-holder'>
                        <img src = {gitIcon} 
                        className='social-icon'
                        onClick={()=>this.openInNewTab('https://github.com/ChrisSyrnyk')}
                        />
                        <img src = {linkedinIcon} 
                        className='social-icon'
                        onClick={()=>this.openInNewTab('https://www.linkedin.com/in/christopher-syrnyk-3b5058259/')}
                        />
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