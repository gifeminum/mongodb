var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "mydata"
})

con.connect(function(err){
    if(err) throw err
    console.log("connected")

    // con.query("CREATE DATABASE mydata",function(err, result){
    //     if(err) throw err
    //     console.log("Database created")
    // })

    // var sql = "CREATE TABLE students(id VARCHAR(5), firstname VARCHAR(50), lastname VARCHAR(50), age INT(11))"
    // con.query(sql,function(err,result){
    //     if(err) throw err
    //     console.log("Table Created")
    // })

    //insert1row
    // var sql = "INSERT INTO students(id, firstname, lastname, age) VALUES ('1','Bob','Cat',20)"
    // con.query(sql,function(err,result){
    //     if(err) throw err
    //     console.log("Insert 1 record")
    // })

    //insert many row
    // var sql = "INSERT INTO student (id, firstname, lastname, age) VALUES ?"
    // var values = [
    //   ['1', 'Bob', 'Cat', 20],
    //   ['2', 'Tom', 'Cat', 19],
    //   ['3', 'Amy', 'Apple', 52],
    //   ['4', 'Hannah', 'Lamb', 21],
    //   ['5', 'Michael', 'Valley', 34],
    //   ['6', 'Sandy', 'Ocean', 28],
    //   ['7', 'Betty', 'Green', 15],
    //   ['8', 'Richard', 'Sky', 33],
    //   ['9', 'Susan', 'Bay', 48],
    //   ['10', 'Vicky', 'Yellow', 29],
    //   ['11', 'Ben', 'Park', 38],
    //   ['12', 'William', 'Central', 54],
    //   ['13', 'Chuck', 'May', 39],
    //   ['14', 'Viola', 'Sideway', 33]
    // ]
    // con.query(sql,[values],function(err,result){
    //     if(err) throw err
    //     console.log("Number of records inserted: "+ result.affectedRows)
    //  })

    //var sql = "SELECT * FROM students WHERE firstname LIKE 'B%'"
    //var sql = "SELECT * FROM students LIMIT 2,5"
    // con.query(sql,function(err,result){
    //     if(err) throw err
    //     console.log(result)
    //  })


    // var sql = "DELETE FROM students WHERE firstname = 'Amy'"
    // con.query(sql,function(err,result,fields){
    //     if(err) throw err
    //     console.log("no. of deleted record: "+ result.affectedRows)
    //  })

    //var sql = "SELECT DISTINCT s.id, s.firstname FROM students s , SC c WHERE s.id=c.id AND c.cid = 'egco427'"
    var sql = "SELECT s.id, s.firstname ,r.cid, r.coursename FROM student s , SC c , Course r WHERE r.cid = c.cid AND s.id=c.id AND c.cid = 'egco427'"
     con.query(sql,function(err,result){
         if(err) throw err
         console.log(result)
      })

      var sql = "SELECT s.id, s.firstname ,r.cid, r.coursename FROM Course r, student s, SC c WHERE s.firstname = 'Tom' AND c.cid = r.cid AND s.id = c.id"
      con.query(sql,function(err,result){
          if(err) throw err
          console.log(result)
       })

    



})