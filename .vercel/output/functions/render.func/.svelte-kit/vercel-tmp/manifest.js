export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","smui.css","uzduotis.jpg"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-94dae1bc.js","imports":["_app/immutable/start-94dae1bc.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-055277d2.js","_app/immutable/chunks/singletons-ae8186e5.js","_app/immutable/chunks/index-ca34a969.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "auth",
				pattern: /^\/auth\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "mod",
				pattern: /^\/mod\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "renter",
				pattern: /^\/renter\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "user",
				pattern: /^\/user\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "renter/analytics",
				pattern: /^\/renter\/analytics\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "renter/requests",
				pattern: /^\/renter\/requests\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "user/returns",
				pattern: /^\/user\/returns\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "api/auth/login",
				pattern: /^\/api\/auth\/login\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/auth/login/_server.ts.js')
			},
			{
				id: "api/auth/register",
				pattern: /^\/api\/auth\/register\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/auth/register/_server.ts.js')
			},
			{
				id: "api/db/contracts",
				pattern: /^\/api\/db\/contracts\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/db/contracts/_server.ts.js')
			},
			{
				id: "api/db/groups",
				pattern: /^\/api\/db\/groups\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/db/groups/_server.ts.js')
			},
			{
				id: "api/db/images",
				pattern: /^\/api\/db\/images\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/db/images/_server.ts.js')
			},
			{
				id: "api/db/items",
				pattern: /^\/api\/db\/items\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/db/items/_server.ts.js')
			},
			{
				id: "api/db/requests",
				pattern: /^\/api\/db\/requests\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/db/requests/_server.ts.js')
			},
			{
				id: "api/db/reviews",
				pattern: /^\/api\/db\/reviews\/?$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/db/reviews/_server.ts.js')
			},
			{
				id: "user/[id]",
				pattern: /^\/user\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
