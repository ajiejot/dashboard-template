import React from 'react'


import TopNav from '../components/Navigation/TopNav/TopNav'
import SideNav from '../components/Navigation/SideNav/SideNav'


export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            toggleSide: true
        }
    }

    toggleSideNav(){
        this.setState({
            toggleSide : !this.state.toggleSide
        })
    }

    render(){
        
            return (
                <div>
                    <TopNav click={this.toggleSideNav.bind(this)} />
                    <div className={this.state.toggleSide ? 'wrapper menuDisplayed' : 'wrapper'}>
                        <SideNav />
                        <div className="page-content-wrapper">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                      {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }