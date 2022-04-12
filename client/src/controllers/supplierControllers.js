import axios from 'axios';

export const getSuppliers = (setData, setCount) => {

    if (setCount === undefined){
        axios.get('http://localhost:4000/suppliers')
        .then(res => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }
    else {
        axios.get('http://localhost:4000/suppliers')
        .then(res => {
            setCount(res.data.length)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })    
    }
}

export const handleFakeData =  (setData) => {
     axios.get('http://localhost:4000/fakesuppliers')
    .then(res => {
        console.log(res);
        setData(res.data)
        getSuppliers(setData)
    })
    .catch((err) => {
        console.log(err);
    })

}

export const getSupplierById = (setData, supplierId) => {
 axios.get(`http://localhost:4000/suppliers/${supplierId}`)
    .then(res => {
        console.log(res);
        setData(res.data)
    })
    .catch((err) => {
        console.log(err);
    })

}