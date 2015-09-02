var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./Northwind.sl3');

db.serialize(function () {


//   console.log('Categories');

//   db.each('SELECT * FROM Categories', function(err, row) {
//     console.log(row.Description.toString());
//   });

// db.run('', function () {
//   console.log('============');
//   console.log('Products');
//   console.log('============');
// });

//   db.each('SELECT * FROM Products ' +
//   'INNER JOIN Categories ' +
//   'ON Products.CategoryID = Categories.CategoryID ' +
//   'LIMIT 10', function(err, row) {
//     console.log(row.ProductName + ' is a ' + row.CategoryName);
//   })



// db.run('', function () {
//   console.log('============');
//   console.log('Employee Supervisor');
//   console.log('============');
// });

//   //{Employee Lastname} {Supervisor Lastname}

//   db.each('SELECT E.LastName AS Employee, S.LastName AS Supervisor ' +
//     'FROM Employees AS E ' +
//     'LEFT OUTER JOIN Employees AS S ' +
//     'ON E.ReportsTo = S.EmployeeID', function (err, row) {
//       if(row.Supervisor) {
//         console.log(row.Employee + "'s supervisor is " + row.Supervisor);
//       } else {
//       console.log(row.Employee + " has no supervisor.");
//         };
//     });


  db.run('DROP TABLE Favorites');
  db.run('CREATE TABLE Favorites (FavoriteID integer primary key not null, CategoryID integer not null)');
  db.run('INSERT INTO Favorites(FavoriteID, CategoryID) VALUES(1, 2)');
  db.run('INSERT INTO Favorites(CategoryID) VALUES(4)');
  db.run('INSERT INTO Favorites(CategoryID) VALUES(6)');
  db.run('INSERT INTO Favorites(CategoryID) VALUES(8)');


  db.each('SELECT * FROM Favorites', function(err, row) {
    console.log('FavoriteID: ' + row.FavoriteID, 'CategoryID: ' + row.CategoryID);
    // console.log('CategoryID: ' + row.CategoryID);
  })






db.close();
})
