import React from 'react'

const RenderTHead = ({ itemHead }) => {
    return (
        <>
            {
                itemHead && itemHead.map((item, index) => {
                    return (
                        <th class="text-center py-3 px-4 font-semibold text-sm">{item.title}</th>
                    )
                })
            }
        </>
    )
}

export default RenderTHead;
