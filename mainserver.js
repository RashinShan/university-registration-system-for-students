            

var con = require('./db');

var express = require("express");


const router = express.Router();
var app = express();
var uname;
var bodyParser = require('body-parser');
app.use('/', router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let cookieParser = require('cookie-parser');
app.set('view engine', 'ejs');
app.use(cookieParser());



router.get('/', function (req, res) {
  res.render(__dirname + '/login');
});

router.get('/login', function (req, res) {
  res.render(__dirname + '/login');
});

router.get('/registration', function (req, res) {
  res.render(__dirname + '/registration');
});



router.get('/administrator', function (req, res) {
  res.render(__dirname + '/administrator');
});




app.post("/loging", function (req, res) {
 
  var username = req.body.username;
  var password = req.body.psw;
 
  var sql = "select UserName from user_details where UserName = ? and Password= ? ";
  con.query(sql, [username, password], function (error, result) {
    if (error) console.log(error);
    if (result.length > 0) {
      res.redirect("/home");
    } else {
      res.redirect("/");
    }
  });
});


app.post('/reg', function (req, res) {
  var nicNum= req.body.nicNum;
  var firstName= req.body.firstName;
  var lastName= req.body.lastName;
  var gender= req.body.gender;
  
  var address= req.body.address;
  var dob =req.body.dob;
  var contactNum= req.body.contactNum;
  var regNum= req.body.regNum;
  var regDate= req.body.regDate;
  var semester= req.body.semester;
  var department= req.body.department;
  var courses= req.body.courses;
  var username=req.body.username;
  var psw= req.body.psw;

  
  var sql = [
    "INSERT INTO candidate(NIC ,First_Name,Last_Name,Gender,Address,DOB,Registation_Number	)VALUES('" + nicNum + "','" + firstName + "','" +lastName + "','" + gender + "','" + address + "','" + dob + "','" + regNum + "')",
    "INSERT INTO user_details(UserName,Password)VALUES('" + username + "','" + psw + "')",
    "INSERT INTO courses(courses_Name,Registation_Number)VALUES('" + courses + "','" + regNum + "')",
    "INSERT INTO faculty_details( Department_Name ,Semester_Name, Registation_Number)VALUES('" + department + "','" + semester + "','" + regNum + "')",
    "INSERT INTO student_registation( Registation_Number ,Registation_Date)VALUES('" + regNum + "','" + regDate + "')"
    
    
    
   
  ];
  
  con.query(sql.join(';'), function (error, result) {
    if (error){
      
      console.log(error);
    } 
   
    res.redirect("login");
  });
});



app.post('/updatec', function (req, res) {
  var regNum= req.body.regNum;
  var courses= req.body.cname; 
  var sql=   "UPDATE courses SET courses_Name=? where Registation_Number=?;";
  
  con.query(sql,[ courses, regNum],function (error, result) {
    if (error){
      console.log(error);
    } 
    res.redirect("login");
  });
});

app.post('/updateca', function (req, res) {
  var nicNum= req.body.nicNum;
  var firstName= req.body.firstName;
  var lastName= req.body.lastName;
  var gender= req.body.gender;
  
  var address= req.body.address;
  var dob =req.body.dob;
  var regNum= req.body.regNum;

  var sql=   "UPDATE candidate SET NIC=?, First_Name=?, Last_Name=?, Gender=?, Address=?, DOB=? where Registation_Number=?;";
  
  con.query(sql,[ nicNum,firstName,lastName,gender,address,dob ,regNum ],function (error, result) {
    if (error){
      console.log(error);
    } 
    res.redirect("login");
  });
});

app.post('/updatef', function (req, res) {
 
  var semester= req.body.semester;
  var department= req.body.department;
  var regNum= req.body.regNum;

  var sql="UPDATE faculty_details SET  Department_Name=? ,Semester_Name=? where Registation_Number=?;";
  
  con.query(sql,[ department,semester,regNum],function (error, result) {
    if (error){
      console.log(error);
    } 
    res.redirect("login");
  });
});


app.post('/updates', function (req, res) {
 

  var regNum= req.body.regNum;
  var regDate= req.body.regDate;

  var sql= "UPDATE student_registation SET Registation_Number=?,Registation_Date=? where   Registation_Number=?;";
  
  con.query(sql,[ regNum,regDate, regNum],function (error, result) {
    if (error){
      console.log(error);
    } 
    res.redirect("login");
  });
});

app.post('/updateu', function (req, res) {
  var username=req.body.username;
  var psw= req.body.psw;

  var sql= "UPDATE user_details SET UserName=? where Password=?;";
  
  con.query(sql,[ username,psw],function (error, result) {
    if (error){
      console.log(error);
    } 
    res.redirect("login");
  });
});




app.post('/deluser', function (req, res) {
  var uname= req.body.uname;
  
  var sql =   "DELETE FROM user_details WHERE  UserName=?;";
  con.query(sql,[uname], function (error, result) {
    if (error) throw error;
    res.redirect("/home");

  });
});

app.post('/delcourse', function (req, res) {
  var regNum= req.body.regnum;
 

  var sql =    "DELETE FROM courses WHERE  Registation_Number=?;";
  con.query(sql,[regNum], function (error, result) {
    if (error) throw error;
    res.redirect("/home");

  });
});

app.post('/delfaculty', function (req, res) {
  var regNum= req.body.regnum;
  

  var sql =   "DELETE FROM faculty_details WHERE  Registation_Number=?;";
  con.query(sql,[regNum], function (error, result) {
    if (error) throw error;
    res.redirect("/home");

  });
});

app.post('/delstudentreg', function (req, res) {
  var regNum= req.body.regnum;

  var sql =  "DELETE FROM student_registation WHERE  Registation_Number=?;";
  con.query(sql,[regNum], function (error, result) {
    if (error) throw error;
    res.redirect("/home");

  });
});

app.post('/delstudentreg', function (req, res) {
  var regNum= req.body.regnum;

  var sql =  "DELETE FROM student_registation WHERE  Registation_Number=?;";
  con.query(sql,[regNum], function (error, result) {
    if (error) throw error;
    res.redirect("/home");

  });
});

app.post('/delcandidate', function (req, res) {
  var regNum= req.body.regnum;

  var sql =  "DELETE FROM candidate WHERE  Registation_Number=?;";
  con.query(sql,[regNum], function (error, result) {
    if (error) throw error;
    res.redirect("/home");

  });
});









router.get('/home', function (req, res) {
  var sql = [
    "select * from candidate",
    "select * from  courses",
    "select * from  faculty_details",
    "select * from  student_registation"
   
   
   
    
  ];

  con.query(sql.join(';'), function (error, result) {
    if (error) console.log(error);
   
    res.render(__dirname + "/home", { candidate : result[0],courses:result[1],faculty_details:result[2],student_registation:result[3]});
  });

});






  


app.listen(4000);


