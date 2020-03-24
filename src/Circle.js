import React from 'react'
import {offsetFactor, hSizeFactor} from './constants'

const circleStyle = (w, h, scale) => {
    const x = (w - w / offsetFactor) * scale
    const y = h / (hSizeFactor * 2)
    const sizeFactor = offsetFactor / 2
    const position = 'absolute'
    const left = `${w / (offsetFactor / 2) + x - w / sizeFactor}px`
    const top = `${y}px`
    const width = `${size}px`
    const height = `${size}px`
    const background = '#4CAF50'
    const borderRadius = '50%'
    return {position, top, left, width, height, borderRadius, background}
}

const Circle = ({scale, w, h}) => {
    return (<div style = {circleStyle(w, h, scale)}>
          </div>)
}

export default Circle 
