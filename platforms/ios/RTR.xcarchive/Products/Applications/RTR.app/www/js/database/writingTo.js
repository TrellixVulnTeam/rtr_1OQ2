//this should overwrite as well as save new as long the correct id is passed
function writeNews(newtitle,text1,image1,text2,image2,text3,image3){
  //alert(title + " " + text1);
  // WE USE .PUSH, which automatically generates an ID, so the user doesn't need to bother
  firebase.database().ref('news').push(
  {title: newtitle,
  content: text1,
  image_1: image1,
  content_1: text2,
  image_2: image2,
  content_2: text3,
  image_3: image3});
  location.reload();
  return false;
}

function writeEvents(newtitle,text,img,contactee, location1, location2, bookreq){
  // WE USE .PUSH, which automatically generates an ID, so the user doesn't need to bother
	firebase.database().ref('events').push({
	booking_required: bookreq,
	contact: contactee,
	content: text,
	image: img,
	location_1: location1,
	location_2: location2,
	title: newtitle
	});
	location.reload();
	return false;
}

function writeProjects(thisTitle, thisImage, latitude, longtitude, thisTag, moreInfo, thisDescription ){
  // WE USE .PUSH, which automatically generates an ID, so the user doesn't need to bother
  firebase.database().ref('projects').push({
    description: thisDescription,
    lat: latitude,
    long: longtitude,
    more_info: moreInfo,
    tag: thisTag,
    image: thisImage,
    title: thisTitle
  })
  location.reload();
  return false;
}

function deleteNews(id){
  firebase.database().ref('news/'+id).set(null);
  location.reload();
  return false;
}

function deleteEvent(id){
  firebase.database().ref('events/'+id).set(null);
  location.reload();
  return false;
}

function deleteProject(id){
  firebase.database().ref('projects/'+id).set(null);
  location.reload();
  return false;
}
