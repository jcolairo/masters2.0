function sendOrderConfirmation (user) {
  console.log('sending email to: ', user.email);

  var basket = user.basket.items[0];
  var title = basket.product.title;
  var price = basket.product.price;
  var description = basket.product.description;
  var qty = basket.qty;
  var comments = basket.customer_notes;

  var products = 'Tittie: '+ title +  '<br>' + 'Price' + price + '<br>' + 'Description:' + description + '<br>' + 'Quantity:' + qty + '<br>' + 'Comments:' + comments;

  // all sendgrid code here

    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
  var helper = require('sendgrid').mail;
  var fromEmail = new helper.Email('jamescolairo37@gmail.com');
  var toEmail = new helper.Email(user.email);
  var subject = 'Order Confirmation';
  var content = new helper.Content('text/html', products);
  // var contentPrice = new helper.Content('text/plain', JSON.stringify(products));
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);

  var sg = require('sendgrid')(process.env.MASTERS_SENDGRIB);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
    console.log('******************************', user.basket.items);
  });


}


module.exports = {
  sendOrderConfirmation: sendOrderConfirmation
};
