
var express = require('express');
var router = express.Router();
const axios = require('axios');
// var sortArray = require("../helpers/utils");

router.get('/', function(req, res) {
  res.send('respond with a resource');
});

// call items categories
router.get('/api/items', function(req, res){
  const q = req.query.q;
  axios
  .get('https://api.mercadolibre.com/sites/MLA/search?limit=4&q=' + q )
  .then(function (theResult) {
    
    const categories = theResult.data.available_filters; 
    const showCategories = categories.map(function (p) {
      return {      
        // sortArray(theCategories)    
          categories: p.values.sort((a,b) => (a.results > b.results) ? 1 : ((b.results > a.results) ? -1 : 0))      
        };              
    })  
 
    const products = theResult.data.results.map(function (p) {
      return {          
          id: p.id,
          title: p.title,
          price: {
              currency: p.currency_id,
              amount: String(p.price).split('.')[0],
              decimals: String(p.price).split('.') [1] || '0',
          },
            picture: p.thumbnail,
            condition: p.condition,
            free_shipping: p.shipping.free_shipping,
            location: p.address.state_name        
        };              
    })  
    
    res.json({
      categories: [showCategories],
      items: [products]
    });    
  })
  .catch(err => console.log(err))
})  

// call item
router.get('/api/items/:id', function(req, res) {
  const id = req.params.id
  axios.get('https://api.mercadolibre.com/items/' + id)
  .then(resultProduct => {
    const category = resultProduct.data.category_id;
    const resultProductProp = resultProduct.data
    axios.get('https://api.mercadolibre.com/items/' + id + '/description')
      .then(resultDescription => {
        
        axios.get('https://api.mercadolibre.com/categories/' + category)
          .then(resultCategory => {
            const resultCategoryMap = resultCategory.data.path_from_root.map(c => {return c.name})
 
            const myProducts = {
 
              categories: resultCategoryMap,
              item: {
                id:  resultProductProp.id,
                title: resultProductProp.title,
                price: {
                  currency: resultProductProp.currency_id,
                  amount: String(resultProductProp.price).split(".")[0],
                  decimal: String(resultProductProp.price).split(".")[1] || "0"
                },
                pictures: resultProductProp.pictures,
                condition: resultProductProp.condition,
                shipping: resultProductProp.shipping.free_shipping,
                sold_quantity: resultProductProp.sold_quantity,
                description: resultDescription.data.plain_text
              },
              categoryId: category,
              
            }
        res.json(myProducts)
      })
    .catch(function (err) {console.log("error", err)}) 
    })
  })
});

module.exports = router;
