import React, { useState, useRef, useCallback } from 'react';
import ImageViewer from './ImageViewer';
import './ZoomableImage.css';

const ZoomableImage = ({ 
    src, 
    fullSizeSrc, 
    alt, 
    className = '', 
    preloadOnHover = true,
    ...props 
}) => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isPreloaded, setIsPreloaded] = useState(false);
    const preloadRef = useRef(null);

    const fullSizeImage = fullSizeSrc || src;

    const preloadImage = useCallback(() => {
        if (!preloadOnHover || isPreloaded) return;

        if (!preloadRef.current) {
            preloadRef.current = new Image();
            preloadRef.current.onload = () => setIsPreloaded(true);
            preloadRef.current.onerror = () => setIsPreloaded(false);
        }
        
        preloadRef.current.src = fullSizeImage;
    }, [fullSizeImage, preloadOnHover, isPreloaded]);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
        preloadImage();
    }, [preloadImage]);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);

    const handleClick = useCallback(() => {
        setIsViewerOpen(true);
    }, []);

    const handleCloseViewer = useCallback(() => {
        setIsViewerOpen(false);
    }, []);

    return (
        <>
            <div 
                className={`zoomable-image-container ${isHovered ? 'hovered' : ''} ${className}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleClick();
                    }
                }}
                aria-label={`Открыть изображение в полном размере: ${alt}`}
            >
                <img 
                    src={src} 
                    alt={alt} 
                    className="zoomable-image"
                    draggable={false}
                    {...props}
                />
                <div className="zoomable-image-overlay">
                    <div className="zoom-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                            <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                            <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
            </div>
            
            <ImageViewer
                isOpen={isViewerOpen}
                imageSrc={fullSizeImage}
                imageAlt={alt}
                onClose={handleCloseViewer}
            />
        </>
    );
};

export default ZoomableImage;