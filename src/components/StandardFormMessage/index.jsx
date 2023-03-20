import { PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

const StandardFormMessage = () => {
    const [message, setMessage] = useState("")
    const [attachment, setAttachment] = useState("")
    const [preview, setPreview] = useState("")
  return (
    <div className='message-form-container '>
        {preview && (
            <div className="message-form-preview">
                <img 
                    src={preview} 
                    alt={preview} 
                    className="message-form-preview-image" 
                    onLoad={() => URL.revokeObjectURL(preview)}
                />
                <XMarkIcon 
                    className='message-form-icon-x'
                    onClick={() => {
                        setPreview("")
                        setAttachment("")
                    }}
                />
            </div>
        )}
        <div className="message-form">
            <div className="message-form-input-container">
                <input 
                    type="text" 
                    className="message-form-input" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Hello, Send a message.....'
                />
            </div>
            <div className="message-form-input-ico">
                <Dropzone 
                    acceptedFiles=".jpg, .jpeg, png"
                    multiple={false}
                    noClick={true}
                    onDrop={(acceptedFiles) => {
                        setAttachment(acceptedFiles[0])
                        setPreview(URL.createObjectURL(acceptedFiles[0]))
                    }}
                >
                    {({ getRootProps, getInputProps, open }) => (
                        <div 
                            className="" 
                            {...getRootProps()}
                        >
                            <input 
                                type="text" 
                                className="" {...getInputProps()}
                            />
                            <PaperClipIcon 
                                className='message-form-icon-clip'
                                onClick={open}
                            />
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    </div>
  )
}

export default StandardFormMessage