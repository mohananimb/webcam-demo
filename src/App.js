import React from 'react'
import Webcam from 'react-webcam'
const videoConstraints = {
  width: "100%",
  height: "100%",
  facingMode: { exact: 'environment' }
}

const WebcamCapture = () => {
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    console.log(imageSrc)
  }, [webcamRef])
  return (
    <>
      <Webcam
        audio={false}
        height={"100%"}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        width={"100%"}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  )
}

export default WebcamCapture
