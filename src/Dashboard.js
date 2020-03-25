import React from 'react'
import { query } from './graphql'
import { graphql } from '@gqless/react'

const getAttribute = stats => attribute => stats.map(country => country[attribute])[0]

const Dashboard = () => {
    const phStats = query.countryStats({filter: {country: "Philippines"}})
    const getStatAttribute = getAttribute(phStats)
    const critical = getStatAttribute('critical')
    const recovered = getStatAttribute('recovered')
    const cases = getStatAttribute('cases')
    const todayCases = getStatAttribute('todayCases')
    const deaths = getStatAttribute('deaths')
    const todayDeaths = getStatAttribute('todayDeaths')

    return <div>
        <div>
            <h3>Critical</h3>
            <p>{critical}</p>
        </div>
        <div>
            <h3>Total Cases</h3>
            <p>{cases}</p>
        </div>
        <div>
            <h3>Total Deaths</h3>
            <p>{deaths}</p>
        </div>
        <div>
            <h3>Recovered</h3>
            <p>{recovered}</p>
        </div>
        <div>
            <h3>Cases Today</h3>
            <p>{todayCases}</p>
        </div>
        <div>
            <h3>Deaths Today</h3>
            <p>{todayDeaths}</p>
        </div>
    </div>
}

export default graphql(Dashboard)