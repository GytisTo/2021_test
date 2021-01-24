import React from 'react'
import { FaHeart , FaRegHeart } from 'react-icons/fa';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import style from './GalleryItem.module.scss'

const GalleryItem = ({ propsData }) => {
  const { fetchData, handleFavorite, favorite } = propsData

  return (
    <div>
        <div className="bg-white">
            <div className="container">
                <div className="w-100 position-relative d-flex pt-4 pb-3">
                    <div className="position-absolute">
                        <Breadcrumb />
                    </div>
                    <div className="w-100 d-flex">
                        <h3 className="font-weight-bold mx-auto">Browse page</h3>
                    </div>
                </div>
            </div>
        </div>
        <hr className="mt-0" />
        { fetchData && favorite && favorite.data && (
            <div className="container">
                <div className="row">
                    <div className="bg-white px-4 pt-3 border-bottom border-left border-right">
                        <div className="w-100 d-flex">
                            <button onClick={(e) => handleFavorite(e, fetchData.integerId, favorite.data[fetchData.integerId] ? "remove" : "add")} className="mr-0 ml-auto my-auto p-0 border-0 bg-white">
                                { favorite.data[fetchData.integerId] ?
                                    <FaHeart className={style.heart} />
                                    :<FaRegHeart className={style.heart} />
                                }
                            </button>
                        </div>
                        <img src={fetchData.image} alt=""/>
                    </div>
                    <div className="col">
                        <div className="bg-white px-3 pt-3 border-bottom border-left border-right">
                            <h4>{fetchData.title}</h4>
                            <div className="font-s-18 mb-1">{fetchData.price && fetchData.price.amounts && fetchData.price.amounts["USD"]}</div>
                            <div>Mesurments:</div>
                            <div className="pb-3">{fetchData.measurements && fetchData.measurements.display}</div>
                            <div className="row border-top color-golden">
                                <div className="col-6 text-center py-2 border-right pointer">PURCHASE</div>
                                <div className="col-6 text-center py-2 pointer">MAKE OFFER</div>
                            </div>
                        </div>
                        <div className="bg-white px-3 py-4 mt-3 border-bottom border-left border-right">
                            <p>{fetchData.description}</p>
                            <div>{`Creator: ${fetchData.creators}`}</div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default GalleryItem
