# TinyQR
Link shortener with QR codes

# Data model
```json
{
    "_id":integer,
    "surl":string,
    "content":{
        "type":string,
        "data":string
    },
    "active":boolean,
    "exires": timestamp,
    "created_at": timestamp,
    "updated_at": timestamp 
}
```