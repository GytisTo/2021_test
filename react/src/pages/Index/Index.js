import React from 'react'
import { FaHeart , FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './Index.module.scss'

const Index = ({ propsData }) => {
  const { fetchData, handleLoadMore, handleFavorite, limit, favorite } = propsData

  return (
    <div className="mb-5">
        <div className="row">
            {
                fetchData.items.map( (item, key) => (
                    <div key={key} id={item.integerId} className="col-12 col-md-6 col-lg-4 mb-4 row mx-0">
                        <div className={` mx-auto bg-white px-4 pt-3`}>
                            <Link to={`/galleryItem/${item.integerId}`}>
                                <img src={item.image} alt=""/>
                            </Link>
                            <div className="py-3 d-flex" >
                                <div className="font-s-18 my-auto">{item.price && item.price.amounts && item.price.amounts['USD'] ? item.price.amounts['USD'] : "Price Upon Request"}</div>
                                <button onClick={(e) => handleFavorite(e, item.integerId, favorite.data[item.integerId] ? "remove" : "add")} className="mr-0 ml-auto my-auto p-0 border-0 bg-white">
                                    { favorite.data[item.integerId] ?
                                        <FaHeart className={style.heart} />
                                        :<FaRegHeart className={style.heart} />
                                    }
                                </button>
                                
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
        { fetchData.totalItems > limit && (
            <div className="d-flex">
                <button onClick={handleLoadMore} className={`${style.button} mt-4 mx-auto py-3 font-weight-bold`}>LOAD MORE</button>
            </div>
        )}
    </div>
  )
}

export default Index
