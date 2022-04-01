const fs = require('fs')

const baseProd = JSON.parse(fs.readFileSync('./products.json'))

class Contenedor {
  constructor (prods) {
    this.productsArray = prods
  }

  async save (prodTitle, prodPrice, prodImg) {
    const newProduct = {
      title: prodTitle,
      price: prodPrice,
      thumbnail: prodImg,
      id: this.productsArray.length + 1
    }
    const newArrayProd = this.productsArray
    newArrayProd.push(newProduct)
    this.write(newArrayProd)
  }

  getById (idNumber) {
    const product = this.productsArray.find(
      (product) => product.id === idNumber
    )
    if (product) {
      console.log(product)
    } else {
      console.log('The product does not exist')
    }
  }

  async getAll () {
    const data = await fs.promises.readFile('products.json')
    const products = JSON.parse(data)
    const AllProducts = products.map(
      (product) =>
        `id: ${product.id} - Title: ${product.title} - Price: ${product.price} - Image: ${product.thumbnail}`
    )
    console.log(AllProducts)
  }

  async deleteById (idNumber) {
    const data = await fs.promises.readFile('products.json')
    const products = JSON.parse(data)
    const index = products.findIndex((prod) => {
      if (prod.id === idNumber) return true
      return false
    })
    if (index === -1) {
      console.log('The product does not exist')
    } else {
      products.splice(index, 1)
      this.write(products)
      console.log(`The product with the id: ${idNumber} has been removed`)
    }
  }

  async deleteAll () {
    this.productsArray = []
    this.write(this.productsArray)
    console.log('All items have been deleted ')
  }

  async write (params) {
    const newProducts = JSON.stringify(params, null, 2)
    await fs.promises.writeFile('products.json', newProducts)
  }

  async createProdTxt () {
    try {
      await fs.promises.writeFile(
        'products.txt',
        JSON.stringify(this.productsArray, null, 2)
      )
      console.log('All products were exported!!')
    } catch (error) {
      console.log(error)
    }
  }
}

const productos = new Contenedor(baseProd)
productos.save('Apple Watch Series 7', 70000, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s7-digitalmat-gallery-2-202203_GEO_ES?wid=364&hei=333&fmt=png-alpha&.v=1646033515724')
productos.save('iPhone 12', 15000, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone12-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1635178709000')
productos.save('iMac de 24 pulgadas', 230000, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac24-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1635186198000')
productos.save('Apple TV 4K', 80000, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202104?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1619139498000')
productos.save('iPhone 12', 15000, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone12-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1635178709000')

// productos.deleteAll()
// productos.deleteById( 1 )
// productos.getById(2)
// productos.deleteAll()