import axios from 'axios';

export const getSuppliers = async (setData) => {
    await axios.get('http://localhost:4000/suppliers')
    .then(res => {
        setData(res.data)
    })
    .catch((err) => {
        console.log(err);
    })
}

export const handleFakeData = async (setData) => {
    await axios.get('http://localhost:4000/fakesuppliers')
    .then(res => {
        console.log(res);
        getSuppliers(setData)
    })
    .catch((err) => {
        console.log(err);
    })

}

export const getSupplierById = async (setData, supplierId) => {
    await axios.get(`http://localhost:4000/suppliers/${supplierId}`)
    .then(res => {
        console.log(res);
        setData(setData)
    })
    .catch((err) => {
        console.log(err);
    })

}