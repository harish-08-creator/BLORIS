function instlog(req,res) {
    const con = require('../connection.js')

    console.log("Inst log post")
    var InstitutionID = req.body.InstitutionID;
    var Password = req.body.Password;
    console.log(InstitutionID)

    if(InstitutionID && Password)
    {
        var sql = `
        SELECT * FROM inst_reg 
        WHERE InstitutionID = "${InstitutionID}"
        `;

        con.query(sql, function(error, data){

            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].Password == Password)
                    {
                        // req.session.user_id = data[count].user_id;

                        res.redirect('/bb_inst_port');
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

module.exports = instlog