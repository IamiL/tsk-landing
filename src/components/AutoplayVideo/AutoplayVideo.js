import React, {useEffect, useRef} from 'react';

const AutoplayVideo = ({
                           src,
                           className = '',
                           id = '',
                           fallbackSrc = null,
                           detectSafari = false,
                           ...props
                       }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePause = () => {
            console.log('Видео поставлено на паузу, попытка перезапуска...');
            // Небольшая задержка перед перезапуском
            setTimeout(() => {
                if (videoRef.current && videoRef.current.paused) {
                    videoRef.current.play().catch(error => {
                        console.error("Ошибка перезапуска видео:", error);
                    });
                }
            }, 100);
        };

        const handleEnded = () => {
            console.log('Видео завершилось, перезапуск...');
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(error => {
                    console.error("Ошибка перезапуска видео:", error);
                });
            }
        };

        const handleLoadedData = () => {
            console.log('Видео загружено, начинаем воспроизведение...');
            if (videoRef.current) {
                videoRef.current.play().catch(error => {
                    console.error("Ошибка начального воспроизведения видео:", error);
                });
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Страница скрыта
                console.log('Страница скрыта');
            } else {
                // Страница снова видна, убеждаемся что видео играет
                console.log('Страница снова видна, проверяем видео...');
                setTimeout(() => {
                    if (videoRef.current && videoRef.current.paused) {
                        videoRef.current.play().catch(error => {
                            console.error("Ошибка перезапуска после возвращения на страницу:", error);
                        });
                    }
                }, 200);
            }
        };

        // Добавляем обработчики событий
        video.addEventListener('pause', handlePause);
        video.addEventListener('ended', handleEnded);
        video.addEventListener('loadeddata', handleLoadedData);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Попытка первоначального запуска
        const startPlayback = () => {
            if (video.readyState >= 3) { // HAVE_FUTURE_DATA
                video.play().catch(error => {
                    console.error("Ошибка автозапуска видео:", error);
                });
            } else {
                // Если видео еще не загружено, ждем события loadeddata
                video.addEventListener('loadeddata', handleLoadedData, {once: true});
            }
        };

        // Запускаем воспроизведение через небольшую задержку
        setTimeout(startPlayback, 100);

        return () => {
            // Очистка обработчиков при размонтировании
            if (video) {
                video.removeEventListener('pause', handlePause);
                video.removeEventListener('ended', handleEnded);
                video.removeEventListener('loadeddata', handleLoadedData);
            }
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // Определяем Safari если включена проверка
    const isSafari = detectSafari ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : false;

    return (
        <video
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline
            className={className}
            id={id}
            {...props}
        >
            {isSafari &&
                <source
                    src={"/tsk.mov"}
                    type="video/mp4"
                />
            }
            {/* Основной источник видео */}
            {!isSafari && src && <source src={src} type="video/webm"/>}

            {/* Fallback для Safari или других браузеров */}
            {!isSafari && fallbackSrc && (
                <source src={fallbackSrc} type="video/mp4"/>
            )}

            {/* Сообщение для браузеров без поддержки видео */}
            <p>Ваш браузер не поддерживает воспроизведение видео.</p>
        </video>
    );
};

export default AutoplayVideo;