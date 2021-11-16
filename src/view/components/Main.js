import Cart from './Cart.js';
import Actions from './Actions.js';
import Items from './Items.js';
import React, {useState, useEffect} from 'react'
import {items} from '../../assets/data/items.json'

const Main = () => {

    const [refreshAll, setRefreshAll] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [allItems, setAllItems] = useState([...items])
    const [counter, setCounter] = useState(0)


    const restoreItems = () => {
        setAllItems(items)
        setIsDisabled(true)
    }

    useEffect(() => {
        checkActiveItems()
    }, [allItems])

    const checkActiveItems = () => {
        setCounter(allItems.filter(item => item.counter > 0).length)
    }

    return <>
        <Cart counter={counter}/>
        <Actions functions={{setRefreshAll, setIsDisabled, restoreItems}} isDisabled={isDisabled}/>
        <Items items={allItems} refreshAll={refreshAll} functions={{setAllItems, setRefreshAll, setIsDisabled}}/>
    </>
}


export default Main;