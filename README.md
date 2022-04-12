# MsTest
1- Client side:
    Built with React js , I use Material ui, Material table, axios, React Hooks, 

    * Suppliers page "/suppliers" contains a button & suppliers table
        - "add fake data" button for create the data 
        - for display supplier details => double click on row will display a modal with supplier details
        
    * Orders page "/orders" contains a button & orders table
        - "add fake data" button for create the data 
        - for display order details => double click on row will display a modal with order details

2- Server side:
    Built with Node js and Express js, for database I used MySQL by sequelize for creating the connection to db and models
    * Routes:
        /suppliers => request all suppliers
        /suppliers/:supplierId => get a single supplier
        /orders => request all orders
        /orders/:orderId => get a single order
    
    * Tools:
        - mysql + sequelize for database
        - Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any       origins
        - swagger ui to visualize and interact with the API resources 

        
