import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as PlayIcon } from 'assets/images/icon-play.svg'
import { ReactComponent as FbIcon } from 'assets/images/fb-icon.svg'
import { ReactComponent as IgIcon } from 'assets/images/ig-icon.svg'
import { ReactComponent as TtIcon } from 'assets/images/tiktok-icon.svg'
import { ReactComponent as EyeIconWhite } from 'assets/images/eye-icon-white.svg'
import { ReactComponent as ShareIcon } from 'assets/images/share-icon.svg'
import thumbnail from 'assets/images/thumbnail-one.jpg'
import iconLive from 'assets/images/live-icon.png'

const FullWidth = () => {
    const videos = [
        {
            id: 1,
            thumbnail: thumbnail,
            live: true,
            views: 260.000,
            shared: 989,
            status: "Live Now",
            title: "Tomy W"
        },
        {
            id: 1,
            thumbnail: thumbnail,
            live: false,
            views: 550.000,
            shared: 989,
            date: 12,
            status: "-",
            title: "Chapters 2"
        }
    ]
    return (
        <>
            {
                videos.map((item, index) => {
                    return (
                        <div className="mt-10 flex" key={index}>
                            <div className="item relative w-auto">
                                <figure className="item-image-live">
                                    {
                                        item?.live ? (
                                            <>
                                                <img className="live-icon px-2 py-2" src={iconLive} alt="live icon" />
                                                <div className="live-viewers bg-blue-900 opacity-50 text-sm rounded-lg mt-2" style={{ width: 66, height: 26 }}>
                                                </div>
                                                <div className="live-viewers-wrap flex px-2 items-center py-1 text-sm font-light text-white rounded-lg mt-2" style={{ width: 66, height: 26 }}>
                                                    <EyeIconWhite className="mx-auto" />
                                                    <h6 className="mx-auto opacity-100">5.2K</h6>
                                                </div>
                                            </>
                                        ) : null
                                    }
                                    <PlayIcon className="icon" />
                                    <img src={item.thumbnail} alt="" width="300" />
                                </figure>
                            </div>
                            <Link to="/" className="link-wrapped hidden"></Link>
                            <div className="flex-col px-4 xxl:px-8">
                                <FbIcon className="mb-4" />
                                <IgIcon className="mb-4" />
                                <TtIcon />
                            </div>
                            <div className="flex-col px-2 xxl:px-8">
                                <div className="mb-3 leading-tight text-center">
                                    <h4 className="font-bold text-xl text-red-600">{item.views}</h4>
                                    <span className="text-sm text-gray-300 font-light">Views</span>
                                </div>
                                <div className="mb-3 leading-tight text-center">
                                    <h4 className="font-bold text-xl text-red-600">{item.shared}</h4>
                                    <span className="text-sm text-gray-300 font-light">Shared</span>
                                </div>
                                <div className="mb-3 leading-tight text-center">
                                    {
                                        item?.live ? (
                                            <h4 className="font-bold text-xl text-red-600">Live Now</h4>
                                        ) : (
                                                <>
                                                    <h4 className="font-bold text-xl text-red-600">{item.date}</h4>
                                                    <span className="text-sm text-gray-300 font-light">Day(s) ago</span>
                                                </>
                                            )
                                    }
                                </div>
                            </div>
                            <div className="flex-col px-4 xxl:px-8 leading-tight">
                                <h4 className="font-bold text-xl text-red-600">Tony W.</h4>
                                <div className="mt-4">
                                    <h5 className="text-gray-700 font-semibold mb-2">Title Lorem Ipsum...</h5>
                                    <p className="text-justify" style={{ width: 420 }}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                                            </p>
                                    <div className="flex text-xs text-gray-700 mt-2 items-center">
                                        <h6>Category 1</h6><div className="rounded-full w-2 h-2 bg-gray-700 mx-2"></div>
                                        <h6>Category 2</h6><div className="rounded-full w-2 h-2 bg-gray-700 mx-2"></div>
                                        <h6>Category 3</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col mx-auto px-4 leading-tight xl:w-3/12 xxl:w-1/4">
                                <button className="bg-red-600 rounded-full w-full px-6 py-3 mb-4 font-medium text-white flex items-center justify-center focus:outline-none">Share <ShareIcon className="mx-2" /></button>
                                <button className="bg-red-600 rounded-full w-full px-6 py-3 mb-4 font-medium text-white focus:outline-none">Edit</button>
                                <button className="border border-red-600 rounded-full w-full px-6 py-3 font-medium text-red-600 focus:outline-none">Disable</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FullWidth;