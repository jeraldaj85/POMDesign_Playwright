exports.HomePage = 
class HomePage{
  constructor(page) {
    this.page = page;
    this.productList = "//div[@class='card-block']/h4/a";
    this.addCartBtn = "//a[text()='Add to cart']";
    this.cart = '#cartur';
   
  }

  async addProductToCart(productName) {
        const productList = await this.page.$$(this.productList);
        for(const product of productList){
            if(productName === await product.textContent()){
                await product.click();
                console.log("Product found and clicked");
                break;
            }
        }

        await this.page.on('dialog', async dialog => {
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })

        await this.page.locator(this.addCartBtn).click();
    }



    async gotoCartPage() {
        await this.page.locator(this.cart).click();
    }
}