const {loadData, saveData} = require("../../data")

module.exports = (req, res) => {
    const { id } = req.params
    const { name, price, discount, description, category } = req.body
    const image = req.file

    const products = loadData()
    const productMap = products.map((p) => {

        if (p.id === +id) {
            const productUpdale = {
                ...p,
                name: name.trim(),
                price: +price,
                discount: +discount,
                description: description.trim(),
                category: category.trim(),

            }
                     if (image) { 

                const pathFile = path.join(__dirname, `../../../public/images/products/${p.image}`);
                const exisFile = fs.existsSync(pathFile)

                if (exisFile) {
                    fs.unlinkSync(pathFile)
                }
            }
            return productUpdale
        }
        return p
    })
    saveData(productMap) //? guarda la info
    res.redirect(`/productos/detalle/${id}`)
}