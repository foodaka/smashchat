Meteor.subscribe('channels');

Meteor.startup(function() {
    Session.set('channel', 'general');
});
