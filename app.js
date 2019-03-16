var mongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/"

mongoClient.connect(url, function(err, db){
    if(err) throw err
    var dbo = db.db("example01")
    
    // dbo.createCollection("products", function(err, res){
    //     if(err) throw err 
    //     console.log("Collection create")
    //     db.close 
    // })

    //เพิ่ม
    // var obj = { name: "Coffee mug", price: 10} เพิ่มอันเดียว
    // var obj = [ 
    //     { name: "Book", price: 10 },
    //     { name: "Pencil", price: 5 },
    //     { name: "Calculator", price: 40 },
    //     { name: "Notebook", price: 15 },
    //     { name: "T-Shirt", price: 20 },
    //     { name: "Jacket", price: 20 }
    //   ]  เพิ่มหลายอัน --> insertMany
    //dbo.collection("products").insertOne(obj, function(err, res) 
    //ข้อมูลอันเดียว​ --> insertOne, เพิ่มหลายอัน --> insertMany
    
    //ค้นหา
    // dbo.collection("products").find({}).toArray(function(err, result){
    //     if(err) throw err
    //     console.log(result)
    //     db.close()
    
    //var query = {price: 20}
    // var query = {name: /^C/}
    //var keysort = {name: 1}  //1 น้อยไปมาก -1 มากไปน้อย
    //dbo.collection("products").find(query).sort(keysort).toArray(function(err, result)

    //ลบ
    //ลบหลายอัน deleteMany ลบอันเดียว deleteOne
    //var query = {name: "Pencil"}
    // var query = {name: /^C/}
    // dbo.collection("products").deleteMany(query, function(err, res){
    //     if(err) throw err
    //     //console.log(query.name+ " is deleted")
    //     console.log(res.result.n+ " documents are deleted")
    //     db.close()

    //update
    //อันเดียว updateOne หลายอัน updateMany  
    // var query = {name: "Jacket"}
    // var updateItem = {$set: {name: "Jacket", price: 50}}
    // dbo.collection("products").updateOne(query, updateItem, function(err, res){

    
    // var query = {name: /^B/}
    // var updateItem = {$set: {name: "Box", price: 100}}
    // dbo.collection("products").updateMany(query, updateItem, function(err, res){
    //     if(err) throw err
    //     // console.log("1 item is updated")
    //     console.log(res.result.nModified+ " item(s) is updated")
    //     db.close()
    // })


    dbo.createCollection("students", function(err, res){
        if(err) throw err 
        console.log("Collection create")
        db.close 
        
        var obj = [ 
        { id: 1, firstname: "Bob", lastname: "Cat", age: 21, major: "Math" },
        { id: 2, firstname: "Tom", lastname: "Cat", age: 18, major: "Science" },
        { id: 3, firstname: "Mary", lastname: "Lamb", age: 19, major: "Science" },
        { id: 4, firstname: "Linda", lastname: "Lamb", age: 21, major: "IT" }]
        dbo.collection("students").insertMany(obj, function(err, res){
            var query = {major: "Science"}
            dbo.collection("students").find(query).toArray(function(err, result){
                    if(err) throw err
                    console.log(result)
                    db.close()
            })

            var q2 = {age: {$lt :20}}
            var keysort = {age: -1}
            dbo.collection("students").find(q2).sort(keysort).toArray(function(err, result1){
                    if(err) throw err
                    console.log(result1)
                    db.close()
            })

            var q3 = {lastname: "Lamb"}
            var updateItem = {$set: {lastname: "Fox"}}
            dbo.collection("students").updateMany(q3, updateItem, function(err, res){
                if(err) throw err
                console.log(res.result.nModified+ " item(s) is updated")
                db.close()
            })


            var obj =  { id: 5, firstname: "Adam", lastname: "Zoo", age: 22, major: "Math" }
            dbo.collection("students").insertOne(obj, function(err, res){
                if(err) throw err
                    console.log("inserted")
                    db.close()
            })




        })

        

    })
    
    
})