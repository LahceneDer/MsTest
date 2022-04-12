import axios from 'axios';
export const getOrders = (setData,setOrdersCount) => {
    if (setOrdersCount === undefined) {
        axios.get('http://localhost:4000/orders')
        .then(res => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }
    else {
        axios.get('http://localhost:4000/orders')
        .then(res => {
            setData(res.data)
            setOrdersCount(res.data.length)
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export const handleFakeData = (setData) => {
 axios.get('http://localhost:4000/fakeorders')
    .then(res => {
        setData(res.data);
        getOrders(setData)
    })
    .catch((err) => {
        console.log(err);
    })
}

export const getOrderById = (setData, orderId) => {
 axios.get(`http://localhost:4000/orders/${orderId}`)
    .then(res => {
        console.log(res);
        setData(res.data)
    })
    .catch((err) => {
        console.log(err);
    })

}