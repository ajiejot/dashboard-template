import React from 'react'


import SideNav from '../components/Navigation/SideNav/SideNav'
import Header from '../components/Header/Header'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            toggleSide: true
        }
    }

    toggleSideNav(){
        // this.setState({
        //     toggleSide : !this.state.toggleSide
        // })
    }

    render(){
        
            return (
                <div>
                    <Header  />
                    <SideNav />
                </div>
            )
        }
    }