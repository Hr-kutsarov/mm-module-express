# mm-module-express
Backend for an app that works just like the material management module in SAP.

# Schemas
## Product - contains properties regarding its state and physical properties as well as price, location?, status? and quantities.
## Enterprise - contains data about the user. The logged in user begins using the application by creating an Enterprise. Contains logic about its physical address, contacts and IBAN.
## Supplier - the user can create a list of suppliers. Those objects contain information about their address, contact info, IBAN and payment options.
## Warehouses/Factories are optional endpoints that can be mentioned when creating Orders and storing Products.
## Documents can be of type Invoice, Reclamation etc. and contain the data from physical documents printed and presented when items are delivered.
