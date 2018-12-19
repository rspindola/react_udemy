import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
        <Family>
                <Member name="Renato" lastName="Castro"/>
                <Member name="Guilherme" lastName="Clark"/>
                <Member name="Julia" lastName="Souza"/>
                <Member name="Fernanda" lastName="Lima"/>
        </Family>
, document.getElementById('app'))