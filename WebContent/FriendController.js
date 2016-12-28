'use strict';

console.log("friendController start")
 
app.controller('FriendController', ['UserService','$scope', 'FriendService','$location',
   '$rootScope',function(UserService,$scope, FriendService,$location,$routeParams,$rootScope) {
	
	console.log("FriendController...")
	
          var self = this;
          self.friend={id:'',userid:'',friendid:'',status:''};
          self.friends=[];
          
          self.userdetails = {
  				userid : '',
  				username : '',
  				password : '',
  				contact : '',
  				address : '',
  				email : '',
  				is_online:'',
  				role : '',
  				errorMessage : ''
  			};
  			self.users = [];
          
         self.sendFriendRequest=sendFriendRequest
         
         function sendFriendRequest(friendid)
         {

       	  console.log("->sendFriendRequest :"+friendid)
             FriendService.sendFriendRequest(friendid)
                 .then(
                              function(d) {
                                   self.friend = d;
                                  alert("Friend request sent")
                              },
                               function(errResponse){
                                   console.error('Error while sending friend request');
                               }
                      );
         
        	 
         }
          
             
          self.getMyFriends = function(){
        	  console.log("Getting my friends")
              FriendService.getMyFriends()
                  .then(
                               function(d) {
                                    self.friends = d;
                                    console.log("Got the friends list")
                                     	/* $location.path('/view_friend');*/
                               },
                                function(errResponse){
                                    console.error('Error while fetching Friends');
                                }
                       );
          };
            
        /*  self.getMyFriendRequest = function(){
        	  console.log("Getting my friendrequest")
              FriendService.getMyFriendRequest()
                  .then(
                               function(d) {
                                    self.friends = d;
                                    console.log("Got the friend Request list")
                                     	 $location.path('/view_friend');
                               },
                                function(errResponse){
                                    console.error('Error while fetching getmyFriendReuest');
                                }
                       );
          };
       
       */   
         self.updateFriendRequest = function(friend, id){
              FriendService.updateFriendRequest(friend, id)
                      .then(
                              self.fetchAllFriends, 
                              function(errResponse){
                                   console.error('Error while updating Friend.');
                              } 
                  );
          };
 
         self.deleteFriend = function(id){
              FriendService.deleteFriend(id)
                      .then(
                              self.fetchAllFriends, 
                              function(errResponse){
                                   console.error('Error while deleting Friend.');
                              } 
                  );
          };
          
          self.fetchAllUsers = function() {
				UserService.fetchAllUsers().then(function(d) {
					self.users = d;
				}, function(errResponse) {
					console.error('Error while fetching Users');
				});
			};
            
 
          self.fetchAllUsers();
          self.getMyFriends();
         
 
     
 
      }]);/**
 * 
 */