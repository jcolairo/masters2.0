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

  productsHTML += '<b>' + 'Total:' + user.basket.total  + '</b>';

  function generateSingleProductHTML(prod) {

    if (prod.product.type === 'combo') {
      var productData =  [
        '<p>',
        '<b>' + 'Title:' + '</b>'+ prod.product.title ,
        '</p>',
        '<p>',
        '<b>' + 'Price:'+ '</b>' + prod.product.price,
        '</p>',
        '<p>',
        '<b>' + 'Salads:' + '</b>'+ prod.dishOptions.salads.join(', '),
        '<b>' + 'Mains:' + '</b>'+ prod.dishOptions.mains.join(', '),
        '<b>' + 'Desers:' + '</b>'+ prod.dishOptions.derserts.join(', '),
        '</p>',
        '<p>',
        '<b>' + 'QTY:' + '</b>'+ prod.qty,
        '</p>',
        '<br>'
      ].join('');


      return productData;

    } else {
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
