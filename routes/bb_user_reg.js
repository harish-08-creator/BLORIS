function userreg(req,res) {
        const con = require('../connection.js')

        console.log("User reg post")
        var Firstname = req.body.Firstname;
        var Lastname = req.body.Lastname;
        var Bloodgrp = req.body.Bloodgrp;
        var Gender = req.body.Gender;
        var Phone = req.body.Phone;
        var Address = req.body.Address;
        var District = req.body.District;
        var State = req.body.State;
        var Country = req.body.Country;
        var Email = req.body.Email;
        var Password = req.body.Password;
        console.log(Firstname)

        var sql = `INSERT INTO user_reg (Firstname, Lastname,Bloodgrp, Gender, Phone, Address, District, State, Country, Email, Password) VALUES ("${Firstname}", "${Lastname}", "${Bloodgrp}", "${Gender}","${Phone}","${Address}","${District}","${State}","${Country}","${Email}","${Password}")`
        con.query(sql, function (err, result) {
          if (err) throw err
          console.log("1 record inserted")
    })
    res.redirect('/bb_user_login')
 }

module.exports = userreg