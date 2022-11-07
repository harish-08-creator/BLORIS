function userlog(req,res) {
    const con = require('../connection.js')

    console.log("User log post")
    var Email = req.body.Email;
    var Password = req.body.Password;
    console.log(Email)

    if(Email && Password)
    {
        var sql = `
        SELECT * FROM user_reg 
        WHERE Email = "${Email}"
        `;

        con.query(sql, function(error, data){

            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].Password == Password)
                    {
                        // req.session.user_id = data[count].user_id;

                        res.redirect('/bb_find');
                    }
                    else
                    {
                        res.send('Incorrect Password');
                    }
                }
            }
            else
            {
                res.send('Incorrect Email Address');
            }
            res.end();
        });
    }
    else
    {
        res.send('Please Enter Email Address and Password Details');
        res.end();
    }

}

//     var sql = `INSERT INTO user_reg (Firstname, Lastname,Bloodgrp, Gender, Phone, Address, District, State, Country, Email, Password) VALUES ("${Firstname}", "${Lastname}", "${Bloodgrp}", "${Gender}","${Phone}","${Address}","${District}","${State}","${Country}","${Email}","${Password}")`
//     con.query(sql, function (err, result) {
//       if (err) throw err
//       console.log("1 record inserted")
// })
// res.redirect('/bb_user_login')

module.exports = userlog