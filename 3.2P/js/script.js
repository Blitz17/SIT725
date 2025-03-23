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
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);

    // Remove any previous success message (clear old messages before appending a new one)
    $('#successMessage').remove();

    // Create a success message and show it
    let successMessage = $('<div id="successMessage" class="success-message">Form Submitted Successfully!</div>');
    $('.modal-content').append(successMessage);

    // Delay closing the modal after 2 seconds (for example 2 seconds)
    setTimeout(() => {
        $('#modal1').modal('close'); // Close modal after success message appears
    }, 2000);

    // Optionally clear the form inputs after the modal closes
    setTimeout(() => {
        $('#formSubmitSection')[0].reset();
    }, 2000);
}

const clearModalForm = () => {
    // Reset the inputs inside the modal
    $('#formSubmitSection')[0].reset();

    // Remove any success message if it's visible
    $('#successMessage').remove();
}
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
$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    $('#clickMeButton').click(() => {
        clearModalForm();
    });
    addCards(cardList);
    $('.modal').modal();
});
