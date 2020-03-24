import {useState} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [dir, setDir] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        start() {
            var currScale = scale
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scale * dir
                    if (Math.abs(currScale - scale) > 1) {
                        setScale(scale + dir)
                        setDir(1 - 2 * dir)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        },
        scale
    }
}