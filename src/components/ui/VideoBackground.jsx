import React from 'react'

 const VideoBackground = ({ src }) => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">

            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                <source src={src} type="video/mp4" />
            </video>

        </div>
    )
}
export default VideoBackground;