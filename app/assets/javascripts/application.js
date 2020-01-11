// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

function subscribe(id){
  console.log('running')
  if (!App.userChannel || App.userChannel.consumer.connection.disconnected){
    App.userChannel = App.cable.subscriptions.create({channel: "UserChannel" , id: id},{
      connected: function() {
        // Called when the subscription is ready for use on the server
        console.log('connected', id)
      },

      disconnected: function() {
        // Called when the subscription has been terminated by the server
      },

      received: function(data) {
        console.log('data', data)
        // document.querySelector('progress').value = data.health
        // audio.play();
        // if (data.health < 1) {
        //   window.location = "/"
        // }
      }
    })
  }
}
