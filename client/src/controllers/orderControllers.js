import axios from 'axios';
export const getOrders = async (setData) => {
    await axios.get('http://localhost:4000/orders')
    .then(res => {
        setData(res.data)
    })
    .catch((err) => {
        console.log(err);
    })
}

export const handleFakeData = async (setData) => {
    await axios.get('http://localhost:4000/fakeorders')
    .then(res => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    getOrders(setData)
}

export const getOrderById = async (setData, orderId) => {
    await axios.get(`http://localhost:4000/orders/${orderId}`)
    .then(res => {
        console.log(res);
        setData(res.data)
    })
    .catch((err) => {
        console.log(err);
    })

}