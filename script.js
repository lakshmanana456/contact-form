 var submit = document.querySelector(".submit")
    submit.addEventListener("click", function () {
      event.preventDefault()

      var nameRegex = /^[a-zA-Z]+$/
      var emailRegex = /^[a-zA-Z0-9]+@gmail.com/
      var messageRegex = /^(?:\b\w+\b[\s\r\n]*){1,200}$/


      // var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\w).{8,}$/

      // 
      var name = document.querySelector(".name")
      var email = document.querySelector(".email")
      var emailError = document.querySelector(".emailError")
      var nameError = document.querySelector(".nameError")
      var message=document.querySelector(".message")
      var messageError=document.querySelector(".messageError")


      var valid = true //check it all condition true or false

      if (nameRegex.test(name.value) == false) { //use test to compare values
        var valid = false

        nameError.style.display = "block"
      } else {
        nameError.style.display = "none"
      }


      if (emailRegex.test(email.value) == false) { //use test to compare values
        var valid = false

        emailError.style.display = "block"
      } else {
        emailError.style.display = "none"
      }

      if (messageRegex.test(message.value) == false) { //use test to compare values
        var valid = false

        messageError.style.display = "block"
      } else {
        messageError.style.display = "none"
      }

      // if (passwordRegex.test(password.value) == false) { //use test to compare values
      //   var valid = false

      //   passwordError.style.display = "inline"
      // } else {
      //   passwordError.style.display = "none"
      // }


      if (valid == true) {
        alert("Message send successfully")


      }

    })

