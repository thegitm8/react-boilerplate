import * as React from 'react'

export const SampleSite = ({}) => {

    return (
        <div>
            Site 1
        </div>
    )
}

class SampleSiteContainer extends React.Component {

    render = () => {
        return (
            <SampleSite />
        )
    }
}

export default SampleSiteContainer
