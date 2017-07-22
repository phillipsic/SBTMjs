import { Meteor } from 'meteor/meteor';

if(!Meteor.users.findOne({emails: { $elemMatch: { address: "admin@test.com"}}})){
    var id = Accounts.createUser({ email: "admin@test.com", password: "1234", profile: { name: 'Admin' }, username: "admin" });
    Meteor.users.update({_id: id }, { $set: { admin: true }});
}

if(!Meteor.users.findOne({emails: { $elemMatch: { address: "user@test.com"}}})){
    var id = Accounts.createUser({ email: "user@test.com", password: "1234", profile: { name: 'User' }, username: "user" });
    Meteor.users.update({_id: id }, { $set: { admin: false }});
}