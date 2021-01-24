import React, { useState, useEffect } from 'react'
import Index from './Index'

const IndexContainer = () => {
  const [ fetchData, setFetchData ] = useState({items: [], totalItems: 58})
  const [ limit, setLimit ] = useState(9)
  const [ favorite, setFavorite ] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/browse?limit=${limit}`)
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
  }, [limit])

  const handleLoadMore = (e) => {
    e.preventDefault()
    if(fetchData.totalItems > limit) {
        setLimit(limit + 9)
    }
  }

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
    <div className="container">
        <h3 className="font-weight-bold text-center mt-3 mb-3">Browse page</h3>
        { fetchData.items && favorite && favorite.data &&
            <Index propsData={{fetchData, handleLoadMore, handleFavorite, limit, favorite}} />
        }
    </div>
  )
}

export default IndexContainer
