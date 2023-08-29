import React from 'react';
import s from "./Preloader.module.css"

type PreloaderType = {
    isFetching: boolean
}

const Preloader = ({isFetching}: PreloaderType) => {
    return (
        <>{ isFetching ? <div className={s.customLoader}/> : null }</>
    );
};

export default Preloader;