var productCardMarkup = 
  `<div class="swym-wishlist-grid">
		{{#products}} 
        <a href="{{du}}"aria-label="{{dt}}" class="swym-wishlist-item swym-is-anchor">
            <button id="swym-remove-productBtn" aria-label="Delete" data-variant-id="{{epi}}" data-product-id="{{empi}}" class="swym-delete-btn swym-nav swym-nav-1 swym-is-button">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" fill="none" viewBox="0 0 18 17">
                    <rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>
                    <g class="currentLayer"><title>Layer 1</title><path d="M16.500724844360352,15.107312518310547 L1.6726248443603513,0.2791925183105466 C1.3003248443603521,-0.09305748168945271 0.6968248443603517,-0.09305748168945271 0.3246048443603513,0.2791525183105463 C-0.047605155639647734,0.6513725183105468 -0.047645155639647996,1.2549425183105463 0.3246048443603513,1.6272125183105466 L15.152824844360353,16.455412518310546 C15.525024844360352,16.82761251831055 16.128624844360353,16.82761251831055 16.500824844360352,16.455412518310546 C16.87312484436035,16.083112518310546 16.87302484436035,15.479612518310546 16.500724844360352,15.107312518310547 z" fill="currentColor" id="svg_1" class=""/><path d="M1.627324844360352,16.49991251831055 L16.45542484436035,1.6718125183105474 C16.82772484436035,1.2995125183105465 16.82772484436035,0.6959925183105469 16.45542484436035,0.32373251831054617 C16.083124844360352,-0.048527481689452756 15.479624844360352,-0.048527481689452756 15.107424844360352,0.32373251831054617 L0.2791948443603509,15.151912518310546 C-0.09306515563964801,15.524212518310549 -0.09306515563964801,16.127712518310545 0.2791948443603509,16.500012518310548 C0.6514548443603516,16.872212518310548 1.255024844360351,16.872212518310548 1.627324844360352,16.49991251831055 z" fill="currentColor" id="svg_2"/></g>
                </svg>
            </button>
            <div class="swym-wishlist-image-wrapper"><img alt="" class="swym-wishlist-image" src="{{iu}}"></div>
            <div class="swym-product-info">
                <button class="swym-is-button">
                <div class="swym-title swym-title-1">
                    {{dt}}
                </div>
                </button>
                <div class="swym-variant-title swym-text swym-title-2 swym-variant-title-spacer ">
                    {{variantinfo}}
                </div>
            </div>
        </a>
        {{/products}}
	</div>`;

var productEmptyMarkup = 
    `<h4 class="text-center">Your wishlist is empty</h4>
    <a class="button__red empty-btn" href="/collections/all">Explore products</a>`;

function getVariantInfo(variants) {
	try {
		let variantKeys = ((variants && variants != "[]") ? Object.keys(JSON.parse(variants)[0]) : []),
			variantinfo;
		if (variantKeys.length > 0) {
			variantinfo = variantKeys[0];
			if (variantinfo == "Default Title") {
				variantinfo = "";
			}
		} else {
			variantinfo = "";
		}
		return variantinfo;
	} catch (err) {
		return variants;
	}
}
if (!window.SwymCallbacks) {
	window.SwymCallbacks = [];
}
window.SwymCallbacks.push(swymRenderWishlist); /* Init Here */

function swymRenderWishlist(swat) {
	// Get wishlist items
	swat.fetch(function(products) {
		console.log(products)
		var wishlistContentsContainer = document.getElementById("wishlist-items-container");
		var formattedWishlistedProducts = products.map(function(p) {
			p = SwymUtils.formatProductPrice(p); // formats product price and adds currency to product Object
			p.isInCart = _swat.platform.isInDeviceCart(p.epi) || (p.et == _swat.EventTypes.addToCart);
			p.variantinfo = (p.vi ? getVariantInfo(p.vi) : "");
			return p;
		});
		var productCardsMarkup = SwymUtils.renderTemplateString(productCardMarkup, {
			products: formattedWishlistedProducts
		});
		if(wishlistContentsContainer){
			wishlistContentsContainer.innerHTML = productCardsMarkup;
			attachClickListeners();
		} else{
		  console.log("Container not found, Wishlist Page element not found");
		}
		if (products == 0) {
            wishlistContentsContainer.innerHTML = productEmptyMarkup;
        }
	});
}

function onAddToCartClick(e) {
	e.preventDefault();
	var productId = e.currentTarget.getAttribute("data-product-id");
	var variantId = e.currentTarget.getAttribute("data-variant-id");
	var du = e.target.getAttribute("data-product-url");
	e.target.innerHTML = "Adding..";
	window._swat.replayAddToCart({
		empi: productId,
		du: du
	}, variantId, function(c) {
		e.target.innerHTML = "Added to Cart";
		e.target.setAttribute("data-state-cart", "swym-added");
		console.log("Successfully added product to cart.", c);
	}, function(e) {
		console.log(e);
	});
}

function attachClickListeners() {
	var addToCartButtons = document.querySelectorAll("#swym-custom-add-toCartBtn");
	var removeBtns = document.querySelectorAll("#swym-remove-productBtn");
	//   Add to cart Btns
	for (var i = 0; i < addToCartButtons.length; i++) {
		addToCartButtons[i].addEventListener('click', onAddToCartClick, false);
	}
	//   Remove Buttons
	for (var k = 0; k < removeBtns.length; k++) {
		removeBtns[k].addEventListener('click', onRemoveBtnClick, false);
	}
	console.log("Events attached!");
}

function onRemoveBtnClick(e) {
	e.preventDefault();
	var epi = +e.currentTarget.getAttribute("data-variant-id");
	var empi = +e.currentTarget.getAttribute("data-product-id");
	window._swat.fetch(function(products) {
		products.forEach(function(product) {
			if (epi && empi && product.epi == epi && product.empi == empi) {
				window._swat.removeFromWishList(product, function() {
					if (!window.SwymCallbacks) {
						window.SwymCallbacks = [];
					}
					window.SwymCallbacks.push(swymRenderWishlist);
				});
			}
		});
	})
}