import React from 'react'
import { AppWrapper } from '../../styles/AppStyles'

const App = ({ children }) => {
    return (
        <AppWrapper> 
            {children} 
        </AppWrapper>
    )

}

export default App