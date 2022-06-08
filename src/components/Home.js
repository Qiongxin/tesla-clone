import React from 'react'
import Section from './Section'

function Home() {
  return (
    <div>
        <Section 
            title = {'Model S'}
            description = {'Order Online for Touchless Delivery'}
            leftText = {'custom order'}
            rightText = {'existing inventory'}
            bgImg = {'model-s.jpg'}
        />
        <Section 
            title = {'Model Y'}
            description = {'Order Online for Touchless Delivery'}
            leftText = {'custom order'}
            rightText = {'existing inventory'}
            bgImg = {'model-y.jpg'}
        />
        <Section
            title = {'Model X'}
            description = {'Order Online for Touchless Delivery'}
            leftText = {'custom order'}
            rightText = {'existing inventory'}
            bgImg = {'model-x.jpg'}
        />
        <Section 
            title = {'Model 3'}
            description = {'Order Online for Touchless Delivery'}
            leftText = {'custom order'}
            rightText = {'existing inventory'}
            bgImg = {'model-3.jpg'}
        />
        <Section 
            title = {'Solar for New Roofs'}
            description = {'Solar Roof Costs Less Than a New Roof Plus Solar Panels'}
            leftText = {'learn more'}
            bgImg = {'solar-roof.jpg'}
        />
        <Section 
            title = {'Accessories'}
            description = {''}
            leftText = {'shop now'}
            bgImg = {'accessories.jpg'}
        />
    </div>
  )
}

export default Home