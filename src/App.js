import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import Countdown from 'react-countdown'


function App() {

  const [image, setImage] = useState(null)
  const [files, setFiles] = useState(null)
  const [countdownValue, setCountdownValue] = useState(60000)
  const [pauseButtonText, setPauseButtonText] = useState("Pause")
  const countdown = useRef(null)


  const updateImage = async () => {
    if (files && files.length>0) {
      const randomIdx = getRandomInt(0, files.length-1)
      nextImage(randomIdx)
      const filesCopy = [...files]
      filesCopy.splice(randomIdx, 1)
      setFiles(filesCopy)
    }
  }

  const nextImage = async (index) => {
    const randomFile = await files[index]
    const buffer = await randomFile.arrayBuffer()
    const blob = new Blob([buffer])
    const url = URL.createObjectURL(blob)
    setImage(url)
    countdown.current.getApi().start()
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const folderPickHandler = async (e) => {
    try {
      const directoryHandle = await window.showDirectoryPicker()
      const handles = await listAllFilesAndDirs(directoryHandle)
      await setFiles(handles.map(handle => handle.getFile()))
    } catch (e) {
      console.log(e);
    }
  }

  async function listAllFilesAndDirs(dirHandle) {
    const files = [];
    for await (let [name, handle] of dirHandle) {
      const { kind } = handle;
      if (handle.kind === 'directory') {
        files.push(handle);
        files.push(...await listAllFilesAndDirs(handle));
      } else {
        files.push(handle);
      }
    }
    return files;
  }

  const onChangeCountdownValue = (e) => {
    setCountdownValue(Number(e.target.value))
  }

  const startHandler = (e) => {
    updateImage()
  }

  const pauseHandler = (e) => {
    const api = countdown.current.getApi()
    if (api.isPaused()) {
      api.start()
    } 
    else {
      api.pause()
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {image === null ? <img src={logo} className="App-logo" alt="logo" /> : <img src={image} className="random-image" alt="logo" />}
        <button onClick={folderPickHandler}>Pick a folder</button>
        <button disabled={!files} onClick={startHandler}>Start</button>
        <button disabled={!files} onClick={pauseHandler}>Pause/Unpause</button>
        <Countdown
          ref={countdown}
          onComplete={updateImage}
          autoStart={false}
          controlled={false}
          date={Date.now() + countdownValue} />
        <div onChange={onChangeCountdownValue}>
          <input defaultChecked={countdownValue===3000} type="radio" value="3000" name="gender" /> 3s
          <input defaultChecked={countdownValue===15000}type="radio" value="15000" name="gender" /> 15s
          <input defaultChecked={countdownValue===30000}type="radio" value="30000" name="gender" /> 30s
          <input defaultChecked={countdownValue===60000}type="radio" value="60000" name="gender" /> 1m
          <input defaultChecked={countdownValue===120000} type="radio" value="120000" name="gender" /> 2m
          <input defaultChecked={countdownValue===300000} type="radio" value="300000" name="gender" /> 5m
          <input defaultChecked={countdownValue===600000} type="radio" value="600000" name="gender" /> 10m
        </div>
      </header>
    </div>
  );
}

export default App;
