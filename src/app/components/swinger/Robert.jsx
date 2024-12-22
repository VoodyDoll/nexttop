
import React, { createContext, useState } from 'react'
import Pipa from './Pipa'
import Farrel from './Farrel'
import { Button} from 'react-bootstrap'

export let context = createContext(null)

const Robert = () => {
    let [gor, setgor] = useState()

    let lord = (data) => {

        setgor(data)

    }
    return (
        <div >
            <context.Provider value='logol'>
                <Button>mood</Button>
                Robert<Pipa lord={lord} />
                <input type="text" value={gor} />
                {/* {gor} */}

                <Farrel />
            </context.Provider>
               

        </div>
    )
}

export default Robert