import React, { useState, useEffect } from 'react'
import GalleryItem from './GalleryItem'

const GalleryItemContainer = () => {
  const [ fetchData, setFetchData ] = useState([])
  const [ favorite, setFavorite ] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/item/${window.location.pathname.split('/galleryItem/')[1]}`)
        .then(res => res.json()).then(
            data => {
                setFetchData(data)
            },
            err => {
                console.log(err.message)
            }
        )
    fetch(`http://localhost:3001/favorite`)
        .then(res => res.json()).then(
            data => {
                setFavorite(data)
            },
            err => {
                console.log(err.message)
            }
        )
    }, [])

  const handleFavorite = (e, id, status) => {
    e.preventDefault()
    fetch(`http://localhost:3001/favorite?integerId=${id}&status=${status}`, {
        method: "post"
    })
        .then(res => res.json()).then(
            data => {
                if(status !== "failed"){
                    setFavorite(data)
                }
            },
            err => {
                console.log(err.message)
            }
        )
  }

  return (
    <GalleryItem propsData={{fetchData, handleFavorite, favorite}} />
  )
}

export default GalleryItemContainer
