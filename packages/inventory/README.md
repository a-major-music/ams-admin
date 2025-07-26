# Inventory Management
This module controls inventory levels for AMS.

Note that through the use of Zapier and Make various operations here will affect Shopify and Xero.

Note that in addition to managing stock levels this system also maintains Moving Average Cost.

## Manual Xero Ledger Entries
Note that amounts in these examples are in pence, consistent with the rest of the module. The API will convert these to pounds and pence before sending to Xero.

### Sales Orders

```
{"description": "Order SP12345", "creditAccount": "SOH", "debitAccount": "310", "amount": 100}
```

Xero will apply a £100 credit to the SOH account and a corresponding debit to the COGS account (310 in this case)

### Refund and Return
```
{"description": "Refund of order SP12345", "creditAccount": "310", "debitAccount": "SOH", "amount": 100}
```

### Purchase Orders

```
{"description": "Receive PO1234", "creditAccount": "300", "debitAccount": "SOH", "amount": 100}
```

Code 300 in the above example is the Purchases account in Xero.

### Stock Adjustment (Up)
```
{"description": "Stock Adjustment (Up)", "creditAccount": "300", "debitAccount": "SOH", "amount": 100}
```

### Stock Adjustment (Down)
```
{"description": "Stock Adjustment (Down)", "creditAccount": "SOH", "debitAccount": "300", "amount": 100}
```
