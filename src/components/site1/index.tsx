import * as React from 'react'

export const Site1 = ({}) => {

    return (
        <div>
            Site 1
        </div>
    )
}

class Site1Container extends React.Component {

    constructor(props: any) {
        super(props)
    }


    render() {
        return <Site1 />
    }
}

export default Site1Container
