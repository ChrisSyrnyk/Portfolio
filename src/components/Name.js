import React, {Component} from 'react';

class Name extends Component{
    constructor(props){
        super(props)
    }
    


    render(){
        return(
            <>
                <div className='full-page-container'>
                    <div className='nameHolderOutter'>
                        <div className='nameHolderInner'>
                            <div className='name'>
                                Christopher Syrnyk
                            </div>
                        </div>
                    </div>
                    <div className='scroll-down'/>
                    <div className='center-Line'/>
                </div>
                <div className='half-page-column-container'/>
            </>
            
        )
    }
}

export default Name