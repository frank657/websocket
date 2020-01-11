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
        document.getElementById('userLiked').innerText = data.liked
        // document.querySelector('progress').value = data.health
        // audio.play();
        // if (data.health < 1) {
        //   window.location = "/"
        // }
        var newDiv = document.createElement('div')
        newDiv.className = "animate"
        newDiv.innerHTML = `<i class="fas fa-heart"></i>`

        var newHeart = document.createElement('i')
        newHeart.className = "fas fa-heart"

        document.querySelector('body').appendChild(newDiv)
        document.querySelector('#hearts-to-keep').appendChild(newHeart)

        // REFERENCE: https://tobiasahlin.com/moving-letters/#4
        var ml4 = {};
        ml4.opacityIn = [0,1];
        ml4.scaleIn = [0.2, 1];
        ml4.scaleOut = 20;
        ml4.durationIn = 200;
        ml4.durationOut = 600;
        ml4.delay = 0;

        anime.timeline({loop: false})
          .add({
            targets: '.animate',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
          }).add({
            targets: '.animate',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
          }).add({
            targets: '.animate',
            opacity: 0,
            duration: 500,
            delay: 0
          });
      }
    })
  }
}
