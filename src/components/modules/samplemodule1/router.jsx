import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react'

import SampleModuleIndex from './index'

import SampleModule1A from '../samplemodule1/components/SampleModule1A'

const samplemodule1Route=(
    <div>
        <Route path ='/sample1' component ={SampleModuleIndex}/>
        <Route path ='/sample1A' component ={SampleModule1A}/>
    </div>
)

export default samplemodule1Route