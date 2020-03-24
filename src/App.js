import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColoringCircleBar from './ColoringCircleBar'
import {useAnimatedScale, useDimension} from './hooks'

function App() {
  const {w, h, resize, disableResizing} = useDimension()
  const {scale, start} = useAnimatedScale(0.02 / 3, 20)
  return (
    <div className="App">
      <ColoringCircleBar w = {w} h = {h} scale = {scale}/>
    </div>
  );
}

export default App;
