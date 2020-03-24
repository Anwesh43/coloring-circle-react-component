import React from 'react'
import Circle from './Circle'
import Bar from './Bar'
import {divideScale} from './utils'

const ColoringCircleBar = ({w, h, scale}) => {
    return (<div>
                {[0, 1].map(index => <Bar i = {index} scale = {divideScale(scale, index * 2, 3)} w = {w} h = {h}/>)}
                <Circle scale = {divideScale(scale, 1, 3)} w = {w} h  = {h}/>
            </div>)
}

export default ColoringCircleBar
