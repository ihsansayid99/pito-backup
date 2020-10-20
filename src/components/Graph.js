import React from 'react'

//import components
import MostviewsVideos from './view-video/index'
import Lines from './graphic-chart/Lines'
import Bars from './graphic-chart/Bars'
import SelectForm from './forms/select'
import NumberLivestream from './numberLivestream'
import TopSearch from './topsearch'
import FavMerchant from './fav-merchant'




const Graph = () => {




    return (
        <>
            <section className="w-full md:w-2/5 xll:w-2/4 pb-10 border-r-2 border-gray-500">
                <Lines />
                <Bars />
            </section>
            <section className="w-full md:w-2/5 xll:w-2/4 py-10 border-r-2 border-gray-500">
                <SelectForm name="most-view">
                    <option value="" className="text-black">Most Viewed Livestream</option>
                    <option value="" className="text-black">Most Favourite</option>
                    <option value="" className="text-black">Most Shared</option>
                </SelectForm>
                <MostviewsVideos />
                <MostviewsVideos />
                <MostviewsVideos />
                <MostviewsVideos />
                <MostviewsVideos />
                <MostviewsVideos />
            </section>
            <section className="w-1/4 xxl:w-4/12 py-10">
                <NumberLivestream />
                <div className="flex-col py-4 border-b-2 border-gray-500">
                    <SelectForm name="total-search">
                        <option value="" className="text-black">Top Search Keywords</option>
                        <option value="" className="text-black">Top Search Categories</option>
                    </SelectForm>
                    <TopSearch />
                </div>
                <div className="flex-col px-2 py-4 xxl:px-8 border-b-2 border-gray-500">
                    <h5 className="text-red-600">Most Favourite Merchant</h5>
                    <FavMerchant />
                </div>
            </section>
        </>
    )
}

export default Graph;
