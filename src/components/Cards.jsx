import React from 'react'
import Card from './Card'
function Cards() {
    return (
        <div className='w-full' data-scroll-section>
            <div className='max-w-screen-xl mx-auto py-20 px-4 flex gap-5'>
                
                    <Card width="w-[30%]" start={false} para={true} />
                    <Card width="w-[70%]" start={true} para={false} hover={"true"}/>
               
            </div>

        </div>
    )
}
export default Cards