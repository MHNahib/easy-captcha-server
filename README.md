# Easy Captcha

A captcha generation tool built with Node.js and Canvas.

### Project Description:

Easy Captcha showcases the ability of Node.js to create captcha images, providing a straightforward and effective method to implement captcha functionality in web applications. Utilizing the Canvas library, this tool generates customizable captcha images to help prevent automated abuse and ensure security.

## Installation

To install the project, follow these steps:

```bash
git clone https://github.com/MHNahib/easy-captcha-server.git
cd easy-captcha-server
npm install
```

## Run Locally

Clone the project:

```bash
git clone https://github.com/MHNahib/easy-captcha-server.git
```

Navigate to the project directory:

```bash
cd easy-captcha-server
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

## API Reference

### Index

By hitting the root endpoint (`/`), the API returns a PNG image containing a captcha.

```http
GET /
```

#### Example image:
![captcha built from easy-captcha](https://i.ibb.co/BLtdQ9c/localhost.png)

### Custom Text

You can provide your own text using a query parameter. 

```http
GET /?text=<YOUR_TEXT>
```

#### Example image:
For example, using **c5Uop**:

```http
GET /?text=c5Uop
```
![captcha built from easy-captcha](https://i.ibb.co/jzvVrB2/localhost.png)

**Note:** The text cannot be more than 5 characters long. If it exceeds 5 characters, an error response is returned:

```json
{
    "status": false,
    "data": {
        "captcha": "c5Uop55",
        "image": null
    },
    "message": "Text is too long!"
}
```

### Base64 Response

You can get a JSON response with the **text** and **image base64 string** using a query parameter:

```http
GET /?type=base64
```

#### Example image:
![captcha built from easy-captcha](https://i.ibb.co/KWccWdk/image.png)


## 🚀 Author

[@MHNahib](https://www.github.com/MHNahib)



## License

[MIT](https://choosealicense.com/licenses/mit/)
