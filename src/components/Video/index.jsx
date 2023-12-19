import { useEffect } from "react"
import blink from "../../blink-detection"


const Video = () => {
    const videoElement = document.querySelector('#video');

    useEffect(() => {
        let click = true
        var raf;
        const init = async () => {
          await blink.loadModel();
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
        <></>
    )
}

export default Video