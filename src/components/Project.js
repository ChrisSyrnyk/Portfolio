import React, {Component} from 'react';

class Project extends Component{
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
            <>
                {this.props.ProjectList.map((project)=>{
                    return(
                            <div className='project-card'>
                                <img 
                                    src = {project.img}
                                    className = "project-image">
                                </img>
                                <div className='project-right-cont'>
                                    <div className = "project-name">{project.name}</div>
                                    <div className="project-desc">{project.desc}</div>
                                    <div className='buttons-container'>
                                        <div 
                                        className='project-link'
                                        onClick={()=>{this.openInNewTab(project.codeURL)}}
                                        >
                                            View Code
                                        </div>
                                        <div 
                                        className='project-link'
                                        onClick={()=>{this.openInNewTab(project.previewURL)}}
                                        >
                                            Live Preview
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
                })}
            </>
        )
    }
}

export default Project