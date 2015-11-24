Meteor.startup(function () {
  smtp = {
    username: 'markhinschberger@gmail.com',
    password: 'lAECo8nY5LbZ5oQZ7CA9wA',
    server:   'smtp.mandrillapp.com',
    port: 587
 };
    
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});