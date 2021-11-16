import {Container} from 'react-bootstrap'
import React, { useEffect } from 'react';
import Item from './Item.js'


const Items = ({refreshAll, functions, items}) => {

    const increment = (index) => {
        const copy = [...items]
        copy[index].counter++
        functions.setAllItems(copy)
    }

    const decrement = (index) => {
        const copy = [...items]
        copy[index].counter--
        functions.setAllItems(copy)
    }

    const remove = index => {
        const copy = [...items]
        copy.splice(index, 1)
        functions.setAllItems(copy)
    }

    const refreshCounters = () => {
        const copy = [...items]
        copy.forEach(item => {
            item.counter = 0
        })
        functions.setAllItems(copy)
        functions.setRefreshAll(false)
    }

    useEffect(() => {
        refreshAll && refreshCounters()
    }, [refreshAll])

    useEffect(() => {
        items.length === 0 && functions.setIsDisabled(false)
    }, [items])

    return (
        <>
            <Container className='mt-4'>
                {items.map((item, index) =>
                    <div key={item.id} className="my-1">
                        <Item
                            data={item}
                            index={index}
                            functions={{increment, decrement, remove}}
                        > </Item>
                    </div>
                )}
            </Container>
        </>
    )
}

export default Items