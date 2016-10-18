$(document).ready(function () {

  var $newUser = $('.new-user')

  $newUser.on('submit', function (e) {
    e.preventDefault()

    var formdata = $(this).serializeArray()

    $.ajax({
      type: 'POST',
      url: '/users',
      data: formdata
    }).done(function () {
      $('ul').append('<li>' + formdata + '</li>')
    })
  })
})
