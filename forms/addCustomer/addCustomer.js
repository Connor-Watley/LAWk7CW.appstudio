btnAdd.onclick = function() {
    let name = inptName.value
    let street = inptStreet.value
    let city = inptCity.value
    let state = inptState.value
    let zip = inptZip.value
    let query = "INSERT INTO customer (`name`,`street`, `city`, `state`, `zipcode`) VALUES ('" + name + "', '" + street + "', '" + city + "', '" + state + "', '" + zip + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)
            lblMessage3.value = "You have successfully added the customer!"
        else
            lblMessage3.value = "There was a problem with adding the customer to the database."
    } else
        lblMessage3.value = "Error: " + req.status
}