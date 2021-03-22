
customerUpdate.onshow=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        console.log(`the results are : \n ${results}`)
        if (results.length == 0)
            lblMessage4.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            txtaCustomers2.value = message
        } 

    } else 
        lblMessage4.value = "Error code: " + req.status
}



btnUpdate.onclick=function(){
    let newName = inptUpdate.value
    let oldName = InptName2.value
    query = "SELECT * FROM customer WHERE `name` = '" + oldName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        customerData = JSON.parse(req.responseText)
        if (customerData.length > 0) {
            query = "UPDATE customer SET `name` ='" + newName + "' WHERE `name` = '" + oldName + "'"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
            if (req.status ==  200)  
                if (req.responseText == 500)   
                    lblMessage4.textContent = `You have successfully updated ${oldName} to ${newName}.`
                else
                    lblMessage4.textContent = `There was a problem updating ${oldName} to ${newName}.`
            else   
                lblMessage4.textContent = `Error: ${req.status}`
        }
    } 


}
