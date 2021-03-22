customerDelete.onshow = function() {
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { //transit worked.
        customerData = JSON.parse(req.responseText) // parse data in an array
        console.log(customerData)
    } else {
        // transit error
        lblMessage2 = `Error: ${req.status}`
    }
}






inptCustomer.oninput = function() {


    let customerNameDel = inptCustomer.value
    let found = false
    for (i = 0; i < customerData.length; i++) {
        if (customerNameDel == customerData[i][1]) {
            found = true
            break
        }
    }
    if (found == false)
        lblMessage2.value = "That customer name is not in the database."
    else if (found == true) {
        query = "DELETE FROM customer WHERE name = '" + customerNameDel + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
        if (req.status == 200) //transit worked.
            if (req.responseText == 500)
                lblMessage2.value = `You have successfully deleted the customer named ${customerNameDel}`
            else
                lblMessage2.value = `There was a problem deleting ${customerNameDel} from the database.`
        else
            lblMessage2.value = `Error: ${req.status}`
        }
}
