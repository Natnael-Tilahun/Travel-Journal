import React from 'react'

function card(props) {
  return (
    <div className='card'>
      <img src={props.imageUrl} alt='location image' className='card--image'/>
      <div className='card--body'>
        <p className='card--country'>
          <img src="/mapIcon.png" alt='map icon' className='card--map--icon'/>
          {props.location} 
          <span ><a href={props.googleMapsUrl} className='card--google--map--link'>View on Google Maps</a></span>
        </p>
        <h2 className='card--location--name'>{props.title}</h2>
        <p className='card--date'>{props.startDate} - {props.endDate}</p>
        <p className='card--location--discription'>{props.description}</p>
      </div>
    </div>
  )
}

export default card