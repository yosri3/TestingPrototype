function navBar (){
	document.write('\
		<nav class="navbar bg-info navbar-dark">\
		<div>\
			<a href="index.html" class="navbar-brand"><i class="fas fa-gamepad"></i> Portfolio Yosri Jerbi</a>\
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

function makeCards(){
		makeCard("https://i.vgy.me/Nxz2xC.png",
											 "First Game",
											 "Gamemaker",
											 "#firstGameModal",
											 "")
							
							makeCard("https://i.vgy.me/IeRImI.png",
											 "Physics Prototype",
											 "Unity and C#",
											 "#physicsProtoModal",
											 "")
							
							makeCard("https://i.vgy.me/6kD4ti.png",
											 "Bossfight Prototype",
											 "Unity and C#",
											 "#dynamicsProtoModal",
											 "")
							
							makeCard("https://i.vgy.me/s5rqId.png",
											 "Playable Advertisements",
											 "JavaScript and EaselJS",
											 "#playablesModal",
											 "")
							
							makeCard("https://i.vgy.me/wbkaMN.png",
											 "Shattered",
											 "Unity, C#, Blender and Substance Painter",
											 "#shatteredModal",
											 "")
							
							makeCard("https://i.vgy.me/tfQPRQ.png",
											 "Snow Shader",
											 "Unity, C# and High-Level Shading language(HLSL) ",
											 "#snowShaderModal",
											 "")
							
							makeCard("https://i.vgy.me/eRD1la.png",
											 "Gold Diggers",
											 "Unity, C#, Playcanvas and JavaScript",
											 "#goldDiggersModal",
											 "")
							
							makeCard("https://i.vgy.me/13GqtH.png",
											 "Sera And Bushly",
											 "Unity, C# and Aseprite",
											 "#seraAndBushlyModal",
											 "")
	}
