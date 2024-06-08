import React from 'react'

const Profile = () => {
  return (
    <section className='size flex gap-[4rem] relative'>
        {/* user activities */}
        <div className='mt-[9rem] flex-[2]'>
            <div className='flex items-end gap-4'>
                <h2 className='text-3xl sm:text-5xl font-bold capitalize'>Kayla Kenney</h2>
                <p className='text-gray-500 text-xs sm:text-sm'>Followers(2)</p>
                <p className='text-gray-500 text-xs sm:text-sm'>Following(2)</p>
            </div>
        </div>
    </section>
  )
}

export default Profile