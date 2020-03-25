import React from 'react'
import { query } from './graphql'
import { graphql, usePoll } from '@gqless/react'
import FullContainer from './components/FullContainer'
import StatContainer from './components/StatContainer'
import StatLabel from './components/StatLabel'
import StatValue from './components/StatValue'

const getAttribute = stats => attribute => stats.map(country => country[attribute])[0]

const Dashboard = () => {
    const phStats = query.countryStats({filter: {country: "Philippines"}})

    // Poll API every minute
    usePoll(phStats, 60000)

    const getStatAttribute = getAttribute(phStats)
    const critical = getStatAttribute('critical')
    const recovered = getStatAttribute('recovered')
    const cases = getStatAttribute('cases')
    const todayCases = getStatAttribute('todayCases')
    const deaths = getStatAttribute('deaths')
    const todayDeaths = getStatAttribute('todayDeaths')



    return <FullContainer>
        <StatContainer>
            <StatLabel>CRITICAL</StatLabel>
            <StatValue>{critical}</StatValue>
        </StatContainer>
        <StatContainer>
            <StatLabel>TOTAL CASES</StatLabel>
            <StatValue>{cases}</StatValue>
        </StatContainer>
        <StatContainer>
            <StatLabel>TOTAL DEATHS</StatLabel>
            <StatValue>{deaths}</StatValue>
        </StatContainer>
        <StatContainer>
            <StatLabel>RECOVERED</StatLabel>
            <StatValue>{recovered}</StatValue>
        </StatContainer>
        <StatContainer>
            <StatLabel>CASES TODAY</StatLabel>
            <StatValue>{todayCases}</StatValue>
        </StatContainer>
        <StatContainer>
            <StatLabel>DEATHS TODAY</StatLabel>
            <StatValue>{todayDeaths}</StatValue>
        </StatContainer>
    </FullContainer>
}

export default graphql(Dashboard)