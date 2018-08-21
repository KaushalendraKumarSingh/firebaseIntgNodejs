// Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("");//user-1 level

// var usersRef = ref.child("users");//the child of thr ref defined above
// usersRef.set({
//   alanisawesome: {
//     date_of_birth: "June 23, 1912",
//     full_name: "Alan Turing"
//   },
//   gracehop: {
//     date_of_birth: "December 9, 1906",
//     full_name: "Grace Hopper"
//   }
// });

usersRef.child("alanisawesome").set({
  date_of_birth: "June 23, 1912",
  full_name: "Alan Turing"
});
usersRef.child("gracehop").set({
  date_of_birth: "December 9, 1906",
  full_name: "Grace Hopper"
});

// var hopperRef = usersRef.child("gracehop");
// hopperRef.update({
//   "nickname": "Amazing Grace"
// });


// NOTE:
// var hopperRef = usersRef.child("gracehop");
// hopperRef.update({
//   "nickname": "Amazing Grace"
// });
usersRef.update({
  "alanisawesome/nickname": "Alan The Machine",
  "gracehop/nickname": "Amazing Grace"
});
//  NOTE: don't save as an object; that will replace the data of that particular node
// NOTE: multi path behaviour
// usersRef.update({
//   "alanisawesome": {
//     "nickname": "Alan The Machine"
//   },
//   "gracehop": {
//     "nickname": "Amazing Grace"
//   }
// });

usersRef.update({
  "alanisawesome": {
    "nickname": "Alan The Machine"
  },
  "gracehop": {
    "nickname": "Amazing Grace"
  }
});
