import React from 'react'
import Business from '../Business/Business'
// import './BusinessList.sass'

const BusinessList = (props) => {
  return (
    <div className='businessList'>
      {
        props.businesses.map(business => {
          return <Business key={business.id} business={business} />
        })
      }
    </div>
  )
}

export default BusinessList
