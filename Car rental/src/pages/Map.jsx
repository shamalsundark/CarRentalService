import React from 'react';

function Map() {
  return (
    <div>
      <div className='wrapper'>
        <div className='map'>
          <div style={{ width: '100%' }}>
            <iframe
              title="Google Map"
              width="600"
              height="500"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=400&amp;height=500&amp;hl=en&amp;q=kannur+(Car%20rental%20shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
        <div className='address'>
          <h3 style={{textAlign:"center"}}>CHAT BOX</h3>
        </div>
      </div>
    </div>
  );
}

export default Map;
