import React from 'react'

const color = '#673AB7'

const commonStyle = (i, w, h) => {
    const position = 'absolute'
    const y = 0
    const sizeFactor = 12
    const hSizeFactor = 3
    const size = `${w / sizeFactor}px`
    const x = (w - size) * i
    const hSize = h / hSizeFactor
    return {top, x, hSize, y, size, position}
}

const strokedBarStyle = (i, w, h) => {
    const {position, x, hSize, y, size} = commonStyle(i, w, h)
    const left = `${x}px`
    const top = `${y}px`
    const width = `${size}px`
    const height = `${size}px`
    const border = `3px solid ${color}`
    return {position, border, top, left, width, height}
}

const fillBarStyle = (i, w, h, scale) => {
    const {position, x, hSize, y, size} = commonStyle(i, w, h)
    const updatingSize = size * scale
    const updatingHSize = hSize * scale
    const left = `${x + size / 2 - updatingSize}px`
    const top = `${y + hSize / 2 - updatingHSize}px`
    const width = `${updatingSize}px`
    const height = `${updatingHSize}px`
    const background = color
    return {position, width, height, top, left, background}
}

const Bar = ({i, w, h, scale}) => {
    return (<div>
              <div style = {strokeBarStyle(i, w, h)}>
              </div>
              <div style = {fillBarStyle(i, w, h)}>
              </div>
          </div>)
}

export default Bar 