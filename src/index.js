
import ReactDOM from 'react-dom'
import React from 'react'

import { Switch, Route,hashHistory,Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.jsx'

import samplemodule1Route from './components/modules/samplemodule1/router'

import SampleModuleIndex from './components/modules/samplemodule1/index'

import SampleModule1A from './components/modules/samplemodule1/components/SampleModule1A'


ReactDOM.render(
	<BrowserRouter>
		<App>
			{samplemodule1Route}
			
		</App>
	</BrowserRouter>
    ,document.getElementById('root')
    
)