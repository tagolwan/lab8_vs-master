//Converter thai bath to us dolar

function converter(currency) {
    return "$" + currency * exchageRate('thb','usd')
   }

function exchageRate(from, to){
    return 0.033
}


   module.exports = converter;

