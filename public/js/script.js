$(document).ready(function () {

  var $newUser = $('.new-user')

  $newUser.on('submit', function (e) {
    e.preventDefault()

    var formdata = $(this).serializeArray()

    console.log(formdata)

    $.ajax({
      type: 'POST',
      url: '/users',
      data: formdata
    }).done(function () {
      console.log('done!')
    })
  })
})
