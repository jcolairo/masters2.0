function sendOrderConfirmation (user) {
  console.log('sending email to: ', user.email);

  var products = user.basket.items;
  var productsHTML = '';

  var helper = require('sendgrid').mail;
  var fromEmail = new helper.Email('jamescolairo37@gmail.com');
  var toEmail = new helper.Email(user.email);
  var subject = 'Order Confirmation';


  products.forEach(function(prod) {
    productsHTML += generateSingleProductHTML(prod);
  });

  function generateSingleProductHTML(prod) {

    return [
      '<p>',
      '<b>' + 'Title:' + '</b>'+ prod.product.title ,
      '</p>',
      '<p>',
      '<b>' + 'Price:'+ '</b>' + prod.product.price,
      '</p>',
      '<p>',
      '<b>' + 'Description:' + '</b>'+ prod.product.description,
      '</p>',
      '<p>',
      '<b>' + 'QTY:' + '</b>'+ prod.qty,
      '</p>',
      '<br>'
    ].join('');
  }

  var content = new helper.Content('text/html', productsHTML);
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);

  var sg = require('sendgrid')(process.env.MASTERS_SENDGRIB);

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error) {
    if (error) {
      console.log('Error response received');
    }
  });

  toEmail = new helper.Email('jamescolairo37@gmail.com');
  mail = new helper.Mail(fromEmail, subject, toEmail, content);

  sg = require('sendgrid')(process.env.MASTERS_SENDGRIB);
  request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error) {
    if (error) {
      console.log('Error response received');
    }
  });
}


module.exports = {
  sendOrderConfirmation: sendOrderConfirmation
};
