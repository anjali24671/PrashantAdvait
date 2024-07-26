export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["acharya.jpeg"]),
	mimeTypes: {".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.By_Q_j9Q.js","app":"_app/immutable/entry/app.BgaC-I4r.js","imports":["_app/immutable/entry/start.By_Q_j9Q.js","_app/immutable/chunks/entry.CjnvWq0e.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.D9lnDM6R.js","_app/immutable/entry/app.BgaC-I4r.js","_app/immutable/chunks/scheduler.BOylP72J.js","_app/immutable/chunks/index.DZ48zt5Z.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js')),
			__memo(() => import('../output/server/nodes/20.js')),
			__memo(() => import('../output/server/nodes/21.js')),
			__memo(() => import('../output/server/nodes/22.js')),
			__memo(() => import('../output/server/nodes/23.js')),
			__memo(() => import('../output/server/nodes/24.js')),
			__memo(() => import('../output/server/nodes/25.js')),
			__memo(() => import('../output/server/nodes/26.js')),
			__memo(() => import('../output/server/nodes/27.js')),
			__memo(() => import('../output/server/nodes/28.js')),
			__memo(() => import('../output/server/nodes/29.js')),
			__memo(() => import('../output/server/nodes/30.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/accessEBook",
				pattern: /^\/api\/accessEBook\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/accessEBook/_server.js'))
			},
			{
				id: "/api/articleCategories",
				pattern: /^\/api\/articleCategories\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/articleCategories/_server.js'))
			},
			{
				id: "/api/articleComments",
				pattern: /^\/api\/articleComments\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/articleComments/_server.js'))
			},
			{
				id: "/api/articleSubCategories",
				pattern: /^\/api\/articleSubCategories\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/articleSubCategories/_server.js'))
			},
			{
				id: "/api/articles",
				pattern: /^\/api\/articles\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/articles/_server.js'))
			},
			{
				id: "/api/books",
				pattern: /^\/api\/books\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/books/_server.js'))
			},
			{
				id: "/api/carts",
				pattern: /^\/api\/carts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/carts/_server.js'))
			},
			{
				id: "/api/createOrder",
				pattern: /^\/api\/createOrder\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/createOrder/_server.js'))
			},
			{
				id: "/api/donations",
				pattern: /^\/api\/donations\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/donations/_server.js'))
			},
			{
				id: "/api/eBooks",
				pattern: /^\/api\/eBooks\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/eBooks/_server.js'))
			},
			{
				id: "/api/gallery",
				pattern: /^\/api\/gallery\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/gallery/_server.js'))
			},
			{
				id: "/api/liveSessions",
				pattern: /^\/api\/liveSessions\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/liveSessions/_server.js'))
			},
			{
				id: "/api/orderShippingAddress",
				pattern: /^\/api\/orderShippingAddress\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/orderShippingAddress/_server.js'))
			},
			{
				id: "/api/orders",
				pattern: /^\/api\/orders\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/orders/_server.js'))
			},
			{
				id: "/api/podcastVideos",
				pattern: /^\/api\/podcastVideos\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/podcastVideos/_server.js'))
			},
			{
				id: "/api/printMedia",
				pattern: /^\/api\/printMedia\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/printMedia/_server.js'))
			},
			{
				id: "/api/talks",
				pattern: /^\/api\/talks\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/talks/_server.js'))
			},
			{
				id: "/api/userAllowedResources",
				pattern: /^\/api\/userAllowedResources\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/userAllowedResources/_server.js'))
			},
			{
				id: "/api/userEnrolledSession",
				pattern: /^\/api\/userEnrolledSession\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/userEnrolledSession/_server.js'))
			},
			{
				id: "/api/userRoles",
				pattern: /^\/api\/userRoles\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/userRoles/_server.js'))
			},
			{
				id: "/api/users",
				pattern: /^\/api\/users\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/users/_server.js'))
			},
			{
				id: "/api/videoCategories",
				pattern: /^\/api\/videoCategories\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/videoCategories/_server.js'))
			},
			{
				id: "/api/videoSeries",
				pattern: /^\/api\/videoSeries\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/videoSeries/_server.js'))
			},
			{
				id: "/api/videoSubCategories",
				pattern: /^\/api\/videoSubCategories\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/videoSubCategories/_server.js'))
			},
			{
				id: "/api/videos",
				pattern: /^\/api\/videos\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/videos/_server.js'))
			},
			{
				id: "/api/webhook",
				pattern: /^\/api\/webhook\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/webhook/_server.js'))
			},
			{
				id: "/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/biography",
				pattern: /^\/biography\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/books",
				pattern: /^\/books\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/books/all",
				pattern: /^\/books\/all\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/books/my_books",
				pattern: /^\/books\/my_books\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/books/search",
				pattern: /^\/books\/search\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/books/section/[price]",
				pattern: /^\/books\/section\/([^/]+?)\/?$/,
				params: [{"name":"price","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/books/[book_id]",
				pattern: /^\/books\/([^/]+?)\/?$/,
				params: [{"name":"book_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/cart",
				pattern: /^\/cart\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/cart/[productType]",
				pattern: /^\/cart\/([^/]+?)\/?$/,
				params: [{"name":"productType","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/contribute",
				pattern: /^\/contribute\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/gita",
				pattern: /^\/gita\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/invite",
				pattern: /^\/invite\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/invite/gallery",
				pattern: /^\/invite\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/invite/podcasts",
				pattern: /^\/invite\/podcasts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/invite/talks",
				pattern: /^\/invite\/talks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/media",
				pattern: /^\/media\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/reset",
				pattern: /^\/reset\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/vedant-basics-to-classic",
				pattern: /^\/vedant-basics-to-classic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/video-modules",
				pattern: /^\/video-modules\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/video-modules/search",
				pattern: /^\/video-modules\/search\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/video-modules/tag/[category_id]",
				pattern: /^\/video-modules\/tag\/([^/]+?)\/?$/,
				params: [{"name":"category_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/video-modules/[series_id]",
				pattern: /^\/video-modules\/([^/]+?)\/?$/,
				params: [{"name":"series_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 30 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
