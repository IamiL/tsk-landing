import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './ImageViewer.css';

const ImageViewer = ({ isOpen, imageSrc, imageAlt, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    const handleBackdropClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }, [onClose]);

    const handleImageLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    const handleImageError = useCallback(() => {
        setIsLoading(false);
        setHasError(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
            
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = 'unset';
            };
        }
    }, [isOpen, handleKeyDown]);

    useEffect(() => {
        if (isOpen && imageSrc) {
            setIsLoading(true);
            setHasError(false);
        }
    }, [isOpen, imageSrc]);

    if (!isOpen) return null;

    const modalContent = (
        <div className="image-viewer-overlay" onClick={handleBackdropClick}>
            <div className="image-viewer-container">
                <button 
                    className="image-viewer-close" 
                    onClick={onClose}
                    aria-label="Закрыть"
                >
                    ×
                </button>
                
                {isLoading && (
                    <div className="image-viewer-loading">
                        <div className="loading-spinner"></div>
                    </div>
                )}
                
                {hasError ? (
                    <div className="image-viewer-error">
                        Ошибка загрузки изображения
                    </div>
                ) : (
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="image-viewer-image"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        style={{ display: isLoading ? 'none' : 'block' }}
                    />
                )}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default ImageViewer;