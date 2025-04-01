const cardList = [
    {
        title: "Kitten 2",
        image: "images/kitten-2.jpg",
        link: "About Kitten 2",
        desciption: "This is a cute kitten"
    },
    {
        title: "Kitten 3",
        image: "images/kitten-3.jpg",
        link: "About Kitten 3",
        desciption: "This is also a cute kitten"
    }
]
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
    $('#successMessage').remove();
}
const submitForm = () => {
    if (validateForm()) {
        let formData = {};
        formData.first_name = $('#first_name').val();
        formData.last_name = $('#last_name').val();
        formData.password = $('#password').val();
        formData.email = $('#email').val();
        console.log("Form Data Submitted: ", formData);

        $('#successMessage').remove();

        // Create a success message and show it
        let successMessage = $('<div id="successMessage" class="success-message">Form Submitted Successfully!</div>');
        $('.modal-content').append(successMessage);

        setTimeout(() => {
            $('#modal1').modal('close');
        }, 2000);

        setTimeout(() => {
            $('#formSubmitSection')[0].reset();
        }, 2000);
    }
}

const clearModalForm = () => {
    $('#formSubmitSection')[0].reset();

    $('#successMessage').remove();
}

const validateForm = () => {
    let isValid = true;

    if ($('#first_name').val() === '') {
        isValid = false;
        alert("First Name is required!");
        return isValid;
    }

    if ($('#last_name').val() === '') {
        isValid = false;
        alert("Last Name is required!");
        return isValid;
    }

    if ($('#password').val() === '') {
        isValid = false;
        alert("Password is required!");
        return isValid;
    }

    if ($('#email').val() === '') {
        isValid = false;
        alert("Email is required!");
        return isValid;
    }

    return isValid;
};

const getProjects = () => {
    $.get('/api/projects',(response) => {
    if(response.statusCode==200){
    addCards(response.data);
    }
    })
    }

$(document).ready(function () {
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    getProjects();
    $('.modal').modal();    
    $('#clickMeButton').click(() => {
        clearModalForm();
    });
    $('.modal').modal();
    $('#resetForm').click(() => {
        clearModalForm();
    });
});
