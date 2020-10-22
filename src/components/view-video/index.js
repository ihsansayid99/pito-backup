import React from 'react'
import { Link } from 'react-router-dom'

//import Component SVG and image
import { ReactComponent as PlayIcon } from 'assets/images/icon-play.svg'
import { ReactComponent as EyeIcon } from 'assets/images/eye-icon.svg'
import { ReactComponent as LikeIcon } from 'assets/images/thumbs-like-icon.svg'
import thumbnail from 'assets/images/thumbnail-one.jpg'

const MostviewsVideos = () => {
    return (
        <div className="px-2 xxl:px-8">
            <div className="mt-8 flex items-center">
                <p>1.</p>
                <div className="item relative w-auto pl-4">
                    <figure className="item-image">
                        <PlayIcon className="icon" />
                        <img src={thumbnail} alt="" />
                    </figure>
                </div>
                <Link to="/" className="link-wrapped hidden"></Link>
                <div className="item-meta px-2">
                    <h4 className="font-light text-xl text-gray-700 py-3 -mt-4">Title</h4>
                    <div className="flex flex-wrap items-center">
                        <EyeIcon />
                        <h4 className="ml-2 text-red-700 font-semibold">5.283 <span className="text-gray-900 text-sm font-medium">Views</span></h4>
                        <div className="flex ml-4">
                            <LikeIcon />
                            <h4 className="ml-2 text-red-700 font-semibold">283 <span className="text-gray-900 text-sm font-medium">Likes</span></h4>
                        </div>
                    </div>
                    <div className="flex flex-wrap text-xs text-gray-300 mt-2 items-center">
                        <h6>Category 1</h6><div className="rounded-full w-2 h-2 bg-gray-200 mx-2"></div>
                        <h6>Category 2</h6><div className="rounded-full w-2 h-2 bg-gray-200 mx-2"></div>
                        <h6>Category 3</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostviewsVideos;