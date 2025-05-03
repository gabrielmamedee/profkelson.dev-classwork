import React from 'react'
import LogoReact from '../assets/react.svg'

const TrabalhandoComImagensCondicionais = (props) => {
    const renderImgDiretorio = (diretorio) => {
        if (diretorio === "PUBLIC") {
            return <img src="/vite.svg" alt="" />
        } else if (diretorio === "ASSETS") {
            return <img src={LogoReact} alt="" />
        }
    }
  return (
    <div>
        {renderImgDiretorio(props.diretorio)}
    </div>
  )
}

export default TrabalhandoComImagensCondicionais