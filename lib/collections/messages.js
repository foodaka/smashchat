Messages = new Mongo.Collection("messages");

Messages.allow({
  insert: function (userId, doc) {
    return (userId && doc.user === userId);
  }
});

// Meteor.call('newMessage', {
//     text: $('.input-box_text').val(),
//     channel: Session.get('channel')
// });