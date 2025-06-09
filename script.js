 var signup = document.querySelector(".signup")
    signup.addEventListener("click", function () {
      event.preventDefault()
      


      var nameRegex = /^[a-zA-Z]+$/
      var emailRegex = /^[a-zA-Z0-9]+@gmail.com/

      // 
      var name = document.querySelector(".name")
      var email = document.querySelector(".email")
      var emailError = document.querySelector(".emailError")
      var nameError=document.querySelector(".nameError")


      var valid = true 

      if (nameRegex.test(name.value) == false) { 
        var valid = false

        nameError.style.display = "inline"
      } else {
        nameError.style.display = "none"
      }

       if (emailRegex.test(email.value) == false) { 
        var valid = false

        emailError.style.display = "inline"
      } else {
        emailError.style.display = "none"
      }


     
      if (valid == true) {
        alert("Message send successfully")
         

      }

    })
