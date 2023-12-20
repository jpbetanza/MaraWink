import { useEffect } from "react"
import blink from "../../blink-detection"


const Video = ({hide}) => {
    let videoElement  
    useEffect(() => {
        videoElement = document.getElementById('video1');
        let click = true
        var raf;
        const init = async () => {
          await blink.loadModel();
          await blink.setUpCamera(videoElement);
          await blink.setUpCamera(videoElement);
          const predict = async () => {
            let result = await blink.getBlinkPrediction();
            if (result) {
              console.log(result)
              if (result.longWink && click) {
                click = false;
                document.activeElement.click();
                setTimeout(() => click=true, 1000);
              }
            }
            raf = requestAnimationFrame(predict);
          };
          predict();
        };
      
        init();
    }, []);
      
    return(
        <>
          <video id="video1" height='300' width='300' className={` ${hide?'hidden':''}`}/>
        </>
    )
}

export default Video