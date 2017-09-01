// Userlist data array for filling in info box
var userListData = [];

// Dom Ready ================================================================
/*
$(document).ready(function(){
    
    // Populate the user table on initial page load
    populateTable();

});
*/



// Functions ================================================================

// Fill table with data
function populateTable(){

    // Empty content string
    var tableContent = '';
    //console.log(tableContent);

    // jQuery AJAX call for json
    $.getJSON( '/users/userlist', function( data ){

        // Stick our user data array into a userlilst variable in the global object.
        userListData = data;

        //For each item in our JSON, add a table row and cell to the contentstring.
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        //$('#userList table thead').html(tableContent); <= .jade
        $('#userList').html(tableContent);

        // Username link click
        $('#userList').on('click', 'td a.linkshowuser', showUserInfo);

        // Add User button click
        $('#btnAddUser').on('click', addUser);

        // Delete User link click
        $('#userList').on('click', 'td a.linkdeleteuser', deleteUser);
    })
};

// Show User Info
function showUserInfo(event){

    // Prevent Link from Firing 
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = userListData.map(function(arrayItem){ return arrayItem.username; }).indexOf(thisUserName);

    // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    // Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);

};

// Add User
function addUser(event) {
    
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'username': $('#inputUserName').val(),
            'email': $('#inputUserEmail').val(),
            'fullname': $('#inputUserFullname').val(),
            'age': $('#inputUserAge').val(),
            'location': $('#inputUserLocation').val(),
            'gender': $('#inputUserGender').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/adduser',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('input').val('');

                // Update the table
                populateTable();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};

// Delete User
// Delete User
function deleteUser(event) {
    //alert(event);
        console.log(event);
    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {
        
        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deleteuser/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateTable();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};

/*
// get enter key press ===================================================
$(document).keypress(function (e) {
    if (e.which == 13) {
        alert('enter key is pressed');
    }
});
*/

function testreturn(){
    return false;
}





// export function for test function
if(typeof exports !== 'undefined') {
    exports.populateTable = populateTable;
    exports.showUserInfo  = showUserInfo;
    exports.deleteUser    = deleteUser;  
    exports.testreturn    = testreturn;
};


