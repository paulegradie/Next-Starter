/* eslint-disable @next/next/no-img-element */
import { useState, useCallback, useEffect } from 'react';

import classnames from 'classnames';
import { Backdrop, Portal, Theme } from '@mui/material';
import cls from './ZoomInImage.module.scss';
export interface IZoomImage {
    alt: string;
    imgSrc: string;
    style?: React.CSSProperties;
    className?: string;
}

export const ZoomImage = ({ alt, imgSrc, style, className = '' }: IZoomImage) => {
    const [zoomedIn, setZoomedIn] = useState(false);
    const [scrollbarSize, setScrollbarSize] = useState(0);

    const zoomIn = useCallback(() => {
        setZoomedIn(true);
    }, [setZoomedIn]);

    const zoomOut = useCallback(() => {
        setZoomedIn(false);
    }, [setZoomedIn]);

    useEffect(() => {
        var header = document.querySelector('header');
        if (header == null) return;

        if (zoomedIn) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarSize}px`;
            header.style.paddingRight = `${scrollbarSize}px`;
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
            header.style.paddingRight = '0px';
        }
    }, [zoomedIn, scrollbarSize]);

    return (
        <>
            {zoomedIn && (
                <Portal>
                    <Backdrop open={zoomedIn} className={cls.backdrop} onClick={zoomOut}></Backdrop>
                    <div onClick={zoomOut} className={cls.portalImgWrapper}>
                        <div className={cls.portalImgInnerWrapper}>
                            <img alt={alt} src={imgSrc} className={cls.portalImg} style={{}}></img>
                        </div>
                    </div>
                </Portal>
            )}
            <img
                alt={alt}
                src={imgSrc}
                onClick={zoomIn}
                className={classnames(cls.zoomedOutImage, className)}
                style={style}
            ></img>
        </>
    );
};
