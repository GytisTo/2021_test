import React from 'react'
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './Breadcrumb.module.scss'

const Breadcrumb = () => {
 return (
    <div className="d-flex mt-2">
        <FaAngleLeft className={style.icon} />
        <Link className={style.link} to="/" >Home</Link>
    </div>
  )
}

export default Breadcrumb
