import React from 'react'
import styles from './Banner.module.css'

const Banner = ({ texto }) => {
  return (
    <div className={`${styles.banner} bg-black text-center d-flex justify-content-center align-items-center`}>
        <h1 className='text-light display-5'>{texto}</h1>
    </div>
  )
}

export default Banner