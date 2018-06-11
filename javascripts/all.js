var app=angular.module("theme",["ui.router"]);app.config(["$stateProvider","$urlRouterProvider",function(F,f){F.state("theme",{url:"/:slug",controller:"ThemeController",params:{slug:{value:"afterglow"}}}),f.otherwise("/afterglow")}]),app.controller("ThemeController",["$scope","$stateParams","$state","$location",function(F,f,D,E){var e={afterglow:"#2F2C2F,#252525,#A36B31,#D2D6D6,#5C6380,#DEDEDE,#ADBA4E,#DB6668",amigaos_1_3:"#0050A0,#000020,#F08000,#FFFFFF,#F08000,#FFFFFF,#F08000,#F08000",ancestry:"#534d46,#706b63,#7a9c0f,#FFFFFF,#648200,#FFFFFF,#9cbe30,#f3b670",arc:"#373D48,#303641,#5294E2,#FFFFFF,#4A5664,#FFFFFF,#5294E2,#5294E2",arizona_state_university:"#8C1D40,#5C6670,#FFC627,#FFFFFF,#5C6670,#FFFFFF,#94E864,#00A3E0",atom_one_dark:"#121417,#2F343D,#2F343D,#ABB2BF,#2F343D,#ABB2BF,#98C379,#98C379",aubergine:"#4D394B,#3E313C,#4C9689,#FFFFFF,#3E313C,#FFFFFF,#38978D,#EB4D5C",autumn:"#194234,#9c2e33,#E7C12e,#194234,#9c2e33,#FFFFFF,#ee6030,#9C2E33",awa:"#222222,#333333,#444444,#FFFFFF,#333333,#FFFFFF,#38978D,#fc7459",b_mind:"#1d1d1d,#000000,#0ba8ca,#FFFFFF,#075566,#FFFFFF,#0ba8ca,#EB4D5C",base16_default_dark:"#181818,#585858,#7cafc2,#f8f8f8,#b8b8b8,#f8f8f8,#f7ca88,#ab4642",base16_eighties_dark:"#393939,#2D2D2D,#F2777A,#FFFFFF,#515151,#D3D0C8,#99CC99,#66CCCC",base16_eighties_light:"#F2F0EC,#E8E6DF,#F2777A,#FFFFFF,#515151,#515151,#99CC99,#66CCCC",base16_ocean_dark:"#2b303b,#16181f,#4f5b66,#c0c5ce,#343d46,#a7adba,#a3be8c,#bf616a",base16_tomorrow_night:"#191A1C,#282A2E,#B6BC68,#FFFFFF,#363B41,#959896,#80A2BE,#C26161",bcit:"#003E6B,#000a52,#73AD0D,#FFFFFF,#D37C71,#FFFFFF,#F79F66,#F15340",beaver_builders:"#F7941E,#FFB963,#FFB963,#110000,#F5A849,#110000,#3D0000,#507DAA",big_red:"#754242,#BD3737,#9C4444,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668",bolket:"#020623,#020623,#00B993,#FFFFFF,#41465c,#FFFFFF,#52eb7b,#FF2154",bourbon:"#CF7C44,#CF7C44,#E89A6B,#F7DB72,#FBEDD4,#FFFAFC,#92406A,#92406A",brinjal:"#4F2F4C,#452842,#8C5888,#FFFFFF,#3E313C,#FFFFFF,#00FFB7,#DE4C0D",chargify:"#2C2C26,#229725,#13C217,#FFFFFF,#229725,#FFFFFF,#13C217,#439AEA",charity_water:"#f4f5f0,#FFFFFF,#efd213,#FFFFFF,#EFD213,#333232,#59c77f,#fa575d",chicago_cubs:"#0E3386,#133a94,#D12325,#FFFFFF,#a31a1c,#FFFFFF,#D12325,#D12325",choco_mint:"#544538,#42362B,#5DB09D,#FFFFFF,#4A3C30,#FFFFFF,#FFFFFF,#5DB09D",christmas:"#138724,#1B5E48,#db2e3f,#FFFFFF,#2D9A48,#FFFFFF,#1B5E48,#DB2E3F",citrus:"#507800,#94AF63,#FFEA00,#507800,#94AF63,#FFFFFF,#F7FF00,#FF9900",cleveland_browns:"#342624,#000000,#EC5614,#FFFFFF,#7C7E7C,#FFFFFF,#EC5614,#EC5614",cobalt2:"#193549,#FFC600,#1D425D,#FFFFFF,#0085FF,#FFFFFF,#2CDB00,#FFC600",codemash:"#0c84a9,#f67f01,#94C53C,#FFFFFF,#16A1C8,#FFFFFF,#FFFFFF,#94C53C",contentful:"#192532,#263545,#19cd91,#FFFFFF,#263545,#FFFFFF,#19cd91,#f05751",convoy:"#3A3D3F,#3A3D3F,#D84315,#FFFFFF,#3A3D3F,#FFFFFF,#48B8AD,#D84315",craftcms:"#333F4E,#47525F,#DA513D,#FFFFFF,#47525F,#F8F8F8,#DA513D,#DA513D",dallas_stars:"#000000,#A7A8AC,#016F4A,#FFFFFF,#339E7A,#FFFFFF,#339E7A,#016F4A",danny_torrence:"#751C01,#5C1500,#FFFFFF,#751C01,#AD2A02,#FFFFFF,#FFFFFF,#AD2A02",dark_zenburn:"#333333,#1E2320,#709080,#FFFFFF,#1E2320,#FFFFFF,#F0DFAF,#CC9393",dd:"#222222,#111111,#111111,#66AADD,#555555,#EEEEEE,#66DD66,#DD666D",decred:"#0c1e3e,#153161,#2970ff,#FFFFFF,#153161,#FFFFFF,#2ed6a1,#2ed6a1",deep_blue:"#0074B2,#0083CA,#00A2FF,#FFFFFF,#00A5FF,#FFFFFF,#03EEFF,#00CCC2",delta:"#253346,#434f61,#434f61,#FFFFFF,#434f61,#f4f5f7,#44DB5E,#f72951",design_hub:"#1B549E,#1B549E,#19C0E7,#FFFFFF,#19C0E7,#FFFFFF,#19C0E7,#FFFFFF",devrant:"#40415a,#54556e,#f99a66,#ffffff,#54556e,#ffffff,#d55161,#d55161",digitalocean:"#3686BE,#215F8B,#7DB461,#FFFFFF,#2E3234,#FFFFFF,#7DB461,#215F8B",discord:"#2e3136,#282b30,#282b30,#ffffff,#282b30,#818386,#43b581,#7289da",dobby_purple:"#6236ba,#56A656,#56a656,#FFFFFF,#56A656,#ffffff,#D0FF00,#889100",dolly_dark:"#635C5A,#564F4D,#E7412A,#FFFFFF,#564F4D,#FFFFFF,#8DA600,#0EA7B5",dolly_light:"#FAFAFA,#F3F3F3,#E7412A,#FFFFFF,#EDEDED,#564F4D,#8DA600,#0EA7B5",douglas_rain:"#EDECEB,#E3E3E3,#DA552F,#FFFFFF,#D6D6D6,#534540,#DA552F,#DA552F",dracula:"#282A36,#44475A,#44475A,#8BE9FD,#6272A4,#FFFFFF,#50FA7B,#FF5555",draft_u_s_web_design_standards:"#112E51,#205493,#0071BC,#FFFFFF,#323A45,#FFFFFF,#4AA564,#981B1E",dropbox:"#007EE5,#007EE5,#47525D,#FFFFFF,#7B8994,#FFFFFF,#47525D,#47525D",drund:"#181818,#202020,#99CB3F,#FFFFFF,#202020,#FFFFFF,#99CB3F,#F7124E",drupal_twig:"#6fa36f,#3E313C,#01690b,#ffff00,#3E313C,#ffffff,#faff78,#ed687e",ega:"#0000AA,#00AAAA,#FF55FF,#FFFFFF,#00AAAA,#FFFFFF,#C0C0C0,#FF00FF",elementary_gtk:"#dfdfdf,#f5f5f5,#cecece,#333333,#f5f5f5,#333333,#93d844,#da4d45",ember_js:"#faf4f1,#faf4f1,#E77562,#ffffff,#E5DBD6,#717171,#E46651,#E46651",embl:"#389196,#C3C0AB,#9FCC3B,#008CB5,#C3C0AB,#FFFFFF,#D90F21,#D90f21",facebook:"#4E69A2,#38528B,#38528B,#FFFFFF,#38528B,#FFFFFF,#1FAD38,#CD2323",fc_bayern_munchen:"#B51929,#B51929,#23408E,#BCA26F,#025277,#FFFFFF,#E5D3A0,#B7B6B7",film_noir:"#101010,#101010,#D3D3CA,#BB313E,#424242,#F0F0E6,#BB313E,#BB313E",florida_gators:"#014A83,#053354,#dd661e,#ffffff,#053354,#ffffff,#dd661e,#dd661e",folio_orange:"#DA6A2D,#737272,#38307F,#FFFFFF,#737272,#FFFFFF,#38307F,#38307F",folio_purple:"#38307F,#737272,#DA6A2D,#FFFFFF,#737272,#FFFFFF,#DA6A2D,#DA6A2D",forest:"#033313,#077a07,#02ad44,#FFFFFF,#076e27,#FFFFFF,#94E864,#78AF8F",frame_ai:"#39434D,#272e35,#F26900,#ffffff,#272E35,#ADBED1,#48B8AD,#F3B200",freshbooks:"#0D83DD,#0064BE,#86C620,#FFFFFF,#648C0F,#FFFFFF,#9DFF00,#86C620",front_end_happy_hour:"#2D363F,#D6D8D7,#D6D8D7,#2D363F,#D6D8D7,#FFFFFF,#D6D8D7,#D6D8D7",gartland:"#404040,#696969,#FFD200,#000000,#000000,#FFFFFF,#00703C,#EF4C23",georgia_tech:"#00254C,#15467a,#EEB211,#FFFFFF,#EEB211,#FFFFFF,#C59353,#007BFF",github:"#ffffff,#24292e,#e9f0f7,#1d4880,#ffefc6,#666666,#28a745,#92979b",github_activity_graph:"#333333,#222222,#44A340,#FFFFFF,#8CBE65,#FFFFFF,#D6E685,#1E6823",gitkraken:"#141422,#259692,#259692,#FFFFFF,#4A5664,#ffffff,#ff8800,#FF8800",goodstuff_fm:"#292D36,#000000,#DA5647,#FFFFFF,#333644,#FFFFFF,#57AFBD,#DA5647",gotham:"#0A0F14,#10151B,#265360,#D4EBE9,#D26939,#9BD1CE,#EDB54B,#C33027",green_lantern:"#171717,#404245,#424242,#ECF0F1,#4A4A4A,#FAFAFA,#2ECC71,#00A362",grooveshark:"#181D27,#FD6540,#393F40,#F1F2F4,#393F40,#F1F2F4,#F1F2F4,#FD6540",gruvbox:"#282828,#3c3836,#98971a,#fbf1c7,#3E313C,#EBDBB2,#b8bb26,#fb4934",halloween:"#ff8800,#000000,#ffffff,#000000,#4a5664,#000000,#000000,#736e65",haunter:"#340027,#260024,#FF1962,#FFFFFF,#610047,#FFFFFF,#FF1962,#FF1962",hibari:"#383643,#383643,#EB4864,#FFFFFF,#383643,#FFFFFF,#EB4864,#EB4864",hip:"#F5F5F5,#CCCCCC,#3873AE,#FFFFFF,#E9E9E9,#000000,#69AA4E,#999999",hot_dog_stand:"#C0441C,#91282A,#F79F66,#FFFFFF,#91282A,#FFFFFF,#F79F66,#F15340",hoth:"#F8F8FA,#F8F8FA,#CAD1D9,#FFFFFF,#FFFFFF,#383F45,#60D156,#FF8669",hotpads:"#ffffff,#E5613B,#4EBDA6,#FFFFFF,#E2B708,#777777,#4EBDA6,#BE3410",hummingbird:"#2F343B,#2F343B,#FD7532,#FFFFFF,#FD7532,#FFFFFF,#FD7532,#FD7532",ingress_enlightened:"#000E0F,#000E0F,#393218,#F1C248,#006D77,#34EAF5,#02BF02,#F1C248",ingress_resistence:"#000E0F,#000E0F,#393218,#F1C248,#006D77,#34EAF5,#0492D0,#F1C248",javascript:"#F0DB4F,#F0DB4F,#323330,#FFFFFF,#e6cd2c,#323330,#323330,#323330",juice_bar:"#86A34E,#94AF63,#FFFFFF,#6D8B42,#94AF63,#FFFFFF,#FFB10A,#DFA044",kansas_city_chiefs:"#B51815,#A51815,#FFFFFF,#B51815,#FF1815,#FFD21F,#FFE21F,#FF5555",kawaii:"#FBFBFB,#FBFBFB,#F9C6D6,#5D5759,#8EEADB,#5D5759,#F0A2B8,#F0A2B8",kayako_minimal:"#40364D,#312a3c,#312A3C,#F58D8C,#312A3C,#a097ad,#F58D8C,#F58D8C",kill_bill:"#FDE13A,#FDE13A,#000000,#E72D25,#FFF09E,#000000,#E72D25,#E72D25",kimbie:"#F3E3CD,#F3E3CD,#F3951D,#DA3D61,#F26328,#183E1C,#DA3D61,#F26328",kkbox:"#00AED8,#00AEDF,#C5CC13,#000000,#FBB040,#FFFFFF,#2DEBAE,#EE2B74",kktown:"#FFD552,#FFffff,#FFffff,#30322A,#ECEEF2,#30322A,#17B5DA,#17B5DA",kktv:"#282828,#551127,#79092b,#f5f5f5,#111111,#cccccc,#f04b6e,#b40f42",laravel:"#F56262,#F56262,#424242,#F5F5F5,#ed5151,#F5F5F5,#F5F5F5,#424242",laravel_light:"#FAFAFA,#FB503B,#FB503B,#FFFFFF,#F58F82,#1C1B1C,#FB503B,#424242",latte:"#C17F46,#C17F46,#CFA677,#DCBF98,#FBEDD4,#EFEFEF,#EAECF1,#EAECF1",latte_time:"#ebe5da,#d6b498,#c2804a,#ffffff,#b09582,#000000,#009917,#d95b5b",librato:"#262626,#555555,#0F80AA,#FFFFFF,#555555,#FFFFFF,#99D04A,#DCAF1B",light_blue:"#89A1AB,#7D949E,#FFFFFF,#748991,#748991,#FFFFFF,#B3FF00,#748991",lightning:"#f4f6f9,#e0e5ee,#d8edff,#0070d2,#e0e5ee,#16325c,#4bca81,#c23934",linux_mint_y_dark:"#353535,#2f2f2f,#8fa876,#ffffff,#8fa876,#ffffff,#818181,#8fa876",luizalabs:"#0074B2,#0083CA,#B26500,#FFFFFF,#00A5FF,#FFFFFF,#FF9000,#FF9000",macos:"#F1F3F5,#DAD8DA,#D3DFE3,#303030,#C2E2ED,#303030,#1682FB,#34C749",madsoft:"#4A3A55,#3A2A45,#8A7A95,#FFFFFF,#2A1A35,#FFFFFF,#22CC88,#CC2288",makers:"#663399,#592D86,#8F6DB0,#FFFFFF,#3E313C,#FFFFFF,#FFFFFF,#EB4D5C",material:"#263238,#263238,#263238,#64fcda,#546e7a,#eceff1,#40c4ff,#ff5252",material_blue_grey:"#607D8B,#546E7A,#90A4AE,#FFFFFF,#455A64,#FFFFFF,#B2FF59,#EF5350",material_dark_blue_grey:"#212121,#212121,#607D8B,#FFFFFF,#607D8B,#FFFFFF,#607D8B,#607D8B",material_dark_indigo:"#212121,#212121,#3F51B5,#FFFFFF,#3F51B5,#FFFFFF,#3F51B5,#3F51B5",material_indigo:"#3F51B5,#303F9F,#303F9F,#FFFFFF,#303F9F,#FFFFFF,#B2FF59,#9FA8DA",mautic:"#6044db,#500ba3,#f0b31a,#FFFFFF,#997929,#ffffff,#f0b31a,#a92ab0",mean_green:"#278F0D,#19780C,#070708,#FFFFFF,#19780C,#FFFFFF,#F7FF00,#FF8669",metafilter:"#065a8f,#267aaf,#7DB461,#FFFFFF,#2E3234,#FFFFFF,#7DB461,#215F8B",metal_blue:"#36414C,#4D5561,#515C6B,#FFFFFF,#4D5561,#FFFFFF,#B3CAF0,#8097BD",midnight_pink:"#34495e,#16a085,#1abc9c,#FFFFFF,#16A085,#ecf0f1,#FF2A68,#FF2A68",mint:"#212420,#333632,#87CF3E,#FFFFFF,#393d39,#FFFFFF,#87CF3E,#68a030",minty:"#0D7E83,#076570,#32b377,#FFFFFF,#72d4c0,#FFFFFF,#bef200,#F15340",mockingbot:"#27364E,#1A2535,#F55D54,#F2F2F4,#1A2535,#E6E6E9,#F6756D,#F55D54",monokai:"#222222,#2F2F2F,#F92772,#FFFFFF,#A6E22D,#FFFFFF,#66D9EF,#BE84F2",monument:"#0D7E83,#076570,#F79F66,#FFFFFF,#D37C71,#FFFFFF,#F79F66,#F15340",myplanet:"#2A2A49,#9292A8,#F25930,#FFFFFF,#9292A8,#EEEDEF,#F25930,#D5315C",n64:"#319b44,#0047b3,#db3236,#ffff00,#0047B3,#FFFFFF,#FFFF00,#db3236",naked_apartments:"#ffffff,#CCCCCC,#3F9DBC,#FFFFFF,#E46700,#777777,#3F9DBC,#BE3410",netflix:"#1F1C18,#8E0E00,#8E0E00,#FFFFFF,#A1A09F,#FFFFFF,#B01D0C,#8E0E00",newride_tech:"#000000,#000000,#355C7D,#ffffff,#222222,#ffffff,#b82601,#EFC000",nitro_marketing_digital:"#444444,#157477,#e4e4e4,#666666,#888888,#ffffff,#5ae043,#1de2e7",nitronews:"#284589,#3464d4,#FF6600,#FFFFFF,#445970,#FFFFFF,#00C19B,#FF6600",nord:"#2E3440,#3B4252,#88C0D0,#2E3440,#3B4252,#D8DEE9,#A3BE8C,#81A1C1",numix:"#333333,#2d2d2d,#2d2d2d,#f9f9f9,#2d2d2d,#dedede,#d64937,#d64937",ochin:"#303E4D,#2C3849,#6698C8,#FFFFFF,#4A5664,#FFFFFF,#94E864,#78AF8F",oktavilla:"#F9F6F1,#F9F6F1,#FF3300,#FFFFFF,#FF3300,#1E1E1E,#FF3300,#B3D4FD",one_dark:"#21252B,#272C33,#31363F,#D7DAE0,#272C33,#D7DAE0,#20B684,#528BFF",opendata_cz:"#057fa5,#034F75,#ffffff,#057fa5,#034F75,#FFFFFF,#99D04A,#ff9800",osticket:"#F68D29,#F99A3F,#F99A3F,#FFFFFF,#ED8624,#FFFFFF,#FFFFFF,#F9A55A",peter_sellers:"#0D2D4F,#0A2440,#639DD4,#FFFFFF,#3E6796,#FFFFFF,#94E864,#5990CF",phone_box:"#003D67,#003D67,#FFFFFF,#003D67,#00548C,#FFFFFF,#0099FF,#006752",photon:"#eeeeee,#dddddd,#dddddd,#333333,#dddddd,#333333,#ff6600,#ff6600",php:"#8892BF,#4F5B93,#4F5B93,#FFFFFF,#CBCCD4,#FFFFFF,#4F5B93,#F15340",pinnaca:"#3396d3,#4c4c4c,#d43f27,#FFFFFF,#3E313C,#FFFFFF,#ffffff,#253c4e",pittsburgh_penguins:"#CEC18A,#ffffff,#000000,#FFFFFF,#FFFFFF,#000000,#ffff00,#000000",playstation:"#173f85,#0072CE,#0072ce,#FFFFFF,#0072CE,#FFFFFF,#FFDA00,#FFDA00",playstation_classic:"#ffffff,#B1B3B3,#63666a,#FFFFFF,#b1b3b3,#000000,#0072ce,#0072ce",plug_dj:"#1C1F25,#282C35,#925AFF,#FFFFFF,#925AFF,#FFFFFF,#89BE6C,#DB182E",polygon:"#C10048,#920A3D,#2E0002,#FFFFFF,#610A29,#FFFFFF,#FFFFFF,#610A29",polymer:"#1F2036,#7986CB,#FE528C,#FFFFFF,#606BA2,#FFFFFF,#2DEBAE,#FE528C",pouchdb:"#F6F6F6,#EEEEEE,#FA3649,#FFFFFF,#FFFFFF,#000000,#60D156,#FA3649",product_hunt:"#FFFFFF,#EDECEB,#DA552F,#FFFFFF,#FCF5E2,#534540,#DA552F,#FF8669",purple_daydream:"#352e59,#2d274f,#0076bf,#FFFFFF,#2D274F,#ffffff,#94E864,#78AF8F",put_io:"#FFFFFF,#FDCE45,#FDCE45,#0F1216,#ECEEF2,#0F1216,#1FAE7D,#1FAE7D",python:"#306998,#FFD43B,#FFD43B,#7F7F7F,#5A9FD4,#F4F4F4,#FFE873,#FFD43B",railway_clock:"#FFFFFF,#FFFFFF,#E0E0E0,#E1382F,#F2F2F2,#050505,#E1382F,#E1382F",redaxo:"#324050,#283542,#4b9ad9,#FFFFFF,#283542,#CFD8E5,#3bb594,#EB4D5C",reddit:"#F7F7F7,#CEE3F8,#B3CCE6,#FF3000,#B3CCE6,#336699,#38978D,#FF7500",retro_monochrome_terminal:"#000000,#000000,#006600,#00ff00,#00ff00,#00ff00,#ff0000,#ff0000",saiku_analytics:"#AE1817,#AE1817,#232323,#FFFFFF,#999999,#FFFFFF,#333333,#232323",seatgeek:"#0B62CD,#1673E6,#78D30A,#ffffff,#1673E6,#ffffff,#78d30a,#D34C4C",sky_blue:"#A5C0CC,#62A5BF,#1A91BD,#F5F5F5,#BAD8E3,#170317,#38978D,#EB4D5C",skype:"#F0F4F8,#39B1DF,#C7EDFC,#000000,#F0F4F8,#000000,#7FBA00,#FF8C00",slack_white:"#FFFFFF,#FFFFFF,#FFFFFF,#2288CC,#2288CC,#454449,#93CC93,#2288CC",slack_com:"#573D82,#453068,#3FBA91,#FFFFFF,#453068,#FFFFFF,#3FBA91,#FF3E88",smooch_io:"#373352,#1a123b,#a347b7,#FFFFFF,#1a123b,#d6e0ff,#d15fea,#A347B7",snazzy:"#282a36,#2D2D2D,#ff5c57,#ffffff,#515151,#dee1db,#5af78e,#57c7ff",social_tables_blue:"#494949,#65A0D6,#49C6B7,#FFFFFF,#898B8F,#FFFFFF,#9ECD75,#E6615D",social_tables_pink:"#494949,#CB5599,#49C6B7,#FFFFFF,#898B8F,#FFFFFF,#9ECD75,#E6615D",socialsign_in:"#112539,#112539,#2DA89C,#FFFFFF,#004365,#FFFFFF,#2DEBAE,#2DEBAE",solanum:"#4F2F4C,#452842,#8C5888,#FFFFFF,#3E313C,#FFFFFF,#D0FF00,#889100",solarized:"#FDF6E3,#EEE8D5,#93A1A1,#FDF6E3,#EEE8D5,#657B83,#2AA198,#DC322F",solarized_dark:"#073642,#002B36,#B58900,#FDF6E3,#CB4B16,#FDF6E3,#2AA198,#DC322F",son_of_obsidian:"#293134,#2F393C,#293134,#93C763,#2F393C,#81969A,#EC7600,#EC7600",space_gray:"#303E4D,#2C3849,#B04C58,#FFFFFF,#4A5664,#B3B8C4,#94E864,#78AF8F",spotify:"#1A1919,#1A1919,#EDEBE6,#7DBA4A,#4F4D4D,#FFFFFF,#7DBA4A,#7DBA4A",spreadfamily:"#f1f1f1,#DDDDDD,#ff5d02,#FFFFFF,#DDDDDD,#000000,#28a05a,#ff5d02",spring_tree:"#EB4D5C,#EB4D5C,#A6D6A1,#3C3865,#3C3865,#FFFFFF,#3C3865,#F18E2C",sqool_by_unowhy:"#003554,#073c57,#006494,#FFFFFF,#006494,#FFFFFF,#00A6FB,#EB4D5C",starbucks:"#0A6242,#0A6242,#3D3935,#BC7E3B,#BC7E3B,#F7F7F7,#3D3935,#3D3935",stark_contrast:"#000000,#A51C24,#FFFFFF,#0320FF,#A5A5A5,#FFFFFF,#FFFFFF,#FFFF00",streeteasy:"#ffffff,#ffffff,#236ABE,#FFFFFF,#236ABE,#000000,#236ABE,#BE3410",summer_craze:"#B300B3,#23A61C,#FFFFFF,#C400FF,#FF2EFF,#000000,#F7FF00,#F7FF00",symfony:"#000000,#000000,#7aba20,#FFFFFF,#000000,#FFFFFF,#7aba20,#0088cc",system76:"#574f4a,#48b9c7,#faa41a,#FFFFFF,#48b9c7,#FFFFFF,#26d076,#dc4405",team_pizza:"#2C2B32,#534C55,#FFB24C,#2C2B32,#534C55,#EEEDEF,#B8E986,#FF884E",terminal:"#101010,#000000,#FFFFFF,#000000,#A0A0A0,#FFFFFF,#00A400,#5858FE",the_changelog:"#2B2D2D,#4A4C4D,#428BCA,#FFFFFF,#428BCA,#FFFFFF,#67D044,#DE495B",the_incomparable:"#1B1C5B,#1B1C5B,#8E3441,#FFFFFF,#914751,#FFFFFF,#2ACB46,#F5804F",thinkific:"#042e47,#072333,#072333,#1b9eea,#072333,#FFFFFF,#1b9eea,#1b9eea",thoroughcare:"#245b61,#245b61,#72d4c0,#FFFFFF,#b0c1c4,#FFFFFF,#bef200,#F15340",tomorrow:"#1d1f21,#282a2e,#282a2e,#c5c8c6,#282a2e,#c5c8c6,#5f89ac,#5f89ac",trello:"#0079BF,#026AA7,#5BA4CF,#FFFFFF,#026AA7,#FFFFFF,#61BD4F,#EB5A46",tron:"#000000,#000000,#1EB8EB,#000000,#424242,#FFFFFF,#1EB8EB,#1EB8EB",trulia:"#37B449,#2D9A48,#1B5E48,#FFFFFF,#2D9A48,#FFFFFF,#1B5E48,#EB4D5C",twitch:"#7d5bbe,#6441a4,#6441a4,#ffffff,#6441a4,#ffffff,#6441a4,#6441a4",twitter:"#55ACEE,#55ACEE,#E1E8ED,#292F33,#ADDCFF,#F5F8FA,#E1E8ED,#E1E8ED",typo3:"#292929,#252525,#252525,#f5f5f5,#252525,#B5B5B5,#79a548,#c83c3c",uber_dark:"#151525,#3A3A48,#1EACC7,#F2F2F4,#3A3A48,#E6E6E9,#79D6E6,#4CC8DE",uber_light:"#F2F2F4,#E6E6E9,#1FBAD6,#FFFFFF,#C0C0C8,#151525,#1FBAD6,#4CC8DE",university_of_texas:"#BF5700,#333F48,#FFFFFF,#333F48,#333F48,#FFFFFF,#94E864,#00A3E0",vegas_golden_knights:"#333333,#85714D,#85714D,#FFFFFF,#85714D,#FFFFFF,#E31837,#E31837",vue_js:"#34495E,#42B983,#42B983,#FFFFFF,#42B983,#FFFFFF,#FFD41D,#42B983",wamein:"#BB6A76,#AD5B67,#62B791,#FFFFFF,#A5516A,#FFFFFF,#68F798,#694464",washington_huskies:"#363C74,#000000,#E8D3A2,#363C74,#000000,#FFFFFF,#E8D3A2,#B7A57A",watermelon:"#2B7164,#2B7164,#51A050,#EC2262,#CECCB2,#032342,#DA3D61,#CECCB2",waze:"#93C4D3,#FFFFFF,#93C4D3,#FFFFFF,#FFFFFF,#173C4C,#66CC33,#173C4C",wearelatech:"#2b2b2b,#f02109,#f9fc00,#2b2b2b,#2b2b2b,#FFFFFF,#66ed00,#ec34ff",wedgies:"#222222,#333333,#3F96CA,#F9F9F9,#4A5664,#FFFFFF,#3F96CA,#EFC000",wegman:"#E3DAE6,#B49FC2,#5A30B0,#FDF6E3,#EEE8D5,#594275,#B358BF,#BD72CC",wild_cherry:"#2B1F32,#FFB86C,#E15D97,#FFFFFF,#4A1386,#FFFFFF,#35BA66,#0AACC5",willowtree_dark:"#308390,#1BD9C4,#1BD9C4,#FFFFFF,#40C1BB,#f0f0f4,#1bd9c4,#DB6668",willowtree_light:"#f9f9f9,#1BD9C4,#1BD9C4,#094074,#1BD9C4,#308390,#1bd9c4,#DB6668",windows_3_1:"#FFFFFF,#C0C0C0,#001F7E,#FFFFFF,#C0C0C0,#000000,#001F7E,#C0C0C0",windows_95:"#327C7E,#001F7E,#001F7E,#FFFFFF,#001F7E,#FFFFFF,#C0C0C0,#C0C0C0",windows_xp:"#F0EDE0,#0054E3,#0054E3,#FFFFFF,#0054E3,#000000,#ED6D3A,#ED6D3A",wordpress:"#333333,#222222,#0074A2,#FFFFFF,#111111,#FFFFFF,#7AD03A,#D54E21",work_hard:"#4D5250,#444A47,#D39B46,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668",xunit_net:"#162C16,#444A47,#663333,#FFFFFF,#995050,#FFFFFF,#E0E066,#DB6668",yeoman:"#5AADBB,#076570,#F5D087,#FFFFFF,#D37C71,#262222,#DD002A,#F15340",yosemite_itunes:"#FAFAFA,#FAFAFA,#0F82FF,#FFFFFF,#D4E7FF,#404040,#62D962,#E92242",yotsuba:"#ffffee,#f0e0d6,#f0e0d6,#800000,#f0e0d6,#800000,#0000ee,#0000ee",yotsuba_b:"#eef2ff,#d6daf0,#d6daf0,#000000,#d6daf0,#000000,#34345c,#34345c",youtube:"#FFFFFF,#CC181E,#CC181E,#FFFFFF,#444444,#0D0D0D,#CC181E,#E04A4D",zebra:"#131313,#424242,#424242,#BDC3C7,#424242,#bdc3c7,#2ecc71,#e74c3c",zeplin:"#F5F5F5,#FFFFFF,#FDBD39,#FFFFFF,#FECF33,#574751,#A4BF36,#EE6723",ziik_io:"#DEE2E6,#ffffff,#0279f9,#FFFFFF,#ffffff,#37393c,#0279f9,#0279F9",zillow:"#235ce2,#6BB700,#6BB700,#FFFFFF,#262626,#FFFFFF,#6BB700,#EB4D5C"};F.$on("$stateChangeSuccess",function(){F.slug=f.slug}),F.$watch("slug",function(f){if(f){if("custom"===f)return void(F.colors=E.hash().split(",").map(function(F){return"#"+F}).join(","));F.colors=e[F.slug],D.go("theme",{slug:f})}}),F.$watch("colors",function(f){function C(){E.hash(A.map(function(F){return F.replace("#","")}))}if(f){var A=f.split(",");F.column_bg=A[0],F.menu_bg=A[1],F.active_item=A[2],F.active_item_text=A[3],F.hover_item=A[4],F.text_color=A[5],F.active_presence=A[6],F.mention_badge=A[7],"custom"===F.slug?C():f!==e[F.slug]&&D.go("theme",{slug:"custom"}).then(C)}})}]);