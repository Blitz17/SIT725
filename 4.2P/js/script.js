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

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const getProjects = () => {
    $.get('http://localhost:3004/api/projects',(response) => {
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
    });
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
