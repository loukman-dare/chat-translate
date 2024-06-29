import { faCamera, faCancel, faClose, faImage, faMessage, faMicrophone, faPaperPlane, faSeedling, faSmile, faStopCircle, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React ,{useState,useRef,useCallback} from 'react'
import Webcam from "react-webcam";
import EmojiPicker from 'emoji-picker-react';
const FootChat = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState('');
    const mediaRecorderRef = useRef(null);  
    const audioChunksRef = useRef([]);
    const [image, setImage] = useState(null);
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState('');
    const [openCamera , setOPenCamera] = useState(false)
    const [openEmoji , SetOpenEmoji] = useState(false)
    const [inputStr, setInputStr] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

    const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = event => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioURL = URL.createObjectURL(audioBlob);
        setAudioURL(audioURL);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone', err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setOPenCamera(false)
  }, [webcamRef]);
  return (
    <div className='bg-secondary p-8 flex gap-2 items-center text-xl'>
        <div className='w-[95%] flex items-center gap-2  h-fit p-2 rounded-full bg-white'>
            <FontAwesomeIcon onClick={startRecording} icon={faMicrophone} className='text-text2 text-2xl '/>
            <input value={inputStr} onChange={(e) => setInputStr(e.target.value)} type='text' placeholder='Wrute Something..' className='outline-none bg-transparent w-full placeholder:text-text2 placeholder:text-sm'/>
            <div className='flex gap-1 items-center'>
                <div>
                  <input

                      accept="image/*"
                      className="hidden"
                      id="icon-button-file"
                      type="file"
                      onChange={handleImageUpload}
                    />
                  <label htmlFor="icon-button-file">
                    <FontAwesomeIcon icon={faImage}  className='text-text2 cursor-pointer' />  
                  </label>
                  
                </div>
                <FontAwesomeIcon  onClick={()=>setOPenCamera(true)} icon={faCamera} className='text-text2 cursor-pointer'/>
                {openCamera ? (
                  
                  <div className='absolute top-0 left-0'>
                    <Webcam height={600} width={600} ref={webcamRef} />
                    <div className='relative bottom-20 left-2/4 flex items-center gap-6'>
                        <FontAwesomeIcon icon={faCamera}  className=' text-5xl text-white cursor-pointer' onClick={capture}/>
                        <FontAwesomeIcon icon={faClose}  className=' text-5xl text-white cursor-pointer' onClick={()=>setOPenCamera(false)}/>

                    </div>
                  </div>
                ) : (
                  null
                )}
                {imgSrc ? (
                  <div className='absolute top-0 left-0'>
                  <img src={imgSrc} alt="webcam" />
 
                  <div className='relative bottom-20 left-2/4 flex items-center gap-6'>
                      <FontAwesomeIcon icon={faPaperPlane}  className=' text-5xl text-white cursor-pointer' onClick={()=>setImgSrc(false)}/>
                      <FontAwesomeIcon icon={faClose}  className=' text-5xl text-white cursor-pointer' onClick={()=>setImgSrc(false)}/>

                  </div>
                </div>
                  ):null}
               
                <FontAwesomeIcon icon={faSmile} onClick={()=>SetOpenEmoji(!openEmoji)} className='text-text2 cursor-pointer'/>
                {
                  openEmoji ? (
                    <div className='absolute bottom-32 left-1/4'>
                      <EmojiPicker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick}/>
                    </div>
                  ):null
                }

            </div>
        </div>
        <div>
            <FontAwesomeIcon icon={faPaperPlane} className='text-text2 text-xl cursor-pointer' />
        </div>
        {
          isRecording ? (<div className='absolute w-full h-full  bg-gray-400 opacity-90 left-0 top-0 flex justify-center items-center'>
            <div className='flex flex-col gap-3'>
              <div className='text-lg font-bold'>Click on Icon to stop recording...</div>
              <FontAwesomeIcon onClick={stopRecording} icon={faStopCircle} className='text-red-500 text-9xl '/>
            </div>

          </div>):
          <></>
        }
        
        {audioURL && (
          <div className='absolute w-full h-full  bg-gray-400 opacity-90 left-0 top-0 flex justify-center items-center'>
            <div className='flex items-center gap-4'>
              <audio src={audioURL} controls />
              <FontAwesomeIcon onClick={()=>setAudioURL("")} icon={faPaperPlane} className='text-black text-4xl cursor-pointer ' />
              <FontAwesomeIcon onClick={()=>setAudioURL("")} icon={faClose} className='text-black text-4xl cursor-pointer' />
            </div>
          </div>
        )}

        
    </div>
  )
}

export default FootChat