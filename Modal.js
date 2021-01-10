function makeModal (modalID,pageLink,image,video,title,description){
	var carouselID = "carousel" + modalID;
	var i;
	var carouselData = "";
	for (i=0; i<image.length+video.length; i++) {
		if(i ===0){
			carouselData += '<li data-target="#'+carouselID+'" data-slide-to="'+i+'" class="active"></li>';
		}else{
			carouselData += '<li data-target="#'+carouselID+'" data-slide-to="'+i+'"></li>';
		}
  }
	var imgIndex;
	var imgCarouselData = "";
	for(imgIndex=0; imgIndex<image.length; imgIndex++){
		imgCarouselData += '<div class="carousel-item "><img src="'+image[imgIndex]+'" class="img-fluid rounded mx-auto d-block carouselCenterClass" alt="Responsive image"></div>'
	}
	var vidIndex;
	var vidCarouselData = "";
	for(vidIndex=0; vidIndex<video.length; vidIndex++){
		if(vidIndex===0){
			 vidCarouselData += '<div class="carousel-item active"><div class="embed-responsive embed-responsive-16by9 carouselCenterClass"><iframe class="embed-responsive-item" src="'+video[vidIndex]+'" allowfullscreen></iframe></div></div>'
			 }else{
			 vidCarouselData += '<div class="carousel-item"><div class="embed-responsive embed-responsive-16by9 carouselCenterClass"><iframe class="embed-responsive-item" src="'+video[vidIndex]+'" allowfullscreen></iframe></div></div>'
			 }
		
	}
	document.write('\
				<div class="modal fade" id="'+modalID+'" tabindex="-1">\
					<div class="modal-dialog modal-dialog-centered modal-xl">\
						<div class="modal-content">\
<!-- Title -->\
							<div class="modal-header">\
								<h5 class="modal-title">'+title+'</h5>\
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">\
									<span aria-hidden="true">&times;</span>\
								</button>\
							</div>\
							\
							<div class="modal-body">\
								<div class="container">\
									<div class="row align-items-center justify-content-around">\
										<div class="col-xl-8 text-center ">\
<!-- Image -->\
											<div id="'+carouselID+'" class="carousel slide" data-interval="false">\
												<ol class="carousel-indicators">\
													'+carouselData+'\
												</ol>\
												<div class="carousel-inner mx-auto">\
													'+vidCarouselData+'\
													'+imgCarouselData+'\
												</div>\
												<a class="carousel-control-prev" href="#'+carouselID+'" role="button" data-slide="prev">\
													<span class="fas fa-angle-left fa-3x fasCarouselColor" aria-hidden="true"></span>\
													<span class="sr-only">Previous</span>\
												</a>\
												<a class="carousel-control-next" href="#'+carouselID+'" role="button" data-slide="next">\
													<span class="fas fa-angle-right fa-3x fasCarouselColor" aria-hidden="true"></span>\
													<span class="sr-only">Next</span>\
												</a>\
											</div>\
										</div>\
										<div class="col-xl-4">\
											<p>'+description+'</p>\
										</div>\
									</div>\
								</div>\
							</div>\
							<div class="modal-footer">\
								<div class="container">\
									<div class="row justify-content-around">\
										<div class="col-md-0">\
											<a href="'+pageLink+'" class="btn btn-outline-success">Play</a>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>\
  ');
}