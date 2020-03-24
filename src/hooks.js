import {useState} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [dir, setDir] = useState(1)
    const [animated, setAnimated] = useState(false)
    return {
        start() {
            var currScale = scale
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap * dir
                    setScale(currScale)
                    if (Math.abs(currScale - scale) > 1) {
                        setScale(scale + dir)
                        setDir(dir * -1)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        },
        scale
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    return {
        resize() {
            window.onresize = () => {
                setW(window.innerWidth)
                setH(window.innerHeight)
            }
        },
        disableResizing() {
            window.onresize = () => {

            }
        },
        w,
        h
    }
}
