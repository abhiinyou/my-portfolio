import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {["home", "skills", "projects", "contact"].map(
                (item, index) => (

                    <a href={`#${item}`}
                        key={item + index} className='app__navigation-dot'
                        style={active === item ? { borderColor: '#313BAC' } : {}} />
                )
            )}
        </div>
    )
}

export default NavigationDots