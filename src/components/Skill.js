import React, {Component} from 'react';

class Skill extends Component{
    constructor(props){
        super(props)
        this.state = {
            isHover: false,
        }
        
    }

    openInNewTab(url) {
        window.open(url, '_blank').focus();
      }
    
    render(){
        
        return(
            <div className='skill'>
                <img 
                key = {this.props.skill.name + this.props.skill.category} 
                src = {this.props.skill.img} className = 'icon-holder'
                onMouseEnter={()=>this.setState({
                    isHover: true,
                })}
                onMouseLeave={()=>this.setState({
                    isHover: false,
                })}
                onClick={()=>{this.openInNewTab(this.props.skill.url)}}
                />
                {this.state.isHover && (
                <div  className='name-holder'>{this.props.skill.name}</div>
                )
                }
            </div>
        )
    }
}

export default Skill