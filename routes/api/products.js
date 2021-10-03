const faker = require("faker");
const {StatusCodes} = require("http-status-codes");

app.get('/products', (req, res, next) => {
    const product = {
        id: faker.datatype.number(),
        name: faker.name.findName(),
        image: faker.image.imageUrl(),
        address: faker.address.streetAddress(),
        employer: faker.company.companyName()
    }
    res.send(product);
    res.status(StatusCodes.OK);
})
app.post(`/products`, (req, res) => {
    const newProduct = req.body;

    res.send(newProduct);
    console.log(newProduct);
    res.status(StatusCodes.OK);
})