// PittFan Follow up compression into 1 version, variables and stim lists
// July 2022

workerGroups = [
{group: 1, members: ['A', 'B', 'C', 'D', 'E', 'F']},
{group: 2, members: ['G', 'H', 'I', 'J', 'K', 'L']},
{group: 3, members: ['M', 'N', 'O', 'P', 'Q', 'R']},
{group: 4, members: ['S', 'T', 'U', 'V', 'W', 'X']},
{group: 5, members: ['Y', 'Z', '1', '2', '3', '4']},
{group: 6, members: ['5', '6', '7', '8', '9', '0']}
];
// theoretically, 0-5 indexes

/* Encoding: 6 counterbalancing conditions, order 1: dist 1,2,3 and order 2: dist 1 2 3 
Collapsed into one session, with intervening task for blank sessions   
3 categories are spearate, load in separate variables and then randomize pres order IN SCRIPT  
All encoding Day 1, Memory test day 2 
Item Mem: order 1 [1-3] vs 2 [4-6], with foils [old/new recog] 
Associative Mem: order 1 vs 2, choose scene with cued item. */


var practice_list_item = ['animal23.jpg','toca22.jpg','tool22.jpg'];
var practice_list_scene = ['cart_scene37.jpg','fam_scene37.jpg','ind_scene37.jpg'];
	

var encoding_stim_list = [
	{
		group: 1,
		label:            ['AC1','F1_wnsession','F1_wnsession','F1_wnsession','F1_wnsession','R1_acrday','F2_acrday','WNC_wnsession','WNC_wnsession','WNC_wnsession','WNC_wnsession','R1_acrday','F2_acrday','AC2','R1_acrday','F2_acrday','R1_acrday','F2_acrday','AC3','R2_acrsession','R2_acrsession','R2_acrsession','R2_acrsession','R3_wnsession','R3_wnsession','R3_wnsession','R3_wnsession','AC4','F3_acrsession','F3_acrsession','F3_acrsession','F3_acrsession'],
		condition:        ['acr','fan','fan','fan','fan','rep','fan','wnc','wnc','wnc','wnc','rep','fan','acr','rep','fan','rep','fan','acr','rep','rep','rep','rep','rep','rep','rep','rep','acr','fan','fan','fan','fan'],
		pairNum:          [1,1,1,1,1,1,2,1,2,3,4,1,2,2,1,2,1,2,3,2,2,2,2,3,3,3,3,4,3,3,3,3],
		numWithin:        [1,1,2,3,4,1,1,1,2,3,4,2,2,2,3,3,4,4,3,1,2,3,4,1,2,3,4,4,1,2,3,4],
		spacingLabel:     [3,1,1,1,1,3,3,1,1,1,1,3,3,3,3,3,3,3,3,2,2,2,2,1,1,1,1,3,2,2,2,2],
		day:              [1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,4,4,5,5,6,6,6,6,7,7,7,7,7,8,8,8,8],
		session:          [1,3,3,3,3,4,1,2,2,2,2,4,1,2,4,1,4,1,4,1,2,3,4,1,1,1,1,3,1,2,3,4],
		itemNum:          [11,1,1,1,1,4,2,7,8,9,10,4,2,12,4,2,4,2,13,5,5,5,5,6,6,6,6,14,3,3,3,3],
		sceneNum:         [20,1,2,3,4,13,5,16,17,18,19,13,6,21,13,7,13,8,22,14,14,14,14,15,15,15,15,23,9,10,11,12],
		tocaItemStims:    ['toca11.jpg','toca1.jpg','toca1.jpg','toca1.jpg','toca1.jpg','toca4.jpg','toca2.jpg','toca7.jpg','toca8.jpg','toca9.jpg','toca10.jpg','toca4.jpg','toca2.jpg','toca12.jpg','toca4.jpg','toca2.jpg','toca4.jpg','toca2.jpg','toca13.jpg','toca5.jpg','toca5.jpg','toca5.jpg','toca5.jpg','toca6.jpg','toca6.jpg','toca6.jpg','toca6.jpg','toca14.jpg','toca3.jpg','toca3.jpg','toca3.jpg','toca3.jpg'],
		tocaSceneStims:   ['fam_scene20.jpg','fam_scene1.jpg','fam_scene2.jpg','fam_scene3.jpg','fam_scene4.jpg','fam_scene13.jpg','fam_scene5.jpg','fam_scene16.jpg','fam_scene17.jpg','fam_scene18.jpg','fam_scene19.jpg','fam_scene13.jpg','fam_scene6.jpg','fam_scene21.jpg','fam_scene13.jpg','fam_scene7.jpg','fam_scene13.jpg','fam_scene8.jpg','fam_scene22.jpg','fam_scene14.jpg','fam_scene14.jpg','fam_scene14.jpg','fam_scene14.jpg','fam_scene15.jpg','fam_scene15.jpg','fam_scene15.jpg','fam_scene15.jpg','fam_scene23.jpg','fam_scene9.jpg','fam_scene10.jpg','fam_scene11.jpg','fam_scene12.jpg'],
		animalItemStims:  ['animal11.jpg','animal1.jpg','animal1.jpg','animal1.jpg','animal1.jpg','animal4.jpg','animal2.jpg','animal7.jpg','animal8.jpg','animal9.jpg','animal10.jpg','animal4.jpg','animal2.jpg','animal12.jpg','animal4.jpg','animal2.jpg','animal4.jpg','animal2.jpg','animal13.jpg','animal5.jpg','animal5.jpg','animal5.jpg','animal5.jpg','animal6.jpg','animal6.jpg','animal6.jpg','animal6.jpg','animal14.jpg','animal3.jpg','animal3.jpg','animal3.jpg','animal3.jpg'],
		animalSceneStims: ['cart_scene20.jpg','cart_scene1.jpg','cart_scene2.jpg','cart_scene3.jpg','cart_scene4.jpg','cart_scene13.jpg','cart_scene5.jpg','cart_scene16.jpg','cart_scene17.jpg','cart_scene18.jpg','cart_scene19.jpg','cart_scene13.jpg','cart_scene6.jpg','cart_scene21.jpg','cart_scene13.jpg','cart_scene7.jpg','cart_scene13.jpg','cart_scene8.jpg','cart_scene22.jpg','cart_scene14.jpg','cart_scene14.jpg','cart_scene14.jpg','cart_scene14.jpg','cart_scene15.jpg','cart_scene15.jpg','cart_scene15.jpg','cart_scene15.jpg','cart_scene23.jpg','cart_scene9.jpg','cart_scene10.jpg','cart_scene11.jpg','cart_scene12.jpg'],
		toolItemStims:    ['tool11.jpg','tool1.jpg','tool1.jpg','tool1.jpg','tool1.jpg','tool4.jpg','tool2.jpg','tool7.jpg','tool8.jpg','tool9.jpg','tool10.jpg','tool4.jpg','tool2.jpg','tool12.jpg','tool4.jpg','tool2.jpg','tool4.jpg','tool2.jpg','tool13.jpg','tool5.jpg','tool5.jpg','tool5.jpg','tool5.jpg','tool6.jpg','tool6.jpg','tool6.jpg','tool6.jpg','tool14.jpg','tool3.jpg','tool3.jpg','tool3.jpg','tool3.jpg'],
		toolSceneStims:   ['ind_scene20.jpg','ind_scene1.jpg','ind_scene2.jpg','ind_scene3.jpg','ind_scene4.jpg','ind_scene13.jpg','ind_scene5.jpg','ind_scene16.jpg','ind_scene17.jpg','ind_scene18.jpg','ind_scene19.jpg','ind_scene13.jpg','ind_scene6.jpg','ind_scene21.jpg','ind_scene13.jpg','ind_scene7.jpg','ind_scene13.jpg','ind_scene8.jpg','ind_scene22.jpg','ind_scene14.jpg','ind_scene14.jpg','ind_scene14.jpg','ind_scene14.jpg','ind_scene15.jpg','ind_scene15.jpg','ind_scene15.jpg','ind_scene15.jpg','ind_scene23.jpg','ind_scene9.jpg','ind_scene10.jpg','ind_scene11.jpg','ind_scene12.jpg'],
		idx_wnsess_full:  [3,4,5,9,10,11,25,26,27,35,36,37,41,42,43,57,58,59,67,68,69,73,74,75,89,90,91]
	},
	{
		group: 2,
		label:            ['F1_acrsession','F1_acrsession','F1_acrsession','F1_acrsession','R1_acrsession','R1_acrsession','R1_acrsession','R1_acrsession','F2_wnsession','F2_wnsession','F2_wnsession','F2_wnsession','AC1','AC2','R2_wnsession','R2_wnsession','R2_wnsession','R2_wnsession','R3_acrday','AC3','F3_acrday','R3_acrday','AC4','F3_acrday','R3_acrday','F3_acrday','R3_acrday','WNC_wnsession','WNC_wnsession','WNC_wnsession','WNC_wnsession','F3_acrday'],
		condition:        ['fan','fan','fan','fan','rep','rep','rep','rep','fan','fan','fan','fan','acr','acr','rep','rep','rep','rep','rep','acr','fan','rep','acr','fan','rep','fan','rep','wnc','wnc','wnc','wnc','fan'],
		pairNum:          [1,1,1,1,1,1,1,1,2,2,2,2,1,2,2,2,2,2,3,3,3,3,4,3,3,3,3,1,2,3,4,3],
		numWithin:        [1,2,3,4,1,2,3,4,1,2,3,4,1,2,1,2,3,4,1,3,1,2,4,2,3,3,4,1,2,3,4,4],
		spacingLabel:     [2,2,2,2,2,2,2,2,1,1,1,1,3,3,1,1,1,1,3,3,3,3,3,3,3,3,3,1,1,1,1,3],
		day:              [1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,6,6,6,7,7,8,8,8,8,8,8],
		session:          [1,2,3,4,1,2,3,4,2,2,2,2,4,1,3,3,3,3,1,2,4,1,3,4,1,4,1,3,3,3,3,4],
		itemNum:          [1,1,1,1,4,4,4,4,2,2,2,2,11,12,5,5,5,5,6,13,3,6,14,3,6,3,6,7,8,9,10,3],
		sceneNum:         [1,2,3,4,13,13,13,13,5,6,7,8,20,21,14,14,14,14,15,22,9,15,23,10,15,11,15,16,17,18,19,12],
		tocaItemStims:    ['toca1.jpg','toca1.jpg','toca1.jpg','toca1.jpg','toca4.jpg','toca4.jpg','toca4.jpg','toca4.jpg','toca2.jpg','toca2.jpg','toca2.jpg','toca2.jpg','toca11.jpg','toca12.jpg','toca5.jpg','toca5.jpg','toca5.jpg','toca5.jpg','toca6.jpg','toca13.jpg','toca3.jpg','toca6.jpg','toca14.jpg','toca3.jpg','toca6.jpg','toca3.jpg','toca6.jpg','toca7.jpg','toca8.jpg','toca9.jpg','toca10.jpg','toca3.jpg'],
		tocaSceneStims:   ['fam_scene1.jpg','fam_scene2.jpg','fam_scene3.jpg','fam_scene4.jpg','fam_scene13.jpg','fam_scene13.jpg','fam_scene13.jpg','fam_scene13.jpg','fam_scene5.jpg','fam_scene6.jpg','fam_scene7.jpg','fam_scene8.jpg','fam_scene20.jpg','fam_scene21.jpg','fam_scene14.jpg','fam_scene14.jpg','fam_scene14.jpg','fam_scene14.jpg','fam_scene15.jpg','fam_scene22.jpg','fam_scene9.jpg','fam_scene15.jpg','fam_scene23.jpg','fam_scene10.jpg','fam_scene15.jpg','fam_scene11.jpg','fam_scene15.jpg','fam_scene16.jpg','fam_scene17.jpg','fam_scene18.jpg','fam_scene19.jpg','fam_scene12.jpg'],
		animalItemStims:  ['animal1.jpg','animal1.jpg','animal1.jpg','animal1.jpg','animal4.jpg','animal4.jpg','animal4.jpg','animal4.jpg','animal2.jpg','animal2.jpg','animal2.jpg','animal2.jpg','animal11.jpg','animal12.jpg','animal5.jpg','animal5.jpg','animal5.jpg','animal5.jpg','animal6.jpg','animal13.jpg','animal3.jpg','animal6.jpg','animal14.jpg','animal3.jpg','animal6.jpg','animal3.jpg','animal6.jpg','animal7.jpg','animal8.jpg','animal9.jpg','animal10.jpg','animal3.jpg'],
		animalSceneStims: ['cart_scene1.jpg','cart_scene2.jpg','cart_scene3.jpg','cart_scene4.jpg','cart_scene13.jpg','cart_scene13.jpg','cart_scene13.jpg','cart_scene13.jpg','cart_scene5.jpg','cart_scene6.jpg','cart_scene7.jpg','cart_scene8.jpg','cart_scene20.jpg','cart_scene21.jpg','cart_scene14.jpg','cart_scene14.jpg','cart_scene14.jpg','cart_scene14.jpg','cart_scene15.jpg','cart_scene22.jpg','cart_scene9.jpg','cart_scene15.jpg','cart_scene23.jpg','cart_scene10.jpg','cart_scene15.jpg','cart_scene11.jpg','cart_scene15.jpg','cart_scene16.jpg','cart_scene17.jpg','cart_scene18.jpg','cart_scene19.jpg','cart_scene12.jpg'],
		toolItemStims:    ['tool1.jpg','tool1.jpg','tool1.jpg','tool1.jpg','tool4.jpg','tool4.jpg','tool4.jpg','tool4.jpg','tool2.jpg','tool2.jpg','tool2.jpg','tool2.jpg','tool11.jpg','tool12.jpg','tool5.jpg','tool5.jpg','tool5.jpg','tool5.jpg','tool6.jpg','tool13.jpg','tool3.jpg','tool6.jpg','tool14.jpg','tool3.jpg','tool6.jpg','tool3.jpg','tool6.jpg','tool7.jpg','tool8.jpg','tool9.jpg','tool10.jpg','tool3.jpg'],
		toolSceneStims:   ['ind_scene1.jpg','ind_scene2.jpg','ind_scene3.jpg','ind_scene4.jpg','ind_scene13.jpg','ind_scene13.jpg','ind_scene13.jpg','ind_scene13.jpg','ind_scene5.jpg','ind_scene6.jpg','ind_scene7.jpg','ind_scene8.jpg','ind_scene20.jpg','ind_scene21.jpg','ind_scene14.jpg','ind_scene14.jpg','ind_scene14.jpg','ind_scene14.jpg','ind_scene15.jpg','ind_scene22.jpg','ind_scene9.jpg','ind_scene15.jpg','ind_scene23.jpg','ind_scene10.jpg','ind_scene15.jpg','ind_scene11.jpg','ind_scene15.jpg','ind_scene16.jpg','ind_scene17.jpg','ind_scene18.jpg','ind_scene19.jpg','ind_scene12.jpg'],
		idx_wnsess_full:  [10,11,12,16,17,18,29,30,31,42,43,44,48,49,50,61,62,63,74,75,76,80,81,82,93,94,95]
	},
	{
		group: 3,
		label:            ['F1_acrday','AC1','R1_wnsess','R1_wnsess','R1_wnsess','R1_wnsess','AC2','F1_acrday','R2_acrday','F1_acrday','R2_acrday','F1_acrday','R2_acrday','AC3','WNC1_wnsess','WNC1_wnsess','WNC1_wnsess','WNC1_wnsess','R2_acrday','F2_acrsess','F2_acrsess','F2_acrsess','F2_acrsess','AC4','F3_wnsess','F3_wnsess','F3_wnsess','F3_wnsess','R3_acrsess','R3_acrsess','R3_acrsess','R3_acrsess'],
		condition:        ['fan','acr','rep','rep','rep','rep','acr','fan','rep','fan','rep','fan','rep','acr','wnc','wnc','wnc','wnc','rep','fan','fan','fan','fan','acr','fan','fan','fan','fan','rep','rep','rep','rep'],
		pairNum:          [1,1,1,1,1,1,2,1,2,1,2,1,2,3,1,2,3,4,2,2,2,2,2,4,3,3,3,3,3,3,3,3],
		numWithin:        [1,1,1,2,3,4,2,2,1,3,2,4,3,3,1,2,3,4,4,1,2,3,4,4,1,2,3,4,1,2,3,4],
		spacingLabel:     [3,3,1,1,1,1,3,3,3,3,3,3,3,3,1,1,1,1,3,2,2,2,2,3,1,1,1,1,2,2,2,2],
		day:              [1,1,1,1,1,1,2,2,2,3,3,4,4,4,5,5,5,5,5,6,6,6,6,7,7,7,7,7,8,8,8,8],
		session:          [2,3,4,4,4,4,1,2,3,2,3,2,3,4,1,1,1,1,3,1,2,3,4,1,3,3,3,3,1,2,3,4],
		itemNum:          [1,11,4,4,4,4,12,1,5,1,5,1,5,13,7,8,9,10,5,2,2,2,2,14,3,3,3,3,6,6,6,6],
		sceneNum:         [1,20,13,13,13,13,21,2,14,3,14,4,14,22,16,17,18,19,14,5,6,7,8,23,9,10,11,12,15,15,15,15],
		tocaItemStims:    ['toca1.jpg','toca11.jpg','toca4.jpg','toca4.jpg','toca4.jpg','toca4.jpg','toca12.jpg','toca1.jpg','toca5.jpg','toca1.jpg','toca5.jpg','toca1.jpg','toca5.jpg','toca13.jpg','toca7.jpg','toca8.jpg','toca9.jpg','toca10.jpg','toca5.jpg','toca2.jpg','toca2.jpg','toca2.jpg','toca2.jpg','toca14.jpg','toca3.jpg','toca3.jpg','toca3.jpg','toca3.jpg','toca6.jpg','toca6.jpg','toca6.jpg','toca6.jpg'],
		tocaSceneStims:   ['fam_scene1.jpg','fam_scene20.jpg','fam_scene13.jpg','fam_scene13.jpg','fam_scene13.jpg','fam_scene13.jpg','fam_scene21.jpg','fam_scene2.jpg','fam_scene14.jpg','fam_scene3.jpg','fam_scene14.jpg','fam_scene4.jpg','fam_scene14.jpg','fam_scene22.jpg','fam_scene16.jpg','fam_scene17.jpg','fam_scene18.jpg','fam_scene19.jpg','fam_scene14.jpg','fam_scene5.jpg','fam_scene6.jpg','fam_scene7.jpg','fam_scene8.jpg','fam_scene23.jpg','fam_scene9.jpg','fam_scene10.jpg','fam_scene11.jpg','fam_scene12.jpg','fam_scene15.jpg','fam_scene15.jpg','fam_scene15.jpg','fam_scene15.jpg'],
		animalItemStims:  ['animal1.jpg','animal11.jpg','animal4.jpg','animal4.jpg','animal4.jpg','animal4.jpg','animal12.jpg','animal1.jpg','animal5.jpg','animal1.jpg','animal5.jpg','animal1.jpg','animal5.jpg','animal13.jpg','animal7.jpg','animal8.jpg','animal9.jpg','animal10.jpg','animal5.jpg','animal2.jpg','animal2.jpg','animal2.jpg','animal2.jpg','animal14.jpg','animal3.jpg','animal3.jpg','animal3.jpg','animal3.jpg','animal6.jpg','animal6.jpg','animal6.jpg','animal6.jpg'],
		animalSceneStims: ['cart_scene1.jpg','cart_scene20.jpg','cart_scene13.jpg','cart_scene13.jpg','cart_scene13.jpg','cart_scene13.jpg','cart_scene21.jpg','cart_scene2.jpg','cart_scene14.jpg','cart_scene3.jpg','cart_scene14.jpg','cart_scene4.jpg','cart_scene14.jpg','cart_scene22.jpg','cart_scene16.jpg','cart_scene17.jpg','cart_scene18.jpg','cart_scene19.jpg','cart_scene14.jpg','cart_scene5.jpg','cart_scene6.jpg','cart_scene7.jpg','cart_scene8.jpg','cart_scene23.jpg','cart_scene9.jpg','cart_scene10.jpg','cart_scene11.jpg','cart_scene12.jpg','cart_scene15.jpg','cart_scene15.jpg','cart_scene15.jpg','cart_scene15.jpg'],
		toolItemStims:    ['tool1.jpg','tool11.jpg','tool4.jpg','tool4.jpg','tool4.jpg','tool4.jpg','tool12.jpg','tool1.jpg','tool5.jpg','tool1.jpg','tool5.jpg','tool1.jpg','tool5.jpg','tool13.jpg','tool7.jpg','tool8.jpg','tool9.jpg','tool10.jpg','tool5.jpg','tool2.jpg','tool2.jpg','tool2.jpg','tool2.jpg','tool14.jpg','tool3.jpg','tool3.jpg','tool3.jpg','tool3.jpg','tool6.jpg','tool6.jpg','tool6.jpg','tool6.jpg'],
		toolSceneStims:   ['ind_scene1.jpg','ind_scene20.jpg','ind_scene13.jpg','ind_scene13.jpg','ind_scene13.jpg','ind_scene13.jpg','ind_scene21.jpg','ind_scene2.jpg','ind_scene14.jpg','ind_scene3.jpg','ind_scene14.jpg','ind_scene4.jpg','ind_scene14.jpg','ind_scene22.jpg','ind_scene16.jpg','ind_scene17.jpg','ind_scene18.jpg','ind_scene19.jpg','ind_scene14.jpg','ind_scene5.jpg','ind_scene6.jpg','ind_scene7.jpg','ind_scene8.jpg','ind_scene23.jpg','ind_scene9.jpg','ind_scene10.jpg','ind_scene11.jpg','ind_scene12.jpg','ind_scene15.jpg','ind_scene15.jpg','ind_scene15.jpg','ind_scene15.jpg'],
		idx_wnsess_full:  [4,5,6,16,17,18,26,27,28,36,37,38,48,49,50,58,59,60,68,69,70,80,81,82,90,91,92]
	},
	{
		group: 4,
		label:            ['AC1','F1_wnsession','F1_wnsession','F1_wnsession','F1_wnsession','R1_acrday','F2_acrday','WNC_wnsession','WNC_wnsession','WNC_wnsession','WNC_wnsession','R1_acrday','F2_acrday','AC2','R1_acrday','F2_acrday','R1_acrday','F2_acrday','AC3','R2_acrsession','R2_acrsession','R2_acrsession','R2_acrsession','R3_wnsession','R3_wnsession','R3_wnsession','R3_wnsession','AC4','F3_acrsession','F3_acrsession','F3_acrsession','F3_acrsession'],
		condition:        ['acr','fan','fan','fan','fan','rep','fan','wnc','wnc','wnc','wnc','rep','fan','acr','rep','fan','rep','fan','acr','rep','rep','rep','rep','rep','rep','rep','rep','acr','fan','fan','fan','fan'],
		pairNum:          [1,1,1,1,1,1,2,1,2,3,4,1,2,2,1,2,1,2,3,2,2,2,2,3,3,3,3,4,3,3,3,3],
		numWithin:        [1,1,2,3,4,1,1,1,2,3,4,2,2,2,3,3,4,4,3,1,2,3,4,1,2,3,4,4,1,2,3,4],
		spacingLabel:     [3,1,1,1,1,3,3,1,1,1,1,3,3,3,3,3,3,3,3,2,2,2,2,1,1,1,1,3,2,2,2,2],
		day:              [1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,4,4,5,5,6,6,6,6,7,7,7,7,7,8,8,8,8],
		session:          [1,3,3,3,3,4,1,2,2,2,2,4,1,2,4,1,4,1,4,1,2,3,4,1,1,1,1,3,1,2,3,4],
		itemNum:          [4,14,14,14,14,11,13,8,7,6,5,11,13,3,11,13,11,13,2,10,10,10,10,9,9,9,9,1,12,12,12,12],
		sceneNum:         [4,23,22,21,20,11,19,8,7,6,5,11,18,3,11,17,11,16,2,10,10,10,10,9,9,9,9,1,15,14,13,12],
		tocaItemStims:    ['toca4.jpg','toca14.jpg','toca14.jpg','toca14.jpg','toca14.jpg','toca11.jpg','toca13.jpg','toca8.jpg','toca7.jpg','toca6.jpg','toca5.jpg','toca11.jpg','toca13.jpg','toca3.jpg','toca11.jpg','toca13.jpg','toca11.jpg','toca13.jpg','toca2.jpg','toca10.jpg','toca10.jpg','toca10.jpg','toca10.jpg','toca9.jpg','toca9.jpg','toca9.jpg','toca9.jpg','toca1.jpg','toca12.jpg','toca12.jpg','toca12.jpg','toca12.jpg'],
		tocaSceneStims:   ['fam_scene4.jpg','fam_scene23.jpg','fam_scene22.jpg','fam_scene21.jpg','fam_scene20.jpg','fam_scene11.jpg','fam_scene19.jpg','fam_scene8.jpg','fam_scene7.jpg','fam_scene6.jpg','fam_scene5.jpg','fam_scene11.jpg','fam_scene18.jpg','fam_scene3.jpg','fam_scene11.jpg','fam_scene17.jpg','fam_scene11.jpg','fam_scene16.jpg','fam_scene2.jpg','fam_scene10.jpg','fam_scene10.jpg','fam_scene10.jpg','fam_scene10.jpg','fam_scene9.jpg','fam_scene9.jpg','fam_scene9.jpg','fam_scene9.jpg','fam_scene1.jpg','fam_scene15.jpg','fam_scene14.jpg','fam_scene13.jpg','fam_scene12.jpg'],
		animalItemStims:  ['animal4.jpg','animal14.jpg','animal14.jpg','animal14.jpg','animal14.jpg','animal11.jpg','animal13.jpg','animal8.jpg','animal7.jpg','animal6.jpg','animal5.jpg','animal11.jpg','animal13.jpg','animal3.jpg','animal11.jpg','animal13.jpg','animal11.jpg','animal13.jpg','animal2.jpg','animal10.jpg','animal10.jpg','animal10.jpg','animal10.jpg','animal9.jpg','animal9.jpg','animal9.jpg','animal9.jpg','animal1.jpg','animal12.jpg','animal12.jpg','animal12.jpg','animal12.jpg'],
		animalSceneStims: ['cart_scene4.jpg','cart_scene23.jpg','cart_scene22.jpg','cart_scene21.jpg','cart_scene20.jpg','cart_scene11.jpg','cart_scene19.jpg','cart_scene8.jpg','cart_scene7.jpg','cart_scene6.jpg','cart_scene5.jpg','cart_scene11.jpg','cart_scene18.jpg','cart_scene3.jpg','cart_scene11.jpg','cart_scene17.jpg','cart_scene11.jpg','cart_scene16.jpg','cart_scene2.jpg','cart_scene10.jpg','cart_scene10.jpg','cart_scene10.jpg','cart_scene10.jpg','cart_scene9.jpg','cart_scene9.jpg','cart_scene9.jpg','cart_scene9.jpg','cart_scene1.jpg','cart_scene15.jpg','cart_scene14.jpg','cart_scene13.jpg','cart_scene12.jpg'],
		toolItemStims:    ['tool4.jpg','tool14.jpg','tool14.jpg','tool14.jpg','tool14.jpg','tool11.jpg','tool13.jpg','tool8.jpg','tool7.jpg','tool6.jpg','tool5.jpg','tool11.jpg','tool13.jpg','tool3.jpg','tool11.jpg','tool13.jpg','tool11.jpg','tool13.jpg','tool2.jpg','tool10.jpg','tool10.jpg','tool10.jpg','tool10.jpg','tool9.jpg','tool9.jpg','tool9.jpg','tool9.jpg','tool1.jpg','tool12.jpg','tool12.jpg','tool12.jpg','tool12.jpg'],
		toolSceneStims:   ['ind_scene4.jpg','ind_scene23.jpg','ind_scene22.jpg','ind_scene21.jpg','ind_scene20.jpg','ind_scene11.jpg','ind_scene19.jpg','ind_scene8.jpg','ind_scene7.jpg','ind_scene6.jpg','ind_scene5.jpg','ind_scene11.jpg','ind_scene18.jpg','ind_scene3.jpg','ind_scene11.jpg','ind_scene17.jpg','ind_scene11.jpg','ind_scene16.jpg','ind_scene2.jpg','ind_scene10.jpg','ind_scene10.jpg','ind_scene10.jpg','ind_scene10.jpg','ind_scene9.jpg','ind_scene9.jpg','ind_scene9.jpg','ind_scene9.jpg','ind_scene1.jpg','ind_scene15.jpg','ind_scene14.jpg','ind_scene13.jpg','ind_scene12.jpg'],
		idx_wnsess_full:  [3,4,5,9,10,11,25,26,27,35,36,37,41,42,43,57,58,59,67,68,69,73,74,75,89,90,91]
	},
	{
		group: 5,
		label:            ['F1_acrsession','F1_acrsession','F1_acrsession','F1_acrsession','R1_acrsession','R1_acrsession','R1_acrsession','R1_acrsession','F2_wnsession','F2_wnsession','F2_wnsession','F2_wnsession','AC1','AC2','R2_wnsession','R2_wnsession','R2_wnsession','R2_wnsession','R3_acrday','AC3','F3_acrday','R3_acrday','AC4','F3_acrday','R3_acrday','F3_acrday','R3_acrday','WNC_wnsession','WNC_wnsession','WNC_wnsession','WNC_wnsession','F3_acrday'],
		condition:        ['fan','fan','fan','fan','rep','rep','rep','rep','fan','fan','fan','fan','acr','acr','rep','rep','rep','rep','rep','acr','fan','rep','acr','fan','rep','fan','rep','wnc','wnc','wnc','wnc','fan'],
		pairNum:          [1,1,1,1,1,1,1,1,2,2,2,2,1,2,2,2,2,2,3,3,3,3,4,3,3,3,3,1,2,3,4,3],
		numWithin:        [1,2,3,4,1,2,3,4,1,2,3,4,1,2,1,2,3,4,1,3,1,2,4,2,3,3,4,1,2,3,4,4],
		spacingLabel:     [2,2,2,2,2,2,2,2,1,1,1,1,3,3,1,1,1,1,3,3,3,3,3,3,3,3,3,1,1,1,1,3],
		day:              [1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,6,6,6,7,7,8,8,8,8,8,8],
		session:          [1,2,3,4,1,2,3,4,2,2,2,2,4,1,3,3,3,3,1,2,4,1,3,4,1,4,1,3,3,3,3,4],
		itemNum:          [14,14,14,14,11,11,11,11,13,13,13,13,4,3,10,10,10,10,9,2,12,9,1,12,9,12,9,8,7,6,5,12],
		sceneNum:         [23,22,21,20,11,11,11,11,19,18,17,16,4,3,10,10,10,10,9,2,15,9,1,14,9,13,9,8,7,6,5,12],
		tocaItemStims:    ['toca14.jpg','toca14.jpg','toca14.jpg','toca14.jpg','toca11.jpg','toca11.jpg','toca11.jpg','toca11.jpg','toca13.jpg','toca13.jpg','toca13.jpg','toca13.jpg','toca4.jpg','toca3.jpg','toca10.jpg','toca10.jpg','toca10.jpg','toca10.jpg','toca9.jpg','toca2.jpg','toca12.jpg','toca9.jpg','toca1.jpg','toca12.jpg','toca9.jpg','toca12.jpg','toca9.jpg','toca8.jpg','toca7.jpg','toca6.jpg','toca5.jpg','toca12.jpg'],
		tocaSceneStims:   ['fam_scene23.jpg','fam_scene22.jpg','fam_scene21.jpg','fam_scene20.jpg','fam_scene11.jpg','fam_scene11.jpg','fam_scene11.jpg','fam_scene11.jpg','fam_scene19.jpg','fam_scene18.jpg','fam_scene17.jpg','fam_scene16.jpg','fam_scene4.jpg','fam_scene3.jpg','fam_scene10.jpg','fam_scene10.jpg','fam_scene10.jpg','fam_scene10.jpg','fam_scene9.jpg','fam_scene2.jpg','fam_scene15.jpg','fam_scene9.jpg','fam_scene1.jpg','fam_scene14.jpg','fam_scene9.jpg','fam_scene13.jpg','fam_scene9.jpg','fam_scene8.jpg','fam_scene7.jpg','fam_scene6.jpg','fam_scene5.jpg','fam_scene12.jpg'],
		animalItemStims:  ['animal14.jpg','animal14.jpg','animal14.jpg','animal14.jpg','animal11.jpg','animal11.jpg','animal11.jpg','animal11.jpg','animal13.jpg','animal13.jpg','animal13.jpg','animal13.jpg','animal4.jpg','animal3.jpg','animal10.jpg','animal10.jpg','animal10.jpg','animal10.jpg','animal9.jpg','animal2.jpg','animal12.jpg','animal9.jpg','animal1.jpg','animal12.jpg','animal9.jpg','animal12.jpg','animal9.jpg','animal8.jpg','animal7.jpg','animal6.jpg','animal5.jpg','animal12.jpg'],
		animalSceneStims: ['cart_scene23.jpg','cart_scene22.jpg','cart_scene21.jpg','cart_scene20.jpg','cart_scene11.jpg','cart_scene11.jpg','cart_scene11.jpg','cart_scene11.jpg','cart_scene19.jpg','cart_scene18.jpg','cart_scene17.jpg','cart_scene16.jpg','cart_scene4.jpg','cart_scene3.jpg','cart_scene10.jpg','cart_scene10.jpg','cart_scene10.jpg','cart_scene10.jpg','cart_scene9.jpg','cart_scene2.jpg','cart_scene15.jpg','cart_scene9.jpg','cart_scene1.jpg','cart_scene14.jpg','cart_scene9.jpg','cart_scene13.jpg','cart_scene9.jpg','cart_scene8.jpg','cart_scene7.jpg','cart_scene6.jpg','cart_scene5.jpg','cart_scene12.jpg'],
		toolItemStims:    ['tool14.jpg','tool14.jpg','tool14.jpg','tool14.jpg','tool11.jpg','tool11.jpg','tool11.jpg','tool11.jpg','tool13.jpg','tool13.jpg','tool13.jpg','tool13.jpg','tool4.jpg','tool3.jpg','tool10.jpg','tool10.jpg','tool10.jpg','tool10.jpg','tool9.jpg','tool2.jpg','tool12.jpg','tool9.jpg','tool1.jpg','tool12.jpg','tool9.jpg','tool12.jpg','tool9.jpg','tool8.jpg','tool7.jpg','tool6.jpg','tool5.jpg','tool12.jpg'],
		toolSceneStims:   ['ind_scene23.jpg','ind_scene22.jpg','ind_scene21.jpg','ind_scene20.jpg','ind_scene11.jpg','ind_scene11.jpg','ind_scene11.jpg','ind_scene11.jpg','ind_scene19.jpg','ind_scene18.jpg','ind_scene17.jpg','ind_scene16.jpg','ind_scene4.jpg','ind_scene3.jpg','ind_scene10.jpg','ind_scene10.jpg','ind_scene10.jpg','ind_scene10.jpg','ind_scene9.jpg','ind_scene2.jpg','ind_scene15.jpg','ind_scene9.jpg','ind_scene1.jpg','ind_scene14.jpg','ind_scene9.jpg','ind_scene13.jpg','ind_scene9.jpg','ind_scene8.jpg','ind_scene7.jpg','ind_scene6.jpg','ind_scene5.jpg','ind_scene12.jpg'],
		idx_wnsess_full:  [10,11,12,16,17,18,29,30,31,42,43,44,48,49,50,61,62,63,74,75,76,80,81,82,93,94,95]
	},
	{
		group: 6,
		label:            ['F1_acrday','AC1','R1_wnsess','R1_wnsess','R1_wnsess','R1_wnsess','AC2','F1_acrday','R2_acrday','F1_acrday','R2_acrday','F1_acrday','R2_acrday','AC3','WNC1_wnsess','WNC1_wnsess','WNC1_wnsess','WNC1_wnsess','R2_acrday','F2_acrsess','F2_acrsess','F2_acrsess','F2_acrsess','AC4','F3_wnsess','F3_wnsess','F3_wnsess','F3_wnsess','R3_acrsess','R3_acrsess','R3_acrsess','R3_acrsess'],
		condition:        ['fan','acr','rep','rep','rep','rep','acr','fan','rep','fan','rep','fan','rep','acr','wnc','wnc','wnc','wnc','rep','fan','fan','fan','fan','acr','fan','fan','fan','fan','rep','rep','rep','rep'],
		pairNum:          [1,1,1,1,1,1,2,1,2,1,2,1,2,3,1,2,3,4,2,2,2,2,2,4,3,3,3,3,3,3,3,3],
		numWithin:        [1,1,1,2,3,4,2,2,1,3,2,4,3,3,1,2,3,4,4,1,2,3,4,4,1,2,3,4,1,2,3,4],
		spacingLabel:     [3,3,1,1,1,1,3,3,3,3,3,3,3,3,1,1,1,1,3,2,2,2,2,3,1,1,1,1,2,2,2,2],
		day:              [1,1,1,1,1,1,2,2,2,3,3,4,4,4,5,5,5,5,5,6,6,6,6,7,7,7,7,7,8,8,8,8],
		session:          [2,3,4,4,4,4,1,2,3,2,3,2,3,4,1,1,1,1,3,1,2,3,4,1,3,3,3,3,1,2,3,4],
		itemNum:          [14,4,11,11,11,11,3,14,10,14,10,14,10,2,8,7,6,5,10,13,13,13,13,1,12,12,12,12,9,9,9,9],
		sceneNum:         [23,4,11,11,11,11,3,22,10,21,10,20,10,2,8,7,6,5,10,19,18,17,16,1,15,14,13,12,9,9,9,9],
		tocaItemStims:    ['toca14.jpg','toca4.jpg','toca11.jpg','toca11.jpg','toca11.jpg','toca11.jpg','toca3.jpg','toca14.jpg','toca10.jpg','toca14.jpg','toca10.jpg','toca14.jpg','toca10.jpg','toca2.jpg','toca8.jpg','toca7.jpg','toca6.jpg','toca5.jpg','toca10.jpg','toca13.jpg','toca13.jpg','toca13.jpg','toca13.jpg','toca1.jpg','toca12.jpg','toca12.jpg','toca12.jpg','toca12.jpg','toca9.jpg','toca9.jpg','toca9.jpg','toca9.jpg'],
		tocaSceneStims:   ['fam_scene23.jpg','fam_scene4.jpg','fam_scene11.jpg','fam_scene11.jpg','fam_scene11.jpg','fam_scene11.jpg','fam_scene3.jpg','fam_scene22.jpg','fam_scene10.jpg','fam_scene21.jpg','fam_scene10.jpg','fam_scene20.jpg','fam_scene10.jpg','fam_scene2.jpg','fam_scene8.jpg','fam_scene7.jpg','fam_scene6.jpg','fam_scene5.jpg','fam_scene10.jpg','fam_scene19.jpg','fam_scene18.jpg','fam_scene17.jpg','fam_scene16.jpg','fam_scene1.jpg','fam_scene15.jpg','fam_scene14.jpg','fam_scene13.jpg','fam_scene12.jpg','fam_scene9.jpg','fam_scene9.jpg','fam_scene9.jpg','fam_scene9.jpg'],
		animalItemStims:  ['animal14.jpg','animal4.jpg','animal11.jpg','animal11.jpg','animal11.jpg','animal11.jpg','animal3.jpg','animal14.jpg','animal10.jpg','animal14.jpg','animal10.jpg','animal14.jpg','animal10.jpg','animal2.jpg','animal8.jpg','animal7.jpg','animal6.jpg','animal5.jpg','animal10.jpg','animal13.jpg','animal13.jpg','animal13.jpg','animal13.jpg','animal1.jpg','animal12.jpg','animal12.jpg','animal12.jpg','animal12.jpg','animal9.jpg','animal9.jpg','animal9.jpg','animal9.jpg'],
		animalSceneStims: ['cart_scene23.jpg','cart_scene4.jpg','cart_scene11.jpg','cart_scene11.jpg','cart_scene11.jpg','cart_scene11.jpg','cart_scene3.jpg','cart_scene22.jpg','cart_scene10.jpg','cart_scene21.jpg','cart_scene10.jpg','cart_scene20.jpg','cart_scene10.jpg','cart_scene2.jpg','cart_scene8.jpg','cart_scene7.jpg','cart_scene6.jpg','cart_scene5.jpg','cart_scene10.jpg','cart_scene19.jpg','cart_scene18.jpg','cart_scene17.jpg','cart_scene16.jpg','cart_scene1.jpg','cart_scene15.jpg','cart_scene14.jpg','cart_scene13.jpg','cart_scene12.jpg','cart_scene9.jpg','cart_scene9.jpg','cart_scene9.jpg','cart_scene9.jpg'],
		toolItemStims:    ['tool14.jpg','tool4.jpg','tool11.jpg','tool11.jpg','tool11.jpg','tool11.jpg','tool3.jpg','tool14.jpg','tool10.jpg','tool14.jpg','tool10.jpg','tool14.jpg','tool10.jpg','tool2.jpg','tool8.jpg','tool7.jpg','tool6.jpg','tool5.jpg','tool10.jpg','tool13.jpg','tool13.jpg','tool13.jpg','tool13.jpg','tool1.jpg','tool12.jpg','tool12.jpg','tool12.jpg','tool12.jpg','tool9.jpg','tool9.jpg','tool9.jpg','tool9.jpg'],
		toolSceneStims:   ['ind_scene23.jpg','ind_scene4.jpg','ind_scene11.jpg','ind_scene11.jpg','ind_scene11.jpg','ind_scene11.jpg','ind_scene3.jpg','ind_scene22.jpg','ind_scene10.jpg','ind_scene21.jpg','ind_scene10.jpg','ind_scene20.jpg','ind_scene10.jpg','ind_scene2.jpg','ind_scene8.jpg','ind_scene7.jpg','ind_scene6.jpg','ind_scene5.jpg','ind_scene10.jpg','ind_scene19.jpg','ind_scene18.jpg','ind_scene17.jpg','ind_scene16.jpg','ind_scene1.jpg','ind_scene15.jpg','ind_scene14.jpg','ind_scene13.jpg','ind_scene12.jpg','ind_scene9.jpg','ind_scene9.jpg','ind_scene9.jpg','ind_scene9.jpg'],
		idx_wnsess_full:  [4,5,6,16,17,18,26,27,28,36,37,38,48,49,50,58,59,60,68,69,70,80,81,82,90,91,92]
	}
];

var item_mem_stimlist = [
	{
		group: 1,
		oldnewlabel:       [0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
		condition:         [2,4,3,2,3,2,0,1,1,4,0,1,0,0,0,0,2,3,3,0,4,4,1,4,0,4,0,0,0,3,0,2,0,0,1,3,4,0,3,1,0,4,0,0,4,0,2,0,1,1,3,3,1,2,2,3,4,4,3,2,0,3,4],
		categ:             [3,3,2,3,3,1,2,1,2,1,2,3,1,3,3,2,3,1,3,3,3,2,2,3,1,1,1,2,3,1,3,1,1,2,3,2,2,2,3,3,1,2,3,2,2,1,2,1,2,1,3,2,1,1,2,2,3,1,1,2,3,1,1],
		stims:             ['tool4.jpg','tool12.jpg','animal8.jpg','tool6.jpg','tool7.jpg','toca6.jpg','animal20.jpg','toca3.jpg','animal2.jpg','toca11.jpg','animal19.jpg','tool2.jpg','toca17.jpg','tool18.jpg','tool20.jpg','animal16.jpg','tool5.jpg','toca7.jpg','tool10.jpg','tool16.jpg','tool14.jpg','animal14.jpg','animal3.jpg','tool13.jpg','toca19.jpg','toca14.jpg','toca18.jpg','animal21.jpg','tool21.jpg','toca8.jpg','tool17.jpg','toca5.jpg','toca20.jpg','animal18.jpg','tool1.jpg','animal7.jpg','animal11.jpg','animal17.jpg','tool9.jpg','tool3.jpg','toca21.jpg','animal13.jpg','tool19.jpg','animal15.jpg','animal12.jpg','toca15.jpg','animal5.jpg','toca16.jpg','animal1.jpg','toca1.jpg','tool8.jpg','animal9.jpg','toca2.jpg','toca4.jpg','animal4.jpg','animal10.jpg','tool11.jpg','toca13.jpg','toca9.jpg','animal6.jpg','tool15.jpg','toca10.jpg','toca12.jpg']
	},
	{
		group: 2,
		oldnewlabel:       [0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0],
		condition:         [3,2,2,0,4,0,1,1,0,3,4,1,0,2,2,3,0,0,0,3,3,3,0,4,2,3,4,0,3,0,0,1,0,0,3,4,2,4,1,2,4,0,3,0,2,3,0,0,1,1,4,4,0,2,4,3,0,1,1,0,0,4,4],
		categ:             [2,3,3,1,2,1,2,1,2,2,2,1,3,1,2,1,1,2,3,1,2,3,1,1,1,3,2,1,2,2,2,3,2,2,3,3,1,1,1,2,2,1,1,3,3,3,3,3,3,3,3,1,1,2,3,1,2,2,2,3,3,3,1],
		stims:             ['animal8.jpg','tool10.jpg','tool9.jpg','toca20.jpg','animal2.jpg','toca16.jpg','animal14.jpg','toca14.jpg','animal15.jpg','animal5.jpg','animal4.jpg','toca12.jpg','tool18.jpg','toca9.jpg','animal10.jpg','toca6.jpg','toca21.jpg','animal16.jpg','tool20.jpg','toca8.jpg','animal6.jpg','tool8.jpg','toca15.jpg','toca2.jpg','toca11.jpg','tool5.jpg','animal3.jpg','toca19.jpg','animal7.jpg','animal17.jpg','animal19.jpg','tool14.jpg','animal21.jpg','animal18.jpg','tool7.jpg','tool1.jpg','toca10.jpg','toca1.jpg','toca13.jpg','animal9.jpg','animal1.jpg','toca17.jpg','toca7.jpg','tool16.jpg','tool11.jpg','tool6.jpg','tool21.jpg','tool19.jpg','tool13.jpg','tool12.jpg','tool3.jpg','toca3.jpg','toca18.jpg','animal11.jpg','tool4.jpg','toca5.jpg','animal20.jpg','animal12.jpg','animal13.jpg','tool15.jpg','tool17.jpg','tool2.jpg','toca4.jpg']
	}
];



var pair_mem_stimlist = [
	{
		group: 1,
		correctkey:      [1,2,1,2,1,2,2,2,1,2,2,2,1,1,2,2,1,2,1,1,1,2,2,2,2,2,1,2,1,1,1,1,1,2,1,2,1,2,2],
		stimNum:         [15,7,24,33,14,21,29,27,2,11,15,4,30,1,38,3,12,28,31,29,3,18,1,16,37,17,20,28,19,16,8,34,27,6,2,5,32,14,25],
		categ:           [2,1,2,3,2,2,3,3,1,1,2,1,3,1,3,1,1,3,3,3,1,2,1,2,3,2,2,3,2,2,1,3,3,1,1,1,3,2,2],
		condition:       [1,3,4,3,1,3,1,1,1,4,1,2,2,1,4,1,4,1,2,1,1,2,1,1,4,2,3,1,2,1,3,3,1,2,1,2,2,1,4],
		fanLabel:        [4,0,0,0,4,0,1,4,1,0,1,0,0,1,0,4,0,4,0,4,1,0,4,4,0,0,0,1,0,1,0,0,1,0,4,0,0,1,0],
		cueStims:        ['animal2.jpg','toca7.jpg','animal11.jpg','tool7.jpg','animal1.jpg','animal8.jpg','tool3.jpg','tool1.jpg','toca2.jpg','toca11.jpg','animal2.jpg','toca4.jpg','tool4.jpg','toca1.jpg','tool12.jpg','toca3.jpg','toca12.jpg','tool2.jpg','tool5.jpg','tool3.jpg','toca3.jpg','animal5.jpg','toca1.jpg','animal3.jpg','tool11.jpg','animal4.jpg','animal7.jpg','tool2.jpg','animal6.jpg','animal3.jpg','toca8.jpg','tool8.jpg','tool1.jpg','toca6.jpg','toca2.jpg','toca5.jpg','tool6.jpg','animal1.jpg','animal12.jpg'],
		leftStims:       ['cart_scene8.jpg','fam_scene30.jpg','cart_scene20.jpg','ind_scene30.jpg','cart_scene4.jpg','cart_scene31.jpg','ind_scene26.jpg','ind_scene34.jpg','fam_scene5.jpg','fam_scene32.jpg','cart_scene25.jpg','fam_scene27.jpg','ind_scene13.jpg','fam_scene1.jpg','ind_scene33.jpg','fam_scene36.jpg','fam_scene21.jpg','ind_scene35.jpg','ind_scene14.jpg','ind_scene12.jpg','fam_scene9.jpg','cart_scene28.jpg','fam_scene34.jpg','cart_scene36.jpg','ind_scene32.jpg','cart_scene27.jpg','cart_scene16.jpg','ind_scene25.jpg','cart_scene15.jpg','cart_scene9.jpg','fam_scene17.jpg','ind_scene17.jpg','ind_scene1.jpg','fam_scene29.jpg','fam_scene8.jpg','fam_scene28.jpg','ind_scene15.jpg','cart_scene24.jpg','cart_scene33.jpg'],
		rightStims:     ['cart_scene35.jpg','fam_scene16.jpg','cart_scene32.jpg','ind_scene16.jpg','cart_scene34.jpg','cart_scene17.jpg','ind_scene9.jpg','ind_scene4.jpg','fam_scene25.jpg','fam_scene20.jpg','cart_scene5.jpg','fam_scene13.jpg','ind_scene27.jpg','fam_scene24.jpg','ind_scene21.jpg','fam_scene12.jpg','fam_scene33.jpg','ind_scene8.jpg','ind_scene28.jpg','ind_scene36.jpg','fam_scene26.jpg','cart_scene14.jpg','fam_scene4.jpg','cart_scene12.jpg','ind_scene20.jpg','cart_scene13.jpg','cart_scene30.jpg','ind_scene5.jpg','cart_scene29.jpg','cart_scene26.jpg','fam_scene31.jpg','ind_scene31.jpg','ind_scene24.jpg','fam_scene15.jpg','fam_scene35.jpg','fam_scene14.jpg','ind_scene29.jpg','cart_scene1.jpg','cart_scene21.jpg']
	},
	{
		group: 2,
		correctkey:      [2,1,1,2,1,2,1,1,1,1,2,2,1,2,1,2,2,1,1,1,2,1,1,2,1,2,2,2,2,2,1,1,2,2,1,2,2,2,2],
		stimNum:         [16,15,28,3,18,1,30,6,5,14,2,27,15,37,20,24,25,34,1,11,19,3,21,33,28,7,14,12,17,38,29,32,16,4,8,31,27,29,2],
		categ:           [2,2,3,1,2,1,3,1,1,2,1,3,2,3,2,2,2,3,1,1,2,1,2,3,3,1,2,1,2,3,3,3,2,1,1,3,3,3,1],
		condition:       [1,1,1,1,2,1,2,2,2,1,1,1,1,4,3,4,4,3,1,4,2,1,3,3,1,3,1,4,2,4,1,2,1,2,3,2,1,1,1],
		fanLabel:        [4,1,4,1,0,4,0,0,0,4,1,4,4,0,0,0,0,0,1,0,0,4,0,0,1,0,1,0,0,0,4,0,1,0,0,0,1,1,4],
		cueStims:        ['animal12.jpg','animal13.jpg','tool13.jpg','toca12.jpg','animal10.jpg','toca14.jpg','tool11.jpg','toca9.jpg','toca10.jpg','animal14.jpg','toca13.jpg','tool14.jpg','animal13.jpg','tool4.jpg','animal8.jpg','animal4.jpg','animal3.jpg','tool7.jpg','toca14.jpg','toca4.jpg','animal9.jpg','toca12.jpg','animal7.jpg','tool8.jpg','tool13.jpg','toca8.jpg','animal14.jpg','toca3.jpg','animal11.jpg','tool3.jpg','tool12.jpg','tool9.jpg','animal12.jpg','toca11.jpg','toca7.jpg','tool10.jpg','tool14.jpg','tool12.jpg','toca13.jpg'],
		leftStims:       ['cart_scene36.jpg','cart_scene19.jpg','ind_scene16.jpg','fam_scene26.jpg','cart_scene10.jpg','fam_scene34.jpg','ind_scene11.jpg','fam_scene9.jpg','fam_scene10.jpg','cart_scene20.jpg','fam_scene25.jpg','ind_scene34.jpg','cart_scene16.jpg','ind_scene32.jpg','cart_scene8.jpg','cart_scene32.jpg','cart_scene33.jpg','ind_scene7.jpg','fam_scene23.jpg','fam_scene4.jpg','cart_scene29.jpg','fam_scene12.jpg','cart_scene7.jpg','ind_scene30.jpg','ind_scene19.jpg','fam_scene30.jpg','cart_scene24.jpg','fam_scene33.jpg','cart_scene27.jpg','ind_scene33.jpg','ind_scene12.jpg','ind_scene9.jpg','cart_scene26.jpg','fam_scene27.jpg','fam_scene7.jpg','ind_scene28.jpg','ind_scene24.jpg','ind_scene26.jpg','fam_scene35.jpg'],
		rightStims:     ['cart_scene12.jpg','cart_scene25.jpg','ind_scene35.jpg','fam_scene15.jpg','cart_scene28.jpg','fam_scene20.jpg','ind_scene27.jpg','fam_scene29.jpg','fam_scene28.jpg','cart_scene34.jpg','fam_scene19.jpg','ind_scene20.jpg','cart_scene35.jpg','ind_scene4.jpg','cart_scene30.jpg','cart_scene4.jpg','cart_scene3.jpg','ind_scene31.jpg','fam_scene24.jpg','fam_scene32.jpg','cart_scene9.jpg','fam_scene36.jpg','cart_scene31.jpg','ind_scene8.jpg','ind_scene25.jpg','fam_scene8.jpg','cart_scene23.jpg','fam_scene3.jpg','cart_scene11.jpg','ind_scene3.jpg','ind_scene36.jpg','ind_scene29.jpg','cart_scene15.jpg','fam_scene11.jpg','fam_scene31.jpg','ind_scene10.jpg','ind_scene23.jpg','ind_scene15.jpg','fam_scene16.jpg']
	}
];



