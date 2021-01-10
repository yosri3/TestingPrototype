function navBar (){
	document.write('\
		<nav class="navbar bg-info navbar-dark">\
		<div>\
			<a href="" class="navbar-brand"><i class="fas fa-gamepad"></i> Portfolio Yosri Jerbi</a>\
		</div>\
	</nav>\
	');
}

// image title text modalID
function makeCard (imgUlr, title, description, modalID, contribution){
	document.write('\
		<div class="col-md-4">\
							<div class="card ">\
								<img src="'+ imgUlr +'" class="card-img-top" alt="...">\
								<div class="card-body">\
									<h5 class="card-title">'+title+'</h5>\
									<p class="card-text">'+description+'</p>\
									<p class="card-text">'+contribution+'</p>\
									<a href="#" class="stretched-link" data-toggle="modal" data-target="'+modalID+'"></a>\
								</div>\
							</div>\
						</div>\
	');
}