function instreg(req,res) {
    const con = require('../connection.js')

    console.log("Inst reg post")
    var InstitutionName = req.body.InstitutionName;
    var InstitutionID = req.body.InstitutionID;
    var Phone = req.body.Phone;
    var Address = req.body.Address;
    var District = req.body.District;
    var State = req.body.State;
    var Country = req.body.Country;
    var Email = req.body.Email;
    var Password = req.body.Password;
    console.log(InstitutionName)

    var sql = `INSERT INTO inst_reg (InstitutionName, InstitutionID, Phone, Address, District, State, Country, Email, Password) VALUES ("${InstitutionName}", "${InstitutionID}", "${Phone}","${Address}","${District}","${State}","${Country}","${Email}","${Password}")`
    con.query(sql, function (err, result) {
      if (err) throw err
      console.log("1 record inserted")
})
res.redirect('/bb_inst_login')
}

module.exports = instreg