// form
const button = document.querySelector('.btn')

// button.addEventListener('click', (e) => {
//   e.preventDefault()
// })

function emailSend() {
  var userName = document.getElementById('name').value
  var phone = document.getElementById('phone').value

  var messageBody = 'Ism :  ' + userName + '<br/> Telefon :  ' + phone
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'hojiakbarsaydullayev003@gmail.com',
    Password: '287E14366B538C79B2FF0DF897444D1DE0E9',
    To: 'izzatbeksaydullayevsiu@gmail.com', //! sms yuboriladigan gmail
    From: 'hojiakbarsaydullayev003@gmail.com',
    Subject: 'Dilnoza Djurayeva Vebinar',
    Body: messageBody,
  })
    .then((message) => {
      if (message == 'OK') {
        swal('Tabriklaymiz 🎉', `Siz muvaffaqiyatli ro'yhatdan o'tdingiz!`)
      } else {
        swal('Xatolik ❗', `Qaytadan urinib ko'ring`)
      }
    })
    .then(() => {
      setTimeout(() => {
        location.href = 'https://t.me/durdona_djurayevaa' //! telegram Admin
      }, 500)
    })
}
//
