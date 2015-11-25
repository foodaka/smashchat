Template.footer.events({
  'keypress input': function(e) {
    var inputVal = $('.input-box_text').val();
    if(!!inputVal) {
      var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
      if (charCode == 13) {
        e.stopPropagation();
        Messages.insert({
					text: inputVal,
					user: Meteor.userId(),
					timestamp: Date.now(),
					channel: Session.get('channel')
					});
        $('.input-box_text').val("");
        return false;
      }    
    }
  }
});


// Template.channel.events({
//     'click .channel': function (e) {
//     Session.set('channel', this.name);
// };