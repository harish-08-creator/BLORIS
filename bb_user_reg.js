function userreg() {
    const con = require("./connection.js")
    con.connect(function (err) {
        if (err) throw err
        console.log("Database Connected!")
        var sql = "INSERT INTO user_reg (Firstname, Lastname,Bloodgrp, Gender, Phone, Address, District, State, Country, Email, Password) VALUES ('Company Inc', 'Highway 37')";
        con.query(sql, function (err, result) {
          if (err) throw err
          console.log("1 record inserted")
    })
 })
}

module.exports = userreg