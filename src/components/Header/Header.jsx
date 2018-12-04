import React from 'react'
export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            toggleNav: false
        }
    }

    toggleNav(){
        this.setState({
            toggleNav : !this.state.toggleSide
        })
    }

    render(){
        return(
                <div className="header">
                    <div className="logo">
                        <i class="fa fa-tachometer"></i>
                        <span>Brand</span>
                    </div>
                    <a href="#" class="nav-trigger" onClick={this.toggleNav.bind(this)}><span></span></a>
                </div>
            )
    }

}