
// validUserNames.filter(array => {
//   for (i=0; i<validUserNames.length; i++) {
//     if(validUserNames[i].length<10){
//       return array[i];
//     }
//   }
// })
const validUserNames = ['mark' , 'staceysmom1978' , 'q29832128238983' , 'carrie98' , 'MoanaFan'];


function validUserNames(usernames) {
    return usernames.filter(function(usernames) {
      return usernames.length<10;
  })
}